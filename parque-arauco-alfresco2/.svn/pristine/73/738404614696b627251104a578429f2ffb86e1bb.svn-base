var idprojectArc= args.idprojectArc ? args.idprojectArc : null;
var projectName= args.projectName ? args.projectName : null;
var startDate= args.startDate ? args.startDate : null;
var finishDate= args.finishDate ? args.finishDate : null;
var description= args.description ? args.description : null;
var mallId= args.mallId ? args.mallId : null;
var projectTypeId= args.projectTypeId ? args.projectTypeId : null;
var projectStatusId= args.projectStatusId ? args.projectStatusId : null;
var nameManager= args.nameManager ? args.nameManager : null;
var nameCompany= args.nameCompany ? args.nameCompany : null;
var companyAwar= args.companyAwar ? args.companyAwar : null;
var numberOC= args.numberOC ? args.numberOC : null;
var professionalName= args.professionalName ? args.professionalName : null;
var draftsmanName= args.draftsmanName ? args.draftsmanName : null;
//logger.log("########--------- idprojectArc " + idprojectArc + "		----------- ###########");
if(projectName !== null &&  finishDate !== null && mallId !== null && projectTypeId !== null){
	var url = "/arauco/editArchitectureProject";
	var params = new Array();
	params["idprojectArc"] = idprojectArc;
	params["name"] = projectName;
	params["startDate"] = startDate;
	params["finishDate"] = finishDate;
	params["description"] = description;
	params["mallId"] = mallId;
	params["projectTypeId"] = projectTypeId;
	params["projectStatusId"] = projectStatusId;
	params["nameManager"] = nameManager;
	params["nameCompany"] = nameCompany;
	params["companyAwar"] = companyAwar;
	params["numberOC"] = numberOC;
	params["professionalName"] = professionalName;
	params["draftsmanName"] = draftsmanName;
	
	var connector = remote.connect("alfresco");
	var data = connector.post(url,jsonUtils.toJSONString(params),"application/json");
//	logger.log("data: "+data);
	var result = eval('(' + data + ')');

	model.resultSet = result;
}else{
	model.resultSet = null;
}