var label = args.label;
var uuid = args.uuid;

var query = "@sys\\:node-uuid:"+uuid;
resultSet = search.luceneSearch(query);

var result= new Array();
var resultVersion= new Array();
var i=0;

for ( var assocNode in resultSet[0].assocs["pa:downlaodAssoc"]) {
	result[i]=resultSet[0].assocs["pa:downlaodAssoc"][assocNode];
	i=i+1;
}

i=0;
var theVersion = null;
for(j=0;j<result.length;j++){
	theVersion = result[j].getVersion(label);
	if((theVersion==null || theVersion==undefined) && label=="1.0"){
		resultVersion[j]=new Array();
		resultVersion[j]['node']=result[j];
	}else{
		resultVersion[j]=theVersion;
	}
}


model.resultVersion=resultVersion;
