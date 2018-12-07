<template>
    <transition name="fade">
        <div
            v-if="show"
            :class="['alert', alertVariation, {'fill': fill}, position, {'dismissible': dismissible}]"
        >
            <i class="alert-icon" v-if="alertIcon" :class="alertIcon"></i>
            <p class="alert-text">
                <slot/>
            </p>
            <button class="alert-dismiss" v-if="dismissible" @click="dismiss">
                <span :class="['alert-dismiss-text', {'sr-only': dismissIcon}]">{{ dismissText }}</span>
                <i v-if="dismissIcon" :class="['alert-dismiss-icon', dismissIcon]"></i>
            </button>
        </div>
    </transition>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Alert extends Vue {
    // props
    @Prop({ default: 'primary' })
    private alertVariation!: string;

    @Prop(Boolean)
    private fill!: boolean;

    @Prop({ default: true })
    private show!: boolean;

    @Prop({ default: false })
    private dismissible!: boolean;

    @Prop({ default: 'close' })
    private dismissText!: string;

    @Prop(String)
    private dismissIcon!: string;

    @Prop(String)
    private alertIcon!: string;

    @Prop(String)
    private position!: string;

    @Prop(Function)
    private onDismiss!: () => void;

    // data

    // computed

    // methods
    dismiss() {
        this.show = false;
    }

    // Lifecycle hooks
    created() {}
    mounted() {}
    updated() {}
    destroyed() {}
}
</script>