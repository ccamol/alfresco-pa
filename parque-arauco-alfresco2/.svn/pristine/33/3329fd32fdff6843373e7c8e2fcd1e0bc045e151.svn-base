var ALF_WEBSCRIPT_URL = "/arauco/addStageTender";

var idTender= args.idTender ? args.idTender : null;

var AInit= args.AInit ? args.AInit : null;
var Afinish= args.Afinish ? args.Afinish : null;
var IDone= args.IDone ? args.IDone : null;
var BInit= args.BInit ? args.BInit : null;
var Bfinish= args.Bfinish ? args.Bfinish : null;
var IDtwo= args.IDtwo ? args.IDtwo : null;
var CInit= args.CInit ? args.CInit : null;
var Cfinish= args.Cfinish ? args.Cfinish : null;
var IDthree= args.IDthree ? args.IDthree : null;
var DInit= args.DInit ? args.DInit : null;
var Dfinish= args.Dfinish ? args.Dfinish : null;
var IDfour= args.IDfour ? args.IDfour : null;
var EInit= args.EInit ? args.EInit : null;
var Efinish= args.Efinish ? args.Efinish : null;
var IDfive= args.IDfive ? args.IDfive : null;
var FInit= args.FInit ? args.FInit : null;
var Ffinish= args.Ffinish ? args.Ffinish : null;
var IDsix= args.IDsix ? args.IDsix : null;
var projectTypeId= args.projectTypeId ? args.projectTypeId : null;


var params = new Array();
params["idTender"] = idTender;
params["AInit"] = AInit;
params["Afinish"] = Afinish;
params["IDone"] = IDone;
params["BInit"] = BInit;
params["Bfinish"] = Bfinish;
params["IDtwo"] = IDtwo;
params["CInit"] = CInit;
params["Cfinish"] = Cfinish;
params["IDthree"] = IDthree;
params["DInit"] = DInit;
params["Dfinish"] = Dfinish;
params["IDfour"] = IDfour;
params["EInit"] = EInit;
params["Efinish"] = Efinish;
params["IDfive"] = IDfive;
params["FInit"] = FInit;
params["Ffinish"] = Ffinish;
params["IDsix"] = IDsix;
params["projectTypeId"] = projectTypeId;

var connector = remote.connect("alfresco");
var data = connector.post(ALF_WEBSCRIPT_URL, jsonUtils.toJSONString(params), "application/json");
//var result = eval('(' + data + ')');
//logger.log("RS: "+result.status);
//model.resultSet = result;

