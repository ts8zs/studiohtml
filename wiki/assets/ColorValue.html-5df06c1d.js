import{_ as c,M as l,p as i,q as u,R as n,N as s,V as t,t as a,a1 as p}from"./framework-5866ffd3.js";const r={},d=p('<h1 id="colorvalue" tabindex="-1"><a class="header-anchor" href="#colorvalue" aria-hidden="true">#</a> ColorValue</h1><hr><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>存储颜色值的变量 注意：构造之后只读，对于实例中的 R/G/B/A 进行修改是无意义的</p><hr><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>',6),h={style:{"text-align":"left"}},_={style:{width:"700px"}},k={href:""},f={style:{"text-align":"left"}},m={style:{width:"700px"}},v={href:""},b={style:{"text-align":"left"}},x={style:{width:"700px"}},g={href:""},y={style:{"text-align":"left"}},q={style:{width:"700px"}},A={href:""},V=p(`<hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--同ColorQuad的区别是 取值区间是0-1.0f</span>
<span class="token keyword">local</span> color <span class="token operator">=</span> ColorValue<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.</span>0f<span class="token punctuation">)</span>

<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;color R:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>R<span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot; G:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>G<span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot; B:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>B<span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot; A:&quot;</span><span class="token operator">..</span><span class="token function">tostring</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>A<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">--color R:0 G:0 B:0 A:0.0f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function B(R,w){const o=l("RouterLink"),e=l("font");return i(),u("div",null,[d,n("table",null,[n("thead",null,[n("tr",null,[n("th",h,[n("div",_,[s(o,{to:"/Api/DataType/Float.html"},{default:t(()=>[a("float")]),_:1}),a("  "),n("a",k,[s(e,{color:"dd00dd"},{default:t(()=>[a("R")]),_:1})])])])])])]),n("table",null,[n("thead",null,[n("tr",null,[n("th",f,[n("div",m,[s(o,{to:"/Api/DataType/Float.html"},{default:t(()=>[a("float")]),_:1}),a("  "),n("a",v,[s(e,{color:"dd00dd"},{default:t(()=>[a("G")]),_:1})])])])])])]),n("table",null,[n("thead",null,[n("tr",null,[n("th",b,[n("div",x,[s(o,{to:"/Api/DataType/Float.html"},{default:t(()=>[a("float")]),_:1}),a("  "),n("a",g,[s(e,{color:"dd00dd"},{default:t(()=>[a("B")]),_:1})])])])])])]),n("table",null,[n("thead",null,[n("tr",null,[n("th",y,[n("div",q,[s(o,{to:"/Api/DataType/Float.html"},{default:t(()=>[a("float")]),_:1}),a("  "),n("a",A,[s(e,{color:"dd00dd"},{default:t(()=>[a("A")]),_:1})])])])])])]),V])}const G=c(r,[["render",B],["__file","ColorValue.html.vue"]]);export{G as default};
