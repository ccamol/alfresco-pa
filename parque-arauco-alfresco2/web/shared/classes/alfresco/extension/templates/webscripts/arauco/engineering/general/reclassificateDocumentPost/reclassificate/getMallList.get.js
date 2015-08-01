<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var mallList = new Array();

var mallResponse = MallSrv.getAll();

if(mallResponse.status>-1){
	mallList = mallResponse.result;
}

model.resultSet = mallList;
model.status=mallResponse.status;
model.message=mallResponse.message;
