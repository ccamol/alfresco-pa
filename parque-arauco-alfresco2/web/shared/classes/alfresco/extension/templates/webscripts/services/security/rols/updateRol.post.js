<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var id= bodyContent.id ? bodyContent.id : null;
var name= bodyContent.name ? bodyContent.name : null;
var description= bodyContent.description ? bodyContent.description : null;
var documentalRol= bodyContent.documentalRol ? bodyContent.documentalRol : null;

var rol = new Rol();
if(id!=null) rol.id=id;
rol.name=name;
rol.description=description;
rol.documentalRol=documentalRol;

model.response = RolService.addOrUpdate(rol);






