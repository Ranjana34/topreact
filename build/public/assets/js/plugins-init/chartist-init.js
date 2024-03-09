!function(e){var t,i,n,a,s,r,o,l,u,h,d,c,p,f,m,w,g,b,x,y,C,v,W,_=(t=e(window).width(),i=function(){if(t<=768){var e=0;e=t>=500?250:300,jQuery(".chartlist-chart").css("min-width",e-31)}},n=function(){var e=new Chartist.Line("#smil-animations",{labels:["1","2","3","4","5","6","7","8","9","10","11","12"],series:[[12,9,7,8,5,4,6,2,3,3,4,6],[4,5,3,7,3,5,5,3,4,4,5,5],[5,3,4,5,6,3,3,4,5,6,3,4],[3,4,5,6,7,6,4,5,6,7,6,3]]},{low:0,plugins:[Chartist.plugins.tooltip()]}),t=0,i=80,n=500;e.on("created",(function(){t=0})),e.on("draw",(function(e){if(t++,"line"===e.type)e.element.animate({opacity:{begin:t*i+1e3,dur:n,from:0,to:1}});else if("label"===e.type&&"x"===e.axis)e.element.animate({y:{begin:t*i,dur:n,from:e.y+100,to:e.y,easing:"easeOutQuart"}});else if("label"===e.type&&"y"===e.axis)e.element.animate({x:{begin:t*i,dur:n,from:e.x-100,to:e.x,easing:"easeOutQuart"}});else if("point"===e.type)e.element.animate({x1:{begin:t*i,dur:n,from:e.x-10,to:e.x,easing:"easeOutQuart"},x2:{begin:t*i,dur:n,from:e.x-10,to:e.x,easing:"easeOutQuart"},opacity:{begin:t*i,dur:n,from:0,to:1,easing:"easeOutQuart"}});else if("grid"===e.type){var a={begin:t*i,dur:n,from:e[e.axis.units.pos+"1"]-30,to:e[e.axis.units.pos+"1"],easing:"easeOutQuart"},s={begin:t*i,dur:n,from:e[e.axis.units.pos+"2"]-100,to:e[e.axis.units.pos+"2"],easing:"easeOutQuart"},r={};r[e.axis.units.pos+"1"]=a,r[e.axis.units.pos+"2"]=s,r.opacity={begin:t*i,dur:n,from:0,to:1,easing:"easeOutQuart"},e.element.animate(r)}})),e.on("created",(function(){window.__exampleAnimateTimeout&&(clearTimeout(window.__exampleAnimateTimeout),window.__exampleAnimateTimeout=null),window.__exampleAnimateTimeout=setTimeout(e.update.bind(e),12e3)}))},a=function(){var e=function(e){return Array.apply(null,new Array(e))},t=e(52).map(Math.random).reduce((function(e,t,i){return e.labels.push(i+1),e.series.forEach((function(e){e.push(100*Math.random())})),e}),{labels:[],series:e(4).map((function(){return new Array}))});new Chartist.Line("#scatter-diagram",t,{showLine:!1,axisX:{labelInterpolationFnc:function(e,t){return t%13==0?"W"+e:null}}},[["screen and (min-width: 640px)",{axisX:{labelInterpolationFnc:function(e,t){return t%4==0?"W"+e:null}}}]])},s=function(){new Chartist.Line("#simple-line-chart",{labels:["Monday","Tuesday","Wednesday","Thursday","Friday"],series:[[12,9,7,8,5],[2,1,3.5,7,3],[1,3,4,5,6]]},{fullWidth:!0,chartPadding:{right:40},plugins:[Chartist.plugins.tooltip()]})},r=function(){new Chartist.Line("#line-chart-tooltips",{labels:["1","2","3","4","5","6"],series:[{name:"Fibonacci sequence",data:[1,2,3,5,8,13]},{name:"Golden section",data:[1,1.618,2.618,4.236,6.854,11.09]}]},{plugins:[Chartist.plugins.tooltip()],fullWidth:!0});var t=e("#line-chart-tooltips"),i=t.append('<div class="tooltip"></div>').find(".tooltip").hide();t.on("mouseenter",".ct-point",(function(){var t=e(this),n=t.attr("ct:value"),a=t.parent().attr("ct:series-name");i.html(a+"<br>"+n).show()})),t.on("mouseleave",".ct-point",(function(){i.hide()})),t.on("mousemove",(function(e){i.css({left:(e.offsetX||e.originalEvent.layerX)-i.width()/2-10,top:(e.offsetY||e.originalEvent.layerY)-i.height()-40})}))},o=function(){new Chartist.Line("#chart-with-area",{labels:[1,2,3,4,5,6,7,8,9],series:[[5,9,7,8,5,3,5,4,3]]},{low:0,showArea:!0,fullWidth:!0,plugins:[Chartist.plugins.tooltip()]})},l=function(){new Chartist.Line("#bi-polar-line",{labels:[1,2,3,4,5,6,7,8],series:[[1,2,3,1,-2,0,1,0],[-2,-1,-2,-1,-2.5,-1,-2,-1],[0,0,0,1,2,2.5,2,1],[2.5,2,1,.5,1,.5,-1,-2.5]]},{high:3,low:-3,showArea:!0,showLine:!1,showPoint:!1,fullWidth:!0,axisX:{showLabel:!1,showGrid:!1},plugins:[Chartist.plugins.tooltip()]})},u=function(){new Chartist.Line("#svg-animation",{labels:["Mon","Tue","Wed","Thu","Fri","Sat"],series:[[1,5,2,5,4,3],[2,3,4,8,1,2],[5,4,3,2,1,.5]]},{low:0,showArea:!0,showPoint:!1,fullWidth:!0}).on("draw",(function(e){"line"!==e.type&&"area"!==e.type||e.element.animate({d:{begin:2e3*e.index,dur:2e3,from:e.path.clone().scale(1,0).translate(0,e.chartRect.height()).stringify(),to:e.path.clone().stringify(),easing:Chartist.Svg.Easing.easeOutQuint}})}))},h=function(){new Chartist.Line("#line-smoothing",{labels:[1,2,3,4,5],series:[[1,5,10,0,1],[10,15,0,1,2]]},{lineSmooth:Chartist.Interpolation.simple({divisor:2}),fullWidth:!0,chartPadding:{right:20},low:0})},d=function(){var e={high:10,low:-10,axisX:{labelInterpolationFnc:function(e,t){return t%2==0?e:null}},plugins:[Chartist.plugins.tooltip()]};new Chartist.Bar("#bi-polar-bar",{labels:["W1","W2","W3","W4","W5","W6","W7","W8","W9","W10"],series:[[1,2,4,8,6,-2,-1,-4,-6,-2]]},e)},c=function(){new Chartist.Bar("#overlapping-bars",{labels:["Jan","Feb","Mar","Apr","Mai","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],series:[[5,4,3,7,5,10,3,4,8,10,6,8],[3,2,9,5,4,6,4,6,7,8,7,4]]},{seriesBarDistance:10},[["screen and (max-width: 640px)",{seriesBarDistance:5,axisX:{labelInterpolationFnc:function(e){return e[0]}}}]])},p=function(){new Chartist.Bar("#multi-line-chart",{labels:["First quarter of the year","Second quarter of the year","Third quarter of the year","Fourth quarter of the year"],series:[[6e4,4e4,8e4,7e4],[4e4,3e4,7e4,65e3],[8e3,3e3,1e4,6e3]]},{seriesBarDistance:10,axisX:{offset:60},axisY:{offset:80,labelInterpolationFnc:function(e){return e+" CHF"},scaleMinSpace:15},plugins:[Chartist.plugins.tooltip()]})},f=function(){new Chartist.Bar("#stacked-bar-chart",{labels:["Q1","Q2","Q3","Q4"],series:[[8e5,12e5,14e5,13e5],[2e5,4e5,5e5,3e5],[16e4,29e4,41e4,6e5]]},{stackBars:!0,axisY:{labelInterpolationFnc:function(e){return e/1e3+"k"}},plugins:[Chartist.plugins.tooltip()]}).on("draw",(function(e){"bar"===e.type&&e.element.attr({style:"stroke-width: 30px"})}))},m=function(){new Chartist.Bar("#horizontal-bar-chart",{labels:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],series:[[5,4,3,7,5,10,3],[3,2,9,5,4,6,4]]},{seriesBarDistance:10,reverseData:!0,horizontalBars:!0,axisY:{offset:70},plugins:[Chartist.plugins.tooltip()]})},w=function(){new Chartist.Bar("#extreme-chart",{labels:["Quarter 1","Quarter 2","Quarter 3","Quarter 4"],series:[[5,4,3,7],[3,2,9,5],[1,5,8,4],[2,3,4,6],[4,1,2,1]]},{stackBars:!0,axisX:{labelInterpolationFnc:function(e){return e.split(/\s+/).map((function(e){return e[0]})).join("")}},axisY:{offset:20},plugins:[Chartist.plugins.tooltip()]},[["screen and (min-width: 400px)",{reverseData:!0,horizontalBars:!0,axisX:{labelInterpolationFnc:Chartist.noop},axisY:{offset:60}}],["screen and (min-width: 800px)",{stackBars:!1,seriesBarDistance:10}],["screen and (min-width: 1000px)",{reverseData:!1,horizontalBars:!1,seriesBarDistance:15}]])},g=function(){new Chartist.Bar("#label-placement-chart",{labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],series:[[5,4,3,7,5,10,3],[3,2,9,5,4,6,4]]},{axisX:{position:"start"},axisY:{position:"end"},plugins:[Chartist.plugins.tooltip()]})},b=function(){var e=new Chartist.Pie("#animating-donut",{series:[10,20,50,20,5,50,15],labels:[1,2,3,4,5,6,7]},{donut:!0,showLabel:!1,plugins:[Chartist.plugins.tooltip()]});e.on("draw",(function(e){if("slice"===e.type){var t=e.element._node.getTotalLength();e.element.attr({"stroke-dasharray":t+"px "+t+"px"});var i={"stroke-dashoffset":{id:"anim"+e.index,dur:1e3,from:-t+"px",to:"0px",easing:Chartist.Svg.Easing.easeOutQuint,fill:"freeze"}};0!==e.index&&(i["stroke-dashoffset"].begin="anim"+(e.index-1)+".end"),e.element.attr({"stroke-dashoffset":-t+"px"}),e.element.animate(i,!1)}})),e.on("created",(function(){window.__anim21278907124&&(clearTimeout(window.__anim21278907124),window.__anim21278907124=null),window.__anim21278907124=setTimeout(e.update.bind(e),1e4)}))},x=function(){var e={series:[5,3,4]},t=function(e,t){return e+t};new Chartist.Pie("#simple-pie",e,{labelInterpolationFnc:function(i){return Math.round(i/e.series.reduce(t)*100)+"%"}})},y=function(){new Chartist.Pie("#pie-chart",{labels:["35%","55%","10%"],series:[20,15,40]},{labelInterpolationFnc:function(e){return e[0]}},[["screen and (min-width: 640px)",{chartPadding:30,donut:!0,labelOffset:100,donutWidth:60,labelDirection:"explode",labelInterpolationFnc:function(e){return e}}],["screen and (min-width: 1024px)",{labelOffset:60,chartPadding:20}]])},C=function(){new Chartist.Pie("#gauge-chart",{series:[20,10,30,40]},{donut:!0,donutWidth:60,startAngle:270,total:200,showLabel:!1,plugins:[Chartist.plugins.tooltip()]})},v=function(){new Chartist.Line("#different-series",{labels:["1","2","3","4","5","6","7","8"],series:[{name:"series-1",data:[5,2,-4,2,0,-2,5,-3]},{name:"series-2",data:[4,3,5,3,1,3,6,4]},{name:"series-3",data:[2,4,3,1,4,5,3,2]}]},{fullWidth:!0,series:{"series-1":{lineSmooth:Chartist.Interpolation.step()},"series-2":{lineSmooth:Chartist.Interpolation.simple(),showArea:!0},"series-3":{showPoint:!1}},plugins:[Chartist.plugins.tooltip()]},[["screen and (max-width: 320px)",{series:{"series-1":{lineSmooth:Chartist.Interpolation.none()},"series-2":{lineSmooth:Chartist.Interpolation.none(),showArea:!1},"series-3":{lineSmooth:Chartist.Interpolation.none(),showPoint:!0}}}]])},W=function(){var e=new Chartist.Line("#svg-dot-animation",{labels:["1","2","3","4","5","6","7","8","9","10","11","12"],series:[[12,4,2,8,5,4,6,2,3,3,4,6],[4,8,9,3,7,2,10,5,8,1,7,10]]},{low:0,showLine:!1,axisX:{showLabel:!1,offset:0},axisY:{showLabel:!1,offset:0},plugins:[Chartist.plugins.tooltip()]}),t=0;e.on("created",(function(){t=0})),e.on("draw",(function(e){"point"===e.type&&e.element.animate({opacity:{begin:80*t++,dur:500,from:0,to:1},x1:{begin:80*t++,dur:500,from:e.x-100,to:e.x,easing:Chartist.Svg.Easing.easeOutQuart}})})),e.on("created",(function(){window.__anim0987432598723&&(clearTimeout(window.__anim0987432598723),window.__anim0987432598723=null),window.__anim0987432598723=setTimeout(e.update.bind(e),8e3)}))},{init:function(){},load:function(){i(),n(),a(),s(),r(),o(),l(),u(),h(),d(),c(),p(),f(),m(),w(),g(),b(),x(),y(),C(),v(),W()},resize:function(){i(),n(),a(),s(),r(),o(),l(),u(),h(),d(),c(),p(),f(),m(),w(),g(),b(),x(),y(),C(),v(),W()}});jQuery(document).ready((function(){})),jQuery(window).on("load",(function(){_.load()})),jQuery(window).on("resize",(function(){setTimeout((function(){_.resize()}),500)}))}(jQuery);