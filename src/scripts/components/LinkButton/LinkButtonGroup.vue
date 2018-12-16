<template>
    <div :class="['link-button-group', {'column': column}, {'expand': expand}]">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LinkButtonGroup extends Vue {
    // props
    @Prop(Boolean) 
    private column!: boolean;

    @Prop(Boolean) 
    private expand!: boolean;

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