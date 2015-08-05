<import resource="classpath:alfresco/extension/objectModel.js">

    // var to rescue values(params) on view (ajax)
    var bodyContent = eval('(' + requestbody.content + ')');

    // params
    var uuid = bodyContent.uuid ? bodyContent.uuid : null;
    var nodeType = bodyContent.nodeType ? bodyContent.nodeType : null;
    var siteId = bodyContent.siteId ? bodyContent.siteId : null;

    var remove = ClassificationService.deleteNode(uuid);
    
    logger.log("remove: " + remove);
    
    model.status="1";
    model.message="Operaci\u00f3n realizada con \u00e9xito";

    model.response=remove;
