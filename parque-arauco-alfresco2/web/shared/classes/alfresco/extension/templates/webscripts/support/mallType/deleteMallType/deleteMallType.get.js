<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var mallTypeId = (args.mallTypeId !='' || args.mallTypeId !=undefined || args.mallTypeId !=null )? args.mallTypeId : null;

if(mallTypeId != null)
{
	var mallType = MallTypeSrv.getById(mallTypeId);
	var response = MallTypeSrv.remove(mallType);
//	logger.log("Respuesta = " + response);
}else{
//	logger.log("El valor de Tipo Mall no puede ser nulo);
}