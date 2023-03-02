import{_ as e,p as a,q as r,a1 as d}from"./framework-5866ffd3.js";const n={},c=d(`<h1 id="物理的使用" tabindex="-1"><a class="header-anchor" href="#物理的使用" aria-hidden="true">#</a> 物理的使用</h1><h2 id="物理" tabindex="-1"><a class="header-anchor" href="#物理" aria-hidden="true">#</a> 物理</h2><pre><code> 在新引擎的支持下，迷你世界可以使用物理效果，让游戏世界更加真实。包括但不限于重力，质量，速度等。除了基础的物理外，还可以设置一些物理约束来增加游戏世界的物理效果，例如弹簧，铰链。
</code></pre><h2 id="物理属性" tabindex="-1"><a class="header-anchor" href="#物理属性" aria-hidden="true">#</a> 物理属性</h2><pre><code> 玩家可以通过选中场景模型，修改对应的物理属性。
[Physicsproperty]()

 玩家可以通过属性面板设置模型的质量、摩擦力等，也可通过代码在其运行的进行动态的修改。注意如果想要模型响应这些物理属性，Anchored属性必须取消勾选。
</code></pre><h2 id="物理碰撞" tabindex="-1"><a class="header-anchor" href="#物理碰撞" aria-hidden="true">#</a> 物理碰撞</h2><pre><code> 除了模型的基础物理，玩家还可以通过设置模型包围盒设置模型的物理碰撞。
 [Collision]()
 在这里可以设置模型是否可以产生碰撞，以及设置碰撞组。
</code></pre>`,7),h=[c];function s(i,o){return a(),r("div",null,h)}const _=e(n,[["render",s],["__file","PhysicsUsed.html.vue"]]);export{_ as default};
