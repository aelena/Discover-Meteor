Template.postItem.helpers({
	domain: function (){
		var a = document.createElement('a');
		a.href = this.url;
		return 'visit ' + a.hostname;
	},

	ownPost: function(){
		return this.userId == Meteor.userId();
	},

	commentsCount: function() {
		return Comments.find({postId: this._id}).count(); 
	}
});