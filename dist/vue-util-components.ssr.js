'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
//
//
//
//
//

var script = {
  name : 'alert',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
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
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());/* script */
var __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"alert"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__ = [];

  /* style */
  var __vue_inject_styles__ = undefined;
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = "data-v-20a68742";
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
  );//
//
//
//
//
//

var script$1 = {
  name : 'badge',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"badge"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  var __vue_inject_styles__$1 = undefined;
  /* scoped */
  var __vue_scope_id__$1 = undefined;
  /* module identifier */
  var __vue_module_identifier__$1 = "data-v-3816ff06";
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
  );//
//
//
//
//
//

var script$2 = {
  name : 'breadcrumb',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breadcrumb"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$2 = [];

  /* style */
  var __vue_inject_styles__$2 = undefined;
  /* scoped */
  var __vue_scope_id__$2 = undefined;
  /* module identifier */
  var __vue_module_identifier__$2 = "data-v-c93a9ef4";
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
  );//
//
//
//
//
//

var script$3 = {
  name : 'button',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  var __vue_inject_styles__$3 = undefined;
  /* scoped */
  var __vue_scope_id__$3 = undefined;
  /* module identifier */
  var __vue_module_identifier__$3 = "data-v-b45b3c52";
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
  );//
//
//
//
//
//

var script$4 = {
  name : 'dislike',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dislike"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$4 = [];

  /* style */
  var __vue_inject_styles__$4 = undefined;
  /* scoped */
  var __vue_scope_id__$4 = undefined;
  /* module identifier */
  var __vue_module_identifier__$4 = "data-v-767e9870";
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
  );//
//
//
//
//
//

var script$5 = {
  name : 'emoticon',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$5 = script$5;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"emoticon"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$5 = [];

  /* style */
  var __vue_inject_styles__$5 = undefined;
  /* scoped */
  var __vue_scope_id__$5 = undefined;
  /* module identifier */
  var __vue_module_identifier__$5 = "data-v-b5fcb57a";
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
  );//
//
//
//
//
//

var script$6 = {
  name : 'favorite',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$6 = script$6;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"favorite"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$6 = [];

  /* style */
  var __vue_inject_styles__$6 = undefined;
  /* scoped */
  var __vue_scope_id__$6 = undefined;
  /* module identifier */
  var __vue_module_identifier__$6 = "data-v-3c2c9fad";
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
  );//
//
//
//
//
//

var script$7 = {
  name : 'featured',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$7 = script$7;

/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"featured"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$7 = [];

  /* style */
  var __vue_inject_styles__$7 = undefined;
  /* scoped */
  var __vue_scope_id__$7 = undefined;
  /* module identifier */
  var __vue_module_identifier__$7 = "data-v-d0fe2cca";
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
  );//
//
//
//
//
//

var script$8 = {
  name : 'form-input',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$8 = script$8;

/* template */
var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-input"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$8 = [];

  /* style */
  var __vue_inject_styles__$8 = undefined;
  /* scoped */
  var __vue_scope_id__$8 = undefined;
  /* module identifier */
  var __vue_module_identifier__$8 = "data-v-acafd9f0";
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
  );//
//
//
//
//
//

var script$9 = {
  name : 'icon',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$9 = script$9;

/* template */
var __vue_render__$9 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$9 = [];

  /* style */
  var __vue_inject_styles__$9 = undefined;
  /* scoped */
  var __vue_scope_id__$9 = undefined;
  /* module identifier */
  var __vue_module_identifier__$9 = "data-v-054557e0";
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
  );//
//
//
//
//
//

var script$a = {
  name : 'like',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$a = script$a;

/* template */
var __vue_render__$a = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"like"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$a = [];

  /* style */
  var __vue_inject_styles__$a = undefined;
  /* scoped */
  var __vue_scope_id__$a = undefined;
  /* module identifier */
  var __vue_module_identifier__$a = "data-v-5c6bc772";
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
  );//
//
//
//
//
//

