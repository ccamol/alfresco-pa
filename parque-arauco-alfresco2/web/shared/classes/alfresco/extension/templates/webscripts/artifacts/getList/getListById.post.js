var type= args.type;
var id = args.id;
var prefix = args.prefix;
var propertyId = args.propertyId;




if (type!=null || type!=undefined) 
{ 
var query = 'TYPE:"'+prefix+':'+type+'" AND @'+prefix+'\\:'+propertyId+':"'+id+'"';
var nodes = search.luceneSearch(query);

	if(nodes.length>0){
		model.resultset = nodes;	
	}else{
		
	}
}
model.prefixList = prefix;