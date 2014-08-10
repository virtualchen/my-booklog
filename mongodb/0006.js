{
	var db = connect('localhost/booklog');
	db.posts.mapReduce(
		function(){
			emit(this.uid, 1);
		}, 
		function(key, values){
			return Array.sum(values);
		},
		{
			//query:{ $or: [{'Age': 30},{'Age': 50}] },
			out:'userPosts'
		}
	);
}