<import resource="classpath:alfresco/extension/objectModel.js">
<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">


var bodyContent = eval('(' + requestbody.content + ')');

var parent= bodyContent.parent ? bodyContent.parent : null;
var nodeType= bodyContent.nodeType ? bodyContent.nodeType : null;
var nodeId= bodyContent.nodeId ? bodyContent.nodeId : null;
var arrayResultSet=new Array();

var counter =0;
var query = null;
var resultSet= null;

if(parent!=null && nodeType!=null && nodeId!=null){
	if(nodeType == 2){
		response = EngineeringProjectSrv.getById(nodeId);
		nodeId = response.result.mall.id;
	}
	if(nodeType == 3){
		response = SucSrv.getById(nodeId);
		nodeId = response.result.mall.id;
	}
	if(nodeType == 5 || nodeType == 6){
		logger.log(nodeId + "   ------------------");
		var idproject = ProjectStagesSrv.getById(nodeId);
		response = ArchitectureProjectSrv.getById(idproject.result.idProject);
		nodeId = response.result.mall.id;
	}
	if(nodeType == 7){
		var idprojectSuc = ProjectStagesSrv.getById(nodeId).result.idProject;
		var idsuc = SucProjectSrv.getById(idprojectSuc);
		response = SucSrv.getById(idsuc.result.sucEntity);
		nodeId = response.result.mall.id;
	}
	
	
	var entryPoint = new EntryPoint();
	entryPoint.nodeType = 9;
	entryPoint.nodeId = nodeId;

	var response = ClassificationService.getByUuid(parent);
	var childrens = ClassificationService.documents(entryPoint, response.result);
	var currentEntryPoint=null;
	var pathArray=null;
	
	for(var i=0;i<childrens.result.size();i++){
		query='@sys\\:node-uuid:' + childrens.result.get(i);
		resultSet= search.luceneSearch(query);
		if(resultSet.length>0){
			arrayResultSet[counter]=new Array();
			arrayResultSet[counter].node=resultSet[0];
			currentEntryPoint=getPath(resultSet[0]);
			pathArray=breadCrumb(currentEntryPoint.site, currentEntryPoint.nodeType, currentEntryPoint.nodeId);
			arrayResultSet[counter].path="";
			if(pathArray!=null && pathArray!=undefined && pathArray.length>0){
				for(var j=0;j<pathArray.length;j++){
					arrayResultSet[counter].path += "/" + pathArray[j].value;
				}
				arrayResultSet[counter].pathLink = pathArray[pathArray.length-1].link;
			}
			counter++;
		}
	}
}

model.resultSet=arrayResultSet;


