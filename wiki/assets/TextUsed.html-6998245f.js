import{_ as c,a,b as r,c as i,d as s}from"./game_label-f8de992c.js";import{_ as n,M as l,p as h,q as _,R as o,t as e,N as p,V as u,a1 as d}from"./framework-5866ffd3.js";const g={},x=d('<h1 id="文本的使用" tabindex="-1"><a class="header-anchor" href="#文本的使用" aria-hidden="true">#</a> 文本的使用</h1><h2 id="创建文本标签" tabindex="-1"><a class="header-anchor" href="#创建文本标签" aria-hidden="true">#</a> 创建文本标签</h2><p>各种内容都可添加至屏幕 <code>GUI</code>。我们先从基本的文本标签开始。</p><ol><li>在 <strong>场景</strong> 窗口中将鼠标悬停在作为 <code>StarterGui</code> 子项的新 <code>2DUIRoot</code> 对象上，并单击其圆圈 <code>⊕</code> 按钮。</li></ol><p><img src="'+c+'" alt="gui_2d_search_label"></p><ol start="2"><li><p>在弹出菜单中找到 <code>UITextLabel</code> 并选择它。请注意，通过在 “<code>Search object</code>（搜索对象）”输入字段中键入对象名称的前几个字母，可以更轻松地找到该对象。</p></li><li><p>这将在游戏视图的左上角添加一个非常基本的文本标签。</p></li></ol><p><img src="'+a+'" alt="gui_2d_label"></p><blockquote><p>这些步骤创建的新文本标签将作为 <code>StarterGui</code> 的子项 <code>2DUIRoot</code> 的子项。由于这些对象都不存在于 <code>3D</code> 工作区中，因此您无法像选择常规部件一样使用 <code>Select</code>（选择）工具选择它们。要选择任何这些与 <code>GUI</code> 相关的对象，您必须在创建它们的 <code>场景</code> 窗口树中进行选择。</p></blockquote><h2 id="自定义标签" tabindex="-1"><a class="header-anchor" href="#自定义标签" aria-hidden="true">#</a> 自定义标签</h2><p>现在我们在屏幕中有了一个文本标签，但是一个写了 <code>Label</code> 的白色框用处不大。让我们将其改为一个显示“版本号”的 <code>GUI</code>，这是通常出现在菜单/简介屏幕上的显示元素，用于显示游戏的当前版本。</p><h6 id="_1-在-场景-窗口中-选择新的-uitextlabel-对象。" tabindex="-1"><a class="header-anchor" href="#_1-在-场景-窗口中-选择新的-uitextlabel-对象。" aria-hidden="true">#</a> 1. 在 <strong>场景</strong> 窗口中，选择新的 <code>UITextLabel</code> 对象。</h6><h6 id="_2-通过选择-view-视图-选项卡并单击-properties-属性-按钮-打开-properties-属性-窗口。" tabindex="-1"><a class="header-anchor" href="#_2-通过选择-view-视图-选项卡并单击-properties-属性-按钮-打开-properties-属性-窗口。" aria-hidden="true">#</a> 2. 通过选择 <strong>View（视图）</strong> 选项卡并单击 <strong>Properties（属性）</strong> 按钮，打开 <strong>Properties（属性）</strong> 窗口。</h6><p><img src="'+r+'" alt="view_attr"></p>',13),f={id:"_3-对于-font-属性-位于-text-文本-部分中-单击字体名称的右侧并从下拉菜单中选择-highway。-敬请期待",tabindex:"-1"},b=o("a",{class:"header-anchor",href:"#_3-对于-font-属性-位于-text-文本-部分中-单击字体名称的右侧并从下拉菜单中选择-highway。-敬请期待","aria-hidden":"true"},"#",-1),m=o("code",null,"Font",-1),U=o("strong",null,"Text（文本）",-1),I=o("strong",null,"Highway",-1),T=d('<h6 id="_4-在-text-属性栏中-设置字号、文本内容、显示布局。" tabindex="-1"><a class="header-anchor" href="#_4-在-text-属性栏中-设置字号、文本内容、显示布局。" aria-hidden="true">#</a> 4. 在 <code>Text</code> 属性栏中，设置字号、文本内容、显示布局。</h6><p><img src="'+i+'" alt="attr_text"></p><ul><li>在 <code>FontSize</code> 属性字段中，键入 <code>15</code>。</li><li>在 <code>TextVAlignment</code> 属性字段中，单击右侧并从下拉菜单中选择 <strong>Center</strong>。</li><li>在 <code>Title</code> 属性字段中，键入如 <code>Version 1.0（版本 1.0）</code> 的新名称。</li><li>现在展开 <code>TitleColor</code> 部分（如果它尚未展开）。 <ul><li>对于 <code>Red</code> 值，输入类似于 <code>95</code> 的新值。</li><li>对于 <code>Green</code> 值，输入类似于 <code>95</code> 的新值。</li><li>对于 <code>Blue</code> 值，输入类似于 <code>95</code> 的新值。</li></ul></li></ul><blockquote><p>很不错！<code>GUI</code> 对象现在看起来好多了！如果希望更具创意，可尝试更改如 <code>Base</code> 属性栏和 <code>Background</code> 属性栏的属性。</p></blockquote><h2 id="在屏幕-gui-中定位项目" tabindex="-1"><a class="header-anchor" href="#在屏幕-gui-中定位项目" aria-hidden="true">#</a> 在屏幕 GUI 中定位项目</h2><p>现在屏幕上有了一个基本的文本对象，让我们将其移动到新的位置。<code>MiniStudio</code> 中的每个 <code>2D</code> 对象都具有 <strong>Position</strong> 属性，可用于根据其父对象确定将它绘制于何处。此位置由 <strong>X</strong> 和 <strong>Y</strong> 坐标设置，其中 <strong>X</strong> 是水平位置，<strong>Y</strong> 是垂直位置。</p><p>在首次创建时，所有 <code>2D</code> 对象都从屏幕左上角 <code>0</code> 的 <code>X</code> 和 <code>Y</code> 位置开始，但是如何移动它？ 让我们来看一下文本标签的 <code>Position</code> 属性并了解如何移动！</p><h6 id="_1-如果未选择-uitextlabel-对象-请在管理器窗口中单击它。" tabindex="-1"><a class="header-anchor" href="#_1-如果未选择-uitextlabel-对象-请在管理器窗口中单击它。" aria-hidden="true">#</a> 1. 如果未选择 <code>UITextLabel</code> 对象，请在管理器窗口中单击它。</h6><h6 id="_2-找到-位置-属性并单击小箭头展开它。" tabindex="-1"><a class="header-anchor" href="#_2-找到-位置-属性并单击小箭头展开它。" aria-hidden="true">#</a> 2. 找到 <strong>位置</strong> 属性并单击小箭头展开它。</h6><h6 id="_3-现在-直接展开其下方的-x-和-y-分支。请注意-每个分支都具有唯一的-scale-缩放-和-offset-偏移-属性-—-可使用这些值为屏幕-gui-中的文本标签定位。" tabindex="-1"><a class="header-anchor" href="#_3-现在-直接展开其下方的-x-和-y-分支。请注意-每个分支都具有唯一的-scale-缩放-和-offset-偏移-属性-—-可使用这些值为屏幕-gui-中的文本标签定位。" aria-hidden="true">#</a> 3. 现在，直接展开其下方的 <code>X</code> 和 <code>Y</code> 分支。请注意，每个分支都具有唯一的 <code>Scale</code>（缩放） 和 <code>Offset</code>（偏移） 属性 — 可使用这些值为屏幕 <code>GUI</code> 中的文本标签定位。</h6><h6 id="_4-查看调整好后的效果" tabindex="-1"><a class="header-anchor" href="#_4-查看调整好后的效果" aria-hidden="true">#</a> 4. 查看调整好后的效果</h6><p><img src="'+s+'" alt="game_label"></p>',12);function G(w,S){const t=l("font");return h(),_("div",null,[x,o("h6",f,[b,e(" 3. 对于 "),m,e(" 属性（位于 "),U,e(" 部分中），单击字体名称的右侧并从下拉菜单中选择 "),I,e("。"),p(t,{color:"red"},{default:u(()=>[e("(敬请期待)")]),_:1})]),T])}const v=n(g,[["render",G],["__file","TextUsed.html.vue"]]);export{v as default};