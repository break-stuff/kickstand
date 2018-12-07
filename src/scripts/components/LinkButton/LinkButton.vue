<template>
    <button :class="['button', variation, {'hollow': hollow}, size, {'expanded': expanded}]">
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

    @Prop(String)
    private size!: string;

    @Prop(Boolean)
    private hollow!: boolean;

    @Prop(Boolean)
    private expanded!: boolean;

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