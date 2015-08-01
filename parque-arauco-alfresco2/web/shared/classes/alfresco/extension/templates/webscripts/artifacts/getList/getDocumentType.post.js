var type= args.type;
var id = args.id;
var bussinesPrefix = args.prefix;


if (type!=null || type!=undefined) 
{ 
	var query = 'TYPE:"' + bussinesPrefix + ':' + type +'" AND @' + bussinesPrefix + '\\:id:"'+id+'"';

	//
	var nodes = search.luceneSearch(query);
	var arrayDocuemnt = new Array;
	if(nodes.length>0){
		var idDocument=nodes[0].properties[bussinesPrefix + ":documentType"];

		var documentList="";

		if(bussinesPrefix=="paList")
		{
			documentList="documentType";
		}

		if(idDocument.length>0){
			var documents = idDocument.toString().split(",");
			for(var i =0;i<documents.length;i++){
				if(documents.length > 0)
				{
//					logger.log("idDoc: "+documents[i]);
					if(i==0){
						query='TYPE:"' + bussinesPrefix + ':'+documentList+'" AND (@' + bussinesPrefix+ '\\:id:"'+documents[i]+'"';

					}else{
						query=query+' OR @' + bussinesPrefix + '\\:id:"'+documents[i]+'"';
						if(i==documents.length-1){

						}
					}
				}
			}
			query=query+')';
//			logger.log(query);
			nodes = search.luceneSearch(query);
			model.resultset=nodes;
		}
	}else{
		model.resultset=0;
	}
}
model.prefixList = bussinesPrefix;