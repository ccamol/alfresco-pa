var idStage= args.idStage ? args.idStage : null;
if(idStage!=null){
	var url = "/arauco/getSucProjectStageDocument";
	var params = new Array();
	params["idStage"] = idStage;

	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");
	var result = eval('(' + data + ')');

	model.resultSet = result["resultSet"];

}else{
	model.resultSet = null;
}