var nodeId= args.id ? args.id : null;
var nodeType= args.nodeType ? args.nodeType : null;
var documentalRol= args.documentalRol ? args.documentalRol : null;

if(people.isAdmin(person)){
	model.result="true";
}else{
	if(nodeId!=null && nodeType!=null || funcionality!=null){
		var response = SecurityService.checkDocumentalRol(parseInt(nodeId), parseInt(nodeType), documentalRol);
		if(response){
			model.result="true";
		}else{
			model.result="false";
		}
	}else{
		model.result="false";
	}
}









