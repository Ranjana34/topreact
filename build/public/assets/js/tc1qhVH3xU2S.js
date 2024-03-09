"use strict";function addSwitcher(){0==$("#dlabSwitcher").length&&(jQuery("body").append('<div class="sidebar-right"><div class="bg-overlay"></div><a class="sidebar-right-trigger wave-effect wave-effect-x" data-bs-toggle="tooltip" data-placement="right" data-original-title="Change Layout" href="javascript:void(0);"><span><i class="fa fa-cog fa-spin"></i> <a class="sidebar-close-trigger" href="javascript:void(0);"><span><i class="la-times las"></i></span></a><div class="sidebar-right-inner"><h4>Pick your style <a href="javascript:void(0);" onclick="deleteAllCookie()" class="btn btn-primary btn-sm pull-right">Delete All Cookie</a></h4><div class="card-tabs"><ul class="nav nav-tabs" role="tablist"><li class="nav-item"><a class="nav-link active" href="#tab1" data-bs-toggle="tab">Theme</a></li><li class="nav-item"><a class="nav-link" href="#tab2" data-bs-toggle="tab">Header</a></li><li class="nav-item"><a class="nav-link" href="#tab3" data-bs-toggle="tab">Content</a></li></ul></div><div class="tab-content tab-content-default tabcontent-border"><div class="fade tab-pane active show" id="tab1"><div class="admin-settings"><div class="row"><div class="col-sm-12"><p>Background</p> <select class="default-select wide form-control" id="theme_version" name="theme_version"><option value="light">Choose Background</option><option value="light">Light</option><option value="dark">Dark</option> </select></div><div class="col-sm-6"><p>Primary Color</p><div> <span data-placement="top" data-bs-toggle="tooltip" title="Color 1"> <input class="chk-col-primary filled-in" id="primary_color_1" name="primary_bg" type="radio" value="color_1"> <label for="primary_color_1" class="bg-label-pattern"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_2" name="primary_bg" type="radio" value="color_2"> <label for="primary_color_2"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_3" name="primary_bg" type="radio" value="color_3"> <label for="primary_color_3"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_4" name="primary_bg" type="radio" value="color_4"> <label for="primary_color_4"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_5" name="primary_bg" type="radio" value="color_5"> <label for="primary_color_5"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_6" name="primary_bg" type="radio" value="color_6"> <label for="primary_color_6"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_7" name="primary_bg" type="radio" value="color_7"> <label for="primary_color_7"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_9" name="primary_bg" type="radio" value="color_9"> <label for="primary_color_9"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_10" name="primary_bg" type="radio" value="color_10"> <label for="primary_color_10"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_11" name="primary_bg" type="radio" value="color_11"> <label for="primary_color_11"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_12" name="primary_bg" type="radio" value="color_12"> <label for="primary_color_12"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_13" name="primary_bg" type="radio" value="color_13"> <label for="primary_color_13"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_14" name="primary_bg" type="radio" value="color_14"> <label for="primary_color_14"></label> </span> <span> <input class="chk-col-primary filled-in" id="primary_color_15" name="primary_bg" type="radio" value="color_15"> <label for="primary_color_15"></label> </span></div></div><div class="col-sm-6"><p>Navigation Header</p><div> <span> <input class="chk-col-primary filled-in" id="nav_header_color_1" name="navigation_header" type="radio" value="color_1"> <label for="nav_header_color_1" class="bg-label-pattern"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_2" name="navigation_header" type="radio" value="color_2"> <label for="nav_header_color_2"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_3" name="navigation_header" type="radio" value="color_3"> <label for="nav_header_color_3"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_4" name="navigation_header" type="radio" value="color_4"> <label for="nav_header_color_4"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_5" name="navigation_header" type="radio" value="color_5"> <label for="nav_header_color_5"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_6" name="navigation_header" type="radio" value="color_6"> <label for="nav_header_color_6"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_7" name="navigation_header" type="radio" value="color_7"> <label for="nav_header_color_7"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_8" name="navigation_header" type="radio" value="color_8"> <label for="nav_header_color_8" class="border"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_9" name="navigation_header" type="radio" value="color_9"> <label for="nav_header_color_9"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_10" name="navigation_header" type="radio" value="color_10"> <label for="nav_header_color_10"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_11" name="navigation_header" type="radio" value="color_11"> <label for="nav_header_color_11"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_12" name="navigation_header" type="radio" value="color_12"> <label for="nav_header_color_12"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_13" name="navigation_header" type="radio" value="color_13"> <label for="nav_header_color_13"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_14" name="navigation_header" type="radio" value="color_14"> <label for="nav_header_color_14"></label> </span> <span> <input class="chk-col-primary filled-in" id="nav_header_color_15" name="navigation_header" type="radio" value="color_15"> <label for="nav_header_color_15"></label> </span></div></div><div class="col-sm-6"><p>Header</p><div> <span> <input class="chk-col-primary filled-in" id="header_color_1" name="header_bg" type="radio" value="color_1"> <label for="header_color_1" class="bg-label-pattern"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_2" name="header_bg" type="radio" value="color_2"> <label for="header_color_2"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_3" name="header_bg" type="radio" value="color_3"> <label for="header_color_3"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_4" name="header_bg" type="radio" value="color_4"> <label for="header_color_4"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_5" name="header_bg" type="radio" value="color_5"> <label for="header_color_5"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_6" name="header_bg" type="radio" value="color_6"> <label for="header_color_6"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_7" name="header_bg" type="radio" value="color_7"> <label for="header_color_7"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_8" name="header_bg" type="radio" value="color_8"> <label for="header_color_8" class="border"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_9" name="header_bg" type="radio" value="color_9"> <label for="header_color_9"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_10" name="header_bg" type="radio" value="color_10"> <label for="header_color_10"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_11" name="header_bg" type="radio" value="color_11"> <label for="header_color_11"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_12" name="header_bg" type="radio" value="color_12"> <label for="header_color_12"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_13" name="header_bg" type="radio" value="color_13"> <label for="header_color_13"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_14" name="header_bg" type="radio" value="color_14"> <label for="header_color_14"></label> </span> <span> <input class="chk-col-primary filled-in" id="header_color_15" name="header_bg" type="radio" value="color_15"> <label for="header_color_15"></label> </span></div></div><div class="col-sm-6"><p>Sidebar</p><div> <span> <input class="chk-col-primary filled-in" id="sidebar_color_1" name="sidebar_bg" type="radio" value="color_1"> <label for="sidebar_color_1" class="bg-label-pattern"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_2" name="sidebar_bg" type="radio" value="color_2"> <label for="sidebar_color_2"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_3" name="sidebar_bg" type="radio" value="color_3"> <label for="sidebar_color_3"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_4" name="sidebar_bg" type="radio" value="color_4"> <label for="sidebar_color_4"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_5" name="sidebar_bg" type="radio" value="color_5"> <label for="sidebar_color_5"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_6" name="sidebar_bg" type="radio" value="color_6"> <label for="sidebar_color_6"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_7" name="sidebar_bg" type="radio" value="color_7"> <label for="sidebar_color_7"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_8" name="sidebar_bg" type="radio" value="color_8"> <label for="sidebar_color_8" class="border"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_9" name="sidebar_bg" type="radio" value="color_9"> <label for="sidebar_color_9"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_10" name="sidebar_bg" type="radio" value="color_10"> <label for="sidebar_color_10"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_11" name="sidebar_bg" type="radio" value="color_11"> <label for="sidebar_color_11"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_12" name="sidebar_bg" type="radio" value="color_12"> <label for="sidebar_color_12"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_13" name="sidebar_bg" type="radio" value="color_13"> <label for="sidebar_color_13"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_14" name="sidebar_bg" type="radio" value="color_14"> <label for="sidebar_color_14"></label> </span> <span> <input class="chk-col-primary filled-in" id="sidebar_color_15" name="sidebar_bg" type="radio" value="color_15"> <label for="sidebar_color_15"></label> </span></div></div></div></div></div><div class="fade tab-pane" id="tab2"><div class="admin-settings"><div class="row"><div class="col-sm-6"><p>Layout</p> <select class="default-select wide form-control" id="theme_layout" name="theme_layout"><option value="vertical">Choose Layout</option><option value="vertical">Vertical</option><option value="horizontal">Horizontal</option> </select></div><div class="col-sm-6"><p>Header position</p> <select class="default-select wide form-control" id="header_position" name="header_position"><option value="static">Choose Header Position</option><option value="static">Static</option><option value="fixed">Fixed</option> </select></div><div class="col-sm-6"><p>Sidebar</p> <select class="default-select wide form-control" id="sidebar_style" name="sidebar_style"><option value="full">Choose Style</option><option value="full">Full</option><option value="mini">Mini</option><option value="compact">Compact</option><option value="modern">Modern</option><option value="overlay">Overlay</option><option value="icon-hover">Icon-hover</option> </select></div><div class="col-sm-6"><p>Sidebar position</p> <select class="default-select wide form-control" id="sidebar_position" name="sidebar_position"><option value="static">Choose Sidebar Position</option><option value="static">Static</option><option value="fixed">Fixed</option> </select></div></div></div></div><div class="fade tab-pane" id="tab3"><div class="admin-settings"><div class="row"><div class="col-sm-6"><p>Container</p> <select class="default-select wide form-control" id="container_layout" name="container_layout"><option value="wide">Choose Container</option><option value="wide">Wide</option><option value="boxed">Boxed</option><option value="wide-boxed">Wide Boxed</option> </select></div><div class="col-sm-6"><p>Body Font</p> <select class="default-select wide form-control" id="typography" name="typography"><option value="roboto">Choose Font Family</option><option value="roboto">Roboto</option><option value="poppins">Poppins</option><option value="opensans">Open Sans</option></select></div><div class="col-sm-6"><p>Direction</p><select class="default-select form-control wide" id="theme_direction" name="theme_direction"><option value="disabled selected hidden">Choose Direction<option value="ltr">LTR<option value="rtl">RTL</select></div></div></div></div></div><div class="note-text"><span class="text-danger">*Note :</span> This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a href="../doc/index.html" target="_blank" class="text-primary">documentation.</a></div></div></div><div class="dlab-demo-panel"><div class="bg-close"></div><a class="dlab-demo-trigger" data-bs-toggle="tooltip" data-placement="right" data-original-title="Check out more demos" href="javascript:void(0)"><span><i class="las la-tint"></i></span></a><div class="dlab-demo-inner"><a href="javascript:void(0);" class="btn btn-primary btn-sm px-2 py-1 mb-3" onclick="deleteAllCookie()">Delete All Cookie</a><div class="dlab-demo-header"><h3 class="text-white">Select Preset Demo</h3><a class="dlab-demo-close" href="javascript:void(0)"><span><i class="las la-times"></i></span></a></div><div class="dlab-demo-content"><div class="dlab-wrapper row"><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx  dlab-demo-bx"><div class="overlay-wrapper "><img src="images/demo/pic1.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0);" data-theme="1" class="btn dlab_theme_demo btn-secondary btn-sm me-2">Default</a><a href="javascript:void(0);" data-theme="1" class="btn dlab_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-white">Demo 1</h5></div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx  dlab-demo-bx"><div class="overlay-wrapper "><img src="images/demo/pic2.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0);" data-theme="2" class="btn dlab_theme_demo btn-secondary btn-sm me-2">Default</a><a href="javascript:void(0);" data-theme="2" class="btn dlab_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-white">Demo 2</h5></div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx  dlab-demo-bx"><div class="overlay-wrapper "><img src="images/demo/pic3.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0);" data-theme="3" class="btn dlab_theme_demo btn-secondary btn-sm me-2">Default</a><a href="javascript:void(0);" data-theme="3" class="btn dlab_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-white">Demo 3</h5></div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx  dlab-demo-bx"><div class="overlay-wrapper "><img src="images/demo/pic4.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0);" data-theme="4" class="btn dlab_theme_demo btn-secondary btn-sm me-2">Default</a><a href="javascript:void(0);" data-theme="4" class="btn dlab_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-white">Demo 4</h5></div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx  dlab-demo-bx"><div class="overlay-wrapper "><img src="images/demo/pic5.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0);" data-theme="5" class="btn dlab_theme_demo btn-secondary btn-sm me-2">Default</a><a href="javascript:void(0);" data-theme="5" class="btn dlab_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-white">Demo 5</h5></div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx  dlab-demo-bx"><div class="overlay-wrapper "><img src="images/demo/pic6.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="jobs-page.html" data-theme="6" class="btn dlab_theme_demo btn-secondary btn-sm me-2">Default</a><a href="jobs-page.html" data-theme="6" class="btn dlab_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-white">Demo 6</h5></div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx  dlab-demo-bx"><div class="overlay-wrapper "><img src="images/demo/pic7.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="apply-job.html" data-theme="7" class="btn dlab_theme_demo btn-secondary btn-sm me-2">Default</a><a href="apply-job.html" data-theme="7" class="btn dlab_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-white">Demo 7</h5></div><div class="col-xl-3 col-md-6 mb-4"><div class="overlay-bx  dlab-demo-bx"><div class="overlay-wrapper "><img src="images/demo/pic8.jpg" alt="" class="w-100"></div><div class="overlay-layer"><a href="javascript:void(0);" data-theme="8" class="btn dlab_theme_demo btn-secondary btn-sm me-2">Default</a><a href="javascript:void(0);" data-theme="8" class="btn dlab_theme_demo_rtl btn-info btn-sm">RTL Version</a></div></div><h5 class="text-white">Demo 8</h5></div></div></div><div class="fs-14 pt-3"><span class="text-danger">*Note :</span> This theme switcher is not part of product. It is only for demo. you will get all guideline in documentation. please check <a href="../doc/index.html" class="text-primary">documentation.</a></div></div></div>'),$(".sidebar-right-trigger").on("click",(function(){$(".sidebar-right").toggleClass("show")})),$(".sidebar-close-trigger,.bg-overlay").on("click",(function(){$(".sidebar-right").removeClass("show")})))}!function(a){addSwitcher();const e=a("body"),l=a("html"),o=a("#typography"),i=a("#theme_version"),r=a("#theme_layout"),s=a("#sidebar_style"),t=a("#sidebar_position"),d=a("#header_position"),n=a("#container_layout"),c=a("#theme_direction");o.on("change",(function(){e.attr("data-typography",this.value),setCookie("typography",this.value)})),i.on("change",(function(){e.attr("data-theme-version",this.value),"dark"===this.value?jQuery(".dlab-theme-mode").addClass("active"):jQuery(".dlab-theme-mode").removeClass("active"),setCookie("version",this.value)})),t.on("change",(function(){"fixed"===this.value&&"modern"===e.attr("data-sidebar-style")&&"vertical"===e.attr("data-layout")?alert("Sorry, Modern sidebar layout dosen't support fixed position!"):e.attr("data-sidebar-position",this.value),setCookie("sidebarPosition",this.value)})),d.on("change",(function(){e.attr("data-header-position",this.value),setCookie("headerPosition",this.value)})),c.on("change",(function(){l.attr("dir",this.value),l.attr("class",""),l.addClass(this.value),"rtl"===l.attr("dir")?jQuery(".main-css").attr("href","css/style-rtl.css"):jQuery(".main-css").attr("href","css/GUux7sFj1fiM.css"),e.attr("direction",this.value),setCookie("direction",this.value)})),r.on("change",(function(){if("overlay"===e.attr("data-sidebar-style"))return e.attr("data-sidebar-style","full"),void e.attr("data-layout",this.value);e.attr("data-layout",this.value),setCookie("layout",this.value)})),n.on("change",(function(){if("boxed"===this.value&&"vertical"===e.attr("data-layout")&&"full"===e.attr("data-sidebar-style"))return e.attr("data-sidebar-style","overlay"),void e.attr("data-container",this.value);e.attr("data-container",this.value),setCookie("containerLayout",this.value)})),s.on("change",(function(){if("horizontal"!==e.attr("data-layout")||"overlay"!==this.value){if("vertical"===e.attr("data-layout")){if("boxed"===e.attr("data-container")&&"full"===this.value)return void alert("Sorry! Full menu is not available in Vertical Boxed layout.");if("modern"===this.value&&"fixed"===e.attr("data-sidebar-position"))return void alert("Sorry! Modern sidebar layout is not available in the fixed position. Please change the sidebar position into Static.")}e.attr("data-sidebar-style",this.value),"icon-hover"===e.attr("data-sidebar-style")&&a(".dlabnav").hover((function(){a("#main-wrapper").addClass("iconhover-toggle")}),(function(){a("#main-wrapper").removeClass("iconhover-toggle")})),setCookie("sidebarStyle",this.value)}else alert("Sorry! Overlay is not possible in Horizontal layout.")})),a('input[name="navigation_header"]').on("click",(function(){e.attr("data-nav-headerbg",this.value),setCookie("navheaderBg",this.value)})),a('input[name="header_bg"]').on("click",(function(){e.attr("data-headerbg",this.value),setCookie("headerBg",this.value)})),a('input[name="sidebar_bg"]').on("click",(function(){e.attr("data-sidebarbg",this.value),setCookie("sidebarBg",this.value)})),a('input[name="primary_bg"]').on("click",(function(){e.attr("data-primary",this.value),setCookie("primary",this.value)}))}(jQuery);