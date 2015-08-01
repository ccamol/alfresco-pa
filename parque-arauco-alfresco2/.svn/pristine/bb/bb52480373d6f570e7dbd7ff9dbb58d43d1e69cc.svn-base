<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

//var bodyContent = eval('(' + requestbody.content + ')');
//var listType = bodyContent.listType ? bodyContent.listType : null;
//var listType = args.listType ? args.listType : null;
//var prefix = args.prefix ? args.prefix : null;

var listType = args.listType ? args.listType : null;
var prefix = 'paList';

var resultSet = DataListService.getDataListByType(prefix, listType);

model.resultSet = resultSet;