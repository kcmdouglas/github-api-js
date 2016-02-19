$(document).ready(function(){
  var username;

  $.get('https://api.github.com/users/' + username, function(data) {
    username = $("input#username").val();
    console.log(data);
  });


});
