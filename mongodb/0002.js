{
	var db = connect('localhost/booklog');
	db.users.save(
		[
		  {
		    "Name":"Fred",
		    "Phone":"123-456-7890",
		    "Email":"fred@lulala.com",
		    "Address": "taipei",
		    "Age":50
		  },
		  {
		    "Name":"Hank",
		    "Phone":"1532-456-7890",
		    "Email":"hank@lulala.com",
		    "Address": "taipei",
		    "Age":50
		  },
		  {
		    "Name":"jollen",
		    "Phone":"123-456-7890",
		    "Email":"jollen@lulala.com",
		    "Address": "taipei",
		    "Age":50
		  }
		]
	);
	print('0002,done');
}
