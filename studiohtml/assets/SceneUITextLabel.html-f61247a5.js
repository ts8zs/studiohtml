import{_ as i,M as o,p,q as c,R as n,N as s,V as e,t,a1 as d}from"./framework-204010b2.js";const u={},r=n("h1",{id:"uitextlabel",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#uitextlabel","aria-hidden":"true"},"#"),t(" UITextLabel")],-1),_=n("hr",null,null,-1),h=n("h2",{id:"描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#描述","aria-hidden":"true"},"#"),t(" 描述")],-1),m=n("p",null,[t("一个"),n("code",null,"text"),t("文本组件")],-1),k=n("p",null,[n("em",null,"继承自"),t("：")],-1),b=n("hr",null,null,-1),f=n("h2",{id:"属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#属性","aria-hidden":"true"},"#"),t(" 属性：")],-1),x={style:{"text-align":"left"}},y={style:{width:"700px"}},v=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("字体颜色 ("),n("code",null,"Rainbow::ColorQuad"),t(")")])])],-1),g={style:{"text-align":"left"}},T={style:{width:"700px"}},w={style:{"text-align":"left"}},A=n("code",null,"cocos2d::",-1),S={style:{"text-align":"left"}},C={style:{width:"700px"}},V={style:{"text-align":"left"}},I=n("code",null,"cocos2d::",-1),E={style:{"text-align":"left"}},U={style:{width:"700px"}},z=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"字体大小")])],-1),Q={style:{"text-align":"left"}},D={style:{width:"700px"}},L=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"文本内容")])],-1),H={style:{"text-align":"left"}},N={style:{width:"700px"}},R={style:{"text-align":"left"}},q=n("code",null,"fairygui::",-1),B={style:{"text-align":"left"}},O={style:{width:"700px"}},F=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"开启描边")])],-1),G={style:{"text-align":"left"}},M={style:{width:"700px"}},P=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("描边颜色 ("),n("code",null,"Rainbow::ColorQuad"),t(")")])])],-1),W={style:{"text-align":"left"}},j={style:{width:"700px"}},J=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"描边宽度")])],-1),K={style:{"text-align":"left"}},X={style:{width:"700px"}},Y=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"开启阴影")])],-1),Z={style:{"text-align":"left"}},$={style:{width:"700px"}},nn=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"阴影颜色")])],-1),tn={style:{"text-align":"left"}},sn={style:{width:"700px"}},en=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},[t("阴影偏移 ("),n("code",null,"Rainbow::Vector2f"),t(")")])])],-1),an=n("hr",null,null,-1),ln=n("h2",{id:"函数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#函数","aria-hidden":"true"},"#"),t(" 函数")],-1),on={style:{"text-align":"left"}},pn={style:{width:"500px"}},cn={href:""},dn=n("th",{style:{"text-align":"left"}},[n("div",{style:{width:"698px"}})],-1),un=n("tbody",null,[n("tr",null,[n("td",{style:{"text-align":"left"}},"获取字体大小"),n("td",{style:{"text-align":"left"}})]),n("tr",null,[n("td",{style:{"text-align":"left"}},[n("strong",null,"返回类型")]),n("td",{style:{"text-align":"left"}},[n("strong",null,"概要")])]),n("tr",null,[n("td",{style:{"text-align":"left"}},"Vector2"),n("td",{style:{"text-align":"left"}},[t("返回"),n("code",null,"text"),t("尺寸")])])],-1),rn=d(`<hr><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码" aria-hidden="true">#</a> 示例代码：</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> workspace <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;Workspace&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> root <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;SceneUIRoot&#39;</span><span class="token punctuation">,</span> workspace<span class="token punctuation">)</span>
<span class="token keyword">local</span> name <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;SceneUITextLabel&#39;</span><span class="token punctuation">,</span> root<span class="token punctuation">)</span>
name<span class="token punctuation">.</span>Title <span class="token operator">=</span> <span class="token string">&quot;商店&quot;</span>
<span class="token comment">--设置背景框</span>
name<span class="token punctuation">.</span>LineColor <span class="token operator">=</span> ColorQuad<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">--设置背景颜色</span>
name<span class="token punctuation">.</span>FillColor <span class="token operator">=</span> ColorQuad<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">--设置字体颜色</span>
name<span class="token punctuation">.</span>TitleColor <span class="token operator">=</span> ColorQuad<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>
<span class="token comment">--设置位置</span>
name<span class="token punctuation">.</span>Position <span class="token operator">=</span> Vector2<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span>
<span class="token comment">--设置字体大小</span>
name<span class="token punctuation">.</span>FontSize <span class="token operator">=</span> <span class="token number">18</span>
<span class="token comment">--设置上下居中对齐</span>
name<span class="token punctuation">.</span>TextVAlignment <span class="token operator">=</span> Enum<span class="token punctuation">.</span>TextVAlignment<span class="token punctuation">.</span>Center
<span class="token comment">--设置左右向左对齐</span>
name<span class="token punctuation">.</span>TextHAlignment <span class="token operator">=</span> Enum<span class="token punctuation">.</span>TextHAlignment<span class="token punctuation">.</span>Left

<span class="token comment">--设置自动调整大小</span>
name<span class="token punctuation">.</span>IsAutoSize<span class="token operator">=</span> <span class="token keyword">true</span>

<span class="token comment">--设置开启描边</span>
name<span class="token punctuation">.</span>OutlineEnable<span class="token operator">=</span> <span class="token keyword">true</span>
<span class="token comment">--设置开启阴影</span>
name<span class="token punctuation">.</span>ShadowEnable<span class="token operator">=</span> <span class="token keyword">true</span>
<span class="token comment">--获取字体大小</span>
<span class="token keyword">local</span> size <span class="token operator">=</span> name<span class="token punctuation">:</span><span class="token function">GetTextSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function _n(hn,mn){const a=o("RouterLink"),l=o("font");return p(),c("div",null,[r,_,h,m,k,n("ul",null,[n("li",null,[s(a,{to:"/Api/Class/Scene/SceneUIComponent.html"},{default:e(()=>[t("SceneUIComponent")]),_:1})])]),b,f,n("table",null,[n("thead",null,[n("tr",null,[n("th",x,[n("div",y,[s(a,{to:"/Api/DataType/ColorQuad.html"},{default:e(()=>[t("ColorQuad")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("TitleColor")]),_:1})])])])]),v]),n("table",null,[n("thead",null,[n("tr",null,[n("th",g,[n("div",T,[s(a,{to:"/Api/Enumerate/UI/TextVAlignment.html"},{default:e(()=>[t("TextVAlignment")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("TextVAlignment")]),_:1})])])])]),n("tbody",null,[n("tr",null,[n("td",w,[t("上下对齐，有向上、中间和向下对齐。参见枚举"),A,s(a,{to:"/Api/Enumerate/UI/TextVAlignment.html"},{default:e(()=>[t("TextVAlignment")]),_:1})])])])]),n("table",null,[n("thead",null,[n("tr",null,[n("th",S,[n("div",C,[s(a,{to:"/Api/Enumerate/UI/TextHAlignment.html"},{default:e(()=>[t("TextHAlignment")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("TextHAlignment")]),_:1})])])])]),n("tbody",null,[n("tr",null,[n("td",V,[t("左右对齐，有向左、中间和向右对齐。参见枚举"),I,s(a,{to:"/Api/Enumerate/UI/TextHAlignment.html"},{default:e(()=>[t("TextHAlignment")]),_:1})])])])]),n("table",null,[n("thead",null,[n("tr",null,[n("th",E,[n("div",U,[s(a,{to:"/Api/DataType/Int.html"},{default:e(()=>[t("int")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("FontSize")]),_:1})])])])]),z]),n("table",null,[n("thead",null,[n("tr",null,[n("th",Q,[n("div",D,[s(a,{to:"/Api/DataType/String.html"},{default:e(()=>[t("string")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("Title")]),_:1})])])])]),L]),n("table",null,[n("thead",null,[n("tr",null,[n("th",H,[n("div",N,[s(a,{to:"/Api/Enumerate/UI/AutoSizeType.html"},{default:e(()=>[t("AutoSizeType")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("IsAutoSize")]),_:1})])])])]),n("tbody",null,[n("tr",null,[n("td",R,[t("自动调整节点大小为字体大小。参见枚举"),q,s(a,{to:"/Api/Enumerate/UI/AutoSizeType.html"},{default:e(()=>[t("AutoSizeType")]),_:1})])])])]),n("table",null,[n("thead",null,[n("tr",null,[n("th",B,[n("div",O,[s(a,{to:"/Api/DataType/Bool.html"},{default:e(()=>[t("bool")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("OutlineEnable")]),_:1})])])])]),F]),n("table",null,[n("thead",null,[n("tr",null,[n("th",G,[n("div",M,[s(a,{to:"/Api/DataType/ColorQuad.html"},{default:e(()=>[t("ColorQuad")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("OutlineColor")]),_:1})])])])]),P]),n("table",null,[n("thead",null,[n("tr",null,[n("th",W,[n("div",j,[s(a,{to:"/Api/DataType/Int.html"},{default:e(()=>[t("int")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("OutlineSize")]),_:1})])])])]),J]),n("table",null,[n("thead",null,[n("tr",null,[n("th",K,[n("div",X,[s(a,{to:"/Api/DataType/Bool.html"},{default:e(()=>[t("bool")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("ShadowEnable")]),_:1})])])])]),Y]),n("table",null,[n("thead",null,[n("tr",null,[n("th",Z,[n("div",$,[s(a,{to:"/Api/DataType/ColorQuad.html"},{default:e(()=>[t("ColorQuad")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("ShadowColor")]),_:1})])])])]),nn]),n("table",null,[n("thead",null,[n("tr",null,[n("th",tn,[n("div",sn,[s(a,{to:"/Api/DataType/Vector2.html"},{default:e(()=>[t("Vector2")]),_:1}),t("  "),s(l,{color:"dd00dd"},{default:e(()=>[t("ShadowOffect")]),_:1})])])])]),en]),an,ln,n("table",null,[n("thead",null,[n("tr",null,[n("th",on,[n("div",pn,[s(a,{to:"/Api/DataType/Vector2.html"},{default:e(()=>[t("Vector2")]),_:1}),t("  "),n("a",cn,[s(l,{color:"dd00dd"},{default:e(()=>[t("GetTextSize")]),_:1})]),t(" ()")])]),dn])]),un]),rn])}const bn=i(u,[["render",_n],["__file","SceneUITextLabel.html.vue"]]);export{bn as default};
