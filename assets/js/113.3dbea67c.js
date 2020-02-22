(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{384:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("RouterLink",{attrs:{to:"/util/"}},[t._v("Polkadot JS Common")]),t._v(" › "),a("RouterLink",{attrs:{to:"/util/globals.html"}},[t._v("Globals")]),t._v(" › "),a("RouterLink",{attrs:{to:"/util/modules/_assert_.html"}},[t._v('"assert"')])],1),t._v(" "),a("h1",{attrs:{id:"external-module-assert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-module-assert"}},[t._v("#")]),t._v(' External module: "assert"')]),t._v(" "),a("h2",{attrs:{id:"index"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#index"}},[t._v("#")]),t._v(" Index")]),t._v(" "),a("h3",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/util/modules/_assert_.html#assert"}},[t._v("assert")])],1)]),t._v(" "),a("h2",{attrs:{id:"functions-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions-2"}},[t._v("#")]),t._v(" Functions")]),t._v(" "),a("h3",{attrs:{id:"assert"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assert"}},[t._v("#")]),t._v(" assert")]),t._v(" "),a("p",[t._v("▸ "),a("strong",[t._v("assert")]),t._v("("),a("code",[t._v("condition")]),t._v(": boolean | object | string | number | undefined | null, "),a("code",[t._v("message")]),t._v(": string | MessageFn): "),a("em",[t._v("asserts condition")])]),t._v(" "),a("p",[a("em",[t._v("Defined in "),a("a",{attrs:{href:"https://github.com/polkadot-js/common/blob/b0ee79f90/packages/util/src/assert.ts#L25",target:"_blank",rel:"noopener noreferrer"}},[t._v("assert.ts:25"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[a("code",[t._v("name")])]),t._v(" assert")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("summary")])]),t._v(" Checks for a valid test, if not Error is thrown.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("description")])]),t._v("\nChecks that "),a("code",[t._v("test")]),t._v(" is a truthy value. If value is falsy ("),a("code",[t._v("null")]),t._v(", "),a("code",[t._v("undefined")]),t._v(", "),a("code",[t._v("false")]),t._v(", ...), it throws an Error with the supplied "),a("code",[t._v("message")]),t._v(". When "),a("code",[t._v("test")]),t._v(" passes, "),a("code",[t._v("true")]),t._v(" is returned.")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("example")])]),t._v(" "),a("BR")],1),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" assert "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@polkadot/util'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'True should be true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// passes")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'False should not be true'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error thrown")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("assert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Error with 'message'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[a("strong",[t._v("Parameters:")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("condition")])]),t._v(" "),a("td",[t._v("boolean | object | string | number | undefined | null")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("message")])]),t._v(" "),a("td",[t._v("string | MessageFn")])])])]),t._v(" "),a("p",[a("strong",[t._v("Returns:")]),t._v(" "),a("em",[t._v("asserts condition")])])])}),[],!1,null,null,null);s.default=n.exports}}]);