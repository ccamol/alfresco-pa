<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var mallId = (args.mallId !='' || args.mallId !=undefined || args.mallId !=null )? args.mallId : null;

if(mallId != null)
{
	var mall = MallSrv.getById(mallId);
	var response = MallSrv.remove(mall);
//	logger.log("Respuesta = " + response);
}else{
//	logger.log("El valor de Mall no puede ser nulo);
}
