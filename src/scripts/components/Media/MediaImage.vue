<template>
    <div class="media-image">
        <picture :class="['media-picture', {'lazy-image': lazy}]">
            <source v-if="imgSourceList" :srcset="imgSourceList.srcset" :media="imgSourceList.media">
            <img :class="['media-img', {'cover': cover}]" :src="imgSource" :alt="altText" :srcset="imgSourceSet">
        </picture>
    </div>
</template>

<script lang="ts">
// @ts-ignore
import objectFitImages from 'object-fit-images';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MediaImage extends Vue {
    // props
    @Prop(String)
    private source!: string;

    @Prop(String)
    private sourceSet!: string;

    @Prop(String)
    private sourceList!: Array<{ srcset: string; media: string }>;

    @Prop(String)
    private altText!: string;

    @Prop({default: '300'})
    private threshold!: string;

    @Prop(Boolean)
    private lazy!: boolean;

    @Prop(Boolean)
    private cover!: boolean;

    // data
    observer: any;
    isLoaded: boolean = false;

    // computed
    get imgSourceList() {
        return (!this.lazy || this.isLoaded) ? this.sourceList : null;
    }

    get imgSource() {
        return (!this.lazy || this.isLoaded) ? this.source : null;
    }

    get imgSourceSet() {
        return (!this.lazy || this.isLoaded) ? this.sourceSet : null;
    }

    // methods
    lazyLoadImage() {
        this.observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    const { isIntersecting } = entry;
                    if (isIntersecting) {
                        this.isLoaded = true;
                        this.observer = this.observer.disconnect();
                    }
                });
            },
            {
                rootMargin: `${this.threshold}px 0px`
            }
        );

        this.observer.observe(this.$el);
    }

    setObjectFitListener() {
        const images = document.querySelectorAll('img.cover');
        objectFitImages(images);
    }


    // Lifecycle hooks
    created() {}
    mounted() {
        this.lazyLoadImage();
        this.setObjectFitListener();
    }
    updated() {}
    destroyed() {}
}
</script>