$(document).ready(function(){
   $("form").submit(function(event){
     event.preventDefault();
     var username = $("input#username").val();
     $.get('https://api.github.com/users/' + username + "/repos", function(repos) {
       console.log(repos);
        for (var i=0; i<repos.length; i++) {
          $("#repos").append("<ul><h4>" + repos[i].name + "</ul></h4>");
        }
     });
   });
});
