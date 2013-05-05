/**
 * in Meteor the usage of 'var' limits the variable
 * to the current file, but we want to have this collecion
 * available on both client and server, so we're kinda
 * making it global 
 */
Posts = new Meteor.Collection('posts');


Meteor.methods({

	post: function(postData){

		console.log(postData);

		var user = Meteor.user(),
			postWithSameLink = Posts.findOne({url: postData.url});

		console.log(postWithSameLink);

		if(!user)
			throw new Meteor.Error(401, 'You need to login to post new stuff!');

		if(!postData.title)
			throw new Meteor.Error(422, 'Please fill in the headline');

		if(postData.url && postWithSameLink){
			console.log('puta');
			throw new Meteor.Error(302, 'This link has already been posted', postWithSameLink._id);
		}

		var _post = _.extend(_.pick(postData, 'url','title','message'),
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