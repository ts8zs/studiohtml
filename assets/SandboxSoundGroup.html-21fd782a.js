import{_ as d,M as l,p as u,q as i,R as n,N as a,V as e,t,a1 as c}from"./framework-204010b2.js";const p={},r=n("h1",{id:"soundgroup",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#soundgroup","aria-hidden":"true"},"#"),t(" SoundGroup")],-1),h=n("h2",{id:"描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),t(" 描述")],-1),_=n("p",null,[t("声音分组节点，统一控制声音的播放，停止，音量等（请直接将声音节点挂在SoundGroup节点下面，"),n("code",null,"SoundGroup->Node->Sound"),t("的挂载方式将不会起到控制效果）")],-1),m=n("p",null,[n("em",null,"继承自"),t("：")],-1),f=n("code",null,"SandBoxNode",-1),k=n("hr",null,null,-1),v=n("h2",{id:"属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),t(" 属性：")],-1),x=n("h2",{id:"函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#函数","aria-hidden":"true"},"#"),t(" 函数：")],-1),b={style:{"text-align":"left"}},y={style:{width:"700px"}},S=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"播放/继续播放组内声音")])],-1),g={style:{"text-align":"left"}},G={style:{width:"700px"}},N=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"停止播放组内声音")])],-1),w={style:{"text-align":"left"}},P={style:{width:"700px"}},A=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"重新播放组内声音（声音将从头开始播放）")])],-1),V={style:{"text-align":"left"}},C={style:{width:"700px"}},B=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"暂停组内声音")])],-1),R={style:{"text-align":"left"}},T={style:{width:"700px"}},F=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("按比例改变组内声音音量"),n("code",null,"（0~1）"),t("，如：传入"),n("code",null,"0.5"),t("会将组内"),n("code",null,"Sound"),t("节点音量减半")])])],-1),L=c(`<hr><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件：</h2><hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码：</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>	<span class="token keyword">local</span> part <span class="token operator">=</span> script<span class="token punctuation">.</span>Parent <span class="token comment">--获取父节点</span>
	<span class="token keyword">local</span> soundGroup <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;SoundGroup&#39;</span><span class="token punctuation">,</span> part<span class="token punctuation">)</span> <span class="token comment">--创建Sound节点</span>
	soundGroup<span class="token punctuation">:</span><span class="token function">ChangeVolume</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span> <span class="token comment">--按比例调节音量</span>
	soundGroup<span class="token punctuation">:</span><span class="token function">PlaySound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">--播放</span>
	soundGroup<span class="token punctuation">:</span><span class="token function">StopSound</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">--停止</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function q(D,E){const s=l("RouterLink"),o=l("font");return u(),i("div",null,[r,h,_,m,n("ul",null,[n("li",null,[a(s,{to:"/Api/Class/NoType/SandboxNode.html"},{default:e(()=>[f]),_:1})])]),k,v,x,n("table",null,[n("thead",null,[n("tr",null,[n("th",b,[n("div",y,[a(s,{to:"/Api/Parameter/void.html"},{default:e(()=>[t("void")]),_:1}),t("  "),a(o,{color:"dd00dd"},{default:e(()=>[t("PlaySound")]),_:1}),t(" ( )")])])])]),S]),n("table",null,[n("thead",null,[n("tr",null,[n("th",g,[n("div",G,[a(s,{to:"/Api/Parameter/void.html"},{default:e(()=>[t("void")]),_:1}),t("  "),a(o,{color:"dd00dd"},{default:e(()=>[t("StopSound")]),_:1}),t("( )")])])])]),N]),n("table",null,[n("thead",null,[n("tr",null,[n("th",w,[n("div",P,[a(s,{to:"/Api/Parameter/void.html"},{default:e(()=>[t("void")]),_:1}),t("  "),a(o,{color:"dd00dd"},{default:e(()=>[t("ResumeSound")]),_:1}),t("( )")])])])]),A]),n("table",null,[n("thead",null,[n("tr",null,[n("th",V,[n("div",C,[a(s,{to:"/Api/Parameter/void.html"},{default:e(()=>[t("void")]),_:1}),t("  "),a(o,{color:"dd00dd"},{default:e(()=>[t("PauseSound")]),_:1}),t("( )")])])])]),B]),n("table",null,[n("thead",null,[n("tr",null,[n("th",R,[n("div",T,[a(s,{to:"/Api/Parameter/void.html"},{default:e(()=>[t("void")]),_:1}),t("  "),a(s,{to:"/Api/Class/Sound/SandboxSoundGroup_F/ChangeVolume.html"},{default:e(()=>[a(o,{color:"dd00dd"},{default:e(()=>[t("ChangeVolume")]),_:1})]),_:1}),t("( "),a(s,{to:"/Api/DataType/Float.html"},{default:e(()=>[t("float")]),_:1}),t(" vaval)")])])])]),F]),L])}const j=d(p,[["render",q],["__file","SandboxSoundGroup.html.vue"]]);export{j as default};
