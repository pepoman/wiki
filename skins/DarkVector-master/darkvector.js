jQuery(function($){$("div.vectorMenu").each(function(){var $el=$(this);$el.find("> h3 > a").parent().attr("tabindex","0").on("click keypress",function(e){if(e.type==="click"||e.which===13){$el.toggleClass("menuForceShow");e.preventDefault()}}).focus(function(){$el.find("> a").addClass("vectorMenuFocus")}).blur(function(){$el.find("> a").removeClass("vectorMenuFocus")}).find("> a:first").attr("tabindex","-1")});var $cactions=$("#p-cactions"),$tabContainer=$("#p-views ul"),originalDropdownWidth=$cactions.width();$tabContainer.bind("beforeTabCollapse",function(){if($cactions.hasClass("emptyPortlet")){$cactions.removeClass("emptyPortlet").find("h3").css("width","1px").animate({width:originalDropdownWidth},"normal")}}).bind("beforeTabExpand",function(){if($cactions.find("li").length===1){$cactions.find("h3").animate({width:"1px"},"normal",function(){$(this).attr("style","").parent().addClass("emptyPortlet")})}}).collapsibleTabs({expandCondition:function(eleWidth){var distance=$.collapsibleTabs.calculateTabDistance();if(distance>=eleWidth+1){return true}else{if($cactions.find("li").length===1){return distance>=eleWidth+1-originalDropdownWidth}else{return false}}},collapseCondition:function(){if($.collapsibleTabs.calculateTabDistance()<0){if($cactions.hasClass("emptyPortlet")){return $tabContainer.children("li.collapsible:last").width()>originalDropdownWidth}else{return true}}else{return false}}})});