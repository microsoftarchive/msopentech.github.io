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
                return "font-size : 14px";
            }
            else if (($numChar >= 30) && ($numChar < 40)) {
                return "font-size : 11px";
            }
            else {
                return "font-size : 12px";
            }

} // getFontSize
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

// dynamically call our public repos

    $.ajax({
        type: "GET",
        url: "https://api.github.com/users/msopentech/repos",
        dataType: "json",
        success: function(result) {
            for(var i in result ) {
                var $length = getFontSize(result[i].name);
                $(".repository-thumbs").append(
                    "<div class='repo-single-thumb'><h2><a href='" + result[i].html_url + "' target='_blank' style='" + $length + ";'>" +
                    result[i].name + "</a></h2></div>"
                );
               
            }
            
            $("#repo_count").append("Total Repos: " + result.length);

        } // success function

    }); // end ajax call


//this may go back in - it is the triangle that randomly changes color and rotates
// <div class='triangle " + get_random_class() + "' style='border-right: 68px solid " + get_random_color() + ";'></div>


}); // end annon function