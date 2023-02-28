import{_ as a,p as n,q as s,a1 as e}from"./framework-204010b2.js";const t={},c=e(`<h1 id="同地图传送" tabindex="-1"><a class="header-anchor" href="#同地图传送" aria-hidden="true">#</a> 同地图传送</h1><p>通过获取当前玩家的 <code>Character</code> 来设置 <code>Position</code> 来达到场景切换的目的（同地图传送）</p><h2 id="改变当前玩家的位置" tabindex="-1"><a class="header-anchor" href="#改变当前玩家的位置" aria-hidden="true">#</a> 改变当前玩家的位置</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> player <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;Players&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>LocalPlayer
<span class="token keyword">local</span> character <span class="token operator">=</span> player<span class="token punctuation">.</span>Character
character<span class="token punctuation">.</span>Position <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),o=[c];function p(r,l){return n(),s("div",null,o)}const u=a(t,[["render",p],["__file","NMapTransfer.html.vue"]]);export{u as default};
