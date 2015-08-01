<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">


var entryPointType= args.nodeType ? args.nodeType : null;
var entryPointId= args.id ? args.id : null;
var siteSelected= args.siteSelected ? args.siteSelected : null;
var idTender = args.idTender ? args.idTender : null;

//logger.log("SITESELECTED: " + siteSelected);

if(entryPointType==undefined) entryPointType=null;
if(entryPointId==undefined) entryPointId=null;


var arrayResultSet=new Array();

if(entryPointType!=null && entryPointId!=null){
	entryPointType = entryPointType.replace(".", "");
	entryPointId = entryPointId.replace(".", "");

	switch(parseInt(entryPointType)) {
	case 1:		// Engineering mall
		arrayResultSet[0]=new Array();
		arrayResultSet[0]["value"]="Ingeniería";
		arrayResultSet[0]["link"]="/share/page/site/arauco/engineering";   
		var mall = MallSrv.getById(parseInt(entryPointId));
		if(mall.status>-1){
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]=mall.result.name;
			arrayResultSet[1]["link"]="/share/page/site/arauco/management?id=" + entryPointId + "&nodeType=" + entryPointType;
		}
		break;
	case 2:		// Engineering project
		break;
	case 3:		// SUC
		if(siteSelected=="arauco"){
			arrayResultSet[0]=new Array();
			arrayResultSet[0]["value"]="Ingeniería";
			arrayResultSet[0]["link"]="/share/page/site/arauco/engineering";   
			var suc = SucSrv.getById(parseInt(entryPointId));
			if(suc.status>-1){
				var mall = MallSrv.getById(suc.result.mall.id);
				if(mall.status>-1){
					arrayResultSet[1]=new Array();
					arrayResultSet[1]["value"]=mall.result.name;
					arrayResultSet[1]["link"]="/share/page/site/arauco/management?id=" + suc.result.mall.id + "&nodeType=" + 1;
				}
				arrayResultSet[2]=new Array();
				arrayResultSet[2]["value"]=suc.result.sucCode;
				if(suc.result.sucType==1){
					arrayResultSet[2]["link"]="/share/page/site/arauco/managementVirtualSuc?id=" + entryPointId + "&nodeType=" + 3;
				}
			}
		}else{
			arrayResultSet[0]=new Array();
			arrayResultSet[0]["value"]="Arquitectura";
			arrayResultSet[0]["link"]="/share/page/site/arquitectura/architecture";   

			var suc = SucSrv.getById(parseInt(entryPointId));
			if(suc.status>-1){
				var mall = MallSrv.getById(suc.result.mall.id);
				if(mall.status>-1){
					arrayResultSet[1]=new Array();
					arrayResultSet[1]["value"]=mall.result.name;
					arrayResultSet[1]["link"]="/share/page/site/arquitectura/managementArchitecture?id=" + suc.result.mall.id + "&nodeType=" + 9;
				}

				arrayResultSet[2]=new Array();
				arrayResultSet[2]["value"]=suc.result.sucCode;
				if(suc.result.sucType==1){
					arrayResultSet[2]["link"]="/share/page/site/arquitectura/managementVirtualSuc?id=" + entryPointId + "&nodeType=" + 3;
				}else{
					arrayResultSet[2]["link"]="/share/page/site/arquitectura/managementSuc?id=" + entryPointId + "&nodeType=" + 3;
				}
			}
		}
		break;
	case 4:		// SUC project
		break;
	case 5:		// Engineering project stage
		arrayResultSet[0]=new Array();
		arrayResultSet[0]["value"]="Ingeniería";
		arrayResultSet[0]["link"]="/share/page/site/arauco/engineering";

		var stageProject = ProjectStagesSrv.getById(parseInt(entryPointId));
		if(stageProject.status>-1){
			var project = EngineeringProjectSrv.getById(stageProject.result.idProject);
			if(project.status>-1){
				var mall = MallSrv.getById(project.result.mall.id);
				if(mall.status>-1){
					arrayResultSet[1]=new Array();
					arrayResultSet[1]["value"]=mall.result.name;
					arrayResultSet[1]["link"]="/share/page/site/arauco/management?id=" + project.result.mall.id + "&nodeType=" + 1;
				}
				var stageProject = ProjectStagesSrv.getById(parseInt(entryPointId));
				if(stageProject.status>-1){
					var project = EngineeringProjectSrv.getById(stageProject.result.idProject);
					if(project.status>-1){
						var mall = MallSrv.getById(project.result.mall.id);
						if(mall.status>-1){
							arrayResultSet[1]=new Array();
							arrayResultSet[1]["value"]=mall.result.name;
							arrayResultSet[1]["link"]="/share/page/site/arauco/management?id=" + project.result.mall.id + "&nodeType=" + 1;
						}

						arrayResultSet[2]=new Array();
						arrayResultSet[2]["value"]=project.result.name;
						arrayResultSet[2]["link"]="";

						arrayResultSet[3]=new Array();
						arrayResultSet[3]["value"]=stageProject.result.stageType.name;
						arrayResultSet[3]["link"]="/share/page/site/arauco/projectManagement?idProject=" + project.result.id + "&nodeType=" + entryPointType  +"&id=" + entryPointId;
					}
				}
			}
		}
		break;
	case 6: // Etapa de proyecto arquitectura 
		arrayResultSet[0]=new Array();
		arrayResultSet[0]["value"]="Arquitectura";
		arrayResultSet[0]["link"]="/share/page/site/arquitectura/architecture";   

		var stageProject = ProjectStagesSrv.getById(parseInt(entryPointId));
		if(stageProject.status>-1){
			var project = ArchitectureProjectSrv.getById(stageProject.result.idProject);
			if(project.status>-1){
				var mall = MallSrv.getById(project.result.mall.id);
				if(mall.status>-1){
					arrayResultSet[1]=new Array();
					arrayResultSet[1]["value"]=mall.result.name;
					arrayResultSet[1]["link"]="/share/page/site/arquitectura/managementArchitecture?id=" + mall.result.id + "&nodeType=" + 9;

					arrayResultSet[2]=new Array();
					arrayResultSet[2]["value"]=project.result.name;
					arrayResultSet[2]["link"]="";

					arrayResultSet[3]=new Array();
					arrayResultSet[3]["value"]=stageProject.result.stageType.name;
					arrayResultSet[3]["link"]="/share/page/site/arquitectura/projectManagement?id=" + stageProject.result.id + "&nodeType=6&idProject=" + project.result.id;
				}
			}
		}
		break;
	case 7: // Etapa de proyecto SUC
		arrayResultSet[0]=new Array();
		arrayResultSet[0]["value"]="Arquitectura";
		arrayResultSet[0]["link"]="/share/page/site/arquitectura/architecture";   


		var stageProject = ProjectStagesSrv.getById(parseInt(entryPointId));
		if(stageProject.status>-1){
			var project = SucProjectSrv.getById(stageProject.result.idProject);
			if(project.status>-1){
				var suc = SucSrv.getById(project.result.sucEntity.id);
				if(suc.status>-1){
					var mall = MallSrv.getById(suc.result.mall.id);
					if(mall.status>-1){
						arrayResultSet[1]=new Array();
						arrayResultSet[1]["value"]=mall.result.name;
						arrayResultSet[1]["link"]="/share/page/site/arquitectura/managementArchitecture?id=" + suc.result.mall.id + "&nodeType=" + 9;

						arrayResultSet[2]=new Array();
						arrayResultSet[2]["value"]=suc.result.description;
						if(suc.result.sucType==1){
							arrayResultSet[2]["link"]="/share/page/site/arquitectura/managementVirtualSuc?id=" + suc.result.id + "&nodeType=" + 3;
						}else{
							arrayResultSet[2]["link"]="/share/page/site/arquitectura/managementSuc?id=" + suc.result.id + "&nodeType=" + 3;
						}

						arrayResultSet[3]=new Array();
						arrayResultSet[3]["value"]=project.result.name;
						arrayResultSet[3]["link"]="";

						arrayResultSet[4]=new Array();
						arrayResultSet[4]["value"]=stageProject.result.stageType.name;
						arrayResultSet[4]["link"]="/share/page/site/arquitectura/projectManagement?id=" + stageProject.result.id + "&nodeType=7&idProject=" + project.result.id;
					}
				}
			}    		
		}
		break;
	case 8: // Etapa de licitación
		var tenderObject = TendersSrv.getById(parseInt(idTender));
		arrayResultSet[0]=new Array();
		arrayResultSet[0]["value"]=tenderObject.result.name;
		arrayResultSet[0]["link"]="/share/page/site/licitaciones/tender"; 
		switch(parseInt(entryPointId)) {
		case 1:
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]="Invitar a Licitación";
			arrayResultSet[1]["link"]="/share/page/site/licitaciones/tenderStageInvite?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
			break
		case 2:
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]="Entrega de documentación";
			arrayResultSet[1]["link"]="/share/page/site/licitaciones/handingOverDocumentation?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
			break
		case 3:
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]="Preguntas y respuestas";
			arrayResultSet[1]["link"]="/share/page/site/licitaciones/questionsAndAnswers?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
			break
		case 4:
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]="Entrega de ofertas";
			arrayResultSet[1]["link"]="/share/page/site/licitaciones/offersDelivery?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
			break
		case 5:
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]="Análisis de ofertas";
			arrayResultSet[1]["link"]="/share/page/site/licitaciones/offersAnalysis?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
			break
		case 6:
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]="Adjudicación y contrato";
			arrayResultSet[1]["link"]="/share/page/site/licitaciones/awarding?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
			break
		}

		break;
	case 9: // Mall arquitectura
		arrayResultSet[0]=new Array();
		arrayResultSet[0]["value"]="Arquitectura";
		arrayResultSet[0]["link"]="/share/page/site/arquitectura/architecture";   
		var mall = MallSrv.getById(parseInt(entryPointId));
		if(mall.status>-1){
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]=mall.result.name;
			arrayResultSet[1]["link"]="/share/page/site/arquitectura/managementArchitecture?id=" + entryPointId + "&nodeType=" + entryPointType;
		}
		break;
	case 10: // Proyecto de mall arquitectura
		break;
	case 11:
		arrayResultSet[0]=new Array();
		arrayResultSet[0]["value"]="Licitaciones";
		arrayResultSet[0]["link"]="/share/page/site/licitaciones/tender";   
		break;
	case 12:
		var tenderObject = TendersSrv.getById(parseInt(idTender));
		arrayResultSet[0]=new Array();
		arrayResultSet[0]["value"]=tenderObject.result.name;
		arrayResultSet[0]["link"]="/share/page/applicantAccess"; 
		switch(parseInt(entryPointId)) {
		case 1:
			break
		case 2:
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]="Entrega de documentación";
			arrayResultSet[1]["link"]="/share/page/deliveryDocument?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
			break
		case 3:
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]="Preguntas y respuestas";
			arrayResultSet[1]["link"]="/share/page/questionAnswersApplicantAccess?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
			break
		case 4:
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]="Entrega de ofertas";
			arrayResultSet[1]["link"]="/share/page/offerDeliveryApplicant?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
			break
		case 5:
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]="Análisis de ofertas";
			arrayResultSet[1]["link"]="/share/page/offerAnalysisApplicant?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
			break
		case 6:
			arrayResultSet[1]=new Array();
			arrayResultSet[1]["value"]="Adjudicación y contrato";
			arrayResultSet[1]["link"]="/share/page/awardEvaluationApplicantAccess?idTender=" + idTender + "&id=" + entryPointId + "&nodeType=" + entryPointType;
			break
		}
		break;
		
	}
}	

model.resultSet=arrayResultSet;