var script$b = {
  name : 'list-item',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$b = script$b;

/* template */
var __vue_render__$b = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"list-item"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$b = [];

  /* style */
  var __vue_inject_styles__$b = undefined;
  /* scoped */
  var __vue_scope_id__$b = undefined;
  /* module identifier */
  var __vue_module_identifier__$b = "data-v-6e6923b6";
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
  );//
//
//
//
//
//

var script$c = {
  name : 'menu-entry',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$c = script$c;

/* template */
var __vue_render__$c = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"menu-entry"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$c = [];

  /* style */
  var __vue_inject_styles__$c = undefined;
  /* scoped */
  var __vue_scope_id__$c = undefined;
  /* module identifier */
  var __vue_module_identifier__$c = "data-v-093f23f6";
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
  );//
//
//
//
//
//

var script$d = {
  name : 'post',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$d = script$d;

/* template */
var __vue_render__$d = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"post"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$d = [];

  /* style */
  var __vue_inject_styles__$d = undefined;
  /* scoped */
  var __vue_scope_id__$d = undefined;
  /* module identifier */
  var __vue_module_identifier__$d = "data-v-862dc5ae";
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
  );//
//
//
//
//
//

var script$e = {
  name : 'spinner',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$e = script$e;

/* template */
var __vue_render__$e = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spinner"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$e = [];

  /* style */
  var __vue_inject_styles__$e = undefined;
  /* scoped */
  var __vue_scope_id__$e = undefined;
  /* module identifier */
  var __vue_module_identifier__$e = "data-v-7145ea3c";
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
  );//
//
//
//
//
//

var script$f = {
  name : 'tab',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$f = script$f;

/* template */
var __vue_render__$f = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$f = [];

  /* style */
  var __vue_inject_styles__$f = undefined;
  /* scoped */
  var __vue_scope_id__$f = undefined;
  /* module identifier */
  var __vue_module_identifier__$f = "data-v-68801c38";
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
  );//
//
//
//
//
//

var script$g = {
  name : 'table-body',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$g = script$g;

/* template */
var __vue_render__$g = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-body"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$g = [];

  /* style */
  var __vue_inject_styles__$g = undefined;
  /* scoped */
  var __vue_scope_id__$g = undefined;
  /* module identifier */
  var __vue_module_identifier__$g = "data-v-7418cf70";
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
  );//
//
//
//
//
//

var script$h = {
  name : 'table-foot',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$h = script$h;

/* template */
var __vue_render__$h = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-foot"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$h = [];

  /* style */
  var __vue_inject_styles__$h = undefined;
  /* scoped */
  var __vue_scope_id__$h = undefined;
  /* module identifier */
  var __vue_module_identifier__$h = "data-v-2bfad508";
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
  );//
//
//
//
//
//

var script$i = {
  name : 'table-head',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$i = script$i;

/* template */
var __vue_render__$i = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table-head"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$i = [];

  /* style */
  var __vue_inject_styles__$i = undefined;
  /* scoped */
  var __vue_scope_id__$i = undefined;
  /* module identifier */
  var __vue_module_identifier__$i = "data-v-7c460c0a";
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
  );//
//
//
//
//
//

  // @info maybe redundant to figure
var script$j = {
  name : 'thumbnail',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$j = script$j;

/* template */
var __vue_render__$j = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"thumbnail"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$j = [];

  /* style */
  var __vue_inject_styles__$j = undefined;
  /* scoped */
  var __vue_scope_id__$j = undefined;
  /* module identifier */
  var __vue_module_identifier__$j = "data-v-7c0d624b";
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
  );//
//
//
//
//
//

var script$k = {
  name : 'video',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$k = script$k;

/* template */
var __vue_render__$k = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"video"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$k = [];

  /* style */
  var __vue_inject_styles__$k = undefined;
  /* scoped */
  var __vue_scope_id__$k = undefined;
  /* module identifier */
  var __vue_module_identifier__$k = "data-v-46c79ede";
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
  );//
//
//
//
//
//

