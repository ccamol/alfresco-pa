<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var sucId = (args.sucId !='' || args.sucId !=undefined || args.sucId !=null )? args.sucId : null;

if(sucId != null)
{
	var suc = SucSrv.getById(sucId);
	var response = SucSrv.remove(suc);
//	logger.log("Respuesta = " + response);
}else{
//	logger.log("El valor de Suc no puede ser nulo);
}