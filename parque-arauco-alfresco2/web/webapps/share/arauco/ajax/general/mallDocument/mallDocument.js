var selectedElement='';
var flagMax=0;
var itemsDisabled = {};
var associateElement = '';

function maximize_windows(){
	$('#containerDocument').css({ position: "absolute" ,width:"100%"});
}

function minimize_windows(){
	$('#containerDocument').removeAttr('style');
}

function maximize_minimize(){
	if(flagMax==0){
		maximize_windows();

		flagMax=1;
	}else{
		minimize_windows();
		flagMax=0;
	}
}

var treeClipboard = {
		uuid : "",
		classification : "",
		operation : "",
		copy : function(uuid, classification) {
			if (uuid != null && uuid != undefined && uuid != ""
				&& classification != null && classification != undefined
				&& classification != "") {
				this.uuid = uuid;
				this.classification = classification;
				this.operation = "copy";
			} else {
				this.uuid = "";
				this.classification = "";
				this.operation = "";
			}
		},
		cut : function(uuid, classification) {
			if (uuid != null && uuid != undefined && uuid != ""
				&& classification != null && classification != undefined
				&& classification != "") {
				this.uuid = uuid;
				this.classification = classification;
				this.operation = "cut";
			} else {
				this.uuid = "";
				this.classification = "";
				this.operation = "";
			}
		},
		paste : function(newClassification) {

			if (this.operation == "copy") {
				classify(this.classification, newClassification, this.uuid);
				selectNode(newClassification);
				count(newClassification);
				count(this.classification);
				parentRecurse(newClassification);
				//parentRecurse(this.classification);
			}else{
				if(classify (this.classification, newClassification, this.uuid)){
					unClassify(this.classification, this.uuid);
					selectNode(newClassification);
					count(newClassification);
					count(this.classification);
					parentRecurse(newClassification);
					//	parentRecurse(this.classification);
				}
			}
		},
};

function checkDocumentalRol(rol){
	nodeType = getUrlVars()["nodeType"];
	if(nodeType != null || nodeType != undefined){
		nodeId = getUrlVars()["id"].replace(".", "");

		var checkResult=false;
		$.ajax({
			url: '/share/page/dashlets/checkDocumentalRol',
			type :"get",
			dataType:"html",
			async: false,
			data:{
				nodeType : nodeType,
				id : nodeId,
				documentalRol : rol
			},
			success: function (data){
				if(data.indexOf("true")>-1){
					checkResult = false;
				}else{
					checkResult = true;
				}
			}
		});
		return checkResult;
	}
}

