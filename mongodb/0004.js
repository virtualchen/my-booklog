{
	var db = connect('localhost/booklog');
	db.users.find(
		{ Age:30 }
		).forEach(function(user){
			user['Interests'] = ['sport','travel'];
			db.users.save(user);
	});
	print('0004 is done');
}