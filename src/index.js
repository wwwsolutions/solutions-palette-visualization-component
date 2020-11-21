/* ROOT FILE
//////////////////////////////////////////////*/

console.log('\'index.js\' loaded.');

// [LOAD CORE.JS MODULES]
// https://github.com/zloirock/core-js/blob/master/docs/2019-03-19-core-js-3-babel-and-a-look-into-the-future.md
// import "core-js/modules/es.array.unscopables.flat";
// import "core-js/modules/es.array.unscopables.flat-map";
// import "core-js/modules/esnext.math.clamp";
// import "core-js/modules/esnext.math.deg-per-rad";
// import "core-js/modules/esnext.math.degrees";
// import "core-js/modules/esnext.math.fscale";
// import "core-js/modules/esnext.math.rad-per-deg";
// import "core-js/modules/esnext.math.radians";
// import "core-js/modules/esnext.math.scale";

// [LOAD BABEL PLUGINS]
// ----------------------------------------------------------------------

// https://babeljs.io/docs/en/babel-plugin-transform-runtime
import '@babel/runtime/regenerator';

// [LOAD VENDOR CODE]
// ----------------------------------------------------------------------

// https://modernizr.com/download?-flexbox-srcset-svg-setclasses-dontmin
// import './vendors/js/modernizr';

// https://www.npmjs.com/package/lazysizes
// import './vendors/js/lazysizes';

// https://www.npmjs.com/package/picturefill
// import './vendors/js/picturefill';

// https://stackoverflow.com/questions/52455614/install-font-awesome-5-with-npm
import '@fortawesome/fontawesome-free/js/all.min';


// [LOAD STYLES]
// ----------------------------------------------------------------------
import './styles/main.css';

// [LOAD APP]
// ----------------------------------------------------------------------
import './app/application';

// ENABLE HMR
// https://webpack.js.org/guides/hot-module-replacement/
if (module.hot) {
  module.hot.accept();
}