var menu1 = [
             {'Nueva clasificación':{
            	 onclick:function(menuItem,menu) { 
            		 editClassification($(this).attr('id')); 
            	 },
            	 icon:'/share/images/icons/new_classification.gif',
            	 disabled:checkDocumentalRol("collaborator")
             }
             },
             {'Renombrar':{
            	 onclick:function(menuItem,menu) { 
            		 bootbox.dialog($(this).children("ul").attr('id'));
            	 },
            	 icon:'/share/images/icons/rename_classification.gif',
            	 disabled:checkDocumentalRol("collaborator")
             }
             },	
             {'':{
            	 disabled:true
             }
             },
             {'Pegar':{
            	 onclick:function(menuItem,menu) {
            		 treeClipboard.paste(selectedElement);
            	 },
            	 icon:'/share/images/icons/paste.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Compartir carpeta':{
            	 onclick:function(menuItem,menu) { 
            		 shareFolderClassification($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/compartida.gif',
            	 disabled:false
            	 
/*            	 onclick:function(menuItem,menu) { 
            		 shareFolderClassification($(this).attr('id')); 
            	 },
            	 icon:'/share/images/icons/compartida.gif',
            	 disabled:checkDocumentalRol("collaborator")
*/            	 
             	} 
             },             
             {'':{
            	 disabled:true
             }
             },
             {'Cerrar':{
            	 icon:'/share/images/icons/close_panel.gif',
            	 disabled:false
             }
             }
             ];

var menu2 = [
             {'Actualizar Contenido':{
            	 onclick:function(menuItem,menu) { 
            		 updateContentMenu($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/update.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Actualizar Metadato':{
            	 onclick:function(menuItem,menu) { 
            		 updateDocument($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/update.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Descargar':{
            	 onclick:function(menuItem,menu) { 
            		 downloadDocument($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/download_doc.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'Previsualizar':{
            	 onclick:function(menuItem,menu) { 
            		 previewDocument($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/preview.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'Compartir documento':{
            	 onclick:function(menuItem,menu) { 
            		 parentRecurseSite($(this).attr('id'), selectedElement , $(this).html() );
            	 },
            	 icon:'/share/images/icons/compartida.gif',
            	 disabled:false
             }
             },
             {'Solicitar eliminación':{
            	 onclick:function(menuItem,menu) { 
            		 deleteDocument($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/delete.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Copiar':{
            	 onclick:function(menuItem,menu) {
            		 treeClipboard.copy($(this).attr('id'), selectedElement);
            	 },
            	 icon:'/share/images/icons/copy.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Cortar':{
            	 onclick:function(menuItem,menu) { 
            		 treeClipboard.cut($(this).attr('id'),selectedElement);

            	 },
            	 icon:'/share/images/icons/cut.gif',
            	 disabled:checkDocumentalRol("collaborator")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Editar en línea':{
            	 onclick:function(menuItem,menu) { 
            		 editOnGoogleDocs($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/edit_icon.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Comentar':{
            	 onclick:function(menuItem,menu) { 
            		 commentPdf($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/forum-16.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Histórico':{
            	 onclick:function(menuItem,menu) {

            		 documentHistory($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/versionHistory_icon.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },

             {'Importante':{
            	 onclick:function(menuItem,menu) { 


            		 addImportantDocument($(this).attr('id'), $(this).html());

            	 },
            	 icon:'/share/images/icons/make_ml.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },

             {'Flujos de trabajo asociados':{
            	 onclick:function(menuItem,menu) { 
            		 documentWorkflows($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/workflow.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Reclasificar documento':{
            	 onclick:function(menuItem,menu) { 
            		 site($(this).attr('id'), selectedElement);
            	 },
            	 icon:'/alfresco/images/icons/edit_properties.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'Cerrar':{
            	 icon:'/share/images/icons/close_panel.gif',
            	 disabled:false
             }
             }
             ];

var menu3 = [
             {'Actualizar Contenido':{
            	 onclick:function(menuItem,menu) { 
            		 updateContentMenu($(this).attr('id'), $(this).attr('name'));
            	 },
            	 icon:'/share/images/icons/update.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Actualizar Metadato':{
            	 onclick:function(menuItem,menu) { 
            		 updateDocument($(this).attr('id'), $(this).attr('name'));
            	 },
            	 icon:'/share/images/icons/update.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Descargar':{
            	 onclick:function(menuItem,menu) { 
            		 downloadDocument($(this).attr('id'), $(this).attr('name'));
            	 },
            	 icon:'/share/images/icons/download_doc.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'Previsualizar':{
            	 onclick:function(menuItem,menu) { 
            		 previewDocument($(this).attr('id'), $(this).attr('name'));
            	 },
            	 icon:'/share/images/icons/preview.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'Solicitar eliminación':{
            	 onclick:function(menuItem,menu) { 
            		 deleteDocument($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/delete.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Comentar':{
            	 onclick:function(menuItem,menu) { 
            		 commentPdf($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/forum-16.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Histórico':{
            	 onclick:function(menuItem,menu) {

            		 documentHistory($(this).attr('id'), $(this).attr('name'));
            	 },
            	 icon:'/share/images/icons/versionHistory_icon.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Flujos de trabajo asociados':{
            	 onclick:function(menuItem,menu) { 
            		 documentWorkflows($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/workflow.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Cerrar':{
            	 icon:'/share/images/icons/close_panel.gif',
            	 disabled:false
             }
             }
             ];

var menu4 = [
             {'Actualizar Contenido':{
            	 onclick:function(menuItem,menu) { 
            		 updateContentMenu($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/update.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Actualizar Metadato':{
            	 onclick:function(menuItem,menu) { 
            		 updateDocument($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/update.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Descargar':{
            	 onclick:function(menuItem,menu) { 
            		 downloadDocument($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/download_doc.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'Previsualizar':{
            	 onclick:function(menuItem,menu) { 
            		 previewDocument($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/preview.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'Solicitar eliminación':{
            	 onclick:function(menuItem,menu) { 
            		 deleteDocument($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/delete.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Copiar':{
            	 onclick:function(menuItem,menu) {
            		 treeClipboard.copy($(this).attr('id'), selectedElement);
            	 },
            	 icon:'/share/images/icons/copy.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Cortar':{
            	 onclick:function(menuItem,menu) { 
            		 treeClipboard.cut($(this).attr('id'),selectedElement);

            	 },
            	 icon:'/share/images/icons/cut.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Editar en línea':{
            	 onclick:function(menuItem,menu) { 
            		 editOnGoogleDocs($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/edit_icon.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Comentar':{
            	 onclick:function(menuItem,menu) { 
            		 commentPdf($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/forum-16.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Histórico':{
            	 onclick:function(menuItem,menu) { 
            		 documentHistory($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/versionHistory_icon.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },          	
             {'Flujos de trabajo asociados':{
            	 onclick:function(menuItem,menu) { 
            		 documentWorkflows($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/workflow.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Cerrar':{
            	 icon:'/share/images/icons/close_panel.gif',
            	 disabled:false
             }
             }
             ];

var menu5 = [
             {'Descargar':{
            	 onclick:function(menuItem,menu) { 
            		 downloadDocument($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/download_doc.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'Previsualizar':{
            	 onclick:function(menuItem,menu) { 
            		 previewDocument($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/preview.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Histórico':{
            	 onclick:function(menuItem,menu) { 
            		 documentHistory($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/versionHistory_icon.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },          	
             {'Flujos de trabajo asociados':{
            	 onclick:function(menuItem,menu) { 
            		 documentWorkflows($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/workflow.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Cerrar':{
            	 icon:'/share/images/icons/close_panel.gif',
            	 disabled:false
             }
             }
             ];

var menu6 = [
             {'Actualizar Contenido':{
            	 onclick:function(menuItem,menu) { 
            		 updateContentMenu($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/update.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Actualizar Metadato':{
            	 onclick:function(menuItem,menu) { 
            		 updateDocument($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/update.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Descargar':{
            	 onclick:function(menuItem,menu) { 
            		 downloadDocument($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/download_doc.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'Previsualizar':{
            	 onclick:function(menuItem,menu) { 
            		 previewDocument($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/preview.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'Solicitar eliminación':{
            	 onclick:function(menuItem,menu) { 
            		 deleteDocument($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/delete.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Compartir con Terceros':{
            	 onclick:function(menuItem,menu) { 
            		 sharedDocumentGroup($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/preview.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Copiar':{
            	 onclick:function(menuItem,menu) {
            		 treeClipboard.copy($(this).attr('id'), selectedElement);
            	 },
            	 icon:'/share/images/icons/copy.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Cortar':{
            	 onclick:function(menuItem,menu) { 
            		 treeClipboard.cut($(this).attr('id'),selectedElement);

            	 },
            	 icon:'/share/images/icons/cut.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Editar en línea':{
            	 onclick:function(menuItem,menu) { 
            		 editOnGoogleDocs($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/edit_icon.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'Comentar':{
            	 onclick:function(menuItem,menu) { 
            		 commentPdf($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/forum-16.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Histórico':{
            	 onclick:function(menuItem,menu) { 
            		 documentHistory($(this).attr('id'), $(this).html());
            	 },
            	 icon:'/share/images/icons/versionHistory_icon.gif',
            	 disabled:checkDocumentalRol("editor")
             }
             },          	
             {'Flujos de trabajo asociados':{
            	 onclick:function(menuItem,menu) { 
            		 documentWorkflows($(this).attr('id'));
            	 },
            	 icon:'/share/images/icons/workflow.gif',
            	 disabled:checkDocumentalRol("consumer")
             }
             },
             {'':{
            	 disabled:true
             }
             },
             {'Cerrar':{
            	 icon:'/share/images/icons/close_panel.gif',
            	 disabled:false
             }
             }
             ];

function count(classification) {
	var oldVal = null;
	var part1= null;
	var part2 = null;
	$.ajax({
		url : '/share/page/dashlets/count.json',
		type : "get",
		dataType : "json",
		async : true,
		data : {
			nodeType : nodeType,
			nodeId : nodeId,
			uuid : classification
		},
		success : function(data) {
			oldVal= $("#label_"+classification).html();
			var one = oldVal.lastIndexOf('(');
			var two = oldVal.lastIndexOf(')');
			var oneFinal = one +1;
			var twoFinal = two +1;
			part1 = oldVal.slice(0,oneFinal);
			part2 = oldVal.slice(two,twoFinal);
			$("#label_"+classification).html(part1 + data.count + part2);
		}
	});
}

function countTreeForUpdate(classification) {
	var oldVal = null;
	var part1= null;
	var part2 = null;
	$.ajax({
		url : '/share/page/dashlets/count.json',
		type : "get",
		dataType : "json",
		async : true,
		data : {
			nodeType : nodeType,
			nodeId : nodeId,
			uuid : classification
		},
		success : function(data) {
			oldVal= $("#label_"+classification).html();
			var one = oldVal.lastIndexOf('(');
			var two = oldVal.lastIndexOf(')');
			var oneFinal = one +1;
			var twoFinal = two +1;
			part1 = oldVal.slice(0,oneFinal);
			part2 = oldVal.slice(two,twoFinal);
			$("#label_"+classification).html(part1 + data.count + part2);
		}
	});
}

function moveDocument(uuid,classification) {
	$.ajax({
		url:'/share/page/dashlets/moveDocumentPopup',
		type: "GET",
		dataType: "html", 
		async: false,
		data:{
			uuid:uuid,    
			classification:classification 
		},
		success: function(data) {
			popupMedium(data);
		}
	});
}
function moveDocumentArchitecture(uuid,classification) {
	$.ajax({
		url:'/share/page/dashlets/moveDocumentPopupArchitecture',
		type: "GET",
		dataType: "html", 
		async: false,
		data:{
			uuid:uuid,    
			classification:classification 
		},
		success: function(data) {
			popupMedium(data);
		}
	});
}



function site(uuid,classification){
	var siteId = $("#siteId").val();
	if((siteId=="arauco")||(siteId=="Arauco")){
		moveDocument(uuid,classification);
	}
	if((siteId=="Arquitectura")||(siteId=="arquitectura")){
		moveDocumentArchitecture(uuid,classification);
	}

}
function newQuery(name, site) {

	var variable;

	$.ajax({
		url : '/share/page/dashlets/newQuery',
		type : "GET",
		dataType : "JSON",
		async : false,
		data : {
			name : name,
			site : site
		},
		success : function(data) {
			if (data.status > -1) {
				variable=data;
			} else {
				variable=data;
			}
		}
	});

	return variable;
}

function shareFolderClassification(uuidClassification){

    var parents = new Array();
    var siteId = $("#siteId").val();
    var folderName = $("#label_"+uuidClassification).html();

//	popupAlert(folderName);

    bootbox.confirm("Compartir carpeta: "+folderName+" ¿Desea continuar?", "Cancelar", "Aceptar", function(result) {
        if(result==true) {
            if (siteId==="arquitectura"){
                var site = "Ingeniería";
                var name = null;
                var query = newQuery(name, site);
                var uuidNewParent = query.uuid;

                $.ajax({
                    url: '/share/page/dashlets/copyClassification',
                    type: "get",
                    dataType: "json",
                    async: false,

                    data: {
                        nodeType: nodeType,
                        siteId: siteId,                        
                        uuidClassification: uuidClassification,
                        uuidNewParent: uuidNewParent
                    },
                    success: function (data) {
                        if (data.status>-1) {

//                        data.resultSet.length;
//                        for (var i = 0; i < data.resultSet.length; i++) {
//                            parents[i] = data.resultSet[i].uuid;
//                        }

//                        large = parents.length - 1;

                        }

                        popupSuccess("Se compartió el archivo con éxito");
                    }
                });
            } else if (siteId==="arauco"){
                var site = "Arquitectura";
                var name = null;
                var query =newQuery(name, site);
                var uuidNewParent = query.uuid;

                $.ajax({
                    url: '/share/page/dashlets/copyClassification',
                    type: "get",
                    dataType: "json",
                    async: false,

                    data: {
                        nodeType: nodeType,
                        siteId: siteId,                        
                        uuidClassification: uuidClassification,
                        uuidNewParent: uuidNewParent
                    },
                    success: function (data) {
                        if (data.status>-1) {

//                        data.resultSet.length;
//                        for (var i = 0; i < data.resultSet.length; i++) {
//                            parents[i] = data.resultSet[i].uuid;
//                        }

//                        large = parents.length - 1;

                        }

                        popupSuccess("Se compartió el archivo con éxito");
                    }
                });
            }
        }
    }).addClass("mdsuccess").attr('id','smallModal');
}

function parentRecurseSite(uuid_archivo, classification, nameDocument) {
	var parents = new Array();
	var siteId = $("#siteId").val();

	bootbox.confirm("Compartir documento: "+nameDocument+" ¿Desea continuar?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url : '/share/page/dashlets/parentRecurseFolders.json',
				type : "get",
				dataType : "json",
				async : false,
				data : {
					uuid : classification
				},
				success : function(data){

					if (data.status>-1){

						for( var i =0; i < data.resultSet.length;i++ ){
							parents[i] =data.resultSet[i].uuid;
						}
						var  large=0 ;

						large=parents.length - 1;

						var sitee = "Arquitectura";
						var namey = null;
						var Queryy =newQuery(namey, sitee);
						var folderQ = Queryy.uuid;

						var sitee2 = "Ingeniería";
						var namey2 = null;
						var Queryy2 = newQuery(namey2, sitee2);
						var folderI = Queryy2.uuid;

						if (siteId=="arauco"){

							if (parents[large] == folderI || parents[large] == undefined)// ing
							{
								var name ="Compartida";
								var site ="Arquitectura";
								var result=newQuery(name, site);
								var folder = result.uuid;

								if (result.status==1)  {

									newclassify(folder, uuid_archivo,siteId);
									popupSuccess("Se compartió el archivo con éxito");

								}else{

									var parent = folderQ; //arq
									var name = "Compartida";

									$.ajax({
										url:'/share/page/dashlets/addClassification.json',
										type: "get",
										dataType: "json",  
										async: true,  	
										data : {
											parent : parent,
											name : name
										},
										success:   function(data) {

											var newClassification = data.uuid;

											newclassify(newClassification,uuid_archivo,siteId);

											if(data.status>0){
												bootbox.dialog('Se ha creado la carpeta '+ data.name,[{
													backdrop: true,
													"label" : "Salir",
													"callback": function() {
														$('#alertparameters').remove();	
														$('#delete').remove();
														$('#Share').removeClass('modal-open');
														$('#Share').removeClass('modal-backdrop fade in');
														popupSuccess("Se compartió el archivo con éxito");
													}
												}]).addClass("mdsuccess").attr('id','alertparameters');
												$('.modal-backdrop').attr('id','delete');
												loadChildren(parent);
											}else{
												bootbox.alert(data.message).addClass("mdalert");
											}
										}
									});
								}
							}
						}else{

							if (siteId=="arquitectura"){

								if (parents[large] == folderQ || parents[large] == undefined)// ing
								{
									var name ="Compartida";
									var site ="Ingeniería";
									var result=newQuery(name, site);
									var folder = result.uuid;

									if (result.status==1)  {

										newclassify(folder, uuid_archivo,siteId);
										popupSuccess("Se compartió el archivo con éxito");

									}else{

										var parent = folderI; 
										var name = "Compartida";

										$.ajax({
											url:'/share/page/dashlets/addClassification.json',
											type: "get",
											dataType: "json",  
											async: true,  	
											data : {
												parent : parent,
												name : name
											},
											success:   function(data) {
												var newClassification = data.uuid;
												newclassify(newClassification,uuid_archivo,siteId);

												if(data.status>0){
													popupSuccess("Se compartió el archivo con éxito");

//													loadChildren(parent);

												}else{
													popupSuccess(data.message);
												}
											}
										});							
									}
								}	
							}
						}
					}
				}
			});
		}
	}).addClass("mdsuccess").attr('id','smallModal'); 
}

function newclassify(newClassification, uuid,siteId) {
	var trueFalse = false;
	$.ajax({
		url : '/share/page/dashlets/new_classify.json',
		type : "get",
		dataType : "json",
		async : false,
		data : {

			newClassification : newClassification,
			uuid : uuid,
			siteId : siteId
		},
		success : function(data) {

		}
	});

	return trueFalse;
}

function getMallProjectReclasificate(){
	var idMall = $('#mall option:selected').val();  
	$("#mall").bind("change", function(){
		if(idMall!= 0){
			$("#etapasProyecto").empty();
			$("#etapasProyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
		}
	});	

	$.ajax({
		url:'/share/page/dashlets/getMallProjectList?id='+ idMall ,
		type: "GET",
		dataType: "json", 
		async: false,
		data:{

		},
		success:function(data){
			$("#proyecto").html('');
			$("#proyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
			for(var i=0; i < data.resultSet.length; i++ ){
				if((data.resultSet[i].id!='' && data.resultSet[i].id!=null && data.resultSet[i].id!=undefined)&& (data.resultSet[i].name!='' && data.resultSet[i].name!=null && data.resultSet[i].name!=undefined)){
					$("#proyecto").append('<option value="'+data.resultSet[i].id+'">'+data.resultSet[i].name+'</option>');
				}else{
					alert("ocurrio un error");
				}
			}
		},
	});
}

function architectureProject(){
	var idMall = $('#mall option:selected').val();  
	$.ajax({
		url:'/share/page/dashlets/getArchitectureProjectList?id='+ idMall ,
		type: "GET",
		dataType: "json", 
		async: false,
		data:{
		},
		success:function(data){
			$("#proyecto").html('');
			$("#proyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
			for(var i=0; i < data.resultSet.length; i++ ){
				if((data.resultSet[i].id!='' && data.resultSet[i].id!=null && data.resultSet[i].id!=undefined)&& (data.resultSet[i].name!='' && data.resultSet[i].name!=null && data.resultSet[i].name!=undefined)){
					$("#proyecto").append('<option value="'+data.resultSet[i].id+'">'+data.resultSet[i].name+'</option>');
				}else{
					alert("ocurrio un error");
				}
			}

		},
	});
	var sel= $('#elegir option:selected').val(); 
	$("#proyecto").bind("change", function(){
		if(sel== 1){
			$("#etapasProyecto").empty();
			$("#etapasProyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
			statusProject();
		}
	});		
}


function architectureSuc(){
	var idMall = $('#mall option:selected').val();  
	var titulo="Suc";
	$.ajax({
		url:'/share/page/dashlets/getArchitectureSucList?id='+ idMall ,
		type: "GET",
		dataType: "json", 
		async: false,
		data:{

		},
		success:function(data){
			$("#proyecto").html('');
			$("#proyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
			for(var i=0; i < data.resultSet.length; i++ ){
				if(data.resultSet[i].id!='' && data.resultSet[i].id!=null && data.resultSet[i].id!=undefined){
					$("#proyecto").append('<option value="'+data.resultSet[i].id+'">'+data.resultSet[i].succode+'</option>');
				}else{
					alert("ocurrio un error");
				}
			}

		},
	});
	var sel= $('#elegir option:selected').val(); 
	$("#proyecto").bind("change", function(){
		if(sel== 2){
			$("#Sucproyecto").empty();
			$("#Sucproyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
			sucProject();
		}
	});		

}

function sucProject(){
	var idSuc = $('#proyecto option:selected').val(); 
	$.ajax({
		url:'/share/page/dashlets/getSucProjectList?id='+ idSuc ,
		type: "GET",
		dataType: "json", 
		async: false,
		data:{

		},
		success:function(data){
			$("#proyectoSuc").html('');
			$("#proyectoSuc").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
			for(var i=0; i < data.resultSet.length; i++ ){
				if((data.resultSet[i].id!='' && data.resultSet[i].id!=null && data.resultSet[i].id!=undefined)&& (data.resultSet[i].name!='' && data.resultSet[i].name!=null && data.resultSet[i].name!=undefined)){
					$("#Sucproyecto").append('<option value="'+data.resultSet[i].id+'">'+data.resultSet[i].name+'</option>');
				}else{
					alert("ocurrio un error");
				}
			}

		},
	});
}


function statusProject(){

	var elegir = $('#elegir option:selected').val();  
	var id = null;


	if(elegir == 1){
		id = $('#proyecto option:selected').val();  
	}else{
		id = $('#Sucproyecto option:selected').val(); 
	}
	openWaiting();
	$.ajax({
		url:'/share/page/dashlets/statusProject?id='+ id ,
		type: "GET",
		dataType: "json", 
		async: false,
		data:{
		},
		success:function(data){
			$("#etapasProyecto").html('');
			$("#etapasProyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
			for(var i=0; i < data.resultSet.length; i++ ){
				if(data.resultSet[i].id!='' && data.resultSet[i].id!=null && data.resultSet[i].id!=undefined){
					stageDetails = detailsStage(data.resultSet[i].id);
					$("#etapasProyecto").append('<option value="'+data.resultSet[i].id+'">'+stageDetails.stageName+'</option>');
				}else{
					alert("ocurrio un error");
					closeWaiting();
				}
			}
			closeWaiting();
		},
	});


}

function selectOption(){
	var idMall = $('#mall option:selected').val();  
	$("#mall").bind("change", function(){
		if(idMall!= 0){
			$("#etapasProyecto").empty();
			$("#etapasProyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');

			$("#elegir").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
			$("#Sucproyecto").empty();
			$("#Sucproyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
			$("#proyecto").empty();
			$("#proyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');

		}
	});	

	var seleccion = $('#elegir option:selected').val();	
	if(seleccion==1){
		$("#titulo").html('');
		$("#titulo").append("Proyectos");
		$("#etapasProyecto").empty();
		$("#etapasProyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
		$("#Sucproyecto").empty();
		$("#Sucproyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
		$("#proyecto").empty();
		$("#proyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');

		architectureProject();
	}
	if(seleccion== 2){
		$("#titulo").html('');
		$("#titulo").append("Suc");
		$("#etapasProyecto").empty();
		$("#etapasProyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
		$("#Sucproyecto").empty();
		$("#Sucproyecto").append('<option value="" disabled selected style ="display:none; " >Seleccionar</option>');
		architectureSuc();
	}

}


function reclassifyDocument(uuid){
	var idMall=$('#mall option:selected').val();
	var idProject = $('#proyecto option:selected').val();
	var idStatusProject = $('#etapasProyecto option:selected').val();
	var namestatusProject = $('#etapasProyecto option:selected').text();
	var nameProject = $('#proyecto option:selected').text();
	var sel = $('#elegir option:selected').val();
	var sucProyecto= $('#Sucproyecto option:selected').val();
	var nameSucProyect= $('#Sucproyecto option:selected').text();
	if (nameProject=="Seleccionar"){
		nameProject=null;
	}
	if (namestatusProject=="Seleccionar"){
		namestatusProject=null;
	}
	if (nameSucProyect=="Seleccionar"){
		nameSucProyect=null;
	}
	if (sel==2){
		var sucNumberID = idProject;
		var sucNumber= nameProject;
		idProject=null;
		idProject=sucProyecto;
		project=nameSucProyect;
	}
	var mall = null;
	var mallID = null;
	var country = null;
	var countryID = null;
	var mallIDSAP = null;
	var mallType = null;
	var stage =namestatusProject ;
	var stageID =idStatusProject;
	var project =nameProject;
	if(idMall != null && idMall != undefined && idMall != ''){
		console.log("idMall: "+idMall);
		mallData = detailsMall(idMall);
		if(mallData != null && mallData != undefined && mallData != ''){
			console.log("mallData: "+mallData);
			mall = mallData.name;
			mallID = mallData.id;
			country = mallData.countryName;
			countryID = mallData.countryId;
			mallIDSAP = mallData.idMallSap;
			mallType = mallData.mallType;
		}
		$.ajax({
			url:'/share/service/dashlets/reclassificateDocument',
			type: "GET",
			dataType: "json",  
			async: false,
			data: 	{
				uuid : uuid,
				mall : mall,
				mallID : mallID,
				country : country,
				countryID : countryID,
				mallIDSAP : mallIDSAP,
				mallType : mallType,
				idProject : idProject,
				stageID : stageID,
				stage : stage,
				project : project,
				sucNumberID : sucNumberID,
				sucNumber : sucNumber,
			},
			success: function(data) {
				if(data.state=="1") {
					popupSuccess('Documento reclasificado exitosamente ');
					selectNode(selectedElement);
				}else{
					popupAlert('Documento no  pudo ser reclasificado ');
				}
			},

		});	

	}else{
		popupAlert('Atención, debe seleccionar al menos un mall ');
		return false;
	}
}

function removePopUp(){
	//var id=$('#move option:selected').val();
	$('#mallDocumentMax').remove();	
	$('#delete').remove();
	$('#Share').removeClass('modal-open');
	$('#Share').removeClass('modal-backdrop fade in');

}

function detailsMall(idMall){
	var resultData = null;
	$.ajax({
		url: '/share/page/dashlets/editMall',
		type: "get",
		dataType: "json",  
		async: false,  
		data: {
			filter : idMall
		},
		success:   function(data) {
			console.log(data);
			if(data.status>0){
				resultData = data;
			}
		},

	});

	return resultData;
}


function detailsStage(idStage){

	var resultData = null;

	$.ajax({
		url: '/share/page/dashlets/detailsStage',
		type: "get",
		dataType: "json",  
		async: false,  
		data: {
			idStage : idStage
		},
		success:   function(data) {
			console.log(data);
			if(data.status != "-1"){
				resultData = data;
			}
		},

	});

	return resultData;

}

function parentRecurse(classification) {
	var parents = new Array();
	$.ajax({
		url : '/share/page/dashlets/parentRecurseFolders.json',
		type : "get",
		dataType : "json",
		async : true,
		data : {
			uuid : classification
		},
		success : function(data){
			if(data.status>-1){
				for( var i =0; i < data.resultSet.length;i++ ){
					parents[i] =data.resultSet[i].uuid;
				}
				popupSuccess("Copia completada");
			} else {
				popupAlert("No se ha podido realizar la operación");
			}
			for(var i= 0; i < parents.length; i++){
				count(parents[i]);
			}
		}
	});
}

function classify(classification, newClassification, uuid) {
	var trueFalse = false;
	$.ajax({
		url : '/share/page/dashlets/pasteFile.json',
		type : "get",
		dataType : "json",
		async : false,
		data : {
			classificationId : classification,
			newClassification : newClassification,
			uuid : uuid
		},
		success : function(data) {
			if (data.status > -1) {
				trueFalse =  true;
			} else {
				trueFalse= false;
				popupAlert("No se pudo realizar la operación");
			}
		}
	});
	return trueFalse;
}

function unClassify(classification, uuid) {
	$.ajax({
		url : '/share/page/dashlets/removeClassification.json',
		type : "get",
		dataType : "json",
		async : false,
		data : {
			parent : classification,
			uuid : uuid
		},
		success : function(data) {
			if (data.status > -1) {

			} else {
				popupAlert("No se pudo realizar la operación");
			}
		}
	});
}

function addClassification() {
	var parent = $("#classificationParent").val();
	var name = $("#classificationName").val();
	$.ajax({
		url : '/share/page/dashlets/addClassification.json',
		type : "get",
		dataType : "json",
		async : true,
		data : {
			parent : parent,
			name : name
		},
		success : function(data) {
			if (data.status > 0) {
				popupSuccess('' +'"'+ data.name + '"'+' ha sido añadida con éxito');
				loadChildren(parent);

				$("label:contains('calculando...')").each(function(){
					var tagId = $(this).attr('id');	

					$.ajax({
						url:'/share/page/dashlets/count.json',
						type: "get",
						dataType: "json",  
						async: true,
						data : {
							nodeType : nodeType,
							nodeId : nodeId,
							uuid : $(this).attr('id').replace("label_", "")
						},
						success: function(data) {
							var oldVal = $("#" + tagId).html();
							$("#" + tagId).html(oldVal.replace("calculando...", data.count));
						}
					});
				});

			} else {
				popupAlert("No se pudo realizar la operación");
			}
		}
	});
}

function editClassification(id){
	$.ajax({
		url:'/share/page/dashlets/editClassification',
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			$('#editClassificationDialog').remove();
			popupBoxDialog(data);
			$("#classificationParent").val(id);
		}
	});
}

function downloadDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/downloadDocumentPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get", 
		dataType: "html",
		async: false,
		success: function(data) {
			popupBoxDialog(data);
		}
	});
}

function addImportantDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/addImportartDocument?uuid=' + uuid + '&idType='+id+'&nodeType=' + nodeType,
		type: "get", 
		dataType: "html",
		async: false,
		success: function(data) {
			if(data==0){
				popupAlert("Este documento ya ha sido marcado anteriormente como importante");
			}else{
				popupSuccess("El documento: " + documentName + " ha sido marcado como importante");
			}
			refreshImportantDocumet();
		}
	});
}

function previewDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/previewDocumentPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupDefault(data);
//			$('#previewDocumentDialog').remove();
		}
	});
}


function documentHistory(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/documentHistoryPopup?uuid=' + uuid + '&documentName=' + documentName,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupBoxDialog(data);
		}
	});
}

function editOnGoogleDocs(uuid, documentName) {
	var protocol = window.location.protocol;
	var host = window.location.host;
	var pathname = window.location.pathname;
	var protocolhost = protocol + "//" + host;
	var stateUrl = protocol + "//" + host + "/share/proxy/alfresco/";
	var returnUrl = pathname.split("/share/page/");
	var searchUrl = window.location.search;
	var autoclosepage = "dashlets/autoClosePage";
	var authUrl = protocolhost + "/share/proxy/alfresco/googledocs/authurl?state="+stateUrl+"&override=true";
	var uploadUrl = protocolhost + "/share/proxy/alfresco/googledocs/uploadContent?nodeRef=workspace%3A%2F%2FSpacesStore%2F"+uuid;
	//var editUrl = protocolhost + "/share/page/site/arauco/googledocsEditor?nodeRef=workspace%3A%2F%2FSpacesStore%2F"+uuid+"&return="+returnUrl[1]+searchUrl;
	var editUrl = protocolhost + "/share/page/site/arauco/googledocsEditor?nodeRef=workspace%3A%2F%2FSpacesStore%2F"+uuid+"&return="+autoclosepage;

	$.ajax({
		url:'/share/proxy/alfresco/arauco/getDocumentMetadata?uuid='+uuid+'&aspect=documentTypeAspectsList&prefix=pa', 
		type: "get",
		dataType: "json",
		async: false,
		success: function(md) {
			var mimetype = md.document.docinfo.mimetype;
			var locked = md.document.docinfo.locked;
			//var exportableUrl = protocolhost + "/share/proxy/alfresco/googledocs/exportable?mimetype=application/vnd.openxmlformats-officedocument.spreadsheetml.sheet&";
			var exportableUrl = protocolhost + "/share/proxy/alfresco/googledocs/exportable?mimetype="+mimetype+"&";

			$.ajax({
				url: authUrl, 
				type: "get",
				dataType: "json",
				async: false,
				success: function(data) {
					$.ajax({
						url: exportableUrl, 
						type: "get",
						dataType: "json",
						async: false,
						success: function(data2) {
							if (data2.export_action == 'default')
							{
								// si el mimetype es valido se sube drive
								Alfresco.GoogleDocs.requestOAuthURL({
									onComplete : {
										fn : function() {
											// upload
											$.ajax({
												url: uploadUrl, 
												type: "get",
												dataType: "json",
												async: false,
												success: function(data3) {												
													// mostrando iframe
													//window.location.assign(editUrl);
													window.open(editUrl,'_blank');
													// fin upload
												},
												error: function (request, status, error) {
													// si esta bloqueado editar directamente en google docs
													if (locked == 'Yes') {
														window.open(editUrl,'_blank');
													} else {														
														//alert(request.responseText);
														popupAlert("No se pudo cargar el documento en Google Docs");
													}
												}
											});

										},
										scope : this
									},
									override : true
								})

							} else {
								popupAlert("Tipo de documento no valido para editar en Google Docs");
							}
							// fin exportable
						},
						error: function (request, status, error) {
							//alert(request.responseText);
							popupAlert("Tipo de documento no valido para editar en Google Docs");
						}
					});
					// fin auth	
				},
				error: function (request, status, error) {
					//alert(request.responseText);
					popupAlert("No se puede autenticar la URL para editar en Google Docs");
				}
			});
		}
	});
}

function commentPdf(uuid) {

	if($('#searchCommentPDF').length){
		var siteLocation = $('#searchCommentPDF').val();
		var commentPdfUrl = '/share/page/site/'+siteLocation+'/comment-pdf?uuid=workspace://SpacesStore/' + uuid;
		window.location.assign(commentPdfUrl);
	}

	if(nodeType == 1 || nodeType == 2 || nodeType == 5 ){
		var commentPdfUrl = '/share/page/site/arauco/comment-pdf?uuid=workspace://SpacesStore/' + uuid;
		window.location.assign(commentPdfUrl);
	}

	if(nodeType == 3 || nodeType == 4 || nodeType == 6 || nodeType == 7 || nodeType == 9 || nodeType == 10 ){
		var commentPdfUrl = '/share/page/site/arquitectura/comment-pdf?uuid=workspace://SpacesStore/' + uuid;
		window.location.assign(commentPdfUrl);
	}
}

function documentWorkflows(uuid) {
	$.ajax({
		url:'/share/page/dashlets/showDocumentWorkflowsPopup?uuid=' + uuid,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupMedium(data);
		}
	});
}

function deleteDocument(uuid){
	bootbox.confirm("Se iniciara una petición de anulación del documento. ¿Desea continuar?", "Cancelar", "Aceptar", function(result) {
		if(result==true){
			$.ajax({
				url:'/share/page/dashlets/deleteDocument?uuid='+uuid,
				type: "get",
				dataType: "json",
				success:   function(data) {
					if(data.status == true){
						popupSuccess("Petición de anulación iniciada exitosamente"); 
					}else{
						popupAlert("No se pudo iniciar la petición de anulación");
					}
				}
			});
		}
	}).addClass("mdsuccess").attr('id','smallModal'); 
}

function updateDocument(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/displayUpdateDocument?uuid=' + uuid,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupDefault(data);
		}
	});
}

$(document).ready(function() {
	nodeType = getUrlVars()["nodeType"];
	if(nodeType != null || nodeType != undefined){
		nodeId = getUrlVars()["id"].replace(".", "");

		$('.parent ul').hide();
		avoidPropagation();
		bindMenu();
		if(nodeType == 8){
			bindDocumentMenu();
		}

		googleTest();
		var siteId = $("#siteId").val();

		if(nodeType != null && nodeType != undefined && nodeType != 8){
			listExpiration(id , nodeType , nodeId);
		}

		$("label:contains('calculando...')").each(function(){
			var tagId = $(this).attr('id');	
			$.ajax({
				url:'/share/page/dashlets/count.json',
				type: "get",
				dataType: "json",  
				async: true,
				data : {
					nodeType : nodeType,
					nodeId : nodeId,
					uuid : $(this).attr('id').replace("label_", "")
				},
				success: function(data) {
					var oldVal = $("#" + tagId).html();
					$("#" + tagId).html(oldVal.replace("calculando...", data.count));
				}
			});
		});
	}
});

function selectNode(element){
	$("#" + element).siblings().find(".selectedFolder").removeClass("selectedFolder");
	$("#" + element).parents().find(".selectedFolder").removeClass("selectedFolder");
	$("#" + element).addClass("selectedFolder");
	selectedElement=element;

	$.ajax({
		url:'/share/page/dashlets/folderFiles',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			parent : element,
			nodeType : nodeType,
			nodeId : nodeId
		},
		success:   function(data) {
			$("#filesInFolder").html(data);
			bindDocumentMenu();
			countTreeForUpdate(element);
		}
	});
}

function googleTest(){
	$.ajax({
		url:'/share/page/dashlets/document-actions?nodeRef=764fe255-8775-4011-a1a3-e4f430c440eb&htmlid=788448',
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			$("#googleTest").html(data);
		}
	});
}

function avoidPropagation(){
	$(".element").click(function(event){
		event.stopPropagation();
	});
}

function bindMenu(){
	$('.parent').off('contextmenu');
	$('.parent').contextMenu(menu1,{theme:'vista'});
}

function bindDocumentMenu(){
	$('.documentNode').off('contextmenu');
	if(nodeType == null || nodeType == undefined){
		$('.documentNode').contextMenu(menu3,{theme:'vista'});
	}

	switch(nodeType) {
	case "1":
		$('.documentNode').contextMenu(menu2,{theme:'vista'});
		break;
	case "3":
		$('.documentNode').contextMenu(menu2,{theme:'vista'});
		break;
	case "4":
		$('.documentNode').contextMenu(menu2,{theme:'vista'});
		break;
	case "5" :
		$('.documentNode').contextMenu(menu4,{theme:'vista'});
		break;
	case "6" :
		$('.documentNode').contextMenu(menu6,{theme:'vista'});
		break;
	case "7" :
		$('.documentNode').contextMenu(menu4,{theme:'vista'});
		break;
	case "8" :
		$('.documentNode').contextMenu(menu5,{theme:'vista'});
		break;
	case "9":
		$('.documentNode').contextMenu(menu2,{theme:'vista'});
		break;
	case "10":
		$('.documentNode').contextMenu(menu2,{theme:'vista'});
		break;
	default:
	}

}

function toggle(element){
	if($("#" + element).hasClass("loaded")){
		$("#" + element).removeClass("folder");
		$("#" + element).children("img").attr('onclick', "untoggle('" + element + "')");
		$("#" + element).children("img").attr("src", "/share/images/icons/open_folder.png");
		$("#" + element).children("ul").slideToggle();
	}else{
		var entryPointType = nodeType;
		var entryPointId = nodeId;
		$.ajax({
			url:'/share/page/dashlets/children?parent=' + element + '&entryPointType=' + entryPointType + '&entryPointId=' + entryPointId,
			type: "get",
			dataType: "html",  
			async: false,  		
			success:   function(data) {
				$("#" + element).html($("#" + element).html() + data);
				bindMenu();
				avoidPropagation();
				$("#" + element).removeClass("folder");
				$("#" + element).children("img").attr("src", "/share/images/icons/open_folder.png");
				$("#" + element).addClass("loaded");
				$("#" + element).children("img").attr('onclick', "untoggle('" + element + "')");

				$("label:contains('calculando...')").each(function(){
					var tagId = $(this).attr('id');	

					$.ajax({
						url:'/share/page/dashlets/count.json',
						type: "get",
						dataType: "json",  
						async: true,
						data : {
							nodeType : nodeType,
							nodeId : nodeId,
							uuid : $(this).attr('id').replace("label_", "")
						},
						success: function(data) {
							var oldVal = $("#" + tagId).html();
							$("#" + tagId).html(oldVal.replace("calculando...", data.count));
						}
					});

				});

			}
		});
	}
};

function loadChildren(element){
	$("#" + element).children('ul').remove();

	var entryPointType = "none";
	var entryPointId = "none";
	$.ajax({
		url:'/share/page/dashlets/children?parent=' + element + '&entryPointType=' + entryPointType + '&entryPointId=' + entryPointId,
		type: "get",
		dataType: "html",  
		async: false,  		
		success:   function(data) {
			$("#" + element).html($("#" + element).html() + data);
			bindMenu();
			avoidPropagation();
			$("#" + element).children("img").attr("src", "/share/images/icons/open_folder.png");
			$("#" + element).addClass("loaded");
			$("#" + element).children("img").attr('onclick', "untoggle('" + element + "')");
		}
	});

}

function listExpiration(id , nodeType , nodeId){

	$.ajax({
		url:'/share/page/dashlets/listExpiration',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
			id : id,
			nodeType : nodeType,
			nodeId : nodeId
		},
		success:   function(data) {
			$('#expiration').html(data);
			$('#listExpiration').dataTable();
		}
	});
}

function searchTree(){
	bootbox.dialog("Buscando...").addClass("mdsuccess").attr('id','alertparameters');
	$('.modal-backdrop').attr('id','delete');
	var dateFrom = $("#txDateFrom").val();
	var dateTo = $("#txDateTo").val();

	var textToSearch = $("#treeSearchText").val();
	$.ajax({
		url:'/share/page/dashlets/searchTextOnTree',
		type: "get",
		dataType: "html",  
		async: true,  		
		data : {
			parent : selectedElement,
			searchText : textToSearch,
			dateFrom : dateFrom,
			dateTo : dateTo,
			entryPointType : nodeType,
			entryPointId : nodeId
		},
		success:   function(data) {
			$("#alertparameters").remove();
			$('#delete').remove();
			$('#Share').removeClass('modal-open');
			$('#Share').removeClass('modal-backdrop fade in');
			$("#filesInFolder").html(data);
			bindDocumentMenu();
		}
	});
}

function untoggle(element){
	$("#" + element).children("ul").slideToggle();
	$("#" + element).children("img").attr("src", "/share/images/icons/close_folder.png");
	$("#" + element).addClass("folder");
	$("#" + element).children("img").attr("onclick", "toggle('" + element + "')");
};

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value.replace("#", "");;
	});
	return vars;
}

function updateContentMenu(uuid, documentName) {
	$.ajax({
		url:'/share/page/dashlets/updateContentDocument?uuid=' + uuid,
		type: "get",
		dataType: "html",
		async: false,
		success: function(data) {
			popupBoxDialog(data);
		}
	});
}

function filterExpiration(){
	var textExpiration = $("#textExpiration").val();
	var amountDay = $("#amountDay").val();
	var amountMonth = $("#amountMonth").val();
	var txExpirationFrom = $("#txExpirationFrom").val();
	var txExpirationTo = $("#txExpirationTo").val();
	$.ajax({
		url:'/share/page/dashlets/filterExpiration',
		type: "get",
		dataType: "html", 
		data : {
			id : id,
			nodeType : nodeType,
			nodeId : nodeId,
			textExpiration	: textExpiration,
			amountDay	: amountDay, 
			amountMonth	: amountMonth, 
			txExpirationFrom : txExpirationFrom, 
			txExpirationTo	: txExpirationTo 
		},
		success:   function(data) {
			$('#expiration').html(data);
			$('#listExpiration').dataTable();
		}
	});
}


function filterAdvance(){
	if($('#amountDay').prop( "disabled") == false && $('#amountMonth').prop( "disabled") == false){
		$('#amountDay').prop( "disabled", true );
		$('#amountMonth').prop( "disabled", true );
		$('#amountDay').val("0");
		$('#amountMonth').val("0");
		$('#txExpirationFrom').prop( "disabled", false );
		$('#txExpirationTo').prop( "disabled", false );
	}else{
		$('#amountDay').prop( "disabled", false );
		$('#amountMonth').prop( "disabled", false );
		$('#txExpirationFrom').prop( "disabled", true );
		$('#txExpirationTo').prop( "disabled", true );
		$('#txExpirationFrom').val("");
		$('#txExpirationTo').val("");
	}
}

function associatedRepositoryPopup(){
	var site = $("#siteId").val();
	$.ajax({
		url:'/share/page/dashlets/associatedRepository',
		type: "get",
		dataType: "html", 
		success:   function(data) {
			popupDefault(data);
			associatedRepositoryNew();
			associatedRepositoryOld();
		}
	});
}

function associatedRepositoryNew(){
	var site = $("#siteId").val();
	$.ajax({
		url:'/share/page/dashlets/associatedRepositoryNew',
		type: "get",
		dataType: "html", 
		data : {
			site : site
		},
		success:   function(data) {
			$('#treeClassificationTwo').html(data);
			loadTreeNew();
		}
	});
}

function associatedRepositoryOld(){
	var site = $("#siteId").val();
	$.ajax({
		url:'/share/page/dashlets/associatedRepositoryOld',
		type: "get",
		dataType: "html", 
		data : {
			site : site
		},
		success:   function(data) {
			$('#treeClassificationOne').html(data);
			loadTreeOld();
		}
	});
}

function associateToggleOld(element){
	if($("#" + element).hasClass("associateLoadedOld")){
		$("#" + element).removeClass("associateFolderOld");
		$("#" + element).children("img").attr('onclick', "associateUntoggleOld('" + element + "')");
		$("#" + element).children("img").attr("src", "/share/images/icons/open_folder.png");
		$("#" + element).children("ul").slideToggle();
	}
};

function associateToggleNew(element){
	if($("#" + element).hasClass("associateLoadedNew")){
		$("#" + element).removeClass("associateFolderNew");
		$("#" + element).children("img").attr('onclick', "associateUntoggleNew('" + element + "')");
		$("#" + element).children("img").attr("src", "/share/images/icons/open_folder.png");
		$("#" + element).children("ul").slideToggle();
	}else{
		$(".associateLoadedNew").removeClass("associateLoadedNew");
		var entryPointType = nodeType;
		var entryPointId = nodeId;
		var elementassoc = element.replace("assocNew" , "");
		$.ajax({
			url:'/share/page/dashlets/associatedChildrenNew?parent=' + elementassoc + '&entryPointType=' + entryPointType + '&entryPointId=' + entryPointId,
			type: "get",
			dataType: "html",  
			async: false,  		
			success:   function(data) {
				$("#" + element).html($("#" + element).html() + data);
//				bindMenu();
//				avoidPropagation();
				$("#" + element).removeClass("associateFolderNew");
				$("#" + element).children("img").attr("src", "/share/images/icons/open_folder.png");
				$("#" + element).addClass("associateLoadedNew");
				$("#" + element).children("img").attr('onclick', "associateUntoggleNew('" + element + "')");

				$("label:contains('cargando....')").each(function(){
					var tagId = $(this).attr('id');	

					$.ajax({
						url:'/share/page/dashlets/count.json',
						type: "get",
						dataType: "json",  
						async: true,
						data : {
							nodeType : nodeType,
							nodeId : nodeId,
							uuid : $(this).attr('id').replace("namelabelNew_", "")
						},
						success: function(data) {
							var oldVal = $("#" + tagId).html();
							$("#" + tagId).html(oldVal.replace("cargando....", data.count));
						}
					});

				});

			}
		});
	}
};



function loadTreeOld(){
	$("label:contains('calculando....')").each(function(){
		var tagId = $(this).attr('id');	
		$.ajax({
			url:'/share/page/dashlets/associatedCount.json',
			type: "get",
			dataType: "json",  
			async: true,
			data : {
				nodeType : nodeType,
				nodeId : nodeId,
				uuid : $(this).attr('id').replace("namelabelOld_", "")
			},
			success: function(data) {
				var oldVal = $("#" + tagId).html();
				$("#" + tagId).html(oldVal.replace("calculando....", data.count));
			}
		});
	});
}

function loadTreeNew(){
	$("label:contains('cargando....')").each(function(){
		var tagId = $(this).attr('id');	
		$.ajax({
			url:'/share/page/dashlets/count.json',
			type: "get",
			dataType: "json",  
			async: true,
			data : {
				nodeType : nodeType,
				nodeId : nodeId,
				uuid : $(this).attr('id').replace("namelabelNew_", "")
			},
			success: function(data) {
				var oldVal = $("#" + tagId).html();
				$("#" + tagId).html(oldVal.replace("cargando....", data.count));
			}
		});
	});
}

function associateSelectNodeOld(element){
	if($("#" + element).hasClass("associateLoadedOld")){
		$("#" + element).removeClass("associateFolderOld");
		$("#" + element).children("img").attr('onclick', "associateUntoggleOld('" + element + "')");
		$("#" + element).children("img").attr("src", "/share/images/icons/open_folder.png");
		$("#" + element).children("ul").slideToggle();
	}else{
		var elementassoc = element.replace("assocOld" , "");
		$.ajax({
			url:'/share/page/dashlets/associatedFilesForFolder',
			type: "get",
			dataType: "html",  
			async: false,
			data : {
				parent : elementassoc,
				nodeType : nodeType,
				nodeId : nodeId
			},
			success:   function(data) {
				$("#" + element).html($("#" + element).html() + data);
				associateCountTreeForUpdateOld(element);
			}
		});

		var entryPointType = nodeType;
		var entryPointId = nodeId;
		var elementassoc = element.replace("assocOld" , "");
		$.ajax({
			url:'/share/page/dashlets/associatedChildrenOld?parent=' + elementassoc + '&entryPointType=' + entryPointType + '&entryPointId=' + entryPointId,
			type: "get",
			dataType: "html",  
			async: false,  		
			success:   function(data) {
				$("#" + element).html($("#" + element).html() + data);
				$("#" + element).removeClass("associateFolderOld");
				$("#" + element).children("img").attr("src", "/share/images/icons/open_folder.png");
				$("#" + element).addClass("associateLoadedOld");
				$("#" + element).children("img").attr('onclick', "associateUntoggleOld('" + element + "')");
				$("label:contains('calculando....')").each(function(){
					var tagId = $(this).attr('id');	
					$.ajax({
						url:'/share/page/dashlets/associatedCount.json',
						type: "get",
						dataType: "json",  
						async: true,
						data : {
							nodeType : nodeType,
							nodeId : nodeId,
							uuid : $(this).attr('id').replace("namelabelOld_", "")
						},
						success: function(data) {
							var oldVal = $("#" + tagId).html();
							$("#" + tagId).html(oldVal.replace("calculando....", data.count));
						}
					});
				});
			}
		});
	}
}

function associateSelectNodeNew(element){
	$(".associateLoadedNew").removeClass("associateLoadedNew");
	$("#"+element+"assocNew").addClass("associateLoadedNew");
	$("#" + element).siblings().find(".selectedFolder").removeClass("selectedFolder");
	$("#" + element).parents().find(".selectedFolder").removeClass("selectedFolder");
	$("#" + element).addClass("selectedFolder");
	associateElement=element;

	$.ajax({
		url:'/share/page/dashlets/associatedFilesForFolder',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			parent : element,
			nodeType : nodeType,
			nodeId : nodeId
		},
		success:   function(data) {
//			$("#associateFilesInFolder").html(data);
//			bindDocumentMenu();
//			alert(data);
			associateCountTreeForUpdateNew(element);
		}
	});
}

function associateCountTreeForUpdateOld(classification) {
	var oldVal = null;
	var part1= null;
	var part2 = null;
	$.ajax({
		url : '/share/page/dashlets/associatedCount.json',
		type : "get",
		dataType : "json",
		async : true,
		data : {
			nodeType : nodeType,
			nodeId : nodeId,
			uuid : classification
		},
		success : function(data) {
			oldVal= $("#namelabelOld_"+classification).html();
			if(oldVal != undefined){
				if(oldVal.indexOf('(') > 0 && oldVal.indexOf(')') > 0){
					var one = oldVal.lastIndexOf('(');
					var two = oldVal.lastIndexOf(')');
					var oneFinal = one +1;
					var twoFinal = two +1;
					part1 = oldVal.slice(0,oneFinal);
					part2 = oldVal.slice(two,twoFinal);
					$("#namelabelOld_"+classification).html(part1 + data.count + part2);
				}
			}
		}
	});
}

function associateCountTreeForUpdateNew(classification) {
	var oldVal = null;
	var part1= null;
	var part2 = null;
	$.ajax({
		url : '/share/page/dashlets/count.json',
		type : "get",
		dataType : "json",
		async : true,
		data : {
			nodeType : nodeType,
			nodeId : nodeId,
			uuid : classification
		},
		success : function(data) {
			oldVal= $("#namelabelNew_"+classification).html();
			var one = oldVal.lastIndexOf('(');
			var two = oldVal.lastIndexOf(')');
			var oneFinal = one +1;
			var twoFinal = two +1;
			part1 = oldVal.slice(0,oneFinal);
			part2 = oldVal.slice(two,twoFinal);
			$("#namelabelNew_"+classification).html(part1 + data.count + part2);
		}
	});
}

function associateUntoggleOld(element){
	$("#" + element).children("ul").slideToggle();
	$("#" + element).children("img").attr("src", "/share/images/icons/close_folder.png");
	$("#" + element).addClass("folder");
	$("#" + element).children("img").attr("onclick", "associateToggleOld('" + element + "')");
};

function associateUntoggleNew(element){
	$("#" + element).children("ul").slideToggle();
	$("#" + element).children("img").attr("src", "/share/images/icons/close_folder.png");
	$("#" + element).addClass("folder");
	$("#" + element).children("img").attr("onclick", "associateToggleNew('" + element + "')");
};


function paintLabelSelected(IdSelected){
	$(".labelSelected").removeClass("labelSelected");
	$("#"+IdSelected).addClass("labelSelected");
}

function associatedRepository(){
	if($(".labelSelected").length > 0 && $(".associateElementNew.associateParentNew.associateLoadedNew").length > 0){
		var uuidDocument = $(".labelSelected").attr('id').replace("assocOld" , "");
		var uuidFolder = $(".associateElementNew.associateParentNew.associateLoadedNew").attr('id').replace("assocNew" , "");
		alert(uuidDocument);
		alert(uuidFolder);
		$.ajax({
			url:'/share/page/dashlets/associatedRepositoryDocument',
			type: "get",
			dataType: "html",  
			async: false,
			data : {
				nodeType : nodeType,
				nodeId : nodeId,
				uuidDocument : uuidDocument,
				uuidFolder : uuidFolder
			},
			success:   function(data) {
//				associateCountTreeForUpdateOld(uuidFolder);
				associateSelectNodeNew(uuidFolder);
				$(".labelSelected").removeClass("labelSelected");
				$(".associateElementNew.associateParentNew.associateLoadedNew").removeClass("associateLoadedNew");
				popupSuccessTender("Documento asociado correctamente");
			}
		});
	}else{
		popupAlert("Debe seleccionar un documento y destino para asociar");
	}
}
