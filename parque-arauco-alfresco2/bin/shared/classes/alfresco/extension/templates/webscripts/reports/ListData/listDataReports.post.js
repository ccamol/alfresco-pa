var bodyContent = eval('(' + requestbody.content + ')');
var type= bodyContent.type ? bodyContent.type : null;
var prefix= bodyContent.prefix ? bodyContent.prefix : null;

if (type!=null && type!=undefined && prefix!=null && prefix!=undefined){ 
	
	var query = 'TYPE:"'+prefix+':'+type+'" AND @'+prefix+'\\:available:true' ;
	var nodes = search.luceneSearch(query);

	if(nodes.length>0){
		model.resultset = nodes;	
	}
}
model.prefixList = prefix;

