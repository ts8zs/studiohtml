import{_ as c,M as l,p as u,q as p,R as n,N as e,V as t,t as a,a1 as d}from"./framework-5866ffd3.js";const i={},r=d('<h1 id="defaultsound" tabindex="-1"><a class="header-anchor" href="#defaultsound" aria-hidden="true">#</a> DefaultSound</h1><hr><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>音效节点，可以用于原生库中的音效（在<code>Sound.csv</code>中配置的音效）<br> 继承：<code>SandboxSound</code></p><hr><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>',6),h={style:{"text-align":"left"}},f={style:{width:"700px"}},m={style:{"text-align":"left"}},k={style:{"text-align":"left"}},_={style:{width:"700px"}},v=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"音效效果序列")])],-1),b=d(`<hr><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code> <span class="token keyword">local</span> workspace <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;workspace&quot;</span><span class="token punctuation">)</span>
 <span class="token keyword">local</span> Effect <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;DefaultSound&#39;</span><span class="token punctuation">,</span> part<span class="token punctuation">)</span>
 <span class="token comment">--设置音效为脚步</span>
 Effect<span class="token punctuation">.</span>SoundType <span class="token operator">=</span> Enum<span class="token punctuation">.</span>EnumDefaultSound<span class="token punctuation">.</span>FootStep
 <span class="token comment">--设置音效序列</span>
 Effect<span class="token punctuation">.</span>EffectIndex <span class="token operator">=</span> <span class="token number">13</span>
 Effect<span class="token punctuation">:</span><span class="token function">PlaySound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">--播放音效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function x(S,E){const s=l("RouterLink"),o=l("font");return u(),p("div",null,[r,n("table",null,[n("thead",null,[n("tr",null,[n("th",h,[n("div",f,[e(s,{to:"/Api/Enumerate/Sound/EnumDefaultSound.html"},{default:t(()=>[a("EnumDefaultSound")]),_:1}),a(" "),e(o,{color:"dd00dd"},{default:t(()=>[a("SoundType")]),_:1})])])])]),n("tbody",null,[n("tr",null,[n("td",m,[a("默认声音类型枚举：脚步、行为、受击、待机、技能、环境、背景音乐、提示和其他。见枚举"),e(s,{to:"/Api/Enumerate/Sound/EnumDefaultSound.html"},{default:t(()=>[a("EnumDefaultSound")]),_:1})])])])]),n("table",null,[n("thead",null,[n("tr",null,[n("th",k,[n("div",_,[e(s,{to:"/Api/DataType/Int.html"},{default:t(()=>[a("int")]),_:1}),a(" "),e(o,{color:"dd00dd"},{default:t(()=>[a("EffectIndex")]),_:1})])])])]),v]),b])}const g=c(i,[["render",x],["__file","SandboxDefaultSound.html.vue"]]);export{g as default};
