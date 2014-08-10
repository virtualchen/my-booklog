exports.readAll = function(req, res){
  	var model = req.app.db.models.Post;
	var query = req.query;

	model
	.find()
	.populate('uid')
	.exec(function(err, posts){
		res.send(posts);
		res.end();
	});
};


exports.readAllUser = function(req, res){
  	var model = req.app.db.models.User;
	var query = req.query;

	model
	.find()
	.exec(function(err, posts){
		res.send(posts);
		res.end();
	});
};

exports.readByAge = function(req, res){
  	var model = req.app.db.models.User;
	
	model
	.aggregate([
		{ $project : { Age: 1, Phone: 1 }	},
		{ $match : { $or: [{'Age': 30},{'Age': 50}] } },
		{ $group : { _id: '$Age', total: { $sum: 1} } }		
		])
	.exec(function(err, posts){
		res.send(posts);
		res.end();
	});
};



exports.createOne = function(req, res){
  /*var post = req.query;
  response.post.push(post);
  res.send({status: 'ok'});
  */
  var model = req.app.db.models.Post;
  var query = req.query;
  var post;
  post = {
  	uid:query.uid,
  	title: query.title,
  	content: query.content
  };
  console.log(post);
  var postDocument = new model(post);
  console.log(postDocument);
  postDocument.save();

 res.send({status: 'ok'});

};


exports.readAllUsers = function(req, res){
	//print('in all user');
	var model = req.app.db.models.User;
	var query = req.query;
	var filter = {};

	console.log(query);

	if(typeof(query.age) !== 'undefined'){
	filter['Age'] = query.age;
	}

	if(typeof(query.addr) !== 'undefined'){
		filter['Address'] = new RegExp(query.addr);
	}
	if(typeof(query.interests) !== 'undefined'){
		filter['Interests'] = { $in:['sport']};
	}


	console.log(filter);



	model
	.find(filter)
	.sort('Name')
	.select('Name Email Address Phone')
	.exec(function(err, users){

		users.forEach(function(user){
			user.Email = model.trunkEmail(user.Email);
		});

		res.send(users);
		res.end();
	});
};

exports.readAllUsersByMapReduce = function(req, res){
	//print('in all user');
	var model = req.app.db.models.User;
	model.aggregate([
	{ $project: { id: 1, Name:1,  Email:1, Address: 1, Age:1, postId:1 }},
	{ $group: { _id: '$Age'
			, total: { $sum:1 }
			, Name : { $last:'$Name'}
			, Email : { $last: '$Email'}
			, PostId : { $last: '$_id'}
		}}
	])
	.exec(function(err, users){
		res.send(users);
		res.end();
	});
	
};


exports.readUserById = function(req, res){
	//print('in all user');
	var model = req.app.db.models.User;
	var userId = req.params.id;



	model
	.find({ _id: userId})
	.exec(function(err, user){
		res.send(user);
		res.end();
	});
};
