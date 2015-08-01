<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">
var bodyContent = eval('(' + requestbody.content + ')');

var username=person.properties.userName;
var nameGroupDisplay=[];
var groupList=[];
var sucObjects = [];
var sucIDS = [];
var groupId=null;
var groupName = null;
var resultSetProjectSuc = null;
var operatorFilter = null;
var sucProjectFilter = null;
var EQUALS_TO = 0;
var hasSiteRole = null;


if(username!=null || username!=undefined || username!=''){
	var person = people.getPerson(username);
	var src_groups=people.getContainerGroups(person);
	if(src_groups.length>0){
		for(var i=0;i<src_groups.length;i++){
			var nodes = null;
			var query = null;
			groupName = src_groups[i].properties["cm:authorityDisplayName"];
			if(groupName!=null && groupName != undefined && groupName != ''){
				query = 'TYPE:"paList:operator" AND @paList\\:operatorType:1 AND @paList\\:description:"'+groupName+'"';
				nodes = search.luceneSearch(query);
				if(nodes.length > 0){
					
					var sitio = siteService.getSite("arquitectura");
					hasSiteRole = sitio.getMembersRole(username);
					if(hasSiteRole == null){
						sitio.setMembership(username, "SiteCollaborator");
					}
					
					
					var idList = nodes[0].properties["paList:id"];
					if(idList != null && idList != ''){
						sucProjectFilter = new SucProjectFilter();
						sucProjectFilter.operator.exact(idList, EQUALS_TO);
						resultSetProjectSuc = SucProjectSrv.getListByFilter(sucProjectFilter).result;
						if(resultSetProjectSuc.size() > 0){
							for(var y=0; y<resultSetProjectSuc.size(); y++){
								sucIDS.push(resultSetProjectSuc.get(y).sucEntity.id);
							}
						}

					}
				}
			}
		}

		var temp = eliminarRepetidos(sucIDS);
		if(temp.length > 0){
			for(var x=0; x<temp.length; x++){
				var sucElement = SucSrv.getById(temp[x]);
				sucObjects.push(sucElement.result);
			}
		}

	}
}


if(sucObjects.length > 0 && sucObjects != null){
	model.resultSet = sucObjects;
}else{
//	model.resultSet = null;
}


function eliminarRepetidos(arreglo){
	var arreglo2 = arreglo;
	for (var m=0; m<arreglo2.length; m++){
		for (var n=0; n<arreglo2.length; n++){
			if(n!=m){
				if(arreglo2[m]==arreglo2[n]){
					//si hay términos iguales los suprime, y evalua el siguiente que ahora es el mismo término
					arreglo2.splice(n,1);  
					--n;            
				}
			}
		}
	}
	return arreglo2;
}


