var theme=localStorage.getItem("ta_theme");"Dark"==theme&&$("body").addClass("dark"),$("body").ready(function(){$(".live-list li").each(function(){$(this).attr("data-search",$(this).text().toLowerCase())}),$("#live-search").on("keyup",function(){""==this.value?($("h4").fadeIn(100),$(".app-group").removeClass("search-group"),$(".live-list").addClass("clear")):($("h4").hide(),$(".app-group").addClass("search-group"),$(".live-list").removeClass("clear"));var e=$(this).val().trim().toLowerCase();$(".live-list li").each(function(){$(this).filter("[data-search *= "+e+"]").length>0||e.length<1?$(this).fadeIn(100):$(this).fadeOut(100)})})}),$("#categories").change(function(){$(this).find("option:selected").each(function(){var e=$(this).attr("value");"tag_all"==e?$(".category").fadeIn(100):e&&($(".category").not("."+e).hide(),$("."+e).fadeIn(100))})}),$("#share_this").click(function(){var e=window.location.href;return window.open("https://www.addtoany.com/share#url="+escape(e),"","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=670"),!1});