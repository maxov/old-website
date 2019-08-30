goog.provide("blog.d3"),goog.require("cljs.core"),blog.d3.doprops=function(e,l,c){for(var o=cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,c)),s=null,r=0,n=0;;)if(r>n){var t=s.cljs$core$IIndexed$_nth$arity$2(null,n),$=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,0,null),a=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(t,1,null),i=l.cljs$core$IFn$_invoke$arity$1?l.cljs$core$IFn$_invoke$arity$1($):l.call(null,$);i.cljs$core$IFn$_invoke$arity$2?i.cljs$core$IFn$_invoke$arity$2(e,a):i.call(null,e,a);var j=o,u=s,g=r,y=n+1;o=j,s=u,r=g,n=y}else{var _=cljs.core.seq(o);if(!_)break;var w=_;if(cljs.core.chunked_seq_QMARK_(w)){var d=cljs.core.chunk_first(w),b=cljs.core.chunk_rest(w),k=d,m=cljs.core.count(d),v=0;o=b,s=k,r=m,n=v;continue}var f=cljs.core.first(w),h=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f,0,null),p=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(f,1,null),S=l.cljs$core$IFn$_invoke$arity$1?l.cljs$core$IFn$_invoke$arity$1(h):l.call(null,h);S.cljs$core$IFn$_invoke$arity$2?S.cljs$core$IFn$_invoke$arity$2(e,p):S.call(null,e,p);var I=cljs.core.next(w),F=null,x=0,A=0;o=I,s=F,r=x,n=A}return e},blog.d3.extent=function(e){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(function(){var l=cljs.core.clj__GT_js(e);return d3.extent(l)}())},blog.d3.select=function(e){for(var l=[],c=arguments.length,o=0;;){if(!(c>o))break;l.push(arguments[o]);var s=o+1;o=s}var r=l.length;switch(r){case 1:return blog.d3.select.cljs$core$IFn$_invoke$arity$1(arguments[0]);case 2:return blog.d3.select.cljs$core$IFn$_invoke$arity$2(arguments[0],arguments[1]);default:throw new Error([cljs.core.str("Invalid arity: "),cljs.core.str(l.length)].join(""))}},blog.d3.select.cljs$core$IFn$_invoke$arity$1=function(e){return d3.select(e)},blog.d3.select.cljs$core$IFn$_invoke$arity$2=function(e,l){return e.select(l)},blog.d3.select.cljs$lang$maxFixedArity=2,blog.d3.window=blog.d3.select.cljs$core$IFn$_invoke$arity$1(window),blog.d3.selectAll=function(e){for(var l=[],c=arguments.length,o=0;;){if(!(c>o))break;l.push(arguments[o]);var s=o+1;o=s}var r=l.length;switch(r){case 1:return blog.d3.selectAll.cljs$core$IFn$_invoke$arity$1(arguments[0]);case 2:return blog.d3.selectAll.cljs$core$IFn$_invoke$arity$2(arguments[0],arguments[1]);default:throw new Error([cljs.core.str("Invalid arity: "),cljs.core.str(l.length)].join(""))}},blog.d3.selectAll.cljs$core$IFn$_invoke$arity$1=function(e){return d3.selectAll(e)},blog.d3.selectAll.cljs$core$IFn$_invoke$arity$2=function(e,l){return e.selectAll(l)},blog.d3.selectAll.cljs$lang$maxFixedArity=2,blog.d3.data=function(e,l){return e.data(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(l))},blog.d3.datum=function(e,l){return e.datum(cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(l))},blog.d3.attr=function(e,l){return e.attr(cljs.core.name(l))},blog.d3.node=function(e){return e.node()},blog.d3.attrs=function(e){for(var l=[],c=arguments.length,o=0;;){if(!(c>o))break;l.push(arguments[o]);var s=o+1;o=s}var r=1<l.length?new cljs.core.IndexedSeq(l.slice(1),0,null):null;return blog.d3.attrs.cljs$core$IFn$_invoke$arity$variadic(arguments[0],r)},blog.d3.attrs.cljs$core$IFn$_invoke$arity$variadic=function(e,l){for(var c=cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,l)),o=null,s=0,r=0;;)if(s>r){var n=o.cljs$core$IIndexed$_nth$arity$2(null,r),t=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(n,0,null),$=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(n,1,null),a=cljs.core.name(t);e.attr(a,$);var i=c,j=o,u=s,g=r+1;c=i,o=j,s=u,r=g}else{var y=cljs.core.seq(c);if(!y)break;var _=y;if(cljs.core.chunked_seq_QMARK_(_)){var w=cljs.core.chunk_first(_),d=cljs.core.chunk_rest(_),b=w,k=cljs.core.count(w),m=0;c=d,o=b,s=k,r=m;continue}var v=cljs.core.first(_),f=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,0,null),h=cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,1,null),p=cljs.core.name(f);e.attr(p,h);var S=cljs.core.next(_),I=null,F=0,x=0;c=S,o=I,s=F,r=x}return e},blog.d3.attrs.cljs$lang$maxFixedArity=1,blog.d3.attrs.cljs$lang$applyTo=function(e){var l=cljs.core.first(e),c=cljs.core.next(e);return blog.d3.attrs.cljs$core$IFn$_invoke$arity$variadic(l,c)},blog.d3.text=function(e,l){return e.text(l)},blog.d3.append=function(e,l){return e.append(cljs.core.name(l))},blog.d3.on=function(e,l,c){return e.on(cljs.core.name(l),c)},blog.d3.remove=function(e){return e.remove()},blog.d3.exit=function(e){return e.exit()},blog.d3.enter=function(e){return e.enter()},blog.d3.call=function(e,l){return e.call(l)},blog.d3.translate=function(e,l){return[cljs.core.str("translate("),cljs.core.str(e),cljs.core.str(", "),cljs.core.str(l),cljs.core.str(")")].join("")},blog.d3.time_format=function(e){return d3.time.format(e)},blog.d3.mouse=function(e){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(d3.mouse(e))},blog.d3.ease=function(e,l){return e.ease(cljs.core.name(l))},blog.d3.duration=function(e,l){return e.duration(l)},blog.d3.transition_props=new cljs.core.PersistentArrayMap(null,2,[cljs.core.cst$kw$ease,blog.d3.ease,cljs.core.cst$kw$duration,blog.d3.duration],null),blog.d3.transition=function(e){for(var l=[],c=arguments.length,o=0;;){if(!(c>o))break;l.push(arguments[o]);var s=o+1;o=s}var r=1<l.length?new cljs.core.IndexedSeq(l.slice(1),0,null):null;return blog.d3.transition.cljs$core$IFn$_invoke$arity$variadic(arguments[0],r)},blog.d3.transition.cljs$core$IFn$_invoke$arity$variadic=function(e,l){return blog.d3.doprops(e.transition(),blog.d3.transition_props,l)},blog.d3.transition.cljs$lang$maxFixedArity=1,blog.d3.transition.cljs$lang$applyTo=function(e){var l=cljs.core.first(e),c=cljs.core.next(e);return blog.d3.transition.cljs$core$IFn$_invoke$arity$variadic(l,c)},blog.d3.domain=function(e,l){return e.domain(cljs.core.clj__GT_js(l))},blog.d3.range=function(e,l){return e.range(cljs.core.clj__GT_js(l))},blog.d3.scale_props=new cljs.core.PersistentArrayMap(null,2,[cljs.core.cst$kw$domain,blog.d3.domain,cljs.core.cst$kw$range,blog.d3.range],null),blog.d3.linear_scale=function(e){for(var l=[],c=arguments.length,o=0;;){if(!(c>o))break;l.push(arguments[o]);var s=o+1;o=s}var r=0<l.length?new cljs.core.IndexedSeq(l.slice(0),0,null):null;return blog.d3.linear_scale.cljs$core$IFn$_invoke$arity$variadic(r)},blog.d3.linear_scale.cljs$core$IFn$_invoke$arity$variadic=function(e){return blog.d3.doprops(d3.scale.linear(),blog.d3.scale_props,e)},blog.d3.linear_scale.cljs$lang$maxFixedArity=0,blog.d3.linear_scale.cljs$lang$applyTo=function(e){return blog.d3.linear_scale.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(e))},blog.d3.time_scale=function(e){for(var l=[],c=arguments.length,o=0;;){if(!(c>o))break;l.push(arguments[o]);var s=o+1;o=s}var r=0<l.length?new cljs.core.IndexedSeq(l.slice(0),0,null):null;return blog.d3.time_scale.cljs$core$IFn$_invoke$arity$variadic(r)},blog.d3.time_scale.cljs$core$IFn$_invoke$arity$variadic=function(e){return blog.d3.doprops(d3.time.scale(),blog.d3.scale_props,e)},blog.d3.time_scale.cljs$lang$maxFixedArity=0,blog.d3.time_scale.cljs$lang$applyTo=function(e){return blog.d3.time_scale.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(e))},blog.d3.invert=function(e,l){return e.invert(l)},blog.d3.scale=function(e,l){return e.scale(l)},blog.d3.ticks=function(e,l){return e.ticks(l)},blog.d3.outer_tick_size=function(e,l){return e.outerTickSize(l)},blog.d3.axis_props=new cljs.core.PersistentArrayMap(null,3,[cljs.core.cst$kw$scale,blog.d3.scale,cljs.core.cst$kw$ticks,blog.d3.ticks,cljs.core.cst$kw$outer_DASH_tick_DASH_size,blog.d3.outer_tick_size],null),blog.d3.axis=function(e){for(var l=[],c=arguments.length,o=0;;){if(!(c>o))break;l.push(arguments[o]);var s=o+1;o=s}var r=0<l.length?new cljs.core.IndexedSeq(l.slice(0),0,null):null;return blog.d3.axis.cljs$core$IFn$_invoke$arity$variadic(r)},blog.d3.axis.cljs$core$IFn$_invoke$arity$variadic=function(e){return blog.d3.doprops(d3.svg.axis(),blog.d3.axis_props,e)},blog.d3.axis.cljs$lang$maxFixedArity=0,blog.d3.axis.cljs$lang$applyTo=function(e){return blog.d3.axis.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(e))},blog.d3.x=function(e,l){return e.x(l)},blog.d3.y0=function(e,l){return e.y0(l)},blog.d3.y1=function(e,l){return e.y1(l)},blog.d3.interpolate=function(e,l){return e.interpolate(cljs.core.name(l))},blog.d3.area_props=new cljs.core.PersistentArrayMap(null,4,[cljs.core.cst$kw$x,blog.d3.x,cljs.core.cst$kw$y0,blog.d3.y0,cljs.core.cst$kw$y1,blog.d3.y1,cljs.core.cst$kw$interpolate,blog.d3.interpolate],null),blog.d3.area=function(e){for(var l=[],c=arguments.length,o=0;;){if(!(c>o))break;l.push(arguments[o]);var s=o+1;o=s}var r=0<l.length?new cljs.core.IndexedSeq(l.slice(0),0,null):null;return blog.d3.area.cljs$core$IFn$_invoke$arity$variadic(r)},blog.d3.area.cljs$core$IFn$_invoke$arity$variadic=function(e){return blog.d3.doprops(d3.svg.area(),blog.d3.area_props,e)},blog.d3.area.cljs$lang$maxFixedArity=0,blog.d3.area.cljs$lang$applyTo=function(e){return blog.d3.area.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(e))};