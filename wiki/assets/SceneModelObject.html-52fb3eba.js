import{_ as i,M as s,p as u,q as _,R as t,N as e,V as n,t as l,Q as h,a1 as a}from"./framework-5866ffd3.js";const c={},p=a('<h1 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> Model</h1><hr><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><hr><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2>',5),r={style:{"text-align":"left"}},y={style:{width:"700px"}},f=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"纹理类型")])],-1),x={style:{"text-align":"left"}},g={style:{width:"700px"}},m=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"设置模型的模型ID")])],-1),b={style:{"text-align":"left"}},A={style:{width:"700px"}},v=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"材料类型:TEMPLATEMATERIAL_UNKNOWN = -1,TEMPLATEMATERIAL_START = 0,TEMPLATEMATERIAL_END = 100000")])],-1),T={style:{"text-align":"left"}},S={style:{width:"700px"}},k=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[l("设置模型的贴图：资源id（"),t("code",null,"TextureId"),l("）")])])],-1),D={style:{"text-align":"left"}},w={style:{width:"700px"}},M=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"文理刻度（尺寸）")])],-1),V={style:{"text-align":"left"}},C={style:{width:"700px"}},R=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"纹理平铺偏移")])],-1),B={style:{"text-align":"left"}},F={style:{width:"700px"}},P=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"标记纹理资源id")])],-1),N={style:{"text-align":"left"}},I={style:{width:"700px"}},O=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"标记纹理平铺比例")])],-1),q={style:{"text-align":"left"}},j={style:{width:"700px"}},E=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"标记纹理平铺偏移")])],-1),G={style:{"text-align":"left"}},X={style:{width:"700px"}},L=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"纹理混合类型")])],-1),W={style:{"text-align":"left"}},Q={style:{width:"700px"}},U=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[l("设置模型的颜色 ("),t("code",null,"Rainbow::ColorQuad"),l(")")])])],-1),H={style:{"text-align":"left"}},z={style:{width:"700px"}},K={href:""},J=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"模型重力")])],-1),Y={style:{"text-align":"left"}},Z={style:{width:"700px"}},$=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"模型摩擦力")])],-1),tt={style:{"text-align":"left"}},lt={style:{width:"700px"}},et=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"模型反弹力，比如物体撞击在地面上会根据此值来计算反弹高度")])],-1),nt={style:{"text-align":"left"}},ot={style:{width:"700px"}},dt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"模型质量")])],-1),st={style:{"text-align":"left"}},at={style:{width:"700px"}},it=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[l("模型移动速度 ("),t("code",null,"Rainbow::Vector3f"),l(")")])])],-1),ut={style:{"text-align":"left"}},_t={style:{width:"700px"}},ht=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"模型角速度")])],-1),ct={style:{"text-align":"left"}},pt={style:{width:"700px"}},rt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"模型的Box大小")])],-1),yt={style:{"text-align":"left"}},ft={style:{width:"700px"}},xt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"模型的中心世界坐标")])],-1),gt={style:{"text-align":"left"}},mt={style:{width:"700px"}},bt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"模型是支持重力")])],-1),At={style:{"text-align":"left"}},vt={style:{width:"700px"}},Tt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[l("锚定状态，为"),t("code",null,"true"),l("时此物体不受外部环境物理影响，但是会给外部提供物理输入。"),t("br"),l("例如：有外来物体撞击到此物体，此物体不会产生移动，但是会对外来物体产生碰撞反弹力。")])])],-1),St={style:{"text-align":"left"}},kt={style:{width:"700px"}},Dt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[l("参见枚举"),t("code",null,"PhysXLocoMotionComponent::PhysicsType")])])],-1),wt={style:{"text-align":"left"}},Mt={style:{width:"700px"}},Vt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"开启此物体的物理状态。为true时物体的物理属性可以使用")])],-1),Ct={style:{"text-align":"left"}},Rt={style:{width:"700px"}},Bt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"是否可以碰撞。设为false时为trigger状态。")])],-1),Ft={style:{"text-align":"left"}},Pt={style:{width:"700px"}},Nt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[l("是否触发碰撞回调函数："),t("code",null,"Touched"),l("和"),t("code",null,"TouchEnded"),l("事件。")])])],-1),It={style:{"text-align":"left"}},Ot={style:{width:"700px"}},qt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},[l("碰撞组ID("),t("code",null,"unsigned int"),l(")，可以通过"),t("code",null,"PhysXService:SetCollideInfo"),l("函数设置任意两个组之间是否会产生碰撞。")])])],-1),jt={style:{"text-align":"left"}},Et={style:{width:"700px"}},Gt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"（不可用）")])],-1),Xt=t("hr",null,null,-1),Lt=t("h2",{id:"函数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#函数","aria-hidden":"true"},"#"),l(" 函数")],-1),Wt={style:{"text-align":"left"}},Qt={style:{width:"700px"}},Ut=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"动作播放（兼容旧版，应该废弃）")])],-1),Ht={style:{"text-align":"left"}},zt={style:{width:"700px"}},Kt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"动作播放")])],-1),Jt={style:{"text-align":"left"}},Yt={style:{width:"700px"}},Zt=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"动作停止播放")])],-1),$t={style:{"text-align":"left"}},tl={style:{width:"700px"}},ll=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"动作停止播放")])],-1),el={style:{"text-align":"left"}},nl={style:{width:"700px"}},ol=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"停止所有动画")])],-1),dl={style:{"text-align":"left"}},sl={style:{width:"700px"}},al=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"开启或关闭动画（omod）事件")])],-1),il={style:{"text-align":"left"}},ul={style:{width:"700px"}},_l=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"获取动画序列")])],-1),hl={style:{"text-align":"left"}},cl={style:{width:"700px"}},pl=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"获取动画优先级")])],-1),rl={style:{"text-align":"left"}},yl={style:{width:"700px"}},fl=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"设置动画优先级")])],-1),xl={style:{"text-align":"left"}},gl={style:{width:"700px"}},ml=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"获取动画权重")])],-1),bl={style:{"text-align":"left"}},Al={style:{width:"700px"}},vl=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"设置动画权重")])],-1),Tl={style:{"text-align":"left"}},Sl={style:{width:"700px"}},kl=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"获取动画骨骼")])],-1),Dl={style:{"text-align":"left"}},wl={style:{width:"700px"}},Ml=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"设置骨骼动画旋转")])],-1),Vl={style:{"text-align":"left"}},Cl={style:{width:"700px"}},Rl=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"获取锚点世界坐标（仅脚本可用）")])],-1),Bl={style:{"text-align":"left"}},Fl={style:{width:"700px"}},Pl=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"是否绑定")])],-1),Nl={style:{"text-align":"left"}},Il={style:{width:"700px"}},Ol=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"添加力")])],-1),ql={style:{"text-align":"left"}},jl={style:{width:"700px"}},El=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"添加扭矩")])],-1),Gl={style:{"text-align":"left"}},Xl={style:{width:"700px"}},Ll=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"添加力位置")])],-1),Wl={style:{"text-align":"left"}},Ql={style:{width:"700px"}},Ul=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"设置材质")])],-1),Hl={style:{"text-align":"left"}},zl={style:{width:"700px"}},Kl=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"获取动画")])],-1),Jl={style:{"text-align":"left"}},Yl={style:{width:"700px"}},Zl=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"获取属性动画")])],-1),$l={style:{"text-align":"left"}},te={style:{width:"700px"}},le=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"获取骨骼动画")])],-1),ee={style:{"text-align":"left"}},ne={style:{width:"700px"}},oe=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"获取人物动画")])],-1),de={style:{"text-align":"left"}},se={style:{width:"700px"}},ae=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"获取动画制作器")])],-1),ie=t("hr",null,null,-1),ue=t("h2",{id:"事件",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#事件","aria-hidden":"true"},"#"),l(" 事件")],-1),_e={style:{"text-align":"left"}},he={style:{width:"500px"}},ce=t("a",{href:""},"SBXSignal<SandboxNode, Vector3, Vector3>",-1),pe=t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"100px"}})],-1),re=t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"45px"}})],-1),ye=t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"400px"}})],-1),fe=t("tr",null,[t("td",{style:{"text-align":"left"}},"模型被其他模型碰撞时，会触发一个Touched通知"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}})],-1),xe=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("strong",null,"返回类型")]),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},[t("strong",null,"概要")])],-1),ge=t("tr",null,[t("td",{style:{"text-align":"left"}},"SBXSignal"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},[l("被碰撞的模型节点对象，事件参数为（"),t("code",null,"SandboxNode node, Vector3 pos, Vector3 normal"),l("）")])],-1),me=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("strong",null,"SBXSignal参数名称")]),t("td",{style:{"text-align":"left"}},[t("strong",null,"类别")]),t("td",{style:{"text-align":"left"}},[t("strong",null,"默认")]),t("td",{style:{"text-align":"left"}},[t("strong",null,"描述")])],-1),be=t("tr",null,[t("td",{style:{"text-align":"left"}},"node"),t("td",{style:{"text-align":"left"}},"SandboxNode"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},"被碰撞的模型节点对象")],-1),Ae=t("td",{style:{"text-align":"left"}},"pos",-1),ve={style:{"text-align":"left"}},Te=t("td",{style:{"text-align":"left"}},null,-1),Se=t("td",{style:{"text-align":"left"}},"世界坐标",-1),ke=t("td",{style:{"text-align":"left"}},"normal",-1),De={style:{"text-align":"left"}},we=t("td",{style:{"text-align":"left"}},null,-1),Me=t("td",{style:{"text-align":"left"}},"世界坐标",-1),Ve={style:{"text-align":"left"}},Ce={style:{width:"500px"}},Re=t("a",{href:""},"SBXSignal<SandboxNode>",-1),Be=t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"100px"}})],-1),Fe=t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"45px"}})],-1),Pe=t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"400px"}})],-1),Ne=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}},"模型被其他模型碰撞时，会触发一个Touched通知"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}})]),t("tr",null,[t("td",{style:{"text-align":"left"}},[t("strong",null,"返回类型")]),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},[t("strong",null,"概要")])]),t("tr",null,[t("td",{style:{"text-align":"left"}},"SBXSignal"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},[l("被碰撞的模型节点对象，事件参数为（"),t("code",null,"SandboxNode node"),l("）")])]),t("tr",null,[t("td",{style:{"text-align":"left"}},[t("strong",null,"SBXSignal参数名称")]),t("td",{style:{"text-align":"left"}},[t("strong",null,"类别")]),t("td",{style:{"text-align":"left"}},[t("strong",null,"默认")]),t("td",{style:{"text-align":"left"}},[t("strong",null,"描述")])]),t("tr",null,[t("td",{style:{"text-align":"left"}},"node"),t("td",{style:{"text-align":"left"}},"SandboxNode"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},"被碰撞的模型节点对象")])],-1),Ie={style:{"text-align":"left"}},Oe={style:{width:"500px"}},qe=t("a",{href:""},"SBXSignal<int, int>",-1),je=t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"100px"}})],-1),Ee=t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"45px"}})],-1),Ge=t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"400px"}})],-1),Xe=t("tr",null,[t("td",{style:{"text-align":"left"}},"模型动作事件"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}})],-1),Le=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("strong",null,"返回类型")]),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},[t("strong",null,"概要")])],-1),We=t("tr",null,[t("td",{style:{"text-align":"left"}},"SBXSignal"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},[l("事件参数为（"),t("code",null,"int a, int b"),l("）")])],-1),Qe=t("tr",null,[t("td",{style:{"text-align":"left"}},[t("strong",null,"SBXSignal参数名称")]),t("td",{style:{"text-align":"left"}},[t("strong",null,"类别")]),t("td",{style:{"text-align":"left"}},[t("strong",null,"默认")]),t("td",{style:{"text-align":"left"}},[t("strong",null,"描述")])],-1),Ue=t("td",{style:{"text-align":"left"}},"a",-1),He={style:{"text-align":"left"}},ze=t("td",{style:{"text-align":"left"}},null,-1),Ke=t("td",{style:{"text-align":"left"}},null,-1),Je=t("td",{style:{"text-align":"left"}},"b",-1),Ye={style:{"text-align":"left"}},Ze=t("td",{style:{"text-align":"left"}},null,-1),$e=t("td",{style:{"text-align":"left"}},null,-1),tn={style:{"text-align":"left"}},ln={style:{width:"500px"}},en=t("a",{href:""},"SBXSignal<ReflexTuple>",-1),nn=t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"100px"}})],-1),on=t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"45px"}})],-1),dn=t("th",{style:{"text-align":"left"}},[t("div",{style:{width:"400px"}})],-1),sn=t("tbody",null,[t("tr",null,[t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}})]),t("tr",null,[t("td",{style:{"text-align":"left"}},[t("strong",null,"返回类型")]),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},[t("strong",null,"概要")])]),t("tr",null,[t("td",{style:{"text-align":"left"}},"SBXSignal"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}},[l("事件参数为（"),t("code",null,"ReflexTuple tuple"),l("）")])]),t("tr",null,[t("td",{style:{"text-align":"left"}},[t("strong",null,"SBXSignal参数名称")]),t("td",{style:{"text-align":"left"}},[t("strong",null,"类别")]),t("td",{style:{"text-align":"left"}},[t("strong",null,"默认")]),t("td",{style:{"text-align":"left"}},[t("strong",null,"描述")])]),t("tr",null,[t("td",{style:{"text-align":"left"}},"tuple"),t("td",{style:{"text-align":"left"}},"ReflexTuple"),t("td",{style:{"text-align":"left"}}),t("td",{style:{"text-align":"left"}})])],-1),an=a(`<hr><h2 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例" aria-hidden="true">#</a> 代码示例</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--创建实例</span>
<span class="token keyword">local</span> newModel<span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;Model&#39;</span><span class="token punctuation">)</span>
<span class="token comment">--设置名字</span>
newModel<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;my_model&quot;</span>
<span class="token comment">--设置模型</span>
newModel<span class="token punctuation">.</span>ModelId <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;sandboxAsset://entity/%s/body.omod&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;100010&quot;</span><span class="token punctuation">)</span>
<span class="token comment">--设置位置</span>
newModel<span class="token punctuation">.</span>Position <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span><span class="token number">700</span><span class="token punctuation">,</span><span class="token number">500</span><span class="token punctuation">)</span>
<span class="token comment">--设置父节点 将模型节点添加到Workspace中</span>
newModel<span class="token punctuation">:</span><span class="token function">SetParent</span><span class="token punctuation">(</span>Workspace<span class="token punctuation">)</span>

<span class="token comment">--播放动画</span>
<span class="token keyword">local</span> player <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;Players&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>LocalPlayer<span class="token punctuation">.</span>Character
player<span class="token punctuation">:</span><span class="token function">PlayAnimal2</span><span class="token punctuation">(</span><span class="token string">&quot;100114&quot;</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1.0</span><span class="token punctuation">)</span> <span class="token comment">--&quot;100114 吃的动作&quot;</span>
player<span class="token punctuation">:</span><span class="token function">StopAnimal</span><span class="token punctuation">(</span><span class="token string">&quot;100114&quot;</span><span class="token punctuation">)</span> <span class="token comment">--&quot;100114 某个指定动作&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function un(_n,hn){const o=s("RouterLink"),d=s("font");return u(),_("div",null,[p,t("table",null,[t("thead",null,[t("tr",null,[t("th",r,[t("div",y,[e(o,{to:"/Api/Enumerate/Role/DimensionUnit.html"},{default:n(()=>[l("DimensionUnit")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("DimensionUnit")]),_:1})])])])]),f]),h(` |<div style="width:700px">[bool](/Api/DataType/Bool.md) &emsp;<font color="dd00dd">Visible</font></div>|
|:---|
|设置节点的显示和隐藏| `),t("table",null,[t("thead",null,[t("tr",null,[t("th",x,[t("div",g,[e(o,{to:"/Api/DataType/String.html"},{default:n(()=>[l("string")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("ModelId")]),_:1})])])])]),m]),t("table",null,[t("thead",null,[t("tr",null,[t("th",b,[t("div",A,[e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("MaterialType")]),_:1})])])])]),v]),t("table",null,[t("thead",null,[t("tr",null,[t("th",T,[t("div",S,[e(o,{to:"/Api/DataType/String.html"},{default:n(()=>[l("string")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("TextureId")]),_:1})])])])]),k]),t("table",null,[t("thead",null,[t("tr",null,[t("th",D,[t("div",w,[e(o,{to:"/Api/DataType/Vector2.html"},{default:n(()=>[l("Vector2")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("TextureTileScale")]),_:1})])])])]),M]),t("table",null,[t("thead",null,[t("tr",null,[t("th",V,[t("div",C,[e(o,{to:"/Api/DataType/Vector2.html"},{default:n(()=>[l("Vector2")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("TextureTileOffset")]),_:1})])])])]),R]),t("table",null,[t("thead",null,[t("tr",null,[t("th",B,[t("div",F,[e(o,{to:"/Api/DataType/String.html"},{default:n(()=>[l("string")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("MarkTextureId")]),_:1})])])])]),P]),t("table",null,[t("thead",null,[t("tr",null,[t("th",N,[t("div",I,[e(o,{to:"/Api/DataType/Vector2.html"},{default:n(()=>[l("Vector2")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("MarkTextureTileScale")]),_:1})])])])]),O]),t("table",null,[t("thead",null,[t("tr",null,[t("th",q,[t("div",j,[e(o,{to:"/Api/DataType/Vector2.html"},{default:n(()=>[l("Vector2")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("MarkTextureTileOffset")]),_:1})])])])]),E]),t("table",null,[t("thead",null,[t("tr",null,[t("th",G,[t("div",X,[e(o,{to:"/Api/Enumerate/Role/TextureBlend.html"},{default:n(()=>[l("TextureBlend")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("TextureBlend")]),_:1})])])])]),L]),t("table",null,[t("thead",null,[t("tr",null,[t("th",W,[t("div",Q,[e(o,{to:"/Api/DataType/ColorQuad.html"},{default:n(()=>[l("ColorQuad")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("Color")]),_:1})])])])]),U]),t("table",null,[t("thead",null,[t("tr",null,[t("th",H,[t("div",z,[e(o,{to:"/Api/DataType/Float.html"},{default:n(()=>[l("float")]),_:1}),l("  "),t("a",K,[e(d,{color:"dd00dd"},{default:n(()=>[l("Gravity")]),_:1})])])])])]),J]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Y,[t("div",Z,[e(o,{to:"/Api/DataType/Float.html"},{default:n(()=>[l("float")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("Friction")]),_:1})])])])]),$]),t("table",null,[t("thead",null,[t("tr",null,[t("th",tt,[t("div",lt,[e(o,{to:"/Api/DataType/Float.html"},{default:n(()=>[l("float")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("Restitution")]),_:1})])])])]),et]),t("table",null,[t("thead",null,[t("tr",null,[t("th",nt,[t("div",ot,[e(o,{to:"/Api/DataType/Float.html"},{default:n(()=>[l("float")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("Mass")]),_:1})])])])]),dt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",st,[t("div",at,[e(o,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[l("Vector3")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("Velocity")]),_:1})])])])]),it]),t("table",null,[t("thead",null,[t("tr",null,[t("th",ut,[t("div",_t,[e(o,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[l("Vector3")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("AngleVelocity")]),_:1})])])])]),ht]),t("table",null,[t("thead",null,[t("tr",null,[t("th",ct,[t("div",pt,[e(o,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[l("Vector3")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("Size")]),_:1})])])])]),rt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",yt,[t("div",ft,[e(o,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[l("Vector3")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("Center")]),_:1})])])])]),xt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",gt,[t("div",mt,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("EnableGravity")]),_:1})])])])]),bt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",At,[t("div",vt,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("Achored")]),_:1})])])])]),Tt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",St,[t("div",kt,[e(o,{to:"/Api/Enumerate/Physics/PhysicsType.html"},{default:n(()=>[l("PhysicsType")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("PhysXType")]),_:1})])])])]),Dt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",wt,[t("div",Mt,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("EnablePhysics")]),_:1})])])])]),Vt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Ct,[t("div",Rt,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("CanCollide")]),_:1})])])])]),Bt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Ft,[t("div",Pt,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("CanTouch")]),_:1})])])])]),Nt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",It,[t("div",Ot,[e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("CollideGroupID")]),_:1})])])])]),qt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",jt,[t("div",Et,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("ModelLoaded（不可用）")]),_:1})])])])]),Gt]),Xt,Lt,t("table",null,[t("thead",null,[t("tr",null,[t("th",Wt,[t("div",Qt,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/PlayAnimal.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("PlayAnimal")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/String.html"},{default:n(()=>[l("string")]),_:1}),l(" id, "),e(o,{to:"/Api/DataType/Float.html"},{default:n(()=>[l("float")]),_:1}),l(" speed, "),e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l(" loop)")])])])]),Ut]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Ht,[t("div",zt,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/PlayAnimal2.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("PlayAnimal2")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/String.html"},{default:n(()=>[l("string")]),_:1}),l(" id, "),e(o,{to:"/Api/DataType/Float.html"},{default:n(()=>[l("float")]),_:1}),l(" speed, "),e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l(" loop, "),e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l(" priority = 1, "),e(o,{to:"/Api/DataType/Float.html"},{default:n(()=>[l("float")]),_:1}),l(" weight = 1.0f)")])])])]),Kt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Jt,[t("div",Yt,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/StopAnimal.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("StopAnimal")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/String.html"},{default:n(()=>[l("string")]),_:1}),l(" id)")])])])]),Zt]),t("table",null,[t("thead",null,[t("tr",null,[t("th",$t,[t("div",tl,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/StopAnimal2.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("StopAnimal2")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/String.html"},{default:n(()=>[l("string")]),_:1}),l(" id)")])])])]),ll]),t("table",null,[t("thead",null,[t("tr",null,[t("th",el,[t("div",nl,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/StopAllAnimal.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("StopAllAnimal")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l(" reset)")])])])]),ol]),t("table",null,[t("thead",null,[t("tr",null,[t("th",dl,[t("div",sl,[e(o,{to:"/Api/Parameter/void.html"},{default:n(()=>[l("void")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/EnableAniEvent.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("EnableAniEvent")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l(" enable)")])])])]),al]),t("table",null,[t("thead",null,[t("tr",null,[t("th",il,[t("div",ul,[e(o,{to:"/Api/DataType/Vector.html"},{default:n(()=>[l("vector")]),_:1}),l("<"),e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l(">  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/GetAnimSequence.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("GetAnimSequence")]),_:1})]),_:1}),l(" ()")])])])]),_l]),t("table",null,[t("thead",null,[t("tr",null,[t("th",hl,[t("div",cl,[e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/GetAnimPriority.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("GetAnimPriority")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l(" seqid)")])])])]),pl]),t("table",null,[t("thead",null,[t("tr",null,[t("th",rl,[t("div",yl,[e(o,{to:"/Api/Parameter/void.html"},{default:n(()=>[l("void")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/SetAnimPriority.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("SetAnimPriority")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l(" seqid, "),e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l(" value)")])])])]),fl]),t("table",null,[t("thead",null,[t("tr",null,[t("th",xl,[t("div",gl,[e(o,{to:"/Api/DataType/Float.html"},{default:n(()=>[l("float")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/GetAnimWeight.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("GetAnimWeight")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l(" seqid)")])])])]),ml]),t("table",null,[t("thead",null,[t("tr",null,[t("th",bl,[t("div",Al,[e(o,{to:"/Api/Parameter/void.html"},{default:n(()=>[l("void")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/SetAnimWeight.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("SetAnimWeight")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l(" seqid, "),e(o,{to:"/Api/DataType/Float.html"},{default:n(()=>[l("float")]),_:1}),l(" value)")])])])]),vl]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Tl,[t("div",Sl,[e(o,{to:"/Api/DataType/Vector.html"},{default:n(()=>[l("vector")]),_:1}),l("<"),e(o,{to:"/Api/DataType/String.html"},{default:n(()=>[l("string")]),_:1}),l(">  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/GetAnimBones.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("GetAnimBones")]),_:1})]),_:1}),l(" ()")])])])]),kl]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Dl,[t("div",wl,[e(o,{to:"/Api/Parameter/void.html"},{default:n(()=>[l("void")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/SetAnimBoneRotate.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("SetAnimBoneRotate")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/String.html"},{default:n(()=>[l("string")]),_:1}),l(" boneName, "),e(o,{to:"/Api/DataType/Quaternion.html"},{default:n(()=>[l("Quaternion")]),_:1}),l(" qua, "),e(o,{to:"/Api/DataType/Float.html"},{default:n(()=>[l("float")]),_:1}),l(" scale)")])])])]),Ml]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Vl,[t("div",Cl,[e(o,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[l("Vector3")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/AnchorWorldPos.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("AnchorWorldPos")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l(" id, "),e(o,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[l("Vector3")]),_:1}),l(" offset)")])])])]),Rl]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Bl,[t("div",Fl,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/IsBinded.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("IsBinded")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l(" set)")])])])]),Pl]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Nl,[t("div",Il,[e(o,{to:"/Api/Parameter/void.html"},{default:n(()=>[l("void")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/AddForce.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("AddForce")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[l("Vector3")]),_:1}),l(" force)")])])])]),Ol]),t("table",null,[t("thead",null,[t("tr",null,[t("th",ql,[t("div",jl,[e(o,{to:"/Api/Parameter/void.html"},{default:n(()=>[l("void")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/AddTorque.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("AddTorque")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[l("Vector3")]),_:1}),l(" torque)")])])])]),El]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Gl,[t("div",Xl,[e(o,{to:"/Api/Parameter/void.html"},{default:n(()=>[l("void")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/AddForceAtPosition.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("AddForceAtPosition")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[l("Vector3")]),_:1}),l(" force, "),e(o,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[l("Vector3")]),_:1}),l(" position, "),e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l(" mode)")])])])]),Ll]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Wl,[t("div",Ql,[e(o,{to:"/Api/DataType/Bool.html"},{default:n(()=>[l("bool")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/SetMaterial.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("SetMaterial")]),_:1})]),_:1}),l(" ("),e(o,{to:"/Api/DataType/String.html"},{default:n(()=>[l("string")]),_:1}),l(" skinMeshRenderCompName, "),e(o,{to:"/Api/DataType/String.html"},{default:n(()=>[l("string")]),_:1}),l(" materialid, "),e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1}),l(" index)")])])])]),Ul]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Hl,[t("div",zl,[e(o,{to:"/Api/Class/NoType/SandboxNode.html"},{default:n(()=>[l("SandboxNode")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/GetAnimation.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("GetAnimation")]),_:1})]),_:1}),l(" ()")])])])]),Kl]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Jl,[t("div",Yl,[e(o,{to:"/Api/Class/NoType/SandboxNode.html"},{default:n(()=>[l("SandboxNode")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/GetAttributeAnimation.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("GetAttributeAnimation")]),_:1})]),_:1}),l(" ()")])])])]),Zl]),t("table",null,[t("thead",null,[t("tr",null,[t("th",$l,[t("div",te,[e(o,{to:"/Api/Class/NoType/SandboxNode.html"},{default:n(()=>[l("SandboxNode")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/GetSkeletionAnimation.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("GetSkeletionAnimation")]),_:1})]),_:1}),l(" ()")])])])]),le]),t("table",null,[t("thead",null,[t("tr",null,[t("th",ee,[t("div",ne,[e(o,{to:"/Api/Class/NoType/SandboxNode.html"},{default:n(()=>[l("SandboxNode")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/GetHumanAnimation.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("GetHumanAnimation")]),_:1})]),_:1}),l(" ()")])])])]),oe]),t("table",null,[t("thead",null,[t("tr",null,[t("th",de,[t("div",se,[e(o,{to:"/Api/Class/NoType/SandboxNode.html"},{default:n(()=>[l("SandboxNode")]),_:1}),l("  "),e(o,{to:"/Api/Class/Role/SceneModelObject_F/GetAnimator.html"},{default:n(()=>[e(d,{color:"dd00dd"},{default:n(()=>[l("GetAnimator")]),_:1})]),_:1}),l(" ()")])])])]),ae]),ie,ue,t("table",null,[t("thead",null,[t("tr",null,[t("th",_e,[t("div",he,[ce,l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("Touched")]),_:1}),l(" ()")])]),pe,re,ye])]),t("tbody",null,[fe,xe,ge,me,be,t("tr",null,[Ae,t("td",ve,[e(o,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[l("Vector3")]),_:1})]),Te,Se]),t("tr",null,[ke,t("td",De,[e(o,{to:"/Api/DataType/Vector3.html"},{default:n(()=>[l("Vector3")]),_:1})]),we,Me])])]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Ve,[t("div",Ce,[Re,l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("TouchEnded")]),_:1}),l(" ()")])]),Be,Fe,Pe])]),Ne]),t("table",null,[t("thead",null,[t("tr",null,[t("th",Ie,[t("div",Oe,[qe,l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("AnimEvent")]),_:1}),l(" ()")])]),je,Ee,Ge])]),t("tbody",null,[Xe,Le,We,Qe,t("tr",null,[Ue,t("td",He,[e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1})]),ze,Ke]),t("tr",null,[Je,t("td",Ye,[e(o,{to:"/Api/DataType/Int.html"},{default:n(()=>[l("int")]),_:1})]),Ze,$e])])]),t("table",null,[t("thead",null,[t("tr",null,[t("th",tn,[t("div",ln,[en,l("  "),e(d,{color:"dd00dd"},{default:n(()=>[l("RemotePlayAnimal")]),_:1}),l(" ()")])]),nn,on,dn])]),sn]),an])}const pn=i(c,[["render",un],["__file","SceneModelObject.html.vue"]]);export{pn as default};
