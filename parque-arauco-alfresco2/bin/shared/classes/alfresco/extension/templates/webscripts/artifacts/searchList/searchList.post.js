var listName = args.listName;
var query = args.query;
var base = 'TYPE:"paList:{$ListName}"';
var luceneQuery  = null;
if(query != null && query != undefined && query != ""){
	luceneQuery = base.replace('{$ListName}' ,listName) + query ; 
}else{
	luceneQuery = base.replace('{$ListName}' ,listName); 
}

//logger.log("luceneQuery: " + luceneQuery);

model.resultSet = search.luceneSearch(luceneQuery);