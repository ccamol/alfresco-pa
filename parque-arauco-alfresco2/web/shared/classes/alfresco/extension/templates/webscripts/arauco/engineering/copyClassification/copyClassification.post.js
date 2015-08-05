var bodyContent = eval('(' + requestbody.content + ')');

var nodeType= bodyContent.nodeType ? bodyContent.nodeType : null;
var siteId= bodyContent.siteId ? bodyContent.siteId : null;
var uuidClassification= bodyContent.uuidClassification ? bodyContent.uuidClassification : null;
var uuidNewParent= bodyContent.uuidNewParent ? bodyContent.uuidNewParent : null;

var siteArquitectura="arquitectura";
var siteEngineering="arauco";
var nameSharedFolderToSearch="Compartida";
var nodoArray = new Array();
var nodo1=null;
var resultSet=null;

logger.log("nodeType: " + nodeType);
logger.log("siteId: " + siteId);
logger.log("uuidClassification: " + uuidClassification);
logger.log("uuidNewParent: " + uuidNewParent);

var nodeUuidClassification = ClassificationService.getByUuid(uuidClassification);
var nodeUuidNewParent = ClassificationService.getByUuid(uuidNewParent);
logger.log("nodeUuidClassification.message: " + nodeUuidClassification.message);
logger.log("nodeUuidClassification.status: " + nodeUuidClassification.status);
logger.log("nodeUuidClassification.result: " + nodeUuidClassification.result);

logger.log("nodeUuidNewParent.message: " + nodeUuidNewParent.message);
logger.log("nodeUuidNewParent.status: " + nodeUuidNewParent.status);
logger.log("nodeUuidNewParent.result: " + nodeUuidNewParent.result);

if(nodeUuidClassification.status>-1 && nodeUuidNewParent.status>-1){
	
	
	query='@sys\\:node-uuid:' + uuidClassification;
	resultSet= search.luceneSearch(query);

	if(resultSet.length>0){
		nodo1=resultSet[0];
		logger.log("nodo1.isContainer: " + nodo1.isContainer);
		logger.log("nodo1: " + nodo1);
	}
	
	validateFolder(nodo1);
	//logger.log("newNode.getId()" + newNode.getId());
	//captura ruta
	var nodeArauco = companyhome.childByNamePath("Data Dictionary/Ingenier\u00eda/Compartida");
	logger.log("nodeArauco: " + nodeArauco);
	
	//rescatar asociaciones node1 y cambiar sectionID
	var newNode = nodo1.copy(nodeArauco,true); 
	logger.log("newNode copiado: " + newNode);
	
	logger.log("newNode.properties['sys:node-uuid']: " + newNode.properties['sys:node-uuid']);
	//var response = ClassificationService.copyClassification(nodeUuidClassification.result, nodeUuidNewParent.result);
//	var response = ClassificationService.copyClassification(uuidClassification, uuidNewParent);
	
//	logger.log("response: " + response);
	
//	var nodeList = search.luceneSearch('@sys\\:node-uuid:"'+response.message+'"');
	var nodeList = search.luceneSearch('@sys\\:node-uuid:"'+newNode.properties['sys:node-uuid']+'"');
	
	logger.log("nodeList: " + nodeList);
	
//	data = ClassificationService.getByUuid(response.message).result;
	data = ClassificationService.getByUuid(newNode.properties['sys:node-uuid']).result;
	
	logger.log("data: " + data);
	
	model.resultSet = data;
}else{
	model.response = null;
}

