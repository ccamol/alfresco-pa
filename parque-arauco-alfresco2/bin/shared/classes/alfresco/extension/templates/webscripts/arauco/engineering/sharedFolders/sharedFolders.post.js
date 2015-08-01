<import resource="classpath:alfresco/extension/objectModel.js">

    // var to rescue values(params) on view (ajax)
    var bodyContent = eval('(' + requestbody.content + ')');

    // params
    var uuidSelectedFolder = bodyContent.uuidSelectedFolder ? bodyContent.uuidSelectedFolder : null;
    var nodeType = bodyContent.nodeType ? bodyContent.nodeType : null;
    var siteId = bodyContent.siteId ? bodyContent.siteId : null;
    var destFolderUUID = bodyContent.destFolderUUID ? bodyContent.destFolderUUID : null;

    logger.log("uuidSelectedFolder: " + uuidSelectedFolder);
    logger.log("nodeType: " + nodeType);
    logger.log("siteId: " + siteId);
    logger.log("destFolderUUID: " + destFolderUUID);

    // local vars
    var initSelectedNode = null;
    var newNode = null;

    var initNameSite = null;
    var destinationSite = null;

    var selectedType = null;
    var resulSet = null;

    var siteArquitectura="arquitectura";
    var siteEngineering="arauco";
    var nameSharedFolderToSearch="Compartida";
    var CompartidaResultUUID=null;
    var CompartidaResultUUID=null;

    var arrayResultSet=new Array();
    var nodoArray = new Array();
    var counter = 0;

    // query to search selectedNode
    query='@sys\\:node-uuid:' + uuidSelectedFolder;
    resultSet = search.luceneSearch(query);
    initSelectedNode = resultSet[0];

    // validate if it is folder
    if(initSelectedNode.isContainer) {
        nodoArray = initSelectedNode;

        logger.log("## La seleccion pertenece a una carpeta ##");
        logger.log("Nombre de la carpeta: " + initSelectedNode.properties["cm:name"]);
        logger.log("hasChildren: " + initSelectedNode.hasChildren);
        logger.log("assocs: " + initSelectedNode.assocs);
        logger.log("associations: " + initSelectedNode.associations);
        logger.log("nodoArray.children: " + nodoArray.children[0]);


        if(uuidSelectedFolder != null){
            var response = ClassificationService.getByUuid(uuidSelectedFolder);
            var childrens = ClassificationService.children(response.result, false);

            logger.log("response: " + response);
            logger.log("childrens: " + childrens);
            logger.log("uuidSelectedFolder: " + uuidSelectedFolder);
            logger.log("childrens.result.size(): " + childrens.result.size());

            for(var i=0;i<childrens.result.size();i++){
    		    logger.log("Node status: " + childrens.status);
    		    logger.log("Node uuid: " + childrens.result.uuid);
    		    logger.log("Node name: " + childrens.result.name);
    		    logger.log("Node description: " + childrens.result.description);
            }
        }


        sharedFolderToSite(initSelectedNode, siteId, destFolderUUID);

    } else{
        // inside this block make process to doumentType

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
                copyShareFolderToNewNode(initSelectedNode, destFolderUUID, siteId);

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
                copyShareFolderToNewNode(initSelectedNode, destFolderUUID, siteId);

            }else{
                logger.log("### NO ES POSIBLE ENCONTRAR LA CARPETA ### [Compartida]");
            }
        }
    }


    function copyShareFolderToNewNode(initSelectedNode, destFolderUUID, siteId){
        logger.log("initSelectedNode: " + initSelectedNode);
        logger.log("CompartidaResultUUID: " + CompartidaResultUUID);
        logger.log("destFolderUUID: " + destFolderUUID);


        // llamada para crear la carpeta si esta no existe
        var shareFolderClassification = ClassificationService.getByUuid(CompartidaResultUUID);
        logger.log("parentClassification.status: " + shareFolderClassification.status);
        logger.log("parentClassification.message: " + shareFolderClassification.message);
        logger.log("parentClassification.description: " + shareFolderClassification.description);
        logger.log("parentClassification.result.description: " + shareFolderClassification.result.description);
        logger.log("parentClassification.result: " + shareFolderClassification.result);
        logger.log("parentClassification.result.classification: " + shareFolderClassification.result.classification);

        logger.log("uuidSelectedFolder: " + uuidSelectedFolder);


        // search for childrens
        var thirdClassification="";
        thirdClassification = ClassificationService.getArchitectureRoot();
        var childrenList = ClassificationService.children(thirdClassification.result, false);

        for(var i=0;i<childrenList.result.size();i++){
            if(childrenList.result.get(i)){
                child=childrenList.result.get(i);

                logger.log("child: " + child);
            }
        }

        // search for childrens second format
        var response = ClassificationService.getByUuid(uuidSelectedFolder);
        childrens = ClassificationService.children(response.result, false);
        for(var i=0;i<childrens.result.size();i++){
            child2=childrens.result.get(i);
            logger.log("child2: " + child2);
//		logger.log("Node uuid: " + childrens.result.uuid);
//		logger.log("Node name: " + childrens.result.name);
//		logger.log("Node description: " + childrens.result.description);
        }

        if(siteId===siteArquitectura){
            var thirdClassification="";
            thirdClassification = ClassificationService.getArchitectureRoot();
            var childrenList = ClassificationService.children(thirdClassification.result, false);

            for(var i=0;i<childrenList.result.size();i++){
                if(childrenList.result.get(i)){
                    thirdFolder=childrenList.result.get(i);
                }
            }

            var response = ClassificationService.classify(thirdFolder, uuidSelectedFolder);
            logger.log("llamada: [ClassificationService.classify(thirdFolder, uuid)]");
            logger.log("response: " + response);

        } else if(siteId===siteEngineering){

        }
        
        var chooseFolder = ClassificationService.getByUuid(uuidSelectedFolder);
        var targetFolder = ClassificationService.getByUuid(CompartidaResultUUID);
        
        logger.log("chooseFolder.result: " + chooseFolder.result);
        logger.log("targetFolder.result: " + targetFolder.result);


        var copyFolderResponse = ClassificationService.copyFolder(chooseFolder.result,
            targetFolder.result, null);

        logger.log("copyFolderResponse.status: " + copyFolderResponse.status);
        logger.log("copyFolderResponse.message: " + copyFolderResponse.message);
        logger.log("copyFolderResponse: " + copyFolderResponse);


        // no logr llegar
        //var classificationShareFolder = ClassificationService.getByUuid(CompartidaResultUUID);
        //logger.log("classificationShareFolder: " + classificationShareFolder.status);
        //var response= ClassificationService.classify(classificationShareFolder.result,
        //    uuidSelectedFolder);




        /*
         var classification = ClassificationService.add(parentClassification.result, CompartidaResultNAME);
         if(!parentClassification.result==null){
         logger.log("parentClassification.result: " + parentClassification.result);
         }

        logger.log("CompartidaResultNAME: " + CompartidaResultNAME);

        logger.log("classification.result.status: " + classification.status);
        logger.log("classification.result.messsage: " + classification.messsage);

        //newNode = initSelectedNode.copy();

        logger.log("newNode: " + newNode);

        */


    }


    // function to a folder by UUID and give params [status, message]
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


    model.status="1";
    model.message="Operaci\u00f3n realizada con \u00e9xito";


