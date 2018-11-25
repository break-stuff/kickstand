<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <alert 
      v-for="color in variations" 
      :key="color" 
      :dismissible="true" 
      alert-icon="fas fa-exclamation-triangle"
      dismiss-icon="fas fa-times" 
      :alert-variation="color"
    >This is just a test for {{color}}!
    </alert>
    <alert 
      :dismissible="true" 
      alert-icon="fas fa-exclamation-triangle"
      dismiss-icon="fas fa-times" 
      alert-variation="primary"
      position="bottom-left"
    >This is just a test for "bottom-left"!
    </alert>
    <alert 
      :dismissible="true" 
      alert-icon="fas fa-exclamation-triangle"
      dismiss-icon="fas fa-times" 
      alert-variation="primary"
      position="bottom-right"
    >This is just a test for "bottom-right"!
    </alert>
    <alert 
      :dismissible="true" 
      alert-icon="fas fa-exclamation-triangle"
      dismiss-icon="fas fa-times" 
      alert-variation="primary"
      position="top-right"
    >This is just a test for "top-right"!
    </alert>
    <alert 
      :dismissible="true" 
      alert-icon="fas fa-exclamation-triangle"
      dismiss-icon="fas fa-times" 
      alert-variation="primary"
      position="top-left"
    >This is just a test for "top-left"!
    </alert>
    <alert 
      :dismissible="true" 
      alert-icon="fas fa-exclamation-triangle"
      dismiss-icon="fas fa-times" 
      alert-variation="primary"
      position="top"
    >This is just a test for "top"!
    </alert>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Alert from "./components/Alert";

@Component({
  components: {
    HelloWorld,
    Alert
  }
})
export default class App extends Vue {
  variations = [
    "primary",
    "secondary",
    "default",
    "success",
    "info",
    "warning",
    "danger",
    "light",
    "dark",
    "black",
    "white"
  ];

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
