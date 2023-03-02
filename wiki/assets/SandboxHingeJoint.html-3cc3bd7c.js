import{_ as d,M as o,p as i,q as c,R as t,N as l,V as e,t as n,a1 as p}from"./framework-5866ffd3.js";const u={},r=t("h1",{id:"hingejoint",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#hingejoint","aria-hidden":"true"},"#"),n(" HingeJoint")],-1),h=t("hr",null,null,-1),_=t("h2",{id:"描述",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),n(" 描述")],-1),f=t("p",null,"铰链类型的连接点",-1),y=t("p",null,[t("em",null,"继承自"),n("：")],-1),k=t("hr",null,null,-1),m=t("h2",{id:"属性",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),n(" 属性")],-1),b={style:{"text-align":"left"}},x={style:{width:"700px"}},g=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"是否限制启用")])],-1),v={style:{"text-align":"left"}},w={style:{width:"700px"}},T={href:""},A=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"是否限制旋转角度")])],-1),S={style:{"text-align":"left"}},D={style:{width:"700px"}},M=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"限制的最大角度")])],-1),F={style:{"text-align":"left"}},J={style:{width:"700px"}},N=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"限制的最小角度")])],-1),H={style:{"text-align":"left"}},E={style:{width:"700px"}},R=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"达到最大或最小角度后的一个回拉力")])],-1),B={style:{"text-align":"left"}},L={style:{width:"700px"}},V=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"弹力")])],-1),q={style:{"text-align":"left"}},O={style:{width:"700px"}},C=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"阻尼大小")])],-1),j={style:{"text-align":"left"}},G={style:{width:"700px"}},P=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"目标角度")])],-1),U={style:{"text-align":"left"}},z={style:{width:"700px"}},I=t("a",{href:""},"/Api/Enumerate/Physics/MotorType",-1),K=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[n("传动类型（传动类型为："),t("code",null,"MOTOR"),n("时 ），见枚举"),t("code",null,"MotorType")])])],-1),Q={style:{"text-align":"left"}},W={style:{width:"700px"}},X=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"角速度")])],-1),Y={style:{"text-align":"left"}},Z={style:{width:"700px"}},$=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[n("最大扭矩 ——暂时还没实现。传动类型为："),t("code",null,"SERVO"),n("时")])])],-1),tt={style:{"text-align":"left"}},nt={style:{width:"700px"}},lt={href:""},et=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"角速度")])],-1),at={style:{"text-align":"left"}},st={style:{width:"700px"}},ot={href:""},dt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"最大扭矩")])],-1),it={style:{"text-align":"left"}},ct={style:{width:"700px"}},pt={href:""},ut=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"目标角度")])],-1),rt=p(`<hr><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> workspace <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;workspace&quot;</span><span class="token punctuation">)</span>
<span class="token comment">--创建一个物理模型</span>
<span class="token keyword">local</span> model1 <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;Model&#39;</span><span class="token punctuation">,</span> workspace<span class="token punctuation">)</span>
<span class="token keyword">local</span> model2 <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;Model&#39;</span><span class="token punctuation">,</span> workspace<span class="token punctuation">)</span>
<span class="token comment">--在两个模型下面分别添加一个附着点</span>
<span class="token keyword">local</span> att0 <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;Attachment&#39;</span><span class="token punctuation">,</span> model1<span class="token punctuation">)</span>
<span class="token keyword">local</span> att1 <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;Attachment&#39;</span><span class="token punctuation">,</span> model2<span class="token punctuation">)</span>
<span class="token comment">--在其中一个模型下面添加一个连接点</span>
<span class="token keyword">local</span> HingeJoint <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;HingeJoint&#39;</span><span class="token punctuation">,</span> model1<span class="token punctuation">)</span>
<span class="token comment">--给连接点绑定两个模型的附着点</span>
HingeJoint<span class="token punctuation">.</span>attachment0 <span class="token operator">=</span> att0
HingeJoint<span class="token punctuation">.</span>attachment1 <span class="token operator">=</span> att1
<span class="token comment">--是否设置最大角度</span>
HingeJoint<span class="token punctuation">.</span>LimitsEnable <span class="token operator">=</span> <span class="token keyword">true</span>
<span class="token comment">--设置两种不同传动类型</span>
HingeJoint<span class="token punctuation">.</span>ActuatorType <span class="token operator">=</span> Enum<span class="token punctuation">.</span>MotorType<span class="token punctuation">.</span>MOTOR
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function ht(_t,ft){const a=o("RouterLink"),s=o("font");return i(),c("div",null,[r,h,_,f,y,t("ul",null,[t("li",null,[l(a,{to:"/Api/Class/Bind/SandboxJoint.html"},{default:e(()=>[n("Joint")]),_:1})])]),k,m,t("table",null,[t("thead",null,[t("tr",null,[t("th",b,[t("div",x,[l(a,{to:"/Api/DataType/Bool.html"},{default:e(()=>[n("bool")]),_:1}),n("  "),l(s,{color:"dd00dd"},{default:e(()=>[n("LimitsEnable")]),_:1})])])])]),g]),t("table",null,[t("thead",null,[t("tr",null,[t("th",v,[t("div",w,[l(a,{to:"/Api/DataType/Bool.html"},{default:e(()=>[n("bool")]),_:1}),n("  "),t("a",T,[l(s,{color:"dd00dd"},{default:e(()=>[n("EffectType（不可用，已删除）")]),_:1})])])])])]),A]),t("table",null,[t("thead",null,[t("tr",null,[t("th",S,[t("div",D,[l(a,{to:"/Api/DataType/Float.html"},{default:e(()=>[n("float")]),_:1}),n("  "),l(s,{color:"dd00dd"},{default:e(()=>[n("UpperAngle")]),_:1})])])])]),M]),t("table",null,[t("thead",null,[t("tr",null,[t("th",F,[t("div",J,[l(a,{to:"/Api/DataType/Float.html"},{default:e(()=>[n("float")]),_:1}),n("  "),l(s,{color:"dd00dd"},{default:e(()=>[n("LowerAngle")]),_:1})])])])]),N]),t("table",null,[t("thead",null,[t("tr",null,[t("th",H,[t("div",E,[l(a,{to:"/Api/DataType/Float.html"},{default:e(()=>[n("float")]),_:1}),n("  "),l(s,{color:"dd00dd"},{default:e(()=>[n("Restitution")]),_:1})])])])]),R]),t("table",null,[t("thead",null,[t("tr",null,[t("th",B,[t("div",L,[l(a,{to:"/Api/DataType/Float.html"},{default:e(()=>[n("float")]),_:1}),n("  "),l(s,{color:"dd00dd"},{default:e(()=>[n("Spring")]),_:1})])])])]),V]),t("table",null,[t("thead",null,[t("tr",null,[t("th",q,[t("div",O,[l(a,{to:"/Api/DataType/Float.html"},{default:e(()=>[n("float")]),_:1}),n("  "),l(s,{color:"dd00dd"},{default:e(()=>[n("Damping")]),_:1})])])])]),C]),t("table",null,[t("thead",null,[t("tr",null,[t("th",j,[t("div",G,[l(a,{to:"/Api/DataType/Float.html"},{default:e(()=>[n("float")]),_:1}),n("  "),l(s,{color:"dd00dd"},{default:e(()=>[n("LimitTargetAngle")]),_:1})])])])]),P]),t("table",null,[t("thead",null,[t("tr",null,[t("th",U,[t("div",z,[I,n("  "),l(s,{color:"dd00dd"},{default:e(()=>[n("ActuatorType")]),_:1})])])])]),K]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Q,[t("div",W,[l(a,{to:"/Api/DataType/Float.html"},{default:e(()=>[n("float")]),_:1}),n("  "),l(s,{color:"dd00dd"},{default:e(()=>[n("MotorAngularSpeed")]),_:1})])])])]),X]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Y,[t("div",Z,[l(a,{to:"/Api/DataType/Float.html"},{default:e(()=>[n("float")]),_:1}),n("  "),l(s,{color:"dd00dd"},{default:e(()=>[n("MotorMaxTorque")]),_:1})])])])]),$]),t("table",null,[t("thead",null,[t("tr",null,[t("th",tt,[t("div",nt,[l(a,{to:"/Api/DataType/Float.html"},{default:e(()=>[n("float")]),_:1}),n("  "),t("a",lt,[l(s,{color:"dd00dd"},{default:e(()=>[n("ServoAngularSpeed（不可用，已删除）")]),_:1})])])])])]),et]),t("table",null,[t("thead",null,[t("tr",null,[t("th",at,[t("div",st,[l(a,{to:"/Api/DataType/Float.html"},{default:e(()=>[n("float")]),_:1}),n("  "),t("a",ot,[l(s,{color:"dd00dd"},{default:e(()=>[n("ServoMaxTorque（不可用，已删除）")]),_:1})])])])])]),dt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",it,[t("div",ct,[l(a,{to:"/Api/DataType/Float.html"},{default:e(()=>[n("float")]),_:1}),n("  "),t("a",pt,[l(s,{color:"dd00dd"},{default:e(()=>[n("ServoTargetAngle（不可用，已删除）")]),_:1})])])])])]),ut]),rt])}const kt=d(u,[["render",ht],["__file","SandboxHingeJoint.html.vue"]]);export{kt as default};
