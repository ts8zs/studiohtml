import{_ as o,M as c,p as l,q as p,R as t,t as n,N as s,V as e,Q as i,a1 as u}from"./framework-204010b2.js";const r="/studiohtml/Images/tutorials_imgs/node_imgs/starter_player_localScript.jpg",d="/studiohtml/Images/tutorials_imgs/node_imgs/view_lua_debug.jpg",_="/studiohtml/Images/tutorials_imgs/node_imgs/starter_player_localScript_debug.jpg",k={},m=t("h1",{id:"玩家输入控制",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#玩家输入控制","aria-hidden":"true"},"#"),n(" 玩家输入控制")],-1),F={id:"第1步-在-starterplayer-的-starterplayerscripts-里创建-localscript-并添加以下代码",tabindex:"-1"},v=t("a",{class:"header-anchor",href:"#第1步-在-starterplayer-的-starterplayerscripts-里创建-localscript-并添加以下代码","aria-hidden":"true"},"#",-1),h=u('<p><img src="'+r+`" alt="starter_player_localScript"></p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> ContextActionService <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;ContextActionService&quot;</span><span class="token punctuation">)</span>

ContextActionService<span class="token punctuation">:</span><span class="token function">BindContext</span><span class="token punctuation">(</span><span class="token string">&quot;WkeydownactionName&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>actionName<span class="token punctuation">,</span> inputState<span class="token punctuation">,</span> inputObj<span class="token punctuation">)</span>
	<span class="token keyword">if</span> inputState <span class="token operator">==</span> Enum<span class="token punctuation">.</span>UserInputState<span class="token punctuation">.</span>InputBegin<span class="token punctuation">.</span>Value <span class="token keyword">then</span>
		<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;ContextActionService begin&quot;</span><span class="token punctuation">,</span> actionName<span class="token punctuation">)</span>
	<span class="token keyword">else</span>
		<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;ContextActionService end&quot;</span><span class="token punctuation">,</span> actionName<span class="token punctuation">)</span>
	<span class="token keyword">end</span>
<span class="token keyword">end</span><span class="token punctuation">,</span> <span class="token keyword">false</span><span class="token punctuation">,</span>  Enum<span class="token punctuation">.</span>KeyCode<span class="token punctuation">.</span>W <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),f=t("strong",null,"MiniStudio",-1),g=t("p",null,[t("img",{src:d,alt:"view_lua_debug"})],-1),y={id:"第2步-点击开始游戏按钮进入场景-按下键盘-w-键后可以在输出界面中看到对应的打印。",tabindex:"-1"},S=t("a",{class:"header-anchor",href:"#第2步-点击开始游戏按钮进入场景-按下键盘-w-键后可以在输出界面中看到对应的打印。","aria-hidden":"true"},"#",-1),b=t("p",null,[t("img",{src:_,alt:"starter_player_localScript_debug"})],-1);function C(I,x){const a=c("font");return l(),p("div",null,[m,t("h4",F,[v,n(" 第1步：在 "),s(a,{color:"#FF00FF"},{default:e(()=>[n("StarterPlayer")]),_:1}),n(" 的 "),s(a,{color:"#FF00FF"},{default:e(()=>[n("StarterPlayerScripts")]),_:1}),n(" 里创建 "),s(a,{color:"#FF00FF"},{default:e(()=>[n("LocalScript")]),_:1}),n(" ，并添加以下代码：")]),h,i(` local UserInputService = game:GetService("UserInputService") -- 获取UserInputService服务
 
local function onInputEnded(inputObject)
	-- 判断是否输入的类型为键盘
	if inputObject.UserInputType == Enum.UserInputType.Keyboard then
		-- 判断是否为键盘的E键按下
		if inputObject.KeyCode == Enum.KeyCode.H then
			print("键盘按下: " .. inputObject.KeyCode.Name)
		end
	end
end
 
-- 监听输入事件结束
UserInputService.InputEnded:Connect(onInputEnded) `),t("ul",null,[t("li",null,[t("p",null,[n("第1行：获取 "),s(a,{color:"#FF00FF"},{default:e(()=>[n("ContextActionService")]),_:1}),n(" 服务")])]),t("li",null,[t("p",null,[n("第3行：监听绑定输入事件，这个包括所有输入的开始和结束事件，比如鼠标按下和抬起，键盘按下和抬起等等。事件会触发绑定函数 "),s(a,{color:"#FF00FF"},{default:e(()=>[n("BindContext")]),_:1})])]),t("li",null,[t("p",null,[n("第4行：判断输入对象事件是否为按下，可以通过 "),f,n(" 自带的枚举类 "),s(a,{color:"#FF00FF"},{default:e(()=>[n("Enum.UserInputState.InputBegin.Value")]),_:1}),n(" 进行判断")])]),t("li",null,[t("p",null,[n("第9行：判断键盘按下的键是否为 "),s(a,{color:"#FF00FF"},{default:e(()=>[n("W")]),_:1}),n(" 键，可以通过枚举类 "),s(a,{color:"#FF00FF"},{default:e(()=>[n("Enum.KeyCode.W")]),_:1}),n(" 进行判断")])]),t("li",null,[t("p",null,[n("第5行：如果满足以上条件，则用 "),s(a,{color:"#FF00FF"},{default:e(()=>[n("print")]),_:1}),n(" 打印到输出界面里，输出界面可以在"),s(a,{color:"#FF00FF"},{default:e(()=>[n("视图->Lua调试")]),_:1}),n("里打开。")]),g])]),t("h4",y,[S,n(" 第2步：点击开始游戏按钮进入场景，按下键盘 "),s(a,{color:"#FF00FF"},{default:e(()=>[n("W")]),_:1}),n(" 键后可以在输出界面中看到对应的打印。")]),b])}const N=o(k,[["render",C],["__file","NInputControl.html.vue"]]);export{N as default};
