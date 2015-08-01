var id= args.id ? args.id : null;
var nameProject= args.nameProject ? args.nameProject : null;
var status= args.status ? args.status : null;
var dateFrom= args.dateFrom ? args.dateFrom : null;
var dateTo= args.dateTo ? args.dateTo : null;

if(id!=null || year!=null || status!=null|| from !=null || to!=null  ){
	var url = "/arauco/searchProject";

	var params = new Array();
	params["id"] = id;
	params["nameProject"] = nameProject;
	params["status"] = status;
	params["dateFrom"] = dateFrom;
	params["dateTo"] = dateTo;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');
 //   logger.log("Json: "+data );
	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}

model.remote = connector;