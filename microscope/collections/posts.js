/**
 * in Meteor the usage of 'var' limits the variable
 * to the current file, but we want to have this collecion
 * available on both client and server, so we're kinda
 * making it global 
 */
Posts = new Meteor.Collection('posts');


Meteor.methods({

	post: function(postAttributes){

		var user = Meteor.user(),
			postWithSameLink = Posts.findOne({url: postAttributes.url});

		if(!user)
			throw new Meteor.Error(401, 'You need to login to post new stuff!');

		if(!postAttributes.title)
			throw new Meteor.Error(422, 'Please fill in the headline');

		if(postAttributes.url && postWithSameLink){
			throw new Meteor.Error(302, 'This link has already been posted', postWithSameLink._id);
		}

		var post = _.extend(_.pick(postAttributes, 'url','title','message'),
						{
							userId: user._id,
							author: user.username,
							submitted: new Date().getTime()
						}
		);

		var postId = Posts.insert(post);

		return postId;

	}

});

Posts.allow({
	insert: function(userId, doc){
		// only if you're logged in
		return !! userId;
	}
});

Posts.allow({
	update: ownsDocument,
	remove: ownsDocument
});

Posts.deny({
	update: function(userId, post, fieldNames){
		// only allowed to edit these three
		return ( _.without(fieldNames, 'url', 'title').length > 0 );
	}
})