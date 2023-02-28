import{_ as s,M as o,p as u,q as r,R as t,N as l,V as n,t as e,a1 as i}from"./framework-204010b2.js";const c={},h=i('<h1 id="runservice" tabindex="-1"><a class="header-anchor" href="#runservice" aria-hidden="true">#</a> RunService</h1><hr><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>此类是一个服务！它是顶级单例，可以使用<a href=""><code>GetService</code></a>函数获取。包含了用于时间管理的方法和事件，以及管理游戏或脚本所处于的内容。IsClient、IsServer、IsStudio 等方法可以帮助你确定 Lua 代码在哪里运行。这些方法对于客户端和服务器都需要的 ModuleScript 是很有帮助的。</p><p>继承自：</p><ul><li><a href=""><code>ServiceNode</code></a></li></ul><hr><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><hr><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>',10),_={style:{"text-align":"left"}},p={style:{width:"700px"}},f=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[e("返回当前的环境是否运行在客户端上。（"),t("code",null,"true"),e(", 运行在客户端上; "),t("code",null,"false"),e(", 运行在服务端上）")])])],-1),y={style:{"text-align":"left"}},S={style:{width:"700px"}},m=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"返回当前的环境是否运行在服务器上")])],-1),b={style:{"text-align":"left"}},x={style:{width:"700px"}},g=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"返回当前的环境是否远程")])],-1),v={style:{"text-align":"left"}},A={style:{width:"700px"}},R=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[e("返回当前运行环境是否为"),t("code",null,"Edit"),e("（编辑)模式")])])],-1),B={style:{"text-align":"left"}},D={style:{width:"700px"}},T=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[e("返回当前运行环境是否为"),t("code",null,"Running"),e("模式")])])],-1),k={style:{"text-align":"left"}},w={style:{width:"700px"}},C=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"如果游戏在运行则暂停游戏的模拟，暂停物理运算和脚本")])],-1),I={style:{"text-align":"left"}},F={style:{width:"700px"}},P={style:{"text-align":"left"}},X=t("code",null,"RenderStep",-1),N=t("code",null,"Lua",-1),L={style:{"text-align":"left"}},M={style:{width:"700px"}},E=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[e("解除绑定"),t("code",null,"RenderStep"),e("事件的"),t("code",null,"Lua"),e("函数")])])],-1),V={style:{"text-align":"left"}},q={style:{width:"700px"}},U=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"获取当前时间戳，精确到毫秒")])],-1),G=t("hr",null,null,-1),H=t("h2",{id:"事件-待确定",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#事件-待确定","aria-hidden":"true"},"#"),e(" 事件（待确定)：")],-1),j={style:{"text-align":"left"}},z={style:{width:"700px"}},J=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"在物理模拟完成后每帧触发。")])],-1),K={style:{"text-align":"left"}},O={style:{width:"700px"}},Q=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"在帧被模拟之后触发")])],-1),W={style:{"text-align":"left"}},Y={style:{width:"700px"}},Z=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"在帧被渲染之前触发")])],-1),$={style:{"text-align":"left"}},tt={style:{width:"700px"}},et=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"在帧被模拟之前触发")])],-1),lt={style:{"text-align":"left"}},nt={style:{width:"700px"}},dt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"在帧被渲染之前每帧触发")])],-1),at={style:{"text-align":"left"}},ot={style:{width:"700px"}},it=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[e("每次"),t("code",null,"Tick"),e("触发"),t("code",null,"Stepped"),e("事件")])])],-1),st=i(`<hr><h2 id="示例代码-需要完善" tabindex="-1"><a class="header-anchor" href="#示例代码-需要完善" aria-hidden="true">#</a> 示例代码（需要完善)：</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> RunService <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;RunService&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> ret <span class="token operator">=</span> RunService<span class="token punctuation">:</span><span class="token function">isClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function ut(rt,ct){const d=o("RouterLink"),a=o("font");return u(),r("div",null,[h,t("table",null,[t("thead",null,[t("tr",null,[t("th",_,[t("div",p,[l(d,{to:"/Api/DataType/Bool.html"},{default:n(()=>[e("bool")]),_:1}),e("  "),l(d,{to:"/Api/Class/Script/RunService_F/IsClient.html"},{default:n(()=>[l(a,{color:"dd00dd"},{default:n(()=>[e("IsClient")]),_:1})]),_:1}),e("( )")])])])]),f]),t("table",null,[t("thead",null,[t("tr",null,[t("th",y,[t("div",S,[l(d,{to:"/Api/DataType/Bool.html"},{default:n(()=>[e("bool")]),_:1}),e("  "),l(d,{to:"/Api/Class/Script/RunService_F/IsServer.html"},{default:n(()=>[l(a,{color:"dd00dd"},{default:n(()=>[e("IsServer")]),_:1})]),_:1}),e("( )")])])])]),m]),t("table",null,[t("thead",null,[t("tr",null,[t("th",b,[t("div",x,[l(d,{to:"/Api/DataType/Bool.html"},{default:n(()=>[e("bool")]),_:1}),e("  "),l(d,{to:"/Api/Class/Script/RunService_F/IsRemote.html"},{default:n(()=>[l(a,{color:"dd00dd"},{default:n(()=>[e("IsRemote")]),_:1})]),_:1}),e("( )")])])])]),g]),t("table",null,[t("thead",null,[t("tr",null,[t("th",v,[t("div",A,[l(d,{to:"/Api/DataType/Bool.html"},{default:n(()=>[e("bool")]),_:1}),e("  "),l(d,{to:"/Api/Class/Script/RunService_F/IsEdit.html"},{default:n(()=>[l(a,{color:"dd00dd"},{default:n(()=>[e("IsEdit")]),_:1})]),_:1}),e("( )")])])])]),R]),t("table",null,[t("thead",null,[t("tr",null,[t("th",B,[t("div",D,[l(d,{to:"/Api/DataType/Bool.html"},{default:n(()=>[e("bool")]),_:1}),e("  "),l(d,{to:"/Api/Class/Script/RunService_F/IsRunMode.html"},{default:n(()=>[l(a,{color:"dd00dd"},{default:n(()=>[e("IsRunMode")]),_:1})]),_:1}),e("( )")])])])]),T]),t("table",null,[t("thead",null,[t("tr",null,[t("th",k,[t("div",w,[l(d,{to:"/Api/DataType/Bool.html"},{default:n(()=>[e("bool")]),_:1}),e("  "),l(d,{to:"/Api/Class/Script/RunService_F/Pause.html"},{default:n(()=>[l(a,{color:"dd00dd"},{default:n(()=>[e("Pause")]),_:1})]),_:1}),e("( )")])])])]),C]),t("table",null,[t("thead",null,[t("tr",null,[t("th",I,[t("div",F,[l(d,{to:"/Api/DataType/Nil.html"},{default:n(()=>[e("void")]),_:1}),e("  "),l(d,{to:"/Api/Class/Script/RunService_F/BindToRenderStep.html"},{default:n(()=>[l(a,{color:"dd00dd"},{default:n(()=>[e("BindToRenderStep")]),_:1})]),_:1}),e("( "),l(d,{to:"/Api/DataType/String.html"},{default:n(()=>[e("string")]),_:1}),e(" name ，"),l(d,{to:"/Api/DataType/Int.html"},{default:n(()=>[e("int")]),_:1}),e(" priority ，"),l(d,{to:"/Api/Parameter/LuaFunction.html"},{default:n(()=>[e("LuaFunction")]),_:1}),e(" func )")])])])]),t("tbody",null,[t("tr",null,[t("td",P,[e("绑定"),X,e("事件的"),N,e("函数。"),l(d,{to:"/Api/Enumerate/UI/RenderPriority.html"},{default:n(()=>[e("RenderPriority")]),_:1}),e("为当前游戏内渲染层级，可根据需要进行插入")])])])]),t("table",null,[t("thead",null,[t("tr",null,[t("th",L,[t("div",M,[l(d,{to:"/Api/DataType/Nil.html"},{default:n(()=>[e("void")]),_:1}),e("  "),l(d,{to:"/Api/Class/Script/RunService_F/UnbindFromRenderStep.html"},{default:n(()=>[l(a,{color:"dd00dd"},{default:n(()=>[e("UnbindFromRenderStep")]),_:1})]),_:1}),e("( "),l(d,{to:"/Api/DataType/String.html"},{default:n(()=>[e("string")]),_:1}),e(" name )")])])])]),E]),t("table",null,[t("thead",null,[t("tr",null,[t("th",V,[t("div",q,[l(d,{to:"/Api/DataType/Double.html"},{default:n(()=>[e("double")]),_:1}),e("  "),l(d,{to:"/Api/Class/Script/RunService_F/CurrentMilliSecondTimeStamp.html"},{default:n(()=>[l(a,{color:"dd00dd"},{default:n(()=>[e("CurrentMilliSecondTimeStamp")]),_:1})]),_:1}),e("(  )")])])])]),U]),G,H,t("table",null,[t("thead",null,[t("tr",null,[t("th",j,[t("div",z,[l(d,{to:"/Api/Parameter/SBXSignal.html"},{default:n(()=>[e("SBXSignal")]),_:1}),e(" "),l(d,{to:"/Api/Class/Script/RunService_F/HeartBeat.html"},{default:n(()=>[l(a,{color:"dd00dd"},{default:n(()=>[e("HeartBeat")]),_:1})]),_:1}),e("(  "),l(d,{to:"/Api/DataType/Double.html"},{default:n(()=>[e("double")]),_:1}),e(" Step )")])])])]),J]),t("table",null,[t("thead",null,[t("tr",null,[t("th",K,[t("div",O,[l(d,{to:"/Api/Parameter/SBXSignal.html"},{default:n(()=>[e("SBXSignal")]),_:1}),e(" "),l(a,{color:"dd00dd"},{default:n(()=>[e("PostSimulation")]),_:1}),e("(  "),l(d,{to:"/Api/DataType/Double.html"},{default:n(()=>[e("double")]),_:1}),e(" deltaTime )")])])])]),Q]),t("table",null,[t("thead",null,[t("tr",null,[t("th",W,[t("div",Y,[l(d,{to:"/Api/Parameter/SBXSignal.html"},{default:n(()=>[e("SBXSignal")]),_:1}),e(" "),l(a,{color:"dd00dd"},{default:n(()=>[e("PreRender")]),_:1}),e("(   "),l(d,{to:"/Api/DataType/Double.html"},{default:n(()=>[e("double")]),_:1}),e(")")])])])]),Z]),t("table",null,[t("thead",null,[t("tr",null,[t("th",$,[t("div",tt,[l(d,{to:"/Api/Parameter/SBXSignal.html"},{default:n(()=>[e("SBXSignal")]),_:1}),e(" "),l(a,{color:"dd00dd"},{default:n(()=>[e("PreSimulation")]),_:1}),e("(   "),l(d,{to:"/Api/DataType/Double.html"},{default:n(()=>[e("double")]),_:1}),e(")")])])])]),et]),t("table",null,[t("thead",null,[t("tr",null,[t("th",lt,[t("div",nt,[l(d,{to:"/Api/Parameter/SBXSignal.html"},{default:n(()=>[e("SBXSignal")]),_:1}),e(" "),l(a,{color:"dd00dd"},{default:n(()=>[e("RenderStepped")]),_:1}),e("(   "),l(d,{to:"/Api/DataType/Double.html"},{default:n(()=>[e("double")]),_:1}),e(")")])])])]),dt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",at,[t("div",ot,[l(d,{to:"/Api/Parameter/SBXSignal.html"},{default:n(()=>[e("SBXSignal")]),_:1}),e(" "),l(a,{color:"dd00dd"},{default:n(()=>[e("Stepped")]),_:1}),e("(  "),l(d,{to:"/Api/DataType/Double.html"},{default:n(()=>[e("double")]),_:1}),e(")")])])])]),it]),st])}const _t=s(c,[["render",ut],["__file","RunService.html.vue"]]);export{_t as default};
