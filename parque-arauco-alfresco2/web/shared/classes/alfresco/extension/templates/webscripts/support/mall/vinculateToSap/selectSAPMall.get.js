<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var filter = new MallFilter();
filter.mallType.exact(1, 0);

var mallList = MallSrv.getListByFilter(filter);

if(mallList.status>-1){
	model.resultSet=mallList.result;
	model.status="1";
	model.message="Operación realizada con éxito";
}else{
	model.resultSet=new Array();
	model.status="-1";
	model.message="No existen malls";
}






