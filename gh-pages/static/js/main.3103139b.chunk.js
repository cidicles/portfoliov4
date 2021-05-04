(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){e.exports=a(309)},140:function(e,t,a){},149:function(e,t,a){},251:function(e,t,a){},253:function(e,t,a){},255:function(e,t,a){},257:function(e,t,a){},259:function(e,t,a){},261:function(e,t,a){},263:function(e,t,a){},273:function(e,t){},306:function(e,t,a){},309:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(64),s=a.n(i),r=a(7),l=a(8),c=a(10),d=a(9),u=a(11),m=a(311),g=a(313),p=a(312),h=(a(140),a(6)),f="http://s3-us-west-1.amazonaws.com/ejs-portfolio/",b={home:{heading:"Let's Create",subHeading:"AMAZING EVERYTHING",cta:"About Me",bg:"".concat(f,"backgrounds/general/1.jpg")},about:{heading:"ABOUT ME",desc:"I am a multidisciplinary developer with a penchant for design. I love creating interactive and delightful user experiences and microinteractions using the latest and greatest.",cta:"Background",img:"https://picsum.photos/700/300/?random",bg:"".concat(f,"backgrounds/general/2.jpg")},approach:{heading:"Background",desc:"I've been a software developer for the last 14 years for everything from internal wikis to web based VR to multi-tenant high traffic applications. I have a strong understanding of agile workflow and knows what it takes to get it done in a multitude of environments.",cta:"Previous Work",img:"https://picsum.photos/700/300/?random",bg:"".concat(f,"backgrounds/general/3.jpg")},work:{heading:"Work",desc:"A small handful of the public projects I have completed over the years.",cta:"Contact",img:"https://picsum.photos/700/300/?random",bg:"".concat(f,"backgrounds/general/4.jpg")},contact:{heading:"Contact",desc:"You can give me a call at (818)-400-6145 any time to discuss your next project. I hope I hear from you.",cta:"View My Resume",img:"https://picsum.photos/700/300/?random",bg:"".concat(f,"backgrounds/general/5.jpg")}},v=a(42),y=a(22),w=a(67),k=a(131),E={bg:null},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BG":return Object.assign({},e,{bg:t.bg});default:return E}},x={key:"root",storage:a.n(k).a},M=Object(w.a)(x,j),S=a(132),C=a(23),P=a(310),I=(a(149),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={isOpen:!1},a.toggleMenu=a.toggleMenu.bind(Object(C.a)(Object(C.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"toggleMenu",value:function(e){var t=this.state.isOpen;this.setState({isOpen:!t})}},{key:"render",value:function(){var e=this,t=this.props.routes,a=this.state.isOpen;return n.a.createElement("nav",{className:"main-menu"},n.a.createElement("div",{className:"main-menu__logo",onClick:this.toggleMenu},n.a.createElement("svg",{viewBox:"0 0 64 64"},n.a.createElement("polygon",{points:"63.95 31.91 57.67 25.63 32.05 0 25.72 6.33 51.35 31.95 40.85 42.45 47.17 48.78 64 31.95 63.95 31.91"}),n.a.createElement("polygon",{points:"0.05 32.09 6.33 38.37 31.95 64 38.28 57.67 12.65 32.05 23.15 21.55 16.82 15.22 0 32.05 0.05 32.09"}))),n.a.createElement("div",{className:"main-menu-links ".concat(a?"open":"")},n.a.createElement("ul",null,t.map(function(t,a){return n.a.createElement("li",{key:"link-".concat(a),onClick:function(){return e.toggleMenu(t.bg)}},n.a.createElement(P.a,{to:t.path},t.name))}))))}}]),t}(o.Component)),A=a(1),_=a(24),T=a(20),O=a.n(T),D=(a(251),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={oldImage:null},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"getDimentions",value:function(){var e=window.innerWidth;return{width:e,height:e/16*9}}},{key:"componentWillUnmount",value:function(){this.app.destroy()}},{key:"componentDidMount",value:function(){var e=this;this.app=new A.Application(this.getDimentions().width,this.getDimentions().height,{antialias:!0,transparent:!0}),this.app.stage.interactive=!0,this.pixiCont.appendChild(this.app.view),this.stageContainer=new A.Container,this.app.stage.addChild(this.stageContainer),this.imgFilter=new _.e({sepia:0,vignetting:.1}),this.imgFilter2=new _.a({gamma:1,saturation:0,contrast:1,brightness:1,red:1,green:1,blue:1,alpha:.3}),this.imgFilter3=new _.g({mirror:!0,boundary:.8,amplitude:[0,20],waveLength:[200,100],alpha:[1,0],time:1}),this.imgContainer=new A.Container,this.imgContainer.filters=[this.imgFilter,this.imgFilter2,this.imgFilter3],this.stageContainer.addChild(this.imgContainer),this.mouseContainer=new A.Container,this.app.stage.addChild(this.mouseContainer),this.mouse={clientX:0,clientY:0},this.addMedia(),this.count=0,this.CRTfilter=new _.b({curvature:1,lineWidth:1,lineContrast:.8,verticalLine:!1,noise:.2,seed:0,vignetting:.2,vignettingAlpha:.1,vignettingBlur:.3,time:0}),this.godRayFilter=new _.d({angle:90,gain:.35,lacunrity:1.5,parallel:!0,center:[0,0]}),this.Glitchfilter=new _.c({slices:300,fillMode:3,sampleSize:512}),this.RGBSplitFilter=new _.f([-10,0],[0,10],[10,0]),this.rgbOffsets=[[-10,0],[0,10],[0,0]],this.stageContainer.filters=[this.CRTfilter,this.Glitchfilter,this.RGBSplitFilter],window.onresize=function(e){var t=window.innerWidth,a=window.innerHeight;this.app.renderer.resize(t,a),this.bgImg.width=this.getDimentions().width,this.bgImg.height=this.getDimentions().height}.bind(this),this.glitchCounter=0,this.asciiFilterCounter=.2,this.glitchCounterTime=0,this.ticker=0,this.app.ticker.add(function(t){e.bgImg&&(e.bgImg.alpha<1?(e.bgImg.alpha+=.07,e.Glitchfilter.offset=O.a.random(20,300),e.RGBSplitFilter.red=[O.a.random(0,10),O.a.random(0,10)],e.RGBSplitFilter.green=[O.a.random(0,10),O.a.random(0,10)],e.RGBSplitFilter.blue=[O.a.random(0,10),O.a.random(0,10)]):(e.Glitchfilter.offset=0,e.RGBSplitFilter.red=[0,0],e.RGBSplitFilter.green=[0,0],e.RGBSplitFilter.blue=[0,0])),e.video&&(e.video.alpha<1?(e.video.alpha+=.01,e.Glitchfilter.offset=O.a.random(20,300)):e.Glitchfilter.offset=0),e.CRTfilter.time+=.1,e.godRayFilter.time+=.003,e.imgFilter3.time+=.009})}},{key:"componentDidUpdate",value:function(){this.addMedia(),this.glitchCounter=0,this.asciiFilterCounter=0}},{key:"shouldComponentUpdate",value:function(e,t){return e.currentRoute!==this.props.currentRoute}},{key:"componentWillReceiveProps",value:function(){this.setState({oldImage:this.props.img})}},{key:"addMedia",value:function(){var e=this.props,t=e.img,a=e.currentRoute,o=e.routes,n=this.state.oldImage,i=t;t||(i=a.split("/").length-1>1?o.filter(function(e){return"/work/:pid"===e.path})[0].bg:o.filter(function(e){return e.path===a})[0].bg),n&&(this.bgImg2=A.Sprite.fromImage(n),this.bgImg2.anchor.set(0),this.bgImg2.x=0,this.bgImg2.y=0,this.bgImg2.width=this.getDimentions().width,this.bgImg2.height=this.getDimentions().height,this.imgContainer.addChild(this.bgImg2)),this.bgImg=A.Sprite.fromImage(i),this.bgImg.anchor.set(0),this.bgImg.x=0,this.bgImg.y=0,this.bgImg.alpha=0,this.bgImg.width=this.getDimentions().width,this.bgImg.height=this.getDimentions().height,this.imgContainer.addChild(this.bgImg)}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{id:"stage",ref:function(t){return e.pixiCont=t}})}}]),t}(o.Component));var H=Object(v.b)(function(e){return{img:e.bg}})(D),F=(a(253),h.b.h1({enter:{y:0,opacity:1,delay:500},exit:{y:100,opacity:0}})),N=h.b.h2({enter:{y:0,opacity:.2,delay:0},exit:{y:-100,opacity:0}}),W=h.b.div({enter:{opacity:1,delay:500},exit:{opacity:0}}),L=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"panel panel--center-all"},n.a.createElement(F,null,b.home.heading),n.a.createElement(N,null,b.home.subHeading),n.a.createElement(W,{className:"cta-tri-bottom"},n.a.createElement(P.a,{to:"/about"},b.home.cta)))}}]),t}(o.Component),R=(a(255),a(19)),B=h.b.p({enter:{delay:100,x:0,opacity:1},exit:{delay:100,x:50,opacity:0}}),Q=h.b.div({enter:{delay:300,x:0,opacity:1},exit:{delay:300,x:-500,opacity:0}}),G=h.b.h1({enter:{x:0,opacity:1},exit:{x:-500,opacity:0}}),z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"panel panel__offset"},n.a.createElement("div",{className:"panel__offset--column"},n.a.createElement(R.CidiMouseMove,{distX:.01,distY:.01,oMult:.01,time:.25},n.a.createElement(G,{className:"panel__offset--headline"},b.about.heading)),n.a.createElement(B,null,b.about.desc),n.a.createElement(R.CidiMouseMove,{distX:.04,distY:.04,oMult:.05,time:.25},n.a.createElement(P.a,{to:"/approach"},n.a.createElement(Q,{className:"cta"},b.about.cta)))),n.a.createElement("div",{className:"panel__about--column"}))}}]),t}(o.Component),V=(a(257),h.b.p({enter:{delay:100,x:0,opacity:1},exit:{delay:100,x:50,opacity:0}})),q=h.b.div({enter:{delay:300,x:0,opacity:1},exit:{delay:300,x:500,opacity:0}}),X=h.b.h1({enter:{x:0,opacity:1},exit:{x:500,opacity:0}}),U=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"panel panel__offset no-reverse"},n.a.createElement("div",{className:"panel__about--column"}),n.a.createElement("div",{className:"panel__offset--column"},n.a.createElement(R.CidiMouseMove,{distX:.01,distY:.01,oMult:.01,time:.25},n.a.createElement(X,{className:"panel__offset--headline"},b.approach.heading)),n.a.createElement(V,null,b.approach.desc),n.a.createElement(R.CidiMouseMove,{distX:.04,distY:.04,oMult:.05,time:.25},n.a.createElement(P.a,{to:"/work"},n.a.createElement(q,{className:"cta left"},b.approach.cta)))))}}]),t}(o.Component),Y=(a(259),{projects:[{idprojects:"0",logo:"".concat(f,"logos/_0016_jumanji.png"),title:"Jumanji Web VR",tagline:"Aww yeah. Web VR.",software:"",completedAt:"Avatar Labs",languages:["react VR","redux","three","CSS 3","HTML 5"],link:"http://jumanji360.com/ ",longdesc:"Build in React VR with guidance by the Oculus Team, Jumanji 360 was one of the first in feed VR experiences deployed on Facebook. The site was written in ES6 and uses Redux for routing and collection management.",images:null,videos:"".concat(f,"videos/jumanji.mp4"),color:"#ff5818",sessions:"",role:"Software Developer",medium:"Web"},{idprojects:"0",logo:"".concat(f,"logos/_0023_numnoms.png"),title:"Num Noms",tagline:"Super Delicious App",software:"",completedAt:"Avatar Labs",languages:["Unity"],link:"",longdesc:"One of the most fun projects I've done in recent memory. it was a C# match 3 build which was a rebuild of an existing phaser project. I released this app on all 3 app stores and it has over a million downloads. Tweens completed in DOTween.",images:null,videos:"".concat(f,"videos/numnoms.mp4"),color:"#ff8b99",sessions:"",role:"Software Developer (Unity C#)",medium:"Mobile (Native)"},{idprojects:"0",logo:"".concat(f,"logos/_0002_seapatrolbubble.png"),title:"Sea Patrol Contest",tagline:"Under the Sea with React",software:"",completedAt:"Spin Master",languages:["react","redux","TweenMax","webpack","Mongo","Mongoose","Express"],link:"",longdesc:"A daily instant win match 3 contest that ran for 4 months during the Sea Patrol Contest. This react build heavily utilized the low level transition group API along with Tween Max. In addition to the frontend I also completed the backend API for daily winner selection. I also built an admin panel for viewing and exporting daily winners secured with JWT and IP restriction to protect PII data.",images:null,videos:"".concat(f,"videos/seapatrol.mp4"),color:"#213a92",sessions:"",role:"Front-End Developer, Back-End Developer",medium:"Web"},{idprojects:"0",logo:"".concat(f,"logos/_0014_flushforce.png"),title:"Flush Force",tagline:"Compostable Collection API",software:"",completedAt:"Spin Master",languages:["react","redux","webpack","CSS 3","HTML 5"],link:"http://www.theflushforce.com/en_us/",longdesc:"A rapid less than one week build which featured a localized collection API along with a fun interactive leaflet driven map allowing you explore the land of the Flush Force.",images:null,videos:"".concat(f,"videos/flushforce.mp4"),color:"#6bbe4f",sessions:"",role:"Front-End Developer",medium:"Web"},{idprojects:"0",logo:"".concat(f,"logos/_0022_meccanomax.png"),title:"Meccano Max",tagline:"Quick Turn Around to the MAX",software:"",completedAt:"Freelance",languages:["react","redux","webpack","CSS 3","HTML 5"],link:"http://max.meccano.com/",longdesc:"A rapid web build in React which featured mouse move driven parallax animations.",images:null,videos:"".concat(f,"videos/max.mp4"),color:"#b1d244",sessions:"",role:"Front-End Developer",medium:"Web"},{idprojects:"0",logo:"".concat(f,"logos/_0013_emogenius.png"),title:"GSNTV: Emogenius",tagline:"Test Your Emoji Skill",software:"Illustrator, Photoshop, After Effects",completedAt:"Avatar Labs",languages:["react","redux","webpack","TweenMax","CSS 3","HTML 5"],link:"https://www.gsntv.com/games/emogenius-game/ ",longdesc:"GSN's emogenious game pits you againts the clock while you try and solve emoji based puzzles. The site was built using react and redux with tweenmax for animations. It features a number of virtual keyboards and is different every time you play by virtue of local storage.",images:null,videos:"".concat(f,"videos/gsn.mp4"),color:"#2172d7",sessions:"791,395",role:"Front-End Developer",medium:"Web"},{idprojects:"1",logo:"".concat(f,"logos/_0001_rustyrivets.png"),title:"Rusty Rivets",tagline:"No Config Rapid Web Build",software:"Illustrator, Photoshop, After Effects",completedAt:"Freelance",languages:["react","redux","TweenMax","CSS 3","HTML 5"],link:"http://www.rustyrivets.com/ ",longdesc:"An adult facing brand site. Rusty Rivets was bootstrapped with create-react-app and is fully localized. The site uses redux to store its product structure.",images:null,videos:"".concat(f,"videos/rusty.mp4"),color:"#f25d01",sessions:"791,395",role:"Front-End Developer, Designer",medium:"Web"},{idprojects:"2",logo:"".concat(f,"logos/_0012_doawk.png"),title:"Fox Movies: Seagull Swatter",tagline:"Smack those Gulls!",software:"Illustrator, Photoshop, After Effects",completedAt:"Avatar Labs",languages:["PhaserJS"],link:"",longdesc:"A fun PhaserJS build where you attempt to keep seagulls away from your food before the time runs out.",images:null,videos:"".concat(f,"videos/seagull.mp4"),color:"#ff5a00",sessions:"791,395",role:"Front-End Developer",medium:"Web"},{idprojects:"3",logo:"".concat(f,"logos/_0000_hyperrace.png"),title:"Air Hogs: Hyper Race",tagline:"An intense race through Photoshop, Tweenmax and jQuery.",software:"Illustrator, Photoshop, After Effects, 3dsMax",completedAt:"Spin Master",languages:["3ds Max","CSS 3","HTML 5","jQuery","MySQL","Photoshop","PHP","TweenMax"],link:"",longdesc:"This site was built for an Air Hogs TV campaign. It features a mysql/php driven voting system and tweenmax/timelinemax driven transitions between each section. I used 3dsmax to position and render the models.",images:null,videos:"".concat(f,"videos/hyperrace.mp4"),color:"#520d05",sessions:"New",role:"Front-End Developer, Designer, 3d",medium:"Web"},{idprojects:"4",logo:"".concat(f,"logos/_0009_airhogsconnect.png"),title:"Air Hogs: Connect",tagline:"AR Toys are the Future",software:"Illustrator, Photoshop, After Effects",completedAt:"Spin Master",languages:["CSS 3","HTML 5","Illustrator","Photoshop","jQuery","After Effects"],link:"http://connect.airhogs.com/",longdesc:"Air Hogs Connect was a quick brochure site built which was bootstrapped using yeoman. It features custom css animations as well as a reactive scroller.",images:null,videos:"".concat(f,"videos/connect.mp4"),color:"#faa61a",sessions:"791,395",role:"Front-End Developer, Designer, Motion",medium:"Web"},{idprojects:"5",logo:"".concat(f,"logos/_0021_meccano.png"),title:"Meccano",tagline:"The nuts and bolts of modern web development.",software:"Illustrator, Photoshop",completedAt:"Spin Master",languages:["Bower","Coffeescript","CSS 3","less","Foundation","Grunt","HTML 5","jQuery","MySQL","node JS","Photoshop"],link:"http://meccano.com/ ",longdesc:"Meccano was an ambitious project, adopting the Sails MVC to help manage an upcoming large site expansion. The site utilizes bower for package management, grunt for tasks, coffeescript for fun and less for styles.",images:null,videos:"".concat(f,"videos/meccano.mp4"),color:"#ff0000",sessions:"New",role:"Front-End Developer, Designer",medium:"Web"},{idprojects:"6",logo:"".concat(f,"logos/_0017_kawaiicrush.png"),title:"Kawaii Crush",tagline:"Unleasing my cutest Javascript, Illustrator and front-end skills.",software:"Illustrator, Photoshop, After Effects",completedAt:"Spin Master",languages:["After Effects","CSS 3","HTML 5","Illustrator","jQuery","Photoshop","PHP"],link:"",longdesc:"Kawaii was a blast. For this site I created a full screen side scrolling primary content area with custom built modal boxes to display interior content. I created the background city in Adobe Illustrator and based the look and feel on the already established Kawaii World. I used After Effects to create the youtube bumpers for the webisodes. With the help of the team at Spin Master we put together the character creator and the products section of the site.",images:null,videos:"".concat(f,"videos/kawaii.mp4"),color:"#e63d9c",sessions:"464,307",role:"Front-End Developer, Designer",medium:"Web"},{idprojects:"7",logo:"".concat(f,"logos/_0008_zoomer_dino.png"),title:"Zoomer Dino",tagline:"Exploring 3d forests with Vue and adventures in Angular.",software:"Illustrator, Photoshop, Vue",completedAt:"Spin Master",languages:["Angular","CSS 3","Foundation","HTML 5","Illustrator","jQuery","MySQL","PhaserJS","Photoshop","PHP","Vue"],link:"http://www.zoomerdino.com/",longdesc:"Zoomer Dino is a robotic Dinosaur that you attempt to train yourself. I say attempt because Dino really does have a mind of his own. The site itself was a quick build on the angular framework with a standards based localization model. The home screen jungle was created and rendered in Vue. ",images:null,videos:"".concat(f,"videos/dino.mp4"),color:"#b0c147",sessions:"340,170",role:"Front-End Developer, Designer, 3d",medium:"Web"},{idprojects:"8",logo:"".concat(f,"logos/_0011_chatsters.png"),title:"Chatsters",tagline:"How to apply your makeup using jQuery.",software:"Illustrator, Photoshop",completedAt:"Spin Master",languages:["Angular","CSS 3","HTML 5","Illustrator","jQuery","Photoshop","PHP"],longdesc:"Gabby is your little girls best friend. With a focus on interactive play gabby will recognize her accessories as well as chat with you through the Chatsters app. The site was built on the angular framework and features Phaser driven games, jquery based sprite animations and a simple products section.",images:null,videos:"".concat(f,"videos/chatsters.mp4"),color:"#ff00ba",sessions:"347,313",role:"Front-End Developer, Designer",medium:"Web"},{idprojects:"9",logo:"".concat(f,"logos/_0015_flutterbye-fairies.png"),title:"Flutterbye",tagline:"Building the 3d dream bedroom for a little girls fantasy realm.",software:"Illustrator, Photoshop, 3ds Max, Vray",completedAt:"Spin Master",languages:["3ds Max","Angular","CSS 3","HTML 5","Illustrator","jQuery","Photoshop","PHP","Vray"],link:"http://www.flutterbye.com/",longdesc:"Flutterbye is a girls brand which is enshrouded in mystery. The magic is real, you just have to find it. The site was modeled in 3ds Max using both purchased and created assets and was rendered in V-Ray 2.0. The site was built using Angular and PHP. ",images:null,videos:"".concat(f,"videos/flutterbye.mp4"),color:"#ad1ac3",sessions:"475,533",role:"Front-End Developer, Designer, 3d",medium:"Web"},{idprojects:"10",logo:"".concat(f,"logos/_0024_pokemon.png"),title:"Ionix - Pok\xe9mon",tagline:"Fun with Pok\xe9mon and TweenMax.",software:"Illustrator, Photoshop",completedAt:"Spin Master",languages:["CSS 3","HTML 5","jQuery","Photoshop","PHP","TweenMax"],link:"http://pokemon.ionixbricks.com/ ",longdesc:"The Pokemon Ionix site is a microsite used to show the products for the Pokemon line of Ionix toys. ",images:null,videos:"".concat(f,"videos/ionix-pokemon.mp4"),color:"#18a8fb",sessions:"36,098",role:"Front-End Developer, Designer",medium:"Web"},{idprojects:"11",logo:"".concat(f,"logos/_0004_spinmaster.png"),title:"Spin Master",tagline:"Pulling sites out of flash and into RWD.",software:"Illustrator, Photoshop",completedAt:"Spin Master",languages:["CSS 3","HTML 5","Illustrator","jQuery","MySQL","Photoshop","PHP"],link:"http://www.spinmaster.com/ ",longdesc:"The main home for all things Spin Master. This site is mostly a content display piece and utlizes a json feed from Oracle ATG to drive its products section and a simple MySQL database to drive the videos section. ",images:null,videos:"".concat(f,"videos/spinmaster.mp4"),color:"#007ad2",sessions:"2,060,754",role:"Front-End Developer, Designer",medium:"Web"},{idprojects:"13",logo:"".concat(f,"logos/_0010_bots.png"),title:"Battle of the Sexes",tagline:"A custom built php driven quiz engine rates your knowledge of the opposite sex.",software:"Illustrator, Photoshop",completedAt:"Spin Master",languages:["CSS 3","HTML 5","Illustrator","jQuery","MySQL","Photoshop","PHP"],link:"http://battleofthesexes.com/ ",longdesc:"Battle of the Sexes is a board game for adults where each sex tries to outdo the other by correctly answering questions about the other gender. The site was built upon PHP with a MySQL database. ",images:null,videos:"".concat(f,"videos/battleofthesexes.mp4"),color:"#b71766",sessions:"230,233",role:"Front-End Developer, Designer, Back-End Developer",medium:"Web"},{idprojects:"14",logo:"".concat(f,"logos/_0003_sickbricks.png"),title:"Sick Bricks",tagline:"Combining bricks and discovering characters with PHP and MySQL.",software:"Illustrator, Photoshop, Premeire",completedAt:"Spin Master",languages:["CSS 3","HTML 5","Illustrator","jQuery","MySQL","Photoshop","PHP","Premeire","TweenMax"],link:"http://sickbricks.com/ ",longdesc:"An extremely fun build focusing on clean graphics and engaging homepage videos. The site contains a custom built ajax driven character combiner which interfaces with an Oracle ATG based data feed and a complimentary MySQL database to complete the combinations. The site is also fully localized.",images:null,videos:"".concat(f,"videos/sickbricks.mp4"),color:"#3c78e5",sessions:"226,492",role:"Front-End Developer, Designer",medium:"Web"},{idprojects:"15",logo:"".concat(f,"logos/starwarsairhogs.png"),title:"Star Wars: Air Hogs",tagline:"Fandom through 3d and rapid web development.",software:"Illustrator, Photoshop, 3dsMax",completedAt:"Spin Master",languages:["3ds Max","Bower","CSS 3","Foundation","HTML 5","Illustrator","jQuery","less","Photoshop","PHP","Vray"],link:"http://starwars.airhogs.com/ ",longdesc:"I let my inner Star Wars nerd out for this one. Using some amazing assets supplied by the Air Hogs team I modeled and rendered a nice platform in 3dsmax and finished it up in photoshop. The site itself is a simple flat building using Zurb's Foundation as a base and animations with jQuery. The front-end for this site was built in a single day (ftw).",images:null,videos:"".concat(f,"videos/starwarsairhogs.mp4"),color:"#f6bb22",sessions:"New",role:"Front-End Developer, Designer, 3d",medium:"Web"},{idprojects:"16",logo:"".concat(f,"logos/_0018_legendary_yoda.png"),title:"Star Wars: Legendary Yoda",tagline:"Bootstrap speed with a little dash of javascript.",software:"Illustrator, Photoshop, 3dsMax",completedAt:"Spin Master",languages:["Bootstrap","CSS 3","HTML 5","jQuery","Photoshop","PHP"],link:"http://legendaryyoda.com/ ",longdesc:"This was a very basic product site for the Legendary Yoda collectible. It uses bootstrap as a base and features some simple jQuery animations.",images:null,videos:"".concat(f,"videos/legendaryyoda.mp4"),color:"#1f4e06",sessions:"New",role:"Front-End Developer, Designer",medium:"Web"},{idprojects:"17",logo:"".concat(f,"logos/_0020_logoparty.png"),title:"Logo Party",tagline:"Interactive video based quiz engine with javascript.",software:"Illustrator, Photoshop, 3dsMax",completedAt:"Spin Master",languages:["After Effects","CSS 3","Illustrator","jQuery","MySQL","Photoshop","PHP"],link:"",longdesc:"Logo Party was built as a quiz site and uses php and javascript as a quiz engine to allow users to interact and answer questions based on the video currently playing. All responses are timed and result in more points the quicker they answer.",images:null,videos:"".concat(f,"videos/logoparty.mp4"),color:"#1c3791",sessions:"215,792",role:"Front-End Developer, Designer, Back-End Developer",medium:"Web"},{idprojects:"18",logo:"".concat(f,"logos/_0007_tenkaiknights.png"),title:"Tenkai Knights",tagline:"Building a side scroller from scratch using jQuery.",software:"Illustrator, Photoshop, 3dsMax",completedAt:"Spin Master",languages:["After Effects","CSS 3","Flash","HTML 5","Illustrator","jQuery","Photoshop","PHP","Premeire"],link:"http://tenkaiknights.com/ ",longdesc:"Tenkai Knights is a boys construction brand featuring shapeshifting bricks. The site was built in PHP and relies heavily on jquery for content loading and navigation. The site features a custom built side scroller navigation written entirely in javascript. The 3d renders and animations were completed by C2C Studios. After Effects was used to create the transformation simulator on the site. JW Player cue points drive the interactive instruction pages. ",images:null,videos:"".concat(f,"videos/tenkaiknights.mp4"),color:"#fb331f",sessions:"791,395",role:"Front-End Developer, Designer",medium:"Web"},{idprojects:"20",logo:"".concat(f,"logos/_0019_vectronspace.png"),title:"Air Hogs: Vectron in Space",tagline:"Scroll your way into space with an interactive timeline.",software:"Illustrator, Photoshop, 3dsMax",completedAt:"Spin Master",languages:["3ds Max","CSS 3","HTML 5","Illustrator","jQuery","Photoshop","PHP"],link:"http://vectron.airhogs.com/ ",longdesc:"Vectron in Space was built for an Air Hogs ad campaign and features a scrollable timeline as well as a small product rotator for a 360 image rendered in 3dsmax.",images:null,videos:"".concat(f,"videos/vectroninspace.mp4"),color:"#9bbc51",sessions:"791,395",role:"Front-End Developer, Designer, 3d",medium:"Web"}]}),J=h.b.div({enter:{y:0,opacity:1},exit:{y:10,opacity:0}}),K=h.b.div({enter:{staggerChildren:50}}),Z=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"work"},n.a.createElement("div",{className:"text-center"},n.a.createElement("h1",null,b.work.heading),n.a.createElement("p",null,b.work.desc),n.a.createElement(P.a,{to:"/contact"},n.a.createElement("div",{className:"cta-block"},b.work.cta))),n.a.createElement(K,{className:"grid grid--4-col-even"},Y.projects.map(function(e,t){return n.a.createElement(P.a,{to:"/work/".concat(t),key:"project-".concat(t)},n.a.createElement(J,{className:"grid__item",style:{background:e.color}},n.a.createElement("img",{src:e.logo,alt:e.title}),n.a.createElement("h4",null,e.title)))})))}}]),t}(o.Component),$=(a(261),a(263),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.src;return n.a.createElement("div",{className:"video"},n.a.createElement("video",Object.assign({muted:!0},this.props),n.a.createElement("source",{src:e,type:"video/mp4"})))}}]),t}(o.Component)),ee=a(133),te=a.n(ee),ae=h.b.h1({enter:{x:0,opacity:1},exit:{x:-90,opacity:0}}),oe=h.b.h3({enter:{x:0,opacity:1},exit:{x:90,opacity:0}}),ne=h.b.hr({enter:{rotate:0,opacity:1},exit:{rotate:-20,opacity:0}}),ie=h.b.div({enter:{staggerChildren:50}}),se=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={workDetail:Y.projects[a.props.match.params.pid],hasHeading:!0},a.toggleHeading=a.toggleHeading.bind(Object(C.a)(Object(C.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo({top:0,behavior:"smooth"})}},{key:"toggleHeading",value:function(){var e=this.state.hasHeading;console.log(e),this.setState({hasHeading:!e})}},{key:"render",value:function(){var e=this.state,t=e.workDetail,a=e.hasHeading;return n.a.createElement(ie,{className:"content-z"},n.a.createElement("div",{className:"".concat(a?"":"featured-heading-hidden"," featured-heading"),style:{backgroundColor:t.color}},n.a.createElement("div",{className:"featured-copy",onClick:this.toggleHeading},n.a.createElement(ae,null,t.title),n.a.createElement(ne,{className:"featured-accent"}),n.a.createElement(oe,null,t.tagline),n.a.createElement("div",{className:"featured-accent-tri"})),n.a.createElement("div",{className:"featured-tab",onClick:this.toggleHeading},a?"Hide Title":"Show Title"),n.a.createElement(P.a,{to:"/work"},n.a.createElement("div",{className:"featured-back"},"Back to Work")),n.a.createElement("div",{className:"featured-video"},n.a.createElement($,{src:t.videos,autoPlay:!0,loop:!0,controls:!1}))),n.a.createElement("div",{className:"featured-work"},n.a.createElement("div",{className:"grid grid--2-col-golden"},n.a.createElement("div",null,n.a.createElement("div",{className:"featured-block"},n.a.createElement("h3",null,"Role"),n.a.createElement("h4",null,t.role)),n.a.createElement("div",{className:"featured-block"},n.a.createElement("h3",null,"Completed At"),n.a.createElement("h4",null,t.completedAt)),n.a.createElement("div",{className:"featured-block"},n.a.createElement("h3",null,"Medium"),n.a.createElement("h4",null,t.medium))),n.a.createElement("div",null,n.a.createElement("div",{className:"featured-block"},n.a.createElement("h3",null,"Description"),n.a.createElement("p",null,t.longdesc)),n.a.createElement("div",{className:"featured-block"},n.a.createElement("h3",null,"Built With"),n.a.createElement("ul",{className:"featured-skills"},t.languages&&t.languages.map(function(e,t){return n.a.createElement("li",{"data-tip":e.toUpperCase(),"data-place":"top",key:"language-".concat(t)},n.a.createElement("img",{src:"".concat(f,"logos/").concat(e.toLowerCase().replace(" ",""),".png"),alt:e.toUpperCase()}))})),""!==t.link&&n.a.createElement("a",{className:"featured-link",href:t.link,rel:"noopener noreferrer",target:"_blank",title:t.title},"Visit Build"),n.a.createElement(P.a,{to:"/work"},n.a.createElement("div",{className:"featured-link highlight"},"Back to Work")))))),n.a.createElement(te.a,null))}}]),t}(o.Component),re=(a(306),h.b.p({enter:{delay:100,x:0,opacity:1},exit:{delay:100,x:50,opacity:0}})),le=h.b.div({enter:{delay:300,x:0,opacity:1},exit:{delay:300,x:-500,opacity:0}}),ce=h.b.h1({enter:{x:0,opacity:1},exit:{x:-500,opacity:0}}),de=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"panel panel__offset panel--70"},n.a.createElement("div",{className:"panel__offset--column"},n.a.createElement(R.CidiMouseMove,{distX:.01,distY:.01,oMult:.01,time:.25},n.a.createElement(ce,{className:"panel__offset--headline"},b.contact.heading)),n.a.createElement(re,null,b.contact.desc),n.a.createElement(R.CidiMouseMove,{distX:.04,distY:.04,oMult:.05,time:.25},n.a.createElement("a",{href:"https://docs.google.com/document/d/e/2PACX-1vTizRNqZ1PnChaGoiozqOgHGXbUz1X0_lpK91xE2neaFyZjDg1HqMlqO7C6TXMGtq7Nn4gxB59X7i8e/pub"},n.a.createElement(le,{className:"cta"},b.contact.cta)))),n.a.createElement("div",{className:"panel__about--column"}))}}]),t}(o.Component),ue=h.b.div({enter:{opacity:1,beforeChildren:!0},exit:{opacity:0}}),me=function(){var e=Object(y.c)(M,!1);return{store:e,persistor:Object(w.b)(e)}}(),ge=me.store,pe=me.persistor,he=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={routes:[{name:"Home",exact:!0,component:L,path:"/",display:!0,bg:b.home.bg},{name:"Who I Am",exact:!0,component:z,path:"/about",display:!0,bg:b.about.bg},{name:"How We Fit",exact:!0,component:U,path:"/approach",display:!0,bg:b.approach.bg},{name:"Work",exact:!0,component:Z,path:"/work",display:!0,bg:b.work.bg},{name:"Contact",exact:!0,component:de,path:"/contact",display:!0,bg:b.contact.bg},{name:"Work Detail",exact:!1,component:se,path:"/work/:pid",display:!1,bg:b.work.bg}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.routes;return n.a.createElement(v.a,{store:ge},n.a.createElement(S.PersistGate,{loading:null,persistor:pe},n.a.createElement(m.a,null,n.a.createElement(g.a,{render:function(a){var o=a.location;return n.a.createElement("div",{id:"site-container"},n.a.createElement(I,{routes:t.filter(function(e){return!0===e.display})}),n.a.createElement(H,{routes:t,currentRoute:o.pathname}),n.a.createElement(h.a,null,n.a.createElement(ue,{key:o.pathname},n.a.createElement(p.a,{location:o},e.state.routes.map(function(e,t){return n.a.createElement(g.a,{path:e.path,exact:e.exact,component:e.component,key:"route-".concat(t)})})))))}}))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(he,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[135,2,1]]]);
//# sourceMappingURL=main.3103139b.chunk.js.map