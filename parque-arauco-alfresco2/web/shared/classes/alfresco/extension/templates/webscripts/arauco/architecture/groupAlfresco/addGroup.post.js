<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var group= bodyContent.group ? bodyContent.group : null;
var idproject= bodyContent.idproject ? bodyContent.idproject : null;
var groupValidate = null;
var thirdPartyProject = new ThirdPartyProject();
thirdPartyProject.architectureProjectEntity = idproject;
thirdPartyProject.fullNameGroup = group;
groupValidate = people.getGroup(group);
thirdPartyProject.thirdPartyName = groupValidate.properties["cm:authorityDisplayName"];

ThirdPartyProjectsService.add(thirdPartyProject);