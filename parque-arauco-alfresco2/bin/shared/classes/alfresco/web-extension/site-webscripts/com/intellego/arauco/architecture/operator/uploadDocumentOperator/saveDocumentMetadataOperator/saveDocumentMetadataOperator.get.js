var uuid= args.uuid ? args.uuid : null;
var stage= args.stage ? args.stage : null;
var documentType= args.documentType ? args.documentType : null;
var nodeType= args.nodeType ? args.nodeType : null;
var sucNumber= args.sucNumber ? args.sucNumber : null;
var idProject= args.idProject ? args.idProject : null;
var storeName= args.storeName ? args.storeName : null;
var mall= args.mall ? args.mall : null;
var mallID= args.mallID ? args.mallID : null;
var country= args.country ? args.country : null;
var countryID= args.countryID ? args.countryID : null;
var mallIDSAP= args.mallIDSAP ? args.mallIDSAP : null;
var mallType= args.mallType ? args.mallType : null;
var docTypeName= args.docTypeName ? args.docTypeName : null;

if(uuid!=null){
	var url = "/arauco/saveDocOperator";

	var params = new Array();
	params["stage"] = stage;
	params["uuid"] = uuid;
	params["documentType"] = documentType;
	params["nodeType"] = nodeType;
	params["sucNumber"] = sucNumber;
	params["idProject"] = idProject;
	params["storeName"] = storeName;
	params["mall"] = mall;
	params["mallID"] = mallID;
	params["country"] = country;
	params["countryID"] = countryID;
	params["mallIDSAP"] = mallIDSAP;
	params["mallType"] = mallType;
	params["docTypeName"] = docTypeName;
	
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

//	logger.log("data: "+data);
	
	var result = eval('(' + data + ')');
//	logger.log("result group 	" + data);
	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}

