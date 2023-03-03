import{_ as o,M as l,p,q as c,R as n,t as s,N as t,V as e,a1 as i}from"./framework-204010b2.js";const d={},u=n("h1",{id:"playfinish",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playfinish","aria-hidden":"true"},"#"),s(" PlayFinish")],-1),r=n("hr",null,null,-1),h=n("h2",{id:"描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),s(" 描述")],-1),k=n("p",null,[n("code",null,"SandboxSound"),s("实例播放结束时触发该事件")],-1),m=n("hr",null,null,-1),v=n("h2",{id:"参数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参数","aria-hidden":"true"},"#"),s(" 参数")],-1),_=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"100px"}},"名称")]),n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"100px"}},"类型")]),n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"50px"}},"默认")]),n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"350px"}},"描述")])])],-1),f=n("td",{style:{"text-align":"left"}},"node",-1),b={style:{"text-align":"left"}},x=n("td",{style:{"text-align":"left"}},null,-1),y=n("td",{style:{"text-align":"left"}},"播放动画的节点",-1),g=i(`<h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>无返回值</p><hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码：</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> part <span class="token operator">=</span> script<span class="token punctuation">.</span>Parent <span class="token comment">--获取父节点</span>
<span class="token keyword">local</span> sound <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;Sound&#39;</span><span class="token punctuation">,</span> part<span class="token punctuation">)</span> <span class="token comment">--创建Sound节点</span>
sound<span class="token punctuation">.</span>SoundPath <span class="token operator">=</span><span class="token string">&quot;sandboxSysId://sounds/npc/chest.ogg&quot;</span> <span class="token comment">--设置资源路径</span>
<span class="token comment">--sound.TransObject = script.Parent --绑定TransObject（播放3D声音）</span>
sound<span class="token punctuation">.</span>IsLoop <span class="token operator">=</span> <span class="token keyword">true</span> <span class="token comment">--设置循环播放</span>
<span class="token comment">--sound.PlayOnRemove = true --设置移除时播放</span>
sound<span class="token punctuation">.</span>RollOffMode <span class="token operator">=</span> Enum<span class="token punctuation">.</span>EnumRollOffMode<span class="token punctuation">.</span>Linear <span class="token comment">--设置声音衰减模式</span>
sound<span class="token punctuation">.</span>RollOffMinDistance <span class="token operator">=</span> <span class="token number">300</span>
sound<span class="token punctuation">.</span>RollOffMaxDistance <span class="token operator">=</span> <span class="token number">700</span>
sound<span class="token punctuation">:</span><span class="token function">PlaySound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">--播放函数</span>

<span class="token comment">--播放结束事件</span>
sound<span class="token punctuation">.</span>PlayFinish<span class="token punctuation">:</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> 
    node<span class="token punctuation">:</span><span class="token function">Destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;sound is Destroy&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">end</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function S(w,N){const a=l("RouterLink");return p(),c("div",null,[u,r,h,n("p",null,[s("函数所属类："),t(a,{to:"/Api/Class/Sound/SandboxSound.html"},{default:e(()=>[s("SandboxSound")]),_:1})]),k,m,v,n("table",null,[_,n("tbody",null,[n("tr",null,[f,n("td",b,[t(a,{to:"/Api/Class/NoType/SandboxNode.html"},{default:e(()=>[s("SandboxNode")]),_:1})]),x,y])])]),g])}const R=o(d,[["render",S],["__file","PlayFinish.html.vue"]]);export{R as default};
