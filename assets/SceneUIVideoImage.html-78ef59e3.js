import{_ as p,M as o,p as l,q as i,R as n,N as a,V as e,t as s,a1 as u}from"./framework-204010b2.js";const d={},r=n("h1",{id:"uivideoimage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uivideoimage","aria-hidden":"true"},"#"),s(" UIVideoImage")],-1),k=n("hr",null,null,-1),m=n("h2",{id:"描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),s(" 描述")],-1),h=n("p",null,[s("图片格式可以是"),n("code",null,"MP4"),s("类型的")],-1),_=n("p",null,[n("em",null,"继承自"),s("：")],-1),v=n("hr",null,null,-1),b=n("h2",{id:"属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),s(" 属性")],-1),f={style:{"text-align":"left"}},g={style:{width:"700px"}},V=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"图片的路径。")])],-1),x=u(`<hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> workspace <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;workspace&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> root <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;SceneUIRoot&#39;</span><span class="token punctuation">,</span>workspace<span class="token punctuation">)</span>
<span class="token keyword">local</span> npcOneVideo <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;SceneUIVideoImage&#39;</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span>
<span class="token comment">--设置节点名字</span>
npcOneVideo<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;video&quot;</span>
<span class="token comment">--设置大小</span>
npcOneVideo<span class="token punctuation">.</span>Size <span class="token operator">=</span> Vector2<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">180</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">)</span>
<span class="token comment">--设置位置</span>
npcOneVideo<span class="token punctuation">.</span>Position <span class="token operator">=</span> Vector2<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
<span class="token comment">--设置图片路径</span>
npcOneVideo<span class="token punctuation">.</span>Icon <span class="token operator">=</span> <span class="token string">&quot;res/video/login.mp4&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function I(w,S){const t=o("RouterLink"),c=o("font");return l(),i("div",null,[r,k,m,h,_,n("ul",null,[n("li",null,[a(t,{to:"/Api/Class/Scene/SceneUIComponent.html"},{default:e(()=>[s("UIComponent")]),_:1})])]),v,b,n("table",null,[n("thead",null,[n("tr",null,[n("th",f,[n("div",g,[a(t,{to:"/Api/DataType/String.html"},{default:e(()=>[s("string")]),_:1}),s("  "),a(c,{color:"dd00dd"},{default:e(()=>[s("Icon")]),_:1})])])])]),V]),x])}const N=p(d,[["render",I],["__file","SceneUIVideoImage.html.vue"]]);export{N as default};