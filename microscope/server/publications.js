/**
 * So far no  paging, or showing just 
 * specific stuff for specific users
 * that will come later on
 */
Meteor.publish('posts', function(){
	return Posts.find();
});

Meteor.publish('comments', function(){
	return Comments.find({postId: postId});
});