import{_ as a,p as n,q as e,a1 as s}from"./framework-204010b2.js";const t={},c=s(`<h1 id="创建-3d-gui-元素" tabindex="-1"><a class="header-anchor" href="#创建-3d-gui-元素" aria-hidden="true">#</a> 创建 3D GUI 元素</h1><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>当希望创建角色头顶生命栏或人物名等自定义 <code>3D GUI</code> 时，请参考下列代码：</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h2><p>使用 <code>3DUIBillboard</code> 作为容器，而不使用 <code>StarterGui</code>。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>game<span class="token punctuation">.</span><span class="token function">getService</span><span class="token punctuation">(</span><span class="token string">&quot;Players&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>LocalPlayer<span class="token punctuation">.</span>Character <span class="token keyword">and</span> game<span class="token punctuation">.</span><span class="token function">getService</span><span class="token punctuation">(</span><span class="token string">&quot;Players&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>Character<span class="token punctuation">:</span><span class="token function">findFirstChild</span><span class="token punctuation">(</span><span class="token string">&#39;Head&#39;</span><span class="token punctuation">)</span>
 
script<span class="token punctuation">.</span>Parent<span class="token punctuation">.</span>Adornee <span class="token operator">=</span> game<span class="token punctuation">.</span><span class="token function">getService</span><span class="token punctuation">(</span><span class="token string">&quot;Players&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>LocalPlayer<span class="token punctuation">.</span>Character<span class="token punctuation">.</span>Head
script<span class="token punctuation">.</span>Parent<span class="token punctuation">.</span>TextLabel<span class="token punctuation">.</span>Text <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span>game<span class="token punctuation">.</span><span class="token function">getService</span><span class="token punctuation">(</span><span class="token string">&quot;Players&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>LocalPlayer<span class="token punctuation">.</span>Name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="讨论" tabindex="-1"><a class="header-anchor" href="#讨论" aria-hidden="true">#</a> 讨论</h2><p>在 <code>WorkSpace</code> 中创建一个 <code>3DUIBillboard</code> （同步显示给其它玩家），并在其中放置 <code>UITextLabel</code> 和 <code>LocalScript</code>。<code>3DUIBillboard</code> <code>Size2D</code> 属性应设置为 {1, 1}。</p><p>在我们的脚本中可以用到先前提过的一些 <code>LocalScript</code> 快捷方式。想要获得 <code>Player</code> 目录时，不必使用 <code>script.Parent.Parent.Parent</code>，只需要用 <code>game.getService(&quot;Players&quot;).LocalPlayer</code> 即可。我们等到 <code>LocalPlayer</code>（正在使用 <code>StarterGui</code> 的用户）拥有 <code>Character</code> 和 <code>Head</code> 后，把 <code>3DUIBillboard</code> 的 <code>Adornee</code> 设置为该 <code>Head</code>对象。 下面，我们设置 <code>UITextLabel</code>，将其文本设置为 <code>LocalPlayer</code> 新文本的反向。</p><p>这样做的结果是，反转过来的名字会在头顶出现。注意，所有的 <code>StarterGui</code> 都是本地的，只会出现在正在使用 <code>StarterGui</code> 的 <code>Player</code> 处。因此，悬浮在自己头顶上的文本，只有自己可见。其他玩家会看到他们的名字反向悬浮在其头顶，但无法看到其他人的。</p><blockquote><p>另外还需注意的是，在撰写这段介绍的时间点，<code>3DUIBillboard</code> 仍处于开发阶段。因此，它可能会存在有 bug。其中之一是：StarterGui中创建3DUI会不生效。</p></blockquote>`,11),o=[c];function p(d,i){return n(),e("div",null,o)}const r=a(t,[["render",p],["__file","3DUIUsed.html.vue"]]);export{r as default};
