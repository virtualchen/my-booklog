{
	var db = connect('localhost/booklog');
	db.users.find({"Address" : {$regex : ".*Nullam.*"}})
	.forEach(function(user){
		print(JSON.stringify(user));
	
	});
	print('0003 done');
}