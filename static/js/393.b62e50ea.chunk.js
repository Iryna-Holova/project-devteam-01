"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[393],{715:function(n,t,e){e.d(t,{Z:function(){return c}});e(2791);var i,r=e(9126),a=e(168),o=e(6487).ZP.div(i||(i=(0,a.Z)(["\n  position: relative;\n  margin-top: 114px;\n  color: var(--color-text-main);\n\n  & h2 {\n    color: var(--color-text-main);\n    font-weight: 600;\n    font-size: 28px;\n    line-height: 28px;\n    letter-spacing: -0.56px;\n    &.transparent {\n      color: transparent;\n    }\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-top: 136px;\n    & h2 {\n      font-size: 32px;\n      line-height: 32px;\n      letter-spacing: -0.64px;\n    }\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 164px;\n    & h2 {\n      font-size: 44px;\n      line-height: 44px;\n      letter-spacing: -0.88px;\n    }\n  }\n\n  & svg {\n    position: absolute;\n\n    &.circle {\n      left: 231px;\n      width: 6px;\n      height: 6px;\n      color: var(--color-text-main);\n      @media screen and (min-width: 768px) {\n        display: none;\n      }\n    }\n\n    &.square {\n      rotate: -25deg;\n      width: 8px;\n      height: 8px;\n      border-radius: 3px;\n      color: var(--color-accent);\n      @media screen and (min-width: 768px) {\n        width: 12px;\n        height: 12px;\n      }\n    }\n\n    &.square.left {\n      left: 104px;\n      bottom: 50px;\n      @media screen and (min-width: 768px) {\n        left: 187px;\n        bottom: 64px;\n      }\n      @media screen and (min-width: 1440px) {\n        left: 228px;\n        bottom: 72px;\n      }\n    }\n\n    &.square.right {\n      right: 0;\n      bottom: 23px;\n      @media screen and (min-width: 768px) {\n        right: -9px;\n        bottom: 51px;\n      }\n      @media screen and (min-width: 1440px) {\n        right: 71px;\n        bottom: 59px;\n      }\n    }\n\n    &.square.center {\n      display: none;\n      color: var(--color-text-main);\n      @media screen and (min-width: 768px) {\n        display: block;\n        left: 405px;\n        bottom: -3px;\n      }\n      @media screen and (min-width: 1440px) {\n        left: 707px;\n        bottom: -8px;\n      }\n    }\n  }\n"]))),s=e(184),c=function(n){var t=n.className,e=n.children;return(0,s.jsxs)(o,{className:"container",children:[(0,s.jsx)("h2",{className:t,children:e}),(0,s.jsx)(r.rJz,{className:"circle"}),(0,s.jsx)(r.AhU,{className:"square left"}),(0,s.jsx)(r.AhU,{className:"square right"}),(0,s.jsx)(r.AhU,{className:"square center"})]})}},405:function(n,t,e){var i=e(7689),r=e(1358),a=e(3579),o=e(1824),s=e(184);t.Z=function(n){var t=n.recipes,e=void 0===t?null:t,c=(0,i.s0)();return e&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(a.aV,{className:"container",children:e.map((function(n){var t=n._id,e=n.title,i=n.thumb;return(0,s.jsx)(a.pp,{children:(0,s.jsxs)(a.HM,{onClick:function(){c("/recipe/".concat(t)),(0,r.Z)()},children:[(0,s.jsx)(a.dk,{children:(0,s.jsx)("p",{children:e})}),(0,s.jsx)(a.Ht,{src:i||o,loading:"lazy",alt:e})]})},t)}))})})}},3579:function(n,t,e){e.d(t,{HM:function(){return x},Ht:function(){return u},aV:function(){return d},dk:function(){return l},pp:function(){return g}});var i,r,a,o,s,c=e(168),p=e(6487),d=p.ZP.ul(i||(i=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 28px;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    gap: 14px;\n    row-gap: 100px;\n  }\n"]))),x=p.ZP.div(r||(r=(0,c.Z)(["\n  cursor: pointer;\n  position: relative;\n  display: block;\n"]))),l=p.ZP.div(a||(a=(0,c.Z)(["\n  position: absolute;\n  left: 18px;\n  bottom: 24px;\n  padding: 16px;\n  width: 275px;\n  background: var(--color-secondary);\n  color: var(--color-text-secondary);\n  border-radius: 8px;\n  overflow: hidden;\n  opacity: 1;\n  transition: opacity 0.5s ease-in;\n  @media screen and (min-width: 768px) {\n    left: 16px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 253px;\n    padding-right: 0px;\n  }\n\n  p {\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 1.25;\n    letter-spacing: -0.24px;\n    text-align: left;\n    height: 20px;\n    overflow: hidden;\n    transition: opacity 0.5s ease-in;\n  }\n"]))),g=p.ZP.li(o||(o=(0,c.Z)(["\n  z-index: 2;\n  overflow: hidden;\n  border-radius: 8px;\n  transition: var(--transition-time) var(--cubic);\n\n  :hover,\n  :focus {\n    transform: scale(1.03);\n    transition: var(--transition-time) var(--cubic);\n    box-shadow: 5px 5px 8px 5px rgba(0, 0, 0, 0.5),\n      0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    "," {\n      opacity: 0;\n      transition: opacity 0.5s step-start 0.2s;\n    }\n  }\n"])),l),u=p.ZP.img(s||(s=(0,c.Z)(["\n  width: 343px;\n  height: 323px;\n  object-fit: cover;\n  :hover {\n    transition: var(--transition-time) var(--cubic);\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 336px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 299px;\n    gap: 14px;\n  }\n"])))},9393:function(n,t,e){e.r(t),e.d(t,{default:function(){return q}});var i,r,a,o,s,c,p,d=e(9439),x=e(2791),l=e(9434),g=e(7689),u=e(5928),m=e(5037),h=function(){var n=(0,l.v9)(m.us),t=(0,l.v9)(m.S_);return{isLoading:(0,l.v9)(m.NT),isError:t,categories:n}},f=function(n){return n.recipes.searchByCategory.items},v=function(n){return n.recipes.searchByCategory.query},w=function(n){return n.recipes.searchByCategory.error},b=function(n){return n.recipes.searchByCategory.page},y=function(n){return n.recipes.searchByCategory.total},A=function(n){return n.recipes.searchByCategory.pages},Y=function(n){return n.recipes.searchByCategory.limit},Z=function(n){return n.recipes.searchByCategory.isLoading},B=function(){var n=(0,l.v9)(Z),t=(0,l.v9)(w),e=(0,l.v9)(v);return{isLoading:n,isError:t,data:(0,l.v9)(f),query:e,page:(0,l.v9)(b),total:(0,l.v9)(y),pages:(0,l.v9)(A),limit:(0,l.v9)(Y)}},C=e(6309),j=e(2499),F=e(2751),L=e(168),N=e(6487),z=N.ZP.ul(i||(i=(0,L.Z)(["\n  display: flex;\n  margin-bottom: 32px;\n  margin-top: 60px;\n  padding: 0 29px;\n  gap: 28px;\n  border-bottom: 1px solid;\n  border-color: #e0e0e0;\n  overflow-y: scroll;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 55px;\n    margin-bottom: 50px;\n    padding: 0 30px;\n    border-width: 1px;\n    transform: matrix(1, 0, 0, 1, 0, 0);\n  }\n\n  @media screen and (min-width: 1440px) {\n    margin-top: 110px;\n  }\n"]))),P=N.ZP.a(r||(r=(0,L.Z)(["\n  text-decoration: none;\n  position: relative;\n  display: block;\n  padding: 10px 0 32px;\n  font-size: 18px;\n  font-weight: 500;\n  line-height: 1;\n  color: #bdbdbd;\n  transition: color var(--transition-time) var(--cubic);\n  cursor: pointer;\n\n  &::after {\n    position: absolute;\n    content: '';\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    height: 2px;\n    background-color: transparent;\n  }\n  &.active {\n    color: var(--color-accent);\n    &::after {\n      background-color: var(--color-accent);\n    }\n  }\n  &:hover {\n    color: var(--color-accent);\n  }\n\n  @media screen and (min-width: 768px) {\n    padding-bottom: 28px;\n  }\n"]))),W=e(184),U=function(n){var t=n.categories,e=n.selectedCategory,i=n.handleCategoryChange;return(0,W.jsx)(z,{children:t.map((function(n){var t=n._id,r=n.name;return(0,W.jsx)(P,{className:e===r&&"active",onClick:function(){return i(r)},children:r},t)}))})},k=e(405),I=e(715),D=N.ZP.div(a||(a=(0,L.Z)(["\n  margin-bottom:100px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 200px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-bottom: 200px;\n  }\n"]))),E=e(1358),G=e(7692),S=N.ZP.ul(o||(o=(0,L.Z)(["\n  position: relative;\n  z-index: 2;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: 12px 60px;\n  background: var(--color-main);\n  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);\n  border-radius: 26px;\n  margin-top:40px;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  @media screen and (min-width: 768px) {\n    padding: 14px 72px;\n    margin-top:50px;\n  }\n  @media screen and (min-width: 1440px) {\n    margin-top:50px;\n  }\n"]))),V=N.ZP.li(s||(s=(0,L.Z)(["\n  font-family: 'Poppins', sans-serif;\n  font-size: 12px;\n  line-height: calc(18 / 12);\n  color: ",";\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 27px;\n  height: 27px;\n  background-color: ",";\n  border-radius: 50%;\n  cursor: pointer;\n  user-select: none;\n  &:not(:last-of-type) {\n    margin-right: 18px;\n  }\n\n  &:last-of-type {\n    margin-right: 0;\n  }\n  @media screen and (min-width: 768px) {\n    &:not(:last-of-type) {\n      margin-right: 24px;\n    }\n  \n    &:last-of-type {\n      margin-right: 0;\n    }\n  }\n  @media screen and (min-width: 1440px) {\n    &:not(:last-of-type) {\n      margin-right: 24px;\n    }\n  \n    &:last-of-type {\n      margin-right: 0;\n    }\n  }\n"])),(function(n){return"true"===n.$active?"var(--color-icons)":"#656565"}),(function(n){return"true"===n.$active?"var(--color-accent-secondary)":"var(--color-main)"})),T=(0,N.ZP)(G.gbs)(c||(c=(0,L.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 17px;\n  transform: translate(0, -50%);\n  margin-right: 13px;\n  cursor: pointer;\n  fill:var(--color-start-bg);\n"]))),X=(0,N.ZP)(G.lU2)(p||(p=(0,L.Z)(["\n  position: absolute;\n  top: 50%;\n  right: 17px;\n  transform: translate(0, -50%);\n  margin-left: -5px;\n  cursor: pointer;\n  fill:var(--color-start-bg);\n"]))),H=function(n){for(var t=n.totalPages,e=n.currentPage,i=n.onClick,r=(n.scrollId,[]),a=1;a<=t;a++)r.push(a);var o=e>2?e-2:1,s=o+5-1;s>t&&(o=(s=t)-5+1)<1&&(o=1);var c=r.slice(o-1,s),p=function(n){e!==n&&(i(n),(0,E.Z)())},d=1===e,x=e===t;return(0,W.jsxs)(S,{children:[(0,W.jsx)(T,{size:30,onClick:function(){e>1&&(i(e-1),(0,E.Z)())},disabled:d,style:{opacity:d?.5:1}}),c.map((function(n){return(0,W.jsx)(V,{$active:e===n?"true":"false",onClick:function(){p(n)},children:n},n)})),(0,W.jsx)(X,{size:30,onClick:function(){e<t&&(i(e+1),(0,E.Z)())},disabled:x,style:{opacity:x?.5:1}})]})},J=e(3658),q=function(){var n=(0,g.UO)().categoryName,t=(0,g.s0)(),e=(0,u.Z)().device,i=(0,l.I0)(),r=h().categories,a=B(),o=a.query,s=a.data,c=a.isError,p=(0,x.useState)(1),m=(0,d.Z)(p,2),f=m[0],v=m[1],w=(0,x.useState)(!0),b=(0,d.Z)(w,2),y=b[0],A=b[1];(0,x.useEffect)((function(){A(!0),i((0,C.v)()).then((function(){A(!1)}))}),[i]),(0,x.useEffect)((function(){A(!0),i((0,j._L)(n)),i((0,j.Np)(50)),i((0,F.Z)({query:n,limit:50})).then((function(){A(!1)}))}),[i,n,e,o]),(0,x.useEffect)((function(){c&&t("/categories/Beef")}),[c,t]);var Y=null!==s&&void 0!==s&&s.length?Math.ceil(s.length/8):0;return(0,W.jsxs)(D,{children:[(0,W.jsx)(I.Z,{children:"Categories"}),(0,W.jsx)(U,{categories:r,selectedCategory:n,handleCategoryChange:function(n){t("/categories/".concat(n))}}),y||!s?(0,W.jsx)(J.a,{}):(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(k.Z,{recipes:s.slice(8*(f-1),8*f)}),(0,W.jsx)(H,{totalPages:Y,currentPage:f,onClick:function(n){v(n)}})]})]})}},5037:function(n,t,e){e.d(t,{NT:function(){return r},S_:function(){return a},us:function(){return i}});var i=function(n){return n.categories.items},r=function(n){return n.categories.isLoading},a=function(n){return n.categories.error}},1824:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAFDCAMAAAC3AcPIAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAB+UExURUdwTN/f39ra2tjY2NfX19fX19bW1s/Pz9nZ2djY2Nra2tra2tjY2NjY2NnZ2dfX19nZ2dnZ2dnZ2dra2tnZ2cTExMnJycfHx9HR0cbGxsXFxdXV1djY2NTU1NbW1s3Nzc/Pz9fX18zMzM7OzsrKysjIyNLS0tDQ0MvLy9PT0yQuAAMAAAAUdFJOUwAQz49AIJAQz5CQj+Df0KDfoJ+fNcNltgAAA2JJREFUeNrt3OtymkAAgFHaai5tendBEPBu0vd/wcak05gLstFONXK+fxp2xjmzIYtLSJLbemefB9rSxY9+ct/5JxrtfTi/s7ogETW71lrmVezcSpI+hdh6yVcIsZ0l7yHE9i1hEB8sWLBgwYIlWLBgwYIFS7BgwYIFC5ZgwYIFCxYswYIFCxYsWIIFCxYsWLAECxYsWLBgCRYsWLBgwRIsWLBgwYIlWLBgwYIFS7BgwYIFC5ZgwYIFCxYswYIFCxYsWIIFCxYsWLAECxYsWLBgCRYsWLBgwRIsWLBgwYIlWLBgwYIFS7BgwYIFC5ZgwYIFCxYswXobWNUsD5tlLx+WPTqoWAw7iDVKw5PSlw9cPD0um3YNa1SEfF7vMG6Yh6LqFta0CONyt6HlOBSjTmFlYbz74HHTb+xpYq1CXu4+uixC1SGsWdjrb9o8zDqEtQx7nXXqpmXGSWKFcNjxsGDBggULFixYsGDBggUL1pvCyvPmn03y+5bT3cafHNaWJg8bE+WxfbYjwipHVVVdb2zjLG9fVyNYW6fUsex8HS/WKDSVwnrasBErgwXr32Cl4+vJAlYMVnF997pewGrH+rtWSGG1YT1s65cFrBasjTtrxrC2YxXP34LVhJXB2m1mTWC1nLM2biZKYbVgPVwJriwdWtdZkz9vTDNY7Zc76XpZWk4KK/ioC+kizV1I+9YB1v+vLJqw5h3Hyl6YLXX6cvPI8SeLZZMVFixYsGDBggULFixYsGDBekV5qPcZPurUv/3e7Pcl1TDcdAirCsU+jyrIwqpDWIN0n4cNjMNhboM/FFa9x+NVZqGoO4W1fnBPNtzhHvfppDjYo2gOt2FR55G7ONmzW73rQdewBoPVzfIRQt60zHh00OzX4T6xx9jBggULFizBggULFixYggULFixYsAQLFixYsGAJFixYsGDBEixYsGDBgiVYsGDBggVLsGDBggULlmDBggULFizBggULFixYggULFixYsAQLFixYsGAJFixYsGDBEixYsGDBgiVYsGDBggVLsGDBggULlmDBggULFizBggULFixYggULFixYsAQLFixYsGAJ1muwrhjEdpFcQojtZ9KDEFs/ST5SiOsySZJ37zlEnbHOk7WWuRUzr+6sbut//0JjW1eXvbXTb+4EmH3DCaJuAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=393.b62e50ea.chunk.js.map