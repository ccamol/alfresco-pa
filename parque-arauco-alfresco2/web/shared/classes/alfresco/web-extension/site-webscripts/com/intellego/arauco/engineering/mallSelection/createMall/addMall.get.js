var url = "/arauco/addMall";

var name= args.name ? args.name : null;
var country= args.country ? args.country : null;

var params = new Array();
params["name"] = name;
params["country"] = country;


var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");




var result = data;
