Template.postItem.helpers({
	domain: function (){
		var a = document.createElement('a');
		a.href = this.url;
		return 'visit ' + a.hostname;
	}
});