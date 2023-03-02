import{_ as i,M as o,p,q as c,R as n,N as s,V as e,t,Q as d,a1 as u}from"./framework-5866ffd3.js";const r={},m=n("h1",{id:"uitextinput",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uitextinput","aria-hidden":"true"},"#"),t(" UITextInput")],-1),h=n("hr",null,null,-1),k=n("h2",{id:"描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),t(" 描述")],-1),_=n("p",null,"输入框组件",-1),x=n("p",null,[n("em",null,"继承自"),t("：")],-1),f=n("hr",null,null,-1),g=n("h2",{id:"属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),t(" 属性")],-1),v={style:{"text-align":"left"}},b={style:{width:"700px"}},y=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("字体颜色 ("),n("code",null,"Rainbow::ColorQuad"),t(")")])])],-1),T={style:{"text-align":"left"}},w={style:{width:"700px"}},I=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("上下对齐，有向上、中间和向下对齐。参见枚举"),n("code",null,"cocos2d::TextVAlignment")])])],-1),N={style:{"text-align":"left"}},A={style:{width:"700px"}},S=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("左右对齐，有向左、中间和向右对齐。参见枚举"),n("code",null,"cocos2d::TextHAlignment")])])],-1),V={style:{"text-align":"left"}},C={style:{width:"700px"}},U=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"限制输入文本长度")])],-1),M={style:{"text-align":"left"}},E={style:{width:"700px"}},R=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"字体大小")])],-1),q={style:{"text-align":"left"}},B={style:{width:"700px"}},H=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"输入文本内容")])],-1),Q=n("hr",null,null,-1),D=n("h2",{id:"事件",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#事件","aria-hidden":"true"},"#"),t(" 事件")],-1),L={style:{"text-align":"left"}},z={style:{width:"500px"}},F=n("a",{href:""},"SBXSignal<bool>",-1),X={href:""},P=n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"100px"}})],-1),G=n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"45px"}})],-1),j=n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"400px"}})],-1),J=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"输入完成触发"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}})]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("strong",null,"返回类型")]),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[n("strong",null,"概要")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"SBXSignal"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},[t("进入节点时触发，事件参数为（"),n("code",null,"bool isReturn"),t("）")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("strong",null,"SBXSignal参数名称")]),n("td",{style:{"text-align":"left"}},[n("strong",null,"类别")]),n("td",{style:{"text-align":"left"}},[n("strong",null,"默认")]),n("td",{style:{"text-align":"left"}},[n("strong",null,"描述")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"isReturn"),n("td",{style:{"text-align":"left"}},"bool"),n("td",{style:{"text-align":"left"}}),n("td",{style:{"text-align":"left"}},"返回true，输入完成")])],-1),K=u(`<hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> workspace <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;workspace&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> root<span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;UIRoot&#39;</span><span class="token punctuation">,</span> workspace<span class="token punctuation">)</span>
<span class="token keyword">local</span> petNameText <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;UITextInput&#39;</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span>
<span class="token comment">--设置节点名字</span>
petNameText<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;PetNameText&quot;</span>
<span class="token comment">--设置节点大小</span>
petNameText<span class="token punctuation">.</span>Size <span class="token operator">=</span> Vector2<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
<span class="token comment">--设置节点位置</span>
petNameText<span class="token punctuation">.</span>Position <span class="token operator">=</span> Vector2<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span>
<span class="token comment">--设置是否可见</span>
petNameText<span class="token punctuation">.</span>Visible <span class="token operator">=</span> <span class="token keyword">true</span>
<span class="token comment">--设置输入框背景颜色</span>
petNameText<span class="token punctuation">.</span>FillColor <span class="token operator">=</span> ColorQuad<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">97</span><span class="token punctuation">,</span> <span class="token number">151</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>
<span class="token comment">--设置文本上下对齐</span>
petNameText<span class="token punctuation">.</span>TextVAlignment <span class="token operator">=</span> Enum<span class="token punctuation">.</span>TextVAlignment<span class="token punctuation">.</span>Center
<span class="token comment">--设置文本左右对齐</span>
petNameText<span class="token punctuation">.</span>TextHAlignment <span class="token operator">=</span> Enum<span class="token punctuation">.</span>TextHAlignment<span class="token punctuation">.</span>Center
<span class="token comment">--设置输入内容</span>
petNameText<span class="token punctuation">.</span>Title <span class="token operator">=</span> <span class="token string">&quot;宠物狼&quot;</span>
<span class="token comment">--设置输入文本最长长度</span>
petNameText<span class="token punctuation">.</span>MaxLength <span class="token operator">=</span> <span class="token number">20</span>
<span class="token comment">--设置输入文本字体大小</span>
petNameText<span class="token punctuation">.</span>FontSize <span class="token operator">=</span> <span class="token number">25</span>
<span class="token comment">--设置输入模式为单行</span>
petNameText<span class="token punctuation">.</span>InputMode <span class="token operator">=</span> Enum<span class="token punctuation">.</span>InputMode<span class="token punctuation">.</span>Singleline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function O(W,Y){const a=o("RouterLink"),l=o("font");return p(),c("div",null,[m,h,k,_,x,n("ul",null,[n("li",null,[s(a,{to:"/Api/Class/Scene/SceneUIComponent.html"},{default:e(()=>[t("UIComponent")]),_:1})])]),f,g,n("table",null,[n("thead",null,[n("tr",null,[n("th",v,[n("div",b,[s(a,{to:"/Api/DataType/ColorQuad.html"},{default:e(()=>[t("ColorQuad")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("TitleColor")]),_:1})])])])]),y]),n("table",null,[n("thead",null,[n("tr",null,[n("th",T,[n("div",w,[s(a,{to:"/Api/Enumerate/UI/TextVAlignment.html"},{default:e(()=>[t("TextVAlignment")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("TextVAlignment")]),_:1})])])])]),I]),n("table",null,[n("thead",null,[n("tr",null,[n("th",N,[n("div",A,[s(a,{to:"/Api/Enumerate/UI/TextHAlignment.html"},{default:e(()=>[t("TextHAlignment")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("TextHAlignment")]),_:1})])])])]),S]),n("table",null,[n("thead",null,[n("tr",null,[n("th",V,[n("div",C,[s(a,{to:"/Api/DataType/Int.html"},{default:e(()=>[t("int")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("MaxLength")]),_:1})])])])]),U]),n("table",null,[n("thead",null,[n("tr",null,[n("th",M,[n("div",E,[s(a,{to:"/Api/DataType/Int.html"},{default:e(()=>[t("int")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("FontSize")]),_:1})])])])]),R]),n("table",null,[n("thead",null,[n("tr",null,[n("th",q,[n("div",B,[s(a,{to:"/Api/DataType/String.html"},{default:e(()=>[t("string")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("Title")]),_:1})])])])]),H]),d(' |<div style="width:700px">[InputMode](/Api/Enumerate/UI/InputMode.md) &emsp;<font color="dd00dd">InputMode</font></div>|\n|:---|\n|输入模式，有单行输入和多行输入，参见枚举`cocos2d::ui::EditBox::`[InputMode](/Api/Enumerate/UI/InputMode.md)| '),Q,D,n("table",null,[n("thead",null,[n("tr",null,[n("th",L,[n("div",z,[F,t("  "),n("a",X,[s(l,{color:"dd00dd"},{default:e(()=>[t("Return")]),_:1})]),t(" ()")])]),P,G,j])]),J]),K])}const $=i(r,[["render",O],["__file","SceneUITextInput.html.vue"]]);export{$ as default};