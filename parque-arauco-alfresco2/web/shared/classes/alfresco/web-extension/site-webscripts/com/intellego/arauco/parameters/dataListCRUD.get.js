
var url = "/arauco/administration/dataListCRUD";
var action = args.action ? args.action : null;
var connector = remote.connect("alfresco");
var data;

// LLamada get
if(action == "get" || action == "delete"){
	if(args.length > 0){
		url += "?";
		
		for(i in args){
			url += i + "=" + args[i] + "&";
		}
	}

	// Borra el último &
	url = url.substr(0, url.length - 1);

	data = connector.get(url);
	model.resultSet = data;
}else{
	// LLamada post
	if(action == "update" || action == "add"){
		var params = new Array();

		for (i in args) {
			params[i] = args[i];
		}
			
		data = connector.post(url, jsonUtils.toJSONString(params), "application/json");
		model.resultSet = data
	}
}
