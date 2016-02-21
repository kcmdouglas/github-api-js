$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#repo-info").show();
    var username = $("input#username").val();
    $.get('https://api.github.com/users/' + username + "/repos", function(repos) {
      for (var i=0; i<repos.length; i++) {
        $("#repos").append("<h4>" + repos[i].name + "</h4>");
      }
    });  
  });
});
