<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var countryName = args.countryName;

countryName="Argentina";

var country = new Country();
country.name=countryName;
var response = CountrySrv.add(country);
//logger.log("Respuesta = " + response);