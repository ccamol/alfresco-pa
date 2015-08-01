var sucCode= args.sucCode ? args.sucCode : null;
var idMallSap= args.idMallSap ? args.idMallSap : null;
var storeM2= args.storeM2 ? args.storeM2 : null;
var terraseM2= args.terraseM2 ? args.terraseM2 : null;
var warehousem2= args.warehousem2 ? args.warehousem2 : null;
var escaparatem= args.escaparatem ? args.escaparatem : null;
var description= args.description ? args.description : null;
var sucType= args.sucType ? args.sucType : null;
var sucStatus= args.sucStatus ? args.sucStatus : null;
var mallId= args.mallId ? args.mallId : null;
var idEdit= args.idEdit ? args.idEdit : null;

//logger.log("ridi    ------    "  + idEdit);

	var url = "/arauco/createVirtualSuc";
	var params = new Array();
	params["idEdit"] = idEdit;
	params["sucCode"] = sucCode;
	params["idMallSap"] = idMallSap;
	params["storeM2"] = storeM2;
	params["terraseM2"] = terraseM2;
	params["warehousem2"] = warehousem2;
	params["escaparatem"] = escaparatem;
	params["description"] = description;
	params["sucType"] = sucType;
	params["sucStatus"] = sucStatus;
	params["mallId"] = mallId;

	
	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

	var result = eval('(' + data + ')');

	model.resultSet = result;
