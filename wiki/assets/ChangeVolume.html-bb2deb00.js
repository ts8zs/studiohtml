import{_ as o,M as l,p as d,q as i,R as n,t as a,N as e,V as s,a1 as c}from"./framework-5866ffd3.js";const p={},u=n("h1",{id:"changevolume",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#changevolume","aria-hidden":"true"},"#"),a(" ChangeVolume")],-1),r=n("hr",null,null,-1),h=n("h2",{id:"描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),a(" 描述")],-1),m=n("code",null,"Sound",-1),k=c(`<hr><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th style="text-align:left;"><div style="width:100px;">名称</div></th><th style="text-align:left;"><div style="width:100px;">类型</div></th><th style="text-align:left;"><div style="width:50px;">默认</div></th><th style="text-align:left;"><div style="width:350px;">描述</div></th></tr></thead><tbody><tr><td style="text-align:left;">vaval</td><td style="text-align:left;">float</td><td style="text-align:left;"></td><td style="text-align:left;">置组内声音音量（0~1），0.5音量减半</td></tr></tbody></table><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>无返回值</p><hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码：</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> part <span class="token operator">=</span> script<span class="token punctuation">.</span>Parent <span class="token comment">--获取父节点</span>
<span class="token keyword">local</span> soundGroup <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;SoundGroup&#39;</span><span class="token punctuation">,</span> part<span class="token punctuation">)</span> <span class="token comment">--创建Sound节点</span>
soundGroup<span class="token punctuation">:</span><span class="token function">ChangeVolume</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token comment">--按比例调节音量</span>
soundGroup<span class="token punctuation">:</span><span class="token function">PlaySound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">--播放</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function v(f,x){const t=l("RouterLink");return d(),i("div",null,[u,r,h,n("p",null,[a("函数所属类："),e(t,{to:"/Api/Class/Sound/SandboxSoundGroup.html"},{default:s(()=>[a("SoundGroup")]),_:1})]),n("p",null,[a("按比例改变组内声音音量（0~1），如：传入0.5会将组内"),e(t,{to:"/Api/Class/Sound/SandboxSound.html"},{default:s(()=>[m]),_:1}),a("节点音量减半")]),k])}const b=o(p,[["render",v],["__file","ChangeVolume.html.vue"]]);export{b as default};
