<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
<import resource="classpath:alfresco/extension/objectModel.js">
var bodyContent = eval('(' + requestbody.content + ')');
var idHistory= bodyContent.idHistory ? bodyContent.idHistory : null;

//logger.log("logger POST " + idHistory);
var getSuc = SucSrv.getById(idHistory).result;
//logger.log(getSuc.length + "  ------- LENGTH");
//logger.log("--------  >>>>> sucType  " + getSuc.sucType);
//logger.log("--------  >>>>> status  " + getSuc.status);
//logger.log("--------  >>>>> name  " + getSuc.name);
//logger.log("--------  >>>>> sucCode  " + getSuc.sucCode);
var suc = new Suc();
if(getSuc.sucType==2){
	suc.id = idHistory ;
	suc.sucType = 1;
	
	suc.name = getSuc.name;
	suc.sucCode = getSuc.sucCode;
	suc.storeM2 = getSuc.storeM2; 
	suc.wareHouseM2 = getSuc.wareHouseM2;
	suc.terraseM2 = getSuc.terraseM2;
	suc.escaparateM = getSuc.escaparateM;
	suc.status = getSuc.status;
	suc.description = getSuc.description;
	suc.contractDate = getSuc.contractDate; 
	suc.historySend = getSuc.historySend;
	suc.financialCompany = getSuc.financialCompany;
	suc.mall = getSuc.mall;
	
	var resultSet = SucSrv.addOrUpdate(suc);
}

