var url = (args.url == null || args.url == undefined || args.url == '') ? null : args.url;
var type = (args.type == null || args.type == undefined || args.type == '') ? 'post' : args.type;
var dataType = (args.dataType == null || args.dataType == undefined || args.dataType == '') ? 'json' : args.type;
var params = new Array();
var connector;
var data;

if(url !== null && url !== undefined && url !== ''){
	
	connector = remote.connect("alfresco");
	
	if(type.toLowerCase() === 'get'){
		url += '?';
		for (arg in args) {
			url +=  arg + '=' + args[arg] + '&';
		}
		
		url = url.substring(0, url.length -1);
		data = connector.get(url);
		
	}else{
		for (arg in args) {
			params[arg] = (args[arg] == '' || args[arg] == undefined || args[arg] == null) ? null : args[arg];
		}
//		logger.log('jsonUtils.toJSONString(params): '+jsonUtils.toJSONString(params))// borrar
		data = connector.post(url,jsonUtils.toJSONString(params), dataType === 'json' ? 'application/json' : 'text/html');
	}

	model.resultSet = data;
}else{
	model.resultSet = null;
}