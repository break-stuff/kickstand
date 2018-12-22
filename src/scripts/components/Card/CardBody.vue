<template>
    <div :class="['card-body', `align-${position}`]">
        <slot />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CardBody extends Vue {
    // props
    @Prop({default: 'middle'}) 
    private position!: string;

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