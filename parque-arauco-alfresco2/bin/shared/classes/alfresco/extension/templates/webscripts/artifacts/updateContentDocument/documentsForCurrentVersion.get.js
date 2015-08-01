var uuid = args.uuid;

var query = "@sys\\:node-uuid:"+uuid;
resultSet = search.luceneSearch(query);

var result= new Array();
var resultVersion= new Array();
var i=0;

for ( var assocNode in resultSet[0].assocs["pa:downlaodAssoc"]) {
	result[i]=resultSet[0].assocs["pa:downlaodAssoc"][assocNode];
	resultVersion[i]=new Array();
	resultVersion[i]['node']=result[i];
	i=i+1;
}

model.resultVersion=resultVersion;
