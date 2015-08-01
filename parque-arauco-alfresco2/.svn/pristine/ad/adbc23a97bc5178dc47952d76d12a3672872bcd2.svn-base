var filter= args.filter ? args.filter : null;
var idCountry= args.idCountry ? args.idCountry : null;
if(filter!=null){
	var url = "/arauco/mallSelection";
	var params = new Array();
	params["filter"] = filter;
	if(idCountry!==null){
		params["idCountry"] = idCountry;
	}
	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");
	model.data = data;
}else{
	model.data = null;
}


