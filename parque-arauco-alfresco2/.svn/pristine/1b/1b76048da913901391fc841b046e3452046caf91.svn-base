var id= args.id ? args.id : null;
var name= args.name ? args.name : null;
var description= args.description ? args.description : null;
var documentalRol= args.documentalRol ? args.documentalRol : null;


if(name!=null && documentalRol!=null){
	var url = "/arauco/updateRol";
	
	var params = new Array();
	if(id!=null) params["id"] = id;
	params["name"] = name;
	params["description"] = description;
	params["documentalRol"] = documentalRol;
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");
	
	var result = eval('(' + data + ')');
	model.response = result['response'];
}else{
	var response = new Array();
	response[0] = new Array();
	response[0]['status']=-1;
	response[0]['message']='Número de parámetros incorrectos para esta operación';
	model.response= response;
}