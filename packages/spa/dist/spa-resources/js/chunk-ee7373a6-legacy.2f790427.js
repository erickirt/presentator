(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ee7373a6"],{"11b2":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"slotWrapper"},[t._t("default")],2)])},i=[],n={name:"relocator",props:{container:{default:"body"}},computed:{containerElem:function(){return"string"===typeof this.container?document.querySelector(this.container):this.container}},mounted:function(){var t=this;if(this.containerElem){var e=this.$refs.slotWrapper;e.parentNode.removeChild(e),this.containerElem.appendChild(e),this.$once("hook:beforeDestroy",function(){e&&(e.parentNode.removeChild(e),t.$el.appendChild(e))})}}},r=n,o=s("2877"),c=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},"2c9c":function(t,e,s){"use strict";var a=s("5897"),i=s.n(a);i.a},3905:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"popupContainer",staticClass:"popup",class:{active:t.isActive,"is-closing":t.isClosing},attrs:{tabindex:"-1"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:e.target!==e.currentTarget?null:void(!t.closeOnEsc||t.close())}}},[s("div",{staticClass:"popup-overlay",on:{click:function(e){e.preventDefault(),!t.closeOnOverlay||t.close()}}}),s("div",{staticClass:"popup-panel"},[t.closeBtn?s("span",{staticClass:"popup-close-handle popup-close",on:{click:function(e){return e.preventDefault(),t.close()}}}):t._e(),s("div",{staticClass:"popup-header"},[t._t("header")],2),s("div",{staticClass:"popup-content"},[t._t("content")],2),s("div",{staticClass:"popup-footer"},[t._t("footer")],2)])])},i=[],n={name:"popup",props:{closeOnEsc:{type:Boolean,default:!0},closeOnOverlay:{type:Boolean,default:!0},closeBtn:{type:Boolean,default:!0}},data:function(){return{isActive:!1,isClosing:!1}},methods:{open:function(){var t=this;this.isActive=!0,this.isClosing=!1,this.$nextTick(function(){t.$refs.popupContainer.focus()}),document.body.classList.add("popup-active"),this.$nextTick(function(){var e=t.$el.querySelector("form input");e&&e.focus()})},close:function(){var t=this;this.isActive&&(this.isClosing=!0,document.body.classList.remove("popup-active"),this.closingTimeoutId&&clearTimeout(this.closingTimeoutId),this.closingTimeoutId=setTimeout(function(){t.isActive=!1,t.isClosing=!1},300))}}},r=n,o=s("2877"),c=Object(o["a"])(r,a,i,!1,null,null,null);e["a"]=c.exports},"438c":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"app-footer"},[s("div",{staticClass:"info"},[s("div",{staticClass:"info-item"},[t._v("Presentator v2.0.0")]),s("a",{staticClass:"info-item",attrs:{href:t.$getAppConfig("VUE_APP_REPO_URL"),target:"_blank",rel:"noopener"}},[s("i",{staticClass:"fe fe-github"}),s("span",{staticClass:"txt"},[t._v("Github")])]),t.loggedUser&&t.loggedUser.id?s("div",{staticClass:"info-item handle",on:{click:function(e){return e.preventDefault(),t.openFeedbackPopup()}}},[s("i",{staticClass:"fe fe-life-buoy"}),s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])]):t._e(),s("div",{staticClass:"info-item"},[s("languages-select")],1)]),!(t.$getAppConfig("VUE_APP_SHOW_CREDITS")<<0)?t._e():s("div",{staticClass:"credits"},[s("i18n",{attrs:{path:"Crafted by {author}"}},[s("a",{attrs:{place:"author",href:"https://gani.bg",target:"_blank",rel:"noopener"}},[t._v("Gani")])])],1),s("relocator",[s("feedback-popup",{ref:"feedbackPopup"})],1)],1)},i=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),r=s("2f62"),o=s("11b2"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{on:{submit:function(e){return e.preventDefault(),t.submitForm()}}},[s("popup",{ref:"popup",staticClass:"popup-sm",scopedSlots:t._u([{key:"header",fn:function(){return[s("h4",{staticClass:"title"},[t._v(t._s(t.$t("Help us improve Presentator")))])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"alert alert-light-border txt-center m-b-small"},[s("p",[t._v("\n                    "+t._s(t.$t("Found a bug or have a feature request?"))+" "),s("br"),s("i18n",{attrs:{path:"Fill the form below OR {issuesLink}."}},[s("a",{attrs:{place:"issuesLink",href:t.$getAppConfig("VUE_APP_ISSUES_URL"),target:"_blank",rel:"noopener"}},[t._v(t._s(t.$t("create a GitHub issue")))])])],1)]),s("form-field",{staticClass:"required",attrs:{name:"message"}},[s("label",{attrs:{for:"feedback_message"}},[t._v(t._s(t.$t("Message")))]),s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.message,expression:"message",modifiers:{trim:!0}}],attrs:{id:"feedback_message",required:""},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])]},proxy:!0},{key:"footer",fn:function(){return[s("button",{staticClass:"btn btn-light-border",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.close()}}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Cancel")))])]),s("button",{staticClass:"btn btn-primary btn-cons btn-loader",class:{"btn-loader-active":t.isProcessing},attrs:{type:"submit"}},[s("span",{staticClass:"txt"},[t._v(t._s(t.$t("Send feedback")))])])]},proxy:!0}])})],1)},l=[],u=s("f744"),p=s("3905"),d={name:"feedback-popup",components:{popup:p["a"]},data:function(){return{isProcessing:!1,message:""}},methods:{open:function(){this.resetForm(),this.$refs.popup.open(),this.$emit("open")},close:function(){this.$refs.popup.close(),this.$emit("close")},resetForm:function(){this.message=""},submitForm:function(){var t=this;this.isProcessing||(this.isProcessing=!0,u["a"].Users.sendFeedback(this.message).then(function(e){t.$toast(t.$t("Thank you for the feedback!")),t.close(),t.resetForm()}).catch(function(e){t.$errResponseHandler(e)}).finally(function(){t.isProcessing=!1}))}}},f=d,m=s("2877"),v=Object(m["a"])(f,c,l,!1,null,null,null),g=v.exports,h=s("f7ef");function b(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function C(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?b(s,!0).forEach(function(e){Object(n["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):b(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var _={name:"app-footer",components:{relocator:o["a"],"feedback-popup":g,"languages-select":h["a"]},computed:C({},Object(r["d"])({loggedUser:function(t){return t.user.user}})),methods:{openFeedbackPopup:function(){this.$refs.feedbackPopup&&this.$refs.feedbackPopup.open()}}},y=_,O=Object(m["a"])(y,a,i,!1,null,null,null);e["a"]=O.exports},"4eee":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"app-sidebar"},[a("div",{staticClass:"app-sidebar-section app-sidebar-header"},[a("router-link",{staticClass:"logo",attrs:{to:{name:"home"},title:"Presentator"}},[a("img",{staticClass:"img",attrs:{src:s("81fb"),alt:"Presentator logo",width:"41",height:"53"}})])],1),a("div",{staticClass:"app-sidebar-section app-sidebar-content"},[a("nav",{staticClass:"main-menu"},[t._t("default")],2)]),a("div",{staticClass:"app-sidebar-section app-sidebar-footer"},[a("nav",{staticClass:"meta-menu m-b-small"},[a("div",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Notifications"),expression:"$t('Notifications')",modifiers:{right:!0}}],staticClass:"menu-item",class:{active:t.$refs.notificationsPanel&&t.$refs.notificationsPanel.isActive},on:{click:function(e){e.preventDefault(),t.$refs.notificationsPanel&&t.$refs.notificationsPanel.toggle()}}},[t.unreadComments.length?a("span",{staticClass:"beacon beacon-danger"}):t._e(),a("i",{staticClass:"fe fe-bell"})])]),t.loggedUser&&t.loggedUser.id?a("div",{staticClass:"user-profile"},[a("figure",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.loggedUser.identifier,expression:"loggedUser.identifier",modifiers:{right:!0}}],staticClass:"avatar"},[t.loggedUser.getAvatar("small")?a("img",{attrs:{src:t.loggedUser.getAvatar("small"),alt:"User avatar"}}):a("i",{staticClass:"fe fe-user"})]),a("toggler",{staticClass:"dropdown dropdown-sm"},[a("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"user",params:{userId:t.loggedUser.id}}}},[a("i",{staticClass:"fe fe-settings"}),a("span",{staticClass:"txt"},[t._v(t._s(t.$t("Settings")))])]),a("hr"),a("div",{staticClass:"dropdown-item link-danger",on:{click:function(e){return e.preventDefault(),t.logout()}}},[a("i",{staticClass:"fe fe-log-out"}),a("span",{staticClass:"txt"},[t._v(t._s(t.$t("Sign out")))])])],1)],1):t._e()]),a("notifications-panel",{ref:"notificationsPanel"})],1)},i=[],n=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),r=s("2f62"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"sidebarPanel"}},[t.isActive?s("div",{directives:[{name:"shortcut",rawName:"v-shortcut.27",value:t.hide,expression:"hide",modifiers:{27:!0}},{name:"outside-click",rawName:"v-outside-click",value:{handler:t.hide,status:t.isActive},expression:"{\n            'handler': hide,\n            'status':  isActive,\n        }"}],staticClass:"app-sidebar-panel"},[s("div",{staticClass:"app-sidebar-section app-sidebar-header"},[s("h4",{staticClass:"title"},[t._v(t._s(t.$t("Notifications")))]),s("div",{staticClass:"list-ctrls"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.right",value:t.$t("Hide panel"),expression:"$t('Hide panel')",modifiers:{right:!0}}],staticClass:"list-ctrl-item",on:{click:function(e){return e.preventDefault(),t.hide(e)}}},[s("i",{staticClass:"fe fe-x"})])]),s("div",{staticClass:"clearfix m-b-small"}),s("div",{staticClass:"form-group form-group-sm"},[Object.keys(t.projectsList).length?s("select",{directives:[{name:"model",rawName:"v-model",value:t.activeProjectId,expression:"activeProjectId"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.activeProjectId=e.target.multiple?s:s[0]}}},[s("option",{domProps:{value:null}},[t._v(t._s(t.$t("All projects")))]),t._l(t.projectsList,function(e,a){return s("option",{key:"filter_"+a,domProps:{value:a}},[t._v("\n                        "+t._s(e)+"\n                    ")])})],2):t._e()]),t.activeUnreadComments.length?s("div",{staticClass:"block txt-right m-t-5"},[s("small",{staticClass:"link-primary",on:{click:function(e){return e.preventDefault(),t.markAllActiveAsRead(e)}}},[t._v(t._s(t.$t("Mark all as read")))])]):t._e()]),s("div",{staticClass:"app-sidebar-section app-sidebar-content"},[s("div",{staticClass:"block txt-center txt-hint"},[t.isLoading?s("span",{staticClass:"loader"}):t._e(),t.isLoading||t.activeUnreadComments.length?t._e():s("p",[t._v(t._s(t.$t("No unread comments.")))])]),!t.isLoading&&t.activeUnreadComments.length?s("div",{staticClass:"comments-list"},t._l(t.activeUnreadComments,function(e){return s("div",{key:"notification_"+e.id,staticClass:"comment-list-item"},[s("figure",{staticClass:"avatar"},[e.user&&e.user.getAvatar("small")?s("img",{attrs:{src:e.user.getAvatar("small"),alt:t.$t("User avatar")}}):s("i",{staticClass:"fe fe-user"})]),s("div",{staticClass:"content"},[s("small",[s("span",{staticClass:"name"},[t._v(t._s(e.user?e.user.identifier:e.from))]),s("span",{staticClass:"date txt-hint m-l-5"},[t._v(t._s(e.createdAtFromNow))])]),s("div",{staticClass:"message"},[t._v(t._s(e.message))]),e.metaData?s("div",{staticClass:"meta"},[e.metaData.screenTitle?s("div",{staticClass:"meta-item",attrs:{title:e.metaData.screenTitle}},[s("span",{staticClass:"txt screen-title"},[t._v(t._s(e.metaData.screenTitle))])]):t._e(),s("router-link",{staticClass:"meta-item link-primary",attrs:{to:{name:"screen",params:{projectId:e.metaData.projectId,prototypeId:e.metaData.prototypeId,screenId:e.metaData.screenId},query:{mode:"comments",commentId:e.replyTo||e.id}}}},[s("span",{staticClass:"txt"},[t._v("Details")])])],1):t._e()]),s("div",{staticClass:"list-ctrls"},[s("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top",value:t.$t("Mark as read"),expression:"$t('Mark as read')",modifiers:{top:!0}}],staticClass:"list-ctrl-item ctrl-success",on:{click:function(s){return s.preventDefault(),t.markAsRead(e.id)}}},[s("i",{staticClass:"fe fe-check"})])])])}),0):t._e()])]):t._e()])},c=[];s("f744"),s("dd93"),s("46a0");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(s,!0).forEach(function(e){Object(n["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var p={name:"notifications-panel",data:function(){return{isActive:!1,isLoading:!1,activeProjectId:null}},computed:u({},Object(r["d"])({unreadComments:function(t){return t.notifications.unreadComments}}),{},Object(r["c"])({getUnreadCommentsForProject:"notifications/getUnreadCommentsForProject"}),{projectsList:function(){var t={};for(var e in this.unreadComments)this.unreadComments[e].metaData&&(t[this.unreadComments[e].metaData.projectId]=this.unreadComments[e].metaData.projectTitle||"N/A");return this.activeProjectId&&!t[this.activeProjectId]&&(this.activeProjectId=null),t},activeUnreadComments:function(){return this.activeProjectId?this.getUnreadCommentsForProject(this.activeProjectId):this.unreadComments}}),methods:u({},Object(r["b"])({loadUnreadComments:"notifications/loadUnreadComments",markAsRead:"notifications/markAsRead"}),{hide:function(){this.isActive=!1},show:function(){var t=this;this.isActive=!0,this.activeProjectId=null,this.isLoading=!0,this.loadUnreadComments().finally(function(){t.isLoading=!1})},toggle:function(){this.isActive?this.hide():this.show()},markAllActiveAsRead:function(){for(var t in this.activeUnreadComments)this.markAsRead(this.activeUnreadComments[t].id)}})},d=p,f=(s("2c9c"),s("2877")),m=Object(f["a"])(d,o,c,!1,null,"08d4b8bf",null),v=m.exports;function g(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function h(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?g(s,!0).forEach(function(e){Object(n["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):g(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var b={name:"app-sidebar",components:{"notifications-panel":v},computed:h({},Object(r["d"])({loggedUser:function(t){return t.user.user},unreadComments:function(t){return t.notifications.unreadComments}})),methods:{logout:function(){this.$logout(),this.$toast(this.$t("You have been signed out successfully."))}}},C=b,_=Object(f["a"])(C,a,i,!1,null,null,null);e["a"]=_.exports},5897:function(t,e,s){},"81fb":function(t,e,s){t.exports=s.p+"spa-resources/img/logogram.a11cb759.svg"},f7ef:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"languages-select",class:{loading:t.isChanging}},[s("div",{staticClass:"selected-language"},[s("span",{staticClass:"txt language-title"},[t._v(t._s(t.activeLanguageTitle))]),t._v("\n        ("),s("span",{staticClass:"txt language-code"},[t._v(t._s(t.activeLanguageCode))]),t._v(")\n    ")]),s("toggler",{staticClass:"dropdown dropdown-sm"},t._l(t.languages,function(e,a){return s("div",{key:"language_"+a,staticClass:"dropdown-item",class:{active:t.activeLanguageCode==a},on:{click:function(e){return e.preventDefault(),t.changeLanguage(a)}}},[s("small",{staticClass:"label language-code m-r-5",class:t.activeLanguageCode==a?"label-transp-primary":"label-light-border"},[t._v(t._s(a))]),s("span",{staticClass:"txt language-title"},[t._v(t._s(e))])])}),0)],1)},i=[],n=s("9225"),r={name:"languages-select",data:function(){return{isChanging:!1,languages:Object.assign({},n["c"])}},watch:{"$i18n.locale":function(t,e){"function"===typeof document._titleFunc&&this.$setDocumentTitle(document._titleFunc)}},computed:{activeLanguageCode:function(){return this.$i18n.locale},activeLanguageTitle:function(){return this.languages[this.activeLanguageCode]}},methods:{changeLanguage:function(t){var e=this;this.isChanging=!0,Object(n["a"])(t).finally(function(){e.isChanging=!1})}}},o=r,c=s("2877"),l=Object(c["a"])(o,a,i,!1,null,null,null);e["a"]=l.exports}}]);