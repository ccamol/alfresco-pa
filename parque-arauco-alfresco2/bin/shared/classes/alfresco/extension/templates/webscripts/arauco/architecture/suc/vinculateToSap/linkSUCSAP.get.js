<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var virtualSUC= args.virtualSUC ? args.virtualSUC : null;
var realSUC= args.realSUC ? args.realSUC : null;

//logger.log("CLT A:");
if(virtualSUC!=null && realSUC!=null){
//	logger.log("CLT B:");
	var sucSource = SucSrv.getById(virtualSUC);
	if(sucSource.status>-1){
//		logger.log("CLT C:");
		var filter = new SucFilter();
		filter.sucCode.exact(realSUC, 0);
		
		var sucList = SucSrv.getListByFilter(filter);
		if(sucList.status>-1){
//			logger.log("CLT D:");
			var sucTarget = sucList.result.get(0);
			var response = SAPService.vinculate(sucSource.result, sucTarget);
			if(response.status>-1){
//				logger.log("CLT E:");
				model.status="1";
				model.message=response.message;
			}else{
//				logger.log("CLT F:");
				model.status="-1";
				model.message="Error al vincular documentos";
			}
		}else{
//			logger.log("CLT G:");
			model.status="-1";
			model.message="No se encuentra SUC real";
		}
	}else{
//		logger.log("CLT H:");
		model.status="-1";
		model.message="No se encuentra SUC virtual";
	}
}else{
//	logger.log("CLT I:");
	model.status="-1";
	model.message="Número de parámetos incorrecto";
}






