import{s as a,a as t,h as d,b as s,o,c as e,w as l,d as r,g as i,i as n,e as u,f,t as c,n as p,j as v,v as j,k as m,r as y,F as A,l as g,m as h,p as _,S as x}from"./index-dd1a9fff.js";import{_ as w}from"./ADhf.b9f87ff3.js";import{f as k,r as z}from"./fun.5d8ba00d.js";import{_ as C,a as B,b}from"./fx.34c6adc7.js";import{_ as E}from"./foot.97e24449.js";import{_ as D}from"./_plugin-vue_export-helper.1b428a4d.js";var q=i();const R=D({data:()=>({vod:null,jjjj:0,jqh:0,player:[],dwz:"",ADlist:[]}),onLoad(s){let o=0;s.pzid&&(o=s.pzid),a({key:"pzid",data:o,success:function(){}}),t({title:"加载中",mask:!0,icon:"loading"});var e=this;k.apipost({route:"vod.v1/details",data:{vid:s.vid,key:s.key},hanshu:a=>{d(),200==a.statusCode?0==a.data.code?(e.vod=a.data.data,e.vod.num=0,e.player=e.vod.player[0].url,e.ADlist=a.data.ad):k.toast(a.data.msg):k.toast("访问数据失败！")}})},methods:{jjjcss(a){return a==this.jjjj?"border-bottom: 2rpx #f00 solid;":""},from(a){if(this.vod.player[a].url.length<=0){t({title:"加载中",mask:!0,icon:"loading"});var s=this;k.apipost({route:"vod.v1/from",data:{vid:s.vod.vod_id,resource:s.vod.player[a].key},hanshu:t=>{d(),200==t.statusCode?0==t.data.code?(s.vod.player[a]=t.data.data,s.player=t.data.data.url):k.toast(t.data.msg):k.toast("访问数据失败！")}})}else this.player=this.vod.player[a].url;this.jqh=a},bofang(a){q.goto("/pages/player/player?vid="+this.vod.vod_id+"&from="+this.vod.player[this.jqh].key+"&sid="+a)},fenxiang(a){a>0&&(""==this.dwz?(t({title:"加载中",mask:!0,icon:"loading"}),k.apipost({route:"vod.v1/dwz",data:{id:a},hanshu:a=>{d(),200==a.statusCode?0==a.data.code?(this.dwz="🎥"+this.vod.vod_name+"\n👉"+a.data.data[0].url,s({data:this.dwz,complete:a=>{}})):k.toast(a.data.msg):k.toast("访问数据失败！")}})):s({data:this.dwz,complete:a=>{}}))},imgerr(a){this.vod.num<this.vod.vod_pic.length-1?this.vod.num++:this.vod.vod_pic[this.vod.num]="/static/img/jzsb.png"}}},[["render",function(a,t,d,s,i,k){const D=n,q=g,R=h,I=z(_("ADhf"),w),F=x,N=z(_("uni-icons"),B),P=z(_("foot"),E),S=z(_("hd"),b);return i.vod?(o(),e(D,{key:0},{default:l((()=>[u(D,{style:{"margin-top":"125rpx"}}),u(D,null,{default:l((()=>[u(D,{style:{"flex-direction":"row",padding:"15rpx"}},{default:l((()=>[u(D,null,{default:l((()=>[u(q,{style:{height:"290rpx",width:"230rpx"},src:i.vod.vod_pic[i.vod.num],onError:k.imgerr},null,8,["src","onError"])])),_:1}),u(D,{style:{margin:"0 15rpx"}},{default:l((()=>[u(D,null,{default:l((()=>[u(D,{style:{"flex-direction":"row"}},{default:l((()=>[u(R,{style:{"font-size":"32rpx"}},{default:l((()=>[f(c(i.vod.vod_name),1)])),_:1}),i.vod.vod_remarks?(o(),e(R,{key:0,class:"vodjj"},{default:l((()=>[f("  /  ")])),_:1})):r("",!0),u(R,{class:"vodjj"},{default:l((()=>[f(c(i.vod.vod_remarks),1)])),_:1})])),_:1}),u(R,{class:"vodjj"},{default:l((()=>[f(" 导演："+c(i.vod.vod_director),1)])),_:1}),u(R,{class:"vodjj"},{default:l((()=>[f(" 主演："+c(i.vod.vod_actor),1)])),_:1}),u(R,{class:"vodjj"},{default:l((()=>[f(" 类别："+c(i.vod.vod_class),1)])),_:1}),u(R,{class:"vodjj"},{default:l((()=>[f(" 地区："+c(i.vod.vod_area)+" / 年代："+c(i.vod.vod_year),1)])),_:1})])),_:1}),u(D,{style:{"flex-direction":"row","justify-content":"space-between",width:"485rpx"}},{default:l((()=>[u(D,{class:"anniu",style:{"background-color":"#f00"},onClick:t[0]||(t[0]=a=>k.bofang(0))},{default:l((()=>[u(q,{class:"img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAjNJREFUWEe1V4tRQkEMTCoROoFKhErEStRKxErESuLsmTDL4z45gTfD8NC7y95m81OZeMxsJSLPIrIREbzjc/Ij8I3Ph6oes8fqaCEZPZChd3//8e8nAgRwAII1ABMAq6a6AMzsRURguByoqq9JwACBvXi6+6oA/NZvTvUhY3gJbMEcLrCtsXEFwDd++oH7GX/W2FmcdwXiAgAtPqnqdkR39v/EKER7AWIJADdfqeo6e3h2HTPB558BkOCAMB1GWQBY5yC+XZh7/I0BGBT/H8FNgth5hBRXFABmBsXvVHWYF+gmcNU0U+SKo6ruAwBuD8VHgmleyswQ4xElzfDqsWJmhQVoQf0HGFiPshazRQbSSSr2kBa2AADjoDMVduGuyg0BJJ03zAwsHgEAL4j7osrR0wGArWk2zhc3swiLYZ5vuKCGGfm/eyEP+x0YSAtwAgCWdvPJWYgPBNAVdYgfDDzCBYjxrqjZBfcUIagfGidXrsAAGgdkwVQBumMYgvkShpHZUkWIiharP3Vr3uDaK4kINRpoUoWokorTyYcyIVLxG2oPF6PNhBtKV5ypHY0u6Y9+KkZTLIyy5aAQRaNbwpT7gYs6fYuR1t6auxkAWCiFqdXB3grK645wjmg1pZFKu0NFFhA3pUudjdryai+fNUzdU7PNHw0mcEdqImqoPQTXzBPNHrAy2aRmvdq+XqM7bEIbwymaUeiDh1OQgEiKiTnF3BDAoo+L8TxG8+V4DmBfM93yL5Sdd8qWLziSAAAAAElFTkSuQmCC"}),u(R,{class:"text"},{default:l((()=>[f(" 播放 ")])),_:1})])),_:1}),u(D,{class:"anniu",style:{"background-color":"#007aff"},onClick:t[1]||(t[1]=a=>k.fenxiang(i.vod.vod_id))},{default:l((()=>[u(q,{class:"img",src:C}),u(R,{class:"text"},{default:l((()=>[f(" 分享 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),u(I,{ADlist:i.ADlist},null,8,["ADlist"]),u(D,{style:{padding:"0 5rpx"}},{default:l((()=>[u(D,{style:{"flex-direction":"row"}},{default:l((()=>[u(R,{class:"jjjj",onClick:t[2]||(t[2]=a=>i.jjjj=0),style:p(k.jjjcss(0))},{default:l((()=>[f(" 剧集 ")])),_:1},8,["style"]),u(R,{class:"jjjj",onClick:t[3]||(t[3]=a=>i.jjjj=1),style:p(k.jjjcss(1))},{default:l((()=>[f(" 简介 ")])),_:1},8,["style"])])),_:1}),u(D,{style:{margin:"10rpx 0"}},{default:l((()=>[v(u(D,null,{default:l((()=>[u(D,{style:{"flex-direction":"row","align-items":"center"}},{default:l((()=>[u(F,{"scroll-x":"true",style:{width:"700rpx"}},{default:l((()=>[u(D,{style:{"flex-direction":"row"}},{default:l((()=>[(o(!0),m(A,null,y(i.vod.player,((a,t)=>(o(),e(D,{onClick:a=>k.from(t),style:{"flex-direction":"row",margin:"10rpx 15rpx"}},{default:l((()=>[u(D,{style:{"flex-direction":"row"}},{default:l((()=>[u(R,{class:"ji",style:p(t==i.jqh?"border: 0.1rem #f00 solid;":"")},{default:l((()=>[f(c(a.name),1)])),_:2},1032,["style"]),u(R,{style:{"font-size":"15rpx",color:"#999"}},{default:l((()=>[f(c(a.num),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1}),u(D,null,{default:l((()=>[u(N,{type:"right",size:"22",color:"#999"})])),_:1})])),_:1}),u(D,{style:{"flex-direction":"row","flex-wrap":"wrap"}},{default:l((()=>[(o(!0),m(A,null,y(i.player,((a,t)=>(o(),e(D,{onClick:a=>k.bofang(t),style:{margin:"10rpx",padding:"15rpx","border-radius":"6rpx","background-color":"#f8f8f8"}},{default:l((()=>[u(R,{style:{"font-size":"25rpx"}},{default:l((()=>[f(c(a.name),1)])),_:2},1024)])),_:2},1032,["onClick"])))),256))])),_:1})])),_:1},512),[[j,0==i.jjjj]]),v(u(D,{style:{color:"#999",padding:"15rpx","font-size":"28rpx","line-height":"50rpx"}},{default:l((()=>[u(R,null,{default:l((()=>[f(c(i.vod.vod_content),1)])),_:1})])),_:1},512),[[j,1==i.jjjj]])])),_:1})])),_:1})])),_:1}),u(P),u(S)])),_:1})):r("",!0)}],["__scopeId","data-v-65cb1b59"]]);export{R as default};
