<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var filter= bodyContent.filter ? bodyContent.filter : null;
//logger.log("filter: "+filter)

model.response = SucProjectSrv.getById(filter);





