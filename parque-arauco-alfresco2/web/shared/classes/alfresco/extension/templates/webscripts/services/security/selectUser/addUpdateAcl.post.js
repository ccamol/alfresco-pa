<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var nodeType= bodyContent.nodeType ? bodyContent.nodeType : null;
var nodeId= bodyContent.nodeId ? bodyContent.nodeId : null;
var aclId= bodyContent.aclId ? bodyContent.aclId : null;
var rolId= bodyContent.rolId ? bodyContent.rolId : null;
var username= bodyContent.username ? bodyContent.username : null;

if(nodeType!=null && nodeId!=null && rolId!=null && username!=null){
	if(aclId!=null){
		var acl = AclService.getById(aclId);
		var rol = RolService.getById(rolId);

		if(acl.status>-1 && rol.status>-1){
			acl.result.nodeType=nodeType;
			acl.result.nodeId=nodeId;
			acl.result.rol=rol.result;
			acl.result.username=username;
			
			var response = AclService.update(acl.result);

			model.status=response.status;
			model.message=response.message;
		}else{
			model.status="-1";
			model.message="No se pudo localizar el registro ACL o en Rol";
		}
	}else{
		var acl = new Acl();
		var rol = RolService.getById(rolId);

		if(rol.status>-1){
			acl.nodeType=nodeType;
			acl.nodeId=nodeId;
			acl.rol=rol.result;
			acl.username=username;
			
			var response = AclService.add(acl);
			
			model.status=response.status;
			model.message=response.message;
		}else{
			model.status="-1";
			model.message="No se pudo localizar el registro Rol";
		}
	}
}else{
	model.status="-1";
	model.message="No se pudo realizar la operación porque faltan campos requeridos";
}

