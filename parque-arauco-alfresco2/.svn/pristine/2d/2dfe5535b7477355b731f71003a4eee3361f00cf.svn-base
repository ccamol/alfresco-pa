//securityMatrix.apply();
var URLLIST = "/alfresco/service/pa/artifacts/searchList";
var OPTION = '<option value="$ID">$NOMBRE</option>';
var URLCREATEFORM = '/alfresco/service/components/siglo/createform';
var URL_UPLOAD_DOCUMENT = '';

var objDocumentType = [];
var objSubseccion = [];
var objSerie = [];
var noOfDocuments = 1;

<script type="text/javascript">//<![CDATA[
$(document).ready(function() {
	callSubseccion("1");//buscar seccion
	
	
	$("#cmbSubSeccion").change(function() {
		callSerie();			
	});
	
	$("#cmbSerie").change(function() {
		callTipoDocumento();
	});
	
	$("#cmbTipoDocumento").change(function() {
		callCreateForm();
	});
	
	fileInputListener();
	radioBtnPreviewListener();
});
//]]></script>
function callSubseccion(_idSeccion){
//query
//listName
	$.ajax({
		url: URLLIST,
		type: "POST",
		dataType: "json",  
		data: { listName : "subsection",
				query : ' AND @paList\\:sectionID:"'+_idSeccion+'"'} ,
		success:function(data){
			objSubseccion = data;
			responseSubseccion();					
		},
		error:function (xhr, ajaxOptions, thrownError){
			alert("Error al cargar subseccion");
		}  
	});
}

function responseSubseccion(){
	$("#cmbSubSeccion option").remove();
	$("#cmbSubSeccion").append(OPTION.replace("$ID","0").replace("$NOMBRE","Seleccione..."));
	for(var i=0; i<objSubseccion.resultSet.length; i++){
		$("#cmbSubSeccion").append(OPTION.replace("$ID",objSubseccion.resultSet[i].id).replace("$NOMBRE",objSubseccion.resultSet[i].name));
	}		
}

function callSerie(){
	$.ajax({
		url: URLLIST,
		type: "POST",
		dataType: "json",  
		data: { listName : "serie",
				query : ' AND @paList\\:subsectionID:"'+$("#cmbSubSeccion").val()+'"'} ,
		success:function(data){
			objSerie = data;
			responseSerie();					
		},
		error:function (xhr, ajaxOptions, thrownError){
			alert("Error al cargar subseccion");
		}  
	});
}

function responseSerie(){
	$("#cmbSerie option").remove();
	$("#cmbSerie").append(OPTION.replace("$ID","0").replace("$NOMBRE","Seleccione..."));
	for(var i=0; i<objSerie.resultSet.length; i++){
		$("#cmbSerie").append(OPTION.replace("$ID",i).replace("$NOMBRE",objSerie.resultSet[i].name));
	}	
}

function callTipoDocumento(){

	var docQuery = "";
	var array = [];
	array = objSerie.resultSet[$("#cmbSerie").val()].documentType;
	
	for(var c=0; c<array.length ; c++){
		//alert("C:" + c);
		if(array.length == 1 ){
			docQuery = docQuery + " ( @paList\\:id:" + array[c].Type + " )";
		}else{
			if(c==0){
				docQuery = docQuery + " ( @paList\\:id:" + array[c].Type;
			}else{
				if(c == array.length -1){
					docQuery = docQuery + " OR @paList\\:id:" + array[c].Type + " )";
				}else{
					docQuery = docQuery + " OR @paList\\:id:" + array[c].Type;
				}
			}
		}			
	}		
	
	$.ajax({
		url: URLLIST,
		type: "POST",
		dataType: "json",  
		data: { listName : "documentType",
				query : ' AND ' + docQuery} ,
		success:function(data){
			objDocumentType = data;
			responseDocumentType();					
		},
		error:function (xhr, ajaxOptions, thrownError){
			alert("Error al cargar subseccion");
		}  
	});	
}

function responseDocumentType(){
	$("#cmbTipoDocumento option").remove();
	$("#cmbTipoDocumento").append(OPTION.replace("$ID","0").replace("$NOMBRE","Seleccione..."));
	for(var i=0; i<objDocumentType.resultSet.length; i++){
		$("#cmbTipoDocumento").append(OPTION.replace("$ID",objDocumentType.resultSet[i].id).replace("$NOMBRE",objDocumentType.resultSet[i].name));
	}
}

function callCreateForm(){
	var id=$("#cmbTipoDocumento").val();
	$.ajax({
		url: URLCREATEFORM,
		type: "get",
		dataType: "html",  
		async: false,  		
		data: 	{
			prefix : "pa",
			name : "documentTypeAspectsList",
			id : id
			},
			success:   function(data) {
			$("#divMeta").html(data);
		},
	});
}

/*
 * ### File Importing
 */

function addDocument() {
	$('#btnAddDocument').attr('disabled', true);
	noOfDocuments++;
	$('#documentNameContainer').append('<input class="span6" id="documentName' + noOfDocuments + '" type="text" readOnly="true" >');
	$('#searchContainer').append('<button class="btn" id="btnSearch' + noOfDocuments + '" onclick="importDocument(' + noOfDocuments + ')" >Buscar</button>');
	$('#searchContainer').append('<input type="file" id="importFile' + noOfDocuments + '" style="display:none" />');
	$('#previewRadContainer').append('<input type="radio" name="radPreview" id="radPreview' + noOfDocuments + '" unchecked>');
	
	fileInputListener();
	radioBtnPreviewListener();
}

function importDocument(docNo) {
	$("#importFile" + docNo).trigger('click');
}

function uploadDocuments() {
	var file = null;
	for (i = 1; i<=noOfDocuments; i++) {
		file = document.getElementById("importFile" + i);
		
		if (file == null || file == undefined) {
			//TODO: Hide empty fields??
		} else {
			$.ajax({
				url: URL_UPLOAD_DOCUMENT,
				type: 'POST',
				contentType: 'multipart/form-data',
				data: file,
				processData: false,
				success: function(msg){
					alert('Success! ' + msg);
				},
				error:function (xhr, ajaxOptions, thrownError){
					alert("Error de subida");
				}
			});
		}
		file = null;
	}
}

/*
 * ### onChange Listeners
 */
function fileInputListener() {
	$(":file").change(function() {
		$('#btnAddDocument').attr('disabled', false);
		var docNo = this.id.substring(this.id.length-1);
		var filename = this.val();
		
	    if(filename.match(/fakepath/)) {
	    	filename = filename.replace(/C:\\fakepath\\/i, '');
	    }
		$('#documentName' + docNo).val(filename);
		$('#radPreview' + docNo).attr('checked', true);
	});
}

function radioBtnPreviewListener() {
	$('id*="radPreview"').change(function() {
		var docNo = this.id.substring(this.id.length-1);
		
		//TODO agregar codigo de previsualizacion aqui
	});
}