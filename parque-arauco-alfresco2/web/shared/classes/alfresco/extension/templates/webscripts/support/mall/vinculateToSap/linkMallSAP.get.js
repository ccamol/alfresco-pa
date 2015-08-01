<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var virtualMall= args.virtualMall ? args.virtualMall : null;
var realMall= args.realMall ? args.realMall : null;
var objectsRelated = false;

if(virtualMall!=null && realMall!=null){
	var mallSource = MallSrv.getById(virtualMall);
	if(mallSource.status>-1){
		var filter = new MallFilter();
		filter.idMallSap.exact(realMall, 0);
		
		var mallList = MallSrv.getListByFilter(filter);
		if(mallList.status>-1){
			mallSource = mallSource.result;
			var mallTarget = mallList.result.get(0);
			
//			logger.log("CTL 1: ");
			var architectureProjectFilter = new ArchitectureProjectFilter();
			architectureProjectFilter.mall.exact(mallTarget.id, 0);
//			logger.log("CTL 2: ");
			var architectureProjectList=ArchitectureProjectSrv.getListByFilter(architectureProjectFilter);
//			logger.log("CTL 3: ");
			if(architectureProjectList.status>-1){
//				logger.log("CTL 4: ");
				if(architectureProjectList.result.size()>0){
//					logger.log("CTL 5: ");
					objectsRelated=true;
				}
			}else{
//				logger.log("CTL 6: ");
				objectsRelated=true;
			}
			
			
//			logger.log("CTL 7: ");
			var engineeringProjectFilter = new EngineeringProjectFiler();
			engineeringProjectFilter.mall.exact(mallTarget.id, 0);
//			logger.log("CTL 8: ");
			var engineeringProjectList=EngineeringProjectSrv.getListByFilter(engineeringProjectFilter);
			if(engineeringProjectList.status>-1){
//				logger.log("CTL 9: ");
				if(engineeringProjectList.result.size()>0){
//					logger.log("CTL 10: ");
					objectsRelated=true;
				}
			}else{
//				logger.log("CTL 12: ");
				objectsRelated=true;
			}
			
			
			if(objectsRelated==false){
//				logger.log("CTL 13: ");
				// Copiar código SAP a nuevo mall
				mallSource.idMallSap = mallTarget.idMallSap;
				mallSource.name = mallTarget.name;
				mallSource.country = mallTarget.country;
				// Cambiar tipo de mall
				mallSource.mallType = mallTarget.mallType;
				// Guardar mall virtual
				var saveResponse = MallSrv.update(mallSource);
				if(saveResponse.status>-1){
					// Asociar SUCs a nuevo mall
					var filter = new SucFilter();
					filter.mall.exact(mallTarget.id, 0);
					var sucList = SucSrv.getListByFilter(filter);
					if(sucList.status>-1){
						var sucUpdate=null;
						for(i=0;i<sucList.result.size();i++){
							sucUpdate = sucList.result.get(i);
							sucUpdate.mall=mallSource;
							SucSrv.update(sucUpdate);
						}
					}
					// Eliminar mall real
					var deleteResponse = MallSrv.remove(mallTarget);
					if(deleteResponse.status>-1){
						model.status="1";
						model.message="Operación realizada con éxito";
					}
				}
			}else{
				model.status="-1";
				model.message="El mall de destino tiene projectos relacionados, no se puede vincular.";
			}
		}else{
			model.status="-1";
			model.message="No se encuentra Mall real";
		}
	}else{
		model.status="-1";
		model.message="No se encuentra Mall virtual";
	}
}else{
	model.status="-1";
	model.message="Número de parámetos incorrecto";
}






