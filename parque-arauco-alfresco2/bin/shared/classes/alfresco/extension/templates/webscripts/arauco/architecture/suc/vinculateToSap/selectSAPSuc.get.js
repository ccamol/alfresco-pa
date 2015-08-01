<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var mall= args.mall ? args.mall : null;
//logger.log("MALL: " + mall)

var filter = new SucFilter();
filter.sucType.exact(0, 0);
filter.mall.exact(parseInt(mall), 0);

var sucList = SucSrv.getListByFilter(filter);

if(sucList.status>-1){
	model.resultSet=sucList.result;
	model.status="1";
	model.message="Operación realizada con éxito";
}else{
	model.resultSet=new Array();
	model.status="-1";
	model.message="No existen sucs";
}






