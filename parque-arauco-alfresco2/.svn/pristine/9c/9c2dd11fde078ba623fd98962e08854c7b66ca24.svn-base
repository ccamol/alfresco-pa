<import resource="classpath:alfresco/extension/objectModel.js">

var nodeType= args.nodeType ? args.nodeType : null;
var nodeId= args.id ? args.id : null;

var filter = new AclFilter();

filter.nodeId.exact(nodeId, EQUALS_TO);
filter.nodeType.exact(nodeType, EQUALS_TO);

var aclList = AclService.getListByFilter(filter);

if(aclList.status>-1){
	model.resultSet=aclList.result;
}else{
	model.resultSet=null;
}

var rolList = RolService.getAll();

if(rolList.status>-1){
	model.rolList=rolList.result;
}else{
	model.rolList=null;
}





