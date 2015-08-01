<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var countryId = (args.countryId !='' || args.countryId !=undefined || args.countryId !=null )? args.countryId : null;

if(countryId != null)
{
	var country = CountrySrv.getById(countryId);
	var response = CountrySrv.remove(country);
//	logger.log("Respuesta = " + response);
}else{
//	logger.log("El valor de Pais no puede ser nulo);
}

//var countryId = args.countryId;
//countryId="2";
//var country = CountrySrv.getById(countryId);
//var response = CountrySrv.remove(country);
//logger.log("Respuesta = " + response);