var name= args.name ? args.name : null;
var site= args.site ? args.site : null;
logger.log("newQuery recive del ajax:" +name);
logger.log("site recive del ajax:" +site);
if(site!=null){
	var url = "/arauco/newQuery";

	var params = new Array();
	params["name"] = name;
	params["site"] = site;
	logger.log("ctrl-0001");

	var connector = remote.connect("alfresco");
	var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

	model.response = data;
}