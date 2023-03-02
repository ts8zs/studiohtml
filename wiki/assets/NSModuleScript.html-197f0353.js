import{_ as d,p as o,q as l,Q as i,R as e,t as c,a1 as a}from"./framework-5866ffd3.js";const t={},r=e("h1",{id:"模块脚本-modulescript",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#模块脚本-modulescript","aria-hidden":"true"},"#"),c(" 模块脚本 - ModuleScript")],-1),s=e("h2",{id:"官方定义",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#官方定义","aria-hidden":"true"},"#"),c(" 官方定义")],-1),n=a('<h2 id="自己的理解" tabindex="-1"><a class="header-anchor" href="#自己的理解" aria-hidden="true">#</a> 自己的理解</h2><p><code>ModuleScript</code> 就是可以被多个脚本同时调用，并可以解决重复逻辑问题的脚本。它也可以被当做配置文件来使用</p><ul><li>例子1： <ul><li>元素 <ul><li><code>T</code>: <code>UITextLabel</code>, 用来显示当前游戏的公告<code>UI</code></li><li>脚本<code>A</code>: 根据游戏目前的进程更新<code>T</code>的显示（比如准备游戏，开始游戏，结束游戏等等）</li><li>脚本<code>B</code>: 根据玩家的行为来更新T的显示（比如踩到了某个陷阱）</li></ul></li><li>目的：根据 <code>A</code> 和 <code>B</code> 的逻辑，对T进行<code>UI</code>上的更新</li></ul></li></ul><p>此时你可以创建一个<code>ModuleScript</code>叫做<code>DisplayManager</code>, 它其中一个功能是负责更新<code>T</code>的内容（<code>Text</code>）。而<code>A</code>和<code>B</code>只需要引用<code>DisplayerManager</code>并调用它的更新<code>UI</code>的方法就可以了。</p><ul><li>例子2： <ul><li>元素 <ul><li>脚本<code>A</code>, 需要引用某一个配置参数<code>X</code></li><li>脚本<code>B</code>, 需要引用某一个配置参数<code>Y</code></li></ul></li><li>目的 ：只需更改一个文件内的参数变量便能改变A和B对应参数的更新，方便统一管理参数的配置</li></ul></li></ul><p>此时<code>A</code>和<code>B</code>都可引用一个叫<code>GameSetting</code>的<code>ModuleScript</code>来获得这些配置参数</p>',6);function u(h,p){return o(),l("div",null,[r,s,i(` API

官方教学 `),n])}const m=d(t,[["render",u],["__file","NSModuleScript.html.vue"]]);export{m as default};
