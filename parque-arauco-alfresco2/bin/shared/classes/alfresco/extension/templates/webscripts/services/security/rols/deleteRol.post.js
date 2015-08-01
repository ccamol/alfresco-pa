<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var id= bodyContent.id ? bodyContent.id : null;

var rol = RolService.getById(id);

model.response = RolService.remove(rol.result);






