"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{6983:function(t,e,n){n.d(e,{Z:function(){return b}});var s=n(7462),r=n(3366),a=n(4578);function i(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=n(2791),p=n(4164),u=!1,l=n(5545),c=function(t){return t.scrollTop},d="unmounted",f="exited",E="entering",h="entered",m="exiting",x=function(t){function e(e,n){var s;s=t.call(this,e,n)||this;var r,a=n&&!n.isMounting?e.enter:e.appear;return s.appearStatus=null,e.in?a?(r=f,s.appearStatus=E):r=h:r=e.unmountOnExit||e.mountOnEnter?d:f,s.state={status:r},s.nextCallback=null,s}(0,a.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===d?{status:f}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==E&&n!==h&&(e=E):n!==E&&n!==h||(e=m)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,s=this.props.timeout;return t=e=n=s,null!=s&&"number"!==typeof s&&(t=s.exit,e=s.enter,n=void 0!==s.appear?s.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){if(void 0===t&&(t=!1),null!==e)if(this.cancelNextCallback(),e===E){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:p.findDOMNode(this);n&&c(n)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===f&&this.setState({status:d})},n.performEnter=function(t){var e=this,n=this.props.enter,s=this.context?this.context.isMounting:t,r=this.props.nodeRef?[s]:[p.findDOMNode(this),s],a=r[0],i=r[1],o=this.getTimeouts(),l=s?o.appear:o.enter;!t&&!n||u?this.safeSetState({status:h},(function(){e.props.onEntered(a)})):(this.props.onEnter(a,i),this.safeSetState({status:E},(function(){e.props.onEntering(a,i),e.onTransitionEnd(l,(function(){e.safeSetState({status:h},(function(){e.props.onEntered(a,i)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:p.findDOMNode(this);e&&!u?(this.props.onExit(s),this.safeSetState({status:m},(function(){t.props.onExiting(s),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(s)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:p.findDOMNode(this),s=null==t&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=r[0],i=r[1];this.props.addEndListener(a,i)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===d)return null;var e=this.props,n=e.children,s=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,r.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(l.Z.Provider,{value:null},"function"===typeof n?n(t,s):o.cloneElement(o.Children.only(n),s))},e}(o.Component);function v(){}x.contextType=l.Z,x.propTypes={},x.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:v,onEntering:v,onEntered:v,onExit:v,onExiting:v,onExited:v},x.UNMOUNTED=d,x.EXITED=f,x.ENTERING=E,x.ENTERED=h,x.EXITING=m;var C=x,g=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.remove(s):"string"===typeof n.className?n.className=i(n.className,s):n.setAttribute("class",i(n.className&&n.className.baseVal||"",s)));var n,s}))},N=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var s=e.resolveArguments(t,n),r=s[0],a=s[1];e.removeClasses(r,"exit"),e.addClass(r,a?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var s=e.resolveArguments(t,n),r=s[0],a=s[1]?"appear":"enter";e.addClass(r,a,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var s=e.resolveArguments(t,n),r=s[0],a=s[1]?"appear":"enter";e.removeClasses(r,a),e.addClass(r,a,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,s="string"===typeof n,r=s?""+(s&&n?n+"-":"")+t:n[t];return{baseClassName:r,activeClassName:s?r+"-active":n[t+"Active"],doneClassName:s?r+"-done":n[t+"Done"]}},e}(0,a.Z)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var s=this.getClassNames(e)[n+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&r&&(s+=" "+r),"active"===n&&t&&c(t),s&&(this.appliedClasses[e][n]=s,function(t,e){t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.add(s):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,s)||("string"===typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(t,s))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],s=n.base,r=n.active,a=n.done;this.appliedClasses[e]={},s&&g(t,s),r&&g(t,r),a&&g(t,a)},n.render=function(){var t=this.props,e=(t.classNames,(0,r.Z)(t,["classNames"]));return o.createElement(C,(0,s.Z)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(o.Component);N.defaultProps={classNames:""},N.propTypes={};var b=N},5545:function(t,e,n){var s=n(2791);e.Z=s.createContext(null)},7462:function(t,e,n){function s(){return s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},s.apply(this,arguments)}n.d(e,{Z:function(){return s}})},4578:function(t,e,n){n.d(e,{Z:function(){return r}});var s=n(9611);function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,(0,s.Z)(t,e)}},3366:function(t,e,n){function s(t,e){if(null==t)return{};var n,s,r={},a=Object.keys(t);for(s=0;s<a.length;s++)n=a[s],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return s}})}}]);
//# sourceMappingURL=983.c7847151.chunk.js.map