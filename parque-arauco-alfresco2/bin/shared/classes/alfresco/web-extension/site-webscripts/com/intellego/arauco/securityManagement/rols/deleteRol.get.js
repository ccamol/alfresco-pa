var id= args.id ? args.id : null;

if(id!=null){
	var url = "/arauco/deleteRol";
	
	var params = new Array();
	params["id"] = id;
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");
	
	var result = eval('(' + data + ')');
	model.response = result['response'];
}else{
	var response = new Array();
	response[0] = new Array();
	response[0]['status']=-1;
	response[0]['message']='N�mero de par�metros incorrectos para esta operaci�n';
	model.response= response;
}