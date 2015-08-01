var url = "/arauco/getMalls";

var params = new Array();
var countryId= args.countryId ? args.countryId : null;
var mallId= args.mallId ? args.mallId : null;

//logger.log("countryId: "+countryId);
params["countryId"] = countryId;
var connector = remote.connect("alfresco");
var data = connector.post(url, jsonUtils.toJSONString(params), "application/json");

//logger.log("dataMAll: "+data);
var result = eval('(' + data + ')');
model.resultSet = result["resultSet"];
model.mall = mallId;