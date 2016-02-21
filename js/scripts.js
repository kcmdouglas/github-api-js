concatFollowInfo = function(followingNumber, followersNumber) {
  return "Following <span class='badge'>" + followingNumber + "</span> || Followers <span class='badge'>" + followersNumber + "</span>";
};

resetAllFields = function() {
  $("#username").val("");
  $("#user-picture").empty();
  $("span#found-username").empty();
  $("span#public-repo-info").empty();
  $("span#follow").empty();
  $("#repos").empty();
};

module.exports = {
  concatFollowInfo: concatFollowInfo,
  resetAllFields: resetAllFields
};
