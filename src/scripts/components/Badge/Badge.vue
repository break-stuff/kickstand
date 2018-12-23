<template>
    <span :class="['badge', variation, {'hollow': hollow}, {'pill': pill}]">
        <slot />
    </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Badge extends Vue {
    // props
    @Prop(String)
    private variation!: string;

    @Prop(Boolean)
    private hollow!: boolean;

    @Prop(Boolean)
    private pill!: boolean;

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