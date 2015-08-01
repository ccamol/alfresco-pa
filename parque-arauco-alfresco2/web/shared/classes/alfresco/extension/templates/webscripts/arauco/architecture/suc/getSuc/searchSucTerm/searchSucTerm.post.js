<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">
var bodyContent = eval('(' + requestbody.content + ')');
var txTermsSuc= bodyContent.txTermsSuc ? bodyContent.txTermsSuc : null;
//logger.log("Terminos de Busqueda:"+txTermsSuc );
var termsName = new Terms();
var sucFilter = new SucFilter();


if (txTermsSuc != null) {
	var filters = txTermsSuc.split(" ");

	for(i=0;i<filters.length;i++){
		termsName.add(filters[i]);
	}
	sucFilter.name.containsMultiple(termsName);






var content =  SucSrv.getListByFilter(sucFilter);
//logger.log("El estatus es: "+content.status );
if(content.status == 1){
//	logger.log("////////  CTL-2 Result ///////")
	model.resultSet = content;
}else{
//	logger.log("////////   CTL-1  ///////")
//	logger.log("ERROR:"+ content.message); 
	model.resultSet = SucSrv.getAll();
}

	
	
	
}else{
	logger.log("////////  No hay terminos de busqueda ingresados  ///////")
	model.resultSet = SucSrv.getAll();
	
	
}