// validate if it is folder
function validateFolder(nodo1){
	if(nodo1.isContainer) {
		nodoArray = nodo1;

		logger.log("## La seleccion pertenece a una carpeta ##");
		logger.log("Nombre de la carpeta: " + nodo1.properties["cm:name"]);
		logger.log("hasChildren: " + nodo1.hasChildren);
		logger.log("assocs: " + nodo1.assocs);
		logger.log("associations: " + nodo1.associations);
		logger.log("nodoArray.children: " + nodoArray.children[0]);


		if(uuidClassification != null){
			var response = ClassificationService.getByUuid(uuidClassification);
			var childrens = ClassificationService.children(response.result, false);

			logger.log("response: " + response);
			logger.log("childrens: " + childrens);
			logger.log("uuidClassification: " + uuidClassification);
			logger.log("childrens.result.size(): " + childrens.result.size());

			for(var i=0;i<childrens.result.size();i++){
				logger.log("Node status: " + childrens.status);
				logger.log("Node uuid: " + childrens.result.uuid);
				logger.log("Node name: " + childrens.result.name);
				logger.log("Node description: " + childrens.result.description);
			}
		}
		sharedFolderToSite(nodo1, siteId, uuidNewParent);
	} else{
    // inside this block make process to doumentType

	}
}



function sharedFolderToSite(initSelectedNode, siteId, destFolderUUID){
    logger.log("call to function [sharedFolderToSite]");

    if(siteId==siteArquitectura){
        logger.log("se realizara funcion partir compartir carpeta hacia [" + siteEngineering + "]");
        logger.log("initSelectedNode: " + initSelectedNode);
        logger.log("destFolderUUID: " + destFolderUUID + " | " + siteEngineering);

        if(searchFolder(destFolderUUID, destFolderUUID)){
            logger.log("existe carpeta [Compartida]");
            logger.log("### inicio proceso copiar y compartir carpeta y sus documentos ###");
            
            //TODO llamada para proceso compartir
            //copyShareFolderToNewNode(initSelectedNode, destFolderUUID, siteId);

        }else{
            logger.log("### NO ES POSIBLE ENCONTRAR LA CARPETA ### [Compartida]");
        }
    }else if (siteId==siteEngineering){
        logger.log("se realizara funcion partir compartir carpeta hacia [" + siteArquitectura + "]");
        logger.log("initSelectedNode: " + initSelectedNode);
        logger.log("destFolderUUID: " + destFolderUUID + " | " + siteArquitectura);

        if(searchFolder(destFolderUUID, destFolderUUID)){
            logger.log("existe carpeta: [Compartida]");
            logger.log("### inicio proceso copiar y compartir carpeta y sus documentos ###");
            
          //TODO llamada para proceso compartir
           // copyShareFolderToNewNode(initSelectedNode, destFolderUUID, siteId);

        }else{
            logger.log("### NO ES POSIBLE ENCONTRAR LA CARPETA ### [Compartida]");
        }
    }
}


function searchFolder(destFolderUUID){
    query='@sys\\:node-uuid:' + destFolderUUID;
    resultSet = search.luceneSearch(query);
    var site = resultSet[0];
    var siteFolderName = site.properties["cm:name"];

    logger.log("Nombre de la carpeta raiz[PADRE] en el sitio [site]: " + siteFolderName);

    logger.log("valida si la carpeta existe: nombre de la carpeta ->[" + nameSharedFolderToSearch + "]<-");
    logger.log("destFolderUUID: " + destFolderUUID);

    //rescue values from java Bean(DTO) - Spring - inject on validaCompartida
    var validaCompartida = ClassificationService.searchFolder(nameSharedFolderToSearch, siteFolderName);

    logger.log("Sitio donde buscar carpeta: " + siteFolderName);
    logger.log("validaCompartida: " + validaCompartida.status);
    logger.log("validaCompartida: " + validaCompartida.message);

    if (validaCompartida.status==1){
        logger.log("carpeta [Compartida] encontrada en: " + siteFolderName);

        logger.log("validaCompartida.result.uuid: " + validaCompartida.result.uuid);
        logger.log("validaCompartida.result.name: " + validaCompartida.result.name);
        CompartidaResultUUID = validaCompartida.result.uuid;
        CompartidaResultNAME = validaCompartida.result.name;

        return true;
    } else {
        logger.log("carpeta [Compartida] NO encontrada en: " + siteFolderName);

        return false;
    }
}