var script$l = {
  name : 'accordion-menu',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$l = script$l;

/* template */
var __vue_render__$l = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"accordion-menu"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$l = [];

  /* style */
  var __vue_inject_styles__$l = undefined;
  /* scoped */
  var __vue_scope_id__$l = undefined;
  /* module identifier */
  var __vue_module_identifier__$l = "data-v-0368ff76";
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
  );//
//
//
//
//
//

var script$m = {
  name : 'breadcrumbs',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$m = script$m;

/* template */
var __vue_render__$m = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"breadcrumbs"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$m = [];

  /* style */
  var __vue_inject_styles__$m = undefined;
  /* scoped */
  var __vue_scope_id__$m = undefined;
  /* module identifier */
  var __vue_module_identifier__$m = "data-v-01f62593";
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
  );//
//
//
//
//
//

var script$n = {
  name : 'button-group',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$n = script$n;

/* template */
var __vue_render__$n = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button-group"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$n = [];

  /* style */
  var __vue_inject_styles__$n = undefined;
  /* scoped */
  var __vue_scope_id__$n = undefined;
  /* module identifier */
  var __vue_module_identifier__$n = "data-v-78e1ccb6";
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
  );//
//
//
//
//
//

var script$o = {
  name : 'carousel',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$o = script$o;

/* template */
var __vue_render__$o = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"carousel"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$o = [];

  /* style */
  var __vue_inject_styles__$o = undefined;
  /* scoped */
  var __vue_scope_id__$o = undefined;
  /* module identifier */
  var __vue_module_identifier__$o = "data-v-b9d50e2e";
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
  );//
//
//
//
//
//

var script$p = {
  name : 'drill-down-menu',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$p = script$p;

/* template */
var __vue_render__$p = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"drill-down-menu"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$p = [];

  /* style */
  var __vue_inject_styles__$p = undefined;
  /* scoped */
  var __vue_scope_id__$p = undefined;
  /* module identifier */
  var __vue_module_identifier__$p = "data-v-153cf7fb";
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
  );//
//
//
//
//
//

var script$q = {
  name : 'drop-down-menu',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$q = script$q;

/* template */
var __vue_render__$q = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"drop-down-menu"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$q = [];

  /* style */
  var __vue_inject_styles__$q = undefined;
  /* scoped */
  var __vue_scope_id__$q = undefined;
  /* module identifier */
  var __vue_module_identifier__$q = "data-v-03b57e86";
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
  );//
//
//
//
//
//

var script$r = {
  name : 'footer',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$r = script$r;

/* template */
var __vue_render__$r = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"footer"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$r = [];

  /* style */
  var __vue_inject_styles__$r = undefined;
  /* scoped */
  var __vue_scope_id__$r = undefined;
  /* module identifier */
  var __vue_module_identifier__$r = "data-v-155bc824";
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
  );//
//
//
//
//
//

var script$s = {
  name : 'form',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$s = script$s;

/* template */
var __vue_render__$s = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$s = [];

  /* style */
  var __vue_inject_styles__$s = undefined;
  /* scoped */
  var __vue_scope_id__$s = undefined;
  /* module identifier */
  var __vue_module_identifier__$s = "data-v-1346a405";
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
  );//
//
//
//
//
//

var script$t = {
  name : 'form-input-group',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$t = script$t;

/* template */
var __vue_render__$t = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-input-group"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$t = [];

  /* style */
  var __vue_inject_styles__$t = undefined;
  /* scoped */
  var __vue_scope_id__$t = undefined;
  /* module identifier */
  var __vue_module_identifier__$t = "data-v-56e4b9d6";
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
  );//
//
//
//
//
//

var script$u = {
  name : 'gallery',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$u = script$u;

/* template */
var __vue_render__$u = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gallery"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$u = [];

  /* style */
  var __vue_inject_styles__$u = undefined;
  /* scoped */
  var __vue_scope_id__$u = undefined;
  /* module identifier */
  var __vue_module_identifier__$u = "data-v-e8017f56";
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
  );//
