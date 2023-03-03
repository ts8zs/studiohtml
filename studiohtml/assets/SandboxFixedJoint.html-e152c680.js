import{_ as e,M as t,p as o,q as c,R as n,N as p,V as l,t as a,a1 as i}from"./framework-204010b2.js";const d={},u=n("h1",{id:"fixedjoint",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#fixedjoint","aria-hidden":"true"},"#"),a(" FixedJoint")],-1),r=n("hr",null,null,-1),k=n("h2",{id:"描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),a(" 描述")],-1),h=n("p",null,"固定连接点",-1),m=n("p",null,[n("em",null,"继承自"),a("：")],-1),b=i(`<hr><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><hr><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> workspace <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;workspace&quot;</span><span class="token punctuation">)</span>
<span class="token comment">--创建一个物理模型</span>
<span class="token keyword">local</span> model1 <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;Model&#39;</span><span class="token punctuation">,</span> workspace<span class="token punctuation">)</span>
<span class="token keyword">local</span> model2 <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;Model&#39;</span><span class="token punctuation">,</span> workspace<span class="token punctuation">)</span>
<span class="token comment">--在两个模型下面分别添加一个附着点</span>
<span class="token keyword">local</span> att0 <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;SandboxAttachmentObject&#39;</span><span class="token punctuation">,</span> model1<span class="token punctuation">)</span>
<span class="token keyword">local</span> att1 <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;SandboxAttachmentObject&#39;</span><span class="token punctuation">,</span> model2<span class="token punctuation">)</span>
<span class="token comment">--在其中一个模型下面添加一个连接点</span>
<span class="token keyword">local</span> HingeJoint <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;SandboxFixedJoint&#39;</span><span class="token punctuation">,</span> model1<span class="token punctuation">)</span>
<span class="token comment">--给连接点绑定两个模型的附着点</span>
HingeJoint<span class="token punctuation">.</span>attachment0 <span class="token operator">=</span> att0
HingeJoint<span class="token punctuation">.</span>attachment1 <span class="token operator">=</span> att1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function v(x,_){const s=t("RouterLink");return o(),c("div",null,[u,r,k,h,m,n("ul",null,[n("li",null,[p(s,{to:"/Api/Class/Bind/SandboxJoint.html"},{default:l(()=>[a("SandboxJoint")]),_:1})])]),b])}const w=e(d,[["render",v],["__file","SandboxFixedJoint.html.vue"]]);export{w as default};