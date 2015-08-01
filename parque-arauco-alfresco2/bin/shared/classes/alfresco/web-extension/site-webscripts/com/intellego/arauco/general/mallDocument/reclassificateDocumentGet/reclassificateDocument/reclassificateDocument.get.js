//var connector = remote.connect("alfresco");
//var uuid = args.uuid;
//var classification = args.classification;
//var data = connector.get("/arauco/getMallList");
//var result = eval('(' + data + ')');
//model.classification=classification;
//model.uuid = uuid;
//model.resultSet = result["resultSet"];

var params = new Array();
var url = "/arauco/reclassificateDocument";



params["uuid"] = (args.uuid !='' || args.uuid !=undefined || args.uuid !=null )? args.uuid : null;
//logger.log("la uuid es: "+ args.uuid);
//params["nodeType"] = (args.nodeType !='' || args.nodeType !=undefined || args.nodeType !=null )? args.nodeType : null;
params["mall"] = (args.mall !='' || args.mall !=undefined || args.mall !=null )? args.mall : null;
params["mallID"] = (args.mallID !='' || args.mallID !=undefined || args.mallID !=null )? args.mallID : null;
params["country"] = (args.country !='' || args.country !=undefined || args.country !=null )? args.country : null;
params["countryID"] = (args.countryID !='' || args.countryID !=undefined || args.countryID !=null )? args.countryID : null;
params["mallIDSAP"] = (args.mallIDSAP !='' || args.mallIDSAP !=undefined || args.mallIDSAP !=null )? args.mallIDSAP : null;
params["mallType"] = (args.mallType !='' || args.mallType !=undefined || args.mallType !=null )? args.mallType : null;
params["idProject"] = (args.idProject !='' || args.idProject !=undefined || args.idProject !=null )? args.idProject: null;
params["stageID"] = (args.stageID !='' || args.stageID !=undefined || args.stageID !=null )? args.stageID : null;
params["stage"] = (args.stage !='' || args.stage !=undefined || args.stage !=null )? args.stage : null;
params["project"] = (args.project !='' || args.project !=undefined || args.project !=null )? args.project : null;
params["sucNumberID"] = (args.sucNumberID !='' || args.sucNumberID !=undefined || args.sucNumberID !=null )? args.sucNumberID : null;
params["sucNumber"] = (args.sucNumber!='' || args.sucNumber!=undefined || args.sucNumber!=null )? args.sucNumber : null;
var connector = remote.connect("alfresco");
var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");

model.data=data;


