
{
	var db = connect('localhost/booklog');
	db.users.mapReduce(
		function(){
			emit(this.Age, 30);
		}, 
		function(key, values){
			return values.length;
		},
		{
			query:{ $or: [{'Age': 30},{'Age': 50}] },
			out:'userTotals'
		}
	);
}