function getPath(nodeRef){
	var response=new Array();
	var nodeType=null;
	var nodeId=null;
	var site = null;
	
	if(nodeRef.properties['pa:sectionID']==1){
		site=1;
		nodeType=9;
		nodeId=nodeRef.properties['pa:mallID'];
//		logger.log("mallID: " + nodeRef.properties['pa:mallID']);
//		logger.log("sucNumber: " + nodeRef.properties['pa:sucNumber']);
//		logger.log("stageID: " + nodeRef.properties['pa:stageID']);
//		logger.log("projectID: " + nodeRef.properties['pa:projectID']);
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
			arrayPathResultSet[0]["value"]="Ingeniería";
			arrayPathResultSet[0]["link"]="/share/page/site/arauco/engineering";   
			var mall = MallSrv.getById(parseInt(entryPointId));
			if(mall.status>-1){
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]=mall.result.name;
				arrayPathResultSet[1]["link"]="/share/page/site/arauco/management?id=" + entryPointId + "&nodeType=" + entryPointType;
			}
			break;
		case 2:		// Engineering project
			break;
		case 3:		// SUC
			if(siteSelected==2){
				arrayPathResultSet[0]=new Array();
				arrayPathResultSet[0]["value"]="Ingeniería";
				arrayPathResultSet[0]["link"]="/share/page/site/arauco/engineering";   
				var suc = SucSrv.getById(parseInt(entryPointId));
				if(suc.status>-1){
					var mall = MallSrv.getById(suc.result.mall.id);
					if(mall.status>-1){
						arrayPathResultSet[1]=new Array();
						arrayPathResultSet[1]["value"]=mall.result.name;
						arrayPathResultSet[1]["link"]="/share/page/site/arauco/management?id=" + suc.result.mall.id + "&nodeType=" + 1;
					}
					arrayPathResultSet[2]=new Array();
					arrayPathResultSet[2]["value"]=suc.result.description;
					if(suc.result.sucType==1){
						arrayPathResultSet[2]["link"]="/share/page/site/arauco/managementVirtualSuc?id=" + entryPointId + "&nodeType=" + 3;
					}
				}
			}else{
				arrayPathResultSet[0]=new Array();
				arrayPathResultSet[0]["value"]="Arquitectura";
				arrayPathResultSet[0]["link"]="/share/page/site/arquitectura/architecture";   

				var suc = SucSrv.getById(parseInt(entryPointId));
				if(suc.status>-1){
					var mall = MallSrv.getById(suc.result.mall.id);
					if(mall.status>-1){
						arrayPathResultSet[1]=new Array();
						arrayPathResultSet[1]["value"]=mall.result.name;
						arrayPathResultSet[1]["link"]="/share/page/site/arquitectura/managementArchitecture?id=" + suc.result.mall.id + "&nodeType=" + 9;
					}

					arrayPathResultSet[2]=new Array();
					arrayPathResultSet[2]["value"]=suc.result.description;
					if(suc.result.sucType==1){
						arrayPathResultSet[2]["link"]="/share/page/site/arquitectura/managementVirtualSuc?id=" + entryPointId + "&nodeType=" + 3;
					}else{
						arrayPathResultSet[2]["link"]="/share/page/site/arquitectura/managementSuc?id=" + entryPointId + "&nodeType=" + 3;
					}
				}
			}
			break;
		case 4:		// SUC project
			break;
		case 5:		// Engineering project stage
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]="Ingeniería";
			arrayPathResultSet[0]["link"]="/share/page/site/arauco/engineering";

			var stageProject = ProjectStagesSrv.getById(parseInt(entryPointId));
			if(stageProject.status>-1){
				var project = EngineeringProjectSrv.getById(stageProject.result.idProject);
				if(project.status>-1){
					var mall = MallSrv.getById(project.result.mall.id);
					if(mall.status>-1){
						arrayPathResultSet[1]=new Array();
						arrayPathResultSet[1]["value"]=mall.result.name;
						arrayPathResultSet[1]["link"]="/share/page/site/arauco/management?id=" + project.result.mall.id + "&nodeType=" + 1;
					}
					var stageProject = ProjectStagesSrv.getById(parseInt(entryPointId));
					if(stageProject.status>-1){
						var project = EngineeringProjectSrv.getById(stageProject.result.idProject);
						if(project.status>-1){
							var mall = MallSrv.getById(project.result.mall.id);
							if(mall.status>-1){
								arrayPathResultSet[1]=new Array();
								arrayPathResultSet[1]["value"]=mall.result.name;
								arrayPathResultSet[1]["link"]="/share/page/site/arauco/management?id=" + project.result.mall.id + "&nodeType=" + 1;
							}

							arrayPathResultSet[2]=new Array();
							arrayPathResultSet[2]["value"]=project.result.name;
							arrayPathResultSet[2]["link"]="";

							arrayPathResultSet[3]=new Array();
							arrayPathResultSet[3]["value"]=stageProject.result.stageType.name;
							arrayPathResultSet[3]["link"]="/share/page/site/arauco/projectManagement?idProject=" + project.result.id + "&nodeType=" + entryPointType  +"&id=" + entryPointId;
						}
					}
				}
			}
			break;
		case 6: // Etapa de proyecto arquitectura 
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]="Arquitectura";
			arrayPathResultSet[0]["link"]="/share/page/site/arquitectura/architecture";   

			var stageProject = ProjectStagesSrv.getById(parseInt(entryPointId));
			if(stageProject.status>-1){
				var project = ArchitectureProjectSrv.getById(stageProject.result.idProject);
				if(project.status>-1){
					var mall = MallSrv.getById(project.result.mall.id);
					if(mall.status>-1){
						arrayPathResultSet[1]=new Array();
						arrayPathResultSet[1]["value"]=mall.result.name;
						arrayPathResultSet[1]["link"]="/share/page/site/arquitectura/managementArchitecture?id=" + mall.result.id + "&nodeType=" + 9;

						arrayPathResultSet[2]=new Array();
						arrayPathResultSet[2]["value"]=project.result.name;
						arrayPathResultSet[2]["link"]="";

						arrayPathResultSet[3]=new Array();
						arrayPathResultSet[3]["value"]=stageProject.result.stageType.name;
						arrayPathResultSet[3]["link"]="/share/page/site/arquitectura/projectManagement?id=" + stageProject.result.id + "&nodeType=6&idProject=" + project.result.id;
					}
				}
			}
			break;
		case 7: // Etapa de proyecto SUC
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]="Arquitectura";
			arrayPathResultSet[0]["link"]="/share/page/site/arquitectura/architecture";   


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
							arrayPathResultSet[1]["link"]="/share/page/site/arquitectura/managementArchitecture?id=" + suc.result.mall.id + "&nodeType=" + 9;

							arrayPathResultSet[2]=new Array();
							arrayPathResultSet[2]["value"]=suc.result.description;
							if(suc.result.sucType==1){
								arrayPathResultSet[2]["link"]="/share/page/site/arquitectura/managementVirtualSuc?id=" + suc.result.id + "&nodeType=" + 3;
							}else{
								arrayPathResultSet[2]["link"]="/share/page/site/arquitectura/managementSuc?id=" + suc.result.id + "&nodeType=" + 3;
							}

							arrayPathResultSet[3]=new Array();
							arrayPathResultSet[3]["value"]=project.result.name;
							arrayPathResultSet[3]["link"]="";

							arrayPathResultSet[4]=new Array();
							arrayPathResultSet[4]["value"]=stageProject.result.stageType.name;
							arrayPathResultSet[4]["link"]="/share/page/site/arquitectura/projectManagement?id=" + stageProject.result.id + "&nodeType=7&idProject=" + project.result.id;
						}
					}
				}    		
			}
			break;
		case 8: // Etapa de licitación
			var tenderObject = TendersSrv.getById(parseInt(idTender));
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]=tenderObject.result.name;
			arrayPathResultSet[0]["link"]="/share/page/site/licitaciones/tender"; 
			switch(parseInt(entryPointId)) {
			case 1:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Invitar a Licitación";
				arrayPathResultSet[1]["link"]="/share/page/site/licitaciones/tenderStageInvite?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
				break
			case 2:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Entrega de documentación";
				arrayPathResultSet[1]["link"]="/share/page/site/licitaciones/handingOverDocumentation?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
				break
			case 3:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Preguntas y respuestas";
				arrayPathResultSet[1]["link"]="/share/page/site/licitaciones/questionsAndAnswers?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
				break
			case 4:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Entrega de ofertas";
				arrayPathResultSet[1]["link"]="/share/page/site/licitaciones/offersDelivery?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
				break
			case 5:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Análisis de ofertas";
				arrayPathResultSet[1]["link"]="/share/page/site/licitaciones/offersAnalysis?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
				break
			case 6:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Adjudicación y contrato";
				arrayPathResultSet[1]["link"]="/share/page/site/licitaciones/awarding?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
				break
			}

			break;
		case 9: // Mall arquitectura
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]="Arquitectura";
			arrayPathResultSet[0]["link"]="/share/page/site/arquitectura/architecture";   
			var mall = MallSrv.getById(parseInt(entryPointId));
			if(mall.status>-1){
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]=mall.result.name;
				arrayPathResultSet[1]["link"]="/share/page/site/arquitectura/managementArchitecture?id=" + entryPointId + "&nodeType=" + entryPointType;
			}
			break;
		case 10: // Proyecto de mall arquitectura
			break;
		case 11:
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]="Licitaciones";
			arrayPathResultSet[0]["link"]="/share/page/site/licitaciones/tender";   
			break;
		case 12:
			var tenderObject = TendersSrv.getById(parseInt(idTender));
			arrayPathResultSet[0]=new Array();
			arrayPathResultSet[0]["value"]=tenderObject.result.name;
			arrayPathResultSet[0]["link"]="/share/page/applicantAccess"; 
			switch(parseInt(entryPointId)) {
			case 1:
				break
			case 2:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Entrega de documentación";
				arrayPathResultSet[1]["link"]="/share/page/deliveryDocument?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
				break
			case 3:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Preguntas y respuestas";
				arrayPathResultSet[1]["link"]="/share/page/questionAnswersApplicantAccess?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
				break
			case 4:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Entrega de ofertas";
				arrayPathResultSet[1]["link"]="/share/page/offerDeliveryApplicant?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
				break
			case 5:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Análisis de ofertas";
				arrayPathResultSet[1]["link"]="/share/page/offerAnalysisApplicant?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
				break
			case 6:
				arrayPathResultSet[1]=new Array();
				arrayPathResultSet[1]["value"]="Adjudicación y contrato";
				arrayPathResultSet[1]["link"]="/share/page/awardEvaluationApplicantAccess?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
				break
			}
			break;
			
		}
	}	

	return arrayPathResultSet;
}



