(()=>{"use strict";var e={2026:(e,t,n)=>{n(6992),n(8674),n(9601),n(7727);var r=n(5010),a=n(3396);function s(e,t,n,r,s,o){var d=(0,a.up)("Header"),i=(0,a.up)("AddTask"),l=(0,a.up)("Tasks");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(d,{title:"CRUD-VUE",onHandleAddTaskForm:o.handleAddTaskForm,showAddTaskForm:s.showAddTaskForm},null,8,["onHandleAddTaskForm","showAddTaskForm"]),(0,a.Wm)(i,{onHandleAddTask:o.handleAddTask,showAddTaskForm:s.showAddTaskForm},null,8,["onHandleAddTask","showAddTaskForm"]),(0,a.Wm)(l,{tasks:s.tasks,onDeleteTask:o.deleteTask,onToggleRemainder:o.toggleRemainder},null,8,["tasks","onDeleteTask","onToggleRemainder"])],64)}var o=n(9584),d=n(5082),i=(n(7327),n(1539),n(1249),n(2222),n(7139)),l={class:"header"},u={class:"header__logo"},c={class:"header__nav--links"};function m(e,t,n,r,s,o){var d=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("header",l,[(0,a._)("div",u,(0,i.zw)(n.title),1),(0,a._)("div",c,[(0,a.Wm)(d,{btnText:n.showAddTaskForm?"Close Task Form":"Add Task",btnBgColor:"transparent",onHandleAddTaskForm:t[0]||(t[0]=function(t){return e.$emit("handleAddTaskForm")})},null,8,["btnText"])])])}function k(e,t,n,r,s,o){return(0,a.wg)(),(0,a.iD)("button",{onClick:t[0]||(t[0]=function(e){return o.handleAddTask()}),class:"button"},(0,i.zw)(n.btnText),1)}const h={name:"Button",props:{btnText:String,btnBgColor:String},methods:{handleAddTask:function(){this.$emit("handleAddTaskForm")}}};var p=n(89);const f=(0,p.Z)(h,[["render",k]]),T=f,v={name:"Header",props:{title:String,showAddTaskForm:Boolean},components:{Button:T}},_=(0,p.Z)(v,[["render",m],["__scopeId","data-v-c110f1aa"]]),g=_;var A={class:"tasks"},w=(0,a._)("h2",null,"Tasks List",-1),b={key:1,class:"no__results"};function y(e,t,n,r,s,o){var d=(0,a.up)("Task");return(0,a.wg)(),(0,a.iD)("div",A,[w,n.tasks.length>0?((0,a.wg)(!0),(0,a.iD)(a.HY,{key:0},(0,a.Ko)(n.tasks,(function(t){return(0,a.wg)(),(0,a.iD)("div",{key:t.id,class:"tasks__wrapper"},[(0,a.Wm)(d,{onDeleteTask:function(n){return e.$emit("deleteTask",t.id)},onToggleRemainder:function(n){return e.$emit("toggleRemainder",t.id)},task:t},null,8,["onDeleteTask","onToggleRemainder","task"])])})),128)):((0,a.wg)(),(0,a.iD)("h1",b,"NO TASKS TO DISPLAY !"))])}var F={class:"task__title"},D={class:"task__operations"};function C(e,t,n,r,s,o){return(0,a.wg)(),(0,a.iD)("div",{class:(0,i.C_)(["task",n.task.reminder?"reminder":""]),onDblclick:t[1]||(t[1]=function(t){return e.$emit("toggleRemainder",n.task.id)})},[(0,a._)("div",F,[(0,a._)("h2",null,(0,i.zw)(n.task.title),1),(0,a._)("span",null,(0,i.zw)(n.task.date),1)]),(0,a._)("div",D,[(0,a._)("h1",{onClick:t[0]||(t[0]=function(t){return e.$emit("deleteTask",n.task.id)})},"X")])],34)}const S={name:"Task",props:{task:Object},methods:{}},O=(0,p.Z)(S,[["render",C],["__scopeId","data-v-4b4d6a38"]]),R=O,j={name:"Tasks",props:{tasks:Array},components:{Task:R},emits:["deleteTask","toggleRemainder"]},x=(0,p.Z)(j,[["render",y]]),H=x;var Z=function(e){return(0,a.dD)("data-v-346e5674"),e=e(),(0,a.Cn)(),e},B=Z((function(){return(0,a._)("h2",null,"Add Task",-1)})),$={class:"form-control"},I=Z((function(){return(0,a._)("label",null,"Task",-1)})),U={class:"form-control"},W=Z((function(){return(0,a._)("label",null,"Day & Time",-1)})),z={class:"form-control form-control-check"},M=Z((function(){return(0,a._)("label",null,"Set Reminder",-1)})),P=Z((function(){return(0,a._)("div",{class:"form-control"},[(0,a._)("button",{type:"submit",class:"button"},"Submit")],-1)}));function V(e,t,n,s,o,d){return n.showAddTaskForm?((0,a.wg)(),(0,a.iD)("form",{key:0,onSubmit:t[3]||(t[3]=function(){return d.handleSubmit&&d.handleSubmit.apply(d,arguments)}),class:"tasks form"},[B,(0,a._)("div",$,[I,(0,a.wy)((0,a._)("input",{type:"text",name:"title","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.title=e}),placeholder:"Add Task"},null,512),[[r.nr,o.title]])]),(0,a._)("div",U,[W,(0,a.wy)((0,a._)("input",{type:"text",name:"date","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.date=e}),placeholder:"Add Day & Time"},null,512),[[r.nr,o.date]])]),(0,a._)("div",z,[M,(0,a.wy)((0,a._)("input",{type:"checkbox",name:"reminder","onUpdate:modelValue":t[2]||(t[2]=function(e){return o.reminder=e})},null,512),[[r.e8,o.reminder]])]),P],32)):(0,a.kq)("",!0)}const Y={name:"Add Task",data:function(){return{title:"",date:"",reminder:!1}},props:{showAddTaskForm:Boolean},methods:{handleSubmit:function(e){if(e.preventDefault(),this.title){var t={id:Math.round(1e6*Math.random(0)),title:this.title,date:this.date,reminder:this.reminder};this.$emit("handleAddTask",t),this.title="",this.date="",this.reminder=!1}else alert("Please enter a title for the task!")}}},J=(0,p.Z)(Y,[["render",V],["__scopeId","data-v-346e5674"]]),E=J;var K=[{id:1,title:"Complete the vue js cerash course",date:"Monday feb 20",reminder:!1},{id:2,title:"Complete the Node js crash course",date:"Tuesday Jan 21",reminder:!0},{id:3,title:"Complete the Typescript craash course",date:"FRIDAY Jan 22",reminder:!1},{id:4,title:"Complete the CSS crash course",date:"Sunday Jan 21",reminder:!0}];const L={name:"App",components:{Header:g,Tasks:H,AddTask:E},data:function(){return{tasks:[],showAddTaskForm:!1}},methods:{deleteTask:function(e){this.tasks=this.tasks.filter((function(t){return t.id!==e}))},toggleRemainder:function(e){this.tasks=this.tasks.map((function(t){return t.id===e?(0,d.Z)((0,d.Z)({},t),{},{reminder:!t.reminder}):t}))},handleAddTask:function(e){this.tasks=[].concat((0,o.Z)(this.tasks),[e])},handleAddTaskForm:function(){this.showAddTaskForm=!this.showAddTaskForm}},created:function(){this.tasks=K}},N=(0,p.Z)(L,[["render",s]]),q=N;(0,r.ri)(q).mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.m=e,(()=>{var e=[];n.O=(t,r,a,s)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){for(var[r,a,s]=e[u],d=!0,i=0;i<r.length;i++)(!1&s||o>=s)&&Object.keys(n.O).every((e=>n.O[e](r[i])))?r.splice(i--,1):(d=!1,s<o&&(o=s));if(d){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,a,s]}})(),(()=>{n.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(t,{a:t}),t}})(),(()=>{n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={143:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var a,s,[o,d,i]=r,l=0;if(o.some((t=>0!==e[t]))){for(a in d)n.o(d,a)&&(n.m[a]=d[a]);if(i)var u=i(n)}for(t&&t(r);l<o.length;l++)s=o[l],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(u)},r=self["webpackChunkcrud_practice_first_project"]=self["webpackChunkcrud_practice_first_project"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[998],(()=>n(2026)));r=n.O(r)})();
//# sourceMappingURL=app.6cc5dddf.js.map