/*jshint devel:true, smarttabs:true */jQuery(document).ready(function(){function e(e){var t=e.length;return t>=1&&t<10?"font-size : 24px":t>=10&&t<12?"font-size : 18px":t>=12&&t<30?"font-size : 16px":t>=30&&t<40?"font-size : 16px":"font-size : 16px"}function t(e){var t=e.length;return t>=1&&t<10?"padding-top : 14px":"padding-top: 10px"}function n(e){var t=e.length;return t>=12&&t<30?"line-height : 12px":"line-height : 11px"}function r(){var e=["#e84523","#a92e8c","#d77bae","#b92625","#fdb800","#de5e21","#f6e800"],t="";t=e[Math.round(Math.random()*6)];return t}function i(){var e=["one","two","three","four","five","six","seven","eight","nine","ten"],t=e[Math.round(Math.random()*9)];return t}function s(e){a=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(e);if(a)return new Date(Date.UTC(+a[1],+a[2]-1,+a[3],+a[4],+a[5],+a[6]));if(e.slice(0,5)==="Date("&&e.slice(-1)===")"){var t=new Date(e.slice(5,-1));if(t)return t}return new Date}$.ajax({type:"GET",url:"https://api.github.com/users/msopentech/repos",dataType:"json",success:function(r){for(var o in r){var u=r[o],a=e(r[o].name),f=t(r[o].name),l=s(u.updated_at),c=n(r[o].name),h=$.format.date(l,"MM/dd/yy")+" "+$.format.date(l,"@HH:mm:ss");$(".repository-thumbs").append("<div class='repo-single-thumb'><p>Watchers: <span>"+r[o].watchers+"</span></p><p>Forks: <span>"+r[o].forks+"</span></p><p>Language: <span>"+r[o].language+"</span></p><p>Last Updated: <span>"+h+"</span></p><h2 style=' "+f+"; "+c+";'><a href='"+r[o].html_url+"' target='_blank' style='"+a+";'>"+r[o].name+"</a><span class='triangle "+i()+"'></span></h2><div class='repo-single-popup'><p>"+r[o].description+"</p><h3>"+r[o].name+"</h3></div></div>")}}});$(".repository-thumbs").on("mouseover",".repo-single-thumb",function(){$(this).addClass("showing")});$(".repository-thumbs").on("mouseout",".repo-single-thumb",function(){$(this).removeClass("showing")})});