<template>
    <div :class="['card-group', gutters ? 'gutters' : 'no-gutters']">
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CardGroup extends Vue {
    // props
    @Prop(Boolean) 
    private gutters!: boolean;

    // data

    // computed
    showGutters() {
        return this.gutters ? 'gutters' : 'no-gutters';
    }

    // methods

    // Lifecycle hooks
    created() {}
    mounted() {}
    updated() {}
    destroyed() {}
}
</script>