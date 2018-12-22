<template>
    <div :class="['button-group', {'column': column}, {'expanded': expanded}]">
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