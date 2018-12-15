<template>
    <nav class="breadcrumbs">
        <slot>
            <breadcrumb-item v-for="link in links" :key="link" :url="link.url">{{link.text}}</breadcrumb-item>
        </slot>
    </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BreadcrumbItem from './BreadcrumbItem.vue';

@Component({
    components: {
        BreadcrumbItem
    }
})
export default class Breadcrumbs extends Vue {
    // props
    @Prop(Array) 
    private links!: Array<{url: string, text: string}>;

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