var scripts = require('./../js/scripts.js');

$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#user-info").show();
    var username = $("input#username").val();
    $.get('https://api.github.com/users/' + username, function(response) {
       var following = response.following;
       var followers = response.followers;
       var concatFollow = concatFollowInfo(following, followers);
       console.log(concatFollow);
       $("#user-picture").append("<img src='" + response.avatar_url + "' alt='User picture' width='250' height='250'>")
       $("#found-username").append("<h2>" + username + "</h2>");
       $("#found-username").append("<h3>" + response.name + "</h3>");
       $("#public-repo-info").append("<h4> Public Repos: <span class='badge'>" + response.public_repos + "</span> || </h4><a href='https://github.com/" + username + "?tab=repositories'><h5>See Repos on Github</h5></a>");
       $("span#follow").append("<h4>" + concatFollow + "</h4>");
    });

    resetAllFields();
  });
});
