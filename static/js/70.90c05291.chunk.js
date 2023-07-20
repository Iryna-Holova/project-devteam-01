"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[70],{715:function(n,i,e){e.d(i,{Z:function(){return s}});e(2791);var t,r=e(9126),o=e(168),a=e(6487).ZP.div(t||(t=(0,o.Z)(["\n  position: relative;\n  margin-top: 114px;\n  color: var(--color-text-main);\n\n  & h2 {\n    color: var(--color-text-main);\n    font-weight: 600;\n    font-size: 28px;\n    line-height: 28px;\n    letter-spacing: -0.56px;\n    &.transparent {\n      color: transparent;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 136px;\n    & h2 {\n      font-size: 32px;\n      line-height: 32px;\n      letter-spacing: -0.64px;\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 164px;\n    & h2 {\n      font-size: 44px;\n      line-height: 44px;\n      letter-spacing: -0.88px;\n    }\n  }\n\n  & svg {\n    position: absolute;\n\n    &.circle {\n      left: 231px;\n      width: 6px;\n      height: 6px;\n      color: var(--color-text-main);\n      @media screen and (min-width: 768px) {\n        display: none;\n      }\n    }\n\n    &.square {\n      rotate: -25deg;\n      width: 8px;\n      height: 8px;\n      border-radius: 3px;\n      color: var(--color-accent);\n      @media screen and (min-width: 768px) {\n        width: 12px;\n        height: 12px;\n      }\n    }\n\n    &.square.left {\n      left: 104px;\n      bottom: 50px;\n      @media screen and (min-width: 768px) {\n        left: 187px;\n        bottom: 64px;\n      }\n      @media screen and (min-width: 1440px) {\n        left: 228px;\n        bottom: 72px;\n      }\n    }\n\n    &.square.right {\n      right: 0;\n      bottom: 23px;\n      @media screen and (min-width: 768px) {\n        right: -9px;\n        bottom: 51px;\n      }\n      @media screen and (min-width: 1440px) {\n        right: 71px;\n        bottom: 59px;\n      }\n    }\n\n    &.square.center {\n      display: none;\n      color: var(--color-text-main);\n      @media screen and (min-width: 768px) {\n        display: block;\n        left: 405px;\n        bottom: -3px;\n      }\n      @media screen and (min-width: 1440px) {\n        left: 707px;\n        bottom: -8px;\n      }\n    }\n  }\n"]))),p=e(184),s=function(n){var i=n.className,e=n.children;return(0,p.jsxs)(a,{className:"container",children:[(0,p.jsx)("h2",{className:i,children:e}),(0,p.jsx)(r.rJz,{className:"circle"}),(0,p.jsx)(r.AhU,{className:"square left"}),(0,p.jsx)(r.AhU,{className:"square right"}),(0,p.jsx)(r.AhU,{className:"square center"})]})}},9593:function(n,i,e){e.d(i,{Z:function(){return u}});e(2791);var t,r,o,a,p=e(1358),s=e(168),c=e(6487),l=e(7692),d=c.ZP.ul(t||(t=(0,s.Z)(["\n  position: relative;\n  z-index: 2;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px 60px;\n  background: var(--color-main);\n  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);\n  border-radius: 26px;\n  margin-top:40px;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  @media screen and (min-width: 768px) {\n    padding: 14px 72px;\n    margin-top:50px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top:50px;\n  }\n"]))),x=c.ZP.li(r||(r=(0,s.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-size: 12px;\n  line-height: calc(18 / 12);\n  color: ",";\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 27px;\n  height: 27px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n  user-select: none;\n  &:not(:last-of-type) {\n    margin-right: 18px;\n  }\n\n  &:last-of-type {\n    margin-right: 0;\n  }\n  @media screen and (min-width: 768px) {\n    &:not(:last-of-type) {\n      margin-right: 24px;\n    }\n  \n    &:last-of-type {\n      margin-right: 0;\n    }\n  }\n  @media screen and (min-width: 1440px) {\n    &:not(:last-of-type) {\n      margin-right: 24px;\n    }\n  \n    &:last-of-type {\n      margin-right: 0;\n    }\n  }\n"])),(function(n){return"true"===n.$active?"var(--color-icons)":"#656565"}),(function(n){return"true"===n.$active?"var(--color-accent-secondary)":"var(--color-main)"})),h=(0,c.ZP)(l.gbs)(o||(o=(0,s.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 17px;\n  transform: translate(0, -50%);\n  margin-right: 13px;\n  cursor: pointer;\n  fill:var(--color-start-bg);\n"]))),m=(0,c.ZP)(l.lU2)(a||(a=(0,s.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 17px;\n  transform: translate(0, -50%);\n  margin-left: -5px;\n  cursor: pointer;\n  fill:var(--color-start-bg);\n"]))),g=e(184),u=function(n){for(var i=n.totalPages,e=n.currentPage,t=n.onClick,r=(n.scrollId,[]),o=1;o<=i;o++)r.push(o);var a=e>2?e-2:1,s=a+5-1;s>i&&(a=(s=i)-5+1)<1&&(a=1);var c=r.slice(a-1,s),l=function(n){e!==n&&(t(n),(0,p.Z)())},u=1===e,f=e===i;return(0,g.jsxs)(d,{children:[(0,g.jsx)(h,{size:30,onClick:function(){e>1&&(t(e-1),(0,p.Z)())},disabled:u,style:{opacity:u?.5:1}}),c.map((function(n){return(0,g.jsx)(x,{$active:e===n?"true":"false",onClick:function(){l(n)},children:n},n)})),(0,g.jsx)(m,{size:30,onClick:function(){e<i&&(t(e+1),(0,p.Z)())},disabled:f,style:{opacity:f?.5:1}})]})}},8835:function(n,i,e){e.d(i,{A:function(){return z}});e(2791);var t,r,o,a,p,s,c,l=e(7689),d=e(3853),x=e(9126),h=e(3524),m=e(1358),g=e(168),u=e(6487),f=u.ZP.ul(t||(t=(0,g.Z)(["\n  margin-top: 50px;\n  margin-bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  @media (min-width: 768px) {\n    margin-top: 100px;\n    margin-bottom: 50px;\n    gap: 40px;\n  }\n  @media (min-width: 1440px) {\n    gap: 50px;\n  }\n"]))),v=u.ZP.li(r||(r=(0,g.Z)(["\n  background-color: var(--color-secondary);\n  display: flex;\n  padding: 14px 9px;\n  border-radius: 8px;\n  gap: 14px;\n\n  @media (min-width: 768px) {\n    padding: 28px 24px;\n    gap: 24px;\n  }\n  @media (min-width: 1440px) {\n    padding: 40px 40px;\n    gap: 54px;\n  }\n\n  > img {\n    object-fit: cover;\n    width: 124px;\n    height: 124px;\n    border-radius: 8px;\n\n    @media (min-width: 768px) {\n      width: 228px;\n      height: 232px;\n    }\n    @media (min-width: 1440px) {\n      width: 318px;\n      height: 324px;\n    }\n  }\n"]))),w=u.ZP.div(o||(o=(0,g.Z)(["\n  position: relative;\n  border-radius: 8px;\n  background-color: var(--color-placeholder);\n  min-width: 124px;\n  min-height: 124px;\n\n  @media (min-width: 768px) {\n    min-width: 228px;\n    min-height: 232px;\n  }\n\n  @media (min-width: 1440px) {\n    min-width: 318px;\n    min-height: 324px;\n  }\n\n  > img {\n    position: absolute;\n    border-radius: 8px;\n    object-fit: cover;\n\n    @media (min-width: 768px) {\n      width: 228px;\n      height: 232px;\n    }\n\n    @media (min-width: 1440px) {\n      width: 318px;\n      height: 324px;\n    }\n  }\n\n  > svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    color: var(--color-icons-light);\n  }\n"]))),b=u.ZP.div(a||(a=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),j=u.ZP.div(p||(p=(0,g.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  @media (min-width: 768px) {\n    margin-bottom: 18px;\n  }\n  @media (min-width: 1440px) {\n    margin-bottom: 30px;\n  }\n  > h3 {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 1;\n    letter-spacing: -0.24px;\n    color: var(--color-text-secondary);\n    @media (min-width: 768px) {\n      font-size: 24px;\n    }\n  }\n  > button {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 24px;\n    height: 24px;\n    border: none;\n    border-radius: 4px;\n    background-color: var(--color-accent-secondary);\n\n    &.own-recipes {\n      background-color: var(--color-accent);\n      >svg {\n        color: var(--color-secondary);\n      }\n    }\n\n    @media (min-width: 768px) {\n      width: 38px;\n      height: 38px;\n    }\n    @media (min-width: 1440px) {\n      width: 44px;\n      height: 44px;\n    }\n    &:hover {\n      > svg {\n        color: var(--color-warning);\n      }\n    }\n\n    > svg {\n      width: 14px;\n      height: 14px;\n      color: var(--color-icons);\n      transition: color var(--transition-time) var(--cubic);\n      fill: transparent;\n      @media (min-width: 768px) {\n        width: 22px;\n        height: 22px;\n      }\n      @media (min-width: 1440px) {\n        width: 24px;\n        height: 24px;\n      }\n    }\n  }\n"]))),y=u.ZP.div(s||(s=(0,g.Z)(["\n  font-size: 8px;\n  line-height: 1.25;\n  letter-spacing: -0.02em;\n  color: var(--color-text);\n  @media (min-width: 768px) {\n    font-size: 14px;\n    line-height: 1.29;\n  }\n  @media (min-width: 1440px) {\n    font-size: 18px;\n    line-height: 1.33;\n  }\n"]))),Z=u.ZP.div(c||(c=(0,g.Z)(["\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  > p {\n    font-weight: 500;\n    font-size: 10px;\n    line-height: 1.4;\n    color: var(--color-text-secondary);\n    line-height: 1.4;\n\n    @media (min-width: 768px) {\n      font-size: 14px;\n      line-height: 1.43;\n    }\n  }\n  > button {\n    cursor: pointer;\n    border: none;\n    padding: 6px 14px;\n    border-radius: 24px 44px;\n    color: var(--color-start-text);\n    background-color: var(--color-footer);\n    font-weight: 400;\n    font-size: 10px;\n    line-height: 1.5;\n    transition: background-color var(--transition-time) var(--cubic);\n\n    &.own-recipes {\n      background-color: var(--color-accent);\n      &:hover {\n        background-color: var(--color-footer);\n      }\n    }\n\n    @media (min-width: 768px) {\n      font-size: 14px;\n      padding: 12px 32px;\n    }\n    @media (min-width: 1440px) {\n      font-size: 16px;\n      padding: 14px 38px;\n    }\n    &:hover {\n      background-color: var(--color-accent);\n    }\n  }\n"]))),k=e(184),z=function(n){var i=n.data,e=n.removeRecipe,t=n.className,r=(0,l.s0)();return(0,k.jsx)(f,{className:"container",children:(0,k.jsx)(k.Fragment,{children:i.map((function(n){var i=n.preview,o=n._id,a=n.title,p=n.description,s=n.time;return(0,k.jsxs)(v,{children:[(0,k.jsxs)(w,{children:[(0,k.jsx)(x.Ljx,{style:{width:"40px",height:"40px"}}),(0,k.jsx)(h.Lff,{}),(0,k.jsx)("img",{src:i,loading:"lazy",alt:a})]}),(0,k.jsxs)(b,{children:[(0,k.jsxs)(y,{children:[(0,k.jsxs)(j,{children:[(0,k.jsx)("h3",{children:a}),(0,k.jsx)("button",{className:t,onClick:function(){e(o)},children:(0,k.jsx)(d.Ybf,{})})]}),(0,k.jsx)("p",{children:p})]}),(0,k.jsxs)(Z,{children:[(0,k.jsxs)("p",{children:[s," ",s.includes("min")?"":"min"]}),(0,k.jsx)("button",{className:t,onClick:function(){r("/recipe/".concat(o)),(0,m.Z)()},children:"See recipe"})]})]})]},o)}))})})}},7070:function(n,i,e){e.r(i),e.d(i,{default:function(){return Z}});var t=e(2791),r=e(9434),o=e(2712),a=function(n){return n.recipes.favorites.items},p=function(n){return n.recipes.favorites.total},s=function(n){return n.recipes.favorites.isLoading},c=function(n){return n.recipes.favorites.error},l=function(n){return n.recipes.favorites.status},d=function(n){return n.recipes.favorites.page},x=function(n){return n.recipes.favorites.pages},h=function(n){return n.recipes.favorites.limit},m=function(n){return n.recipes.favorites.isDeleting},g=function(){return{isLoading:(0,r.v9)(s),Error:(0,r.v9)(c),favorite:(0,r.v9)(a),page:(0,r.v9)(d),total:(0,r.v9)(p),pages:(0,r.v9)(x),limit:(0,r.v9)(h),status:(0,r.v9)(l),isDeleting:(0,r.v9)(m)}},u=e(3585),f=e(715),v=e(8835),w=e(3658),b=e(9593),j=e(2804),y=e(184),Z=function(){var n=g(),i=n.status,e=n.favorite,a=n.page,p=n.limit,s=n.isDeleting,c=(0,r.I0)();(0,t.useEffect)((function(){c((0,o.RU)({limit:99999}))}),[c]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(f.Z,{children:"Favorites"}),i!==u.hA||s?(0,y.jsx)(y.Fragment,{children:e.length?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(v.A,{data:e.slice((a-1)*p,a*p),removeRecipe:function(n){c((0,o._e)(n))}}),(0,y.jsx)(b.Z,{totalPages:null!==e&&void 0!==e&&e.length?Math.ceil(e.length/p):0,currentPage:a,onClick:function(n){c((0,j.YA)(n))}})]}):(0,y.jsx)("p",{children:"No recipes..."})}):(0,y.jsx)(w.a,{})]})}}}]);
//# sourceMappingURL=70.90c05291.chunk.js.map