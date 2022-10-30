(function(){var t={858:function(t,r,e){"use strict";var c=e(963),o=e(252),i=e(577);const n=(0,o.Uk)("Home"),a=(0,o.Uk)(" | "),s=(0,o.Uk)("Cart");function u(t,r,e,c,u,d){const p=(0,o.up)("router-link"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(p,{class:(0,i.C_)({active:"Home"===t.$route.name}),to:"/"},{default:(0,o.w5)((()=>[n])),_:1},8,["class"]),a,(0,o.Wm)(p,{class:(0,i.C_)({active:"Cart"===t.$route.name}),to:"/cart"},{default:(0,o.w5)((()=>[s])),_:1},8,["class"])]),(0,o.Wm)(l)],64)}var d={mounted(){this.$store.commit("updateCartFromLocalStorage")},methods:{Reload(){this.$store.commit("SetFalse")}}},p=e(744);const l=(0,p.Z)(d,[["render",u]]);var m=l,g=e(119);const f={class:"home"},v={class:"products-cards-container"};function h(t,r,e,i,n,a){const s=(0,o.up)("ProductDescriptionDrawer"),u=(0,o.up)("ProductSummaryCard");return(0,o.wg)(),(0,o.iD)("div",f,[(0,o.wy)((0,o._)("input",{type:"text",class:"search","onUpdate:modelValue":r[0]||(r[0]=t=>n.searchKeyword=t),placeholder:"請輸入商品名稱"},null,512),[[c.nr,n.searchKeyword]]),(0,o._)("div",v,[(0,o.Wm)(s,{product:n.product,active:n.active.product_drawer,onCloseProductDrawer:r[1]||(r[1]=t=>a.closeProductDrawer())},null,8,["product","active"]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.searchItems,(t=>((0,o.wg)(),(0,o.j4)(u,{key:t.id,product:t,onViewProduct:r[2]||(r[2]=t=>a.viewProduct(t))},null,8,["product"])))),128))])])}const w=[{id:1,name:"舒適bra top",price:499,category:"Under Wear",description:"女性舒適內著，宛如在家的舒服。"},{id:2,name:"棉質短袖上衣",price:290,category:"Top",description:"透氣涼爽，夏天不可或缺的涼爽穿搭。"},{id:3,name:"青春洋溢帆布包",price:199,category:"Accessories",description:"親春洋溢的帆布側背包，身為大學生的您上課首選"},{id:4,name:"歐美爆炸頭假髮",price:1199,category:"Accessories",description:"採用真人頭髮所製成，髮況良好。."},{id:5,name:"簡約丹寧牛仔褲",price:799,category:"Pants",description:"您衣櫃裡必備的瘦腿神褲，還不快買?"},{id:6,name:"歐尼的西外(無領)",price:1199,category:"Pants",description:"半正式的西裝外套，讓您穿上去秒變韓國歐尼！"},{id:7,name:"那個N牌防水神鞋",price:1099,category:"Accessory",description:"人人都必須擁有的N牌神鞋，時尚及舒適兼具！"},{id:8,name:"無印風防水帆布鞋",price:799,category:"Accessory",description:"用途多多的人氣無印風鞋款，您必須擁有吧！"},{id:9,name:"挺版短袖上衣",price:599,category:"Top",description:"男女都適合的落肩款短袖上衣，您穿搭的好夥伴！"}];var y=w;const _={class:"card-deck"},C={class:"card"},b=["src"],j={class:"card-body"},k={class:"card-title"},D={class:"text-muted"},x={class:"price"},P={class:"description card-text"};function O(t,r,c,n,a,s){return(0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("div",C,[(0,o._)("img",{class:"card-img-top photos",src:e(905)("./"+c.product.id+".jpg"),alt:"pic"},null,8,b),(0,o._)("div",j,[(0,o._)("h3",k,(0,i.zw)(c.product.name),1),(0,o._)("p",D,(0,i.zw)(c.product.category),1),(0,o._)("h5",x,"價格：＄"+(0,i.zw)(c.product.price),1),(0,o._)("p",P,(0,i.zw)(c.product.description),1),(0,o._)("button",{class:"view-product-button",onClick:r[0]||(r[0]=r=>t.$emit("viewProduct",c.product))},"View")])])])}var T={props:["product"],emits:["viewProduct"],computed:{description(){return this.product.description.substring(0,150)}}};const $=(0,p.Z)(T,[["render",O]]);var z=$;const S={key:0,class:"product-details"},I={class:"text-center"},q={class:"description"},F={class:"text-center"},H=["src"],K={key:0,class:"cart-total"},U=(0,o._)("h3",null,"In Cart",-1),Z={class:"button-container"};function N(t,r,c,n,a,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",{class:(0,i.C_)(["drawer-background",{show:c.active}]),onClick:r[0]||(r[0]=r=>t.$emit("close-product-drawer"))},null,2),(0,o._)("div",{class:(0,i.C_)(["drawer",{show:c.active}])},[(0,o._)("div",{class:"drawer-close",onClick:r[1]||(r[1]=r=>t.$emit("close-product-drawer"))}," X "),c.product?((0,o.wg)(),(0,o.iD)("div",S,[(0,o._)("h3",I,(0,i.zw)(c.product.name),1),(0,o._)("p",q,(0,i.zw)(c.product.description),1),(0,o._)("h3",F,"價格： $"+(0,i.zw)(c.product.price),1),(0,o._)("img",{class:"photos",src:e(905)("./"+c.product.id+".jpg"),alt:"pic"},null,8,H),s.product_total?((0,o.wg)(),(0,o.iD)("div",K,[U,(0,o._)("h4",null,(0,i.zw)(s.product_total),1)])):(0,o.kq)("",!0),(0,o._)("div",Z,[(0,o._)("button",{class:"remove",onClick:r[2]||(r[2]=t=>s.removeFromCart())}," - "),(0,o._)("button",{class:"add",onClick:r[3]||(r[3]=t=>s.addToCart())}," + ")])])):(0,o.kq)("",!0)],2)],64)}var W={props:["product","active"],emits:["close-product-drawer"],methods:{addToCart(){this.$store.commit("addToCart",this.product)},removeFromCart(){this.$store.commit("removeFromCart",this.product)}},computed:{product_total(){return this.$store.getters.productQuantity(this.product)}}};const Y=(0,p.Z)(W,[["render",N]]);var A=Y,E={name:"HomeView",components:{ProductSummaryCard:z,ProductDescriptionDrawer:A},data(){return{items:y,product:null,category_top:[],active:{product_drawer:!1},searchKeyword:null}},computed:{searchItems(){return this.searchKeyword?this.items.filter((t=>t.name.includes(this.searchKeyword))):this.items}},methods:{viewProduct(t){this.product=t,this.active.product_drawer=!0},closeProductDrawer(){this.active.product_drawer=!1},findCategoryTop(){this.items.forEach((t=>{"Top"==t.category&&(this.category_top=t)}))}}};const V=(0,p.Z)(E,[["render",h]]);var L=V;const J={class:"cart"},M=(0,o._)("h1",null,"Your Shopping Cart",-1);function Q(t,r,e,c,i,n){const a=(0,o.up)("CartItemCard"),s=(0,o.up)("CartSummaryPaymentCard");return(0,o.wg)(),(0,o.iD)("div",J,[M,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.products,(t=>((0,o.wg)(),(0,o.j4)(a,{key:t.id,product:t},null,8,["product"])))),128)),(0,o.Wm)(s)])}const R={class:"cart-item-cart"},X={class:"header"};function B(t,r,e,c,n,a){return(0,o.wg)(),(0,o.iD)("div",R,[(0,o._)("div",X,[(0,o._)("h3",null,(0,i.zw)(e.product.name),1),(0,o._)("h4",null,"In Cart: "+(0,i.zw)(e.product.quantity),1),(0,o._)("h4",null,"總金額: "+(0,i.zw)(a.item_cost),1),(0,o._)("p",null,(0,i.zw)(a.description),1)])])}var G={props:["product"],computed:{description(){return this.product.description.substring(0,120)},item_cost(){return this.product.price*this.product.quantity}}};const tt=(0,p.Z)(G,[["render",B]]);var rt=tt;const et={class:"cart-item-cart"},ct=(0,o._)("button",{class:"view-product-button"},"立即下單",-1);function ot(t,r,e,c,n,a){return(0,o.wg)(),(0,o.iD)("div",et,[(0,o._)("h3",null,"Cart Total:$ "+(0,i.zw)(a.cart_total),1),ct])}var it={computed:{cart_total(){return this.$store.getters.cartTotal}}};const nt=(0,p.Z)(it,[["render",ot]]);var at=nt,st={components:{CartItemCard:rt,CartSummaryPaymentCard:at},computed:{products(){return this.$store.getters.cartItems}}};const ut=(0,p.Z)(st,[["render",Q]]);var dt=ut;const pt=[{path:"/",name:"home",component:L},{path:"/cart",name:"cart",component:dt}],lt=(0,g.p7)({history:(0,g.PO)("/cart-app/"),routes:pt});var mt=lt,gt=e(907);function ft(t){localStorage.setItem("cart",JSON.stringify(t))}var vt=(0,gt.MT)({state:{cart:[]},getters:{productQuantity:t=>r=>{const e=t.cart.find((t=>t.id===r.id));return e?e.quantity:null},cartItems:t=>t.cart,cartTotal:t=>t.cart.reduce(((t,r)=>t+r.price*r.quantity),0)},mutations:{addToCart(t,r){const e=t.cart.find((t=>t.id===r.id));e?e.quantity++:t.cart.push({...r,quantity:1}),ft(t.cart)},removeFromCart(t,r){const e=t.cart.find((t=>t.id===r.id));e?e.quantity--:t.cart=t.cart.filter((t=>t.id!==r.id)),ft(t.cart)},updateCartFromLocalStorage(){const t=localStorage.getItem("cart");t&&(this.state.cart=JSON.parse(t))}},actions:{},modules:{}});(0,c.ri)(m).use(vt).use(mt).mount("#app")},905:function(t,r,e){var c={"./1.jpg":547,"./2.jpg":98,"./3.jpg":203,"./4.jpg":804,"./5.jpg":981,"./6.jpg":991,"./7.jpg":951,"./8.jpg":40,"./9.jpg":808};function o(t){var r=i(t);return e(r)}function i(t){if(!e.o(c,t)){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}return c[t]}o.keys=function(){return Object.keys(c)},o.resolve=i,t.exports=o,o.id=905},547:function(t,r,e){"use strict";t.exports=e.p+"img/1.59e4d92c.jpg"},98:function(t,r,e){"use strict";t.exports=e.p+"img/2.af409879.jpg"},203:function(t,r,e){"use strict";t.exports=e.p+"img/3.762f963b.jpg"},804:function(t,r,e){"use strict";t.exports=e.p+"img/4.701faf5f.jpg"},981:function(t,r,e){"use strict";t.exports=e.p+"img/5.3ddc3bc1.jpg"},991:function(t,r,e){"use strict";t.exports=e.p+"img/6.6b517551.jpg"},951:function(t,r,e){"use strict";t.exports=e.p+"img/7.3fee5531.jpg"},40:function(t,r,e){"use strict";t.exports=e.p+"img/8.382cff30.jpg"},808:function(t,r,e){"use strict";t.exports=e.p+"img/9.9ba5e08d.jpg"}},r={};function e(c){var o=r[c];if(void 0!==o)return o.exports;var i=r[c]={exports:{}};return t[c](i,i.exports,e),i.exports}e.m=t,function(){var t=[];e.O=function(r,c,o,i){if(!c){var n=1/0;for(d=0;d<t.length;d++){c=t[d][0],o=t[d][1],i=t[d][2];for(var a=!0,s=0;s<c.length;s++)(!1&i||n>=i)&&Object.keys(e.O).every((function(t){return e.O[t](c[s])}))?c.splice(s--,1):(a=!1,i<n&&(n=i));if(a){t.splice(d--,1);var u=o();void 0!==u&&(r=u)}}return r}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[c,o,i]}}(),function(){e.d=function(t,r){for(var c in r)e.o(r,c)&&!e.o(t,c)&&Object.defineProperty(t,c,{enumerable:!0,get:r[c]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){e.p="/cart-app/"}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,c){var o,i,n=c[0],a=c[1],s=c[2],u=0;if(n.some((function(r){return 0!==t[r]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(s)var d=s(e)}for(r&&r(c);u<n.length;u++)i=n[u],e.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return e.O(d)},c=self["webpackChunkcart_app"]=self["webpackChunkcart_app"]||[];c.forEach(r.bind(null,0)),c.push=r.bind(null,c.push.bind(c))}();var c=e.O(void 0,[998],(function(){return e(858)}));c=e.O(c)})();
//# sourceMappingURL=app.92ea88b7.js.map