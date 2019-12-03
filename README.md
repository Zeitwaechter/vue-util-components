# vue-util-components
Another collection of Vue Utility Components, css based on Tailwind CSS.

## General Information
Comes as it goes.

There are several directives within this package, see `/src/components/index.js` for more specific names.

## Docs
To preview the intended design simply open the `index.html` file in the repository root (`/`).

No changes will be made to Tailwind CSS' defaults even though the `tailwind.js` got added - otherwise it'll be stated here.

## Install
- `npm i [name to be found] --save-dev`
- `import { directive } from '[name to be found]';`

## Dependencies
Please see their related Licensing.

- [Bublé](https://github.com/bublejs/buble), a ES2015 parser, is being used because it's less configuration and faster than Babel.
- [Path](https://nodejs.org/docs/latest-v10.x/api/path.html#path_path_resolve_paths), nodejs native module.
- [rollup.js](https://www.npmjs.com/package/rollup) packages, it's a module bundler for JavaScript.
- [Tailwind CSS](tailwindcss), a utility-first CSS framework for rapidly building custom user interfaces.
- [Terser](https://www.npmjs.com/package/terser) for parsing and mangler/compressor for ES6+ (fork of uglify-es).
- [Yargs-Parser](https://github.com/yargs/yargs-parser), do the arr-arr-argument parsing.

## Further Reading
- [Mozilla Hacks - ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- [Packaging Vue Components for npm](https://vuejs.org/v2/cookbook/packaging-sfc-for-npm.html#Packaging-Components-for-npm)
- [Rollup Plugin Vue](https://rollup-plugin-vue.vuejs.org/#what-does-rollup-plugin-vue-do)
- [WAI-ARIA Tags](https://www.w3.org/WAI/PF/aria/roles#tabpanel)

## Licensing
This package is currently build with `MIT` in mind.

## Contributing
Please see `CODE_OF_CONDUCT.md` if you want to add something to this project of mine.

If you are not happy with how I deal with things, always feel free to fork/PR :D
