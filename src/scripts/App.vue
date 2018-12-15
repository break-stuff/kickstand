<template>
    <div id="app">
        <breadcrumbs>
          <breadcrumb-item url="/">Home</breadcrumb-item>
          <breadcrumb-item url="/">About</breadcrumb-item>
          <breadcrumb-item url="/" active>Test</breadcrumb-item>

        </breadcrumbs>
        <h1>H1 Tag</h1>
        <h2>H2 Tag</h2>
        <h3>H3 Tag</h3>
        <h4>H4 Tag</h4>
        <h5>H5 Tag</h5>
        <h6>H6 Tag</h6>
        <br>
        <button class="button primary" @click="toggleAlert">Toggle Alert</button>
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
        <!-- <alert
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
        >This is just a test for "top"!</alert> -->

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
        <div v-for="size in sizes" :key="'button-' + size">
            <link-button variation="secondary" :size="size" expanded>Button for {{ size }}</link-button>
            <br>
            <br>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import Alert from './components/Alert';
import { Breadcrumbs, BreadcrumbItem } from './components/Breadcrumbs';
import LinkButton from './components/LinkButton';

@Component({
    components: {
        HelloWorld,
        Alert,
        Breadcrumbs,
        BreadcrumbItem,
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
        'white',
        'link'
    ];

    sizes = [
      'xs', 
      'sm', 
      'md', 
      'lg', 
      'xl'
    ];

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
