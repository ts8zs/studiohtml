import{_ as c,M as l,p,q as i,R as n,N as a,V as s,t,a1 as d}from"./framework-204010b2.js";const u={},r=n("h1",{id:"bindattachment",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bindattachment","aria-hidden":"true"},"#"),t(" BindAttachment")],-1),h=n("hr",null,null,-1),_=n("h2",{id:"描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),t(" 描述")],-1),k=n("p",null,"给节点添加绑点，一节点挂在绑点上，会相对于其父节点一起改变",-1),m=n("p",null,[n("em",null,"继承自"),t("：")],-1),b=n("hr",null,null,-1),f=n("h2",{id:"属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),t(" 属性")],-1),v={style:{"text-align":"left"}},y={style:{width:"700px"}},x=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"绑点名字")])],-1),g={style:{"text-align":"left"}},w={style:{width:"700px"}},V=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("绑点坐标 ("),n("code",null,"Rainbow::Vector3f"),t(")")])])],-1),A={style:{"text-align":"left"}},B={style:{width:"700px"}},N=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("绑点欧拉角 ("),n("code",null,"Rainbow::Vector3f"),t(")")])])],-1),S={style:{"text-align":"left"}},T={style:{width:"700px"}},R=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"绑点模型Id")])],-1),q={style:{"text-align":"left"}},D={style:{width:"700px"}},M=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"绑点替代的骨骼模型")])],-1),L=d(`<hr><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--创建模型</span>
<span class="token keyword">local</span> model <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;Model&#39;</span><span class="token punctuation">,</span> game<span class="token punctuation">.</span>WorkSpace<span class="token punctuation">)</span>
model<span class="token punctuation">.</span>ModelId <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;sandboxAsset://entity/%s/body.omod&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;100041&quot;</span><span class="token punctuation">)</span>
model<span class="token punctuation">.</span>Position <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> <span class="token number">700</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span>
<span class="token comment">--给模型设置绑点</span>
<span class="token keyword">local</span> attachment<span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;BindAttachment&#39;</span><span class="token punctuation">,</span> model<span class="token punctuation">)</span>
attachment<span class="token punctuation">.</span>BoneName <span class="token operator">=</span> <span class="token string">&#39;attachment&#39;</span>
attachment<span class="token punctuation">.</span>LocalPosition <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
attachment<span class="token punctuation">.</span>LocalScale <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function C(I,P){const e=l("RouterLink"),o=l("font");return p(),i("div",null,[r,h,_,k,m,n("ul",null,[n("li",null,[a(e,{to:"/Api/Class/NoType/SceneTransObject.html"},{default:s(()=>[t("Transform")]),_:1})])]),b,f,n("table",null,[n("thead",null,[n("tr",null,[n("th",v,[n("div",y,[a(e,{to:"/Api/DataType/String.html"},{default:s(()=>[t("string")]),_:1}),t("  "),a(o,{color:"dd00dd"},{default:s(()=>[t("BoneName")]),_:1})])])])]),x]),n("table",null,[n("thead",null,[n("tr",null,[n("th",g,[n("div",w,[a(e,{to:"/Api/DataType/Vector3.html"},{default:s(()=>[t("Vector3")]),_:1}),t("  "),a(o,{color:"dd00dd"},{default:s(()=>[t("Position")]),_:1})])])])]),V]),n("table",null,[n("thead",null,[n("tr",null,[n("th",A,[n("div",B,[a(e,{to:"/Api/DataType/Vector3.html"},{default:s(()=>[t("Vector3")]),_:1}),t("  "),a(o,{color:"dd00dd"},{default:s(()=>[t("Euler")]),_:1})])])])]),N]),n("table",null,[n("thead",null,[n("tr",null,[n("th",S,[n("div",T,[a(e,{to:"/Api/DataType/String.html"},{default:s(()=>[t("string")]),_:1}),t("  "),a(o,{color:"dd00dd"},{default:s(()=>[t("ModelId")]),_:1})])])])]),R]),n("table",null,[n("thead",null,[n("tr",null,[n("th",q,[n("div",D,[a(e,{to:"/Api/DataType/Bool.html"},{default:s(()=>[t("bool")]),_:1}),t("  "),a(o,{color:"dd00dd"},{default:s(()=>[t("RelpaceBoneModel")]),_:1})])])])]),M]),L])}const j=c(u,[["render",C],["__file","SceneBindAttachment.html.vue"]]);export{j as default};