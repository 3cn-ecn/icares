"use strict";(self.webpackChunkicares=self.webpackChunkicares||[]).push([[811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return a?r.createElement(k,i(i({ref:t},u),{},{components:a})):r.createElement(k,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var r=a(7462),n=a(7294),l=a(3905),i=a(2389),o=a(6010),s=a(7392),p=a(7094),u=a(2466);const m="tabList__CuJ",d="tabItem_LNqP";function c(e){var t;const{lazy:a,block:l,defaultValue:i,values:c,groupId:k,className:N}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=c??h.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),v=(0,s.l)(f,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===i?i:i??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==g&&!f.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:y}=(0,p.U)(),[w,C]=(0,n.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=k){const e=b[k];null!=e&&e!==w&&f.some((t=>t.value===e))&&C(e)}const P=e=>{const t=e.currentTarget,a=T.indexOf(t),r=f[a].value;r!==w&&(O(t),C(r),null!=k&&y(k,String(r)))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",m)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},N)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:x,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,n.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function k(e){const t=(0,i.Z)();return n.createElement(c,(0,r.Z)({key:String(t)},e))}const N="tabItem_Ymn6";function h(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(N,r),hidden:a},t)}const f={sidebar_position:3,pagination_next:null,pagination_prev:null,last_update:{date:new Date("2022-10-31T00:00:00.000Z")}},v="Infos Pratiques",g={unversionedId:"infos-pratiques",id:"infos-pratiques",title:"Infos Pratiques",description:"Inscription et Billetterie",source:"@site/docs/infos-pratiques.md",sourceDirName:".",slug:"/infos-pratiques",permalink:"/infos-pratiques",draft:!1,tags:[],version:"current",lastUpdatedAt:1667174400,formattedLastUpdatedAt:"31 oct. 2022",sidebarPosition:3,frontMatter:{sidebar_position:3,pagination_next:null,pagination_prev:null,last_update:{date:"2022-10-31T00:00:00.000Z"}},sidebar:"mainSidebar"},b={},y=[{value:"Inscription et Billetterie",id:"inscription-et-billetterie",level:2},{value:"Dates et lieu",id:"dates-et-lieu",level:2},{value:"Logement et nourriture",id:"logement-et-nourriture",level:2},{value:"Transports sur Nantes",id:"transports-sur-nantes",level:2}],w=(C="BrowserOnly",function(e){return console.warn("Component "+C+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)});var C;const T={toc:y};function O(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"infos-pratiques"},"Infos Pratiques"),(0,l.kt)("h2",{id:"inscription-et-billetterie"},"Inscription et Billetterie"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Comment participer aux ICAres\xa0? On vous explique tout\xa0!")),(0,l.kt)(w,{mdxType:"BrowserOnly"},(0,l.kt)(k,{groupId:"ecoles",defaultValue:(0,i.Z)()?new URL(document.location).searchParams.get("centrale")??"tous":"tous",mdxType:"Tabs"},(0,l.kt)(h,{value:"tous",label:"Pour tous",default:!0,mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Organisez-vous au sein de votre \xe9cole pour savoir qui repr\xe9sentera l'\xe9cole pour\nchaque \xe9preuve. Attention, le nombre de places est limit\xe9 donc organisez-vous bien\navant !"),(0,l.kt)("li",{parentName:"ol"},"Remplissez le ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://forms.gle/v7xsksGSuGZYG26Q9"},"Formulaire d'Inscription")),"\npour enregistrer votre participation. Vous pourrez modifier plus tard les\n\xe9preuves choisies, mais pas la formule de prix !"),(0,l.kt)("li",{parentName:"ol"},"Payez la formule choisie dans le formulaire sur la\n",(0,l.kt)("a",{parentName:"li",href:"https://www.helloasso.com/associations/association-culturelle-de-l-ecole-centrale-de-nantes/evenements/icares-5eme-edition-nantes-participation-et-logement"},(0,l.kt)("strong",{parentName:"a"},"Billetterie en Ligne")),"."))),(0,l.kt)(h,{value:"nantes",label:"Centrale Nantes",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Pour chaque \xe9preuve \xe0 laquelle vous souhaitez participer, contactez le respo\n\xe9preuve correspondant pour vous pr\xe9-inscrire\xa0: c'est lui qui d\xe9cidera\nqui repr\xe9sentera Centrale Nantes pour cette \xe9preuve\xa0!"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Liste des respos d'\xe9preuves"),(0,l.kt)("table",{parentName:"li"},(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\xc9preuve"),(0,l.kt)("th",{parentName:"tr",align:null},"Respo"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Battle de danse"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/100019288382643"},"\xc9l\xe9onore M'Weitte Lucas"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BD"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/maelchakma"},"Ma\xebl Cauchem'Art Chakma"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Chant solo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/gladys.ringenbach"},"Gladys Cauchem'Art Ringenbach"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cheer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/emeline.olivier.311"},"\xc9meline Olivier"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Chorale"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/100071935519339"},"Chiara Cauchem'Art St Giniez"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Court M\xe9trage"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/loic.buatois.54"},"Lo\xefc Cauchem'Art Buatois"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cuisine"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/100070789186976"},"Tess Cauchem'Art Chemouny"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Danse de couple"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/stella.massi.54"},"Estelle Phant\xf4me Massi"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Danse de groupe"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/100019288382643"},"\xc9l\xe9onore M'Weitte Lucas"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Dessin"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/100071729173091"},"Romain Artsc\xe8ne Dassonneville"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Fanfare"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/100005913557059"},"L\xe9onie Cauchem'Art Duran"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Impro"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/guilwen.meunier"},"Guilwen Cauchem'Art Meunier"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Musique de groupe"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/maxime.buquet.79"},"Maxime Phant\xf4me Buquet"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Nouvelle"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/100072127944738"},"Jo Cauchem'Art Mars"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Orchestre"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/benoit.huet.984"},"Beno\xeet Cata Huet"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Peinture"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/100071729173091"},"Romain Artsc\xe8ne Dassonneville"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Photo"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/100010211373269"},"Mat\xe9o Cauchem'Art Gobinaud"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Po\xe9sie"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/100072127944738"},"Jo Cauchem'Art Mars"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rap"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/100017809395582"},"Arthur Astier"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Th\xe9\xe2tre"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://m.me/100066972776026"},"L\xe9o Clerc"))))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Une fois la pr\xe9-inscription valid\xe9e, remplissez le ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://forms.gle/v7xsksGSuGZYG26Q9"},"Formulaire d'Inscription")),"\npour enregistrer votre participation. Vous pourrez modifier plus tard les\n\xe9preuves choisies, mais pas la formule de prix !")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Payez la formule choisie dans le formulaire sur la\n",(0,l.kt)("a",{parentName:"p",href:"https://www.helloasso.com/associations/association-culturelle-de-l-ecole-centrale-de-nantes/evenements/icares-5eme-edition-nantes-participation-et-logement"},(0,l.kt)("strong",{parentName:"a"},"Billetterie en Ligne")),".")))),(0,l.kt)(h,{value:"lille",label:"Centrale Lille",mdxType:"TabItem"},(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Organisez-vous avec le BDA pour savoir qui repr\xe9sentera l'\xe9cole pour\nchaque \xe9preuve. Attention, le nombre de places est limit\xe9 donc organisez-vous bien\navant !"),(0,l.kt)("li",{parentName:"ol"},"Remplissez le ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"https://forms.gle/v7xsksGSuGZYG26Q9"},"Formulaire d'Inscription")),"\npour enregistrer votre participation. Vous pourrez modifier plus tard les\n\xe9preuves choisies, mais pas la formule de prix !"),(0,l.kt)("li",{parentName:"ol"},"Ne payez pas sur la billetterie commune : votre BDA vous communiquera plus tard\nla billetterie sur laquelle vous payerez. "))))),(0,l.kt)("admonition",{title:"Tarifs \ud83e\udd11",type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("strong",{parentName:"p"},"Tarif normal")," (repas et soir\xe9e inclus)\xa0: 23\xa0\u20ac",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Tarif normal + logement"),"\xa0: 28\xa0\u20ac",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Participation aux \xe9preuves sans venue \xe0 Nantes"),"\xa0: 5\xa0\u20ac",(0,l.kt)("br",null),"\n",(0,l.kt)("strong",{parentName:"p"},"Tarif soir\xe9e seule"),"\xa0: ",(0,l.kt)("em",{parentName:"p"},"disponible plus tard"))),(0,l.kt)("h2",{id:"dates-et-lieu"},"Dates et lieu"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dates : du 18 au 20 novembre 2022. Arriv\xe9e attendue le vendredi \xe0 partir de 19h, et fin des \xe9preuves le dimanche vers 14h."),(0,l.kt)("li",{parentName:"ul"},"Lieu : ",(0,l.kt)("a",{parentName:"li",href:"https://goo.gl/maps/g6VtFMzKGTmGTCto9"},"\xc9cole Centrale de Nantes, 1 rue de la No\xeb 44321 Nantes"))),(0,l.kt)("h2",{id:"logement-et-nourriture"},"Logement et nourriture"),(0,l.kt)("p",null,"Il sera possible de demander \xe0 \xeatre log\xe9 sur place chez les \xe9tudiants de Centrale\nNantes lors de votre inscription sur la billetterie. Des repas seront aussi propos\xe9s\nle samedi (matin, midi, et soir) et le dimanche (matin et midi)."),(0,l.kt)("p",null,"Pensez \xe0 apporter :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Duvet et matelas/tapis de sol si avez demand\xe9 \xe0 \xeatre log\xe9"),(0,l.kt)("li",{parentName:"ul"},"2 ou 3 \xe9cocups (pour les petit-dej, si vous voulez boisson chaude + boisson froide + c\xe9r\xe9ales)"),(0,l.kt)("li",{parentName:"ul"},"Couverts et assiette pour les repas")),(0,l.kt)("admonition",{title:"Attention",type:"danger"},(0,l.kt)("p",{parentName:"admonition"},"Aucun repas ne sera servi le vendredi soir. Pensez \xe0 apporter votre pique-nique !")),(0,l.kt)("h2",{id:"transports-sur-nantes"},"Transports sur Nantes"),(0,l.kt)("p",null,"Les transports en commun \xe0 Nantes sont ",(0,l.kt)("strong",{parentName:"p"},"gratuits")," le week-end, \xe0 partir du vendredi soir minuit. Pensez \xe0 pr\xe9voir un peu de monnaie au cas o\xf9 vous avez besoin de vous d\xe9placer le vendredi soir."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Plus d'infos sur les transports en commun \xe0 Nantes : ",(0,l.kt)("a",{parentName:"li",href:"https://www.tan.fr/"},"tan.fr")),(0,l.kt)("li",{parentName:"ul"},"Plan touristique PDF : ",(0,l.kt)("a",{parentName:"li",href:"https://www.tan.fr/fr/plans/plan-decouverte"},"tan.fr/fr/plans/plan-decouverte"))))}O.isMDXComponent=!0}}]);