import{_ as d,M as o,p as c,q as i,R as e,t as a,N as s,V as t,a1 as r}from"./framework-5866ffd3.js";const h={},_=e("h1",{id:"teams",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#teams","aria-hidden":"true"},"#"),a(" Teams")],-1),u=e("hr",null,null,-1),m=e("h2",{id:"描述",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),a(" 描述")],-1),p=e("code",null,"GetService",-1),f=e("code",null,"Teams",-1),x=e("code",null,"Team",-1),T=e("code",null,"Team",-1),b=e("code",null,"Teams",-1),k=e("p",null,[a("继承："),e("code",null,"ServiceNode")],-1),v=e("hr",null,null,-1),S=e("h2",{id:"属性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),a(" 属性")],-1),y=e("hr",null,null,-1),G=e("h2",{id:"函数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#函数","aria-hidden":"true"},"#"),a(" 函数")],-1),C={style:{"text-align":"left"}},g={style:{width:"700px"}},A=e("a",{href:""},"vector<SandboxNode>",-1),P={style:{"text-align":"left"}},N=e("code",null,"Team",-1),V=e("code",null,"Team",-1),w=e("code",null,"Teams",-1),B=r(`<hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> Teams <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&#39;Teams&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> teamVector <span class="token operator">=</span> Teams<span class="token punctuation">:</span><span class="token function">GetTeams</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function R(L,q){const n=o("RouterLink"),l=o("font");return c(),i("div",null,[_,u,m,e("p",null,[a("此类是一个服务！它是顶级单例，可以使用"),p,a("函数获取。 "),s(n,{to:"/Api/Class/GamePlay/SandboxTeams.html"},{default:t(()=>[f]),_:1}),a("服务用来存储游戏的"),s(n,{to:"/Api/Class/GamePlay/SandboxTeam.html"},{default:t(()=>[x]),_:1}),a("对象，这些"),s(n,{to:"/Api/Class/GamePlay/SandboxTeam.html"},{default:t(()=>[T]),_:1}),a("对象必须被设置为"),s(n,{to:"/Api/Class/GamePlay/SandboxTeams.html"},{default:t(()=>[b]),_:1}),a("服务的子项。")]),k,v,S,y,G,e("table",null,[e("thead",null,[e("tr",null,[e("th",C,[e("div",g,[A,a("  "),s(n,{to:"/Api/Class/GamePlay/SandboxTeams_F/GetTeams.html"},{default:t(()=>[s(l,{color:"dd00dd"},{default:t(()=>[a("GetTeams")]),_:1})]),_:1}),a(" ()")])])])]),e("tbody",null,[e("tr",null,[e("td",P,[a("返回内含游戏"),s(n,{to:"/Api/Class/GamePlay/SandboxTeam.html"},{default:t(()=>[N]),_:1}),a("对象的表格。返回的"),s(n,{to:"/Api/Class/GamePlay/SandboxTeam.html"},{default:t(()=>[V]),_:1}),a("对象仅限"),s(n,{to:"/Api/Class/GamePlay/SandboxTeams.html"},{default:t(()=>[w]),_:1}),a("服务的子对象。")])])])]),B])}const F=d(h,[["render",R],["__file","SandboxTeams.html.vue"]]);export{F as default};
