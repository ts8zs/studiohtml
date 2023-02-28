import{_ as s,M as o,p as t,q as c,R as e,N as l,V as d,a1 as n}from"./framework-204010b2.js";const i={},r=n('<h1 id="modulescript" tabindex="-1"><a class="header-anchor" href="#modulescript" aria-hidden="true">#</a> ModuleScript</h1><hr><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述：</h2><p><code>ModuleScriptNode</code>它只会运行一次，并且必定返回相同的一个值。然后在 <code>ModuleScriptNode</code>作为唯一参数的情况下，通过调用<code>require</code>返回此值。对于每个<code>Lua</code>环境，<code>ModuleScriptNode</code>运行且仅运行一次，并且在后续调用<code>require</code>时返回该相同的值。<br><em>继承自</em>：</p>',4),p=e("code",null,"SandBoxNode",-1),u=n(`<hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码：</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>	<span class="token keyword">local</span> ModuleA <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&quot;ModuleScriptNode&quot;</span><span class="token punctuation">)</span>
	ModuleA<span class="token punctuation">.</span>StringCode <span class="token operator">=</span> <span class="token string">&quot;local a = 5 return a+1&quot;</span>

	<span class="token keyword">local</span> value1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>ModuleA<span class="token punctuation">)</span>
	<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;value1:&quot;</span><span class="token operator">..</span>value1<span class="token punctuation">)</span>
	<span class="token comment">--value1:6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(k,m){const a=o("RouterLink");return t(),c("div",null,[r,e("ul",null,[e("li",null,[l(a,{to:"/Api/Class/NoType/SandboxNode.html"},{default:d(()=>[p]),_:1})])]),u])}const _=s(i,[["render",h],["__file","ModuleScriptNode.html.vue"]]);export{_ as default};
