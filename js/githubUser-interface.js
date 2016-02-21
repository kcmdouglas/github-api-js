var scripts = require('./../js/scripts.js');

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    debugger;
    var username = $("input#username").val();
    $.get('https://api.github.com/users/' + username, function(response) {
       console.log(response);
       var following = response.following;
       var followers = response.followers;
       var concatFollow = concatFollowInfo(following, followers);
       console.log(concatFollow);
       $("#found-username").append("<h2>" + username + "</h2>");
       $("span#follow").append("<h4>" + concatFollow + "</h4>");
    });

  });
});
