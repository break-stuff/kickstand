<template>
    <button :class="['button', `button--${variation}`, {'button--hollow': hollow}]">
        <slot />
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LinkButton extends Vue {
    // props
    @Prop(String)
    private variation!: string;

    @Prop(Boolean)
    private hollow!: boolean;

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