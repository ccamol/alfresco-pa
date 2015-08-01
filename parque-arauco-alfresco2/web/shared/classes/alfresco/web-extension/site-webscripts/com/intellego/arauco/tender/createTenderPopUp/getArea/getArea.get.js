var ALF_WEBSCRIPT_URL = "/arauco/getArea";
var connector = remote.connect("alfresco");
var idArea= args.idArea ? args.idArea : null;
//logger.log("AREA################################################: "+idArea);
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(""), "application/json");
//logger.log(data);
var result = eval('(' + data + ')');
if(idArea !== null && idArea !== undefined && idArea !== ''){
	 model.area = idArea;
}
model.resultSet = result["resultSet"];
//model.resultSet = result["resultSet"];