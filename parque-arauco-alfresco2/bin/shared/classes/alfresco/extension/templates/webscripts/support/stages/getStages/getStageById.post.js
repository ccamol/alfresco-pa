<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');

var idStage= bodyContent.idStage ? bodyContent.idStage : null;

var responseStages = ProjectStagesSrv.getById(idStage);

model.response = responseStages;



