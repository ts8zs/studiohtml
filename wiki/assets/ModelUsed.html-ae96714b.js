import{_ as o,a as e,b as d,c as r,d as t}from"./model_attr_modelid_auto-00045c15.js";import{_ as a}from"./store_import_obj_place-70859503.js";import{_ as c,p as s,q as i,a1 as l}from"./framework-5866ffd3.js";const n={},p=l('<h1 id="模型的使用" tabindex="-1"><a class="header-anchor" href="#模型的使用" aria-hidden="true">#</a> 模型的使用</h1><p>本文概述了从使用 <strong>Autodesk Maya</strong> 或 <strong>Blender</strong> 等工具创建的模型，向 <code>MiniStudio</code> 上传资源商城的过程。</p><h2 id="上传资源商城" tabindex="-1"><a class="header-anchor" href="#上传资源商城" aria-hidden="true">#</a> 上传资源商城</h2><p>最简便的模型导入方法是使用 资源商城 窗口的 <strong>‘+’</strong>（导入）按钮（<code>View</code>（视图）选项卡 → 资源商城）。</p><p><img src="'+o+'" alt="store_import_obj"></p><p>完成上传后，将会在个人资源文件目录中显示该上传的模型（如图，上传一个 <code>spring</code>（弹簧）的<code>ojb</code>模型）：</p><p><img src="'+e+'" alt="store_import_obj_success"></p><h2 id="模型使用" tabindex="-1"><a class="header-anchor" href="#模型使用" aria-hidden="true">#</a> 模型使用</h2><h5 id="一、直接从资源商城拖出放置模型" tabindex="-1"><a class="header-anchor" href="#一、直接从资源商城拖出放置模型" aria-hidden="true">#</a> 一、直接从资源商城拖出放置模型</h5><p>鼠标左键选中 <strong>资源商城</strong> 的模型（不松开），拖动至地图区域，松开鼠标左键即自动放置到该位置</p><p><img src="'+a+'" alt="store_import_obj_place"></p><h5 id="二、创建model-修改属性配置成相应模型-弹簧模型" tabindex="-1"><a class="header-anchor" href="#二、创建model-修改属性配置成相应模型-弹簧模型" aria-hidden="true">#</a> 二、创建model，修改属性配置成相应模型（弹簧模型）</h5><ol><li>打开 <strong>场景</strong> 管理窗口（<code>View</code>（视图）选项卡 → 场景） ，在 <code>WorkSpace</code> 中创建一个 <code>Model</code></li></ol><p><img src="'+d+'" alt="workspace_add_model"></p><ol start="2"><li><p>在 <strong>场景</strong> 管理窗口中选择新创建的 <code>Model</code> 对象。</p></li><li><p>在 <strong>属性</strong> 窗口的 <code>Model</code> 属性栏，点击 <code>modelid</code> 属性。修改为资源商城获取的资源<code>id</code>。配置完成后，就能看到 <code>Model</code> 对象已更新为想要设置的模型（弹簧）啦！</p><p>可以通过如下两种方式设置<code>modelid</code>:</p><ul><li>手动输入：通过复制资源商城<code>obj</code>资源<code>id</code>，粘贴到<code>modelid</code>属性输入框</li></ul><p><img src="'+r+'" alt="model_attr_modelid_hand"></p><ul><li>自动设置：点击 <code>modelid</code> 属性右侧输入框，点选 <code>“...”</code> 按钮，在下拉框选择设置方式：<strong>上传资源</strong> 或者 <strong>云资源</strong>。</li></ul><p><img src="'+t+'" alt="model_attr_modelid_auto"></p></li></ol>',15),_=[p];function m(h,g){return s(),i("div",null,_)}const x=c(n,[["render",m],["__file","ModelUsed.html.vue"]]);export{x as default};
