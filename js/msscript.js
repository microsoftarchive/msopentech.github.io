/*jshint devel:true, smarttabs:true */
jQuery(document).ready(function(){


function getFontSize(name){
        var $numChar = name.length;
        if (($numChar >= 1) && ($numChar < 10)) {
                return "font-size : 24px";
            }
            else if (($numChar >= 10) && ($numChar < 12)) {
                return "font-size : 18px";
            }
            else if (($numChar >= 12) && ($numChar < 30)) {
                return "font-size : 16px";
            }
            else if (($numChar >= 30) && ($numChar < 40)) {
                return "font-size : 16px";
            }
            else {
                return "font-size : 16px";
            }


} // getFontSize

function get_padding(name){
        var $numPad = name.length;
        if (($numPad >= 1) && ($numPad < 10)) {
                return "padding-top : 14px";
            }
            else {
                return "padding-top: 10px";
            }

} // get_padding

function get_line_height(height){
        var $numLine = height.length;
            if (($numLine >= 12) && ($numLine < 30)) {
                return "line-height : 12px";
            }
            else {
                return "line-height : 11px";
            }
}

function get_random_color() {
    var setColors = ['#e84523', '#a92e8c', '#d77bae', '#b92625', '#fdb800', '#de5e21', '#f6e800'];
    var color = '';
        color = setColors[Math.round(Math.random() * 6)];
    return color;
}

function get_random_class() {
    var setClass = ['left', 'top', 'right', 'bottom'];
    var rotate = setClass[Math.round(Math.random() * 3)];
    return rotate;
}

function parseISO8601(value) {
    a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
    if (a){
         return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));}

    if (value.slice(0, 5) === 'Date(' && value.slice(-1) === ')') {
       var d = new Date(value.slice(5, -1));

       if (d){
          return d;}
    }
    return new Date();
  }
// dynamically call our public repos

    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/msopentech/repos",
        dataType: "json",
        success: function(result) {
            for(var i in result ) {
                var thisRepo = result[i];
                var $length = getFontSize(result[i].name);
                var $pad = get_padding(result[i].name);
                var updatedAt = parseISO8601(thisRepo.updated_at);
                var $lineHeight = get_line_height(result[i].name);
                var updatedStr = $.format.date(updatedAt, "MM/dd/yy") + ' ' + $.format.date(updatedAt, "@HH:mm:ss");
                $(".repository-thumbs").append(
                    "<div class='repo-single-thumb'><p>Watchers: <span>" + result[i].watchers + "</span></p><p>Forks: <span>" + result[i].forks + "</span></p><p>Language: <span>" + result[i].language + "</span></p><p>Last Updated: <span>" + updatedStr + "</span></p><div class='triangle " + get_random_class() + "' style='border-right: 35px solid " + get_random_color() + ";'></div><h2 style=' " + $pad + "; " + $lineHeight + ";'><a href='" + result[i].html_url + "' target='_blank' style='" + $length + ";'>" +
                    result[i].name + "</a></h2><div class='repo-single-popup'><p>" + result[i].description + "</p><h3>" + result[i].name + "</h3></div></div>"
                );
               
            }
            

        } // success function

    }); // end ajax call
    console.log($('.repo-single-thumb'));
    $('.repository-thumbs').on('mouseover', '.repo-single-thumb', function(){
        $(this).addClass('showing');
    });
    $('.repository-thumbs').on('mouseout', '.repo-single-thumb', function(){
        $(this).removeClass('showing');
    });
    // $.ajax({
    //         type: "GET",
    //         url: "https://api.github.com/repos/msopentech/dash.js/stats/participation",
    //         success: function(result){
    //             for(var i in result ) {
    //                 data = result[i];
    //                 console.log(data);
    //             //}
                    
    //                 var chart = d3.select(".timeline-thumbs").append("div").attr("class", "chart");
    //                 console.log(chart);
    //                 chart.selectAll("div")
    //                .data(data)
    //                .enter().append("div")
    //                .style("width", function(d) { return d * 10 + "px"; })
    //                .text(function(d) { return d; });
    //             }
               
    //         }
    // }); // end ajax

//this may go back in - it is the triangle that randomly changes color and rotates
// 


}); // end annon function