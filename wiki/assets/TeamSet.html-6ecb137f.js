import{_ as s}from"./spawnlocation_team_set-edfd84ec.js";import{_ as r,M as i,p as n,q as l,R as e,t as o,N as c,V as a,a1 as t}from"./framework-5866ffd3.js";const h={},m=e("h1",{id:"队伍设置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#队伍设置","aria-hidden":"true"},"#"),o(" 队伍设置")],-1),_=e("h2",{id:"实现-team-团队",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#实现-team-团队","aria-hidden":"true"},"#"),o(" 实现 Team（团队）")],-1),p=e("p",null,[e("code",null,"Teams"),o(" 服务不但可以用来添加队伍功能，还与玩家的角色生成密切相关。队伍名称、队伍颜色以及队伍中所有玩家等信息都可以在游戏中的 排行榜上看到。")],-1),u={id:"添加-teams-服务-敬请期待",tabindex:"-1"},T=e("a",{class:"header-anchor",href:"#添加-teams-服务-敬请期待","aria-hidden":"true"},"#",-1),f=t("<p><code>Teams</code> 服务并未默认包含至游戏中，需要开发者自行添加：</p><p>选中 <code>Model</code>（模型）选项卡，单击 <code>Advanced</code>（高级）区域中的 <code>Service</code>（服务）按钮（）。 选择 <code>Teams</code>（团队）后单击 <code>Insert</code>（插入）。完成操作后，管理器会获得一个名为 <code>Teams</code> 的新对象。</p>",2),b={id:"添加新队伍-敬请期待",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#添加新队伍-敬请期待","aria-hidden":"true"},"#",-1),g=t('<p>添加 <code>Teams</code> 服务后就可以创建新队伍了。将鼠标指针悬停于 <code>Teams</code> 对象上，单击 图标后选择 <code>Team</code>（队伍）。</p><p>添加队伍之后：</p><ol><li><p>将队伍的 <code>Name</code>（名称）改成一个合适的值。</p></li><li><p>给队伍分配唯一的 <code>TeamColor</code>，该设置可以和 <code>SpawnLocation</code> 对象一起使用。</p></li></ol><blockquote><p>队伍 <code>Name</code>（名称）和选定的 <code>TeamColor</code>（队伍颜色）都会在游戏的排行榜中出现，因此需要对其进行合理设置。在此示例中，<strong>蓝队</strong> 就被分配了极为适合队名的颜色：<code>Really blue</code>（深蓝色）。</p></blockquote><h5 id="配置生成点" tabindex="-1"><a class="header-anchor" href="#配置生成点" aria-hidden="true">#</a> 配置生成点</h5><p>在默认情况下，生成点为 <strong>中立</strong>，允许任何玩家在此处生成。但在大多数游戏里，各个队伍都拥有独立的<strong>领地</strong> 与生成点，或者被类似队伍专用门的物理屏障所分隔。</p><p>若希望为特定队伍锁定专用生成点，请遵循以下步骤：</p><ol><li>选中 <code>SpawnLocation</code> 对象。</li><li>在 <code>Properties</code>（属性）窗口中禁用其 <code>Neutral</code>（中立）属性。</li><li>将其 <code>TeamColor</code> 属性设置为你所创建队伍的对应颜色。</li></ol><p><img src="'+s+'" alt="spawnlocation_team_set"></p><blockquote><p>需要注意的是，生成点的 <code>TeamColor</code> 属性并不代表对象的外观颜色，与队伍并无关联。</p></blockquote><h5 id="分配玩家" tabindex="-1"><a class="header-anchor" href="#分配玩家" aria-hidden="true">#</a> 分配玩家</h5><p>在默认情况下，<code>MiniStudio</code> 会将新玩家自动分配到目前人数最少的队伍中。若希望将玩家分配至你所配置的特定队伍与生成点，请遵循以下步骤：</p><ol><li>在 <code>Teams</code> 服务中选择每个 <code>Team</code> 对象并禁用其 <code>AutoAssignable</code> 属性。</li><li>要将玩家分配至指定团队，需要将该玩家的 <code>Player.Team</code> 属性改为队伍的名称，例如 <code>Teams[&quot;Blue Team&quot;]</code>。若想达成该目的，有几种不同的方法。举例来说，可以如下方 <code>Team Picker</code>（队伍选择器）示例所示，使用选择队伍的 <code>GUI</code>。同时也可以创建含有多个传送器的大厅，将玩家分配至不同队伍。</li></ol>',13);function N(k,q){const d=i("font");return n(),l("div",null,[m,_,p,e("h5",u,[T,o(" 添加 Teams 服务 "),c(d,{color:"red"},{default:a(()=>[o("（敬请期待）")]),_:1})]),f,e("h5",b,[x,o(" 添加新队伍 "),c(d,{color:"red"},{default:a(()=>[o("（敬请期待）")]),_:1})]),g])}const v=r(h,[["render",N],["__file","TeamSet.html.vue"]]);export{v as default};