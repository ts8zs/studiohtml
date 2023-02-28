import{_ as o,M as l,p as c,q as p,R as n,t as s,N as e,V as t,a1 as i}from"./framework-204010b2.js";const d={},u=n("h1",{id:"playerlocalsound",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playerlocalsound","aria-hidden":"true"},"#"),s(" PlayerLocalSound")],-1),r=n("hr",null,null,-1),k=n("h2",{id:"描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),s(" 描述")],-1),h=n("p",null,"在本地播放声音节点（2D，不会同步）",-1),m=n("hr",null,null,-1),v=n("h2",{id:"参数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#参数","aria-hidden":"true"},"#"),s(" 参数")],-1),S=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"100px"}},"名称")]),n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"100px"}},"类型")]),n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"50px"}},"默认")]),n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"350px"}},"描述")])])],-1),_=n("td",{style:{"text-align":"left"}},"sound",-1),b={style:{"text-align":"left"}},y=n("td",{style:{"text-align":"left"}},null,-1),f=n("td",{style:{"text-align":"left"}},"监听者",-1),x=i(`<h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>无返回值</p><hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码：</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> SoundService <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;SoundService&quot;</span><span class="token punctuation">)</span>
SoundService<span class="token punctuation">:</span><span class="token function">SetSoundOpen</span><span class="token punctuation">(</span><span class="token keyword">true</span><span class="token punctuation">)</span>                    <span class="token comment">--打开声音</span>
<span class="token keyword">local</span> listenertype <span class="token operator">=</span> SoundService<span class="token punctuation">.</span>ListenerType     <span class="token comment">--监听类型</span>
<span class="token keyword">local</span> listenerobject <span class="token operator">=</span> SoundService<span class="token punctuation">.</span>ListenerObject <span class="token comment">--监听对象</span>
SoundService<span class="token punctuation">.</span>RolloffScale <span class="token operator">=</span> <span class="token number">1</span>                      <span class="token comment">--衰减速度</span>
SoundService<span class="token punctuation">.</span>DistanceFactor <span class="token operator">=</span> <span class="token number">0</span>                    <span class="token comment">--衰减距离</span>
SoundService<span class="token punctuation">.</span>DopplerScale <span class="token operator">=</span> <span class="token number">0</span>                      <span class="token comment">--多普勒效应强度</span>
<span class="token keyword">local</span> soundnode <span class="token operator">=</span> game<span class="token punctuation">.</span>WorkSpace<span class="token punctuation">.</span>Sound             <span class="token comment">--获取Sound节点</span>
SoundService<span class="token punctuation">:</span><span class="token function">PlayerLocalSound</span><span class="token punctuation">(</span>soundnode<span class="token punctuation">)</span>           <span class="token comment">--本地播放</span>
<span class="token keyword">local</span> transnode <span class="token operator">=</span> game<span class="token punctuation">.</span>WorkSpace<span class="token punctuation">.</span>TransNode         <span class="token comment">--获取TransObject节点</span>
SoundService<span class="token punctuation">:</span><span class="token function">SetListener</span><span class="token punctuation">(</span>Enum<span class="token punctuation">.</span>EnumListenerType<span class="token punctuation">.</span>TransObject<span class="token punctuation">,</span>transnode<span class="token punctuation">)</span>       <span class="token comment">--设置监听者</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function g(w,L){const a=l("RouterLink");return c(),p("div",null,[u,r,k,n("p",null,[s("函数所属类："),e(a,{to:"/Api/Class/Sound/SandboxSoundService.html"},{default:t(()=>[s("SandboxSoundService")]),_:1})]),h,m,v,n("table",null,[S,n("tbody",null,[n("tr",null,[_,n("td",b,[e(a,{to:"/Api/Class/NoType/SandBoxNode.html"},{default:t(()=>[s("SandBoxNode")]),_:1})]),y,f])])]),x])}const T=o(d,[["render",g],["__file","PlayerLocalSound.html.vue"]]);export{T as default};
