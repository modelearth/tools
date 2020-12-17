(this["webpackJsonpdc-dashboard"]=this["webpackJsonpdc-dashboard"]||[]).push([[0],{149:function(e,t,a){var n={"./covid19.json":376,"./socialWellness.json":377};function o(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=149},196:function(e,t,a){e.exports=a(389)},376:function(e){e.exports=JSON.parse('{"configuration":{"subtitle":"COVID-19 Dashboard","footer":"Data from WHO & NYT, based on reports from state and local health agencies.","placeTypes":["Country","State","County"],"subregionSelectionButton":[{"id":"County","text":"Compare Counties"},{"id":"State","text":"Compare States"}],"pluralPlaceTypes":{"Country":"Countries","State":"States","County":"Counties"},"tableDefaultSortBy":"movingAverageCases"},"content":{"cumulativePanel":[{"title":"Total Cases","dataKey":"cumulativeCases","color":"--dc-red-strong"},{"title":"Total Deaths","dataKey":"cumulativeDeaths","color":"grey"},{"title":"Total Recovered","dataKey":"cumulativeRecovered","color":"green"},{"title":"Total Hospitalized","dataKey":"cumulativeHospitalized","color":"orange"},{"title":"Total ICU","dataKey":"cumulativeICU","color":"navy"}],"table":[{"title":"Cases","id":"movingAverageCases","typeOf":"lineGraph","color":"--dc-red-strong","graphSubtitle":"New Cases (7d Moving Average)","enabled":true},{"title":"Cases / 1M People","id":"perCapitaCases","typeOf":"lineGraph","color":"--dc-red-strong","graphSubtitle":"New Cases / 1M People (7d Moving Average)","enabled":true},{"title":"Deaths","id":"movingAverageDeaths","typeOf":"lineGraph","color":"grey","graphSubtitle":"New Deaths (7d Moving Average)","enabled":true},{"title":"Deaths / 1M People","id":"perCapitaDeaths","typeOf":"lineGraph","color":"grey","graphSubtitle":"New Deaths / 1M People (7d Moving Average)","enabled":true},{"title":"Cases 7d % Change","id":"pctChangeCases","typeOf":"lineGraph","color":"--dc-red-strong","graphSubtitle":"Cases % Change from Previous Week","enabled":true},{"title":"Deaths 7d % Change","id":"pctChangeDeaths","typeOf":"lineGraph","color":"grey","graphSubtitle":"Deaths % Change from Previous Week","enabled":true},{"title":"Recovered","id":"movingAverageRecovered","typeOf":"lineGraph","color":"green","graphSubtitle":"New Recoveries (7d Moving Average)","enabled":false},{"title":"Hospitalized","id":"movingAverageHospitalized","typeOf":"lineGraph","color":"orange","graphSubtitle":"New Hospitalizations (7d Moving Average)","enabled":false},{"title":"ICU","id":"movingAverageICU","typeOf":"lineGraph","color":"navy","graphSubtitle":"New ICU Hospitalizations (7d Moving Average)","enabled":false}]}}')},377:function(e){e.exports=JSON.parse('{"configuration":{"subtitle":"Social Wellness Dashboard","footer":"Data from U.S. Census & Europa.eu","placeTypes":["Country","State"],"subregionSelectionButton":[],"pluralPlaceTypes":{"Country":"Countries","State":"States","County":"Counties"},"tableDefaultSortBy":"cumulativeUnemploymentRate"},"content":{"cumulativePanel":[{"title":"Currrently Above Poverty","dataKey":"cumulativeAbovePovertyInLast12Months","color":"--dc-red-strong"},{"title":"Currently Below Poverty","dataKey":"cumulativeBelowPovertyInLast12Months","color":"grey"},{"title":"Total Unemployed","dataKey":"cumulativeUnemployed","color":"navy"},{"title":"Newly Reported Crimes","dataKey":"cumulativeCrime","color":"black"},{"title":"Gross Domestic Product","dataKey":"cumulativeGDP","color":"black"}],"table":[{"title":"Above Poverty","id":"cumulativeAbovePovertyInLast12Months","typeOf":"lineGraph","color":"--dc-red-strong","graphSubtitle":"Total Population Above Poverty (Last 12 Months)","enabled":false},{"title":"Above Poverty / 1M People","id":"perCapitaAbovePovertyInLast12Months","typeOf":"lineGraph","color":"--dc-red-strong","graphSubtitle":"Total Population Above Poverty (Last 12 Months) / 1M People","enabled":true},{"title":"Below Poverty","id":"cumulativeBelowPovertyInLast12Months","typeOf":"lineGraph","color":"grey","graphSubtitle":"Total Population Below Poverty (Last 12 Months)","enabled":false},{"title":"Below Poverty / 1M People","id":"perCapitaBelowPovertyInLast12Months","typeOf":"lineGraph","color":"grey","graphSubtitle":"Total Population Below Poverty (Last 12 Months) / 1M People","enabled":true},{"title":"Unemployed","id":"cumulativeUnemployed","typeOf":"lineGraph","color":"navy","graphSubtitle":"Total Unemployed Population","enabled":false},{"title":"Unemploy. % Rate","id":"cumulativeUnemploymentRate","typeOf":"lineGraph","color":"navy","graphSubtitle":"Unemployment Rate (In Percent)","enabled":true},{"title":"Crimes","id":"cumulativeCrime","typeOf":"lineGraph","color":"orange","graphSubtitle":"Total Reported Crimes","enabled":false},{"title":"Crimes / 1M People","id":"perCapitaCrime","typeOf":"lineGraph","color":"orange","graphSubtitle":"Total Reported Crimes / 1M People","enabled":true},{"title":"Gini Index %","id":"cumulativeGiniIndex","typeOf":"lineGraph","color":"purple","graphSubtitle":"Economic Gini Index (In Percent)","enabled":true},{"title":"Life Expectancy","id":"cumulativeLifeExpectancy","typeOf":"lineGraph","color":"green","graphSubtitle":"Human Life Expectancy","enabled":true},{"title":"GDP","id":"cumulativeGDP","typeOf":"lineGraph","color":"black","graphSubtitle":"Gross Domestic Product","enabled":false},{"title":"GDP / 1M People","id":"perCapitaGDP","typeOf":"lineGraph","color":"black","graphSubtitle":"Gross Domestic Product / 1M People","enabled":true}]}}')},378:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABk0lEQVR4Ae3XAWQCURzH8eEwHIbhAEMYAoQQYggBhiGEMAQYhmEYYBhgGEIYwhCGEA6HcAiHMBzgMIRwaF+Ec+69/u90e6gvH4i7/di9TmdH06ntduuiX6AHx8agMVS92BgUQtXUxqA1VEX/PcaDrrSKP1rHAp9oZz5vYY59TVHfXeOgiykCeGUGzZAtAuOMSjFCjGwj0zFdVF1DOsbBClUXSAc9wKQ1fMyQwKSeZNAPJCW4K7h+iDUkBZJBj0ihK4anuce1YFSKgfTf1kECVV3BPYZQFaNpetKuECPfwuBwbJAvhHfI99WHwfWLg77nuDhCvrHB9d/INys75hIr5Fsa3CNGPh+u6ZjGnuPfFNzjFqpC1KRjBthAVwRXcw8PCXT94kYyKIGkCE3FezCGJF8y6BXSUvh4x6TEO/BeMugCCapuCUf+HFVf2+SUOQgLHsIAps0LDsmkzPdQKzOij/Pd5z3hsxKik3kMhlgiFh95g7E16Ept/AxKrfwMkr/n7P9Q/IKqNxuDPDwXeIJ7dupY+gOiWcwGBsNd9QAAAABJRU5ErkJggg=="},379:function(e,t,a){},380:function(e,t,a){},389:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(58),l=a.n(r),i=a(45),c=a(27),s=a(33),u=a(65),d=a(64),p=a(152),h=a(153),m=a.n(h),v=a(38),f=a(21),g=a.n(f),y=function(e){return e.length?e.reduce((function(e,t){return new Date(e)>new Date(t)?e:t})):""},b=function(e){return getComputedStyle(document.body).getPropertyValue(e)||e},C=function(e,t,a){var n="/dashboard/?dashboardId=".concat(e);t&&"World"!==t?(n+="&geoId=".concat(t),a&&t?n+="&placeType=".concat(a):!a&&t&&(n+="&placeType=State"),window.location.href=n):window.location.href=n},S=a(62),E=a.n(S);function k(e){var t=e.data||{},a=Object.entries(t).map((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];return{xAxisLabel:E()(a).format("MMM D 'YY"),date:a,value:n}}));if(a.every((function(e){return 0===e.value})))return o.a.createElement(o.a.Fragment,null);var n=g()(a,["date"]),r=b(e.color||"--dc-red-strong"),l=e.width||125,i=e.height||60,s=e.showAxis,u=Math.round(n.length/5),d={ill:r,fontSize:12};return o.a.createElement("div",{className:"line-graph",style:{width:l}},e.value&&o.a.createElement("h6",{className:"value",style:{color:r}},e.value),o.a.createElement(v.b,{className:"graph "+e.className,width:l,height:i,data:n},o.a.createElement(v.a,{type:"monotone",dataKey:"value",stroke:r,fillOpacity:.4,isAnimationActive:!1,fill:r}),o.a.createElement(v.c,{position:{y:-170,x:-170},wrapperStyle:{zIndex:1e3},content:function(t){return t.active?o.a.createElement("div",{className:"pop-up shadow"},o.a.createElement("h6",{className:"title"},e.title),o.a.createElement("h6",{className:"title",style:{color:b("grey")}},e.subtitle),o.a.createElement(k,{data:e.data,className:e.className,width:400,height:200,color:e.color,showAxis:!0,value:e.value})):null}}),o.a.createElement(v.d,{tick:d,dataKey:"xAxisLabel",interval:u,hide:!s}),o.a.createElement(v.e,{type:"number",tick:d,hide:!s})))}var I=a(63),P=a.n(I),T=function(e){var t=e.timeSeries,a=Object.keys(t),n=t[a[a.length-1]],r=P()(n).format("0.0a"),l=e.color?b(e.color):b("grey");return"lineGraph"===e.typeOf?o.a.createElement("th",null,o.a.createElement(k,{data:t,className:e.className,title:e.graphTitle,subtitle:e.graphSubtitle,color:l,value:r})):"number"===e.typeOf&&n?o.a.createElement("th",null,r):"percent"===e.typeOf&&n?o.a.createElement("th",null,r+"%"):o.a.createElement("th",null,"-")},A=a(165),O=a(162),w=function(e){return o.a.createElement(O.a,{className:"button-group"},e.items.map((function(e,t){var a=e.active?"selected":"unselected";return o.a.createElement(A.a,{className:a,key:t,onClick:e.onClick},e.text)})))},x=a(163),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={sortBy:e.props.configuration.tableDefaultSortBy,order:"desc",chunkIndex:0,categories:e.props.content.table},e.chunkSize=30,e.chunkedData=[],e.changeOrientation=function(){var t={asc:"desc",desc:"asc"}[e.state.order];e.setState({order:t})},e.setChunkIndex=function(t){t>=0&&t<e.chunkedData.length&&e.setState({chunkIndex:t})},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.state.categories.forEach((function(e){localStorage[e.id]&&(e.enabled="true"===localStorage[e.id])}))}},{key:"sortArrow",value:function(e){return e===this.state.sortBy?"desc"===this.state.order?"\u25bc ":"asc"===this.state.order?"\u25b2 ":void 0:""}},{key:"sortBy",value:function(e){this.state.sortBy===e?this.changeOrientation():this.setState({sortBy:e}),this.setState({chunkIndex:0})}},{key:"render",value:function(){var e,t=this,a=this.props.data.sort((function(e,a){var n=e.keyToTimeSeries[t.state.sortBy]||{},o=a.keyToTimeSeries[t.state.sortBy]||{},r=y(Object.keys(n)),l=y(Object.keys(o)),i=n[r]||0,c=o[l]||0;return"desc"===t.state.order?c-i:i-c}));this.chunkedData=m()(a,this.chunkSize);var n=(null===(e=this.chunkedData)||void 0===e?void 0:e[this.state.chunkIndex])||[],r=this.state.categories.filter((function(e){return e.enabled})),l=r.map((function(e,a){var n=t.sortArrow(e.id)+e.title;return o.a.createElement("th",{onClick:function(){return t.sortBy(e.id)},key:a},n)})),c=n.map((function(e,a){var n=t.state.chunkIndex*t.chunkSize+a+1,l=r.map((function(t,a){var n=e.keyToTimeSeries[t.id]||{};return o.a.createElement(T,{timeSeries:n,typeOf:t.typeOf,key:a,graphTitle:e.name,graphSubtitle:t.graphSubtitle,color:t.color})})),i=e.getSubregionType();console.log(i);var c=-1!==t.props.configuration.placeTypes.indexOf(i);console.log(t.props.configuration.placeTypes);var s,u=e.name;"Country"!==e.placeType&&(u+=", ".concat(null===(s=e.parentPlace)||void 0===s?void 0:s.name));return o.a.createElement("tbody",{key:a},o.a.createElement("tr",Object.assign({className:c?"clickable":""},c&&{onClick:function(){return t.props.goToPlace(e.geoId,i)}}),o.a.createElement("th",null,n),o.a.createElement("th",null,u),l))})),s=this.state.categories.map((function(e){return{id:e.id,title:e.title,enabled:e.enabled}}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{textAlign:"left"}},o.a.createElement(M,{content:s,triggered:function(e){var a=Object(i.a)(t.state.categories),n=a.find((function(t){return t.id===e}));if(n){var o="true"===localStorage[n.id];n.enabled=!o,localStorage[n.id]=!o,t.setState({categories:a})}}})),o.a.createElement(x.a,{responsive:"l"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"#"),o.a.createElement("th",null,"Name"),l)),c),o.a.createElement(N,{index:this.state.chunkIndex,totalIndexCount:this.chunkedData.length,onIndexChange:this.setChunkIndex}))}}]),a}(o.a.Component),N=function(e){var t=e.totalIndexCount,a=Array.from(Array(t).keys());e.totalIndexCount>5&&(a=a.slice(0,5)).push(e.totalIndexCount-1);var n=a.map((function(t){return{active:e.index===t,text:String(t+1),onClick:function(){return e.onIndexChange(t)}}})),r={active:0!==e.index,text:"Previous",onClick:function(){return e.onIndexChange(e.index-1)}},l={active:e.index!==e.totalIndexCount,text:"Next",onClick:function(){return e.onIndexChange(e.index+1)}},c=[r].concat(Object(i.a)(n),[l]);return o.a.createElement(w,{items:c})},M=function(e){var t=Object(n.useState)(""),r=Object(c.a)(t,2),l=r[0],i=r[1];return o.a.createElement("div",{className:"btn-group-vertical"},o.a.createElement("label",{className:"btn btn-secondary options",onClick:function(){i(l?"":"show")}},o.a.createElement("img",{src:a(378),alt:"Statistical Variables",className:"icon-in-button"}),l?"Close":"Statistical Variables"),o.a.createElement("div",{className:"dropdown-menu shadow ".concat(l),style:{width:300,marginTop:-10,marginLeft:-1}},e.content.map((function(t){var a=t.title,n=t.id,r=t.enabled;return o.a.createElement("div",{style:{textAlign:"left"},key:n},o.a.createElement("label",{className:"btn"},o.a.createElement("input",{type:"checkbox",onChange:function(){return e.triggered(n)},style:{marginRight:5},checked:r}),a))}))))};function j(e){var t=100/Object.keys(e.textToValue).length+"%";return o.a.createElement("div",{className:"panel count-panel"},e.textToValue.map((function(e,a){var n=e.title,r="-";e.value&&(r=P()(e.value).format("0.0a"));var l=e.color?b(e.color):"grey";return o.a.createElement("div",{className:"column",key:a,style:{width:t}},o.a.createElement("h6",{style:{color:l,fontWeight:"bold"}},n),o.a.createElement("h5",{style:{color:l}},r))})))}a(379);var G=function(e){return o.a.createElement("header",{id:"main-header"},o.a.createElement("nav",{className:"navbar navbar-dark navbar-expand-lg col",id:"main-nav"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"navbar-brand"},o.a.createElement("a",{href:"https://datacommons.org/"},e.title),o.a.createElement("span",null," ",e.subtitle)),o.a.createElement("form",{className:"form-inline"},o.a.createElement("a",{className:"nav-link",href:"/dashboard/?dashboardId=covid19"},"COVID-19"),o.a.createElement("a",{className:"nav-link",href:"/dashboard/?dashboardId=socialWellness"},"Social Wellness"),o.a.createElement("input",{className:"form-control mr-sm ml-4",type:"text",onKeyDown:function(e){13===e.keyCode&&e.preventDefault()},onChange:e.onType,placeholder:"Search for Place"})))))},B=(a(380),a(381),a(92)),U=a.n(B),K=a(95),L=a.n(K),H=function e(t,a,n){var o=this;Object(s.a)(this,e),this.geoId=void 0,this.name=void 0,this.containedIn=void 0,this.parentPlace=void 0,this.placeType=void 0,this.keyToTimeSeries=void 0,this.hasSubregions=function(){return"State"===o.placeType||"country/USA"===o.geoId},this.getSubregionType=function(){return o.hasSubregions()?{World:"Country",Country:"State",State:"County"}[o.placeType]:""},this.setParentPlace=function(e){o.parentPlace=e},this.geoId=t,this.name=a.name,this.containedIn=a.containedIn,this.parentPlace=null,this.placeType=a.placeType,this.keyToTimeSeries=n},z=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var r;Object(s.a)(this,n),(r=t.call(this,e)).geoId=void 0,r.placeTypeToShow=void 0,r.places=void 0,r.dashboardId=void 0,r.Content=void 0,r.Configuration=void 0,r.state={searchQuery:""},r.componentDidMount=function(){r.fetchData()},r.fetchData=function(){var e=["data/".concat(r.placeTypeToShow,"/").concat(r.dashboardId),"places"].map((function(e){return fetch("/api/".concat(e))}));Promise.all(e).then((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];a.json().then((function(e){n.json().then((function(t){Object.keys(t).forEach((function(a){var n=t[a],o=(null===e||void 0===e?void 0:e[a])||{};r.places[a]=new H(a,n,o)})),Object.values(r.places).forEach((function(e){var t=e.containedIn,a=r.places[t];e.setParentPlace(a)})),r.cacheData(),r.forceUpdate()}))}))}))},r.cacheData=function(){var e=Object(i.a)(r.Configuration.placeTypes);e.splice(e.indexOf(r.placeTypeToShow),1);var t=e.map((function(e){return fetch("/api/data/".concat(e,"/").concat(r.dashboardId))}));Promise.all(t).then((function(e){e.forEach((function(e){e.json().then((function(e){Object.entries(e).forEach((function(e){var t=Object(c.a)(e,2),a=t[0],n=t[1];a in r.places&&(r.places[a].keyToTimeSeries=n)}))}))}))}))},r.getParentPlaces=function(){if(!Object.keys(r.places).length)return[];for(var e=r.geoId,t=[],a=0;a<=r.Configuration.placeTypes.length&&e;a++){var n=r.places[e];t.unshift(e),e=null===n||void 0===n?void 0:n.containedIn}return t},r.onSearchInput=U()((function(e){r.setState({searchQuery:e})}),250),r.render=function(){var e=r.places[r.geoId],t=Object.values(r.places).filter((function(e){return e.keyToTimeSeries})),a=t.filter((function(e){return"country/USA"===r.geoId?e.placeType===r.placeTypeToShow:e.containedIn===r.geoId})),n=r.Content.cumulativePanel.map((function(e){var t=e.dataKey;return{title:e.title,color:e.color,value:a.map((function(e){var a=e.keyToTimeSeries[t]||{},n=Object.keys(a);return a[y(n)]||0})).reduce((function(e,t){return e+t}),0)}}));r.state.searchQuery&&(a=t.filter((function(e){var t;return(e.name+(null===(t=e.parentPlace)||void 0===t?void 0:t.name)).toLowerCase().includes(r.state.searchQuery)})));var l=r.getParentPlaces(),i=t.map((function(e){var t=e.keyToTimeSeries[r.Configuration.tableDefaultSortBy]||{},a=Object.keys(t);return y(a)})).filter((function(e){return e})),c=y(i),s="";c&&(s=E()(c).format("MMM D, YYYY"));var u=r.Configuration.pluralPlaceTypes,d="";(null===e||void 0===e?void 0:e.name)&&(d=u[r.placeTypeToShow]+" in "+e.name);document.title="".concat(d," - Data Commons ").concat(r.Configuration.subtitle);var p=l.map((function(e){var t;return{active:r.geoId===e,onClick:function(){return C(r.dashboardId,e)},text:null===(t=r.places[e])||void 0===t?void 0:t.name}})),h=r.Configuration.subregionSelectionButton.map((function(e){var t=e.id;return{active:r.placeTypeToShow===e.id,onClick:function(){return C(r.dashboardId,r.geoId,t)},text:e.text}}));return o.a.createElement("div",null,o.a.createElement(G,{title:"Data Commons",subtitle:r.Configuration.subtitle,onType:function(e){var t=e.target.value.toLowerCase();r.onSearchInput(t)}}),o.a.createElement("div",{className:"site-container fadeIn"},o.a.createElement("div",{className:"header"},o.a.createElement("h6",null,"Latest data from "+s),"World"!==r.geoId&&o.a.createElement(L.a,{className:"breadcrumb-mod"},p.map((function(e,t){return o.a.createElement(L.a.Item,{href:"#",key:t,active:e.active,onClick:e.onClick},e.text)}))),o.a.createElement("h2",{className:"title"},d||o.a.createElement("br",null)),"country/USA"===r.geoId&&o.a.createElement(w,{items:h})),o.a.createElement(j,{textToValue:n}),o.a.createElement("div",{className:"content"},o.a.createElement(D,{goToPlace:function(e,t){C(r.dashboardId,e,t)},data:a,configuration:r.Configuration,content:r.Content})),o.a.createElement("footer",null,r.Configuration.footer)))};var l=new URLSearchParams(r.props.location.search);return r.geoId=l.get("geoId")||"World",r.placeTypeToShow=l.get("placeType")||"Country",r.places={},r.dashboardId=l.get("dashboardId")||"covid19",r.Content=function(e){var t;return(null===(t=a(149)("./".concat(e,".json")))||void 0===t?void 0:t.content)||{}}(r.dashboardId),r.Configuration=function(e){var t;return(null===(t=a(149)("./".concat(e,".json")))||void 0===t?void 0:t.configuration)||{}}(r.dashboardId),r}return n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(392),Y=a(15),W=Object(Y.a)();l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(R.b,{history:W},o.a.createElement(R.a,{path:"/:geoId",component:z}),o.a.createElement(R.a,{exact:!0,path:"/",component:z}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[196,1,2]]]);
//# sourceMappingURL=main.0fbb8fb9.chunk.js.map