//
//
//
//
//

var script$v = {
  name : 'header',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$v = script$v;

/* template */
var __vue_render__$v = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$v = [];

  /* style */
  var __vue_inject_styles__$v = undefined;
  /* scoped */
  var __vue_scope_id__$v = undefined;
  /* module identifier */
  var __vue_module_identifier__$v = "data-v-9b09e008";
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
  );//
//
//
//
//
//

var script$w = {
  name : 'jumbotron',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$w = script$w;

/* template */
var __vue_render__$w = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"jumbotron"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$w = [];

  /* style */
  var __vue_inject_styles__$w = undefined;
  /* scoped */
  var __vue_scope_id__$w = undefined;
  /* module identifier */
  var __vue_module_identifier__$w = "data-v-8fa4e7a2";
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
  );//
//
//
//
//
//

var script$x = {
  name : 'list',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$x = script$x;

/* template */
var __vue_render__$x = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"list"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$x = [];

  /* style */
  var __vue_inject_styles__$x = undefined;
  /* scoped */
  var __vue_scope_id__$x = undefined;
  /* module identifier */
  var __vue_module_identifier__$x = "data-v-49b793ab";
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
  );//
//
//
//
//
//

var script$y = {
  name : 'menu',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$y = script$y;

/* template */
var __vue_render__$y = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"menu"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$y = [];

  /* style */
  var __vue_inject_styles__$y = undefined;
  /* scoped */
  var __vue_scope_id__$y = undefined;
  /* module identifier */
  var __vue_module_identifier__$y = "data-v-1d6f77aa";
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
  );//
//
//
//
//
//

var script$z = {
  name : 'modal',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$z = script$z;

/* template */
var __vue_render__$z = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$z = [];

  /* style */
  var __vue_inject_styles__$z = undefined;
  /* scoped */
  var __vue_scope_id__$z = undefined;
  /* module identifier */
  var __vue_module_identifier__$z = "data-v-58064760";
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
  );//
//
//
//
//
//

var script$A = {
  name : 'navigation',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$A = script$A;

/* template */
var __vue_render__$A = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$A = [];

  /* style */
  var __vue_inject_styles__$A = undefined;
  /* scoped */
  var __vue_scope_id__$A = undefined;
  /* module identifier */
  var __vue_module_identifier__$A = "data-v-45089275";
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
  );//
//
//
//
//
//

var script$B = {
  name : 'navigation-bar',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$B = script$B;

/* template */
var __vue_render__$B = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navigation-bar"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$B = [];

  /* style */
  var __vue_inject_styles__$B = undefined;
  /* scoped */
  var __vue_scope_id__$B = undefined;
  /* module identifier */
  var __vue_module_identifier__$B = "data-v-719cfb2f";
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
  );//
//
//
//
//
//

var script$C = {
  name : 'off-canvas',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$C = script$C;

/* template */
var __vue_render__$C = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"off-canvas"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$C = [];

  /* style */
  var __vue_inject_styles__$C = undefined;
  /* scoped */
  var __vue_scope_id__$C = undefined;
  /* module identifier */
  var __vue_module_identifier__$C = "data-v-3ecc0d13";
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
  );//
//
//
//
//
//

var script$D = {
  name : 'pagination',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$D = script$D;

/* template */
var __vue_render__$D = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pagination"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$D = [];

  /* style */
  var __vue_inject_styles__$D = undefined;
  /* scoped */
  var __vue_scope_id__$D = undefined;
  /* module identifier */
  var __vue_module_identifier__$D = "data-v-0d4d4cef";
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
  );//
//
//
//
//
//

var script$E = {
  name : 'progress-bar',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$E = script$E;

/* template */
var __vue_render__$E = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"progress-bar"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$E = [];

  /* style */
  var __vue_inject_styles__$E = undefined;
  /* scoped */
  var __vue_scope_id__$E = undefined;
  /* module identifier */
  var __vue_module_identifier__$E = "data-v-4c506d96";
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
  );//
