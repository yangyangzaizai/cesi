import{q as t,p as e,o as i,c as s,w as o,d as a,e as n,u as l,n as r,f as d,t as c,m as h,i as p,x as u,j as f,v as m,y,z as g,A as b,k,F as w,r as x,g as _,l as C,s as v,a as j,h as S,b as z,B as T,C as $,S as A}from"./index-dd1a9fff.js";import{a as D,_ as P,b as B}from"./fx.34c6adc7.js";import{r as I,f as M}from"./fun.5d8ba00d.js";import{_ as q}from"./_plugin-vue_export-helper.1b428a4d.js";import{_ as X}from"./ADhf.b9f87ff3.js";import{_ as E}from"./foot.97e24449.js";const H=q({name:"UniNoticeBar",emits:["click","getmore","close"],props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#FFF9EA"},speed:{type:Number,default:100},color:{type:String,default:"#FF9A43"},fontSize:{type:Number,default:14},moreColor:{type:String,default:"#FF9A43"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:()=>({textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,elIdBox:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}),computed:{isShowGetMore(){return!0===this.showGetMore||"true"===this.showGetMore},isShowClose(){return!(!0!==this.showClose&&"true"!==this.showClose||!1!==this.showGetMore&&"false"!==this.showGetMore)}},mounted(){this.$nextTick((()=>{this.initSize()}))},methods:{initSize(){if(this.scrollable){let e=[],i=new Promise(((e,i)=>{t().in(this).select(`#${this.elId}`).boundingClientRect().exec((t=>{this.textWidth=t[0].width,e()}))})),s=new Promise(((e,i)=>{t().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((t=>{this.boxWidth=t[0].width,e()}))}));e.push(i),e.push(s),Promise.all(e).then((()=>{this.animationDuration=this.textWidth/this.speed+"s",this.animationDelay=`-${this.boxWidth/this.speed}s`,setTimeout((()=>{this.animationPlayState="running"}),1e3)}))}},loopAnimation(){},clickMore(){this.$emit("getmore")},close(){this.show=!1,this.$emit("close")},onClick(){this.$emit("click")}}},[["render",function(t,u,f,m,y,g){const b=I(e("uni-icons"),D),k=h,w=p;return y.show?(i(),s(w,{key:0,class:"uni-noticebar",style:r({backgroundColor:f.backgroundColor}),onClick:g.onClick},{default:o((()=>[!0===f.showIcon||"true"===f.showIcon?(i(),s(b,{key:0,class:"uni-noticebar-icon",type:"sound",color:f.color,size:1.5*f.fontSize},null,8,["color","size"])):a("",!0),n(w,{ref:"textBox",class:l(["uni-noticebar__content-wrapper",{"uni-noticebar__content-wrapper--scrollable":f.scrollable,"uni-noticebar__content-wrapper--single":!f.scrollable&&(f.single||f.moreText)}]),style:r({height:f.scrollable?1.5*f.fontSize+"px":"auto"})},{default:o((()=>[n(w,{id:y.elIdBox,class:l(["uni-noticebar__content",{"uni-noticebar__content--scrollable":f.scrollable,"uni-noticebar__content--single":!f.scrollable&&(f.single||f.moreText)}])},{default:o((()=>[n(k,{id:y.elId,ref:"animationEle",class:l(["uni-noticebar__content-text",{"uni-noticebar__content-text--scrollable":f.scrollable,"uni-noticebar__content-text--single":!f.scrollable&&(f.single||f.showGetMore)}]),style:r({color:f.color,fontSize:f.fontSize+"px",lineHeight:1.5*f.fontSize+"px",width:y.wrapWidth+"px",animationDuration:y.animationDuration,"-webkit-animationDuration":y.animationDuration,animationPlayState:y.webviewHide?"paused":y.animationPlayState,"-webkit-animationPlayState":y.webviewHide?"paused":y.animationPlayState,animationDelay:y.animationDelay,"-webkit-animationDelay":y.animationDelay})},{default:o((()=>[d(c(f.text),1)])),_:1},8,["id","class","style"])])),_:1},8,["id","class"])])),_:1},8,["class","style"]),g.isShowGetMore?(i(),s(w,{key:1,class:"uni-noticebar__more uni-cursor-point",onClick:g.clickMore},{default:o((()=>[f.moreText.length>0?(i(),s(k,{key:0,style:r({color:f.moreColor,fontSize:f.fontSize+"px"})},{default:o((()=>[d(c(f.moreText),1)])),_:1},8,["style"])):(i(),s(b,{key:1,type:"right",color:f.moreColor,size:1.1*f.fontSize},null,8,["color","size"]))])),_:1},8,["onClick"])):a("",!0),g.isShowClose?(i(),s(w,{key:2,class:"uni-noticebar-close uni-cursor-point"},{default:o((()=>[n(b,{type:"closeempty",color:f.color,size:1.1*f.fontSize,onClick:g.close},null,8,["color","size","onClick"])])),_:1})):a("",!0)])),_:1},8,["style","onClick"])):a("",!0)}],["__scopeId","data-v-69ae3424"]]);class W{constructor(t,e){this.options=t,this.animation=u({...t}),this.currentStepAnimates={},this.next=0,this.$=e}_nvuePushAnimates(t,e){let i=this.currentStepAnimates[this.next],s={};if(s=i||{styles:{},config:{}},F.includes(t)){s.styles.transform||(s.styles.transform="");let i="";"rotate"===t&&(i="deg"),s.styles.transform+=`${t}(${e+i}) `}else s.styles[t]=`${e}`;this.currentStepAnimates[this.next]=s}_animateRun(t={},e={}){let i=this.$.$refs.ani.ref;if(i)return new Promise(((s,o)=>{nvueAnimation.transition(i,{styles:t,...e},(t=>{s()}))}))}_nvueNextAnimate(t,e=0,i){let s=t[e];if(s){let{styles:o,config:a}=s;this._animateRun(o,a).then((()=>{e+=1,this._nvueNextAnimate(t,e,i)}))}else this.currentStepAnimates={},"function"==typeof i&&i(),this.isEnd=!0}step(t={}){return this.animation.step(t),this}run(t){this.$.animationData=this.animation.export(),this.$.timer=setTimeout((()=>{"function"==typeof t&&t()}),this.$.durationTime)}}const F=["matrix","matrix3d","rotate","rotate3d","rotateX","rotateY","rotateZ","scale","scale3d","scaleX","scaleY","scaleZ","skew","skewX","skewY","translate","translate3d","translateX","translateY","translateZ"];function R(t,e){if(e)return clearTimeout(e.timer),new W(t,e)}F.concat(["opacity","backgroundColor"],["width","height","left","right","top","bottom"]).forEach((t=>{W.prototype[t]=function(...e){return this.animation[t](...e),this}}));const Y=q({name:"uniTransition",emits:["click","change"],props:{show:{type:Boolean,default:!1},modeClass:{type:[Array,String],default:()=>"fade"},duration:{type:Number,default:300},styles:{type:Object,default:()=>({})},customClass:{type:String,default:""},onceRender:{type:Boolean,default:!1}},data:()=>({isShow:!1,transform:"",opacity:1,animationData:{},durationTime:300,config:{}}),watch:{show:{handler(t){t?this.open():this.isShow&&this.close()},immediate:!0}},computed:{stylesObject(){let t={...this.styles,"transition-duration":this.duration/1e3+"s"},e="";for(let i in t){e+=this.toLine(i)+":"+t[i]+";"}return e},transformStyles(){return"transform:"+this.transform+";opacity:"+this.opacity+";"+this.stylesObject}},created(){this.config={duration:this.duration,timingFunction:"ease",transformOrigin:"50% 50%",delay:0},this.durationTime=this.duration},methods:{init(t={}){t.duration&&(this.durationTime=t.duration),this.animation=R(Object.assign(this.config,t),this)},onClick(){this.$emit("click",{detail:this.isShow})},step(t,e={}){if(this.animation){for(let e in t)try{"object"==typeof t[e]?this.animation[e](...t[e]):this.animation[e](t[e])}catch(i){console.error(`方法 ${e} 不存在`)}return this.animation.step(e),this}},run(t){this.animation&&this.animation.run(t)},open(){clearTimeout(this.timer),this.transform="",this.isShow=!0;let{opacity:t,transform:e}=this.styleInit(!1);void 0!==t&&(this.opacity=t),this.transform=e,this.$nextTick((()=>{this.timer=setTimeout((()=>{this.animation=R(this.config,this),this.tranfromInit(!1).step(),this.animation.run(),this.$emit("change",{detail:this.isShow})}),20)}))},close(t){this.animation&&this.tranfromInit(!0).step().run((()=>{this.isShow=!1,this.animationData=null,this.animation=null;let{opacity:t,transform:e}=this.styleInit(!1);this.opacity=t||1,this.transform=e,this.$emit("change",{detail:this.isShow})}))},styleInit(t){let e={transform:""},i=(t,i)=>{"fade"===i?e.opacity=this.animationType(t)[i]:e.transform+=this.animationType(t)[i]+" "};return"string"==typeof this.modeClass?i(t,this.modeClass):this.modeClass.forEach((e=>{i(t,e)})),e},tranfromInit(t){let e=(t,e)=>{let i=null;"fade"===e?i=t?0:1:(i=t?"-100%":"0","zoom-in"===e&&(i=t?.8:1),"zoom-out"===e&&(i=t?1.2:1),"slide-right"===e&&(i=t?"100%":"0"),"slide-bottom"===e&&(i=t?"100%":"0")),this.animation[this.animationMode()[e]](i)};return"string"==typeof this.modeClass?e(t,this.modeClass):this.modeClass.forEach((i=>{e(t,i)})),this.animation},animationType:t=>({fade:t?1:0,"slide-top":`translateY(${t?"0":"-100%"})`,"slide-right":`translateX(${t?"0":"100%"})`,"slide-bottom":`translateY(${t?"0":"100%"})`,"slide-left":`translateX(${t?"0":"-100%"})`,"zoom-in":`scaleX(${t?1:.8}) scaleY(${t?1:.8})`,"zoom-out":`scaleX(${t?1:1.2}) scaleY(${t?1:1.2})`}),animationMode:()=>({fade:"opacity","slide-top":"translateY","slide-right":"translateX","slide-bottom":"translateY","slide-left":"translateX","zoom-in":"scale","zoom-out":"scale"}),toLine:t=>t.replace(/([A-Z])/g,"-$1").toLowerCase()}},[["render",function(t,e,a,n,d,c){const h=p;return f((i(),s(h,{ref:"ani",animation:d.animationData,class:l(a.customClass),style:r(c.transformStyles),onClick:c.onClick},{default:o((()=>[y(t.$slots,"default")])),_:3},8,["animation","class","style","onClick"])),[[m,d.isShow]])}]]);const O=q({name:"uniPopup",components:{keypress:{name:"Keypress",props:{disable:{type:Boolean,default:!1}},mounted(){const t={esc:["Esc","Escape"],tab:"Tab",enter:"Enter",space:[" ","Spacebar"],up:["Up","ArrowUp"],left:["Left","ArrowLeft"],right:["Right","ArrowRight"],down:["Down","ArrowDown"],delete:["Backspace","Delete","Del"]};document.addEventListener("keyup",(e=>{if(this.disable)return;const i=Object.keys(t).find((i=>{const s=e.key,o=t[i];return o===s||Array.isArray(o)&&o.includes(s)}));i&&setTimeout((()=>{this.$emit(i,{})}),0)}))},render:()=>{}}},emits:["change","maskClick"],props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},isMaskClick:{type:Boolean,default:null},maskClick:{type:Boolean,default:null},backgroundColor:{type:String,default:"none"},safeArea:{type:Boolean,default:!0},maskBackgroundColor:{type:String,default:"rgba(0, 0, 0, 0.4)"}},watch:{type:{handler:function(t){this.config[t]&&this[this.config[t]](!0)},immediate:!0},isDesktop:{handler:function(t){this.config[t]&&this[this.config[this.type]](!0)},immediate:!0},maskClick:{handler:function(t){this.mkclick=t},immediate:!0},isMaskClick:{handler:function(t){this.mkclick=t},immediate:!0},showPopup(t){document.getElementsByTagName("body")[0].style.overflow=t?"hidden":"visible"}},data(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,popupWidth:0,popupHeight:0,config:{top:"top",bottom:"bottom",center:"center",left:"left",right:"right",message:"top",dialog:"center",share:"bottom"},maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0},maskShow:!0,mkclick:!0,popupstyle:this.isDesktop?"fixforpc-top":"top"}},computed:{isDesktop(){return this.popupWidth>=500&&this.popupHeight>=500},bg(){return""===this.backgroundColor||"none"===this.backgroundColor?"transparent":this.backgroundColor}},mounted(){(()=>{const{windowWidth:t,windowHeight:e,windowTop:i,safeArea:s,screenHeight:o,safeAreaInsets:a}=b();this.popupWidth=t,this.popupHeight=e+(i||0),s&&this.safeArea?this.safeAreaInsets=a.bottom:this.safeAreaInsets=0})()},unmounted(){this.setH5Visible()},created(){null===this.isMaskClick&&null===this.maskClick?this.mkclick=!0:this.mkclick=null!==this.isMaskClick?this.isMaskClick:this.maskClick,this.animation?this.duration=300:this.duration=0,this.messageChild=null,this.clearPropagation=!1,this.maskClass.backgroundColor=this.maskBackgroundColor},methods:{setH5Visible(){document.getElementsByTagName("body")[0].style.overflow="visible"},closeMask(){this.maskShow=!1},disableMask(){this.mkclick=!1},clear(t){t.stopPropagation(),this.clearPropagation=!0},open(t){if(this.showPopup)return;t&&-1!==["top","center","bottom","left","right","message","dialog","share"].indexOf(t)||(t=this.type),this.config[t]?(this[this.config[t]](),this.$emit("change",{show:!0,type:t})):console.error("缺少类型：",t)},close(t){this.showTrans=!1,this.$emit("change",{show:!1,type:this.type}),clearTimeout(this.timer),this.timer=setTimeout((()=>{this.showPopup=!1}),300)},touchstart(){this.clearPropagation=!1},onTap(){this.clearPropagation?this.clearPropagation=!1:(this.$emit("maskClick"),this.mkclick&&this.close())},top(t){this.popupstyle=this.isDesktop?"fixforpc-top":"top",this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0,backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0,this.$nextTick((()=>{this.messageChild&&"message"===this.type&&this.messageChild.timerClose()})))},bottom(t){this.popupstyle="bottom",this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0,paddingBottom:this.safeAreaInsets+"px",backgroundColor:this.bg},t||(this.showPopup=!0,this.showTrans=!0)},center(t){this.popupstyle="center",this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"},t||(this.showPopup=!0,this.showTrans=!0)},left(t){this.popupstyle="left",this.ani=["slide-left"],this.transClass={position:"fixed",left:0,bottom:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)},right(t){this.popupstyle="right",this.ani=["slide-right"],this.transClass={position:"fixed",bottom:0,right:0,top:0,backgroundColor:this.bg,display:"flex",flexDirection:"column"},t||(this.showPopup=!0,this.showTrans=!0)}}},[["render",function(t,d,c,h,u,f){const m=I(e("uni-transition"),Y),b=p,k=g("keypress");return u.showPopup?(i(),s(b,{key:0,class:l(["uni-popup",[u.popupstyle,f.isDesktop?"fixforpc-z-index":""]])},{default:o((()=>[n(b,{onTouchstart:f.touchstart},{default:o((()=>[u.maskShow?(i(),s(m,{key:"1",name:"mask","mode-class":"fade",styles:u.maskClass,duration:u.duration,show:u.showTrans,onClick:f.onTap},null,8,["styles","duration","show","onClick"])):a("",!0),n(m,{key:"2","mode-class":u.ani,name:"content",styles:u.transClass,duration:u.duration,show:u.showTrans,onClick:f.onTap},{default:o((()=>[n(b,{class:l(["uni-popup__wrapper",[u.popupstyle]]),style:r({backgroundColor:f.bg}),onClick:f.clear},{default:o((()=>[y(t.$slots,"default",{},void 0,!0)])),_:3},8,["style","class","onClick"])])),_:3},8,["mode-class","styles","duration","show","onClick"])])),_:3},8,["onTouchstart"]),u.maskShow?(i(),s(k,{key:0,onEsc:f.onTap},null,8,["onEsc"])):a("",!0)])),_:3},8,["class"])):a("",!0)}],["__scopeId","data-v-a1518068"]]);var G=_();const N=q({name:"ge",props:{list:{type:[Object,Array],default:[]},from:""},onReady(){},mounted(){this.lists=this.list},data:()=>({lists:[]}),watch:{list(t,e){this.lists=this.list}},methods:{cshjz(t){G.goto("/pages/player/player?vid="+t+"&from="+this.from+"&sid=0&source=play")},imgerr(t){this.lists[t].num<this.lists[t].vod_pic.length-1?this.lists[t].num++:this.lists[t].vod_pic[this.lists[t].num]="/static/img/jzsb.png"}}},[["render",function(t,e,a,l,r,u){const f=C,m=h,y=p;return i(),s(y,{style:{padding:"10rpx","flex-direction":"row","justify-content":"space-between","flex-wrap":"wrap"}},{default:o((()=>[(i(!0),k(w,null,x(r.lists,((t,e)=>(i(),s(y,{style:{"justify-content":"center",width:"219rpx"},onClick:e=>u.cshjz(t.vod_id)},{default:o((()=>[n(y,{style:{"flex-direction":"column-reverse"}},{default:o((()=>[n(f,{"lazy-load":!0,style:{width:"219rpx",height:"293rpx","border-radius":"15rpx"},src:t.vod_pic[t.num],onError:t=>u.imgerr(e)},null,8,["src","onError"]),n(y,{style:{position:"absolute",padding:"6rpx"}},{default:o((()=>[n(m,{style:{"font-size":"12",color:"#fff",lines:"1",width:"219rpx","text-align":"center"}},{default:o((()=>[d(c(t.vod_remarks),1)])),_:2},1024)])),_:2},1024)])),_:2},1024),n(m,{style:{"text-align":"center",lines:"1",padding:"6rpx"}},{default:o((()=>[d(c(t.vod_name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})}]]);const L=q({data:()=>({webviewStyles:{width:"750rpx",height:"350rpx"},art:null,lock:!1,playurl:"",player:[],jjjj:0,jqh:0,bfsy:0,bfsy1:0,vod:{},cainixihuan:[],isbf:!0,dwz:"",ADlist:[],gonggao:""}),watch:{playurl(t,e){""!=t&&t!=e&&this.bf(t)}},onLoad(t){t.pzid&&v({key:"pzid",data:t.pzid,success:function(){}}),j({title:"加载中",mask:!0,icon:"loading"}),this.bfsy=t.sid;var e=this;M.apipost({route:"vod.v1/details",data:{vid:t.vid,resource:t.from,sid:t.sid,key:t.key},hanshu:t=>{S(),200==t.statusCode?0==t.data.code?(e.vod=t.data.data,e.vod.num=0,e.player=e.vod.player[0].url,e.playurl=e.player[e.bfsy].url,e.cnqh(e.vod.vod_class),e.ADlist=t.data.ad,t.data.gonggao&&(e.gonggao=t.data.gonggao)):M.toast(t.data.msg):M.toast("访问数据失败！")}})},onReady(){},methods:{popupclose(){this.$refs.popup.close()},popup(){this.$refs.popup.open("bottom")},play_error(t){var e=this;try{e.art.destroy()}catch(i){}e.isbf=!1,e.art=null},play_full(t){},play_ended(t){t.bfsy<t.vod.player[t.jqh].url.length-1?(t.bfsy++,t.playurl=t.vod.player[t.jqh].url[t.bfsy].url):M.toast("没有下一集了")},bf(){var t=this;function e(e){t.isbf=!0,null!=t.art?t.art.switch=e:(t.art=new Artplayer({id:"a"+t.vod.vod_id,autoPlayback:!0,container:".artplayer-app",url:e,poster:"https://ldbbs.ldmnq.com/bbs/topic/attachment/2023-2/abec8c43-547b-4c13-854b-0b2cb68026bc.png",autoplay:!0,fullscreen:!0,lock:!0,fastForward:!0,autoOrientation:!0,controls:[{name:"next",index:11,position:"left",html:"下一集",tooltip:"下一集",style:{},click:function(...e){t.play_ended(t)}},{name:"times",position:"right",html:"1.0X",selector:[{html:"0.5X",id:.5},{html:"0.8X",id:.8},{html:"1.0X",default:!0,id:1},{html:"1.25X",id:1.25},{html:"1.5X",id:1.5},{html:"2.0X",id:2},{html:"3.0X",id:3}],onSelect:function(t,e){this.playbackRate=t.id}}],layers:[{name:"title",html:t.vod.vod_name+" - "+t.vod.player[t.jqh].url[t.bfsy].name,style:{top:"10px","text-align":"center",width:"100%",height:"28px",display:"none"}}]}),t.art.on("ready",(()=>{console.log("加载完毕")})),t.art.on("error",((e,i)=>{i>3&&t.play_error()})),t.art.on("video:ended",(()=>{t.play_ended(t)})),t.art.on("fullscreen",(t=>{})),t.art.on("control",(e=>{var i="block";e&&!t.lock||(i="none"),t.art.layers.update({name:"title",html:t.vod.vod_name+" - "+t.vod.player[t.jqh].url[t.bfsy].name,style:{top:"5px","text-align":"center",width:"100%",height:"32px","font-size":"25px",display:i}})})),t.art.on("lock",(e=>{t.lock=e})))}t.vod.player[t.jqh].jiexi?(j({title:"解析中...",mask:!0,icon:"loading"}),M.apipost({route:t.vod.player[t.jqh].jiexi+"?url="+t.vod.player[t.jqh].url[t.bfsy].url,data:{jiex:"true"},hanshu:t=>{S(),200==t.statusCode?0==t.data.code?e(t.data.url):M.toast("解析失败！"):M.toast("请求失败！")}})):e(t.playurl)},jjjcss(t){return t==this.jjjj?"border-bottom: 2rpx #f00 solid;":""},from(t){if(this.vod.player[t].url.length<=0){j({title:"加载中",mask:!0,icon:"loading"});var e=this;M.apipost({route:"vod.v1/from",data:{vid:e.vod.vod_id,resource:e.vod.player[t].key,sid:e.jqh},hanshu:i=>{S(),200==i.statusCode?0==i.data.code?(e.vod.player[t]=i.data.data,e.player=i.data.data.url):M.toast(i.data.msg):M.toast("访问数据失败！")}})}else this.player=this.vod.player[t].url;this.jqh=t},bofang(t){this.playurl!=this.vod.player[this.jqh].url[t].url&&(this.playurl=this.vod.player[this.jqh].url[t].url,this.bfsy=t,this.bfsy1=this.jqh),this.$refs.popup.close()},cnqh(t){var e=this;M.apipost({route:"vod.v1/tag",data:{class:t,id:e.vod.vod_id},hanshu:function(t){if(200==t.statusCode)if(0==t.data.code){for(var i=0;i<t.data.list.length;i++)t.data.list[i].num=0;e.cainixihuan=t.data.list}else M.toast(t.data.msg);else M.toast("获取猜你喜欢出错,请稍后尝试")}})},fenxiang(t){t>0&&(""==this.dwz?(j({title:"加载中",mask:!0,icon:"loading"}),M.apipost({route:"vod.v1/dwz",data:{id:t},hanshu:t=>{S(),200==t.statusCode?0==t.data.code?(this.dwz="🎥"+this.vod.vod_name+"\n👉"+t.data.data[0].url,z({data:this.dwz,complete:t=>{}})):M.toast(t.data.msg):M.toast("访问数据失败！")}})):z({data:this.dwz,complete:t=>{}}))},bflicss(t){return t==this.bfsy&&this.bfsy1==this.jqh?"background-color: red;color: #fff;":""},houtui(){T()}},onBackPress(t){},onShow(){},onHide(){}},[["render",function(t,l,u,y,g,b){const _=p,v=I(e("uni-icons"),D),j=h,S=I(e("uni-notice-bar"),H),z=C,T=A,M=I(e("uni-popup"),O),q=I(e("ADhf"),X),W=I(e("ge"),N),F=I(e("foot"),E),R=I(e("hd"),B);return i(),s(_,null,{default:o((()=>[n(_,{style:{"margin-top":"125rpx"}}),g.player.length>0?(i(),s(_,{key:0,style:{height:"80rpx","align-items":"center","flex-direction":"row"}},{default:o((()=>[n(v,{type:"back",size:"30",onClick:b.houtui},null,8,["onClick"]),n(j,null,{default:o((()=>[d(c(g.vod.vod_name),1)])),_:1}),n(j,{style:{margin:"0 25rpx"}},{default:o((()=>[d(c(g.vod.player[g.bfsy1].url[g.bfsy].name),1)])),_:1})])),_:1})):a("",!0),n(_,null,{default:o((()=>[$("div",{style:{width:"750rpx",height:"360rpx","border-bottom":"0.5px #999 solid"},id:"player",class:"artplayer-app"}),f(n(_,{style:{position:"absolute"}},{default:o((()=>[n(_,{style:{"flex-direction":"row",width:"750rpx",height:"360rpx","border-bottom":"0.5px #999 solid","background-color":"black",color:"#fff","justify-content":"center","align-items":"center"}},{default:o((()=>[n(j,{style:{margin:"0 35rpx"}},{default:o((()=>[d("播放出错点了点击下\\n方切换其他线路尝试")])),_:1}),n(_,{style:{margin:"0 35rpx","justify-content":"center","align-items":"center"},onClick:b.bf},{default:o((()=>[n(v,{type:"refreshempty",color:"#fff",size:"50"}),n(j,null,{default:o((()=>[d("重试")])),_:1})])),_:1},8,["onClick"])])),_:1})])),_:1},512),[[m,!g.isbf]]),g.gonggao?(i(),s(_,{key:0},{default:o((()=>[n(S,{speed:80,"show-icon":"",scrollable:"",text:g.gonggao},null,8,["text"])])),_:1})):a("",!0)])),_:1}),n(_,{style:{padding:"0 5rpx","margin-top":"10rpx"}},{default:o((()=>[n(_,{style:{"flex-direction":"row","justify-content":"space-between"}},{default:o((()=>[n(_,{style:{"flex-direction":"row"}},{default:o((()=>[n(j,{class:"jjjj",onClick:l[0]||(l[0]=t=>g.jjjj=0),style:r(b.jjjcss(0))},{default:o((()=>[d(" 剧集 ")])),_:1},8,["style"]),n(j,{class:"jjjj",onClick:l[1]||(l[1]=t=>g.jjjj=1),style:r(b.jjjcss(1))},{default:o((()=>[d(" 简介 ")])),_:1},8,["style"])])),_:1}),n(_,{class:"anniu",onClick:l[2]||(l[2]=t=>b.fenxiang(g.vod.vod_id))},{default:o((()=>[n(z,{class:"img",src:P}),n(j,{class:"text"},{default:o((()=>[d(" 分享 ")])),_:1})])),_:1})])),_:1}),n(_,{style:{margin:"10rpx 0"}},{default:o((()=>[f(n(_,null,{default:o((()=>[n(_,{style:{"flex-direction":"row","align-items":"center"}},{default:o((()=>[n(T,{"scroll-x":"true",style:{width:"700rpx"}},{default:o((()=>[n(_,{style:{"flex-direction":"row"}},{default:o((()=>[(i(!0),k(w,null,x(g.vod.player,((t,e)=>(i(),s(_,{onClick:t=>b.from(e),style:{"flex-direction":"row",margin:"10rpx 15rpx"}},{default:o((()=>[n(_,{style:{"flex-direction":"row"}},{default:o((()=>[n(j,{class:"ji",style:r(e==g.jqh?"border: 0.1rem #f00 solid;":"")},{default:o((()=>[d(c(t.name),1)])),_:2},1032,["style"]),n(j,{style:{"font-size":"15rpx",color:"#999"}},{default:o((()=>[d(c(t.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1}),n(_,null,{default:o((()=>[n(v,{type:"right",size:"22",color:"#999"})])),_:1})])),_:1}),n(_,{style:{"flex-direction":"row","align-items":"center"}},{default:o((()=>[n(T,{"scroll-x":"true",style:{width:"675rpx","white-space":"nowrap"},"scroll-into-view":"k"+(g.bfsy-2)},{default:o((()=>[(i(!0),k(w,null,x(g.player,((t,e)=>(i(),s(_,{id:"k"+e,onClick:t=>b.bofang(e),style:r([b.bflicss(e),{display:"inline-block"}]),class:"bfli"},{default:o((()=>[d(c(t.name),1)])),_:2},1032,["id","onClick","style"])))),256))])),_:1},8,["scroll-into-view"]),n(_,{onClick:b.popup},{default:o((()=>[n(v,{type:"list",size:"36",color:"#999"})])),_:1},8,["onClick"])])),_:1})])),_:1},512),[[m,0==g.jjjj]]),f(n(_,{style:{color:"#999",padding:"15rpx","font-size":"28rpx","line-height":"50rpx"}},{default:o((()=>[n(j,null,{default:o((()=>[d(" 导演："+c(g.vod.vod_director),1)])),_:1}),n(j,null,{default:o((()=>[d(" 主演："+c(g.vod.vod_actor),1)])),_:1}),n(j,null,{default:o((()=>[d(" 地区："+c(g.vod.vod_area)+" / 年代："+c(g.vod.vod_year),1)])),_:1}),n(j,null,{default:o((()=>[d(" 类别："+c(g.vod.vod_class),1)])),_:1}),n(j,null,{default:o((()=>[d(c(g.vod.vod_content),1)])),_:1})])),_:1},512),[[m,1==g.jjjj]])])),_:1})])),_:1}),n(_,null,{default:o((()=>[n(M,{ref:"popup"},{default:o((()=>[n(_,{style:{height:"500px","background-color":"#fff",padding:"10rpx","border-top-left-radius":"15rpx","border-top-right-radius":"15rpx"}},{default:o((()=>[n(_,{style:{"border-bottom":"1rpx #999 solid","flex-direction":"row","justify-content":"space-between","padding-bottom":"10rpx"}},{default:o((()=>[n(_,null,{default:o((()=>[d(" 选集 ")])),_:1}),n(_,{onClick:b.popupclose},{default:o((()=>[d(" 关闭 ")])),_:1},8,["onClick"])])),_:1}),n(T,{"scroll-y":"true",style:{height:"455px"}},{default:o((()=>[(i(!0),k(w,null,x(g.player,((t,e)=>(i(),s(_,{id:"k"+e,onClick:t=>b.bofang(e),style:r([b.bflicss(e),{display:"inline-block"}]),class:"bfli"},{default:o((()=>[d(c(t.name),1)])),_:2},1032,["id","onClick","style"])))),256))])),_:1})])),_:1})])),_:1},512)])),_:1}),n(q,{ADlist:g.ADlist},null,8,["ADlist"]),g.cainixihuan.length>0?(i(),s(_,{key:1,style:{padding:"15rpx"}},{default:o((()=>[n(j,{style:{margin:"5px 2px"}},{default:o((()=>[d("猜你喜欢")])),_:1}),n(W,{list:g.cainixihuan,from:g.vod.player[g.jqh].key},null,8,["list","from"])])),_:1})):a("",!0),n(F),n(R)])),_:1})}],["__scopeId","data-v-51011414"]]);export{L as default};
