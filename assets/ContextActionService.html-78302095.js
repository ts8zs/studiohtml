import{_ as i,M as o,p as d,q as c,R as t,N as e,V as a,t as n,a1 as u}from"./framework-204010b2.js";const p={},r=t("h1",{id:"contextactionservice",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#contextactionservice","aria-hidden":"true"},"#"),n(" ContextActionService")],-1),_=t("hr",null,null,-1),h=t("h2",{id:"描述",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),n(" 描述")],-1),f=t("p",null,"是一个服务，用于将用户输入动态绑定到上下文中，支持优先级绑定，优先级高的回调函数先调用",-1),m=t("p",null,[t("em",null,"继承自"),n("：")],-1),v=t("hr",null,null,-1),y=t("h2",{id:"属性",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),n(" 属性")],-1),k=t("hr",null,null,-1),A=t("h2",{id:"函数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#函数","aria-hidden":"true"},"#"),n(" 函数")],-1),x={style:{"text-align":"left"}},b={style:{width:"700px"}},g=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"绑定激活")])],-1),C={style:{"text-align":"left"}},S={style:{width:"700px"}},w=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"绑定激活")])],-1),T={style:{"text-align":"left"}},I={style:{width:"700px"}},B=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"获取当前所有绑定的事件信息")])],-1),F={style:{"text-align":"left"}},N={style:{width:"700px"}},D=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[n("获取当前绑定"),t("code",null,"actionName"),n("的事件信息")])])],-1),P={style:{"text-align":"left"}},V={style:{width:"700px"}},L=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"通过绑定名称获取该按钮节点")])],-1),q={style:{"text-align":"left"}},U={style:{width:"700px"}},G=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[n("获取当前本地"),t("code",null,"tool"),n("图片")])])],-1),R={style:{"text-align":"left"}},M={style:{width:"700px"}},E=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"设置描述")])],-1),K={style:{"text-align":"left"}},W={style:{width:"700px"}},j=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"设置图片")])],-1),O={style:{"text-align":"left"}},z={style:{width:"700px"}},H=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"设置位置")])],-1),J={style:{"text-align":"left"}},Q={style:{width:"700px"}},X=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"设置标题")])],-1),Y={style:{"text-align":"left"}},Z={style:{width:"700px"}},$=t("a",{href:""},"ReflexVariant",-1),tt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"绑定一个回调函数到指定输入上")])],-1),nt={style:{"text-align":"left"}},et={style:{width:"700px"}},at=t("a",{href:""},"ReflexVariant",-1),lt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"绑定一个回调函数到指定输入上，并指定优先级")])],-1),st={style:{"text-align":"left"}},ot={style:{width:"700px"}},it=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"取消指定的用户绑定")])],-1),dt={style:{"text-align":"left"}},ct={style:{width:"700px"}},ut={href:""},pt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"移除所有的函数绑定")])],-1),rt={style:{"text-align":"left"}},_t={style:{width:"700px"}},ht=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[n("绑定一个回调函数到指定输入上，"),t("code",null,"(准备废弃接口，不推荐使用了，推荐使用 BindContext 这套新接口)")])])],-1),ft={style:{"text-align":"left"}},mt={style:{width:"700px"}},vt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[n("绑定一个回调函数到指定输入上，并指定优先级"),t("code",null,"(准备废弃接口，不推荐使用了，推荐使用 BindContext 这套新接口)")])])],-1),yt={style:{"text-align":"left"}},kt={style:{width:"700px"}},At=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[n("取消指定的用户绑定"),t("code",null,"(准备废弃接口，不推荐使用了，推荐使用 BindContext 这套新接口)")])])],-1),xt={style:{"text-align":"left"}},bt={style:{width:"700px"}},gt={href:""},Ct=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[n("移除所有的函数绑定"),t("code",null,"(准备废弃接口，不推荐使用了，推荐使用 BindContext 这套新接口)")])])],-1),St=u(`<hr><h2 id="事件" tabindex="-1"><a class="header-anchor" href="#事件" aria-hidden="true">#</a> 事件</h2><hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> ContextActionService <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;ContextActionService&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> curActionName <span class="token operator">=</span> <span class="token string">&quot;moveForwardAction&quot;</span>
<span class="token keyword">local</span> <span class="token keyword">function</span> <span class="token function">handleMoveForward</span><span class="token punctuation">(</span>actionName<span class="token punctuation">,</span> inputState<span class="token punctuation">,</span> inputObj<span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span>actionName<span class="token punctuation">)</span>     <span class="token comment">-- 打印 moveForwardAction</span>
    <span class="token keyword">if</span> inputState <span class="token operator">==</span> Enum<span class="token punctuation">.</span>UserInputState<span class="token punctuation">.</span>InputBegin<span class="token punctuation">.</span>Value <span class="token keyword">then</span>
        self<span class="token punctuation">.</span>ForwardBackValue <span class="token operator">=</span> <span class="token number">1</span>
    <span class="token keyword">else</span>
        self<span class="token punctuation">.</span>ForwardBackValue <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">end</span>
    self<span class="token punctuation">.</span>LocalCharacter<span class="token punctuation">:</span><span class="token function">Move</span><span class="token punctuation">(</span>Vector3<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>LeftRightValue<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>self<span class="token punctuation">.</span>ForwardBackValue<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">true</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
ContextActionService<span class="token punctuation">:</span><span class="token function">BindAction</span><span class="token punctuation">(</span>
    curActionName<span class="token punctuation">,</span> 
    handleMoveForward<span class="token punctuation">,</span> 
    Enum<span class="token punctuation">.</span>ContextActionType<span class="token punctuation">.</span>KeyBoard<span class="token punctuation">.</span>Value<span class="token punctuation">,</span> 
    Enum<span class="token punctuation">.</span>KeyCode<span class="token punctuation">.</span>W<span class="token punctuation">.</span>Value <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> ContextActionService <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;ContextActionService&quot;</span><span class="token punctuation">)</span>

ContextActionService<span class="token punctuation">:</span><span class="token function">BindContext</span><span class="token punctuation">(</span><span class="token string">&quot;WkeydownactionName&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>actionName<span class="token punctuation">,</span> inputState<span class="token punctuation">,</span> inputObj<span class="token punctuation">)</span>
    <span class="token keyword">if</span> inputState <span class="token operator">==</span> Enum<span class="token punctuation">.</span>UserInputState<span class="token punctuation">.</span>InputBegin<span class="token punctuation">.</span>Value <span class="token keyword">then</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;ContextActionService begin&quot;</span><span class="token punctuation">,</span> actionName<span class="token punctuation">)</span>
    <span class="token keyword">else</span>
        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;ContextActionService end&quot;</span><span class="token punctuation">,</span> actionName<span class="token punctuation">)</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token keyword">false</span><span class="token punctuation">,</span>  Enum<span class="token punctuation">.</span>KeyCode<span class="token punctuation">.</span>W <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function wt(Tt,It){const l=o("RouterLink"),s=o("font");return d(),c("div",null,[r,_,h,f,m,t("ul",null,[t("li",null,[e(l,{to:"/Api/Class/NoType/SandBoxNode.html"},{default:a(()=>[n("SandBoxNode")]),_:1})])]),t("p",null,[n("另请参阅："),e(l,{to:"/Api/Class/Animation/UserInputService.html"},{default:a(()=>[n("UserInputService")]),_:1})]),v,y,k,A,t("table",null,[t("thead",null,[t("tr",null,[t("th",x,[t("div",b,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/BindActivate.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("BindActivate")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/Int.html"},{default:a(()=>[n("int")]),_:1}),n(" userInputTypeForActivate, "),e(l,{to:"/Api/DataType/Int.html"},{default:a(()=>[n("int")]),_:1}),n(" keyCodeForActivate)")])])])]),g]),t("table",null,[t("thead",null,[t("tr",null,[t("th",C,[t("div",S,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/UnbindActivate.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("UnbindActivate")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/Int.html"},{default:a(()=>[n("int")]),_:1}),n(" userInputTypeForActivate, "),e(l,{to:"/Api/DataType/Int.html"},{default:a(()=>[n("int")]),_:1}),n(" keyCodeForActivate)")])])])]),w]),t("table",null,[t("thead",null,[t("tr",null,[t("th",T,[t("div",I,[e(l,{to:"/Api/Parameter/ReflexMap.html"},{default:a(()=>[n("ReflexMap")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/GetAllBoundActionInfo.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("GetAllBoundActionInfo")]),_:1})]),_:1}),n(" ()")])])])]),B]),t("table",null,[t("thead",null,[t("tr",null,[t("th",F,[t("div",N,[e(l,{to:"/Api/Parameter/ReflexMap.html"},{default:a(()=>[n("ReflexMap")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/GetBoundActionInfo.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("GetBoundActionInfo")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" actionName)")])])])]),D]),t("table",null,[t("thead",null,[t("tr",null,[t("th",P,[t("div",V,[e(l,{to:"/Api/Class/NoType/SandboxNode.html"},{default:a(()=>[n("SandboxNode")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/GetButton.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("GetButton")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" actionName)")])])])]),L]),t("table",null,[t("thead",null,[t("tr",null,[t("th",q,[t("div",U,[e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/GetCurrentLocalToolIcon.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("GetCurrentLocalToolIcon")]),_:1})]),_:1}),n(" ()")])])])]),G]),t("table",null,[t("thead",null,[t("tr",null,[t("th",R,[t("div",M,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/SetDescription.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("SetDescription")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" actionName, "),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" description)")])])])]),E]),t("table",null,[t("thead",null,[t("tr",null,[t("th",K,[t("div",W,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/SetImage.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("SetImage")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" actionName, "),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" image)")])])])]),j]),t("table",null,[t("thead",null,[t("tr",null,[t("th",O,[t("div",z,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/SetPosition.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("SetPosition")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" actionName, "),e(l,{to:"/Api/DataType/Vector2.html"},{default:a(()=>[n("Vector2")]),_:1}),n(" position)")])])])]),H]),t("table",null,[t("thead",null,[t("tr",null,[t("th",J,[t("div",Q,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/SetTitle.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("SetTitle")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" actionName, "),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" title)")])])])]),X]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Y,[t("div",Z,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/BindContext.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("BindContext")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" actionName, "),e(l,{to:"/Api/Parameter/LuaFunction.html"},{default:a(()=>[n("LuaFunction")]),_:1}),n(" func, "),e(l,{to:"/Api/DataType/Bool.html"},{default:a(()=>[n("bool")]),_:1}),n(" createTouchBtn, "),$,n(" hotkey)")])])])]),tt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",nt,[t("div",et,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/BindContextAtPriority.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("BindContextAtPriority")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" actionName, "),e(l,{to:"/Api/Parameter/LuaFunction.html"},{default:a(()=>[n("LuaFunction")]),_:1}),n(" func, "),e(l,{to:"/Api/DataType/Bool.html"},{default:a(()=>[n("bool")]),_:1}),n(" createTouchBtn, "),e(l,{to:"/Api/DataType/Int.html"},{default:a(()=>[n("int")]),_:1}),n(" priority, "),at,n(" hotkey)")])])])]),lt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",st,[t("div",ot,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/UnbindContext.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("UnbindContext")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" actionName)")])])])]),it]),t("table",null,[t("thead",null,[t("tr",null,[t("th",dt,[t("div",ct,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),t("a",ut,[e(s,{color:"dd00dd"},{default:a(()=>[n("UnbindAllContext")]),_:1})])])])])]),pt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",rt,[t("div",_t,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/BindAction.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("BindAction")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" actionName, "),e(l,{to:"/Api/Parameter/LuaFunction.html"},{default:a(()=>[n("LuaFunction")]),_:1}),n(" func, "),e(l,{to:"/Api/DataType/Int.html"},{default:a(()=>[n("int")]),_:1}),n(" nActionType, "),e(l,{to:"/Api/DataType/Int.html"},{default:a(()=>[n("int")]),_:1}),n(" nSubType)")])])])]),ht]),t("table",null,[t("thead",null,[t("tr",null,[t("th",ft,[t("div",mt,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/BindActionAtPriority.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("BindActionAtPriority")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" actionName, "),e(l,{to:"/Api/Parameter/LuaFunction.html"},{default:a(()=>[n("LuaFunction")]),_:1}),n(" func, "),e(l,{to:"/Api/DataType/Int.html"},{default:a(()=>[n("int")]),_:1}),n(" priority, "),e(l,{to:"/Api/DataType/Int.html"},{default:a(()=>[n("int")]),_:1}),n(" nActionType, "),e(l,{to:"/Api/DataType/Int.html"},{default:a(()=>[n("int")]),_:1}),n(" nSubType)")])])])]),vt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",yt,[t("div",kt,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),e(l,{to:"/Api/Class/Input/ContextActionService_F/UnbindAction.html"},{default:a(()=>[e(s,{color:"dd00dd"},{default:a(()=>[n("UnbindAction")]),_:1})]),_:1}),n(" ("),e(l,{to:"/Api/DataType/String.html"},{default:a(()=>[n("string")]),_:1}),n(" actionName)")])])])]),At]),t("table",null,[t("thead",null,[t("tr",null,[t("th",xt,[t("div",bt,[e(l,{to:"/Api/Parameter/void.html"},{default:a(()=>[n("void")]),_:1}),n("  "),t("a",gt,[e(s,{color:"dd00dd"},{default:a(()=>[n("UnbindAllActions")]),_:1})])])])])]),Ct]),St])}const Ft=i(p,[["render",wt],["__file","ContextActionService.html.vue"]]);export{Ft as default};