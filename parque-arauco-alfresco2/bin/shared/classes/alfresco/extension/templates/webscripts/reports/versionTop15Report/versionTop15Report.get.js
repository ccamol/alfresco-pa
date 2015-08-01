var area= args.area ? args.area : null;
var mall= args.mall ? args.mall : null;
var project= args.project ? args.project : null;
var projectType= args.projectType ? args.projectType : null;
var arrayResult = new Array();
var currentEntryPoint = null;
var pathArray = null;

var query = 'TYPE:"pa:paDocument"';

if(area!=null && area!="null" && area!="0"){
	query += ' AND @pa\\:sectionID:' + area;
}

if(mall!=null && mall!="null"  && mall!="0"){
	query += ' AND @pa\\:mallID:' + mall;
}

if(projectType != undefined && projectType != null && projectType != "0"){
	//Arquitectura
	if(projectType == "1" && area == "1"){
		query += ' AND @pa\\:nodeType:6';
	}

	if(projectType == "2" && area == "1"){
		query += ' AND @pa\\:nodeType:7';
	}

	//Ingenieria
	if(projectType == "1" && area == "2"){
		query += ' AND @pa\\:nodeType:5';
	}

	if(project!=null && project!="null" && project!="0"){
		query += ' AND @pa\\:projectID:' + project;
	}
}

//if(project!=null && project!="null" && project!="0"){
//query += ' AND @pa\\:projectID:' + project;
//}

//logger.log(project);

//if(projectType != undefined && projectType != null && projectType != "0"){
//if(projectType == "1" && project != ""){
//query += ' AND @pa\\:nodeType:5';
//}
//if(projectType == "2" && project != ""){
//query += ' AND @pa\\:nodeType:7';
//}
//}
resultSet = search.luceneSearch(query);

for(i=0;i<resultSet.length;i++){
	arrayResult[i]=new Array();
	arrayResult[i]['node']=resultSet[i];
	if(resultSet[i].versionHistory!=null){
		arrayResult[i]['versionCount']=resultSet[i].versionHistory.length;
	}else{
		arrayResult[i]['versionCount']=1;
	}
	currentEntryPoint=getPath(resultSet[i]);
	pathArray=breadCrumb(currentEntryPoint.site, currentEntryPoint.nodeType, currentEntryPoint.nodeId);
	if(pathArray!=null && pathArray!=undefined && pathArray.length>0){
		if(pathArray[pathArray.length-1].stage=="1"){
			arrayResult[i]['name']=pathArray[pathArray.length-2].value;
			arrayResult[i]['stage']=pathArray[pathArray.length-1].value;
		}else{
			arrayResult[i]['name']=pathArray[pathArray.length-1].value;
			arrayResult[i]['stage']="";
		}
		arrayResult[i]['category']=pathArray[pathArray.length-1].link;
	}

}

model.resultSet = arrayResult;



function getPath(nodeRef){
	var response=new Array();
	var nodeType=null;
	var nodeId=null;
	var site = null;

	if(nodeRef.properties['pa:sectionID']==1){
		site=1;
		nodeType=9;
		nodeId=nodeRef.properties['pa:mallID'];
		if(nodeRef.properties['pa:sucNumber']!=null && nodeRef.properties['pa:sucNumber']!=undefined && nodeRef.properties['pa:sucNumber']!=0){
			nodeType=3;
			nodeId=nodeRef.properties['pa:sucNumber'];
			if(nodeRef.properties['pa:stageID']!=null && nodeRef.properties['pa:stageID']!=undefined && nodeRef.properties['pa:stageID']!=0){
				nodeType=7;
				nodeId=nodeRef.properties['pa:stageID'];
			}
		}else{
			if(nodeRef.properties['pa:stageID']!=null && nodeRef.properties['pa:stageID']!=undefined && nodeRef.properties['pa:stageID']!=0){
				nodeType=6;
				nodeId=nodeRef.properties['pa:stageID'];
			}else{
				if(nodeRef.properties['pa:projectID']!=null && nodeRef.properties['pa:projectID']!=undefined && nodeRef.properties['pa:projectID']!=0){
					nodeType=10;
					nodeId=nodeRef.properties['pa:projectID'];
				}
			}
		}
	}else{
		site=2;
		nodeType=1;
		nodeId=nodeRef.properties['pa:mallID'];
		if(nodeRef.properties['pa:stageID']!=null && nodeRef.properties['pa:stageID']!=undefined && nodeRef.properties['pa:stageID']!=0){
			nodeType=5;
			nodeId=nodeRef.properties['pa:stageID'];
		}else{
			if(nodeRef.properties['pa:projectID']!=null && nodeRef.properties['pa:projectID']!=undefined && nodeRef.properties['pa:projectID']!=0){
				nodeType=2;
				nodeId=nodeRef.properties['pa:projectID'];
			}
		}
	}

	response.nodeType=nodeType;
	response.nodeId=nodeId;
	response.site=site;

	return response;

}

