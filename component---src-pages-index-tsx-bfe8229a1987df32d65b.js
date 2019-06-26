(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{167:function(e,t,n){"use strict";n.r(t);n(41),n(96);var a=n(0),r=n.n(a),o=n(170),i=n(177),c=n(175),l=n(169),s=[{description:"Summing up 2+ years of learnings from my journey into the React Native jungle. How to get started? What to be aware of? Lessons learned and battles fought.",linkTo:"https://www.youtube.com/watch?v=S12ypU2VFfU",title:"A journey into React Native development 🌴",subTitle:"Copenhagen React Meetup at Leo Innovation Lab (May 2019)"},{description:"My motivation for making contributing to open source software my new year’s resolution in 2017. Hopefully, this will motivate people to do the same thing.",linkTo:"https://speakerdeck.com/skovhus/making-open-source-my-new-years-resolution",title:"Making open source my new year’s resolution",subTitle:"Tech festival (September 2017)"},{description:"A brief motivation for the importance of static type safety in larger codebases. Comparison of different static type-checkers options for front-end code: TypeScript, Flow, Reason, Elm. Trade-offs and recommendations.",linkTo:"https://speakerdeck.com/skovhus/type-safety-plus-front-end-code-equals",title:"type safety + front-end code =",subTitle:"Copenhagen.js Meetup at issuu.com (June 2017)"},{description:'Short and practical introduction to codemods. They are "scripted search and replace" and super useful for automation and refactoring.',linkTo:"https://www.youtube.com/watch?v=eMI0UBav8Q4",title:"An introduction to automated refactoring with JavaScript codemods 👾",subTitle:"Copenhagen.js Meetup (December 2016)"},{description:"As frameworks come and go and best practices see constant change, it is increasingly challenging to make confident decisions about client-side code. We present our experiences in search for the right abstractions and architecture optimized for change. We also elaborate on how selecting the React ecosystem for our stack improved our workflow and product quality, as well as examine problems we faced.",linkTo:"https://vimeo.com/168543655",title:"Rethinking front-end development at issuu.com",subTitle:"At the Frontend Conference (May 2016)"},{description:"After using React since early 2015 it was time to evaluate the first year. Where did we come from? What improvements to our codebase did React introduce? Based on learnings from issuu.com.",linkTo:"https://speakerdeck.com/skovhus/evaluating-a-year-working-with-react-and-redux",title:"Evaluating a year working with React & Redux",subTitle:"React and Redux Copenhagen Meetup (April 2016)"}];n.d(t,"default",function(){return m}),n.d(t,"pageQuery",function(){return h});var A=function(e){var t=e.children,n=e.id;return r.a.createElement("h1",{style:{fontSize:"2rem"},id:n},t)},u=function(e){var t=e.children,n=e.underline,a=void 0===n||n,o=e.linkTo;return r.a.createElement("a",{href:o,style:a?{}:{boxShadow:"none"},target:"_blank",rel:"nofollow noopener noreferrer"},t)},d=function(e){var t=e.description,n=e.linkTo,a=e.subTitle,i=e.title,c=n.startsWith("http")?r.a.createElement(u,{linkTo:n,underline:!1},i):r.a.createElement(o.a,{style:{boxShadow:"none"},to:n},i);return r.a.createElement("div",null,r.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},c),r.a.createElement("small",null,a),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t}}))};function m(e){var t=e.data,n=e.location,a=t.allMarkdownRemark.edges;return r.a.createElement(i.a,{location:n},r.a.createElement(c.a,{title:"Welcome"}),r.a.createElement(A,null,"Hi, I'm Kenneth Skovhus. I've been messing around with computers for as long as I can remember. MSc in Computer Science. Enjoys life in beautiful Copenhagen."),r.a.createElement(A,{id:"posts"},"I occasionally blog"),a.map(function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return r.a.createElement(d,{description:t.frontmatter.description||t.excerpt,key:t.fields.slug,linkTo:t.fields.slug,subTitle:t.frontmatter.date+" • "+t.timeToRead+" minutes read",title:n})}),r.a.createElement(A,{id:"talks"},"I give talks"),s.map(function(e){return r.a.createElement(d,Object.assign({},e,{key:e.title}))}),r.a.createElement(A,null,"I contribute to Open Source"),r.a.createElement("p",null,"I'm a strong advocate for Open Source Software and giving back to the community that I depend on to do my job and projects."),r.a.createElement("p",null,"Highlights:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u,{linkTo:"https://github.com/skovhus/jest-codemods"},"skovhus/jest-codemods")),r.a.createElement("li",null,r.a.createElement(u,{linkTo:"https://github.com/skovhus/css-modules-flow-types"},"skovhus/css-modules-flow-types")),r.a.createElement("li",null,r.a.createElement(u,{linkTo:"https://hatch.sh/"},"hatch.sh")),r.a.createElement("li",null,r.a.createElement(u,{linkTo:"https://github.com/mads-hartmann/bash-language-server"},"bash-language-server")," ","+ editors extensions for bash"),r.a.createElement("li",null,r.a.createElement(u,{linkTo:"https://github.com/facebook/jest"},"jest"))))}var h="599335173"},169:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return s});var a=n(179),r=n.n(a),o=n(180),i=n.n(o);n(162);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},".gatsby-resp-image-figcaption":{textAlign:"center",fontSize:"0.8rem"},ul:{marginLeft:"2rem !important"},blockquote:{fontSize:"1em"},a:{color:"var(--primary-color)"},"mark,ins":{background:"var(--primary-color)"}}},delete i.a.googleFonts;var c=new r.a(i.a);var l=c.rhythm,s=c.scale},170:function(e,t,n){"use strict";n.d(t,"b",function(){return u});var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=n(40),l=n.n(c);n.d(t,"a",function(){return l.a});n(171);var s=r.a.createContext({});function A(e){var t=e.staticQueryData,n=e.data,a=e.query,o=e.render,i=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,n=e.query,a=e.render,o=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(A,{data:t,query:n,render:a||o,staticQueryData:e})})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},171:function(e,t,n){var a;e.exports=(a=n(173))&&a.default||a},172:function(e,t,n){"use strict";n.d(t,"a",function(){return A});n(178);var a=n(174),r=n(0),o=n.n(r),i=n(170),c=n(181),l=n.n(c),s=n(169);function A(){return o.a.createElement(i.b,{query:"628634551",render:function(e){return o.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:"Kenneth Skovhus",style:{marginRight:Object(s.a)(.5),marginBottom:0,minWidth:60,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}})},data:a})}},173:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=n(64),l=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json)):null};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},174:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQCAQP/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQID/9oADAMBAAIQAxAAAAGjNkEvwZNIjSegP//EABkQAAMBAQEAAAAAAAAAAAAAAAABAgMSEf/aAAgBAQABBQLPVTlpVHMs4SNH6/C7pltt9M//xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPwEj/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPwFqa//EAB4QAAIBAwUAAAAAAAAAAAAAAAABEAIRQRIhMTKR/9oACAEBAAY/AtNPYV2cvwwYi7Zu24//xAAaEAADAAMBAAAAAAAAAAAAAAAAAREhMXFB/9oACAEBAAE/IUJlrxDFYE9MblhwbCh8MThbtTJh4NaKX3cEhSn/2gAMAwEAAgADAAAAEG8HvP/EABkRAQACAwAAAAAAAAAAAAAAAAEAEBEhUf/aAAgBAwEBPxAGGb7Br//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8QdKEWf//EAB0QAQACAgMBAQAAAAAAAAAAAAEAESExQVFxYaH/2gAIAQEAAT8Q05L6Mx3jcSjq/wBiy4dkKFHAKl1mALEsTYffCUAOVc8RekXCNV51Aag1bUCDA7zP/9k=",width:60,height:60,src:"/static/88df812714078f55c0b7a5b61b33fafd/9c097/skovhus.jpg",srcSet:"/static/88df812714078f55c0b7a5b61b33fafd/9c097/skovhus.jpg 1x,\n/static/88df812714078f55c0b7a5b61b33fafd/c5aad/skovhus.jpg 1.5x,\n/static/88df812714078f55c0b7a5b61b33fafd/1f6c0/skovhus.jpg 2x"}}}}}},175:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var a=n(176),r=n(0),o=n.n(r),i=n(182),c=n.n(i);function l(e){var t=e.description,n=e.lang,r=e.meta,i=e.title,l=a.data.site,s=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:i},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"@kenneth_skovhus"},{name:"twitter:creator",content:"@kenneth_skovhus"},{name:"twitter:title",content:i},{name:"twitter:description",content:s}].concat(r)})}l.defaultProps={lang:"en",meta:[],description:""}},176:function(e){e.exports={data:{site:{siteMetadata:{title:"Kenneth Skovhus",description:"Personal website and blog by Kenneth Skovhus.",author:"Kenneth Skovhus"}}}}},177:function(e,t,n){"use strict";n(41);var a=n(0),r=n.n(a),o=n(169);n(163);function i(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:"https://github.com/skovhus"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},r.a.createElement("path",{d:"M8 0C3.58 0 0 3.582 0 8c0 3.535 2.292 6.533 5.47 7.59.4.075.547-.172.547-.385 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.924-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.223 1.873.87 2.33.665.072-.517.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.953 0-.873.31-1.587.823-2.147-.09-.202-.36-1.015.07-2.117 0 0 .67-.215 2.2.82.64-.178 1.32-.266 2-.27.68.004 1.36.092 2 .27 1.52-1.035 2.19-.82 2.19-.82.43 1.102.16 1.915.08 2.117.51.56.82 1.274.82 2.147 0 3.073-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38C13.71 14.53 16 11.53 16 8c0-4.418-3.582-8-8-8"}))),r.a.createElement("a",{href:"https://twitter.com/kenneth_skovhus"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},r.a.createElement("path",{d:"M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z",fillRule:"nonzero"}))),r.a.createElement("a",{href:"https://medium.com/@skovhus"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},r.a.createElement("path",{d:"M11.824 12.628l-.276.45.798.398 2.744 1.372c.15.076.294.11.418.11.278 0 .467-.177.467-.492V5.883l-4.15 6.745zm4.096-8.67c-.004-.003 0-.01-.003-.012l-4.825-2.412c-.06-.03-.123-.038-.187-.044-.016 0-.03-.01-.047-.01-.184 0-.368.092-.467.254l-.24.39-.5.814-1.89 3.08 1.89 3.076.5.813.5.812.59.95 4.71-7.64c.02-.03.01-.06-.02-.08zm-6.27 7.045L7.17 6.97l-.295-.477-.294-.477-.25-.416v4.867l3.32 1.663.5.25.5.25-.5-.813-.5-.813zM.737 1.68L.59 1.608c-.085-.042-.166-.062-.24-.062-.206 0-.35.16-.35.427v10.162c0 .272.2.594.442.716l4.145 2.08c.107.06.208.08.3.08.257 0 .438-.2.438-.53V4.01c0-.02-.012-.04-.03-.047L.738 1.68z"}))),r.a.createElement("a",{href:"spotify:user:113185320"},r.a.createElement("svg",{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("path",{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"}))),r.a.createElement("a",{href:"https://www.linkedin.com/in/skovhus"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:"1.414"},r.a.createElement("path",{d:"M13.632 13.635h-2.37V9.922c0-.886-.018-2.025-1.234-2.025-1.235 0-1.424.964-1.424 1.96v3.778h-2.37V6H8.51v1.04h.03c.318-.6 1.092-1.233 2.247-1.233 2.4 0 2.845 1.58 2.845 3.637v4.188zM3.558 4.955c-.762 0-1.376-.617-1.376-1.377 0-.758.614-1.375 1.376-1.375.76 0 1.376.617 1.376 1.375 0 .76-.617 1.377-1.376 1.377zm1.188 8.68H2.37V6h2.376v7.635zM14.816 0H1.18C.528 0 0 .516 0 1.153v13.694C0 15.484.528 16 1.18 16h13.635c.652 0 1.185-.516 1.185-1.153V1.153C16 .516 15.467 0 14.815 0z",fillRule:"nonzero"})))))}var c=n(170),l=n(172),s=(n(164),function(e){var t=e.children,n=e.to,a=e.style,o=void 0===a?{}:a;return r.a.createElement(c.a,{style:Object.assign({boxShadow:"none",textDecoration:"none",color:"inherit"},o),to:n},t)});function A(e){var t=e.pageWidthStyles;return r.a.createElement("header",null,r.a.createElement("nav",{style:Object.assign({},t)},r.a.createElement(s,{to:"/",style:{display:"flex",alignItems:"center"}},r.a.createElement(l.a,null),r.a.createElement("span",null,"Kenneth Skovhus"))))}function u(e){e.location;var t=e.children,n={marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:"0 "+Object(o.a)(.75)};return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{pageWidthStyles:n}),r.a.createElement("div",{style:Object.assign({marginLeft:"auto",marginRight:"auto"},n)},r.a.createElement("main",null,t)),r.a.createElement(i,null))}n.d(t,"a",function(){return u})}}]);
//# sourceMappingURL=component---src-pages-index-tsx-bfe8229a1987df32d65b.js.map