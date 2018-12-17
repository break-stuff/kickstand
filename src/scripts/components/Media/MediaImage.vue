<template>
    <div class="media-image">
        <picture :class="['image', {'lazy-image': lazy}, {'cover': cover}]">
            <source v-if="sourceList" :srcset="sourceList.srcset" :media="sourceList.media">
            <img v-if="!lazy" class="image-tag" :src="source" :alt="altText" :srcset="sourceSet">
        </picture>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import madiaService from './mediaService';
import mediaService from './mediaService';

@Component
export default class MediaImage extends Vue {
    // props
    @Prop(String)
    private source!: string;

    @Prop(String)
    private sourceSet!: string;

    @Prop(String)
    private sourceList!: Array<{srcset: string, media: string}>;

    @Prop(String)
    private altText!: string;

    @Prop(Boolean)
    private lazy!: boolean;

    @Prop(Boolean)
    private cover!: boolean;

    // data

    // computed

    // methods

    // Lifecycle hooks
    created() {
        mediaService.setLazyLoadImageObserver(this.sourceList, this.sourceSet, this.source);
        mediaService.setObjectFitListener();
    }
    mounted() {}
    updated() {}
    destroyed() {}
}
</script>