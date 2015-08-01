var funcionalityid= args.funcionalityid ? args.funcionalityid : null;
var rolId= args.rolId ? args.rolId : null;
var value= args.value ? args.value : null;

//logger.log("Valores: " + funcionalityid + " " + rolId + " " + value)

if(funcionalityid!=null && rolId!=null && value!=null){
	var url = "/arauco/updateFuncionalityRol";
	
	var params = new Array();
	params["funcionalityid"] = funcionalityid;
	params["rolId"] = rolId;
	params["value"] = value;
	
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