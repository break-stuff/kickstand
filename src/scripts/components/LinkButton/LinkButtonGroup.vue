<template>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LinkButtonGroup extends Vue {
    // props
    @Prop() 
    private title!: string;

    // data
    message = 'Hello';

    // computed
    get reverseMessage() {
        return this.message
            .split('')
            .reverse()
            .join('');
    }

    // methods
    changeMessage() {
         this.message = 'Good bye';
    }

    // Lifecycle hooks
    created() {}
    mounted() {}
    updated() {}
    destroyed() {}
}
</script>