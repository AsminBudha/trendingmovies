(this.webpackJsonptrendingmovies=this.webpackJsonptrendingmovies||[]).push([[0],{22:function(e,t,a){e.exports=a(49)},27:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(21),i=a.n(c),s=(a(27),a(9)),o=a.n(s),l=a(10),u=a(11),d=a(2),m=a(3),p=a(4),h=a(6),f=a(5),g=a(7),v="https://www.imdb.com/title/:imdbId",b="".concat("https://api.themoviedb.org/3","/trending/:key/day"),y="".concat("https://api.themoviedb.org/3","/genre/:categoryKey/list"),E="".concat("https://api.themoviedb.org/3","/movie/:movieId/external_ids");var x=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e,t=this.props.data,a=t.name,r=t.title,c=t.genre_ids,i=t.media_type,s=t.poster_path,o=t.vote_average,l=t.external_ids,u=a||r;return n.a.createElement("div",{className:"card-wrapper"},n.a.createElement("a",{target:"_",href:l&&l.imdb_id?v.replace(":imdbId",l.imdb_id):"#",title:u},n.a.createElement("img",{alt:u,src:"https://image.tmdb.org/t/p/w200/:imageId".replace(":imageId",s),width:"120"})),n.a.createElement("div",{className:"card-content"},n.a.createElement("h2",{className:"rating-text"},o,n.a.createElement("span",{className:"secondary-text"},"/10")),n.a.createElement("h2",{className:"movie-title-text"},n.a.createElement("a",{target:"_",href:l&&l.imdb_id?v.replace(":imdbId",l.imdb_id):"#",title:u},"".concat(u," ")),n.a.createElement("span",{className:"secondary-text genre-text"},c.reduce((function(e,t){var a=function(e,t){var a=JSON.parse(localStorage.getItem(e));return console.log(a[t]),a[t]?a[t].name:""}(i,t);return a&&(e+=e?" \u2022 ".concat(a," "):" ".concat(a," ")),e}),""))),n.a.createElement("p",{className:"secondary-text"},"Playing On: Netflix"),n.a.createElement("a",{target:"_",className:"secondary-text trailer-a",href:(e=u,"https://www.youtube.com/results?search_query=".concat(e.replace(/ /g,"+"),"+1080p+trailer")),title:u},"Watch Trailer")))}}]),t}(n.a.Component),k=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"category-wrapper"},n.a.createElement("h1",{className:"category-title-text"},this.props.title),n.a.createElement("ul",null,this.props.dataList.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(x,{data:e}))}))))}}]),t}(n.a.Component),w=[{title:"Trending TV Shows",key:"tv"},{title:"Trending Movies",key:"movie"}],O=a(8),j=a.n(O),N=j.a.create();function I(e){return N.get(b.replace(":key",e))}function _(e){return N.get(y.replace(":categoryKey",e))}function M(e){return e.reduce((function(e,t){return e[t.id]=t,e}),{})}function L(e){return N.get(E.replace(":movieId",e))}N.interceptors.request.use((function(e){return e.params={api_key:"194bc39d935b6a1f21c103c3ca4d7f27"},e}),(function(e){return Promise.reject(e)}));var D=function(e){function t(){var e,a,r;Object(m.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(r=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state=(a={currentPage:1,isLoading:!0},Object(d.a)(a,w[0].key,{}),Object(d.a)(a,w[1].key,{}),Object(d.a)(a,"errorMessage",null),a),r.mergeExternalIdWithMovieData=function(e,t){return t.map((function(t,a){return t.external_ids=e[a],t}))},r.fetchData=Object(u.a)(o.a.mark((function e(){var t,a,n,c,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r.fetchMovieData();case 3:return a=e.sent,e.prev=4,e.next=7,r.fetchGenre();case 7:e.sent.forEach((function(e,t){localStorage.setItem(w[t].key,JSON.stringify(M(e.data.genres)))})),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:return n=a[0].data.results,c=a[1].data.results,e.prev=16,e.next=19,r.fetchExternalIds(a[0].data.results);case 19:return i=e.sent,e.next=22,r.fetchExternalIds(a[1].data.results);case 22:s=e.sent,c=r.mergeExternalIdWithMovieData(i.map((function(e){return e.data})),c),n=r.mergeExternalIdWithMovieData(s.map((function(e){return e.data})),n),e.next=30;break;case 27:e.prev=27,e.t1=e.catch(16),console.log(e.t1);case 30:r.setState((t={isLoading:!1,errorMessage:null},Object(d.a)(t,w[0].key,Object(l.a)({},a[0].data,{results:n})),Object(d.a)(t,w[1].key,Object(l.a)({},a[1].data,{results:c})),t)),e.next=36;break;case 33:e.prev=33,e.t2=e.catch(0),r.setState({isLoading:!1,errorMessage:"Could not fetch data"});case 36:case"end":return e.stop()}}),e,null,[[0,33],[4,11],[16,27]])}))),r.fetchGenre=function(){return j.a.all(w.map((function(e){return _(e.key)})))},r.fetchMovieData=function(){return j.a.all(w.map((function(e){return I(e.key)})))},r.fetchExternalIds=function(e){return j.a.all(e.map(function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(t.id).then((function(e){return e})).catch((function(){return{data:{}}})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},r}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){return this.state.isLoading?n.a.createElement("div",{className:"container error-text"},"Loading..."):this.state.errorMessage?n.a.createElement("div",{className:"container error-text"},this.state.errorMessage):n.a.createElement("div",null,n.a.createElement("a",{src:"#",className:"container logo"},n.a.createElement("img",{src:"https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg",alt:"Trending Movies Logo",width:"80"})),n.a.createElement("div",{className:"container"},n.a.createElement(k,{title:w[0].title,dataList:this.state[w[0].key].results||[]}),n.a.createElement(k,{title:w[1].title,dataList:this.state[w[1].key].results||[]})))}}]),t}(n.a.Component);var S=function(){return n.a.createElement(D,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(46),a(47),a(48);i.a.render(n.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.fb8f4385.chunk.js.map