<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">


var bodyContent = eval('(' + requestbody.content + ')');

var sucCode = bodyContent.sucCode ? bodyContent.sucCode : null;
var idMallSap = bodyContent.idMallSap ? bodyContent.idMallSap : null;
var storeM2 = bodyContent.storeM2 ? bodyContent.storeM2 : null;
var terraseM2 = bodyContent.terraseM2 ? bodyContent.terraseM2 : null;
var warehousem2 = bodyContent.warehousem2 ? bodyContent.warehousem2 : null;
var escaparatem = bodyContent.escaparatem ? bodyContent.escaparatem : null;
var description = bodyContent.sucCode ? bodyContent.description : null;
var sucType = bodyContent.sucType ? bodyContent.sucType : null;
var sucStatus = bodyContent.sucStatus ? bodyContent.sucStatus : null;
var mallId = bodyContent.mallId ? bodyContent.mallId : null;
var idEdit = bodyContent.idEdit ? bodyContent.idEdit : null;
//logger.log("########################################### id: "+idEdit);
if(idEdit == null){
	if(mallId != null){
		var mall = MallSrv.getById(mallId);
		if(mall != null){
			var suc = new Suc();
			suc.sucCode=sucCode;
			suc.storeM2=storeM2;
			suc.wareHouseM2=warehousem2;
			suc.terraseM2=terraseM2;
			suc.escaparateM=escaparatem;
			suc.description=description;
			suc.sucType=sucType;
			suc.status = sucStatus;
			suc.mall=mall.result;
			var resultSet = SucSrv.addOrUpdate(suc);
			model.resultSet = resultSet;
//			logger.log("message: "+resultSet.message);
		}
	}else{
		model.resultSet = null;
	}
}else{
	if(mallId != null){
		var mall = MallSrv.getById(mallId);
		if(mall != null){
			var now = new Date();
			var day = now.getDate();
			var month = now.getMonth()+1;
			var year = now.getFullYear();
			var date = day+"/"+month+"/"+ year;
			var getSuc = SucSrv.getById(idEdit).result.sucType;
			var suc = new Suc();
			suc.id = idEdit;
			suc.sucCode=sucCode;
			suc.storeM2=storeM2;
			suc.wareHouseM2=warehousem2;
			suc.terraseM2=terraseM2;
			suc.escaparateM=escaparatem;
			suc.description=description;
//			logger.log(sucType + "				suuuuuuuuuuuuuuuuuuuuuuc typeeeeeeeeee");
			suc.sucType=sucType;
			if(getSuc!=0){
				suc.historySend=formatDate(date);
			}
			suc.status = sucStatus;
			suc.mall=mall.result;
			var resultSet = SucSrv.addOrUpdate(suc);
			model.resultSet = resultSet;
//			logger.log("message: "+resultSet.message);
		}
	}else{
		model.resultSet = null;
	}
}

function formatDate(text){
	var dateValues = text.split("/");
	return new Date(dateValues[2],dateValues[1]-1,dateValues[0], 16,5,4,567);
}
