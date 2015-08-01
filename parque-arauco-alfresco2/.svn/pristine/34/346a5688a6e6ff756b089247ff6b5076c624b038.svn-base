<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var codeSAP= args.codeSAP ? args.codeSAP : null;
var sucSAP= args.sucSAP ? args.sucSAP : null;

//logger.log("CTL 1: " + codeSAP  + " - " + sucSAP);
if(codeSAP!=null){
//	logger.log("CTL 2");
	if(sucSAP!=null && sucSAP!=undefined && sucSAP!='' && sucSAP!='null'){
//		logger.log("CTL 3");
		var filter = new SucFilter();
		
		filter.sucCode.exact(sucSAP, 0);
		
		var suc = SucSrv.getListByFilter(filter);
		
//		logger.log("CTL 3A: " + suc.status);
		if(suc.status>-1){
			model.nodeType=3;
			model.nodeId=suc.result.get(0).id;
//			logger.log("CTL 4: " + suc.result.get(0).id);
		}
	}else{
//		logger.log("CTL 5");
		var filter = new MallFilter();
		
		filter.idMallSap.exact(codeSAP, 0);
		
		var mall = MallSrv.getListByFilter(filter);
		
//		logger.log("CTL 6: " + mall.status);
		if(mall.status>-1){
//			logger.log("CTL 6A: " + mall.result.size());
//			logger.log("CTL 7: " + mall.result.get(0).id);
			model.nodeType=1;
			model.nodeId=mall.result.get(0).id;
		}
	}
	
}
