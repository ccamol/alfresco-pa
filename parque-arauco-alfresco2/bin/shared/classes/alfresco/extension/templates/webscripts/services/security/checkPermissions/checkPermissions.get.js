var nodeId= args.id ? args.id : null;
var nodeType= args.nodeType ? args.nodeType : null;
var funcionality= args.funcionality ? args.funcionality : null;

if(people.isAdmin(person)){
	model.result="true";
}else{
	if(nodeId!=null && nodeType!=null || funcionality!=null){
		var response = SecurityService.checkSecurity(parseInt(nodeId), parseInt(nodeType), parseInt(funcionality));
		if(response){
			model.result="true";
		}else{
			model.result="false";
		}
	}else{
		model.result="false";
	}
}