//
//
//
//
//

var script$F = {
  name : 'rating',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$F = script$F;

/* template */
var __vue_render__$F = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"rating"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$F = [];

  /* style */
  var __vue_inject_styles__$F = undefined;
  /* scoped */
  var __vue_scope_id__$F = undefined;
  /* module identifier */
  var __vue_module_identifier__$F = "data-v-476d08ec";
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
  );//
//
//
//
//
//

var script$G = {
  name : 'relative-embed',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$G = script$G;

/* template */
var __vue_render__$G = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"relative-embed"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$G = [];

  /* style */
  var __vue_inject_styles__$G = undefined;
  /* scoped */
  var __vue_scope_id__$G = undefined;
  /* module identifier */
  var __vue_module_identifier__$G = "data-v-fa555f1e";
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
  );//
//
//
//
//
//

var script$H = {
  name : 'slider',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$H = script$H;

/* template */
var __vue_render__$H = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"slider"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$H = [];

  /* style */
  var __vue_inject_styles__$H = undefined;
  /* scoped */
  var __vue_scope_id__$H = undefined;
  /* module identifier */
  var __vue_module_identifier__$H = "data-v-77f6b3a8";
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
  );//
//
//
//
//
//

var script$I = {
  name : 'switch',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$I = script$I;

/* template */
var __vue_render__$I = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"switch"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$I = [];

  /* style */
  var __vue_inject_styles__$I = undefined;
  /* scoped */
  var __vue_scope_id__$I = undefined;
  /* module identifier */
  var __vue_module_identifier__$I = "data-v-68e4bad5";
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
  );//
//
//
//
//
//

var script$J = {
  name : 'table',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$J = script$J;

/* template */
var __vue_render__$J = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"table"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$J = [];

  /* style */
  var __vue_inject_styles__$J = undefined;
  /* scoped */
  var __vue_scope_id__$J = undefined;
  /* module identifier */
  var __vue_module_identifier__$J = "data-v-1cfb6e11";
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
  );//
//
//
//
//
//

var script$K = {
  name : 'tabs',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$K = script$K;

/* template */
var __vue_render__$K = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tabs"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$K = [];

  /* style */
  var __vue_inject_styles__$K = undefined;
  /* scoped */
  var __vue_scope_id__$K = undefined;
  /* module identifier */
  var __vue_module_identifier__$K = "data-v-282738cb";
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
  );//
//
//
//
//
//

var script$L = {
  name : 'toast',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$L = script$L;

/* template */
var __vue_render__$L = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toast"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$L = [];

  /* style */
  var __vue_inject_styles__$L = undefined;
  /* scoped */
  var __vue_scope_id__$L = undefined;
  /* module identifier */
  var __vue_module_identifier__$L = "data-v-2665fc0a";
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
  );//
//
//
//
//
//

var script$M = {
  name : 'tooltip',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$M = script$M;

/* template */
var __vue_render__$M = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tooltip"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$M = [];

  /* style */
  var __vue_inject_styles__$M = undefined;
  /* scoped */
  var __vue_scope_id__$M = undefined;
  /* module identifier */
  var __vue_module_identifier__$M = "data-v-d0980a34";
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
  );//
//
//
//
//
//

var script$N = {
  name : 'top-bar',

  components : {},

  mounted: function mounted() {
    //
  },

  created: function created() {
    //
  },
};/* script */
var __vue_script__$N = script$N;

/* template */
var __vue_render__$N = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"top-bar"},[_vm._ssrNode("<p>This is a test!</p>")])};
var __vue_staticRenderFns__$N = [];

  /* style */
  var __vue_inject_styles__$N = undefined;
  /* scoped */
  var __vue_scope_id__$N = undefined;
  /* module identifier */
  var __vue_module_identifier__$N = "data-v-2cdb1104";
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
  );// Elements
