/**
 * in Meteor the usage of 'var' limits the variable
 * to the current file, but we want to have this collecion
 * available on both client and server, so we're kinda
 * making it global 
 */
Posts = new Meteor.Collection('posts');

Posts.allow({
	insert: function(userId, doc){
		// only if you're logged in
		return !! userId;
	}
});