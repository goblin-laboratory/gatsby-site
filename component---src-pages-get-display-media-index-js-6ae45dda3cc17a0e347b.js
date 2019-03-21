(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{144:function(e,t,a){"use strict";a.r(t),function(e){a(34),a(77);var n=a(74),r=a.n(n),i=a(263),c=a.n(i),l=(a(229),a(265)),u=a.n(l),o=(a(76),a(0)),s=a.n(o),p=(a(154),a(266),a(412)),d=a(411),m=a(278),f=a(285),g=a(413),b=a(409),E=a(414),y=a(410),h=a(172),v=(a(202),a(165)),w=(a(267),function(e){if(e&&e.getTracks)try{e.getTracks().forEach(function(e){try{e.stop()}catch(t){}})}catch(t){}}),A=function(){var t=u()(c.a.mark(function t(a){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.navigator.mediaDevices.getDisplayMedia({video:a});case 3:return n=t.sent,t.abrupt("return",n);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",null);case 10:case"end":return t.stop()}},t,null,[[0,7]])}));return function(e){return t.apply(this,arguments)}}();t.default=d.a.create()(function(e){var t=e.form,a=s.a.useRef(null),n=s.a.useState(!1),i=n[0],l=n[1],o=s.a.useState(null),T=o[0],C=o[1],x=s.a.useState(null),S=x[0],q=x[1],k=s.a.useState(null),R=k[0],D=k[1];s.a.useEffect(function(){return(e=u()(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!i){e.next=2;break}return e.abrupt("return");case 2:if(l(!0),w(S),q(null),T){e.next=8;break}return l(!1),e.abrupt("return");case 8:return e.next=10,A(T);case 10:t=e.sent,q(t),l(!1);case 13:case"end":return e.stop()}},e)})),function(){return e.apply(this,arguments)})(),function(){};var e},[T]),s.a.useEffect(function(){return D(null),S&&a&&a.current&&(a.current.srcObject=S),function(){}},[S]);return s.a.createElement(h.a,null,s.a.createElement(v.a,{title:"getDisplayMedia",keywords:["getDisplayMedia"]}),s.a.createElement("h1",null,"getDisplayMedia"),s.a.createElement("p",null,s.a.createElement("a",{href:"https://w3c.github.io/mediacapture-screen-share."},"参考文档")),s.a.createElement(p.a,{title:"参数",style:{marginBottom:16}},s.a.createElement(d.a,{onSubmit:function(e){e.preventDefault(),t.validateFieldsAndScroll(function(e,t){var a=t.resolution,n=r()(t,["resolution"]);if(!e){var i=a.split("x"),c=i[0],l=i[1];C(Object.assign({},n,{width:c,height:l}))}})}},s.a.createElement(m.a,{gutter:16},s.a.createElement(f.a,{span:12},s.a.createElement(d.a.Item,{required:!0,label:"分辨率",labelCol:{span:8},wrapperCol:{span:16}},t.getFieldDecorator("resolution",{initialValue:"1920x1080"})(s.a.createElement(g.a,null,["1920x1080","1280x720","960x540"].map(function(e){return s.a.createElement(g.a.Option,{value:e,key:e},e)}))))),s.a.createElement(f.a,{span:12},s.a.createElement(d.a.Item,{required:!0,label:"frameRate",labelCol:{span:8},wrapperCol:{span:16}},t.getFieldDecorator("frameRate",{initialValue:25})(s.a.createElement(g.a,null,[25,20,15].map(function(e){return s.a.createElement(g.a.Option,{value:e,key:e},e)}))))),s.a.createElement(f.a,{span:12},s.a.createElement(d.a.Item,{required:!0,label:"aspectRatio",labelCol:{span:8},wrapperCol:{span:16}},t.getFieldDecorator("aspectRatio",{initialValue:1.7777777777})(s.a.createElement(g.a,null,[1.7777777777,1.3333333333,.5625].map(function(e){return s.a.createElement(g.a.Option,{value:e,key:e},e)}))))),s.a.createElement(f.a,{span:12},s.a.createElement(d.a.Item,{required:!0,label:"resizeMode",labelCol:{span:8},wrapperCol:{span:16}},t.getFieldDecorator("resizeMode",{initialValue:"none"})(s.a.createElement(g.a,null,["none","crop-and-scale"].map(function(e){return s.a.createElement(g.a.Option,{value:e,key:e},e)}))))),s.a.createElement(f.a,{span:12},s.a.createElement(d.a.Item,{required:!0,label:"displaySurface",labelCol:{span:8},wrapperCol:{span:16}},t.getFieldDecorator("displaySurface",{initialValue:"monitor"})(s.a.createElement(g.a,null,["monitor","window","application","browser"].map(function(e){return s.a.createElement(g.a.Option,{value:e,key:e},e)}))))),s.a.createElement(f.a,{span:12},s.a.createElement(d.a.Item,{required:!0,label:"logicalSurface",labelCol:{span:8},wrapperCol:{span:16}},t.getFieldDecorator("logicalSurface",{initialValue:!1,valuePropName:"checked"})(s.a.createElement(b.a,null)))),s.a.createElement(f.a,{span:12},s.a.createElement(d.a.Item,{required:!0,label:"cursor",labelCol:{span:8},wrapperCol:{span:16}},t.getFieldDecorator("cursor",{initialValue:"never"})(s.a.createElement(g.a,null,["never","always","motion"].map(function(e){return s.a.createElement(g.a.Option,{value:e,key:e},e)}))))),s.a.createElement(f.a,{span:24},s.a.createElement(d.a.Item,{wrapperCol:{span:16,offset:4}},s.a.createElement(E.a,{type:"primary",htmlType:"submit",loading:i},"开始"),"    ",s.a.createElement(E.a,{type:"default",disabled:i||!S,onClick:function(){return C(null)}},"停止")))))),s.a.createElement(p.a,{title:"视频"},R&&s.a.createElement("div",null,"分辨率：",R.width,"x",R.height,"，",R.current.currentTime>R.last.currentTime&&s.a.createElement("span",null,"  实时帧率：",((R.current.frameCount-R.last.frameCount)/(R.current.currentTime-R.last.currentTime)).toFixed(2),"，"),R.current.currentTime&&s.a.createElement("span",null,"  平均帧率：",(R.current.frameCount/R.current.currentTime).toFixed(2)),s.a.createElement(y.a,null)),S&&s.a.createElement("video",{ref:a,autoPlay:!0,controls:!0,className:"video",onTimeUpdate:function(e){var t={frameCount:e.target.webkitDecodedFrameCount,currentTime:e.target.currentTime},a={width:e.target.videoWidth,height:e.target.videoHeight};R?1<t.currentTime-R.current.currentTime?(a.current=t,a.last=R.current):(a.current=R.current,a.last=R.last):(a.current=t,a.last=t),D(a)}})))})}.call(this,a(73))},154:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(32),u=a.n(l);a.d(t,"a",function(){return u.a});a(157);var o=r.a.createContext({}),s=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},157:function(e,t,a){var n;e.exports=(n=a(164))&&n.default||n},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},164:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(57),u=a(2),o=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},165:function(e,t,a){"use strict";var n=a(166),r=a(0),i=a.n(r),c=a(4),l=a.n(c),u=a(186),o=a.n(u);function s(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,l=e.title,u=n.data.site,s=t||u.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=s},166:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},172:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),c=a(4),l=a.n(c),u=a(154),o=function(e){var t=e.siteTitle;return i.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(u.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};o.propTypes={siteTitle:l.a.string},o.defaultProps={siteTitle:""};var s=o,p=(a(185),function(e){var t=e.children;return i.a.createElement(u.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});p.propTypes={children:l.a.node.isRequired};t.a=p},202:function(e,t,a){"use strict";var n=a(203),r=a(0),i=a.n(r),c=a(154),l=a(204),u=a.n(l);t.a=function(){return i.a.createElement(c.b,{query:"2011440971",render:function(e){return i.a.createElement(u.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:n})}},203:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/48d69/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/500db/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/4465b/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/1b440/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/8d7dc/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/44689/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-get-display-media-index-js-6ae45dda3cc17a0e347b.js.map