var components=/*#__PURE__*/Object.freeze({__proto__:null,Alert: __vue_component__,Badge: __vue_component__$1,Breadcrumb: __vue_component__$2,Button: __vue_component__$3,Dislike: __vue_component__$4,Emoticon: __vue_component__$5,Favorite: __vue_component__$6,Featured: __vue_component__$7,FormInput: __vue_component__$8,Icon: __vue_component__$9,Like: __vue_component__$a,ListItem: __vue_component__$b,MenuEntry: __vue_component__$c,Post: __vue_component__$d,Spinner: __vue_component__$e,Tab: __vue_component__$f,TableBody: __vue_component__$g,TableFoot: __vue_component__$h,TableHead: __vue_component__$i,Thumbnail: __vue_component__$j,Video: __vue_component__$k,AccordionMenu: __vue_component__$l,Breadcrumbs: __vue_component__$m,ButtonGroup: __vue_component__$n,Carousel: __vue_component__$o,DrillDownMenu: __vue_component__$p,DropDownMenu: __vue_component__$q,Footer: __vue_component__$r,Form: __vue_component__$s,FormInputGroup: __vue_component__$t,Gallery: __vue_component__$u,Header: __vue_component__$v,Jumbotron: __vue_component__$w,List: __vue_component__$x,Menu: __vue_component__$y,Modal: __vue_component__$z,Navigation: __vue_component__$A,NavigationBar: __vue_component__$B,OffCanvas: __vue_component__$C,Pagination: __vue_component__$D,ProgressBar: __vue_component__$E,Rating: __vue_component__$F,RelativeEmbed: __vue_component__$G,Slider: __vue_component__$H,Switch: __vue_component__$I,Table: __vue_component__$J,Tabs: __vue_component__$K,Toast: __vue_component__$L,Tooltip: __vue_component__$M,TopBar: __vue_component__$N});//// Wrapper (internal)

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
}exports.AccordionMenu=__vue_component__$l;exports.Alert=__vue_component__;exports.Badge=__vue_component__$1;exports.Breadcrumb=__vue_component__$2;exports.Breadcrumbs=__vue_component__$m;exports.Button=__vue_component__$3;exports.ButtonGroup=__vue_component__$n;exports.Carousel=__vue_component__$o;exports.Dislike=__vue_component__$4;exports.DrillDownMenu=__vue_component__$p;exports.DropDownMenu=__vue_component__$q;exports.Emoticon=__vue_component__$5;exports.Favorite=__vue_component__$6;exports.Featured=__vue_component__$7;exports.Footer=__vue_component__$r;exports.Form=__vue_component__$s;exports.FormInput=__vue_component__$8;exports.FormInputGroup=__vue_component__$t;exports.Gallery=__vue_component__$u;exports.Header=__vue_component__$v;exports.Icon=__vue_component__$9;exports.Jumbotron=__vue_component__$w;exports.Like=__vue_component__$a;exports.List=__vue_component__$x;exports.ListItem=__vue_component__$b;exports.Menu=__vue_component__$y;exports.MenuEntry=__vue_component__$c;exports.Modal=__vue_component__$z;exports.Navigation=__vue_component__$A;exports.NavigationBar=__vue_component__$B;exports.OffCanvas=__vue_component__$C;exports.Pagination=__vue_component__$D;exports.Post=__vue_component__$d;exports.ProgressBar=__vue_component__$E;exports.Rating=__vue_component__$F;exports.RelativeEmbed=__vue_component__$G;exports.Slider=__vue_component__$H;exports.Spinner=__vue_component__$e;exports.Switch=__vue_component__$I;exports.Tab=__vue_component__$f;exports.Table=__vue_component__$J;exports.TableBody=__vue_component__$g;exports.TableFoot=__vue_component__$h;exports.TableHead=__vue_component__$i;exports.Tabs=__vue_component__$K;exports.Thumbnail=__vue_component__$j;exports.Toast=__vue_component__$L;exports.Tooltip=__vue_component__$M;exports.TopBar=__vue_component__$N;exports.Video=__vue_component__$k;exports.default=plugin;exports.install=install;