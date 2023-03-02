import{_ as e,a as d,b as a,c as i,d as o,e as c,f as r,g as t,h as s,i as h,j as n,k as _,l as p,m,n as l,o as g}from"./img_attr_index1-19398e49.js";import{_ as u,p as x,q as I,a1 as b}from"./framework-5866ffd3.js";const f={},U=b('<h1 id="在-gui-中使用图像" tabindex="-1"><a class="header-anchor" href="#在-gui-中使用图像" aria-hidden="true">#</a> 在 GUI 中使用图像</h1><p>在 <code>界面Gui</code> 指南中，开发者学习了<code>GUI</code>的基础知识、如何为所有进入自己游戏的玩家创建 <code>GUI</code> 画布，以及如何在屏幕上放置一个 <code>UITextLabel</code> 的<code>GUI</code> 对象并对其大小进行调整。如果开发者还没有完整阅读过 <code>界面Gui</code> 指南，请先阅读该指南！</p><p>接下来我们将详细展开这些概念并探索如何在 <code>GUI</code> 区域插入图像。这对于在屏幕上展示图标、标识、背景图像以及其他酷炫的设计是一个绝佳途径！</p><h2 id="向一个-gui-中添加图像" tabindex="-1"><a class="header-anchor" href="#向一个-gui-中添加图像" aria-hidden="true">#</a> 向一个 GUI 中添加图像</h2><p>将一张图像添加到 <code>GUI</code> 的过程与添加一个文本标签非常相似。</p><ul><li><p>在场景管理器窗口中找到 <code>StarterGui</code> 对象,并添加一个 <code>2DUIRoot</code> 节点，在 <code>2DUIRoot</code> 节点下插入一个 <code>UIImage</code> 对象。记住，开发者可以通过在搜索字段中输入对象名称的前几个字母来快速查找。</p><p><img src="'+e+'" alt="gui_add_img"></p></li><li><p>这一操作会在游戏视图的左上角添加一个默认的系统图像标签。</p><p><img src="'+d+'" alt="gui_add_img2"></p></li></ul><h2 id="上传一张图像" tabindex="-1"><a class="header-anchor" href="#上传一张图像" aria-hidden="true">#</a> 上传一张图像</h2><p>有了这个空白图像标签，事情就基本上搞定了一半。但我们还需要在屏幕上放置一个真实的图像，现在就开始上传吧。</p><h6 id="_1-在资源商城窗口中选择-按钮-在弹出窗口中点击添加图像-在电脑上找到并选中一张自己想要上传的图像。" tabindex="-1"><a class="header-anchor" href="#_1-在资源商城窗口中选择-按钮-在弹出窗口中点击添加图像-在电脑上找到并选中一张自己想要上传的图像。" aria-hidden="true">#</a> 1. 在资源商城窗口中选择 <code>+</code> 按钮，在弹出窗口中点击添加图像,在电脑上找到并选中一张自己想要上传的图像。</h6><p><img src="'+a+'" alt="store_add"></p><h6 id="_2-在studio弹窗中编辑美术资源上传信息" tabindex="-1"><a class="header-anchor" href="#_2-在studio弹窗中编辑美术资源上传信息" aria-hidden="true">#</a> 2. 在<code>studio</code>弹窗中编辑美术资源上传信息</h6><p><img src="'+i+'" alt="store_add_edit"></p><h6 id="_3-图像上传成功后-可以到资源商城的个人资源目录下查看该图像-鼠标右击该图像资源-在下拉框中选取copyid拿到资源id-后面配置uiimage对象资源路径会用到" tabindex="-1"><a class="header-anchor" href="#_3-图像上传成功后-可以到资源商城的个人资源目录下查看该图像-鼠标右击该图像资源-在下拉框中选取copyid拿到资源id-后面配置uiimage对象资源路径会用到" aria-hidden="true">#</a> 3. 图像上传成功后，可以到资源商城的个人资源目录下查看该图像，鼠标右击该图像资源，在下拉框中选取<code>copyid</code>拿到资源<code>id</code>（后面配置<code>UIImage</code>对象资源路径会用到）</h6><p><img src="'+o+'" alt="store_add_success"></p><h2 id="自定义图像" tabindex="-1"><a class="header-anchor" href="#自定义图像" aria-hidden="true">#</a> 自定义图像</h2><h6 id="_1-在场景管理窗口中选择新创建的-uiimage-对象。" tabindex="-1"><a class="header-anchor" href="#_1-在场景管理窗口中选择新创建的-uiimage-对象。" aria-hidden="true">#</a> 1. 在场景管理窗口中选择新创建的 <code>UIImage</code> 对象。</h6><h6 id="_2-在属性窗口的-图像区域内-点击-icon-属性。修改为资源商城获取的资源id。配置完成后-就能看到-uiimage-对象已更新为所选图像啦" tabindex="-1"><a class="header-anchor" href="#_2-在属性窗口的-图像区域内-点击-icon-属性。修改为资源商城获取的资源id。配置完成后-就能看到-uiimage-对象已更新为所选图像啦" aria-hidden="true">#</a> 2. 在属性窗口的 图像区域内，点击 <code>Icon</code> 属性。修改为资源商城获取的资源<code>id</code>。配置完成后，就能看到 <code>UIImage</code> 对象已更新为所选图像啦！</h6><p><img src="'+c+'" alt="gui_img_icon"></p><blockquote><p>如果想在菜单界面或类似的彩色背景界面上放置图像，开发者可以在图像编辑程序中对图像可见部分周围的像素进行透明化处理，这样背景或后面其他的游戏对象就能显示出来。</p></blockquote><h2 id="更改标签属性" tabindex="-1"><a class="header-anchor" href="#更改标签属性" aria-hidden="true">#</a> 更改标签属性</h2><p>目前图像已经上传并应用于 <code>UIImage</code> 对象，但我们还可以更改一些属性让它看起来更好！</p><p>如果属性窗口中的 数据区域没有展开的话，则将其展开。</p><h6 id="_1-在-image-属性栏下-勾选-isautosize-这样图片就显示自己原有尺寸-size-512-288-。" tabindex="-1"><a class="header-anchor" href="#_1-在-image-属性栏下-勾选-isautosize-这样图片就显示自己原有尺寸-size-512-288-。" aria-hidden="true">#</a> 1. 在 <code>Image</code> 属性栏下，勾选 <code>IsAutoSize</code> ,这样图片就显示自己原有尺寸(<code>size=(512,288)</code>)。</h6><p><img src="'+r+'" alt="img_attr_isSize"></p><h6 id="_2-在-background-属性栏下-展开-fillcolor-alpha-值中输入-100-这样图像标签的背景就会半透明化-图像背景后的所有内容都会半显现出来。" tabindex="-1"><a class="header-anchor" href="#_2-在-background-属性栏下-展开-fillcolor-alpha-值中输入-100-这样图像标签的背景就会半透明化-图像背景后的所有内容都会半显现出来。" aria-hidden="true">#</a> 2. 在 <code>Background</code> 属性栏下，展开 <code>FillColor</code> , <code>Alpha</code> 值中输入 <code>100</code>，这样图像标签的背景就会半透明化，图像背景后的所有内容都会半显现出来。</h6><p><img src="'+t+'" alt="img_attr_bAlpha"></p><h6 id="_3-开发者可以通过-size-属性设置图像标签的大小-isautosize-未勾选才可修改生效-。首先-将-size-→-x-更改为-1024。" tabindex="-1"><a class="header-anchor" href="#_3-开发者可以通过-size-属性设置图像标签的大小-isautosize-未勾选才可修改生效-。首先-将-size-→-x-更改为-1024。" aria-hidden="true">#</a> 3. 开发者可以通过 <code>Size</code> 属性设置图像标签的大小（<code>IsAutoSize</code> 未勾选才可修改生效）。首先，将 <code>Size → X</code> 更改为 <code>1024</code>。</h6><p><img src="'+s+'" alt="img_attr_size_x"></p><h6 id="_4-同样地-将-size-→-y-也更改为-576-以保持图像比例不变。" tabindex="-1"><a class="header-anchor" href="#_4-同样地-将-size-→-y-也更改为-576-以保持图像比例不变。" aria-hidden="true">#</a> 4. 同样地，将 <code>Size → Y</code> 也更改为 <code>576</code>，以保持图像比例不变。</h6><p><img src="'+h+'" alt="img_attr_size_y"></p><h6 id="_5-开发者还可以通过-position-位置-属性来设置图像标签的位置。首先-将-position-位置-→-x-更改为-650。" tabindex="-1"><a class="header-anchor" href="#_5-开发者还可以通过-position-位置-属性来设置图像标签的位置。首先-将-position-位置-→-x-更改为-650。" aria-hidden="true">#</a> 5. 开发者还可以通过 **Position（位置）**属性来设置图像标签的位置。首先，将 <code>Position（位置） → X</code> 更改为 <code>650</code>。</h6><p><img src="'+n+'" alt="img_attr_pos_x"></p><h6 id="_6-再将-position-位置-→-y-更改至-450来使标签略微下移。" tabindex="-1"><a class="header-anchor" href="#_6-再将-position-位置-→-y-更改至-450来使标签略微下移。" aria-hidden="true">#</a> 6. 再将 <code>Position（位置） → Y</code> 更改至 <code>450</code>来使标签略微下移。</h6><p><img src="'+_+'" alt="img_attr_pos_y"></p><h6 id="_7-最后-将-rotation-旋转-值设置为-8-使标签向逆时针方向稍微旋转一些。" tabindex="-1"><a class="header-anchor" href="#_7-最后-将-rotation-旋转-值设置为-8-使标签向逆时针方向稍微旋转一些。" aria-hidden="true">#</a> 7. 最后，将 **Rotation（旋转）**值设置为 -8，使标签向逆时针方向稍微旋转一些。</h6><p><img src="'+p+'" alt="img_attr_rotation"></p><h2 id="在-gui-中进行图像分层" tabindex="-1"><a class="header-anchor" href="#在-gui-中进行图像分层" aria-hidden="true">#</a> 在 GUI 中进行图像分层</h2><p>太棒了！现在开发者已经知道了如何将图像上传至 <code>MiniStudio</code> 并将它们放置到屏幕上。不过当开发者想要添加多个图像时，可能就需要考虑分层了。</p><p>在 <code>GUI</code> 区域进行对象分层就像是在一张纸上贴多个贴纸。如果开发者将一个贴纸贴在另一个贴纸上，那该贴纸将会遮住后面的贴纸。但有时开发者可能会想以不同的方式来排列这些贴纸，比如把后面的贴纸移到最前面。</p><h4 id="一、创建第二个图像标签" tabindex="-1"><a class="header-anchor" href="#一、创建第二个图像标签" aria-hidden="true">#</a> 一、创建第二个图像标签</h4><p>让我们将另一个图像放置到屏幕上以便展示如何进行分层操作。</p><h6 id="_1-向-gui-添加一个新的-uiimage-对象。" tabindex="-1"><a class="header-anchor" href="#_1-向-gui-添加一个新的-uiimage-对象。" aria-hidden="true">#</a> 1. 向 <code>Gui</code> 添加一个新的 <code>UIImage</code> 对象。</h6><h6 id="_2-在管理器窗口中选择新的图像标签。" tabindex="-1"><a class="header-anchor" href="#_2-在管理器窗口中选择新的图像标签。" aria-hidden="true">#</a> 2. 在管理器窗口中选择新的图像标签。</h6><blockquote><p>注意，该图像标签将与开发者创建的第一个图像标签同名 （“<code>UIImage</code>”），因此需在 <code>3D</code> 游戏视图中寻找带有蓝色轮廓的标签，来确保选择无误。</p></blockquote><h6 id="_3-单击标签的-image-属性-并将资源商城的-miniworld-jpg-图像的资源id设置到该属性上-单击资源商城-按钮-选择桌面图像miniworld-jpg上传-上传成功后-从资源商城找到该图像-右键展开下拉框-选择copyid获取资源id-。" tabindex="-1"><a class="header-anchor" href="#_3-单击标签的-image-属性-并将资源商城的-miniworld-jpg-图像的资源id设置到该属性上-单击资源商城-按钮-选择桌面图像miniworld-jpg上传-上传成功后-从资源商城找到该图像-右键展开下拉框-选择copyid获取资源id-。" aria-hidden="true">#</a> 3. 单击标签的 <code>Image</code> 属性，并将资源商城的 <code>miniworld.jpg</code> 图像的资源<code>id</code>设置到该属性上（单击资源商城“<code>+</code>”按钮，选择桌面图像<code>miniworld.jpg</code>上传，上传成功后，从资源商城找到该图像，右键展开下拉框，选择<code>copyid</code>获取资源<code>id</code>）。</h6><p>完成图像上传后，应该看到如下结果：</p><p><img src="'+m+'" alt="img_2img"></p><h4 id="二、更改分层顺序" tabindex="-1"><a class="header-anchor" href="#二、更改分层顺序" aria-hidden="true">#</a> 二、更改分层顺序</h4><p>新的图像标签被放置在第一个图像标签的后面。如果开发者不喜欢这种排列方式，可以通过更改其 <strong>RenderIndex（索引）</strong> 来将此对象移动到前面。</p><h6 id="_1-确保选中带有蓝色轮廓的图像标签。在属性窗口中的-base-基础属性-区域底部找到-renderindex-属性。" tabindex="-1"><a class="header-anchor" href="#_1-确保选中带有蓝色轮廓的图像标签。在属性窗口中的-base-基础属性-区域底部找到-renderindex-属性。" aria-hidden="true">#</a> 1. 确保选中带有蓝色轮廓的图像标签。在属性窗口中的 <strong>Base（基础属性）</strong> 区域底部找到 <code>RenderIndex</code> 属性。</h6><p><img src="'+l+'" alt="img_attr_index0"></p><h6 id="_2-将数值更改为-1。renderindex-值较高的对象将被推至对应值较低的对象之前。" tabindex="-1"><a class="header-anchor" href="#_2-将数值更改为-1。renderindex-值较高的对象将被推至对应值较低的对象之前。" aria-hidden="true">#</a> 2. 将数值更改为 <code>1</code>。<code>RenderIndex</code> 值较高的对象将被推至对应值较低的对象之前。</h6><p><img src="'+g+'" alt="img_attr_index1"></p><p>由于第一个标签（图标）的 <code>RenderIndex</code> 为 <code>0</code>，我们将蓝色轮廓的值设置为 1或者更高值 来将其推到前面。</p><blockquote><p><strong><code>RenderIndex</code> 值最低可设为 <code>0</code>，但最高值没有上限。我们建议每一层以 <code>10</code>递增。例如，将第一个对象的值设置为 <code>10</code>，第二个对象设置为 <code>20</code>，第三个对象设置为 <code>30</code>，依此类推。这样做是因为后期开发者可能需要对自己的布局进行变更并在已有的对象之间新增对象。这样就能将一个新对象的 <code>RenderIndex</code> 值设置为任意两个相邻对象之间的 <code>RenderIndex</code> 值，不用再 重新排列布局中的每个对象。</strong></p></blockquote><p>现在开发者已经明白如何在自己的游戏中创建图像标签、上传自己的图像到 <code>MiniStudio</code>、在 <code>GUI</code> 画布上放置标签以及通过 <code>RenderIndex</code>（索引）对图像标签进行分层了。</p>',56),z=[U];function G(k,y){return x(),I("div",null,z)}const j=u(f,[["render",G],["__file","ImageUsed.html.vue"]]);export{j as default};
