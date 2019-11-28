//
//
//
//
//
//

var script = {
  name : 'js-alert',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    var options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    var hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            var originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            var existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

var isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());

/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__ = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-alert"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__ = normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$1 = {
  name : 'js-badge',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$1 = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-badge"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = undefined;
  /* functional template */
  var __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$1 = normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$2 = {
  name : 'js-breadcrumb',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$2 = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-breadcrumb"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = undefined;
  /* functional template */
  var __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$2 = normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$3 = {
  name : 'js-button',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$3 = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-button"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = undefined;
  /* functional template */
  var __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$3 = normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$4 = {
  name : 'js-dislike',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$4 = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-dislike"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$4 = undefined;
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = undefined;
  /* functional template */
  var __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$4 = normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$5 = {
  name : 'js-emoticon',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$5 = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-emoticon"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$5 = undefined;
  /* scoped */
  var __vue_scope_id__$5 = undefined;
  /* module identifier */
  var __vue_module_identifier__$5 = undefined;
  /* functional template */
  var __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$5 = normalizeComponent(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$6 = {
  name : 'js-favorite',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$6 = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-favorite"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$6 = undefined;
  /* scoped */
  var __vue_scope_id__$6 = undefined;
  /* module identifier */
  var __vue_module_identifier__$6 = undefined;
  /* functional template */
  var __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$6 = normalizeComponent(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$7 = {
  name : 'js-featured',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$7 = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-featured"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$7 = undefined;
  /* scoped */
  var __vue_scope_id__$7 = undefined;
  /* module identifier */
  var __vue_module_identifier__$7 = undefined;
  /* functional template */
  var __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$7 = normalizeComponent(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$8 = {
  name : 'js-form-input',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$8 = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-form-input"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$8 = undefined;
  /* scoped */
  var __vue_scope_id__$8 = undefined;
  /* module identifier */
  var __vue_module_identifier__$8 = undefined;
  /* functional template */
  var __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$8 = normalizeComponent(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$9 = {
  name : 'js-icon',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$9 = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-icon"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$9 = undefined;
  /* scoped */
  var __vue_scope_id__$9 = undefined;
  /* module identifier */
  var __vue_module_identifier__$9 = undefined;
  /* functional template */
  var __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$9 = normalizeComponent(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$a = {
  name : 'js-like',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$a = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-like"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$a = undefined;
  /* scoped */
  var __vue_scope_id__$a = undefined;
  /* module identifier */
  var __vue_module_identifier__$a = undefined;
  /* functional template */
  var __vue_is_functional_template__$a = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$a = normalizeComponent(
    { render: __vue_render__$a, staticRenderFns: __vue_staticRenderFns__$a },
    __vue_inject_styles__$a,
    __vue_script__$a,
    __vue_scope_id__$a,
    __vue_is_functional_template__$a,
    __vue_module_identifier__$a,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$b = {
  name : 'js-list-item',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$b = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-list-item"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$b = undefined;
  /* scoped */
  var __vue_scope_id__$b = undefined;
  /* module identifier */
  var __vue_module_identifier__$b = undefined;
  /* functional template */
  var __vue_is_functional_template__$b = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$b = normalizeComponent(
    { render: __vue_render__$b, staticRenderFns: __vue_staticRenderFns__$b },
    __vue_inject_styles__$b,
    __vue_script__$b,
    __vue_scope_id__$b,
    __vue_is_functional_template__$b,
    __vue_module_identifier__$b,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$c = {
  name : 'js-menu-entry',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$c = script$c;

/* template */
var __vue_render__$c = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$c = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-menu-entry"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$c = undefined;
  /* scoped */
  var __vue_scope_id__$c = undefined;
  /* module identifier */
  var __vue_module_identifier__$c = undefined;
  /* functional template */
  var __vue_is_functional_template__$c = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$c = normalizeComponent(
    { render: __vue_render__$c, staticRenderFns: __vue_staticRenderFns__$c },
    __vue_inject_styles__$c,
    __vue_script__$c,
    __vue_scope_id__$c,
    __vue_is_functional_template__$c,
    __vue_module_identifier__$c,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$d = {
  name : 'js-post',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$d = script$d;

/* template */
var __vue_render__$d = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$d = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-post"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$d = undefined;
  /* scoped */
  var __vue_scope_id__$d = undefined;
  /* module identifier */
  var __vue_module_identifier__$d = undefined;
  /* functional template */
  var __vue_is_functional_template__$d = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$d = normalizeComponent(
    { render: __vue_render__$d, staticRenderFns: __vue_staticRenderFns__$d },
    __vue_inject_styles__$d,
    __vue_script__$d,
    __vue_scope_id__$d,
    __vue_is_functional_template__$d,
    __vue_module_identifier__$d,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$e = {
  name : 'js-spinner',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$e = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-spinner"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$e = undefined;
  /* scoped */
  var __vue_scope_id__$e = undefined;
  /* module identifier */
  var __vue_module_identifier__$e = undefined;
  /* functional template */
  var __vue_is_functional_template__$e = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$e = normalizeComponent(
    { render: __vue_render__$e, staticRenderFns: __vue_staticRenderFns__$e },
    __vue_inject_styles__$e,
    __vue_script__$e,
    __vue_scope_id__$e,
    __vue_is_functional_template__$e,
    __vue_module_identifier__$e,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$f = {
  name : 'js-tab',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$f = script$f;

/* template */
var __vue_render__$f = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$f = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-tab"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$f = undefined;
  /* scoped */
  var __vue_scope_id__$f = undefined;
  /* module identifier */
  var __vue_module_identifier__$f = undefined;
  /* functional template */
  var __vue_is_functional_template__$f = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$f = normalizeComponent(
    { render: __vue_render__$f, staticRenderFns: __vue_staticRenderFns__$f },
    __vue_inject_styles__$f,
    __vue_script__$f,
    __vue_scope_id__$f,
    __vue_is_functional_template__$f,
    __vue_module_identifier__$f,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$g = {
  name : 'js-table-body',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$g = script$g;

/* template */
var __vue_render__$g = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$g = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-table-body"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$g = undefined;
  /* scoped */
  var __vue_scope_id__$g = undefined;
  /* module identifier */
  var __vue_module_identifier__$g = undefined;
  /* functional template */
  var __vue_is_functional_template__$g = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$g = normalizeComponent(
    { render: __vue_render__$g, staticRenderFns: __vue_staticRenderFns__$g },
    __vue_inject_styles__$g,
    __vue_script__$g,
    __vue_scope_id__$g,
    __vue_is_functional_template__$g,
    __vue_module_identifier__$g,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$h = {
  name : 'js-table-foot',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$h = script$h;

/* template */
var __vue_render__$h = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$h = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-table-foot"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$h = undefined;
  /* scoped */
  var __vue_scope_id__$h = undefined;
  /* module identifier */
  var __vue_module_identifier__$h = undefined;
  /* functional template */
  var __vue_is_functional_template__$h = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$h = normalizeComponent(
    { render: __vue_render__$h, staticRenderFns: __vue_staticRenderFns__$h },
    __vue_inject_styles__$h,
    __vue_script__$h,
    __vue_scope_id__$h,
    __vue_is_functional_template__$h,
    __vue_module_identifier__$h,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$i = {
  name : 'js-table-head',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$i = script$i;

/* template */
var __vue_render__$i = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$i = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-table-head"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$i = undefined;
  /* scoped */
  var __vue_scope_id__$i = undefined;
  /* module identifier */
  var __vue_module_identifier__$i = undefined;
  /* functional template */
  var __vue_is_functional_template__$i = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$i = normalizeComponent(
    { render: __vue_render__$i, staticRenderFns: __vue_staticRenderFns__$i },
    __vue_inject_styles__$i,
    __vue_script__$i,
    __vue_scope_id__$i,
    __vue_is_functional_template__$i,
    __vue_module_identifier__$i,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

  // @info maybe redundant to figure
var script$j = {
  name : 'js-thumbnail',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$j = script$j;

/* template */
var __vue_render__$j = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$j = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-thumbnail"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$j = undefined;
  /* scoped */
  var __vue_scope_id__$j = undefined;
  /* module identifier */
  var __vue_module_identifier__$j = undefined;
  /* functional template */
  var __vue_is_functional_template__$j = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$j = normalizeComponent(
    { render: __vue_render__$j, staticRenderFns: __vue_staticRenderFns__$j },
    __vue_inject_styles__$j,
    __vue_script__$j,
    __vue_scope_id__$j,
    __vue_is_functional_template__$j,
    __vue_module_identifier__$j,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$k = {
  name : 'js-video',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$k = script$k;

/* template */
var __vue_render__$k = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$k = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-video"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$k = undefined;
  /* scoped */
  var __vue_scope_id__$k = undefined;
  /* module identifier */
  var __vue_module_identifier__$k = undefined;
  /* functional template */
  var __vue_is_functional_template__$k = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$k = normalizeComponent(
    { render: __vue_render__$k, staticRenderFns: __vue_staticRenderFns__$k },
    __vue_inject_styles__$k,
    __vue_script__$k,
    __vue_scope_id__$k,
    __vue_is_functional_template__$k,
    __vue_module_identifier__$k,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$l = {
  name : 'js-accordion-menu',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$l = script$l;

/* template */
var __vue_render__$l = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$l = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-accordion-menu"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$l = undefined;
  /* scoped */
  var __vue_scope_id__$l = undefined;
  /* module identifier */
  var __vue_module_identifier__$l = undefined;
  /* functional template */
  var __vue_is_functional_template__$l = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$l = normalizeComponent(
    { render: __vue_render__$l, staticRenderFns: __vue_staticRenderFns__$l },
    __vue_inject_styles__$l,
    __vue_script__$l,
    __vue_scope_id__$l,
    __vue_is_functional_template__$l,
    __vue_module_identifier__$l,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$m = {
  name : 'js-breadcrumbs',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$m = script$m;

/* template */
var __vue_render__$m = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$m = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-breadcrumbs"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$m = undefined;
  /* scoped */
  var __vue_scope_id__$m = undefined;
  /* module identifier */
  var __vue_module_identifier__$m = undefined;
  /* functional template */
  var __vue_is_functional_template__$m = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$m = normalizeComponent(
    { render: __vue_render__$m, staticRenderFns: __vue_staticRenderFns__$m },
    __vue_inject_styles__$m,
    __vue_script__$m,
    __vue_scope_id__$m,
    __vue_is_functional_template__$m,
    __vue_module_identifier__$m,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$n = {
  name : 'js-button-group',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$n = script$n;

/* template */
var __vue_render__$n = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$n = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-button-group"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$n = undefined;
  /* scoped */
  var __vue_scope_id__$n = undefined;
  /* module identifier */
  var __vue_module_identifier__$n = undefined;
  /* functional template */
  var __vue_is_functional_template__$n = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$n = normalizeComponent(
    { render: __vue_render__$n, staticRenderFns: __vue_staticRenderFns__$n },
    __vue_inject_styles__$n,
    __vue_script__$n,
    __vue_scope_id__$n,
    __vue_is_functional_template__$n,
    __vue_module_identifier__$n,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//
//
//

var script$o = {
  name : 'js-component',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$o = script$o;

/* template */
var __vue_render__$o = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-component p-6 bg-gray-200 rounded-lg shadow-xl mx-6"},[_c('p',{staticClass:"text-lg text-bold mb-2"},[_vm._t("heading-text")],2),_vm._v(" "),_c('div',{staticClass:"p-6 bg-white rounded-lg"},[_vm._t("body-content")],2)])};
var __vue_staticRenderFns__$o = [];

  /* style */
  var __vue_inject_styles__$o = undefined;
  /* scoped */
  var __vue_scope_id__$o = undefined;
  /* module identifier */
  var __vue_module_identifier__$o = undefined;
  /* functional template */
  var __vue_is_functional_template__$o = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$o = normalizeComponent(
    { render: __vue_render__$o, staticRenderFns: __vue_staticRenderFns__$o },
    __vue_inject_styles__$o,
    __vue_script__$o,
    __vue_scope_id__$o,
    __vue_is_functional_template__$o,
    __vue_module_identifier__$o,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$p = {
  name : 'js-carousel',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$p = script$p;

/* template */
var __vue_render__$p = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$p = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-carousel"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$p = undefined;
  /* scoped */
  var __vue_scope_id__$p = undefined;
  /* module identifier */
  var __vue_module_identifier__$p = undefined;
  /* functional template */
  var __vue_is_functional_template__$p = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$p = normalizeComponent(
    { render: __vue_render__$p, staticRenderFns: __vue_staticRenderFns__$p },
    __vue_inject_styles__$p,
    __vue_script__$p,
    __vue_scope_id__$p,
    __vue_is_functional_template__$p,
    __vue_module_identifier__$p,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$q = {
  name : 'js-drill-down-menu',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$q = script$q;

/* template */
var __vue_render__$q = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$q = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-drill-down-menu"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$q = undefined;
  /* scoped */
  var __vue_scope_id__$q = undefined;
  /* module identifier */
  var __vue_module_identifier__$q = undefined;
  /* functional template */
  var __vue_is_functional_template__$q = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$q = normalizeComponent(
    { render: __vue_render__$q, staticRenderFns: __vue_staticRenderFns__$q },
    __vue_inject_styles__$q,
    __vue_script__$q,
    __vue_scope_id__$q,
    __vue_is_functional_template__$q,
    __vue_module_identifier__$q,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$r = {
  name : 'js-drop-down-menu',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$r = script$r;

/* template */
var __vue_render__$r = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$r = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-drop-down-menu"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$r = undefined;
  /* scoped */
  var __vue_scope_id__$r = undefined;
  /* module identifier */
  var __vue_module_identifier__$r = undefined;
  /* functional template */
  var __vue_is_functional_template__$r = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$r = normalizeComponent(
    { render: __vue_render__$r, staticRenderFns: __vue_staticRenderFns__$r },
    __vue_inject_styles__$r,
    __vue_script__$r,
    __vue_scope_id__$r,
    __vue_is_functional_template__$r,
    __vue_module_identifier__$r,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$s = {
  name : 'js-footer',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$s = script$s;

/* template */
var __vue_render__$s = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$s = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-footer"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$s = undefined;
  /* scoped */
  var __vue_scope_id__$s = undefined;
  /* module identifier */
  var __vue_module_identifier__$s = undefined;
  /* functional template */
  var __vue_is_functional_template__$s = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$s = normalizeComponent(
    { render: __vue_render__$s, staticRenderFns: __vue_staticRenderFns__$s },
    __vue_inject_styles__$s,
    __vue_script__$s,
    __vue_scope_id__$s,
    __vue_is_functional_template__$s,
    __vue_module_identifier__$s,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$t = {
  name : 'js-form',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$t = script$t;

/* template */
var __vue_render__$t = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$t = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-form"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$t = undefined;
  /* scoped */
  var __vue_scope_id__$t = undefined;
  /* module identifier */
  var __vue_module_identifier__$t = undefined;
  /* functional template */
  var __vue_is_functional_template__$t = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$t = normalizeComponent(
    { render: __vue_render__$t, staticRenderFns: __vue_staticRenderFns__$t },
    __vue_inject_styles__$t,
    __vue_script__$t,
    __vue_scope_id__$t,
    __vue_is_functional_template__$t,
    __vue_module_identifier__$t,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$u = {
  name : 'js-form-input-group',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$u = script$u;

/* template */
var __vue_render__$u = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$u = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-form-input-group"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$u = undefined;
  /* scoped */
  var __vue_scope_id__$u = undefined;
  /* module identifier */
  var __vue_module_identifier__$u = undefined;
  /* functional template */
  var __vue_is_functional_template__$u = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$u = normalizeComponent(
    { render: __vue_render__$u, staticRenderFns: __vue_staticRenderFns__$u },
    __vue_inject_styles__$u,
    __vue_script__$u,
    __vue_scope_id__$u,
    __vue_is_functional_template__$u,
    __vue_module_identifier__$u,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$v = {
  name : 'js-gallery',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$v = script$v;

/* template */
var __vue_render__$v = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$v = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-gallery"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$v = undefined;
  /* scoped */
  var __vue_scope_id__$v = undefined;
  /* module identifier */
  var __vue_module_identifier__$v = undefined;
  /* functional template */
  var __vue_is_functional_template__$v = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$v = normalizeComponent(
    { render: __vue_render__$v, staticRenderFns: __vue_staticRenderFns__$v },
    __vue_inject_styles__$v,
    __vue_script__$v,
    __vue_scope_id__$v,
    __vue_is_functional_template__$v,
    __vue_module_identifier__$v,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$w = {
  name : 'js-header',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$w = script$w;

/* template */
var __vue_render__$w = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$w = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-header"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$w = undefined;
  /* scoped */
  var __vue_scope_id__$w = undefined;
  /* module identifier */
  var __vue_module_identifier__$w = undefined;
  /* functional template */
  var __vue_is_functional_template__$w = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$w = normalizeComponent(
    { render: __vue_render__$w, staticRenderFns: __vue_staticRenderFns__$w },
    __vue_inject_styles__$w,
    __vue_script__$w,
    __vue_scope_id__$w,
    __vue_is_functional_template__$w,
    __vue_module_identifier__$w,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$x = {
  name : 'js-jumbotron',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$x = script$x;

/* template */
var __vue_render__$x = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$x = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-jumbotron"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$x = undefined;
  /* scoped */
  var __vue_scope_id__$x = undefined;
  /* module identifier */
  var __vue_module_identifier__$x = undefined;
  /* functional template */
  var __vue_is_functional_template__$x = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$x = normalizeComponent(
    { render: __vue_render__$x, staticRenderFns: __vue_staticRenderFns__$x },
    __vue_inject_styles__$x,
    __vue_script__$x,
    __vue_scope_id__$x,
    __vue_is_functional_template__$x,
    __vue_module_identifier__$x,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$y = {
  name : 'js-list',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$y = script$y;

/* template */
var __vue_render__$y = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$y = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-list"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$y = undefined;
  /* scoped */
  var __vue_scope_id__$y = undefined;
  /* module identifier */
  var __vue_module_identifier__$y = undefined;
  /* functional template */
  var __vue_is_functional_template__$y = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$y = normalizeComponent(
    { render: __vue_render__$y, staticRenderFns: __vue_staticRenderFns__$y },
    __vue_inject_styles__$y,
    __vue_script__$y,
    __vue_scope_id__$y,
    __vue_is_functional_template__$y,
    __vue_module_identifier__$y,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$z = {
  name : 'js-menu',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$z = script$z;

/* template */
var __vue_render__$z = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$z = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-menu"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$z = undefined;
  /* scoped */
  var __vue_scope_id__$z = undefined;
  /* module identifier */
  var __vue_module_identifier__$z = undefined;
  /* functional template */
  var __vue_is_functional_template__$z = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$z = normalizeComponent(
    { render: __vue_render__$z, staticRenderFns: __vue_staticRenderFns__$z },
    __vue_inject_styles__$z,
    __vue_script__$z,
    __vue_scope_id__$z,
    __vue_is_functional_template__$z,
    __vue_module_identifier__$z,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$A = {
  name : 'js-modal',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$A = script$A;

/* template */
var __vue_render__$A = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$A = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-modal"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$A = undefined;
  /* scoped */
  var __vue_scope_id__$A = undefined;
  /* module identifier */
  var __vue_module_identifier__$A = undefined;
  /* functional template */
  var __vue_is_functional_template__$A = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$A = normalizeComponent(
    { render: __vue_render__$A, staticRenderFns: __vue_staticRenderFns__$A },
    __vue_inject_styles__$A,
    __vue_script__$A,
    __vue_scope_id__$A,
    __vue_is_functional_template__$A,
    __vue_module_identifier__$A,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$B = {
  name : 'js-navigation',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$B = script$B;

/* template */
var __vue_render__$B = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$B = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-navigation"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$B = undefined;
  /* scoped */
  var __vue_scope_id__$B = undefined;
  /* module identifier */
  var __vue_module_identifier__$B = undefined;
  /* functional template */
  var __vue_is_functional_template__$B = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$B = normalizeComponent(
    { render: __vue_render__$B, staticRenderFns: __vue_staticRenderFns__$B },
    __vue_inject_styles__$B,
    __vue_script__$B,
    __vue_scope_id__$B,
    __vue_is_functional_template__$B,
    __vue_module_identifier__$B,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$C = {
  name : 'js-navigation-bar',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$C = script$C;

/* template */
var __vue_render__$C = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$C = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-navigation-bar"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$C = undefined;
  /* scoped */
  var __vue_scope_id__$C = undefined;
  /* module identifier */
  var __vue_module_identifier__$C = undefined;
  /* functional template */
  var __vue_is_functional_template__$C = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$C = normalizeComponent(
    { render: __vue_render__$C, staticRenderFns: __vue_staticRenderFns__$C },
    __vue_inject_styles__$C,
    __vue_script__$C,
    __vue_scope_id__$C,
    __vue_is_functional_template__$C,
    __vue_module_identifier__$C,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$D = {
  name : 'js-off-canvas',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$D = script$D;

/* template */
var __vue_render__$D = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$D = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-off-canvas"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$D = undefined;
  /* scoped */
  var __vue_scope_id__$D = undefined;
  /* module identifier */
  var __vue_module_identifier__$D = undefined;
  /* functional template */
  var __vue_is_functional_template__$D = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$D = normalizeComponent(
    { render: __vue_render__$D, staticRenderFns: __vue_staticRenderFns__$D },
    __vue_inject_styles__$D,
    __vue_script__$D,
    __vue_scope_id__$D,
    __vue_is_functional_template__$D,
    __vue_module_identifier__$D,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$E = {
  name : 'js-pagination',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$E = script$E;

/* template */
var __vue_render__$E = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$E = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-pagination"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$E = undefined;
  /* scoped */
  var __vue_scope_id__$E = undefined;
  /* module identifier */
  var __vue_module_identifier__$E = undefined;
  /* functional template */
  var __vue_is_functional_template__$E = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$E = normalizeComponent(
    { render: __vue_render__$E, staticRenderFns: __vue_staticRenderFns__$E },
    __vue_inject_styles__$E,
    __vue_script__$E,
    __vue_scope_id__$E,
    __vue_is_functional_template__$E,
    __vue_module_identifier__$E,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//
//
//
//
//
//
//

var script$F = {
  name : 'js-partial',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$F = script$F;

/* template */
var __vue_render__$F = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-partial p-6 bg-white rounded-lg shadow-xl mx-6"},[_c('p',{staticClass:"text-2xl font-bold mb-4"},[_vm._t("heading-text")],2),_vm._v(" "),_vm._t("body-content")],2)};
var __vue_staticRenderFns__$F = [];

  /* style */
  var __vue_inject_styles__$F = undefined;
  /* scoped */
  var __vue_scope_id__$F = undefined;
  /* module identifier */
  var __vue_module_identifier__$F = undefined;
  /* functional template */
  var __vue_is_functional_template__$F = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$F = normalizeComponent(
    { render: __vue_render__$F, staticRenderFns: __vue_staticRenderFns__$F },
    __vue_inject_styles__$F,
    __vue_script__$F,
    __vue_scope_id__$F,
    __vue_is_functional_template__$F,
    __vue_module_identifier__$F,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$G = {
  name : 'js-progress-bar',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$G = script$G;

/* template */
var __vue_render__$G = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$G = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-progress-bar"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$G = undefined;
  /* scoped */
  var __vue_scope_id__$G = undefined;
  /* module identifier */
  var __vue_module_identifier__$G = undefined;
  /* functional template */
  var __vue_is_functional_template__$G = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$G = normalizeComponent(
    { render: __vue_render__$G, staticRenderFns: __vue_staticRenderFns__$G },
    __vue_inject_styles__$G,
    __vue_script__$G,
    __vue_scope_id__$G,
    __vue_is_functional_template__$G,
    __vue_module_identifier__$G,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$H = {
  name : 'js-rating',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$H = script$H;

/* template */
var __vue_render__$H = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$H = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-rating"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$H = undefined;
  /* scoped */
  var __vue_scope_id__$H = undefined;
  /* module identifier */
  var __vue_module_identifier__$H = undefined;
  /* functional template */
  var __vue_is_functional_template__$H = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$H = normalizeComponent(
    { render: __vue_render__$H, staticRenderFns: __vue_staticRenderFns__$H },
    __vue_inject_styles__$H,
    __vue_script__$H,
    __vue_scope_id__$H,
    __vue_is_functional_template__$H,
    __vue_module_identifier__$H,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$I = {
  name : 'js-relative-embed',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$I = script$I;

/* template */
var __vue_render__$I = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$I = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-relative-embed"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$I = undefined;
  /* scoped */
  var __vue_scope_id__$I = undefined;
  /* module identifier */
  var __vue_module_identifier__$I = undefined;
  /* functional template */
  var __vue_is_functional_template__$I = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$I = normalizeComponent(
    { render: __vue_render__$I, staticRenderFns: __vue_staticRenderFns__$I },
    __vue_inject_styles__$I,
    __vue_script__$I,
    __vue_scope_id__$I,
    __vue_is_functional_template__$I,
    __vue_module_identifier__$I,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$J = {
  name : 'js-slider',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$J = script$J;

/* template */
var __vue_render__$J = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$J = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-slider"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$J = undefined;
  /* scoped */
  var __vue_scope_id__$J = undefined;
  /* module identifier */
  var __vue_module_identifier__$J = undefined;
  /* functional template */
  var __vue_is_functional_template__$J = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$J = normalizeComponent(
    { render: __vue_render__$J, staticRenderFns: __vue_staticRenderFns__$J },
    __vue_inject_styles__$J,
    __vue_script__$J,
    __vue_scope_id__$J,
    __vue_is_functional_template__$J,
    __vue_module_identifier__$J,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$K = {
  name : 'js-switch',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$K = script$K;

/* template */
var __vue_render__$K = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$K = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-switch"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$K = undefined;
  /* scoped */
  var __vue_scope_id__$K = undefined;
  /* module identifier */
  var __vue_module_identifier__$K = undefined;
  /* functional template */
  var __vue_is_functional_template__$K = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$K = normalizeComponent(
    { render: __vue_render__$K, staticRenderFns: __vue_staticRenderFns__$K },
    __vue_inject_styles__$K,
    __vue_script__$K,
    __vue_scope_id__$K,
    __vue_is_functional_template__$K,
    __vue_module_identifier__$K,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$L = {
  name : 'js-table',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$L = script$L;

/* template */
var __vue_render__$L = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$L = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-table"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$L = undefined;
  /* scoped */
  var __vue_scope_id__$L = undefined;
  /* module identifier */
  var __vue_module_identifier__$L = undefined;
  /* functional template */
  var __vue_is_functional_template__$L = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$L = normalizeComponent(
    { render: __vue_render__$L, staticRenderFns: __vue_staticRenderFns__$L },
    __vue_inject_styles__$L,
    __vue_script__$L,
    __vue_scope_id__$L,
    __vue_is_functional_template__$L,
    __vue_module_identifier__$L,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$M = {
  name : 'js-tabs',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$M = script$M;

/* template */
var __vue_render__$M = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$M = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-tabs"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$M = undefined;
  /* scoped */
  var __vue_scope_id__$M = undefined;
  /* module identifier */
  var __vue_module_identifier__$M = undefined;
  /* functional template */
  var __vue_is_functional_template__$M = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$M = normalizeComponent(
    { render: __vue_render__$M, staticRenderFns: __vue_staticRenderFns__$M },
    __vue_inject_styles__$M,
    __vue_script__$M,
    __vue_scope_id__$M,
    __vue_is_functional_template__$M,
    __vue_module_identifier__$M,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$N = {
  name : 'js-toast',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$N = script$N;

/* template */
var __vue_render__$N = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$N = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-toast"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$N = undefined;
  /* scoped */
  var __vue_scope_id__$N = undefined;
  /* module identifier */
  var __vue_module_identifier__$N = undefined;
  /* functional template */
  var __vue_is_functional_template__$N = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$N = normalizeComponent(
    { render: __vue_render__$N, staticRenderFns: __vue_staticRenderFns__$N },
    __vue_inject_styles__$N,
    __vue_script__$N,
    __vue_scope_id__$N,
    __vue_is_functional_template__$N,
    __vue_module_identifier__$N,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$O = {
  name : 'js-tooltip',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$O = script$O;

/* template */
var __vue_render__$O = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$O = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-tooltip"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$O = undefined;
  /* scoped */
  var __vue_scope_id__$O = undefined;
  /* module identifier */
  var __vue_module_identifier__$O = undefined;
  /* functional template */
  var __vue_is_functional_template__$O = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$O = normalizeComponent(
    { render: __vue_render__$O, staticRenderFns: __vue_staticRenderFns__$O },
    __vue_inject_styles__$O,
    __vue_script__$O,
    __vue_scope_id__$O,
    __vue_is_functional_template__$O,
    __vue_module_identifier__$O,
    false,
    undefined,
    undefined,
    undefined
  );

//
//
//
//
//
//

var script$P = {
  name : 'js-top-bar',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};

/* script */
var __vue_script__$P = script$P;

/* template */
var __vue_render__$P = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)};
var __vue_staticRenderFns__$P = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"js-top-bar"},[_c('p',[_vm._v("This is a test!")])])}];

  /* style */
  var __vue_inject_styles__$P = undefined;
  /* scoped */
  var __vue_scope_id__$P = undefined;
  /* module identifier */
  var __vue_module_identifier__$P = undefined;
  /* functional template */
  var __vue_is_functional_template__$P = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  var __vue_component__$P = normalizeComponent(
    { render: __vue_render__$P, staticRenderFns: __vue_staticRenderFns__$P },
    __vue_inject_styles__$P,
    __vue_script__$P,
    __vue_scope_id__$P,
    __vue_is_functional_template__$P,
    __vue_module_identifier__$P,
    false,
    undefined,
    undefined,
    undefined
  );

// Elements

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  JsAlert: __vue_component__,
  JsBadge: __vue_component__$1,
  JsBreadcrumb: __vue_component__$2,
  JsButton: __vue_component__$3,
  JsDislike: __vue_component__$4,
  JsEmoticon: __vue_component__$5,
  JsFavorite: __vue_component__$6,
  JsFeatured: __vue_component__$7,
  JsFormInput: __vue_component__$8,
  JsIcon: __vue_component__$9,
  JsLike: __vue_component__$a,
  JsListItem: __vue_component__$b,
  JsMenuEntry: __vue_component__$c,
  JsPost: __vue_component__$d,
  JsSpinner: __vue_component__$e,
  JsTab: __vue_component__$f,
  JsTableBody: __vue_component__$g,
  JsTableFoot: __vue_component__$h,
  JsTableHead: __vue_component__$i,
  JsThumbnail: __vue_component__$j,
  JsVideo: __vue_component__$k,
  JsAccordionMenu: __vue_component__$l,
  JsBreadcrumbs: __vue_component__$m,
  JsButtonGroup: __vue_component__$n,
  JsComponent: __vue_component__$o,
  JsCarousel: __vue_component__$p,
  JsDrillDownMenu: __vue_component__$q,
  JsDropDownMenu: __vue_component__$r,
  JsFooter: __vue_component__$s,
  JsForm: __vue_component__$t,
  JsFormInputGroup: __vue_component__$u,
  JsGallery: __vue_component__$v,
  JsHeader: __vue_component__$w,
  JsJumbotron: __vue_component__$x,
  JsList: __vue_component__$y,
  JsMenu: __vue_component__$z,
  JsModal: __vue_component__$A,
  JsNavigation: __vue_component__$B,
  JsNavigationBar: __vue_component__$C,
  JsOffCanvas: __vue_component__$D,
  JsPagination: __vue_component__$E,
  JsPartial: __vue_component__$F,
  JsProgressBar: __vue_component__$G,
  JsRating: __vue_component__$H,
  JsRelativeEmbed: __vue_component__$I,
  JsSlider: __vue_component__$J,
  JsSwitch: __vue_component__$K,
  JsTable: __vue_component__$L,
  JsTabs: __vue_component__$M,
  JsToast: __vue_component__$N,
  JsTooltip: __vue_component__$O,
  JsTopBar: __vue_component__$P
});

//// Wrapper (internal)

// compose components into init
function install(Vue) {
    if (install.installed) { return; }

    install.installed = true;
    Object.keys(components).forEach(function (componentName) {
        Vue.component(componentName, components[componentName]);
    });
}

// Object Preparation
var plugin = {
    install: install
};

var DIPackage = null;
if (
    "undefined" !== typeof window
    && null !== window
    && window.hasOwnProperty("Vue")
) {
    DIPackage = window.Vue;
} else if (
    'undefined' !== typeof global
    && null !== global
    && global.hasOwnProperty("Vue")
) {
    DIPackage = global.Vue;
}

if (
    'undefined' !== typeof DIPackage
    && null !== DIPackage
    && DIPackage.hasOwnProperty("use")
) {
    DIPackage.use(plugin);
}

export default plugin;
export { __vue_component__$l as JsAccordionMenu, __vue_component__ as JsAlert, __vue_component__$1 as JsBadge, __vue_component__$2 as JsBreadcrumb, __vue_component__$m as JsBreadcrumbs, __vue_component__$3 as JsButton, __vue_component__$n as JsButtonGroup, __vue_component__$p as JsCarousel, __vue_component__$o as JsComponent, __vue_component__$4 as JsDislike, __vue_component__$q as JsDrillDownMenu, __vue_component__$r as JsDropDownMenu, __vue_component__$5 as JsEmoticon, __vue_component__$6 as JsFavorite, __vue_component__$7 as JsFeatured, __vue_component__$s as JsFooter, __vue_component__$t as JsForm, __vue_component__$8 as JsFormInput, __vue_component__$u as JsFormInputGroup, __vue_component__$v as JsGallery, __vue_component__$w as JsHeader, __vue_component__$9 as JsIcon, __vue_component__$x as JsJumbotron, __vue_component__$a as JsLike, __vue_component__$y as JsList, __vue_component__$b as JsListItem, __vue_component__$z as JsMenu, __vue_component__$c as JsMenuEntry, __vue_component__$A as JsModal, __vue_component__$B as JsNavigation, __vue_component__$C as JsNavigationBar, __vue_component__$D as JsOffCanvas, __vue_component__$E as JsPagination, __vue_component__$F as JsPartial, __vue_component__$d as JsPost, __vue_component__$G as JsProgressBar, __vue_component__$H as JsRating, __vue_component__$I as JsRelativeEmbed, __vue_component__$J as JsSlider, __vue_component__$e as JsSpinner, __vue_component__$K as JsSwitch, __vue_component__$f as JsTab, __vue_component__$L as JsTable, __vue_component__$g as JsTableBody, __vue_component__$h as JsTableFoot, __vue_component__$i as JsTableHead, __vue_component__$M as JsTabs, __vue_component__$j as JsThumbnail, __vue_component__$N as JsToast, __vue_component__$O as JsTooltip, __vue_component__$P as JsTopBar, __vue_component__$k as JsVideo, install };
