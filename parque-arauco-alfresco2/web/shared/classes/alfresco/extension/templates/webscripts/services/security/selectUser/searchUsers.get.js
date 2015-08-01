var filter= args.filter ? args.filter : null;

if(filter==undefined || filter=='' || filter=="null"){
	filter=null;
}

query='TYPE:"cm:person"';

if(filter!=null){
	query += ' AND ALL:(' + filter + ')';
}

var resultSet= search.luceneSearch(query);

model.resultSet=resultSet;








