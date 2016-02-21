concatFollowInfo = function(followingNumber, followersNumber) {
  return "Following <span class='badge'>" + followingNumber + "</span> || Followers <span class='badge'>" + followersNumber + "</span>";
};

module.exports = {
  concatFollowInfo: concatFollowInfo
};
