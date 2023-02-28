import{_ as d,M as o,p as r,q as c,R as t,t as e,N as n,V as l,a1 as h}from"./framework-204010b2.js";const u={},_=t("h1",{id:"invokeserver",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#invokeserver","aria-hidden":"true"},"#"),e(" InvokeServer")],-1),p=t("hr",null,null,-1),f=t("h2",{id:"描述",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),e(" 描述")],-1),x={href:"/Api/Class/Script/RemoteFunction",target:"_blank",rel:"noopener noreferrer"},v=t("p",null,"该函数用于客户端对服务器的调用，因为服务器内存储了许多客户端没有的信息，且部分游戏操作必须在服务端内进行。",-1),m=t("a",{href:""},"RemoteFunction",-1),y=t("p",null,[e("|当不需要放回结果，建议使用"),t("a",{href:""},"RemoteEvent")],-1),k=t("hr",null,null,-1),g=t("h2",{id:"参数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#参数","aria-hidden":"true"},"#"),e(" 参数")],-1),b=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"100px"}},"名称")]),t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"100px"}},"类型")]),t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"50px"}},"默认")]),t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"350px"}},"描述")])])],-1),R=t("td",{style:{"text-align":"left"}},"arguments",-1),C={style:{"text-align":"left"}},I=t("td",{style:{"text-align":"left"}},null,-1),S=t("td",{style:{"text-align":"left"}},[e("传入 "),t("a",{href:""},"RemoteFunction.OnClientInvoke"),e(" 方法的参数")],-1),F=t("h2",{id:"返回",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#返回","aria-hidden":"true"},"#"),e(" 返回")],-1),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"400px"}},"类型")]),t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"400px"}},"描述")])])],-1),L={style:{"text-align":"left"}},N=t("td",{style:{"text-align":"left"}},[t("a",{href:""},"RemoteFunction.OnClientInvoke"),e("函数的返回值")],-1),A=h(`<h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function T(V,E){const s=o("ExternalLinkIcon"),a=o("RouterLink"),i=o("font");return r(),c("div",null,[_,p,f,t("p",null,[e("函数所属类："),t("a",x,[e("RemoteFunction"),n(s)])]),v,t("p",null,[e("该函数被调用后，。通过对"),m,e("绑定这只RemoteFunction获取其返回值。该函数需要在"),n(a,{to:"/Api/Class/Script/LocalScriptNode.html"},{default:l(()=>[e("LocalScript")]),_:1}),e("中运行")]),y,t("ul",null,[t("li",null,[n(i,{color:"ff3333"},{default:l(()=>[e("注意：")]),_:1})])]),t("p",null,[e("该函数会暂停调用的线程，直到结果被返回。与 "),n(a,{to:"/Api/Class/Script/RemoteFunction_F/InvokeClient.html"},{default:l(()=>[e("InvokeClient")]),_:1}),e("相比，默认清空下可不传递参数进行使用")]),k,g,t("table",null,[b,t("tbody",null,[t("tr",null,[R,t("td",C,[n(a,{to:"/Api/DataType/tuple.html"},{default:l(()=>[e("ReflexTuple")]),_:1})]),I,S])])]),F,t("table",null,[w,t("tbody",null,[t("tr",null,[t("td",L,[n(a,{to:"/Api/DataType/tuple.html"},{default:l(()=>[e("ReflexTuple")]),_:1})]),N])])]),A])}const B=d(u,[["render",T],["__file","InvokeServer.html.vue"]]);export{B as default};