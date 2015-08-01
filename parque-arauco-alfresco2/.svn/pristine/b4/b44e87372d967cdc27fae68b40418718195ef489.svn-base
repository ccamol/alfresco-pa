<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idproject= bodyContent.idproject ? bodyContent.idproject : null;

var thirdPartyProject = ThirdPartyProjectsService.getById(idproject);
ThirdPartyProjectsService.remove(thirdPartyProject.result);

