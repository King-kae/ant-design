(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["L3FxQoUF"],{L3FxQoUF:function(e,a,t){t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return u;}});var l=t("d3__vuQ2"),d=t("8Z0rk4BW"),n=l._(t("WyIMPUJp")),o=t("qdGieaVz"),i=l._(t("Byq4qat9"));t("7PVseYrG");let r=(e,a)=>{console.log(e,a);},s=e=>{let{value:a,onSelect:t,onHover:l}=e,r=n.default.useMemo(()=>(0,i.default)().date(1).month(0),[]),[s,u]=n.default.useState(a||r);n.default.useEffect(()=>{a&&u(a);},[a]);let f=n.default.useMemo(()=>{let e=r.add(1,"year").add(-1,"day");return e.diff(r,"day");},[r]),h=Math.min(Math.max(0,s.diff(r,"day")),f);return(0,d.jsxs)(o.Flex,{vertical:!0,gap:"small",style:{padding:16},children:[(0,d.jsx)(o.Typography.Title,{level:4,style:{margin:0},title:"no, it's not",children:"The BEST Picker Panel"}),(0,d.jsx)(o.Slider,{min:0,max:f,value:h,onChange:e=>{let a=r.add(e,"day");u(a),null==l||l(a);},tooltip:{formatter:e=>r.add(e||0,"day").format("YYYY-MM-DD")}}),(0,d.jsx)(o.Button,{type:"primary",onClick:()=>{t(s);},children:"That's It!"})]});};var u=()=>(0,d.jsx)(o.Space,{direction:"vertical",children:(0,d.jsx)(o.DatePicker,{showNow:!1,onChange:r,components:{date:s}})});}}]);
//# sourceMappingURL=L3FxQoUF-async.1858cef6.js.map