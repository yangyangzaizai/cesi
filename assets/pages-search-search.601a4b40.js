import{E as t,o as s,c as a,w as e,g as i,i as l,e as o,f as r,t as n,k as c,r as d,F as p,d as f,p as u,m,n as h}from"./index-dd1a9fff.js";import{_ as g}from"./ADhf.b9f87ff3.js";import{f as x,r as y}from"./fun.5d8ba00d.js";import{_}from"./_plugin-vue_export-helper.1b428a4d.js";var v=i();const w=_({data:()=>({isHistory:!0,list:[],flng:!0,timer:null,slist:{name:"",list:[]},ADlist:[]}),onLoad(t){x.tiao(t.key);var s=this;x.apipost({route:"vod.v1/searchkey",data:{num:20,key:t.key},hanshu:t=>{200==t.statusCode?0==t.data.code?(s.slist.list=t.data.list,s.slist.name=t.data.name,s.ADlist=t.data.ad):x.toast(t.data.msg):x.toast("获取搜索榜失败，请稍后尝试。")}})},methods:{got(t){v.goto("/pages/search/list?source=search&name="+t)}},onNavigationBarSearchInputConfirmed(s){let a=s.text;a?this.got(a):t({title:"提示",content:"你好啊",success:t=>{t.confirm}})},onNavigationBarButtonTap(){t({title:"提示",content:"点击了",success:t=>{if(t.confirm){this.$mp.page.$getAppWebview().setTitleNViewSearchInputText("abc")}}})}},[["render",function(t,i,x,_,v,w){const k=y(u("ADhf"),g),A=m,D=l;return s(),a(D,{class:"wrapper"},{default:e((()=>[o(k,{ADlist:v.ADlist},null,8,["ADlist"]),v.slist.list.length>0?(s(),a(D,{key:0},{default:e((()=>[o(D,{class:"history-title"},{default:e((()=>[o(A,null,{default:e((()=>[r(n(v.slist.name),1)])),_:1})])),_:1}),o(D,{style:{"flex-direction":"row",padding:"20rpx 30rpx","flex-wrap":"wrap"}},{default:e((()=>[(s(!0),c(p,null,d(v.slist.list,((t,i)=>(s(),a(D,{style:{"flex-direction":"row",width:"160rpx",margin:"12rpx 5rpx"},onClick:s=>w.got(t)},{default:e((()=>[o(A,{class:"history-text",style:h(i<3?"color: #f00;":"color: #000;")},{default:e((()=>[r(n(i+1),1)])),_:2},1032,["style"]),o(A,{class:"history-text",style:{"margin-left":"5rpx"}},{default:e((()=>[r(n(t),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1})):f("",!0)])),_:1})}],["__scopeId","data-v-9720c4c0"]]);export{w as default};
