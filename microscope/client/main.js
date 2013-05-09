/** 
 * set up the subscription so that the clint
 * actually gets the data 
 */
Meteor.subscribe('posts');
Meteor.autorun(function() {
	Meteor.subscribe('comments', Session.get('currentPostId'));
});