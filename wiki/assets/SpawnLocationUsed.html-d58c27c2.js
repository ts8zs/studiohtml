import{_ as i}from"./spawnlocation_visible-0f0ad374.js";import{_ as r}from"./spawnlocation_team_set-edfd84ec.js";import{_ as s,M as n,p as l,q as h,R as o,t as e,N as a,V as t,a1 as d}from"./framework-5866ffd3.js";const p={},m=d('<h1 id="重生点的使用" tabindex="-1"><a class="header-anchor" href="#重生点的使用" aria-hidden="true">#</a> 重生点的使用</h1><p>在 <code>MiniStudio</code> 中，<code>SpawnLocation</code> 对象用于确定玩家角色开始游戏时或被击败后重生时出现的地点。同时也可以用于将隶属不同队伍的玩家角色生成在特定的不同位置。</p><h2 id="插入生成点" tabindex="-1"><a class="header-anchor" href="#插入生成点" aria-hidden="true">#</a> 插入生成点</h2><p>若希望在 <code>Studio</code> 中插入生成点，请在 <code>workspace</code> 下点击 <code>“+”</code> 创建 <code>SpawnLocation</code> 节点</p><h6 id="隐藏生成地块" tabindex="-1"><a class="header-anchor" href="#隐藏生成地块" aria-hidden="true">#</a> 隐藏生成地块</h6><blockquote><p>如有需求，开发者可以按照以下方式 <strong>隐藏</strong> <code>SpawnLocation</code> 对象： 将 <code>SpawnLocation</code> 对象的 <code>Visible</code> 属性取消勾选，让其不可见。</p></blockquote><p><img src="'+i+'" alt="spawnlocation_visible"></p><h2 id="实现-team-团队" tabindex="-1"><a class="header-anchor" href="#实现-team-团队" aria-hidden="true">#</a> 实现 Team（团队）</h2><p><code>Teams</code> 服务不但可以用来添加队伍功能，还与玩家的角色生成密切相关。队伍名称、队伍颜色以及队伍中所有玩家等信息都可以在游戏中的 排行榜上看到。</p>',9),_={id:"添加-teams-服务-敬请期待",tabindex:"-1"},u=o("a",{class:"header-anchor",href:"#添加-teams-服务-敬请期待","aria-hidden":"true"},"#",-1),f=d("<p><code>Teams</code> 服务并未默认包含至游戏中，需要开发者自行添加：</p><p>选中 <code>Model</code>（模型）选项卡，单击 <code>Advanced</code>（高级）区域中的 <code>Service</code>（服务）按钮（）。 选择 <code>Teams</code>（团队）后单击 <code>Insert</code>（插入）。完成操作后，管理器会获得一个名为 <code>Teams</code> 的新对象。</p>",2),T={id:"添加新队伍-敬请期待",tabindex:"-1"},b=o("a",{class:"header-anchor",href:"#添加新队伍-敬请期待","aria-hidden":"true"},"#",-1),x=d('<p>添加 <code>Teams</code> 服务后就可以创建新队伍了。将鼠标指针悬停于 <code>Teams</code> 对象上，单击 图标后选择 <code>Team</code>（队伍）。</p><p>添加队伍之后：</p><ol><li><p>将队伍的 <code>Name</code>（名称）改成一个合适的值。</p></li><li><p>给队伍分配唯一的 <code>TeamColor</code>，该设置可以和 <code>SpawnLocation</code> 对象一起使用。</p></li></ol><blockquote><p>队伍 <code>Name</code>（名称）和选定的 <code>TeamColor</code>（队伍颜色）都会在游戏的排行榜中出现，因此需要对其进行合理设置。在此示例中，<strong>蓝队</strong> 就被分配了极为适合队名的颜色：<code>Really blue</code>（深蓝色）。</p></blockquote><h5 id="配置生成点" tabindex="-1"><a class="header-anchor" href="#配置生成点" aria-hidden="true">#</a> 配置生成点</h5><p>在默认情况下，生成点为 <strong>中立</strong>，允许任何玩家在此处生成。但在大多数游戏里，各个队伍都拥有独立的<strong>领地</strong> 与生成点，或者被类似队伍专用门的物理屏障所分隔。</p><p>若希望为特定队伍锁定专用生成点，请遵循以下步骤：</p><ol><li>选中 <code>SpawnLocation</code> 对象。</li><li>在 <code>Properties</code>（属性）窗口中禁用其 <code>Neutral</code>（中立）属性。</li><li>将其 <code>TeamColor</code> 属性设置为你所创建队伍的对应颜色。</li></ol><p><img src="'+r+'" alt="spawnlocation_team_set"></p><blockquote><p>需要注意的是，生成点的 <code>TeamColor</code> 属性并不代表对象的外观颜色，与队伍并无关联。</p></blockquote><h5 id="分配玩家" tabindex="-1"><a class="header-anchor" href="#分配玩家" aria-hidden="true">#</a> 分配玩家</h5><p>在默认情况下，<code>MiniStudio</code> 会将新玩家自动分配到目前人数最少的队伍中。若希望将玩家分配至你所配置的特定队伍与生成点，请遵循以下步骤：</p><ol><li>在 <code>Teams</code> 服务中选择每个 <code>Team</code> 对象并禁用其 <code>AutoAssignable</code> 属性。</li><li>要将玩家分配至指定团队，需要将该玩家的 <code>Player.Team</code> 属性改为队伍的名称，例如 <code>Teams[&quot;Blue Team&quot;]</code>。若想达成该目的，有几种不同的方法。举例来说，可以如下方 <code>Team Picker</code>（队伍选择器）示例所示，使用选择队伍的 <code>GUI</code>。同时也可以创建含有多个传送器的大厅，将玩家分配至不同队伍。</li></ol>',13);function S(w,g){const c=n("font");return l(),h("div",null,[m,o("h5",_,[u,e(" 添加 Teams 服务 "),a(c,{color:"red"},{default:t(()=>[e("（敬请期待）")]),_:1})]),f,o("h5",T,[b,e(" 添加新队伍 "),a(c,{color:"red"},{default:t(()=>[e("（敬请期待）")]),_:1})]),x])}const N=s(p,[["render",S],["__file","SpawnLocationUsed.html.vue"]]);export{N as default};
