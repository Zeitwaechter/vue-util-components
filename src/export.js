//// Wrapper (internal)
// Components
import * as components from '@/components/index';

// compose components into init
export function install(Vue) {
    if (install.installed) return;

    install.installed = true;
    Object.keys(components).forEach((componentName) => {
        Vue.component(componentName, components[componentName]);
    });
}

// Object Preparation
let plugin = {
    install
};

let DIPackage = null;
if (
    `undefined` !== typeof window
    && null !== window
    && window.hasOwnProperty(`Vue`)
) {
    DIPackage = window.Vue;
} else if (
    'undefined' !== typeof global
    && null !== global
    && global.hasOwnProperty(`Vue`)
) {
    DIPackage = global.Vue;
}

if (
    'undefined' !== typeof DIPackage
    && null !== DIPackage
    && DIPackage.hasOwnProperty(`use`)
) {
    DIPackage.use(plugin);
}

// Default export is library as a whole, registered via Vue.use()
export default plugin;

// Export to allow usage as module with directives
export * from '@/components/index';
