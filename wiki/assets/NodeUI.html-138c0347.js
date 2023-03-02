import{_ as n}from"./gui_2d_imglb-71dfa7cc.js";import{_ as c,M as r,p as i,q as s,N as h,V as l,t as o,Q as t,a1 as d,R as e}from"./framework-5866ffd3.js";const f={},u=d('<h1 id="界面" tabindex="-1"><a class="header-anchor" href="#界面" aria-hidden="true">#</a> 界面</h1><p>界面:即<code>GUI</code>,表示图形用户界面（<code>Graphical User Interface</code>），用于向玩家显示游戏相关的信息。<code>GUI</code> 可用于向玩家显示其角色的等级、生命值和金币数量，也可以为菜单和物品栏系统创建按钮。</p><h2 id="添加-gui-到游戏中" tabindex="-1"><a class="header-anchor" href="#添加-gui-到游戏中" aria-hidden="true">#</a> 添加 GUI 到游戏中</h2><p>最常见的 <code>GUI</code> 类型是屏幕 <code>GUI</code>，其行为类似于将贴纸放在玩家屏幕上的 <code>2D</code> 区域。当玩家移动镜头或探索游戏世界时，屏幕 <code>GUI</code> 会保持在相同区域中（位于屏幕上）。</p><p>当您制作新的 <code>MiniStudio</code> 游戏时，此屏幕 <code>GUI</code> 区域开始并不存在 — — 您需要添加它。最简便的方法是将其添加到 <code>StarterGui</code> 服务，以便在玩家加入游戏时将其复制到玩家的本地游戏会话中。</p>',5),_=d('<h6 id="_1-在管理器窗口中-找到-startergui-对象。" tabindex="-1"><a class="header-anchor" href="#_1-在管理器窗口中-找到-startergui-对象。" aria-hidden="true">#</a> 1. 在管理器窗口中，找到 <code>StarterGui</code> 对象。</h6><h6 id="_2-将鼠标悬停在该对象上并单击圆圈-⊕-按钮。" tabindex="-1"><a class="header-anchor" href="#_2-将鼠标悬停在该对象上并单击圆圈-⊕-按钮。" aria-hidden="true">#</a> 2. 将鼠标悬停在该对象上并单击圆圈 <code>⊕</code> 按钮。</h6><h6 id="_3-在弹出菜单中找到-2duiroot-并选择它-这将在您的-3d-游戏世界上方创建一个新的-2d-屏幕区域。" tabindex="-1"><a class="header-anchor" href="#_3-在弹出菜单中找到-2duiroot-并选择它-这将在您的-3d-游戏世界上方创建一个新的-2d-屏幕区域。" aria-hidden="true">#</a> 3. 在弹出菜单中找到 <code>2DUIRoot</code> 并选择它，这将在您的 <code>3D</code> 游戏世界上方创建一个新的 <code>2D</code> 屏幕区域。</h6><p><img src="'+n+'" alt="gui_2d_imglb"></p><h6 id="_4-添加节点对象-uiimage-或-uitextlabel-至屏幕-gui" tabindex="-1"><a class="header-anchor" href="#_4-添加节点对象-uiimage-或-uitextlabel-至屏幕-gui" aria-hidden="true">#</a> 4. 添加节点对象（<code>UIImage</code> 或 <code>UITextLabel</code>）至屏幕 <code>GUI</code></h6><p>这个新的屏幕 <code>GUI</code> 当前为空：它只是一幅覆盖整个玩家屏幕宽度和高度的空白画布。</p><p>各种内容都可添加至屏幕 <code>GUI</code>。然后通过修改属性来调整它的显示。</p><h2 id="scale-属性" tabindex="-1"><a class="header-anchor" href="#scale-属性" aria-hidden="true">#</a> Scale 属性</h2><p>Scale 属性表示父对象的宽度或高度的百分比。请记住，屏幕 GUI“画布”覆盖 3D 游戏视图的全宽和全高 — 这意味着 Scale 属性可用于根据屏幕全宽或全高的百分比将对象直接定位于视图的中心、紧靠左边缘或右边缘或者两者之间的任何位置。</p><p>虽然 Scale 表示百分比，但是您输入的值范围通常应介于 0 和 1 之间，其中 0 等于 0%，1 等于 100%。例如：</p><table><thead><tr><th>值设置</th><th>描述</th></tr></thead><tbody><tr><td>Scale = 0.1</td><td>全宽或全高的 10%</td></tr><tr><td>Scale = 0.5</td><td>全宽或全高的 50%</td></tr><tr><td>Scale = 0.95</td><td>全宽或全高的 95%</td></tr></tbody></table>',11),p=e("blockquote",null,[e("p",null,"请记住，您的游戏将在不同宽高的屏幕上进行。例如，手机屏幕可能比 PC 或主机屏幕略宽（且略短）。Scale 是将对象定位在视图中心的最佳选择，在不同的屏幕上它将始终保持在中心。")],-1),S=e("h2",{id:"offset-属性",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#offset-属性","aria-hidden":"true"},"#"),o(" Offset 属性")],-1),I=e("p",null,"每组中的第二个属性称为 Offset。此属性不是按父项大小的百分比，而是按像素来移动元素的。如果要将 GUI 元素放在靠近游戏视图边缘的位置，您可以使用此属性。",-1),U=d('<blockquote><p>Offset 是将对象定位于视图边缘附近的最佳选择。使用此选项将确保对象在 PC、主机、平板电脑和手机上都保持在相同的基本屏幕位置。</p></blockquote><h2 id="锚点" tabindex="-1"><a class="header-anchor" href="#锚点" aria-hidden="true">#</a> 锚点</h2><p>如果您仔细看 <code>GUI</code> 对象的当前位置，您将注意到：它并非位于左右方向的正中心位置，即使将 <code>Position</code> → <code>X</code> → <code>Scale</code> 设置为 <code>0.5</code> (<code>50%</code>) 也是如此。</p><p>这是因为对象具有默认锚点。锚点是对象上用于与您设置的屏幕位置对齐的特定点。想象锚点如一根针穿过一张纸 — 针可以穿过纸上的任何位置，并且 <code>MiniStuido</code> 会使该针与您为对象设置的 <code>Position</code> 值保持一致。</p><p>在游戏编辑器窗口中，锚点由对象（在选中它时）上的小正方形轮廓显示。在创建新 <code>GUI</code> 对象时，锚点默认在其左上角 — 这就是为什么对象上的该点与之前设置的 <code>X</code> 和 <code>Y</code> 位置值保持一致。</p><p>锚点基于的 X 和 Y 值是对象大小的百分比：0 等于 0%，1 等于 100%。</p>',6);function b(G,x){const a=r("font");return i(),s("div",null,[u,h(a,{color:"red"},{default:l(()=>[o("注：这里有一个需要注意的地方，如果是添加到 `StarterGui` 节点下则是本地（本机）显示，如果是添加到 `WorkSpace` 节点下，则会同步到所有主客机显示")]),_:1}),_,t(`    现在，让我们将文本标签移至屏幕的水平中心。只需为 X 的 Scale 值输入 **0.5**，然后按 Enter/Return 键确认。
   文本标签现在应该更靠近游戏视图的中心。 `),p,S,I,t(`    让我们将文本标签放在靠近屏幕顶部边缘的地方。为 Y 的 Offset 值输入 50，然后按 Enter/Return 键确认。
   现在文本标签应在靠近屏幕顶部边缘的地方。 `),U,t(` 您可以使用此概念将 GUI 对象置于屏幕的正中心。

如果未选择 TextLabel 对象，请在管理器窗口中单击它。
找到 AnchorPoint 属性并单击小箭头展开它。

将 X 值设置为 0.5，然后按 Enter/Return 键确认。

文本标签现在应该精确定位在游戏视图的中心。


锚点值并非限制为 0、0.5 或 1 — 您可以输入介于这些值之间的任何值，如 0.25 或 0.8 等，但是无法设置小于 0 或大于 1 的锚点。

## 调整屏幕 GUI 中项目的大小

   如您所见，Position 和 AnchorPoint 属性可用于将元素放置在屏幕 GUI 中的任何位置。我们还可以更改任何元素的大小，方法是使用其 Size 属性。

如果未选择 TextLabel 对象，请在管理器窗口中单击它。
找到 Size 属性并单击小箭头展开它。

现在，展开其下方的 X 和 Y 分支。与 Position 类似，每个分支都具有唯一的 Scale 和 Offset 属性。

## Scale 属性
   
   在设置 GUI 对象的尺寸时，Scale 属性与位置的工作原理相同，即表示父对象的宽度或高度的百分比。如果将 Size → X → Scale 设置为 0.5 (50%)，该对象将正好为屏幕宽度的一半。

让我们测试一下！

为 X 的 Scale 值输入 0.75，然后按 Enter/Return 键确认。

为 X 的 Offset 值输入 0，然后按 Enter/Return 键。

文本标签现在应该正好占据屏幕宽度的 75%。


## Offset 属性

   正如上文所述，Size 也具有称为 Offset 的属性。如果希望所创建的按钮、标签或其他对象无论在哪个屏幕上显示时都保持相同数量的像素（宽度或高度），那么您可以使用 Offset 来定义尺寸。

要增加文本标签的高度，只需为 Y 的 Offset 值输入 150，然后按 Enter/Return 键确认。


现在，文本标签应该比以前高很多了！


## 使用负偏移值

某些 GUI 布局只能使用 Scale 和 Offset 值的创意组合实现，您可以通过将 TextLabel 对象填充整个屏幕然后四条边全部都留出 20 像素的边距来一探究竟。

将 Position → Y → Offset 设置为 20。这应该会略微向上提升对象。

将 SSize → X → Scale 设置为 1（100% 的屏幕宽度）。
将 Size → X → Offset 设置为 -40 — 这会使对象比整个屏幕宽度少 40 像素，让两边都留出所需的 20 像素边距。

将 Size → Y → Scale 设置为 1（100% 的屏幕高度）。
将 Size → Y → Offset 设置为 -40。正如以上所示，这会使对象比屏幕全高少 40 像素，让顶部和底部都留出 20 像素的边距。

挑战
至少还有一种其他设置组合将产生上面相同的 GUI 对象，您能想到吗？这里有一个提示：将锚点设置为 TextLabel 对象的中心，然后根据需要调整 Scale 和 Offset 值。 `)])}const g=c(f,[["render",b],["__file","NodeUI.html.vue"]]);export{g as default};
