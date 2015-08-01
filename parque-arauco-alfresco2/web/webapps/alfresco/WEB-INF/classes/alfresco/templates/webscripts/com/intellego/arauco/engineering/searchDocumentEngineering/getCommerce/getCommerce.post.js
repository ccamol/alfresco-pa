<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
//var filterOne = args.filterOne ? args.filterOne : null;
//var filterTwo = args.filterTwo ? args.filterTwo : null;



var bodyContent = eval('(' + requestbody.content + ')');

var filterOne= bodyContent.filterOne ? bodyContent.filterOne : null;
var filterTwo= bodyContent.filterTwo ? bodyContent.filterTwo : null;

logger.log("la variable uno ============= : "+filterOne);
logger.log("la variable dos ============= : "+filterTwo);
var mallFilter = new MallFilter();
var EQUALS_TO = 0;
if(filterOne!=null){

	mallFilter.country.exact(filterOne, EQUALS_TO);
}
if(filterTwo !=null){
	mallFilter.mallType.exact(filterTwo, EQUALS_TO);
}


if(filterOne!=null || filterTwo !=null){
	model.resultSet = MallSrv.getListByFilter(mallFilter);
	
}else{
	
	model.resultSet = MallSrv.getAll();
}







logger.log("==================funko====================" );
logger.log("Resulset is: " + MallSrv.getListByFilter(mallFilter));
