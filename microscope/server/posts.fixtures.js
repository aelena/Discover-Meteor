console.log(Posts.find().count());
if (Posts.find().count() === 0){

	Posts.insert ({
		title: 'Introducing Telescope',
		alt: 'Introducing Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/',
		data_desc: 'The authoritative guide to Telescope'
	});

	Posts.insert({
		title: 'Introducing Telescope',
		alt: 'Introducing Telescope',
		author: 'Sacha Greif',
		url: 'http://sachagreif.com/introducing-telescope/',
		data_desc: 'The authoritative guide to Telescope'
	});

	Posts.insert({
		title: 'The Meteor Book', 
		alt: 'The Meteor Book', 
		author: 'Tom Coleman',
		url: 'http://themeteorbook.com',
		data_desc: 'The überguide to the hottest hipster hacker framework!'
	});

	Posts.insert({
		title: 'Real time Enterprise', 
		alt: 'Real time Enterprise', 
		author: 'Antonio Elena',
		url: 'http://aelena.com/meteorbook',
		data_desc: 'Enable your enterprise in real time with Meteor and my high consulting fees'
	});

}