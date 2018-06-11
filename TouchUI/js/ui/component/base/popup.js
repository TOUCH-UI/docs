/*!
 * popup component
 * http://www.wadecn.com/
 * auth:xiedx@asiainfo.com
 * Copyright 2015, WADE
 */
!function(e,t,i){"use strict";function n(e){return""===r?e:(e=e.charAt(0).toUpperCase()+e.substr(1),r+e)}if(e&&"undefined"==typeof e.Popup){var s=(Math,i.createElement("div").style),r=function(){for(var e,t="t,webkitT,MozT,msT,OT".split(","),i=0,n=t.length;i<n;i++)if(e=t[i]+"ransform",e in s)return t[i].substr(0,t[i].length-1);return!1}(),l=r?"-"+r.toLowerCase()+"-":"",a=n("transform"),o=n("transitionProperty"),p=n("transitionDuration"),u=(n("transformOrigin"),n("transitionTimingFunction")),d=(n("transitionDelay"),n("perspective")in s),f=("undefined"!=typeof e.hasTouch?e.hasTouch:"ontouchstart"in t,r!==!1),c=(n("transition")in s,function(){if(r===!1)return!1;var e={"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"};return e[r]}()),v=d?" translateZ(0)":"";s[a]=v;var m=Array.prototype.push,y=Array.prototype.splice,h=e.os.phone||!0===e.ratioPhone,b=8,w=57.14,g=Math.round(w/2*100)/100,x=/^[1-9]{1}$/,_=/^[1-9]{1}$/,T=[],N=function(t,n){var s=this;s.el=t&&1==t.nodeType?t:i.getElementById(t),s.el&&s.el.nodeType&&(s.id=e.attr(s.el,"id"))&&(n&&e.isObject(n)&&e.extend(s,n),e.attr(s.el,"x-wade-uicomponent")||e.attr(s.el,"x-wade-uicomponent","popup"),s._init(),s.constructor.call(s))};N.prototype=e.extend(new e.UIComponent,{handleEvent:function(e){var t=this;switch(e.type){case c:t._transitionEnd(e)}},show:function(i,n){var s=this;if(!0!==s.visible||n){if(!0!==s.visible&&!0!==s.mask&&!0!==s.overlap){var r;e.each(T,function(e,i){i!=s.id&&(r=t[i],1==r.visible&&r.mask==s.mask&&r.hide())})}var p=e("div[visible-snapshot=true]",s.el);p.attr("visible",!0),p.attr("visible-snapshot",!1),f?p.css("visibility","visible"):p.css("display",""),p=null,!1!==n&&(s.reset(),s._showItem(1,i),s._itemPath=[i]),s.el.style.zIndex=e.zIndexer.get(s.id),s.el.style.visibility="visible",f&&setTimeout(function(){s.el.style[o]=l+"transform",s.el.style[a]="translate(0,0)"+v},1),s.visible=!0,!0===s.mask}},hide:function(){var t=this;if(!1!==t.visible&&!1!==e.event.trigger("hideAction",null,t.el)){if(e.zIndexer.remove(t.id),f)setTimeout(function(){t.el.style[o]=l+"transform",t.el.style[a]="translate(100%,0)"+v},1);else{t.el.style.visibility="hidden";var i=e("div[visible=true]",t.el);i.attr("visible",!1),i.attr("visible-snapshot",!0),i.css("display","none"),i=null}t.visible=!1}},reset:function(){var e=this,t=!0===e.visible?l+"transform":"none";e.isFull||e.isWide?f?(e.wrapper.style[o]=t,e.wrapper.style[a]="translate(0,0)"+v):e.wrapper.style.marginLeft="":e.isHalf?f?e.isHalfBg?(e.box.style[o]=l+"transform",e.box.style[a]="translate(0,0)"+v):(e.el.style[o]=l+"transform",e.el.style[a]="translate(0,0)"+v):(e.el.style.left="",e.wrapper.style.marginLeft=""):h?f?(e.wrapper.style[o]=t,e.wrapper.style[a]="translate(0,0)"+v):e.wrapper.style.marginLeft="":f?(e.box.style[o]=t,e.box.style[a]="translate(0,0) "+v,e.wrapper.style[o]=l+"transform",e.wrapper.style[a]="translate(0,0)"+v):(e.box.style.left=g+"em",e.wrapper.style.marginLeft=""),e.level=1},forward:function(t,i){var n=this,s=null,r=null;t&&t.nodeType&&(s=B(t),r=parseInt(e.attr(s,"level")));var p=null,u=null;if(s)for(var d=0,c=s.nextSibling;d<20&&c;){if(c.nodeType&&e.nodeName(c,"div")&&(" "+c.className+" ").indexOf(" c_popupGroup ")>-1){p=c,u=parseInt(e.attr(c,"level"));break}c=c.nextSibling,d++}else u=n.level+1,p=n._findGroup(u);if(!(u>b)&&p){if(void 0==i&&(i=1),n._showItem(p,i),n.isFull||n.isWide)f?setTimeout(function(){n.wrapper.style[o]=l+"transform",n.wrapper.style[a]="translate(-"+12.5*(u-1)+"%,0)"+v},1):n.wrapper.style.marginLeft="-"+100*(u-1)+"%";else if(n.isHalf)f?h?setTimeout(function(){n.wrapper.style[o]=l+"transform",n.wrapper.style[a]="translate(-"+12.5*(u-1)+"%,0)"+v},1):(n.isHalfBg?2==u&&setTimeout(function(){n.box.style[o]=l+"transform",n.box.style[a]="translate(-50%,0)"+v},1):2==u&&setTimeout(function(){n.el.style[o]=l+"transform",n.el.style[a]="translate(-50%,0)"+v},1),u>=3&&setTimeout(function(){n.wrapper.style[o]=l+"transform",n.wrapper.style[a]="translate(-"+12.5*(u-2)+"%,0)"+v},1)):(n.isHalfBg?2==u&&(n.box.style.left="0"):2==u&&(n.el.style.left="0"),u>=3&&(n.wrapper.style.marginLeft="-"+50*(u-2)+"%"));else{h||2!=u||(f?setTimeout(function(){n.box.style[o]=l+"transform",n.box.style[a]="translate(-"+g+"em,0)"+v},1):n.box.style.left="0");var m=h?2:3;u>=m&&(f?setTimeout(function(){n.wrapper.style[o]=l+"transform",n.wrapper.style[a]="translate(-"+g*(u-m+1)+"em,0)"+v},1):n.wrapper.style.marginLeft="-"+g*(u-m+1)+"em")}n.level=u,n._itemPath[n.level-1]=i}},back:function(t,i,n,s){var r=this;e.isObject(i)&&(s=n,n=i,i=null);var p=r.level-1;if(p<1)return void r.hide();var u=null,d=null;if(t&&t.nodeType&&(u=B(t),d=parseInt(e.attr(u,"level"))),u){for(var i,t,c,m=u.childNodes,b=0;b<m.length;)t=m[b],1==t.nodeType&&e.nodeName(t,"div")&&(c=t.className?t.className:"",(" "+c+" ").indexOf(" c_popupItem ")>-1&&(" "+c+" ").indexOf(" c_popupItem-show ")>-1&&(t.className=e.trim((" "+c+" ").replace(/ c_popupItem-show /g," ")))),b++;t=c=null,i=m=null}var w=r._findGroup(p);if(w){i||(i=r._itemPath[p-1]);var x=r._showItem(w,i);if(r.isFull||r.isWide)f?setTimeout(function(){r.wrapper.style[o]=l+"transform",r.wrapper.style[a]="translate(-"+12.5*(p-1)+"%,0)"+v},1):r.wrapper.style.marginLeft="-"+100*(p-1)+"%";else if(r.isHalf)f?h?setTimeout(function(){r.wrapper.style[o]=l+"transform",r.wrapper.style[a]="translate(-"+12.5*(p-1)+"%,0)"+v},1):1==p?r.isHalfBg?setTimeout(function(){r.box.style[o]=l+"transform",r.box.style[a]="translate(0,0)"+v},1):setTimeout(function(){r.el.style[o]=l+"transform",r.el.style[a]="translate(0,0)"+v},1):p>=2&&setTimeout(function(){r.wrapper.style[o]=l+"transform",r.wrapper.style[a]="translate(-"+12.5*(p-2)+"%,0)"+v},1):1==p?r.isHalfBg?r.box.style.left="":r.el.style.left="":p>=2&&(r.wrapper.style.marginLeft="-"+50*(p-2)+"%");else{h||1!=p||(f?setTimeout(function(){r.box.style[o]=l+"transform",r.box.style[a]="translate(0,0) "+v},1):r.box.style.left=g+"em");var _=h?2:3;p>=_-1&&(f?setTimeout(function(){r.wrapper.style[o]=l+"transform",r.wrapper.style[a]="translate(-"+g*(p-_+1)+"em,0)"+v},1):r.wrapper.style.marginLeft="-"+g*(p-_+1)+"em")}r.level=p,y.call(r._itemPath,r._itemPath.length-1,1),P(x,n,s)}u=d=null,w=null},append:function(n,s){var r=this;if(n&&n.nodeType&&s&&e.isString(s)){var l=B(n);if(l){for(var a,o=parseInt(e.attr(l,"level")),p=0,u=l.nextSibling;p<10&&u;){if(u.nodeType&&e.nodeName(u,"div")&&(" "+u.className+" ").indexOf(" c_popupGroup ")>-1&&o+1==e.attr(u,"level")){a=u;break}u=u.nextSibling,p++}var d=r.id+"_group"+(o+1);if(a&&a.nodeType){var f=e.attr(a,"id");f||e.attr(a,"id",d)}else e(r.wrapper).append('<div id="'+d+'" class="c_popupGroup" level="'+(o+1)+'"></div>'),a=i.getElementById(d);var c=d+"_item"+e.md5(s),v="frame_"+c,m=i.getElementById(c);m||(e(a).append('<div id="'+c+'" class="c_popupItem"></div>'),m=i.getElementById(c));var y=i.getElementById(v);if(!y){var h=[];h.push('<iframe id="'+v+'" style="width:100%;height:100%;display:none" frameborder="0"></iframe>'),h.push('<div id="'+v+'_loading" class="c_msg c_msg-full c_msg-loading">'),h.push('<div class="wrapper">'),h.push('<div class="emote"></div>'),h.push('<div class="info"><div class="text"><div class="title" id=id="'+v+'_loading_txt">loading</div></div></div>'),h.push("</div>"),h.push("</div>"),e(m).append(h.join("")),h=null,t[v]=new Wade.Frame(v,{autoInit:!1,title:s})}return l=y=m=a=null,c}}},getFrame:function(e){return t[e]},setPopupReturnValue:function(t,i,n){var s=this;t&&(e.isPlainObject(t)&&(n=i),P(null,t,i,s.srcWindow?s.srcWindow:null),!1!==n&&s.hide(),e.event.trigger("afterAction",null,s.el))},destroy:function(){var t=this;e.zIndexer.remove(t.id),f&&t._unbind(c);var i=e.inArray(t.id,T);i>-1&&y.call(T,i,1),t._itemPath=[],t._itemPath=null,t.srcWindow=null,t.bg=null,t.wrapper=null,t.box=null,t.el=null},_init:function(){var i=this;i.level=1,i.bg=e(i.el).children("div.c_popupBg:first")[0],i.box=e(i.el).children("div.c_popupBox:first")[0],i.wrapper=e(i.el).find("div.c_popupWrapper:first")[0],m.call(T,i.id);var n=i.el.className?i.el.className:"";i.isHalf=(" "+n+" ").indexOf(" c_popup-half ")>-1,i.isFull=(" "+n+" ").indexOf(" c_popup-full ")>-1,i.isWide=(" "+n+" ").indexOf(" c_popup-wide ")>-1,i.isHalfBg=(" "+n+" ").indexOf(" c_popup-half-hasBg ")>-1,i.isDefShow=i.defaultShowItemId||(" "+n+" ").indexOf(" c_popup-show ")>-1,i.isHalf&&!i.isHalfBg&&(i.mask=!1,e(i.bg).remove(),i.bg=null),i.bg&&i.bg.nodeType&&e(i.bg).tap(function(){var i=this.className?this.className:"";if(i&&!(" "+i+" ").indexOf(" c_popupBg ")){var n=e(this).parents("div.c_popup:first").attr("id");if(n){var s=t[n];s&&s instanceof e.Popup&&s.hide()}}});var s=i.wrapper.childNodes;if(s&&s.length>0)for(var r,l=0,d=0;l<s.length;)r=s[l],r.nodeType&&e.nodeName(r,"div")&&(" "+r.className+" ").indexOf(" c_popupGroup ")>-1&&(d++,e.attr(r,"level",d)),l++;s=null,i._itemPath=[],f&&(i.el.style[o]="none",i.el.style[p]="300ms",i.el.style[u]="ease-out",i.el.style[a]="translate(100%,0)"+v,i.box.style[o]="none",i.box.style[p]="300ms",i.box.style[u]="ease-out",i.box.style[a]="translate(0,0)"+v,i.wrapper.style[o]="none",i.wrapper.style[p]="300ms",i.wrapper.style[u]="ease-out",i.wrapper.style[a]="translate(0,0)"+v,i._bind(c));var y=i.defaultShowItemId;e("div.c_popupItem",i.el).each(function(){var t=e.attr(this,"id");t&&!y&&(y=t);var i=this.className?this.className:"";(" "+i+" ").indexOf(" c_popupItem-show ")>-1&&this.setAttribute("visible-snapshot",!0),f?(this.style[o]="none",this.style[p]="300ms",this.style[u]="ease-out",this.style[a]="translate(0,0)"+v):(this.style.visibility="visible",this.style.display="none")}),y&&i.isDefShow&&i.show(y)},_findGroup:function(t){var n=this;if(!x.test(t)&&!e.isString(t))return null;if(e.isNumber(t)&&(t<1||t>b))return null;var s=null;if(e.isNumber(t)){var r=n.wrapper.childNodes;if(r&&r.length>0)for(var l,a=0,o=0;a<r.length;){if(l=r[a],l.nodeType&&e.nodeName(l,"div")&&(" "+l.className+" ").indexOf(" c_popupGroup ")>-1&&(o++,t==o)){s=l;break}a++}}else e.isString(t)&&(s=i.getElementById(t));return s},_showItem:function(t,i){var n=this;if(_.test(i)||e.isString(i)){var s=t&&t.nodeType?t:n._findGroup(t);if(s&&s.nodeType){for(var r,p,u,d=e.attr(s,"level")==n.level,c=s.childNodes,m=0,y=0;m<c.length;)p=c[m],1==p.nodeType&&e.nodeName(p,"div")&&(u=p.className?p.className:"",(" "+u+" ").indexOf(" c_popupItem ")>-1&&(y++,e.isNumber(i)&&y==i||e.isString(i)&&i==e.attr(p,"id")?(r=p,p.setAttribute("visible",!0),"visible"!=p.style.visibility&&(p.style.visibility="visible"),f||(p.style.display=""),f&&setTimeout(function(e){return function(){e.style[o]=d?l+"transform":"none",e.style[a]="translate(0,0)"+v}}(p),1),I(p,n.id),O(p),S(p)):(p.setAttribute("visible",!1),f&&!d?p.style.visibility="hidden":f||(p.style.display="none"),f&&setTimeout(function(e){return function(){e.style[o]=d?l+"transform":"none",e.style[a]="translate(100%,0)"+v}}(p),1)))),m++;return r}}},_bind:function(e,t,n){var s=this;i.addEventListener&&(t||s.el).addEventListener(e,s,!!n)},_unbind:function(e,t,n){var s=this;i.removeEventListener&&(t||s.el).removeEventListener(e,s,!!n)},_transitionEnd:function(t){var i=this,n=t.target;if(n&&n.nodeType){var s=n.className?n.className:"";if((" "+s+" ").indexOf(" c_popup ")>-1){if(0==i.visible){n.style.visibility="hidden";var r=e("div[visible=true]",i.el);r.attr("visible",!1),r.attr("visible-snapshot",!0),r.css("visibility","hidden"),r=null}}else(" "+s+" ").indexOf(" c_popupBox ")>-1||(" "+s+" ").indexOf(" c_popupWrapper ")>-1||(" "+s+" ").indexOf(" c_popupItem ")>-1&&"false"==n.getAttribute("visible")&&(n.style.visibility="hidden");(" "+s+" ").indexOf(" c_popup ")>-1&&(n.style[o]="none")}}}),e.extend(N,{back:function(i){var n=!1;return e.zIndexer.each(function(s,r){if(e.inArray(r,T)>-1&&t[r]&&t[r]instanceof N&&("undefined"==typeof i||1==i&&i==t[r].mask))return t[r].back(),n=!0,!1}),n}});var I=function(i,n){if(e.Frame&&e.isFunction(e.Frame)&&e.Frame.prototype._init){var s,r;e("iframe[x-wade-uicomponent=frame]",i).each(function(){s=e.attr(this,"id"),(r=t[s])&&r instanceof e.Frame&&(r.setAttribute("popupId",n),!0!==r.inited?setTimeout("window['"+s+"'].init()",f?350:0):setTimeout("window['"+s+"'].adjust();",f?350:0))})}},O=function(i){if(e.Scroller&&e.isFunction(e.Scroller)&&e.Scroller.prototype._init){var n,s;e("div[x-wade-uicomponent=scroller]",i).each(function(){n=e.attr(this,"id"),(s=t[n])&&s instanceof e.Scroller&&setTimeout("window['"+n+"'].refresh()",f?350:0)})}},S=function(i){if(e.Table&&e.isFunction(e.Table)&&e.Table.prototype._init){var n,s;e("div[x-wade-uicomponent=table]",i).each(function(){n=e.attr(this,"id"),(s=t[n])&&s instanceof e.Table&&setTimeout("window['"+n+"'].adjust()",f?350:0)})}},B=function(t){if(!t||!t.nodeType)return null;for(var n=0,s=t.parentNode;n<20&&s&&s.nodeType&&s!=i.body;){if(e.nodeName(s,"div")&&(" "+s.className+" ").indexOf(" c_popupGroup ")>-1)return s;s=s.parentNode,n++}},P=function(i,n,s,r){var l=r?r:t,a=i?e("iframe[x-wade-uicomponent=frame]",i)[0]:null;if(a&&a.nodeType&&e.nodeName(a,"iframe")&&(l=a.contentWindow),l&&l.Wade&&l.$)if(e.isString(n))l.$("#"+n).val(s);else if(e.isPlainObject(n))for(var o in n)l.$("#"+o).val(n[o]);else if(e.isArray(n)&&n.length&&n.length%2==0)for(var p=0;p<n.length;p+=2){var o=n[p],u=n[p+1];o&&"undefined"!=o&&l.$("#"+o).val(u)}};s=null,t.Popup=e.Popup=N}}(window.Wade,window,document);