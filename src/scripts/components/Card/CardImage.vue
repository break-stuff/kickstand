<template>
    <media-image 
        class="card-image"
        :source="source" 
        :source-set="sourceSet"
        :source-list="sourceList"
        :alt-text="altText"
        :lazy="lazy"
        :cover="cover" 
        />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { MediaImage } from '../Media';

@Component({
    components: {
        MediaImage
    }
})
export default class CardImage extends MediaImage {
    // props

    // data

    // computed

    // methods

    // Lifecycle hooks
    created() {}
    mounted() {}
    updated() {}
    destroyed() {}
}
</script>