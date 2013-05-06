Template.postEdit.helpers({
	post: function() {
		console.log(Posts.findOne(Session.get('currentPostId')));
		console.log(Session.get('currentPostId'));
		return Posts.findOne(Session.get('currentPostId'));
	}
});

Template.postEdit.events({
	'submit form': function(e){
		e.preventDefault();

		var currentPostId = Session.get('currentPostId');

		var postProperties = {

			url: $(e.target).find('[name=url]').val(),
			title: $(e.target).find('[name=title]').val()

		}


		Posts.update ( currentPostId, {$set: postProperties}, function (error){
			if(error){
				alert(error.reason);
			}
			else{
				Meteor.Router.to('postPage', currentPostId);
			}
		});	
		}																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																,
		'click .delete': function(e) { e.preventDefault();
			if (confirm("Delete this post?")) {
				var currentPostId = Session.get('currentPostId'); 
				Posts.remove(currentPostId); 
				Meteor.Router.to('postsList');
		}
	}
});