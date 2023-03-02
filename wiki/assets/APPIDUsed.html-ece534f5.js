import{_ as e,p as a,q as d,a1 as i}from"./framework-5866ffd3.js";const r={},c=i(`<h1 id="appid的使用" tabindex="-1"><a class="header-anchor" href="#appid的使用" aria-hidden="true">#</a> APPID的使用</h1><pre><code> 当前地图开发者仅能创建单张地图。通过跨地图传送，开发者可以将一系列的地图组合在一起，形成一个更大规模、更具玩法深度的游戏。
</code></pre><ul><li>APPID可以将一系列地图组织在一起，实现更大规模的游戏体验。</li><li>一个应用下的数据是互通的，包含玩家数据、地图数据、键值存储、排行榜。</li><li>一个地图仅允许被一个APPID关联</li></ul><h2 id="如何创建appid" tabindex="-1"><a class="header-anchor" href="#如何创建appid" aria-hidden="true">#</a> 如何创建APPID</h2><pre><code> 在文件-&gt;设置-&gt;APPID下可以多APPID进行管理。开发者可以创建APPID，绑定地图至指定APPID以及删除APPID

 [appid]()

 同一个APPID下的地图，使用[cloudservice]()上传的数据都会共通。意味着开发者可以在A地图上传数据，在B地图使用。
</code></pre>`,5),t=[c];function n(P,o){return a(),d("div",null,t)}const l=e(r,[["render",n],["__file","APPIDUsed.html.vue"]]);export{l as default};
