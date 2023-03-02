import{_ as r,p as t,q as o,Q as d,R as e,t as a,a1 as c}from"./framework-5866ffd3.js";const n={},i=e("h1",{id:"如何使用actor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何使用actor","aria-hidden":"true"},"#"),a(" 如何使用actor")],-1),s=e("h2",{id:"character-玩家角色",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#character-玩家角色","aria-hidden":"true"},"#"),a(" Character - 玩家角色")],-1),h=c('<h2 id="个人理解" tabindex="-1"><a class="header-anchor" href="#个人理解" aria-hidden="true">#</a> 个人理解</h2><p>人物角色(Character)是玩家(Player)的其中一个属性，可以通过Player.Character获得。</p><p>它由很多部分组成，其中包含Humanoid(人形), body parts(身体部件), Accessory(装饰), 脚本等等在游戏中用来模拟人物角色的对象。如下图所示:</p><p>Character的Humanoid可以代表着角色的灵魂，角色的移动速度，弹跳力，生命值等等属性都可以通过Humanoid来修改。很多功能也是通过Humanoid而去实现，比如加载角色动画，处理伤害，监听角色死亡事件等等，具体Humanoid的属性及API可以点击这里查看。</p><p>几个例子：</p><p>Humanoid:TakeDamage(80) -- 受到80点伤害 Humanoid.WalkSpeed = 50 -- 修改玩家速度到50 Humanoid.Died:Connect(onDied) -- 绑定角色死亡事件到onDied回调</p><p>为了更好地理解，可以在游戏中创建一个基础的人物角色来观察，可以通过Plugin里的Build Rig功能制造一个人物角色(Dummy)，可以选择R15或者R6两种类型，区别是身体部件的个数，一个简单由6个部位组成，另一个由15个组成。</p><p>人物角色有各个身体部件，包括Head(头),UpperTorso(上身),LeftUpperArm(坐上胳膊)等等。</p><p>他们都是由关节(joint - 类型Motor6D)链接起来的，如需要查看和编辑关节，可以安装一个叫RigEditor的插件。理解关节对于理解动画制作和角色的个性化制作也是非常有帮助的。</p>',9);function p(m,u){return t(),o("div",null,[i,s,d(` 官方定义

官方API
 `),h])}const l=r(n,[["render",p],["__file","NActorUsed.html.vue"]]);export{l as default};