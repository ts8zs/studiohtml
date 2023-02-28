import{_ as c,M as o,p,q as i,R as n,N as s,V as a,t,a1 as u}from"./framework-204010b2.js";const d={},r=n("h1",{id:"uitween",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uitween","aria-hidden":"true"},"#"),t(" UITween")],-1),k=n("hr",null,null,-1),h=n("h2",{id:"描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),t(" 描述")],-1),_=n("p",null,[t("渐变"),n("code",null,"tween"),t("对象本身控制插值的播放（补间动画，就是可以给节点的属性做插值）")],-1),m=n("p",null,[n("em",null,"继承自"),t("：")],-1),f=n("hr",null,null,-1),v=n("h2",{id:"属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),t(" 属性")],-1),b=n("hr",null,null,-1),g=n("h2",{id:"函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#函数","aria-hidden":"true"},"#"),t(" 函数：")],-1),x={style:{"text-align":"left"}},y={style:{width:"700px"}},w={href:""},S=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("将暂停"),n("code",null,"tween"),t("的播放")])])],-1),T={style:{"text-align":"left"}},N={style:{width:"700px"}},P={href:""},B=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("将开始"),n("code",null,"tween"),t("的播放")])])],-1),V={style:{"text-align":"left"}},C={style:{width:"700px"}},I={href:""},R=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("将停止"),n("code",null,"tween"),t("的播放并重置它的变量")])])],-1),A={style:{"text-align":"left"}},j={style:{width:"700px"}},E={href:""},L=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("将继续"),n("code",null,"tween"),t("播放")])])],-1),O=n("hr",null,null,-1),U=n("h2",{id:"事件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#事件","aria-hidden":"true"},"#"),t(" 事件")],-1),X={style:{"text-align":"left"}},W={style:{width:"500px"}},q=n("a",{href:""},"SBXSignal<TweenStatus>",-1),z={href:""},G=n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"100px"}})],-1),M=n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"45px"}})],-1),D=n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"400px"}})],-1),F=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[n("code",null,"Tween"),t("结束时触发，返回"),n("code",null,"Tween"),t("执行的状态")]),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}})]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("strong",null,"返回类型")]),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[n("strong",null,"概要")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"SBXSignal"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[t("进入节点时触发，事件参数为（"),n("code",null,"TweenStatus status"),t("）")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("strong",null,"SBXSignal参数名称")]),n("td",{style:{"text-align":"left"}},[n("strong",null,"类别")]),n("td",{style:{"text-align":"left"}},[n("strong",null,"默认")]),n("td",{style:{"text-align":"left"}},[n("strong",null,"描述")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"status"),n("td",{style:{"text-align":"left"}},"TweenStatus"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[t("补间动画的状态枚举，参见枚举"),n("code",null,"SceneTweenObject::TweenStatus")])])],-1),H=u(`<hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--创建实例</span>
<span class="token keyword">local</span> TweenService <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&#39;TweenService&#39;</span><span class="token punctuation">)</span>
<span class="token comment">--缓动数据</span>
<span class="token keyword">local</span> TweenInfo <span class="token operator">=</span> TweenInfo<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">3.0</span><span class="token punctuation">,</span> Enum<span class="token punctuation">.</span>EasingStyle<span class="token punctuation">.</span>Linear<span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">--创建一个button</span>
<span class="token keyword">local</span> root <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;SceneUIRoot&#39;</span><span class="token punctuation">,</span> game<span class="token punctuation">.</span>WorkSpace<span class="token punctuation">)</span>
root<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&#39;uiroot&#39;</span>
<span class="token keyword">local</span> button<span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;SceneUIButton&#39;</span><span class="token punctuation">,</span> game<span class="token punctuation">.</span>WorkSpace<span class="token punctuation">.</span>uiroot<span class="token punctuation">)</span>
button<span class="token punctuation">.</span>Icon <span class="token operator">=</span> <span class="token string">&#39;ui\\\\mobile\\\\texture0\\\\common\\\\board_activity_box_white.png&#39;</span>
button<span class="token punctuation">.</span>Size <span class="token operator">=</span> Vector2<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
button<span class="token punctuation">.</span>Position <span class="token operator">=</span> Vector2<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> goal <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
goal<span class="token punctuation">.</span>Position <span class="token operator">=</span> Vector2<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
<span class="token comment">--创建缓动</span>
<span class="token keyword">local</span> tween <span class="token operator">=</span> TweenService<span class="token punctuation">:</span><span class="token function">Create</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> TweenInfo<span class="token punctuation">,</span> goal<span class="token punctuation">)</span>
<span class="token comment">--缓动播放</span>
tween<span class="token punctuation">:</span><span class="token function">Play</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">--缓动停止</span>
tween<span class="token punctuation">:</span><span class="token function">Pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">--缓动继续</span>
tween<span class="token punctuation">:</span><span class="token function">Resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">--缓动取消</span>
tween<span class="token punctuation">:</span><span class="token function">Cancel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function J(K,Q){const e=o("RouterLink"),l=o("font");return p(),i("div",null,[r,k,h,_,m,n("ul",null,[n("li",null,[s(e,{to:"/Api/Class/NoType/SandBoxNode.html"},{default:a(()=>[t("SandBoxNode")]),_:1})])]),f,v,b,g,n("table",null,[n("thead",null,[n("tr",null,[n("th",x,[n("div",y,[s(e,{to:"/Api/Parameter/void.html"},{default:a(()=>[t("void")]),_:1}),t("  "),n("a",w,[s(l,{color:"dd00dd"},{default:a(()=>[t("Pause")]),_:1})])])])])]),S]),n("table",null,[n("thead",null,[n("tr",null,[n("th",T,[n("div",N,[s(e,{to:"/Api/Parameter/void.html"},{default:a(()=>[t("void")]),_:1}),t("  "),n("a",P,[s(l,{color:"dd00dd"},{default:a(()=>[t("Play")]),_:1})])])])])]),B]),n("table",null,[n("thead",null,[n("tr",null,[n("th",V,[n("div",C,[s(e,{to:"/Api/Parameter/void.html"},{default:a(()=>[t("void")]),_:1}),t("  "),n("a",I,[s(l,{color:"dd00dd"},{default:a(()=>[t("Cancel")]),_:1})])])])])]),R]),n("table",null,[n("thead",null,[n("tr",null,[n("th",A,[n("div",j,[s(e,{to:"/Api/Parameter/void.html"},{default:a(()=>[t("void")]),_:1}),t("  "),n("a",E,[s(l,{color:"dd00dd"},{default:a(()=>[t("Resume")]),_:1})])])])])]),L]),O,U,n("table",null,[n("thead",null,[n("tr",null,[n("th",X,[n("div",W,[q,t("  "),n("a",z,[s(l,{color:"dd00dd"},{default:a(()=>[t("Completed")]),_:1})]),t(" ()")])]),G,M,D])]),F]),H])}const Z=c(d,[["render",J],["__file","SceneTweenObject.html.vue"]]);export{Z as default};
