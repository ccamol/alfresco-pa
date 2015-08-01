<import resource="classpath:alfresco/extension/objectModel.js">

var bodyContent = eval('(' + requestbody.content + ')');

var uuid = bodyContent.uuid ? bodyContent.uuid : null;

var parents= null;
var classification= null;

   classification = ClassificationService.getByUuid(uuid);
   if(classification.status>-1){
	   
	   parents = ClassificationService.parent(classification.result, true);
	   
	   model.resultSet=parents.result;
	   
	   model.status = 1;
	   model.message = "operacion exitosa";
   }else{
	   model.status= -1;
	   model.message= "operacion fallida";
   }
	   
   
  