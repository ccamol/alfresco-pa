var type= args.type;

var prefix = args.prefix;

if (type!=null || type!=undefined) 
{ 
var query = 'TYPE:"'+prefix+':'+type+'" AND @'+prefix+'\\:available:true' ;
var nodes = search.luceneSearch(query);

	if(nodes.length>0){
		model.resultset = nodes;	
	}
}
model.prefixList = prefix;