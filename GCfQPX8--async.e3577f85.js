(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["GCfQPX8-"],{"GCfQPX8-":function(e,l,a){a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return s;}});var n=a("d3__vuQ2"),t=a("8Z0rk4BW"),o=n._(a("Byq4qat9"));a("Kl4wHrVZ");var r=a("qdGieaVz"),d=n._(a("u0a2g00g"));a("Fp1nb7je"),o.default.extend(d.default);var s=()=>{let{token:e}=r.theme.useToken(),l={width:300,border:`1px solid ${e.colorBorderSecondary}`,borderRadius:e.borderRadiusLG};return(0,t.jsx)("div",{style:l,children:(0,t.jsx)(r.Calendar,{fullscreen:!1,headerRender:({value:e,type:l,onChange:a,onTypeChange:n})=>{let o=[],d=e.clone(),s=e.localeData(),h=[];for(let e=0;e<12;e++)d=d.month(e),h.push(s.monthsShort(d));for(let e=0;e<12;e++)o.push((0,t.jsx)(r.Select.Option,{value:e,className:"month-item",children:h[e]},e));let i=e.year(),u=e.month(),c=[];for(let e=i-10;e<i+10;e+=1)c.push((0,t.jsx)(r.Select.Option,{value:e,className:"year-item",children:e},e));return(0,t.jsxs)("div",{style:{padding:8},children:[(0,t.jsx)(r.Typography.Title,{level:4,children:"Custom header"}),(0,t.jsxs)(r.Row,{gutter:8,children:[(0,t.jsx)(r.Col,{children:(0,t.jsxs)(r.Radio.Group,{size:"small",onChange:e=>n(e.target.value),value:l,children:[(0,t.jsx)(r.Radio.Button,{value:"month",children:"Month"}),(0,t.jsx)(r.Radio.Button,{value:"year",children:"Year"})]})}),(0,t.jsx)(r.Col,{children:(0,t.jsx)(r.Select,{size:"small",dropdownMatchSelectWidth:!1,className:"my-year-select",value:i,onChange:l=>{let n=e.clone().year(l);a(n);},children:c})}),(0,t.jsx)(r.Col,{children:(0,t.jsx)(r.Select,{size:"small",dropdownMatchSelectWidth:!1,value:u,onChange:l=>{let n=e.clone().month(l);a(n);},children:o})})]})]});},onPanelChange:(e,l)=>{console.log(e.format("YYYY-MM-DD"),l);}})});};}}]);
//# sourceMappingURL=GCfQPX8--async.e3577f85.js.map