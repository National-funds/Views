webpackJsonp([1],{"+BTi":function(t,e){},"/bpg":function(t,e){},"8Vfb":function(t,e){},Dte2:function(t,e){},GXEp:function(t,e){},H3rH:function(t,e){},Mf0D:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("Dte2"),n("+BTi");var a=n("q4le"),i=n.n(a),s=(n("isE6"),n("LR6y")),c=n.n(s),o=(n("jZDA"),n("91Nw")),r=n.n(o),l=(n("d7TW"),n("ajQY")),u=n.n(l),p=(n("Q6SQ"),n("LQMI")),v=n.n(p),m=(n("V5v9"),n("D8db")),_=n.n(m),f=(n("/bpg"),n("ACGT")),d=n.n(f),h=(n("Mf0D"),n("exT9")),g=n.n(h),C=(n("bwiK"),n("SExR")),x=n.n(C),T=(n("H3rH"),n("6mNG")),P=n.n(T),b=(n("cDSy"),n("e0Bm")),S=n.n(b),I=(n("GXEp"),n("mtrD")),E=n.n(I),A=n("7+uW"),L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var w=n("VU/8")({name:"App"},L,!1,function(t){n("cM7w")},"data-v-d288a9b2",null).exports,y=n("/ocq"),D={data:function(){return{menuData:[{path:"/",name:"page5",label:"科研动态",icon:"document",url:"PageFive/PageFive"}]}},methods:{handleOpen:function(t,e){console.log(t,e)},handleClose:function(t,e){console.log(t,e)},clickMenu:function(t){this.$route.path===t.path||"/page1"===this.$route.path&&"/"==t.path||this.$router.push(t.path)}},computed:{noChildren:function(){return this.menuData.filter(function(t){return!t.children})},hasChildren:function(){return this.menuData.filter(function(t){return t.children})},isCollapse:function(){return this.$store.state.tab.isCollapse}}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:t.isCollapse,"background-color":"#fff","text-color":"#666","active-text-color":"#ffd04b"},on:{open:t.handleOpen,close:t.handleClose}},t._l(t.noChildren,function(e){return n("el-menu-item",{key:e.name,attrs:{index:e.label},on:{click:function(n){return t.clickMenu(e)}}},[n("span",{staticClass:"_title",attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.label))])])}),1)},staticRenderFns:[]};var M={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-container"},[e("div",{staticClass:"l-content"},[e("span",{staticClass:"tex"},[this._v("科研动态")])])])}]};var R={data:function(){return{}},components:{CommonAside:n("VU/8")(D,O,!1,function(t){n("tySd")},"data-v-4806f9dc",null).exports,CommonHeader:n("VU/8")({data:function(){return{}},methods:{handleMenu:function(){this.$store.commit("collapseMenu")}}},M,!1,function(t){n("pvwD")},"data-v-72a010b9",null).exports}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("el-container",{staticClass:"main"},[e("el-aside",{attrs:{"min-width:600px":""}},[e("common-aside")],1),this._v(" "),e("el-container",{staticClass:"wit"},[e("el-header",[e("common-header")],1),this._v(" "),e("el-main",[e("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var G=n("VU/8")(R,F,!1,function(t){n("8Vfb")},"data-v-35ad5c6a",null).exports,$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zw"},[a("h1",{staticClass:"title"},[a("b",[t._v("杨铮团队国家自然科学基金项目结题成果科普性介绍")])]),t._v(" "),a("p",{staticClass:"title",staticStyle:{"font-size":"18px","text-indent":"0cm"}},[t._v("发布时间：2022-12-14")]),t._v(" "),a("p",{staticClass:"title"},[t._v("国家自然科学基金项目结题成果科普性介绍-"),a("b",[t._v("室内位置隐私保护关键密码技术研究")])]),t._v(" "),a("p",{staticStyle:{"margin-bottom":"10px"}},[t._v("本项目来源于国家自然科学基金项目“室内位置隐私保护关键密码技术研究（61872051）”,起止时间\n        2019.01-2022.12。 本项目工作概括如下。")]),t._v(" "),a("h1",[t._v("一、主要研究内容")]),t._v(" "),a("p",[t._v("本项目主要研究室内位置隐私相关的关键密码理论与技术，并根据实际生活中的典型应用为背景研究位置服务基隐私保护协议构建技术。不仅完成了室内环境下各种针对位置隐私的安全攻击的模拟方式和安全目标的抽象定义，为室内位置隐私保护协议的构建和分析奠定理论基础，并构建了新型高效的室内定位位置隐私保护协议、位置接近性隐私检测协议以及位置证明协议等，以满足典型室内基于位置服务的隐私保护需要。另外，针对核心算法和协议，项目组完成原型系统开发和实验评估，为将来实际应用奠定了技术基础。\n    ")]),t._v(" "),a("p",[t._v("主要研究内容包括：")]),t._v(" "),a("p",[t._v("研究内容1：室内定位隐私安全模型")]),t._v(" "),a("p",[t._v("研究内容2：高效的室内定位服务隐私保护协议研究")]),t._v(" "),a("p",[t._v("研究内容3：室内位置隐私安全应用协议")]),t._v(" "),a("p",[t._v("研究内容4：室内隐私位置服务异常行为保护技术")]),t._v(" "),a("p",[t._v("研究内容5：研制位置隐私服务安全原型系统")]),t._v(" "),a("h1",[t._v("二、研究方法以及研究结果")]),t._v(" "),a("p",{staticClass:"min_title",staticStyle:{"text-indent":"0cm"}},[a("b",[t._v("2.1 室内定位隐私安全模型")])]),t._v(" "),a("p",[t._v("本项目提出了一个用于分析基于 Wifi 指纹的室内定位隐私协议的安全模型。通过研究，项目组发现许多现有的室内定位隐私安全模型的敌手模型较弱，并不能模拟实际生活中的许多典型攻击，例如已知位置攻击等。为涵盖各种最先进的实用型攻击，项目组提出了第一个形式化的室内定位安全模型，模拟了针对用户和服务器的攻击模型，详细定义了协议实体客户端和服务器端的隐私保护安全目标，并将其用于证明了项目负责人在INFOCOM 2018上提出的基于混淆电路的室内隐私协议的安全性。该模型尤其模拟了常见的恶意攻击行为，例如临时私钥泄露，恶意Wifi指纹查询，以及目标攻击区域选择攻击等。对于客户端隐私，该模型要求协议能防止敌手难以区分客户端的真实位置和随机位置； 对于服务器端隐私，要求敌手不能成功生成一个伪造的数据库来提供与服务器的真实数据库类似的功能，并结合3维欧几里得距离通过一种球形建模方式来刻画真实数据库和伪造数据库直接的功能区别。然后通过定义一个相识度检测函数对真实数据库和伪造数据库鉴别，从而判别该PPIL方案是否满足服务器安全。其中，该球形建模方式如图1所示，\n        对于Wifi指纹"),a("img",{attrs:{src:"http://latex.codecogs.com/gif.latex?{F_i}"}}),t._v("的客户端位置查询，若相应的位置"),a("img",{attrs:{src:"http://latex.codecogs.com/gif.latex?{L_i}'"}}),t._v("\n    和伪造位置"),a("img",{attrs:{src:"http://latex.codecogs.com/gif.latex?{L_i}'"}}),t._v("最多存在距离"),a("img",{attrs:{src:"http://latex.codecogs.com/gif.latex?\\rho"}}),t._v("，则称之为相似事件。")]),t._v(" "),a("div",{staticClass:"insert_img"},[a("img",{staticClass:"img",attrs:{src:n("Z6Y3")}}),t._v(" 图1. 水平面(左)和垂直面(右)中类似的事件发生示例（小黑点代表"),a("img",{attrs:{src:"http://latex.codecogs.com/gif.latex?\\mathrm{LT}"}}),t._v("\n        中的参考位置。红点表示真实位置"),a("img",{attrs:{src:"http://latex.codecogs.com/gif.latex?\\quad\\mathit{L}"}}),t._v("。绿色圆点表示发生类似事件的伪造位置"),a("img",{attrs:{src:"http://latex.codecogs.com/gif.latex?{L_i}'"}}),t._v("。蓝色圆点表示未发生类似事件的伪造位置\n        "),a("img",{attrs:{src:"http://latex.codecogs.com/gif.latex?{L_i}''"}}),t._v("）。\n    ")]),t._v(" "),a("p",{staticClass:"min_title",staticStyle:{"text-indent":"0cm"}},[a("b",[t._v("2.2 高效的室内定位服务隐私保护协议研究")])]),t._v(" "),a("p",[t._v("本项目基于带有可信第三方的客户服务器模式，开展高效的室内定位服务隐私保护协议设计研究。针对基于传统的通用多方安全计算协议的协议方案存在效率低下等问题，项目负责人与合作团队共同开展可外包的室内定位服务隐私保护协议研究。为解决客户服务器定位模式下的隐私定位服务存在协议执行效率低下的问题，本项目基于ABY隐私保护框架研究了将部分协议计算过程外包给第三方高性能服务器的隐私协议构建方式，提出了一个被称作PILOT的室内定位隐私保护协议（PPIL），该协议是第一个实用高效的基于密码技术的PPIL协议，大大降低了移动终端设备的计算和网络开销。PILOT的主要协议步骤如图2所示：1）客户端从附近N个Wifi接入点收集信号强度信息RSS形成Wifi信号指纹，并形成秘密共享列表；2）客户端分别发送秘密共享列表给外包服务器T0和T1；3）外包服务器T0和T1执行Wifi信号指纹基PPIL的安全两方计算协议STPC，并分别获得结果地址的秘密共享值；4）T0和T1分别发送结果地址的秘密共享值给客户端；5）客户端根据收到的结果秘密共享值重构地址。\n    ")]),t._v(" "),a("div",{staticClass:"insert_img"},[a("img",{staticClass:"img",attrs:{src:n("oz4V")}}),t._v(" "),a("span",[t._v("图2. PILOT总体框架图")])]),t._v(" "),a("p",{staticClass:"min_title",staticStyle:{"text-indent":"0cm"}},[a("b",[t._v("2.3 高速隐私位置接近性检测协议")])]),t._v(" "),a("p",[t._v("本项目针对位置基服务（如室内购物导航、寻找附近朋友并协商约会地点）的核心需要，重点研究了高效位置接近性检测隐私协议。研究团队根据现有位置接近性检测隐私协议存在的效率问题，重点研究了室内环境下新型位置接近性检测隐私协议构建方法和关键密码技术，以提高现有协议的各方面性能。项目负责人与合作团队基于不同的两方安全计算技术，包括ABY两方安全计算框架、DGK加法同态加密和Elgamal加法同态加密，设计和实现了多种置隐私接近性检测检测协议PPIL，在实现位置接近性检测服务的同时保护通信双方的位置信息。项目组根据不同的应用场景以及相应的优化需求，设计了不同的PPLP 协议，这些应用场景包括：1）有限的网络带宽；2）有限的电量和计算能力；3）运行时间敏感。由于本项目所有的PPLP协议都具有不同的优势，因此简要总结了所有PPIL协议的属性和用例，并给出了以下可能的适用场景：\n        "),a("img",{attrs:{src:"http://latex.codecogs.com/gif.latex?A B Y_{Y}"}}),t._v("协议在高带宽高时延网络中具有优势；"),a("img",{attrs:{src:"http://latex.codecogs.com/gif.latex?A B Y_{AY}"}}),t._v("更适用于中等带宽的低时延网络，尤其适用于计算较弱的设备；对于较小的τ值，"),a("img",{attrs:{src:"http://latex.codecogs.com/gif.latex? {\\textstyle \\sum_{ELG}} "}}),t._v("在任何网络类型中都能快速运行，如表1所示：\n    ")]),t._v(" "),a("div",{staticClass:"insert_img"},[a("span",[t._v("表1. 高效的PPLP协议的总结和适用场景")]),a("img",{staticClass:"img",attrs:{src:n("t9Ir")}})]),t._v(" "),a("p",{staticClass:"min_title",staticStyle:{"text-indent":"0cm"}},[a("b",[t._v("2.4 室内隐私位置服务异常行为保护技术")])]),t._v(" "),a("p",[t._v("为了实现某些敏感室内环境下（如政府大楼内部）更高级别的隐私保护，研究团队开展了恶意威胁模型下的隐私保护。本项目重点以轻量级隐私保护技术为突破口，研究适用于资源受限客户端的隐私保护密码原语——包括新身份认证因子、消息认证、以及安全通信等。以群时间基一次性口令算法及其在隐私位置证明协议构建中的应用为例，该成果首次引入了身份隐私安全属性，是一种全新的身份认证方案，不仅能够允许证明者在不暴露身份的情况下证明它是经过身份认证的组成员,并且结合了梅克尔树和布隆过滤器，能够将任何非对称TOTP方案转换为GTOTP方案。这是一种全新的结构，能够使得组验证状态的大小为常数级别。此外，本项目基于GTOTP构建了一个高效的具有隐私保护功能的位置证明方案PPPoL。经证明，该方案密码生成和验证时间分别是微秒级和毫秒级的，而位置证明生成时间小于1秒，这也说明我们的方案不仅了提供最大多数必要安全属性，同时具有轻量级的特性。\n        图3展示了一个验证窗口大小为2、用户数量为4的GTOTP算法实例，其中"),a("img",{attrs:{src:"http://latex.codecogs.com/gif.latex?\\hat{vp}^j_{\\text{ID}}"}}),t._v("为用户ID在第j个验证周期的TOTP验证点。\n    ")]),t._v(" "),a("div",{staticClass:"insert_img"},[a("img",{staticClass:"img",attrs:{src:n("NRrm")}}),a("span",[t._v("图3. GTOTP算法示例")])]),t._v(" "),a("p",{staticClass:"min_title",staticStyle:{"text-indent":"0cm"}},[a("b",[t._v("2.5 研制位置隐私服务安全原型系统")])]),t._v(" "),a("p",[t._v("研究团队针对上述研究中提出的隐私保护算法和协议开展原型系统研制，研究室内位置隐私保护协议的优化方案、策略和算法，以提高协议在资源受限设备上（如移动端设备）执行、通信和存储性能。同时，基于研制的原型系统，开展了相关仿真实验，验证设计算法和协议的实用性。研究团队与国内外相关研究团队合作，实现并实验了本项目构建相关核心算法和协议，并获得2项国际发明专利授权。部分实现代码已公布在网上，包括：")]),t._v(" "),a("p",{staticStyle:{"white-space":"nowrap"}},[t._v("1）\t基于ABY框架的室内定位隐私协议："),a("a",{attrs:{href:"https://github.com/encryptogroup/ppIndoorLocalization"}},[t._v("https://github.com/encryptogroup/ppIndoorLocalization")])]),t._v(" "),a("p",{staticStyle:{"white-space":"nowrap"}},[t._v("2）\t群时间基一次性口令以及隐私位置证明协议："),a("a",{attrs:{href:"https://github.com/I123T/DGTOTP "}},[t._v("https://github.com/I123T/DGTOTP ")])]),t._v(" "),a("h1",[t._v("三、主要研究成果")]),t._v(" "),a("p",[t._v("本项目最终已发表（已录用）22篇与本项目研究内容相关（标注本项目基金号）的学术论文成果，已授权国家发明专利2项。本项目相关论文成果大多发表在国内外高水平著名期刊或者国际会议上，其中包括中国计算机学会（CCF）或者中国密码学会（CACR）推荐A/B类论文8篇\n        （如"),a("b",[t._v("《ACM Transactions on Sensor Networks》、《The Computer Journal》，《IET Information Security》、AsiaCCS 2020,\n            ACSAC\n            2021，ACSAC 2022, FSE 2022，和Usenix Security 2023），中科院1区SCI论文2篇（即《IEEE Transactions on Industrial\n            Informatics》、《IEEE Internet of Things》）,")]),t._v(" 以及4篇CACR-C或CCF-C著名会议论文（即"),a("b",[t._v("IEEE Euro S&P 2019, SACMAT 2022，\n            ProveSec\n            2018和CANS 2018）。")])])])}]};var N=n("VU/8")({data:function(){return{}}},$,!1,function(t){n("npOg")},"data-v-41ac5dce",null).exports;A.default.use(y.a);var V=[{path:"/",component:G,redirect:"page1",children:[{path:"page1",component:N}]}],Y=new y.a({routes:V}),B=n("NYxO");A.default.use(B.a);var W=new B.a.Store({modules:{tab:{state:{isCollapse:!1},mutations:{collapseMenu:function(t){t.isCollapse=!t.isCollapse}}}}});n("tvR6");A.default.config.productionTip=!1,A.default.component(E.a.name,E.a),A.default.component(S.a.name,S.a),A.default.component(P.a.name,P.a),A.default.use(x.a),A.default.use(g.a),A.default.use(d.a),A.default.use(_.a),A.default.use(v.a),A.default.use(u.a),A.default.use(r.a),A.default.use(c.a),A.default.use(i.a),new A.default({el:"#app",router:Y,store:W,components:{App:w},template:"<App/>"})},NRrm:function(t,e,n){t.exports=n.p+"static/img/img3.93aff64.png"},Q6SQ:function(t,e){},V5v9:function(t,e){},Z6Y3:function(t,e,n){t.exports=n.p+"static/img/img1.090fbbe.png"},bwiK:function(t,e){},cDSy:function(t,e){},cM7w:function(t,e){},d7TW:function(t,e){},isE6:function(t,e){},jZDA:function(t,e){},npOg:function(t,e){},oz4V:function(t,e,n){t.exports=n.p+"static/img/img2.3caeeb8.png"},pvwD:function(t,e){},t9Ir:function(t,e,n){t.exports=n.p+"static/img/table1.ec128c8.png"},tvR6:function(t,e){},tySd:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.80b29b9f85a77ef5d635.js.map