import{_ as d,M as a,p as s,q as n,R as t,t as e,N as i,V as r,a1 as o}from"./framework-204010b2.js";const c={},f=t("h1",{id:"blockplacetype",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#blockplacetype","aria-hidden":"true"},"#"),e(" BlockPlaceType")],-1),x=o('<hr><h2 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h2><table><thead><tr><th style="text-align:left;"><div style="width:200px;">BLOCKPLACETYPE</div></th><th style="text-align:left;"><div style="width:100px;"></div></th><th style="text-align:left;"><div style="width:100px;"></div></th></tr></thead><tbody><tr><td style="text-align:left;">文字水平对齐</td><td style="text-align:left;"></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;"><strong>名称</strong></td><td style="text-align:left;"><strong>值</strong></td><td style="text-align:left;"><strong>描述</strong></td></tr><tr><td style="text-align:left;">COVER</td><td style="text-align:left;">0</td><td style="text-align:left;">覆盖。当前位置有方块，也会将方块替换掉（默认）</td></tr><tr><td style="text-align:left;">AIR</td><td style="text-align:left;">1</td><td style="text-align:left;">空气。当前位置如果为空才会放置方块，若有则不放置</td></tr><tr><td style="text-align:left;">NOT_SAME</td><td style="text-align:left;">2</td><td style="text-align:left;">若相同不覆盖</td></tr><tr><td style="text-align:left;">NOT_SAMEID</td><td style="text-align:left;">3</td><td style="text-align:left;">只当ID不同时覆盖，仅blockdata不同时不会覆盖</td></tr></tbody></table>',3);function y(h,g){const l=a("RouterLink");return s(),n("div",null,[f,t("p",null,[e("枚举所属类："),i(l,{to:"/Api/Class/Build/Block.html"},{default:r(()=>[e("Block")]),_:1})]),x])}const p=d(c,[["render",y],["__file","BlockPlaceType.html.vue"]]);export{p as default};