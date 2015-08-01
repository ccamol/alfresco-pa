var typeOperator= args.typeOperator;

if (typeOperator!=null || typeOperator!=undefined){ 
	//1 es Operador
	// 2 es Externo
var query = 'TYPE:"paList:operator" AND @paList\\:operatorType:'+typeOperator + ' AND @paList\\:available:true';
var nodes = search.luceneSearch(query);

	if(nodes.length>0){
		model.resultset = nodes;	
	}
}
