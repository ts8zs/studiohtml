import{_ as p,M as l,p as c,q as i,R as n,N as t,V as a,t as s,a1 as u}from"./framework-5866ffd3.js";const d={},r=n("h1",{id:"tweenservice",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tweenservice","aria-hidden":"true"},"#"),s(" TweenService")],-1),k=n("hr",null,null,-1),m=n("h2",{id:"描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),s(" 描述")],-1),f=n("p",null,[s("此类是一个服务！它是顶级单例，可以使用"),n("code",null,"GetService"),s("函数获取。用来对实例的属性进行插值，可以用来为多种节点对象创建动画。")],-1),v=n("p",null,[n("em",null,"继承自"),s("：")],-1),h=n("hr",null,null,-1),x=n("h2",{id:"属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),s(" 属性")],-1),b=n("hr",null,null,-1),_=n("h2",{id:"函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#函数","aria-hidden":"true"},"#"),s(" 函数")],-1),g={style:{"text-align":"left"}},y={style:{width:"500px"}},w=n("a",{href:""},"TweenInfo",-1),S=n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"100px"}})],-1),N=n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"45px"}})],-1),T=n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"400px"}})],-1),C=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"创建渐变系统"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}})]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("strong",null,"参数名称")]),n("td",{style:{"text-align":"left"}},[n("strong",null,"类别")]),n("td",{style:{"text-align":"left"}},[n("strong",null,"默认")]),n("td",{style:{"text-align":"left"}},[n("strong",null,"描述")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"node"),n("td",{style:{"text-align":"left"}},"SandboxNode"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[s("执行"),n("code",null,"tween"),s("节点对象")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"info"),n("td",{style:{"text-align":"left"}},"TweenInfo"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[s("对"),n("code",null,"tween"),s("进行插值的信息")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"map"),n("td",{style:{"text-align":"left"}},"ReflexMap"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},"进行tween的属性和其目标值的表")]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("strong",null,"返回类型")]),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[n("strong",null,"概要")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"SandboxNode"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},"渐变节点")])],-1),I=u(`<hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--创建实例</span>
<span class="token keyword">local</span> TweenService <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&#39;TweenService&#39;</span><span class="token punctuation">)</span>
<span class="token comment">--缓动数据</span>
<span class="token keyword">local</span> TweenInfo <span class="token operator">=</span> TweenInfo<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">3.0</span><span class="token punctuation">,</span> Enum<span class="token punctuation">.</span>EasingStyle<span class="token punctuation">.</span>Linear<span class="token punctuation">,</span> <span class="token keyword">nil</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">--创建一个button</span>
<span class="token keyword">local</span> root <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;UIRoot&#39;</span><span class="token punctuation">,</span> game<span class="token punctuation">.</span>WorkSpace<span class="token punctuation">)</span>
root<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&#39;uiroot&#39;</span>
<span class="token keyword">local</span> button<span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;UIButton&#39;</span><span class="token punctuation">,</span> game<span class="token punctuation">.</span>WorkSpace<span class="token punctuation">.</span>uiroot<span class="token punctuation">)</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function V(R,B){const e=l("RouterLink"),o=l("font");return c(),i("div",null,[r,k,m,f,v,n("ul",null,[n("li",null,[t(e,{to:"/Api/Class/NoType/SandBoxNode.html"},{default:a(()=>[s("SandBoxNode")]),_:1})])]),h,x,b,_,n("table",null,[n("thead",null,[n("tr",null,[n("th",g,[n("div",y,[t(e,{to:"/Api/Class/NoType/SandboxNode.html"},{default:a(()=>[s("SandboxNode")]),_:1}),s("  "),t(e,{to:"/Api/Class/Animation/SandboxTweenService_F/Create.html"},{default:a(()=>[t(o,{color:"dd00dd"},{default:a(()=>[s("Create")]),_:1})]),_:1}),s(" ("),t(e,{to:"/Api/Class/NoType/SandboxNode.html"},{default:a(()=>[s("SandboxNode")]),_:1}),s(" node, "),w,s(" info, ReflexMap map)")])]),S,N,T])]),C]),I])}const P=p(d,[["render",V],["__file","SandboxTweenService.html.vue"]]);export{P as default};
