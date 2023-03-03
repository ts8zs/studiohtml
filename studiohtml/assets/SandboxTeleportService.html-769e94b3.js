import{_ as i,M as o,p as c,q as r,R as e,N as a,V as n,t,a1 as d}from"./framework-204010b2.js";const p={},u=d('<h1 id="teleportservice" tabindex="-1"><a class="header-anchor" href="#teleportservice" aria-hidden="true">#</a> TeleportService</h1><hr><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>此类是一个服务！它是顶级单例，可以使用<code>GetService</code>函数获取。为负责将 <code>Players</code>玩家在不同服务器和场景间进行传送的服务。</p><p><em>继承自</em>：</p>',5),h=e("hr",null,null,-1),_=e("h2",{id:"属性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),t(" 属性")],-1),f=e("hr",null,null,-1),m=e("h2",{id:"函数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#函数","aria-hidden":"true"},"#"),t(" 函数")],-1),x={style:{"text-align":"left"}},v={style:{width:"700px"}},k=e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},"地图内将玩家传送到指定位置")])],-1),S=e("hr",null,null,-1),b=e("h2",{id:"事件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#事件","aria-hidden":"true"},"#"),t(" 事件")],-1),y={style:{"text-align":"left"}},g={style:{width:"700px"}},T=e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},"玩家传送成功触发")])],-1),N={style:{"text-align":"left"}},B={style:{width:"700px"}},V=e("tbody",null,[e("tr",null,[e("td",{style:{"text-align":"left"}},"玩家传送失败触发")])],-1),A=d(`<hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> TeleportService<span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&#39;TeleportService&#39;</span><span class="token punctuation">)</span>
TeleportService<span class="token punctuation">:</span><span class="token function">teleport</span><span class="token punctuation">(</span>player<span class="token punctuation">,</span> Vector3<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">700</span><span class="token punctuation">,</span> <span class="token number">800</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function w(C,P){const s=o("RouterLink"),l=o("font");return c(),r("div",null,[u,e("ul",null,[e("li",null,[a(s,{to:"/Api/Class/NoType/SandBoxNode.html"},{default:n(()=>[t("SandBoxNode")]),_:1})])]),h,_,f,m,e("table",null,[e("thead",null,[e("tr",null,[e("th",x,[e("div",v,[a(s,{to:"/Api/Parameter/void.html"},{default:n(()=>[t("void")]),_:1}),t("  "),a(s,{to:"/Api/Class/GamePlay/SandboxTeleportService_F/teleport.html"},{default:n(()=>[a(l,{color:"dd00dd"},{default:n(()=>[t("teleport")]),_:1})]),_:1}),t(" ("),a(s,{to:"/Api/Class/NoType/SandboxNode.html"},{default:n(()=>[t("SandboxNode")]),_:1}),t(" playernode, "),a(s,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[t("Vector3")]),_:1}),t(" pos)")])])])]),k]),S,b,e("table",null,[e("thead",null,[e("tr",null,[e("th",y,[e("div",g,[a(s,{to:"/Api/Parameter/SBXSignal.html"},{default:n(()=>[t("SBXSignal")]),_:1}),t("  "),a(l,{color:"dd00dd"},{default:n(()=>[t("TeleportSuccess")]),_:1}),t("( )")])])])]),T]),e("table",null,[e("thead",null,[e("tr",null,[e("th",N,[e("div",B,[a(s,{to:"/Api/Parameter/SBXSignal.html"},{default:n(()=>[t("SBXSignal")]),_:1}),t("  "),a(l,{color:"dd00dd"},{default:n(()=>[t("TeleportFail")]),_:1}),t("( )")])])])]),V]),A])}const G=i(p,[["render",w],["__file","SandboxTeleportService.html.vue"]]);export{G as default};
