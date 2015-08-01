var filter= args.filter ? args.filter : null;
var sucType= args.sucType ? args.sucType : null;
var sucSearch= args.sucSearch ? args.sucSearch : null;
var statusFilterSuc= args.statusFilterSuc ? args.statusFilterSuc : null;

if(filter!=null){
	var url = "/arauco/getSuc";
	var params = new Array();
	params["filter"] = filter;
	params["sucType"] = sucType;
	params["sucSearch"] = sucSearch;
	params["statusFilterSuc"] = statusFilterSuc;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];
}else{
	model.resultSet = null;
}

connector = remote.connect("alfresco");
model.remote = connector;