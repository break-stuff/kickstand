export default {
    /**
     * Register a component plugin as being loaded. Returns true if component plugin already registered.
     * @param {object} Vue
     * @param {string} Component name
     * @param {object} Component definition
     */
    registerComponent(Vue: any, name: string, def: object) {
        Vue.kickstandComponents = Vue.kickstandComponents || {};
        const loaded = Vue.kickstandComponents[name];

        if (!loaded && def && name) {
            Vue.kickstandComponents[name] = true;
            Vue.component(name, def);
        }

        return loaded;
    },

    /**
     * Register a group of components as being loaded.
     * @param {object} Vue
     * @param {array} components of component definitions
     */
    registerComponents(Vue: any, components: object[]) {
        for (const component in components) {
            if (components.hasOwnProperty(component)) {
                this.registerComponent(Vue, component, components[component]);
            }
        }
    },

    /**
     * Install plugin if window.Vue available
     * @param {object} Plugin definition
     */
    vueUse(VuePlugin: object) {
        const localVue: any = window.Vue;
        if (typeof window !== 'undefined' && localVue) {
            localVue.use(VuePlugin);
        }
    },
};
