import{_ as a,a as e,b as r,c as i,d as t,e as o,f as s,g as n}from"./lua_view_debug_stack-4918f490.js";import{_ as d,p as c,q as l,a1 as p}from"./framework-5866ffd3.js";const _={},g=p('<h1 id="脚本调试" tabindex="-1"><a class="header-anchor" href="#脚本调试" aria-hidden="true">#</a> 脚本调试</h1><p>当完成一款游戏的开发或者某个模块，发布之前，测试游戏变得十分重要，在迷你世界当中，游戏有不同的运行环境，所以需要在各种测试模式下对游戏进行测试变得至关重要。</p><p><strong>Lua调试器</strong> 就是提供给开发者对 <code>Lua</code> 代码进行调试的一种工具。 <code>MiniStudio</code> 默认显示代码调试视口，如果想要关闭，可以通过 <code>视图-&gt;Lua调试</code> 进行关闭。</p><p><img src="'+a+'" alt="view_lua"></p><h2 id="调试器能做什么" tabindex="-1"><a class="header-anchor" href="#调试器能做什么" aria-hidden="true">#</a> 调试器能做什么</h2><p><strong>Lua调试器</strong> 是帮助开发者检查代码，确保代码正确性的工具。一般情况下，开发者通过 <code>print()</code> 将当前代码运行情况输出至 <strong>Lua日志窗口</strong>。</p><p><img src="'+e+'" alt="lua_log_view"></p><p>但是通过 <strong>Lua调试器</strong> ，玩家可以不用添加代码的情况下使用断点对脚本中的代码进行查看。当脚本运行至断点处时会自动停止，此时开发者便可检查当前状态下变量的值以及游戏运行状态。</p><p><img src="'+r+'" alt="lua_view"></p><h2 id="断点调试" tabindex="-1"><a class="header-anchor" href="#断点调试" aria-hidden="true">#</a> 断点调试</h2><p>断点是脚本的运行暂停点，当<code>Lua</code>脚本运行到断点时，运行中的游戏会暂停。开发者可以在断点处查看变量和堆栈。</p><h4 id="一、断点设置" tabindex="-1"><a class="header-anchor" href="#一、断点设置" aria-hidden="true">#</a> 一、断点设置</h4><ol><li><p>在<code>Workspace</code>下双击<code>Script</code>文件，打开脚本编辑器，在需要调试的代码行位置添加断点。（点击需要暂停的的执行代码左侧，创建断点成功后会显示红色球形图标）</p><p><img src="'+i+'" alt="lua_breakpoint"></p></li><li><p>运行游戏，脚本运行到断点的地方，游戏被暂停，此时开发者可以在 <strong>Lua调试界面</strong> 的 <code>BreakPoint</code> 页签内查看断点信息</p><p><img src="'+t+'" alt="lua_breakpoint_view"></p><ul><li><strong>Line:</strong> 断点所在脚本的行数</li><li><strong>Script：</strong> 当前脚本所在的断点</li><li><strong>IsActive：</strong> 断点是否处于活跃状态，点击可切换状态</li><li><strong>条件:</strong> 设置断点条件，当检测的变量符合条件才会进入断点</li></ul></li></ol><h4 id="二、运行调测" tabindex="-1"><a class="header-anchor" href="#二、运行调测" aria-hidden="true">#</a> 二、运行调测</h4><p>当脚本在一个在一个断点处暂停时，我们除了可以查看当前断点信息外，还可以控制接下来的运行方式</p><p><img src="'+o+'" alt="lua_menu_operation"></p><p>从左至右以此为：</p><ol><li><strong>禁用所有断点：</strong> 点击后所有断点将不会工作，再次点击将恢复</li><li><strong>单步运行：</strong> 单步运行按钮可将调试器移动到当前行上的函数中。如果当前行上没有函数，调试器将移动到下一行。</li><li><strong>逐过程：</strong> 逐过程按钮可将调试器移动到下一行代码，而不是移动到函数中。</li><li><strong>单步跳出：</strong> 单步跳出按钮可将调试器移出当前函数并移动到起始函数调用的下一行代码。如果当前行不在函数内，此按钮将移动到下一行。</li><li><strong>继续运行：</strong> 游戏继续执行，直到下一个断点处。</li></ol><h4 id="三、断点时变量查看" tabindex="-1"><a class="header-anchor" href="#三、断点时变量查看" aria-hidden="true">#</a> 三、断点时变量查看</h4><p>处于断点时，开发者可以对变量进行监控，只需要将该变量名称填入监视列表。</p><p><img src="'+s+'" alt="lua_view_debug_value"></p><h4 id="四、堆栈的查看" tabindex="-1"><a class="header-anchor" href="#四、堆栈的查看" aria-hidden="true">#</a> 四、堆栈的查看</h4><p><code>视图-&gt;Lua调试-&gt; CALLSTACK</code></p><p>查看当前运行代码的确切位置。如果当前代码行存在于从其他函数调用的某个函数中，堆栈将显示函数的调用顺序以及进行调用的行号。</p><p><img src="'+n+'" alt="lua_view_debug_stack"></p>',25),h=[g];function u(m,f){return c(),l("div",null,h)}const v=d(_,[["render",u],["__file","LuaDebugger.html.vue"]]);export{v as default};