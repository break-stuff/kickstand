<template>
    <div id="app">
        <button class="button button--primary" @click="toggleAlert">Toggle Alert</button>
        <br>
        <br>
        <br>
        <alert
            v-for="color in variations"
            :key="color"
            fill
            :dismissible="true"
            alert-icon="fas fa-exclamation-triangle"
            dismiss-icon="fas fa-times"
            :alert-variation="color"
        >This is just a test for {{color}}!</alert>
        <alert
            :dismissible="true"
            :show="alertIsShown"
            alert-icon="fas fa-exclamation-triangle"
            dismiss-icon="fas fa-times"
            alert-variation="primary"
            position="bottom-left"
        >This is just a test for "bottom-left"!</alert>
        <alert
            :dismissible="true"
            alert-icon="fas fa-exclamation-triangle"
            dismiss-icon="fas fa-times"
            alert-variation="primary"
            position="bottom-right"
        >This is just a test for "bottom-right"!</alert>
        <alert
            :dismissible="true"
            alert-icon="fas fa-exclamation-triangle"
            dismiss-icon="fas fa-times"
            alert-variation="primary"
            position="top-right"
        >This is just a test for "top-right"!</alert>
        <alert
            :dismissible="true"
            alert-icon="fas fa-exclamation-triangle"
            dismiss-icon="fas fa-times"
            alert-variation="primary"
            position="top-left"
        >This is just a test for "top-left"!</alert>
        <alert
            :dismissible="true"
            alert-icon="fas fa-exclamation-triangle"
            dismiss-icon="fas fa-times"
            alert-variation="primary"
            position="top"
        >This is just a test for "top"!</alert>

        <div v-for="variation in variations" :key="'button-' + variation">
            <link-button :variation="variation">Button for {{ variation }}</link-button>
            <br>
            <br>
        </div>
        <div v-for="variation in variations" :key="'button-hollow-' + variation">
            <link-button :variation="variation" hollow>Button for hollow {{ variation }}</link-button>
            <br>
            <br>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Alert from './components/Alert';
import LinkButton from './components/LinkButton';

@Component({
    components: {
        HelloWorld,
        Alert,
        LinkButton
    }
})
export default class App extends Vue {
    variations = [
        'primary',
        'secondary',
        'default',
        'success',
        'info',
        'warning',
        'danger',
        'light',
        'dark',
        'black',
        'white'
    ];

    sizes = ['xs', 'sm', 'md', 'lg', 'xl'];

    alertIsShown = false;

    toggleAlert() {
        this.alertIsShown = !this.alertIsShown;
    }
    dismiss(variation: string) {
        return alert(`You closed the ${variation} alert!`);
    }
}
</script>

<style lang="scss">
#app {
    max-width: 960px;
    margin: auto;
}
</style>
