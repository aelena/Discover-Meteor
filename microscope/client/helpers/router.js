/** 
 * router
 */
Meteor.Router.add ({
	'/': 'postsList',

	'/posts/:_id': {
		to: 'postPage',
		and: function(id) {Session.set('currentPostID', id);}
	}
});