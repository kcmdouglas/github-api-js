var scripts = require('./../js/scripts.js');

$(document).ready(function(){
  var responseFromGit;
  $("form").submit(function(){
    var username = $("input#username").val();

    $.get('https://api.github.com/users/' + username, function(response) {
       responseFromGit = response;
       if(responseFromGit !== 404) {
         $("span#failMessage").text("<h3>Whoops! That doesn't seem to be an existing Github username.");
       } else {
         $(".hidden").show()
         var following = responseFromGit.following;
         var followers = responseFromGit.followers;
         var concatFollow = concatFollowInfo(following, followers);
         $("div#user-info").text(concatFollow);



       }
    });
  });
});
