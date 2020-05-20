(this["webpackJsonpbank-account"]=this["webpackJsonpbank-account"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={items:"styles_items__2qZE3",item:"styles_item__5eEo9",previewImage:"styles_previewImage__1vrpt",detailsWrapper:"styles_detailsWrapper__15zMp",title:"styles_title__pUVYS"}},function(e,t,n){e.exports={app:"styles_app__1A4xK",header:"styles_header__295hO",heading:"styles_heading__3ybB-",toggle:"styles_toggle__meaM4",container:"styles_container__3aUuQ",content:"styles_content__3eFJn"}},function(e,t,n){e.exports={theme:"_theme_variables_theme__1ysZ7",themeLight:"_theme_variables_themeLight__4kCkS",themeDark:"_theme_variables_themeDark__3uKkR"}},function(e,t,n){e.exports={toggle:"styles_toggle__3hy2d",slider:"styles_slider__2U-ow",round:"styles_round__1-Pwt"}},function(e,t,n){e.exports={loading:"styles_loading__EnVHn",box:"styles_box__1GLmH","moving-gradient":"styles_moving-gradient__2CivO"}},function(e,t,n){e.exports={colorPicker:"styles_colorPicker__V31x0"}},,,function(e,t,n){e.exports={search:"styles_search__1Hd1S"}},,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){e.exports=n.p+"static/media/Data.23b62444.csv"},function(e){e.exports=JSON.parse('[{"label":"blue","value":"#2986CE"},{"label":"Pink","value":"#B64F79"},{"label":"Green","value":"#86C06A"},{"label":"Orange","value":"#E1983D"},{"label":"Violet","value":"#76618B"}]')},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),i=n(1),s=n(2),l=n(5),u=n(4),h=n(3),m=n(6),d=n(8),g=n.n(d),p=n(9),v=n.n(p),_=n(16),b=function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"getHeaders",value:function(){return{Accept:"text/json; application/json"}}},{key:"get",value:function(e,t){var n=this.getHeaders();return t&&(n=Object(_.a)({},n,{},t)),fetch(e,{headers:n}).then((function(e){return e.json()}))}},{key:"getFile",value:function(e){return fetch(e).then((function(e){return e.text()}))}}]),e}(),f=function(){function e(){Object(i.a)(this,e),this.http=void 0,this.dataUrl=void 0,this.http=new b,this.dataUrl=n(22)}return Object(s.a)(e,[{key:"get",value:function(){var e=this;return new Promise((function(t,n){e.http.getFile(e.dataUrl).then((function(e){var n=e.split("\n");n=n.slice(1,n.length-1);var a=[];n.map((function(e){var t=e.split(/,(?=(?:[^"]*"[^"]*")*[^"]*$)/),n=t[2].split(", ");n.length>1&&(n[0]=n[0].slice(1),n[n.length-1]=n[n.length-1].slice(0,n[n.length-1].length-1)),a.push({id:t[0],name:t[1],cuisines:n,averageForTwo:Number(t[3]),currency:t[4],hasTableBooking:"Yes"===t[5],hasOnlineDelivery:"Yes"===t[6],rating:Number(t[7]),ratingColor:t[8],ratingText:t[9],votes:Number(t[10])})})),t(a)}))}))}}]),e}(),y=n(11),k=n.n(y),C=function(){return r.a.createElement("div",{className:"".concat(k.a.loading)},r.a.createElement("div",{className:"".concat(k.a.box)},"Loading..."))},O=n(7),j=n.n(O),E=function(e){var t=e.item,n=e.index,a=e.onItemClick;return r.a.createElement("div",{className:"".concat(j.a.item),onClick:function(){return a(n)}},r.a.createElement("div",{className:"".concat(j.a.previewImage)}),r.a.createElement("div",{className:"".concat(j.a.detailsWrapper)},r.a.createElement("div",{className:"".concat(j.a.title)},t.name),r.a.createElement("div",null,"".concat(t.cuisines.join(", ")))))},x=function(e){return r.a.createElement("div",{className:"".concat(j.a.items)},e.restaurants.map((function(t,n){return r.a.createElement(E,{onItemClick:e.onItemClick,index:n,item:t,key:n})})))},N=new(function(){function e(){Object(i.a)(this,e)}return Object(s.a)(e,[{key:"getFilterValues",value:function(e,t){var n=[];return e.map((function(e){e[t].map((function(e){!n.some((function(t){return t==e}))&&e.length>0&&n.push(e)}))})),n}}]),e}()),T=n(10),w=n.n(T),I=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.checked,n=e.onToggle,r=e.label,c=e.containerClassName;return a.createElement("div",{className:"".concat(w.a.toggle," ").concat(c),title:r},a.createElement("input",{checked:t,type:"checkbox",id:"checkbox"}),a.createElement("div",{className:"".concat(w.a.slider," ").concat(w.a.round),onClick:function(){return n(!t)}}))}}]),t}(a.Component),S=n(12),P=n.n(S),D=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.createElement("div",{className:"".concat(P.a.colorPicker)},a.createElement("select",{style:{backgroundColor:this.props.selectedColor?this.props.selectedColor.value:"#000"},onChange:function(t){var n=e.props.colors.filter((function(e){return e.label==t.currentTarget.value}))[0];e.props.onChange(n)}},this.props.colors.map((function(e){return a.createElement("option",{className:"".concat(P.a.option),style:{backgroundColor:e.value},value:e.label})}))))}}]),t}(a.Component),L=n(15),F=n.n(L),M=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={searchText:""},n.onInputChange=n.onInputChange.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onInputChange",value:function(e){this.setState({searchText:e}),this.props.onSearch(e)}},{key:"render",value:function(){var e=this,t=this.state.searchText;return r.a.createElement("div",{className:"".concat(F.a.search)},r.a.createElement("input",{placeholder:"Search",type:"text",onChange:function(t){e.onInputChange(t.currentTarget.value)},value:t}))}}]),t}(r.a.Component),B=n(23),U=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).restaurantsProvider=void 0,n.state={selectedIndex:-1,isLoading:!0,restaurants:[],isDarkMode:!1,selectedColor:B[0],searchText:null},n.restaurantsProvider=new f,n.onItemClick=n.onItemClick.bind(Object(h.a)(n)),n.toggleTheme=n.toggleTheme.bind(Object(h.a)(n)),n.onColorChange=n.onColorChange.bind(Object(h.a)(n)),n.onSearch=n.onSearch.bind(Object(h.a)(n)),n.setThemePrimaryColor=n.setThemePrimaryColor.bind(Object(h.a)(n)),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onColorChange",value:function(e){this.setState({selectedColor:e})}},{key:"toggleTheme",value:function(e){this.setState({isDarkMode:e})}},{key:"onItemClick",value:function(e){this.setState({selectedIndex:e})}},{key:"setThemePrimaryColor",value:function(e){e&&e.style.setProperty("--theme-primary",this.state.selectedColor.value)}},{key:"onSearch",value:function(e){this.setState({searchText:e})}},{key:"componentDidMount",value:function(){var e=this;this.restaurantsProvider.get().then((function(t){N.getFilterValues(t,"cuisines");e.setState({restaurants:t,isLoading:!1})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.restaurants,a=t.isDarkMode,c=t.searchText,o=t.isLoading,i=t.selectedColor,s=n;return c&&(s=n.filter((function(e){return e.name.includes(c)}))),r.a.createElement("div",{className:"".concat(a?v.a.themeDark:v.a.themeLight," ").concat(v.a.theme)},r.a.createElement("div",{className:"".concat(g.a.app),ref:function(t){return e.setThemePrimaryColor(t)}},r.a.createElement("header",{className:"".concat(g.a.header)},r.a.createElement("div",{className:"".concat(g.a.heading)},"Restaurants"),r.a.createElement(D,{colors:B,selectedColor:i,onChange:this.onColorChange}),r.a.createElement(I,{containerClassName:g.a.toggle,label:"Toggle Dark Mode",onToggle:this.toggleTheme,checked:a})),o?r.a.createElement(C,null):r.a.createElement("div",{className:"".concat(g.a.container)},r.a.createElement(M,{onSearch:this.onSearch}),r.a.createElement("div",{className:"".concat(g.a.content)},r.a.createElement(x,{restaurants:s,onItemClick:this.onItemClick})))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[17,1,2]]]);
//# sourceMappingURL=main.d8a9e415.chunk.js.map