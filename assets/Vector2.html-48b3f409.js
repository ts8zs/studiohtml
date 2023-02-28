import{_ as l,M as e,p as u,q as i,R as n,N as a,V as t,t as s,a1 as c}from"./framework-204010b2.js";const r={},k=c('<h1 id="vector2" tabindex="-1"><a class="header-anchor" href="#vector2" aria-hidden="true">#</a> Vector2</h1><hr><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>描述二维空间中的一个 <code>[vector]</code>（矢量） 注意：构造之后只读，对于实例中的 x/y 进行修改是无意义的（查看示例）</p><hr><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>',6),d={style:{"text-align":"left"}},v={style:{width:"700px"}},m={href:""},f=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"x坐标")])],-1),h={style:{"text-align":"left"}},b={style:{width:"700px"}},x={href:""},y=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"y坐标")])],-1),g=c(`<hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> v1 <span class="token operator">=</span> Vector2<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> v2 <span class="token operator">=</span> Vector2<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span>

<span class="token keyword">local</span> v3 <span class="token operator">=</span> v1 <span class="token operator">+</span> v2
<span class="token keyword">local</span> v4 <span class="token operator">=</span> v1 <span class="token operator">-</span> v2
<span class="token keyword">local</span> v5 <span class="token operator">=</span> v1<span class="token operator">*</span>v2
<span class="token keyword">local</span> v6 <span class="token operator">=</span> v1<span class="token operator">/</span>v2
<span class="token keyword">local</span> v7 <span class="token operator">=</span> <span class="token operator">-</span>v1

<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;v1 x:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v1<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot; y:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v1<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;v2 x:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v2<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot; y:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v2<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;v3 x:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v3<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot; y:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v3<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;v4 x:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v4<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot; y:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v4<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;v5 x:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v5<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot; y:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v5<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;v6 x:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v6<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot; y:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v6<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;v7 x:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v7<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot; y:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v7<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">--v1 x:100 y:100</span>
<span class="token comment">--v2 x:50 y:50</span>
<span class="token comment">--v3 x:150 y:150</span>
<span class="token comment">--v4 x:50 y:50</span>
<span class="token comment">--v5 x:5000 y:5000</span>
<span class="token comment">--v6 x:2 y:2</span>
<span class="token comment">--v7 x:-100 y:-100</span>
Vector2<span class="token punctuation">.</span><span class="token function">Normalize</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;v1 x:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v1<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot; y:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v1<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">--v1 x:0.70710682868958 y:0.70710682868958</span>
v2<span class="token punctuation">:</span><span class="token function">Normalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;v2 x:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v2<span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot; y:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>v2<span class="token punctuation">.</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">--v2 x:0.70710682868958 y:0.70710682868958</span>

<span class="token comment">-- 构造之后只读</span>
Vector2<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">102</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function _(q,w){const p=e("RouterLink"),o=e("font");return u(),i("div",null,[k,n("table",null,[n("thead",null,[n("tr",null,[n("th",d,[n("div",v,[a(p,{to:"/Api/DataType/Float.html"},{default:t(()=>[s("float")]),_:1}),s("  "),n("a",m,[a(o,{color:"dd00dd"},{default:t(()=>[s("x")]),_:1})])])])])]),f]),n("table",null,[n("thead",null,[n("tr",null,[n("th",h,[n("div",b,[a(p,{to:"/Api/DataType/Float.html"},{default:t(()=>[s("float")]),_:1}),s("  "),n("a",x,[a(o,{color:"dd00dd"},{default:t(()=>[s("y")]),_:1})])])])])]),y]),g])}const N=l(r,[["render",_],["__file","Vector2.html.vue"]]);export{N as default};
