// link to his pastebins

//  http://jsfiddle.net/jwalsh/s7bSp/9/
//  http://jsfiddle.net/jwalsh/s7bSp/10/
//  http://jsfiddle.net/jwalsh/s7bSp/11/

var USERNAME = 'msopentech';

// Data
var getRepositories = function(owner, cb) {
  $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/' + owner + '/repos',
        dataType: 'json',
      success: function(data) {
          console.log(data);
          cb(owner, data);
      }
  });
};

var getGitHubParticipation = function(owner, repo, cb) {
    // Work around throttling with 10s
    setTimeout(
        function() {
              $.ajax({
    type: 'GET',
    url: 'https://api.github.com/repos/' +
      owner + '/' + repo +
      '/stats/participation',
    success: function(data) {
        console.log(data);
        cb(repo, data);
    }
  });
        },
        Math.floor(Math.random() * 10000)
    );

};

// Rendering
var renderRepoTimeline = function(repo, result) {
  for (var i in result) {
    data = result[i].all;
    console.log(data);
  }
  var chart = d3
    .select('#' + repo)
    .append('div')
    .attr('class', 'chart')
    .selectAll('div')
    .data(data)
    .enter()
    .append('div')
    // .style('width', function(d) { return (5 + d * 10) + 'px'; })
    .style("height", function(d) { return d * 10 + "px"; })
    .text(function(d) { return d; });
};

var renderRepositories = function(owner, data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      var name = data[i].name;
      $('body').append($('<h2>').text(name));
      $('body').append($('<div>').attr('id', name));
      getGitHubParticipation(owner, name, renderRepoTimeline);
    }
};

// Main
getRepositories(
  USERNAME,
  renderRepositories);

