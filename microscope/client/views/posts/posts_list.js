var postsData = [
	
	// {
	// 	title: 'Introducing Telescope',
	// 	alt: 'Introducing Telescope',
	// 	author: 'Sacha Greif',
	// 	url: 'http://sachagreif.com/introducing-telescope/',
	// 	data_desc: 'The authoritative guide to Telescope'
	// },
	// {
	// 	title: 'Meteor', 
	// 	alt: 'Meteor', 
	// 	author: 'Tom Coleman', 
	// 	url: 'http://meteor.com',
	// 	data_desc: 'The authoritative and opinionated guide to Meteor'

	// }, 
	// {
	// 	title: 'The Meteor Book', 
	// 	alt: 'The Meteor Book', 
	// 	author: 'Tom Coleman',
	// 	url: 'http://themeteorbook.com',
	// 	data_desc: 'The überguide to the hottest hipster hacker framework!'

	// }
];

Template.postsList.helpers({
	posts: function () {
		return Posts.find({}, {sort: {submitted: -1}});
	}
});