<template>
    <span v-if="active" class="breadcrumb-item active" aria-current="page">
        <slot />
    </span>
    <a v-else :href="url" class="breadcrumb-item">
        <slot />
    </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class BreadcrumbItem extends Vue {
    // props
    @Prop(String) 
    private url!: string;

    @Prop(Boolean) 
    private active!: boolean;

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