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



}); // end annon function