<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var mallTypeName = args.mallTypeName;

var mallTypeName = (args.mallTypeName !='' || args.mallTypeName !=undefined || args.mallTypeName !=null )? args.mallTypeName : null;

if(mallTypeName != null)
{
	var mallType = new MallType();
	mallType.name=mallTypeName;
	var response = MallTypeSrv.add(mallType);
//	logger.log("Respuesta = " + response);
}