function breadCrumb(siteSelected, entryPointType, entryPointId){

	if(entryPointType==undefined) entryPointType=null;
	if(entryPointId==undefined) entryPointId=null;


	var arrayPathResultSet=new Array();

	if(entryPointType!=null && entryPointId!=null){
		switch(parseInt(entryPointType)) {
		case 1:		// Engineering mall
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]="";
			arrayPathResultSet[0]["link"]="Mall";   
			arrayPathResultSet[0]["stage"]="0";   
			var mall = MallSrv.getById(parseInt(entryPointId));
			if(mall.status>-1){
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]=mall.result.name;
				arrayPathResultSet[1]["link"]="Mall";
				arrayPathResultSet[1]["stage"]="0";   
			}
			break;
		case 2:		// Engineering project
			break;
		case 3:		// SUC
			if(siteSelected==2){
				arrayPathResultSet[0]=new Array();
				arrayPathResultSet[0]["value"]="";
				arrayPathResultSet[0]["link"]="Mall";   
				arrayPathResultSet[0]["stage"]="0";   
				var suc = SucSrv.getById(parseInt(entryPointId));
				if(suc.status>-1){
					var mall = MallSrv.getById(suc.result.mall.id);
					if(mall.status>-1){
						arrayPathResultSet[1]=new Array();
						arrayPathResultSet[1]["value"]=mall.result.name;
						arrayPathResultSet[1]["link"]="Mall";
						arrayPathResultSet[1]["stage"]="0";   
					}
					arrayPathResultSet[2]=new Array();
					arrayPathResultSet[2]["value"]=suc.result.description;
					if(suc.result.sucType==1){
						arrayPathResultSet[2]["link"]="Suc virtual";
					}
					arrayPathResultSet[2]["stage"]="0";   
				}
			}else{
				arrayPathResultSet[0]=new Array();
				arrayPathResultSet[0]["value"]="";
				arrayPathResultSet[0]["link"]="Mall";   
				arrayPathResultSet[0]["stage"]="0";   

				var suc = SucSrv.getById(parseInt(entryPointId));
				if(suc.status>-1){
					var mall = MallSrv.getById(suc.result.mall.id);
					if(mall.status>-1){
						arrayPathResultSet[1]=new Array();
						arrayPathResultSet[1]["value"]=mall.result.name;
						arrayPathResultSet[1]["link"]="Mall";
						arrayPathResultSet[1]["stage"]="0";   
					}

					arrayPathResultSet[2]=new Array();
					arrayPathResultSet[2]["value"]=suc.result.description;
					if(suc.result.sucType==1){
						arrayPathResultSet[2]["link"]="Suc";
					}else{
						arrayPathResultSet[2]["link"]="Suc";
					}
					arrayPathResultSet[2]["stage"]="0";   
				}
			}
			break;
		case 4:		// SUC project
			break;
		case 5:		// Engineering project stage
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]="";
			arrayPathResultSet[0]["link"]="Mall";
			arrayPathResultSet[0]["stage"]="0";   

			var stageProject = ProjectStagesSrv.getById(parseInt(entryPointId));
			if(stageProject.status>-1){
				var project = EngineeringProjectSrv.getById(stageProject.result.idProject);
				if(project.status>-1){
					var mall = MallSrv.getById(project.result.mall.id);
					if(mall.status>-1){
						arrayPathResultSet[1]=new Array();
						arrayPathResultSet[1]["value"]=mall.result.name;
						arrayPathResultSet[1]["link"]="Mall";
						arrayPathResultSet[1]["stage"]="0";   
					}
					var stageProject = ProjectStagesSrv.getById(parseInt(entryPointId));
					if(stageProject.status>-1){
						var project = EngineeringProjectSrv.getById(stageProject.result.idProject);
						if(project.status>-1){
							var mall = MallSrv.getById(project.result.mall.id);
							if(mall.status>-1){
								arrayPathResultSet[1]=new Array();
								arrayPathResultSet[1]["value"]=mall.result.name;
								arrayPathResultSet[1]["link"]="Mall";
								arrayPathResultSet[1]["stage"]="0";   
							}

							arrayPathResultSet[2]=new Array();
							arrayPathResultSet[2]["value"]=project.result.name;
							arrayPathResultSet[2]["link"]="Proyecto de mall";
							arrayPathResultSet[2]["stage"]="0";   

							arrayPathResultSet[3]=new Array();
							arrayPathResultSet[3]["value"]=stageProject.result.stageType.name;
							arrayPathResultSet[3]["link"]="Proyecto de mall";
							arrayPathResultSet[3]["stage"]="1";   
						}
					}
				}
			}
			break;
		case 6: // Etapa de proyecto arquitectura 
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]="";
			arrayPathResultSet[0]["link"]="Mall";   
			arrayPathResultSet[0]["stage"]="0";   

			var stageProject = ProjectStagesSrv.getById(parseInt(entryPointId));
			if(stageProject.status>-1){
				var project = ArchitectureProjectSrv.getById(stageProject.result.idProject);
				if(project.status>-1){
					var mall = MallSrv.getById(project.result.mall.id);
					if(mall.status>-1){
						arrayPathResultSet[1]=new Array();
						arrayPathResultSet[1]["value"]=mall.result.name;
						arrayPathResultSet[1]["link"]="Mall";
						arrayPathResultSet[1]["stage"]="0";   

						arrayPathResultSet[2]=new Array();
						arrayPathResultSet[2]["value"]=project.result.name;
						arrayPathResultSet[2]["link"]="Proyecto de mall";
						arrayPathResultSet[2]["stage"]="0";   

						arrayPathResultSet[3]=new Array();
						arrayPathResultSet[3]["value"]=stageProject.result.stageType.name;
						arrayPathResultSet[3]["link"]="Proyecto de mall";
						arrayPathResultSet[3]["stage"]="1";   
					}
				}
			}
			break;
		case 7: // Etapa de proyecto SUC
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]="";
			arrayPathResultSet[0]["link"]="Mall";   
			arrayPathResultSet[0]["stage"]="0";   


			var stageProject = ProjectStagesSrv.getById(parseInt(entryPointId));
			if(stageProject.status>-1){
				var project = SucProjectSrv.getById(stageProject.result.idProject);
				if(project.status>-1){
					var suc = SucSrv.getById(project.result.sucEntity.id);
					if(suc.status>-1){
						var mall = MallSrv.getById(suc.result.mall.id);
						if(mall.status>-1){
							arrayPathResultSet[1]=new Array();
							arrayPathResultSet[1]["value"]=mall.result.name;
							arrayPathResultSet[1]["link"]="Mall";
							arrayPathResultSet[1]["stage"]="0";   

							arrayPathResultSet[2]=new Array();
							arrayPathResultSet[2]["value"]=suc.result.description;
							if(suc.result.sucType==1){
								arrayPathResultSet[2]["link"]="Suc virtual";
							}else{
								arrayPathResultSet[2]["link"]="Suc";
							}
							arrayPathResultSet[2]["stage"]="0";   

							arrayPathResultSet[3]=new Array();
							arrayPathResultSet[3]["value"]=project.result.name;
							arrayPathResultSet[3]["link"]="Proyecto de suc";
							arrayPathResultSet[3]["stage"]="0";   

							arrayPathResultSet[4]=new Array();
							arrayPathResultSet[4]["value"]=stageProject.result.stageType.name;
							arrayPathResultSet[4]["link"]="Proyecto de suc";
							arrayPathResultSet[4]["stage"]="1";   
						}
					}
				}    		
			}
			break;
		case 8: // Etapa de licitación
			var tenderObject = TendersSrv.getById(parseInt(idTender));
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]=tenderObject.result.name;
			arrayPathResultSet[0]["link"]="Licitación"; 
			arrayPathResultSet[0]["stage"]="0";   
			switch(parseInt(entryPointId)) {
			case 1:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Invitar a Licitación";
				arrayPathResultSet[1]["link"]="Licitación";
				arrayPathResultSet[1]["stage"]="0";   
				break
			case 2:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Entrega de documentación";
				arrayPathResultSet[1]["link"]="Licitación";
				arrayPathResultSet[1]["stage"]="0";   
				break
			case 3:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Preguntas y respuestas";
				arrayPathResultSet[1]["link"]="Licitación";
				arrayPathResultSet[1]["stage"]="0";   
				break
			case 4:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Entrega de ofertas";
				arrayPathResultSet[1]["link"]="Licitación";
				arrayPathResultSet[1]["stage"]="0";   
				break
			case 5:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Análisis de ofertas";
				arrayPathResultSet[1]["link"]="Licitación";
				arrayPathResultSet[1]["stage"]="0";   
				break
			case 6:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Adjudicación y contrato";
				arrayPathResultSet[1]["link"]="Licitación";
				arrayPathResultSet[1]["stage"]="0";   
				break
			}

			break;
		case 9: // Mall arquitectura
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]="";
			arrayPathResultSet[0]["link"]="Mall";   
			arrayPathResultSet[0]["stage"]="0";   
			var mall = MallSrv.getById(parseInt(entryPointId));
			if(mall.status>-1){
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]=mall.result.name;
				arrayPathResultSet[1]["link"]="Mall";
				arrayPathResultSet[1]["stage"]="0";   
			}
			break;
		case 10: // Proyecto de mall arquitectura
			break;
		case 11:
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]="Licitaciones";
			arrayPathResultSet[0]["link"]="Licitación";   
			arrayPathResultSet[0]["stage"]="0";   
			break;
		case 12:
			var tenderObject = TendersSrv.getById(parseInt(idTender));
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]=tenderObject.result.name;
			arrayPathResultSet[0]["link"]="Licitación"; 
			arrayPathResultSet[0]["stage"]="0";   
			switch(parseInt(entryPointId)) {
			case 1:
				break
			case 2:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Entrega de documentación";
				arrayPathResultSet[1]["link"]="Licitación";
				arrayPathResultSet[1]["stage"]="0";   
				break
			case 3:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Preguntas y respuestas";
				arrayPathResultSet[1]["link"]="Licitación";
				arrayPathResultSet[1]["stage"]="0";   
				break
			case 4:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Entrega de ofertas";
				arrayPathResultSet[1]["link"]="Licitación";
				arrayPathResultSet[1]["stage"]="0";   
				break
			case 5:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Análisis de ofertas";
				arrayPathResultSet[1]["link"]="Licitación";
				arrayPathResultSet[1]["stage"]="0";   
				break
			case 6:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Adjudicación y contrato";
				arrayPathResultSet[1]["link"]="Licitación";
				arrayPathResultSet[1]["stage"]="0";   
				break
			}
			break;

		}
	}	

	return arrayPathResultSet;
}
