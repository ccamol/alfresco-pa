var id= args.id ? args.id : null;
var nameProject= args.nameProject ? args.nameProject : null;
var year= args.year ? args.year : null;
var status= args.status ? args.status : null;
var from= args.from ? args.from : null;
var to= args.to ? args.to : null;

if(id!=null || year!=null || status!=null|| from !=null || to!=null  ){
	var url = "/arauco/searchProjectThird";

	var params = new Array();
	params["id"] = id;
	params["nameProject"] = nameProject;
	params["year"] = year;
	params["status"] = status;
	params["from"] = from;
	params["to"] = to;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');
 //   logger.log("Json: "+data );
	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}