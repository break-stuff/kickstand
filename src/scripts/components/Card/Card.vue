<template>
    <div :class="['card', `image-${imagePosition}`]">
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
    // props
    @Prop({ default: 'top' }) 
    private imagePosition!: string;

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