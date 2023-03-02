import{_ as i,M as o,p as d,q as p,R as t,N as s,V as a,t as n,Q as u,a1 as c}from"./framework-5866ffd3.js";const r={},_=t("h1",{id:"timer",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#timer","aria-hidden":"true"},"#"),n(" Timer")],-1),h=t("hr",null,null,-1),m=t("h2",{id:"描述",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),n(" 描述")],-1),k=t("p",null,"Timer 定时器节点允许指定一个lua 回调方法在一定时间后执行。",-1),f=t("p",null,[t("em",null,"继承自"),n("：")],-1),b=t("hr",null,null,-1),v=t("h2",{id:"属性",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),n(" 属性")],-1),y={style:{"text-align":"left"}},x={style:{width:"700px"}},S=t("br",null,null,-1),g=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"lua回调方法")])],-1),T={style:{"text-align":"left"}},A={style:{width:"700px"}},N=t("br",null,null,-1),w=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"首次延迟执行的事件")])],-1),C={style:{"text-align":"left"}},q={style:{width:"700px"}},R=t("br",null,null,-1),F=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"是否循环执行")])],-1),D={style:{"text-align":"left"}},P={style:{width:"700px"}},L=t("br",null,null,-1),B=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"计时间隔时间")])],-1),E=t("hr",null,null,-1),V=t("h2",{id:"函数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#函数","aria-hidden":"true"},"#"),n(" 函数")],-1),G={style:{"text-align":"left"}},I={style:{width:"700px"}},M=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"暂停。需要在开始执行后调用")])],-1),Q={style:{"text-align":"left"}},j={style:{width:"700px"}},z=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"暂停。需要在开始执行后调用")])],-1),H={style:{"text-align":"left"}},J={style:{width:"700px"}},K=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"恢复。需要在暂停后调用")])],-1),O={style:{"text-align":"left"}},U={style:{width:"700px"}},W=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"停止。需要在执行后调用")])],-1),X={style:{"text-align":"left"}},Y={style:{width:"700px"}},Z=t("a",{href:""},[n("AutoRef"),t("code",null,"<LuaFunction>")],-1),$=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"开始执行。附带初始化的参数此服务器中可以容纳的最大玩家数量")])],-1),tt={style:{"text-align":"left"}},nt={style:{width:"700px"}},st=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"开始执行。附带初始化的参数此服务器中可以容纳的最大玩家数量")])],-1),at=c(`<h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> a <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">local</span> timer <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&quot;TimerNode&quot;</span><span class="token punctuation">)</span> <span class="token comment">-- 创建定时器节点</span>
timer<span class="token punctuation">.</span>Delay <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">-- 延迟多少秒开始</span>
timer<span class="token punctuation">.</span>Loop <span class="token operator">=</span> <span class="token keyword">true</span> <span class="token comment">-- 是否循环</span>
timer<span class="token punctuation">.</span>Interval <span class="token operator">=</span> <span class="token number">2</span> <span class="token comment">-- 循环间隔多少秒</span>
timer<span class="token punctuation">.</span>Callback <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">-- 回调方法</span>
    a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;timer : &quot;</span><span class="token punctuation">,</span> timer<span class="token punctuation">,</span> <span class="token string">&quot; a=&quot;</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
    <span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">4</span> <span class="token keyword">then</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;timer pause&quot;</span><span class="token punctuation">)</span>
        timer<span class="token punctuation">:</span><span class="token function">Pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">-- 暂停定时器，只有在定时器运行期间有效</span>
        <span class="token function">wait</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;timer resume&quot;</span><span class="token punctuation">)</span>
        timer<span class="token punctuation">:</span><span class="token function">Resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">-- 恢复定时器，只有在定时器运行暂停期间有效</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>
timer<span class="token punctuation">:</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">-- 一次性传入参数，并且开始定时器</span>
<span class="token comment">--timer:StartEx(3, true, 3, function() a = a + 1; print(&quot;timer ex : a=&quot;, a) end)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;timer start&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function et(lt,ot){const e=o("RouterLink"),l=o("font");return d(),p("div",null,[_,h,m,k,f,t("ul",null,[t("li",null,[s(e,{to:"/Api/Class/NoType/SandBoxNode.html"},{default:a(()=>[n("SandBoxNode")]),_:1})])]),b,v,t("table",null,[t("thead",null,[t("tr",null,[t("th",y,[t("div",x,[s(e,{to:"/Api/Parameter/LuaFunction.html"},{default:a(()=>[n("LuaFunction")]),_:1}),n("  "),s(e,{to:"/Api/Class/Script/TimerNode_F/Callback.html"},{default:a(()=>[s(l,{color:"dd00dd"},{default:a(()=>[n("Callback")]),_:1}),S]),_:1})])])])]),g]),t("table",null,[t("thead",null,[t("tr",null,[t("th",T,[t("div",A,[s(e,{to:"/Api/DataType/Double.html"},{default:a(()=>[n("double")]),_:1}),n("  "),s(e,{to:"/Api/Class/Script/TimerNode_F/Delay.html"},{default:a(()=>[s(l,{color:"dd00dd"},{default:a(()=>[n("Delay")]),_:1}),N]),_:1})])])])]),w]),t("table",null,[t("thead",null,[t("tr",null,[t("th",C,[t("div",q,[s(e,{to:"/Api/DataType/Bool.html"},{default:a(()=>[n("bool")]),_:1}),n("  "),s(e,{to:"/Api/Class/Script/TimerNode_F/Loop.html"},{default:a(()=>[s(l,{color:"dd00dd"},{default:a(()=>[n("Loop")]),_:1}),R]),_:1})])])])]),F]),t("table",null,[t("thead",null,[t("tr",null,[t("th",D,[t("div",P,[s(e,{to:"/Api/DataType/Double.html"},{default:a(()=>[n("double")]),_:1}),n("  "),s(e,{to:"/Api/Class/Script/TimerNode_F/Interval.html"},{default:a(()=>[s(l,{color:"dd00dd"},{default:a(()=>[n("Interval")]),_:1}),L]),_:1})])])])]),B]),u(` |<div style="width:700px">[TimerRunState](/Api/Enumerate/Script/TimerRunState.md) &emsp;[<font color="dd00dd">TimerRunState</font><br /> ](/Api/Class/Script/TimerNode_F/TimerRunState.md)</div>|
|:-----------------------|
|当前循环状态，包括：空闲，运行，暂停。           | `),E,V,t("table",null,[t("thead",null,[t("tr",null,[t("th",G,[t("div",I,[s(e,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),s(e,{to:"/Api/Class/Script/TimerNode_F/Start.html"},{default:a(()=>[s(l,{color:"dd00dd"},{default:a(()=>[n("Start")]),_:1})]),_:1}),n("()")])])])]),M]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Q,[t("div",j,[s(e,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),s(e,{to:"/Api/Class/Script/TimerNode_F/Pause.html"},{default:a(()=>[s(l,{color:"dd00dd"},{default:a(()=>[n("Pause")]),_:1})]),_:1}),n("()")])])])]),z]),t("table",null,[t("thead",null,[t("tr",null,[t("th",H,[t("div",J,[s(e,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),s(e,{to:"/Api/Class/Script/TimerNode_F/Resume.html"},{default:a(()=>[s(l,{color:"dd00dd"},{default:a(()=>[n("Resume")]),_:1})]),_:1}),n("()")])])])]),K]),t("table",null,[t("thead",null,[t("tr",null,[t("th",O,[t("div",U,[s(e,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),s(e,{to:"/Api/Class/Script/TimerNode_F/Stop.html"},{default:a(()=>[s(l,{color:"dd00dd"},{default:a(()=>[n("Stop")]),_:1})]),_:1}),n("()")])])])]),W]),t("table",null,[t("thead",null,[t("tr",null,[t("th",X,[t("div",Y,[s(e,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),s(e,{to:"/Api/Class/Script/TimerNode_F/StartEx.html"},{default:a(()=>[s(l,{color:"dd00dd"},{default:a(()=>[n("StartEx")]),_:1})]),_:1}),n(" ("),s(e,{to:"/Api/DataType/Double.html"},{default:a(()=>[n("double")]),_:1}),n(" delay, "),s(e,{to:"/Api/DataType/Bool.html"},{default:a(()=>[n("bool")]),_:1}),n(" loop, "),s(e,{to:"/Api/DataType/Double.html"},{default:a(()=>[n("double")]),_:1}),n(" interval, "),Z,n(" cb) ")])])])]),$]),t("table",null,[t("thead",null,[t("tr",null,[t("th",tt,[t("div",nt,[s(e,{to:"/Api/Enumerate/GamePlay/TimerRunState.html"},{default:a(()=>[n("TimerRunState")]),_:1}),n("  "),s(e,{to:"/Api/Class/Script/TimerNode_F/GetRunState.html"},{default:a(()=>[s(l,{color:"dd00dd"},{default:a(()=>[n("GetRunState")]),_:1})]),_:1}),n(" () ")])])])]),st]),at])}const dt=i(r,[["render",et],["__file","TimerNode.html.vue"]]);export{dt as default};