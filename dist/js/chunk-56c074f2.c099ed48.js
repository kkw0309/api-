(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56c074f2"],{"2d4f":function(e,t,i){"use strict";var s=i("7ecb"),n=i.n(s);n.a},"7ecb":function(e,t,i){},a9e32:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),i("div",[i("div",{staticClass:"rigister_phone"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],attrs:{type:"number",name:"",id:"",placeholder:"请输入手机号"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}}),i("button",{class:this.isClick?"getCode":"getGrey",on:{click:e.onClick}},[e._v(e._s(e.codeText))])]),i("div",{staticClass:"rigister_phone"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],attrs:{type:"number",name:"",id:"",placeholder:"请输入验证码"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}})]),i("div",{staticClass:"rigister_phone"},[i("input",{attrs:{type:"password",name:"",id:"",placeholder:"*未注册的手机号将自动注册"}}),i("button",{staticStyle:{color:"grey"},on:{click:e.userPassword}},[e._v("使用密码登录")])])]),i("div",{staticClass:"rigister_confirm"},[i("button",{on:{click:e.toLogin}},[e._v("登录")])])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"rigister_title"},[s("div",{staticClass:"rigister_img"},[s("img",{attrs:{src:i("3830")}})])])}],o=(i("96cf"),i("1da1")),a={data:function(){return{user:"",code:"",id:"",time:60,isClick:!0,codeText:"获取验证码"}},methods:{onClick:function(){var e=this;this.isClick&&this.$http.post("/api/app/smsCode",{mobile:this.user,sms_type:"login"}).then((function(t){window.console.log(t.data),e.id=setInterval((function(){e.time--,e.isClick=!1,e.codeText="发送验证码".concat(e.time),e.time<=0&&(e.time=60,e.isClick=!0,e.codeText="获取验证码",clearInterval(e.id))}),1e3)}))},toLogin:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("/api/app/login",{mobile:e.user,sms_code:e.code,type:2,client:1}).then((function(t){window.console.log(t.data),window.localStorage.setItem("adminToken",t.data.data.remember_token),window.localStorage.setItem("userid",t.data.data.id),2==t.data.data.is_new?e.$router.push("/mymine"):1==t.data.data.is_new&&e.$router.push({path:"/setpassword",query:{users:e.user,codes:e.code}})}));case 2:case"end":return t.stop()}}),t)})))()},userPassword:function(){this.$router.push("/getpasswork")}},computed:{},mounted:function(){}},r=a,c=(i("2d4f"),i("2877")),d=Object(c["a"])(r,s,n,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-56c074f2.c099ed48.js.map