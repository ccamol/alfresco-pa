var ALF_WEBSCRIPT_URL = "/arauco/addCategory";
var name= args.name ? args.name : null;
var description= args.description ? args.description : null;
var categoryType= args.categoryType ? args.categoryType : null;
var result ='{"status": "-2"}';
//logger.log("name: "+ name+ "descripción: "+description+"categoria: "+ categoryType);
if (name != null && description !=null && categoryType!= null) {
	var params = new Array();
	params["name"] = name;
	params["description"] = description;
	params["categoryType"] = categoryType;

	var connector = remote.connect("alfresco");
	var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//	logger.log(data);
	result = eval('(' + data + ')');
}else {
	result = eval('(' + result + ')');
}



model.resultSet = result;