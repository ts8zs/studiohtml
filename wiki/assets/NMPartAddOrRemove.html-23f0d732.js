import{_ as n,a as s,b as a,c as e,d as p,e as t}from"./bind_script_head_106-07ec4b3f.js";import{_ as o,p as c,q as l,a1 as i}from"./framework-5866ffd3.js";const u={},r=i('<h1 id="如何给骨骼添加部件或移除指定部件" tabindex="-1"><a class="header-anchor" href="#如何给骨骼添加部件或移除指定部件" aria-hidden="true">#</a> 如何给骨骼添加部件或移除指定部件</h1><h2 id="给骨骼添加部件" tabindex="-1"><a class="header-anchor" href="#给骨骼添加部件" aria-hidden="true">#</a> 给骨骼添加部件</h2><p>开发者可以通过给节点添加绑点，绑定模型来实现给骨骼添加部件的效果。</p><h5 id="一、开发者可以通过-studio-直接添加绑点节点-然后修改绑点的骨骼属性的-modelid-来实现" tabindex="-1"><a class="header-anchor" href="#一、开发者可以通过-studio-直接添加绑点节点-然后修改绑点的骨骼属性的-modelid-来实现" aria-hidden="true">#</a> 一、开发者可以通过 studio 直接添加绑点节点，然后修改绑点的骨骼属性的 modelid 来实现</h5><ol><li><p>在 场景管理器 窗口中，创建一个 <code>Model</code> 对象。</p></li><li><p>将鼠标悬停在该对象上并单击圆圈 <code>⊕</code> 按钮。</p></li><li><p>在弹出菜单中找到 <code>BindAttachment</code> 并选择它，这将在这个<code>Model</code>对象上创建一个绑点对象。</p><p><img src="'+n+'" alt="workspace_add_bind"></p></li><li><p>选中<code>BindAttachment</code>对象，重命名为<code>RightHand</code></p></li><li><p>修改<code>RightHand</code>的 <code>BoneName</code> 属性和 <code>ModelId</code> 属性</p><ul><li><p>BoneName 属性设置为 101（系统模型默认值指向右手，也可以自定义）</p><ul><li><p>BoneName = 101 (右手)</p><p><img src="'+s+'" alt="bind_bone_name_101"></p></li><li><p>BoneName = 106（头部）</p><p><img src="'+a+'" alt="bind_bone_name_106"></p></li></ul></li><li><p>ModelId 属性修改为手持模型（独眼萌宠）</p><p><img src="'+e+`" alt="bind_bone_modelid"></p></li></ul></li></ol><h5 id="二、开发者也可以通过代码创建模型对象的绑点对象-通过修改绑点对象的子节点模型来实现" tabindex="-1"><a class="header-anchor" href="#二、开发者也可以通过代码创建模型对象的绑点对象-通过修改绑点对象的子节点模型来实现" aria-hidden="true">#</a> 二、开发者也可以通过代码创建模型对象的绑点对象，通过修改绑点对象的子节点模型来实现</h5><p>给玩家添加部件，代码示例</p><ol><li><p>获取当前玩家的 Character</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> myCharacter <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;Players&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>LocalPlayer<span class="token punctuation">.</span>Character<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>创建Actor模型，指定参数（模型id，父节点）</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">function</span> <span class="token function">CreatedActor</span><span class="token punctuation">(</span>modeid<span class="token punctuation">,</span>parent<span class="token punctuation">)</span>
    <span class="token keyword">local</span> actor <span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;Actor&#39;</span><span class="token punctuation">,</span> parent<span class="token punctuation">)</span>
    actor<span class="token punctuation">.</span>ModelId <span class="token operator">=</span> modeid<span class="token punctuation">;</span>
	
    <span class="token keyword">local</span> pos <span class="token operator">=</span> myCharacter<span class="token punctuation">.</span>Position
    <span class="token keyword">local</span>  offsetX <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
    <span class="token keyword">local</span>  offsetZ <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2000</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span>
    actor<span class="token punctuation">.</span>Position <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span>pos<span class="token punctuation">.</span>x <span class="token operator">+</span> offsetX<span class="token punctuation">,</span> pos<span class="token punctuation">.</span>y<span class="token operator">+</span><span class="token number">200</span><span class="token punctuation">,</span> pos<span class="token punctuation">.</span>z <span class="token operator">+</span> offsetZ<span class="token punctuation">)</span><span class="token punctuation">;</span>
    actor<span class="token punctuation">.</span>Health <span class="token operator">=</span> <span class="token number">100</span>
    actor<span class="token punctuation">.</span>MaxHealth <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">;</span>
    actor<span class="token punctuation">.</span>Movespeed <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> actor<span class="token punctuation">;</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>给玩家绑定模型部件，指定参数（模型id，骨骼key）</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">function</span> <span class="token function">ActorBindBone</span><span class="token punctuation">(</span>modeid<span class="token punctuation">,</span>boneName<span class="token punctuation">)</span>
    <span class="token comment">--给模型设置绑点</span>
    <span class="token keyword">local</span> attachment<span class="token operator">=</span> SandboxNode<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&#39;BindAttachment&#39;</span><span class="token punctuation">,</span> myCharacter<span class="token punctuation">)</span>
    attachment<span class="token punctuation">.</span>BoneName <span class="token operator">=</span> boneName
    attachment<span class="token punctuation">.</span>Name <span class="token operator">=</span> <span class="token string">&quot;rightHand&quot;</span>
    attachment<span class="token punctuation">.</span>LocalPosition <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    attachment<span class="token punctuation">.</span>LocalScale <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">local</span> ModelId <span class="token operator">=</span> string<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;sandboxSysId://entity/%d/body.omod&quot;</span><span class="token punctuation">,</span>modeid<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">local</span> actor <span class="token operator">=</span> <span class="token function">CreatedActor</span><span class="token punctuation">(</span>ModelId<span class="token punctuation">,</span>attachment<span class="token punctuation">)</span>
    actor<span class="token punctuation">.</span>LocalEuler <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
    actor<span class="token punctuation">.</span>LocalPosition <span class="token operator">=</span> Vector3<span class="token punctuation">.</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">80.00</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">120.00</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>运行结果</p><ul><li><p>BoneName = 101 (右手)</p><p><img src="`+p+'" alt="bind_script_hand_101"></p></li><li><p>BoneName = 106（头部）</p><p><img src="'+t+`" alt="bind_script_head_106"></p></li></ul></li></ol><h2 id="移除指定部件" tabindex="-1"><a class="header-anchor" href="#移除指定部件" aria-hidden="true">#</a> 移除指定部件</h2><p>移除对象可以通过设置它的<code>Parent=nil</code>来移除。如果这个对象具有多个子部件，要移除其中某一个，可以通过获取该模型对象的所有子节点（包括绑定的子节点），遍历该节点（创建时定义的绑点名）找到需要移除的指定节点。</p><p>代码示例：移除绑定的<code>rightHand</code>绑点对象</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">function</span> <span class="token function">RemoveBone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> i<span class="token punctuation">,</span> v <span class="token keyword">in</span> <span class="token function">ipairs</span><span class="token punctuation">(</span>myCharacter<span class="token punctuation">.</span>Children<span class="token punctuation">)</span> <span class="token keyword">do</span>
       <span class="token keyword">if</span> v<span class="token punctuation">.</span>Name <span class="token operator">==</span> <span class="token string">&quot;rightHand&quot;</span> <span class="token keyword">then</span>
          v<span class="token punctuation">.</span>Parent <span class="token operator">=</span> <span class="token keyword">nil</span>
       <span class="token keyword">end</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>写一个键盘事件用来测试移除</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> inputService <span class="token operator">=</span> game<span class="token punctuation">:</span><span class="token function">GetService</span><span class="token punctuation">(</span><span class="token string">&quot;UserInputService&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">UserInputBegan</span><span class="token punctuation">(</span>inputObj<span class="token punctuation">)</span>
    <span class="token keyword">if</span> inputObj<span class="token punctuation">.</span>UserInputType <span class="token operator">==</span> Enum<span class="token punctuation">.</span>UserInputType<span class="token punctuation">.</span>Keyboard<span class="token punctuation">.</span>Value <span class="token keyword">then</span>
        <span class="token keyword">local</span> nKey <span class="token operator">=</span> inputObj<span class="token punctuation">.</span>KeyCode
        <span class="token keyword">if</span><span class="token punctuation">(</span>nKey<span class="token operator">==</span><span class="token number">103</span><span class="token punctuation">)</span><span class="token keyword">then</span> <span class="token comment">--G</span>
            <span class="token function">RemoveBone</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">end</span>
    <span class="token keyword">end</span>
<span class="token keyword">end</span>

inputService<span class="token punctuation">.</span>InputBegan<span class="token punctuation">:</span><span class="token function">Connect</span><span class="token punctuation">(</span> UserInputBegan <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),d=[r];function k(m,v){return c(),l("div",null,d)}const f=o(u,[["render",k],["__file","NMPartAddOrRemove.html.vue"]]);export{f as default};