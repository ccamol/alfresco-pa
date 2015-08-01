<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

//var bodyContent = eval('(' + requestbody.content + ')');
//var listType = bodyContent.listType ? bodyContent.listType : null;
var listType = args.listType ? args.listType : null;
var prefix = "paList";

model.resultSet = DataListService.getAspect(prefix, listType);
