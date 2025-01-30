!function(){"use strict";var e=window.React,t=window.wp.blocks,r=JSON.parse('{"u2":"wpzoom-forms/text-website-field"}');function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var a=window.wp.blockEditor,c=window.wp.element,i=window.wp.i18n,u=window.wp.components;function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var s=r.u2;(0,t.registerBlockType)(s,{icon:(0,e.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100"},(0,e.createElement)("path",{d:"M15,58.75c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h10c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25h-3.75 v-17.5H25c0.69,0,1.25-0.56,1.25-1.25s-0.56-1.25-1.25-1.25H15c-0.69,0-1.25,0.56-1.25,1.25s0.56,1.25,1.25,1.25h3.75v17.5H15z"}),(0,e.createElement)("path",{d:"M92.5,30h-85C6.119,30,5,31.119,5,32.5v35C5,68.881,6.119,70,7.5,70h85c1.381,0,2.5-1.119,2.5-2.5v-35 C95,31.119,93.881,30,92.5,30z M90,65H10V35h80V65z"}),(0,e.createElement)("path",{d:"M51.364 45.243q0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.26q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68h-2.52q.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68h.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h2.52q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h.84q.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68Zm16.796 0q0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.26q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68h-2.52q.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68h.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h2.52q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h.84q.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68Zm16.797 0q0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-1.26q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68h-2.52q.168.672.168 1.68 0 .966-.168 1.68h-.84q.168.672.168 1.68 0 .966-.168 1.68h-2.52q-.168-.714-.168-1.68 0-1.008.168-1.68h-.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h-1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68h.84q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h2.52q.168.672.168 1.68 0 .966-.168 1.68.168.672.168 1.68 0 .966-.168 1.68h.84q.168.672.168 1.68 0 .966-.168 1.68h1.26q-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68-.168-.714-.168-1.68 0-1.008.168-1.68h3.36q.168.672.168 1.68Z"})),edit:function(t){var r=(0,a.useBlockProps)(),n=t.attributes,m=t.setAttributes,s=t.clientId,p=n.id,f=n.name,b=n.placeholder,w=n.label,y=n.showLabel,q=n.required;(0,c.useEffect)((function(){p||m({id:"input_"+s.substr(0,8)})}),[]);var d,v,g=(d=(0,c.useState)(p),v=1,function(e){if(Array.isArray(e))return e}(d)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,a,c=[],i=!0,u=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=l.call(r)).done)&&(c.push(n.value),c.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{if(!i&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(d,v)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(d,v)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return(0,e.createElement)(c.Fragment,null,(0,e.createElement)(a.InspectorControls,null,(0,e.createElement)(u.PanelBody,{title:(0,i.__)("Options","wpzoom-forms")},(0,e.createElement)(u.TextControl,{label:(0,i.__)("Name","wpzoom-forms"),value:f,placeholder:(0,i.__)("e.g. My Website Field","wpzoom-forms"),onChange:function(e){e.replace(/\s/g,"_").toLowerCase(),m({name:e,id:"input_"+s.substr(0,8)})}}),(0,e.createElement)(u.TextControl,{label:(0,i.__)("Placeholder","wpzoom-forms"),value:b,onChange:function(e){return m({placeholder:e})}}),(0,e.createElement)(u.ToggleControl,{label:(0,i.__)("Show Label","wpzoom-forms"),checked:!!y,onChange:function(e){return m({showLabel:!!e})}}),y&&(0,e.createElement)(u.TextControl,{label:(0,i.__)("Label","wpzoom-forms"),value:w,onChange:function(e){return m({label:e})}}),(0,e.createElement)(u.ToggleControl,{label:(0,i.__)("Required","wpzoom-forms"),checked:!!q,onChange:function(e){return m({required:!!e})}}))),(0,e.createElement)(c.Fragment,null,y&&(0,e.createElement)("label",{htmlFor:g},(0,e.createElement)(a.RichText,{tagName:"label",placeholder:(0,i.__)("Label","wpzoom-forms"),value:w,htmlFor:g,onChange:function(e){return m({label:e})}}),q&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,i.__)("*","wpzoom-forms"))),(0,e.createElement)("input",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({type:"url",name:g,id:g,placeholder:b,required:!!q},r))))},save:function(t){var r=t.attributes,n=a.useBlockProps.save(),l=r.id,c=(r.name,r.placeholder),u=r.label,h=r.showLabel,s=r.required;return(0,e.createElement)(e.Fragment,null,h&&(0,e.createElement)("label",{htmlFor:l},(0,e.createElement)(a.RichText.Content,{tagName:"label",value:u,htmlFor:l}),s&&(0,e.createElement)("sup",{className:"wp-block-wpzoom-forms-required"},(0,i.__)("*","wpzoom-forms"))),(0,e.createElement)("input",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({type:"url",name:l,id:l,placeholder:c,required:!!s},n)))}})}();