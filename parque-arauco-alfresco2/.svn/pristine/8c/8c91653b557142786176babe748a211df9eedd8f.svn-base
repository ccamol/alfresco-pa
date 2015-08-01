//parametros a enviar por json
var params = new Array();
var url = "/arauco/uploadDocuments";


params["uuid"] = (args.uuid !='' || args.uuid !=undefined || args.uuid !=null )? args.uuid : null;

var connector = remote.connect("alfresco");
var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

var result = eval('(' + data + ')');






