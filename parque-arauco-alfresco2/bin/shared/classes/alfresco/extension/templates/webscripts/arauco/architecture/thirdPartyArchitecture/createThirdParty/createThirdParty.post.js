<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">


var bodyContent = eval('(' + requestbody.content + ')');

var operators = bodyContent.operators ? bodyContent.operators : null;
var builderProjectID = bodyContent.builderProjectID ? bodyContent.builderProjectID : null;
var thirdPartyProject = null;
var resultSet  = null;
var operator = new Array();
operator = operators.split(",");
//logger.log("operators: "+operator.length);
var listgroup = null;

for ( var i = 0; i < operator.length; i++) {
	thirdPartyProject = new ThirdPartyProject()
	thirdPartyProject.architectureProjectEntity = builderProjectID;
	thirdPartyProject.thirdPartyName=operator[i];
//	logger.log(operator[i]);
//	listgroup = groups.getGroup(operator[i]);
	var groupName = groups.getGroup(operator[i]);
	thirdPartyProject.fullNameGroup = groupName.fullName;
	resultSet = ThirdPartyProjectsService.addOrUpdate(thirdPartyProject);
}
if(resultSet.status > -1){
	model.resultSet = resultSet;
//	logger.log("message: "+resultSet.message);
}else{
	model.resultSet = null;
}