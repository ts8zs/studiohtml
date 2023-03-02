import{_ as o,M as a,p as d,q as r,R as e,t,N as l,V as n,a1 as c}from"./framework-5866ffd3.js";const h={},u=e("h1",{id:"fireallclient",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#fireallclient","aria-hidden":"true"},"#"),t(" fireAllClient")],-1),_=e("hr",null,null,-1),p=e("h2",{id:"描述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),t(" 描述")],-1),f=e("code",null,"FireAllClients",-1),m=e("code",null,"OnClientEvent",-1),v=e("p",null,[t("数据可以通过远程事件从服务器传递到客户端，就像数据从客户端传递到服务器一样。任何额外信息可作为"),e("code",null,"RemoteEvent:FireClient"),t("和"),e("code",null,"FireAllClients"),t("函数的参数传递。注意"),e("code",null,"FireClient"),t("函数仍需要将发送信息的目标玩家作为第一项参数来传递。")],-1),x=e("hr",null,null,-1),C=e("h2",{id:"参数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参数","aria-hidden":"true"},"#"),t(" 参数")],-1),y=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"left"}},[e("div",{style:{width:"100px"}},"名称")]),e("th",{style:{"text-align":"left"}},[e("div",{style:{width:"100px"}},"类型")]),e("th",{style:{"text-align":"left"}},[e("div",{style:{width:"50px"}},"默认")]),e("th",{style:{"text-align":"left"}},[e("div",{style:{width:"350px"}},"描述")])])],-1),g=e("td",{style:{"text-align":"left"}},[e("a",{href:""},"argument")],-1),R={style:{"text-align":"left"}},b=e("td",{style:{"text-align":"left"}},null,-1),E={style:{"text-align":"left"}},A=c(`<h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>无返回值</p><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function S(k,F){const i=a("RouterLink"),s=a("font");return d(),r("div",null,[u,_,p,e("p",null,[t("函数所属类："),l(i,{to:"/Api/Class/Script/RemoteEvent.html"},{default:n(()=>[t("RemotoEvent")]),_:1})]),e("p",null,[f,t("函数在每个客户端触发 "),l(i,{to:"/Api/Class/Script/RemoteEvent_F/OnClientNotify.html"},{default:n(()=>[t("RemoteEvent.OnClientEvent")]),_:1}),t(" 事件。")]),e("p",null,[t("与 "),l(i,{to:"/Api/Class/Script/RemoteEvent_F/fireClient.html"},{default:n(()=>[t("RemoteEvent:FireClient")]),_:1}),t(" 不同，此事件不接受目标玩家作为参数，而是在所有有连接至"),m,t("事件的远程事件的客户端上触发。")]),e("p",null,[t("因为此函数用于服务器向客户端通信，因此只能在 "),l(i,{to:"/Api/Class/Script/ScriptObject.html"},{default:n(()=>[t("Script")]),_:1}),t(" 内起效。")]),e("ul",null,[e("li",null,[l(s,{color:"ff3333"},{default:n(()=>[t("注意：")]),_:1})])]),v,x,C,e("table",null,[y,e("tbody",null,[e("tr",null,[g,e("td",R,[l(i,{to:"/Api/DataType/tuple.html"},{default:n(()=>[t("ReflexTuple")]),_:1})]),b,e("td",E,[t("传入 "),l(i,{to:"/Api/Class/Script/RemoteEvent_F/OnServerNotify.html"},{default:n(()=>[t("RemoteEvent.OnServerNotify")]),_:1}),t(" 方法的参数")])])])]),A])}const O=o(h,[["render",S],["__file","fireAllClients.html.vue"]]);export{O as default};
