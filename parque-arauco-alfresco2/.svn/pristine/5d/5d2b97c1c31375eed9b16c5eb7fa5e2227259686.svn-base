<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var aclId= bodyContent.aclId ? bodyContent.aclId : null;

if(aclId!=null){
	var acl = AclService.getById(aclId);
	
	var response = AclService.remove(acl.result);

	model.status=response.status;
	model.message=response.message;
}else{
	model.status="-1";
	model.message="No se pudo realizar la operación porque faltan campos requeridos";
	
}

