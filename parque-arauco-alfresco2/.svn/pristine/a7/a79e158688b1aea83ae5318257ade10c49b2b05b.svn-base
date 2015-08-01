var classificationId= args.classificationId ? args.classificationId : null;
var newClassification= args.newClassification ? args.newClassification : null;
var uuid= args.uuid ? args.uuid : null;

if(classificationId!=null && newClassification!=null && uuid!=null ){
	var url = "/arauco/pasteFile";
	
	var params = new Array();
	params["classificationId"] = classificationId;
	params["newClassification"]= newClassification;
	params["uuid"]=uuid;
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");
	
	
	model.response = data;
}
