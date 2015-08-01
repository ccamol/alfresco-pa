var sapid= args.sapid ? args.sapid : null;
var sucCode = args.sucSAP ? args.sucSAP : null;


if(sapid!=null && sapid!=null && sapid!=null){
	var url = "/arauco/entryPointSAP.json?codeSAP=" + sapid + "&sucSAP=" + sucCode;
	
	var connector = remote.connect("alfresco");
	var data = connector.call(url);
	model.resultSet = data;
}