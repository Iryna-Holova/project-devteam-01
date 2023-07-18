"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[926],{715:function(n,e,t){t.d(e,{Z:function(){return c}});t(2791);var i,r=t(9126),a=t(168),s=t(6487).ZP.div(i||(i=(0,a.Z)(["\n  position: relative;\n  margin-top: 114px;\n  color: var(--color-text-main);\n\n  & h2 {\n    color: var(--color-text-main);\n    font-weight: 600;\n    font-size: 28px;\n    line-height: 28px;\n    letter-spacing: -0.56px;\n    &.transparent {\n      color: transparent;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 136px;\n    & h2 {\n      font-size: 32px;\n      line-height: 32px;\n      letter-spacing: -0.64px;\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 164px;\n    & h2 {\n      font-size: 44px;\n      line-height: 44px;\n      letter-spacing: -0.88px;\n    }\n  }\n\n  & svg {\n    position: absolute;\n\n    &.circle {\n      left: 231px;\n      width: 6px;\n      height: 6px;\n      color: var(--color-text-main);\n      @media screen and (min-width: 768px) {\n        display: none;\n      }\n    }\n\n    &.square {\n      rotate: -25deg;\n      width: 8px;\n      height: 8px;\n      border-radius: 3px;\n      color: var(--color-accent);\n      @media screen and (min-width: 768px) {\n        width: 12px;\n        height: 12px;\n      }\n    }\n\n    &.square.left {\n      left: 104px;\n      bottom: 50px;\n      @media screen and (min-width: 768px) {\n        left: 187px;\n        bottom: 64px;\n      }\n      @media screen and (min-width: 1440px) {\n        left: 228px;\n        bottom: 72px;\n      }\n    }\n\n    &.square.right {\n      right: 0;\n      bottom: 23px;\n      @media screen and (min-width: 768px) {\n        right: -9px;\n        bottom: 51px;\n      }\n      @media screen and (min-width: 1440px) {\n        right: 71px;\n        bottom: 59px;\n      }\n    }\n\n    &.square.center {\n      display: none;\n      color: var(--color-text-main);\n      @media screen and (min-width: 768px) {\n        display: block;\n        left: 405px;\n        bottom: -3px;\n      }\n      @media screen and (min-width: 1440px) {\n        left: 707px;\n        bottom: -8px;\n      }\n    }\n  }\n"]))),o=t(184),c=function(n){var e=n.className,t=n.children;return(0,o.jsxs)(s,{className:"container",children:[(0,o.jsx)("h2",{className:e,children:t}),(0,o.jsx)(r.rJz,{className:"circle"}),(0,o.jsx)(r.AhU,{className:"square left"}),(0,o.jsx)(r.AhU,{className:"square right"}),(0,o.jsx)(r.AhU,{className:"square center"})]})}},8235:function(n,e,t){t.d(e,{Z:function(){return o}});var i=t(7689),r=t(1358),a=t(3579),s=t(184),o=function(n){var e=n.recipes,t=void 0===e?null:e,o=(0,i.s0)();return t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.aV,{className:"container",children:t.map((function(n){var e=n._id,t=n.title,i=n.thumb;return console.log("Recipe:",t,i),(0,s.jsx)(a.pp,{children:(0,s.jsxs)(a.HM,{onClick:function(){o("/recipe/".concat(e)),(0,r.Z)()},children:[(0,s.jsx)(a.dk,{children:(0,s.jsx)("p",{children:t})}),(0,s.jsx)(a.Ht,{src:i||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAFDCAMAAAC3AcPIAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAB+UExURUdwTN/f39ra2tjY2NfX19fX19bW1s/Pz9nZ2djY2Nra2tra2tjY2NjY2NnZ2dfX19nZ2dnZ2dnZ2dra2tnZ2cTExMnJycfHx9HR0cbGxsXFxdXV1djY2NTU1NbW1s3Nzc/Pz9fX18zMzM7OzsrKysjIyNLS0tDQ0MvLy9PT0yQuAAMAAAAUdFJOUwAQz49AIJAQz5CQj+Df0KDfoJ+fNcNltgAAA2JJREFUeNrt3OtymkAAgFHaai5tendBEPBu0vd/wcak05gLstFONXK+fxp2xjmzIYtLSJLbemefB9rSxY9+ct/5JxrtfTi/s7ogETW71lrmVezcSpI+hdh6yVcIsZ0l7yHE9i1hEB8sWLBgwYIlWLBgwYIFS7BgwYIFC5ZgwYIFCxYswYIFCxYsWIIFCxYsWLAECxYsWLBgCRYsWLBgwRIsWLBgwYIlWLBgwYIFS7BgwYIFC5ZgwYIFCxYswYIFCxYsWIIFCxYsWLAECxYsWLBgCRYsWLBgwRIsWLBgwYIlWLBgwYIFS7BgwYIFC5ZgwYIFCxYswXobWNUsD5tlLx+WPTqoWAw7iDVKw5PSlw9cPD0um3YNa1SEfF7vMG6Yh6LqFta0CONyt6HlOBSjTmFlYbz74HHTb+xpYq1CXu4+uixC1SGsWdjrb9o8zDqEtQx7nXXqpmXGSWKFcNjxsGDBggULFixYsGDBggUL1pvCyvPmn03y+5bT3cafHNaWJg8bE+WxfbYjwipHVVVdb2zjLG9fVyNYW6fUsex8HS/WKDSVwnrasBErgwXr32Cl4+vJAlYMVnF997pewGrH+rtWSGG1YT1s65cFrBasjTtrxrC2YxXP34LVhJXB2m1mTWC1nLM2biZKYbVgPVwJriwdWtdZkz9vTDNY7Zc76XpZWk4KK/ioC+kizV1I+9YB1v+vLJqw5h3Hyl6YLXX6cvPI8SeLZZMVFixYsGDBggULFixYsGDBekV5qPcZPurUv/3e7Pcl1TDcdAirCsU+jyrIwqpDWIN0n4cNjMNhboM/FFa9x+NVZqGoO4W1fnBPNtzhHvfppDjYo2gOt2FR55G7ONmzW73rQdewBoPVzfIRQt60zHh00OzX4T6xx9jBggULFizBggULFixYggULFixYsAQLFixYsGAJFixYsGDBEixYsGDBgiVYsGDBggVLsGDBggULlmDBggULFizBggULFixYggULFixYsAQLFixYsGAJFixYsGDBEixYsGDBgiVYsGDBggVLsGDBggULlmDBggULFizBggULFixYggULFixYsAQLFixYsGAJ1muwrhjEdpFcQojtZ9KDEFs/ST5SiOsySZJ37zlEnbHOk7WWuRUzr+6sbut//0JjW1eXvbXTb+4EmH3DCaJuAAAAAElFTkSuQmCC",loading:"lazy",alt:t})]})},e)}))})})}},3579:function(n,e,t){t.d(e,{HM:function(){return x},Ht:function(){return u},aV:function(){return d},dk:function(){return l},pp:function(){return h}});var i,r,a,s,o,c=t(168),p=t(6487),d=p.ZP.ul(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 14px;\n    row-gap: 100px;\n  }\n"]))),x=p.ZP.div(r||(r=(0,c.Z)(["\n  cursor: pointer;\n  position: relative;\n  display: block;\n"]))),l=p.ZP.div(a||(a=(0,c.Z)(["\n  position: absolute;\n  left: 18px;\n  bottom: 24px;\n  padding: 16px;\n  width: 275px;\n  background: var(--color-secondary);\n  color: var(--color-text-secondary);\n  border-radius: 8px;\n  overflow: hidden;\n  opacity: 1;\n  transition: opacity 0.5s ease-in;\n  @media screen and (min-width: 768px) {\n    left: 16px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 253px;\n    padding-right: 0px;\n  }\n\n  p {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.25;\n    letter-spacing: -0.24px;\n    text-align: left;\n    height: 20px;\n    overflow: hidden;\n    transition: opacity 0.5s ease-in;\n  }\n"]))),h=p.ZP.li(s||(s=(0,c.Z)(["\n  z-index: 2;\n  overflow: hidden;\n  border-radius: 8px;\n  transition: var(--transition-time) var(--cubic);\n\n  :hover,\n  :focus {\n    transform: scale(1.03);\n    transition: var(--transition-time) var(--cubic);\n    box-shadow: 5px 5px 8px 5px rgba(0, 0, 0, 0.5),\n      0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    "," {\n      opacity: 0;\n      transition: opacity 0.5s step-start 0.2s;\n    }\n  }\n"])),l),u=p.ZP.img(o||(o=(0,c.Z)(["\n  width: 343px;\n  height: 323px;\n  object-fit: cover;\n  :hover {\n    transition: var(--transition-time) var(--cubic);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 299px;\n    gap: 14px;\n  }\n"])))},6913:function(n,e,t){t.d(e,{w:function(){return Y}});var i,r,a,s,o,c=t(9439),p=t(2791),d=t(7689),x=t(168),l=t(6487),h=l.ZP.form(i||(i=(0,x.Z)(["\n    display: flex;\n   \n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n"]))),u=l.ZP.input(r||(r=(0,x.Z)(["\n    width: 295px;\n    height: 53px;\n    padding-left: 32px;\n    position: absolute;\n    font-size: 12px;\n    border: none;\n    border-radius: 22px 44px;\n    background-color: var(--color-secondary);\n\n    @media screen and (min-width: 768px) {\n        width: 362px;\n        height: 59px;\n        padding-left: 38px;\n        font-size: 16px;\n    }\n\n    @media screen and (min-width: 1440px) {\n        width: 510px;\n        height: 70px;\n    }\n"]))),g=l.ZP.button(a||(a=(0,x.Z)(["\n    width: 161px;\n    height: 53px;\n    padding-left: 32px;\n    position: relative;\n    top: 0px;\n    right: -200px;\n    background-color: var(--color-icons);\n    color: var(--color-main);\n    border-radius: 24px 44px;\n\n    &:hover,\n    &:focus {\n        color: var(--color-accent);\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 161px;\n        height: 59px;\n        font-size: 14px;\n    }\n\n    @media screen and (min-width: 1440px) {\n        width: 161px;\n        height: 70px;\n        padding: 23px;\n        font-size: 16px;\n    }\n"]))),m=l.ZP.select(s||(s=(0,x.Z)(["\n    width: 198px;\n    height: 49px;\n    letter-spacing: -0.28px;\n    padding: 0 14px;\n    margin-left: 18px;\n"]))),f=l.ZP.div(o||(o=(0,x.Z)(["\n    margin-top: 115px;\n    margin-bottom: 27px;\n"]))),w=t(9434),v=t(1852),A=t(3585),B=t(184);function Y(n){var e=n.onSubmit,t=(0,p.useState)(""),i=(0,c.Z)(t,2),r=i[0],a=i[1],s=(0,p.useState)("title"),o=(0,c.Z)(s,2),x=o[0],l=o[1],Y=(0,p.useState)(!1),y=(0,c.Z)(Y,2),b=y[0],j=y[1],F=(0,d.TH)(),Z=(0,w.I0)();(0,p.useEffect)((function(){if(b&&""!==r.trim()){var n=setTimeout((function(){"ingredients"===x&&""!==r&&Z((0,v.B)({query:r,method:A.c0})),"title"===x&&""!==r&&Z((0,v.B)({query:r,method:A.XC}))}),1500);return function(){return clearTimeout(n)}}}),[r,x,b,Z]);return(0,B.jsx)(B.Fragment,{children:(0,B.jsxs)(h,{children:[(0,B.jsxs)(f,{children:[(0,B.jsx)(u,{type:"text",name:"value",autoComplete:"off",autoFocus:!0,placeholder:"Search recipes",onChange:function(n){var e=n.target,t=e.value;"value"===e.name&&(a(t),j(""!==t))},value:r}),(0,B.jsx)(g,{onClick:function(n){n.preventDefault(),""!==r.trim()&&(j(!1),e(r,x))},type:"submit",children:"Search"})]}),"/search"===F.pathname&&(0,B.jsxs)("label",{children:["Search by: ",(0,B.jsxs)(m,{onChange:function(n){var e=n.target.value;l(e)},children:[(0,B.jsx)("option",{name:"title",value:"title",children:"Title"}),(0,B.jsx)("option",{name:"ingredients",value:"ingredients",children:"Ingredients"})]})]})]})})}},3926:function(n,e,t){t.r(e),t.d(e,{default:function(){return j}});var i=t(9439),r=t(715),a=t(8235),s=t(7689),o=t(6913),c=t(2791),p=t(9434),d=function(n){return n.recipes.searchBy.items},x=function(n){return n.recipes.searchBy.query},l=function(n){return n.recipes.searchBy.error},h=function(n){return n.recipes.searchBy.page},u=function(n){return n.recipes.searchBy.total},g=function(n){return n.recipes.searchBy.pages},m=function(n){return n.recipes.searchBy.limit},f=function(n){return n.recipes.searchBy.isLoading},w=function(n){return n.recipes.searchBy.status},v=function(n){return n.recipes.searchBy.method},A=function(){var n=(0,p.v9)(f),e=(0,p.v9)(l),t=(0,p.v9)(x),i=(0,p.v9)(d),r=(0,p.v9)(d),a=(0,p.v9)(h),s=(0,p.v9)(u),o=(0,p.v9)(g),c=(0,p.v9)(m),A=(0,p.v9)(w);return{isLoading:n,isError:e,data:i,query:t,page:a,total:s,pages:o,limit:c,recipes:r,method:(0,p.v9)(v),status:A}},B=t(3020),Y=t(1852),y=t(3585),b=t(184),j=function(){var n=(0,c.useState)(""),e=(0,i.Z)(n,2),t=e[0],d=e[1],x=(0,c.useState)("title"),l=(0,i.Z)(x,2),h=l[0],u=l[1],g=(0,p.I0)(),m=A(),f=m.recipes,w=m.status,v=m.isLoading,j=m.error,F=(0,s.UO)().searchQuery;(0,c.useEffect)((function(){""!==F&&void 0!==F&&d(F),""!==t&&("ingredients"===h&&""!==t&&g((0,Y.B)({query:t,method:y.c0})),"title"===h&&""!==t&&g((0,Y.B)({query:t,method:y.XC})))}),[t,F,h,g]);return console.log(j),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r.Z,{children:"Search"}),(0,b.jsx)(o.w,{onSubmit:function(n,e){t!==n&&d(n),h!==e&&u(e)}}),v&&(0,b.jsx)("p",{children:"Loading..."}),2===w&&(0,b.jsx)(a.Z,{recipes:f}),1===w&&(0,b.jsx)("p",{children:"..."}),3===w&&(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[(0,b.jsx)("img",{src:B,alt:"Fruit Basket",width:"350"}),(0,b.jsx)("p",{children:"Try looking for something else.."})]}),2===w&&f&&(0,b.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},children:[(0,b.jsx)("img",{src:B,alt:"Fruit Basket",width:"350"}),(0,b.jsx)("p",{children:"Try looking for something else.."})]})]})}},3020:function(n,e,t){n.exports=t.p+"static/media/empty-img.dda62daaae2dd65dd071.png"}}]);
//# sourceMappingURL=926.f0ffbe82.chunk.js.map