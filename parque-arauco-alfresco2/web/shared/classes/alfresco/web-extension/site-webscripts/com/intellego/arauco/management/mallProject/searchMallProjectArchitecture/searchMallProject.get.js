var filter= args.filter ? args.filter : null;
var nameProject= args.nameProject ? args.nameProject : null;
var statusProject= args.statusProject ? args.statusProject : null;
var dateFrom= args.dateFrom ? args.dateFrom : null;
var dateTo= args.dateTo ? args.dateTo : null;

if(filter!=null){
	var url = "/arauco/searchProjectArchitecture";
	var params = new Array();
	params["filter"] = filter;
	params["nameProject"] = nameProject;
	params["statusProject"] = statusProject;
	params["dateFrom"] = dateFrom;
	params["dateTo"] = dateTo;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}

connector = remote.connect("alfresco");
model.remote = connector;