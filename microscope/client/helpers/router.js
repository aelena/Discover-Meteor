/** 
 * router
 */
Meteor.Router.add ({
	'/': 'postsList',

	'/posts/:_id': {
		to: 'postPage',
		and: function(id) {Session.set('currentPostID', id);}
	},

	'/submit': 'postSubmit',

	'/posts/:_id/edit': {
		to: 'postEdit',
		and: function(id) { Session.set ('currentPostID', id);}
	}

});

Meteor.Router.filters({
	'requireLogin': function(page){
		if(Meteor.user())
			return page;
		else if (Meteor.loggingIn())
			return 'loading'
		else
			return 'accessDenied';
	}
});

Meteor.Router.filter('requireLogin', {only: 'postSubmit'});