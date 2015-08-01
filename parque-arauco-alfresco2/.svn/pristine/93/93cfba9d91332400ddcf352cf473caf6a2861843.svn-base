<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

var bodyContent = eval('(' + requestbody.content + ')');
var listType = bodyContent.listType ? bodyContent.listType : null;
var uuid = bodyContent.uuid ? bodyContent.uuid : null;
var action = bodyContent.action ? bodyContent.action : null;

/*
var listType = args.listType ? args.listType : null;
var uuid = args.uuid ? args.uuid : null;
var action = args.action ? args.action : null;
*/

var prefix = 'paList:';

if(action == 'add'){
	/*** ADD */
	if(DataListService.checkClass(listType)){
		var properties = new java.util.HashMap();
		for (i in bodyContent) {
			properties[i] = bodyContent[i];
		}
		DataListService.saveOrUpdate(listType, properties);
		model.status = "1";
		model.description = "ok";
	}else{
		var query = 'PATH:"/app:company_home/st:sites//cm:dataLists//*" AND @dl\\:dataListItemType:"' + prefix + listType + '"';
		var nodes = search.luceneSearch(query);
		
		var list;
		
		if(nodes.length > 0){
			list = nodes[0];
		}else{
			// No se encuentra la lista
			list = companyhome.childByNamePath("Sites/listas/dataLists/");
			list = list.createNode(listType, "dl:dataList");
			list.properties["dl:dataListItemType"] = prefix + listType;
			list.save();
		}
		
		var node = list.createNode(null, prefix + listType);
		
		
		for (i in bodyContent) {
			if(i != 'listType' && i != 'action'){
//				logger.log("Valor de escritura add: " + i);
				node.properties[prefix + i] = bodyContent[i];
			}	
		}

		node.properties[prefix + 'available'] = 'true';
		node.save();
		
		if(listType == 'documentType'){
			listType = 'documentTypeAspectsList';
			query = 'PATH:"/app:company_home/st:sites//cm:dataLists//*" AND @dl\\:dataListItemType:"' + prefix + listType + '"';
			nodes = search.luceneSearch(query);
			
			if(nodes.length > 0){
				list = nodes[0];
			}else{
				// No se encuentra la lista
				list = companyhome.childByNamePath("Sites/arauco/dataLists/");
				list = list.createNode(listType, "dl:dataList");
				list.properties["dl:dataListItemType"] = prefix + listType;
				list.save();
			}
			
			node = list.createNode(null, prefix + listType);
			
			node.properties[prefix + 'available'] = 'true';
			node.properties[prefix + 'id'] = bodyContent.id;
			node.properties[prefix + 'description'] = bodyContent.description;
			node.save();
		}

		model.status = "1";
		model.description = "ok";
	}
	
}else{
	if(action == 'update'){

		if(DataListService.checkClass(listType)){
			var properties = new java.util.HashMap();
			for (i in bodyContent) {
				properties[i] = bodyContent[i];
			}
			DataListService.saveOrUpdate(listType, properties);
			model.status = "1";
			model.description = "ok";
		}else{

			/** UPDATE **/
			if(uuid != null){
				var query = "@sys\\:node-uuid:" + uuid;
				var result = search.luceneSearch(query);
				
				if(result.length > 0){
					
//					logger.log(listType);
					
					if(listType == 'documentTypeAspectsList'){
						
						var properties = DataListService.getProperties(prefix.replace(":", ""), listType);
						
						var configList = bodyContent['config'].split(",");
						var checked = false;
						
						for(var i = 0; i < properties.size(); i++){
							for(var x = 0; x < configList.length; x++){
								if(configList[x] == properties.get(i)){
									checked = true;
								}
							}
							
							result[0].properties[prefix + properties.get(i)] = checked;
							
							checked = false;
						}
						
						result[0].properties[prefix + 'config'] = bodyContent['config'];
						result[0].save();
						
						model.status = "1";
						model.description = "ok";
					}else{
						for (i in bodyContent) {
							if(i != 'uuid' && i != 'listType' && i != 'action'){
//								logger.log("Valor de escritura update: " + i);
								if(i=="documentType"){
									var multiValue = new Array();
									var receiveValues = bodyContent[i].split(",");
									for(var x=0; x<receiveValues.length;x++){
										multiValue[x]=receiveValues[x];
									}
									result[0].properties[prefix + i] =multiValue;
								}else{
									if(listType == 'documentType'){
										var queryAspect = 'TYPE:"paList:documentTypeAspectsList" AND @paList\\:id:' + bodyContent.id;
//										logger.log(queryAspect);
										var resultAspect = search.luceneSearch(queryAspect);
										if(resultAspect.length > 0){
											resultAspect[0].properties[prefix + 'description'] = bodyContent.description;
//											logger.log(bodyContent.id);
//											logger.log(bodyContent.description);
											resultAspect[0].save();
										}
									}
									result[0].properties[prefix + i] = bodyContent[i];
								}
							}
						}
						
						result[0].save();
						
						model.status = "1";
						model.description = "ok";
					}
					
					
				}else{
					model.status = "0";
					model.description = "No se encontro el nodo a actualizar";
				}
			}else{
				model.status = "0";
				model.description = "uuid nulo";
			}
		}
	}
}