!function(e){var i=function(e){var i,o,r=window.location.search.substring(1).split("&");for(o=0;o<r.length;o++)if((i=r[o].split("="))[0]===e)return void 0===i[1]||decodeURIComponent(i[1])}("dir");"rtl"!=i&&(i="ltr");var o={typography:"poppins",version:"light",layout:"Vertical",headerBg:"color_1",navheaderBg:"color_1",sidebarBg:"color_1",sidebarStyle:"full",sidebarPosition:"fixed",headerPosition:"fixed",containerLayout:"full",direction:i};new dezSettings(o),jQuery(window).on("resize",(function(){new dezSettings(o)}))}(jQuery);