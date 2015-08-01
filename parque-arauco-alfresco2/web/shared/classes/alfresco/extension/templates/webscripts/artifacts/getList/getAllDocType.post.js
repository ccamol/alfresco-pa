<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var query = 'TYPE:"paList:documentType" AND @paList\\:available:true' ;
var nodes = search.luceneSearch(query);

if(nodes.length>0){
	model.resultset = nodes;	
}
model.prefixList = "paList";