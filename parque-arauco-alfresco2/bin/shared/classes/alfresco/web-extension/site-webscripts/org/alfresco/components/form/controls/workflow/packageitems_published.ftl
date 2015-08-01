<script type="text/javascript" src="/share/js/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="/share/js/jquery-ui.min.js"></script>
<link rel="stylesheet" type="text/css" href="/share/css/jquery-ui-1.8.custom.css" />
<link href="/share/css/popup.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="/share/css/bootstrap.min.css">
<script type="text/javascript" src="/share/js/bootbox.min.js"></script>
<script type="text/javascript" src="/share/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/share/js/jquery.min.js"></script>


<script type="text/javascript">//<![CDATA[

var ticket = getTicket();
var currentUuid = null;
var currentComment = null;

var nodes = null;
var firstParent=null;
 $(document).ready(function() {
   //Pop-up
   	var img_w = 400;
   	var img_h = 180;
   	$("#commentPopup").css('width', img_w + 'px');
   	$("#commentPopup").css('height', img_h + 'px');
   	$("#commentPopup").hide();  
   	$("#dialog").hide();    
   	var w = $(this).width();
   	var h = $(this).height();
   	w = (w/2) - (img_w/2);
   	h = (h/2) - (img_h/2);
   	$("#commentPopup").css("left",w + "px");
   	$("#commentPopup").css("top",h + "px");      
	
   	var img_w = 520;
   	var img_h = 350;
   	$("#repositoryPopup").css('width', img_w + 'px');
   	$("#repositoryPopup").css('height', img_h + 'px');
   	w = $(this).width();
   	h = $(this).height();
   	w = (w/2) - (img_w/2);
   	h = (h/2) - (img_h/2);
   	$("#repositoryPopup").css("left",w + "px");
   	$("#repositoryPopup").css("top",h + "px");
   	$("#repositoryPopup").hide();   
      

     $.ajax({
             type: "GET",
             url: '/alfresco/service/DifrolCIJ/getPackageList.json?taskId=${field.value}&alf_ticket=' + ticket,
 			 type: "get",
			 dataType: "json",  
			 async: false,  		
             }).done(function(data) {      
               nodes= data.list;
             });
                          
	loadPackageItems();
	
             
});

function publishedCheck(id){
	var idText=id+'_text';
	if($("#"+id).is(':checked')){
		$("#uuidLabel").append('<p id="'+idText+'">'+$('#'+id).val()+';</p>');
	}else{
		$('#'+idText).remove();
	}
}

function getTicket(){
	var ticket=null;
	 $.ajax({
             type: "GET",
             url: '/alfresco/service/DifrolCIJ/getTicket.json',
 			 type: "get",
			 dataType: "json",  
			 async: false,  		
             }).done(function(data) {  
             	    
                ticket= data.ticket;
             });
    return ticket;         

}
 function getNodeList(){
     $.ajax({
         type: "GET",
         url: '/alfresco/service/DifrolCIJ/getPackageList.json?taskId=${field.value}&alf_ticket=' + ticket,
		 type: "get",
		 dataType: "json",  
		 async: false,
		 success: function (data){
           nodes= data.list;
		 }
     });
	loadPackageItems();

} 
function loadPackageItems(){
       $.ajax({
             type: "GET",
             url: '/alfresco/service/DifrolCIJ/getPackageItems?nodes=' + nodes + '&alf_ticket=' + ticket,
             dataType: 'json',
			 async: true,
			 success: function(data) {
			  	var totals = data.length;
			  	var comments = new Array();
			  	var uuidLabel='<label id="uuidLabel" style="display:none"></label>';
				var htmlTable=uuidLabel+'<table border=0 cellspacing=0 cellpadding=5 bordercolor="666633" >';
				var pair = true;
				for(var i=0;i<totals;i++){
					comments = data[i].comments.split("||");
					if(pair){
						htmlTable += 	'<tr style="background:#FFFFFF;" >';
						pair=false;
					} else{
						htmlTable += 	'<tr style="background:#EDF5FF;" >';
						pair=true;
					}
					htmlTable +=	'<td width="100px">' + myImage(data[i].documentName, data[i].url) + '</td>';
					//htmlTable +=	'<td width="200px">' + data[i].documentName + '</td>';
					//htmlTable +=	'<td width="200px">Tipo de documento: ' + data[i].documentType + '</td>';
					//htmlTable +=	'<td width="200px">Descripcion: ' + data[i].documentDescription + '</td>';
					htmlTable +=	'<td width="600px"><div>Nombre: '+data[i].documentName+'</div><br><div>Descripcion: '+data[i].documentDescription+'</div><br><div>Tipo de documento: '+data[i].documentType+'</div><br><div>Categoria: '+data[i].documentCategory+'</div><br><div>Subcategoria: '+data[i].documentSubCategory+'</div></td>';
					htmlTable += '<td width="500px" >';
					if(comments.length>0){
						htmlTable += '<table>';
						for(var j=0;j<comments.length;j++){
							htmlTable += '<tr>';	
							htmlTable += '<td>' + comments[j] + '</td>';	
							htmlTable += '</tr>';	
						}				
						htmlTable += '</table>';
					}
					htmlTable += '</td>';
					htmlTable += '<td width="300px">' + actionsFormatter(data[i].url, data[i].uuid,i) + '</td>';
					htmlTable += '</tr>';
                }
				htmlTable += '</table>';
               	$('#${fieldHtmlId}_documentsInPackageGrid').html(htmlTable);
			}  
		});   
 }
 
 
 function setComment(){
 
 		currentComment = $('#${fieldHtmlId}_fileComments').val();
 	     $.ajax({
            type: "GET",
            url: '/alfresco/service/DifrolCIJ/setComment.json',
			dataType: "json",  
			async: false,
			data: {
				alf_ticket : ticket,
				uuid : currentUuid,
				comment : currentComment
				} ,
			 success: function(data) {
			 }
         });
         hidePopup();
         loadPackageItems();
 }
 
 function actionsFormatter(url, uuid){
	var extension;
	var stringReturn ="<input type=\"checkbox\" name=\"published\" value=\""+uuid+"\"> Publicar  ";
	stringReturn = stringReturn + "<a target=\"_blank\" href=\""+url+"?alf_ticket="+ticket;
	stringReturn = stringReturn +"\"><img title=\"Descargar\" style=\"border:0px;\" src=\"/alfresco/images/icons/download_doc.gif\"></a>";
	stringReturn = stringReturn + "<img title=\"Modificar Documento\" style=\"margin-left:10px;border:0px; cursor: pointer;\" onclick=\"popupDocumentEdit('"+uuid+"');\" src=\"/alfresco/images/icons/forum-16.gif\">";
	stringReturn = stringReturn + "<img title=\"Definir documento\" style=\"margin-left:10px;border:0px; cursor: pointer;\" onclick=\"popup('"+uuid+"');\" src=\"/alfresco/images/icons/Details.gif\">";
	return stringReturn; 
}

 function actionsFormatter(url, uuid,i){
 	var checkboxId="published_"+i;
	var extension;
	var stringReturn ="<input id=\""+checkboxId+"\" type=\"checkbox\" name=\"published\" value=\""+uuid+"\" onclick=\"publishedCheck('"+checkboxId+"');\"> Publicar  ";
	stringReturn = stringReturn + "<a target=\"_blank\" href=\""+url+"?alf_ticket="+ticket;
	stringReturn = stringReturn +"\"><img title=\"Descargar\" style=\"border:0px;\" src=\"/alfresco/images/icons/download_doc.gif\"></a>";
	stringReturn = stringReturn + "<img title=\"Definir documento\" style=\"margin-left:10px;border:0px; cursor: pointer;\" onclick=\"popup('"+uuid+"');\" src=\"/alfresco/images/icons/Details.gif\">";
	return stringReturn; 
}

function popup(uuid){
	var host = window.location.hostname;
	var port = window.location.port;
	var url;
	 $.ajax({
             url: '/alfresco/service/DifrolCIJ/getDocumentDetails?alf_ticket='+ticket,
             type: "POST",
             dataType: 'json',
			 async: false,
			 data:{
 				uuid : uuid
			 },
			 success: function(data) {
			  uuid = data.uuid;
			  nameRef = data.nameRef;
			  uuidOri = data.uuidOri;
			 }
	});
    callPreview(uuid, nameRef,uuidOri);
	
}


function popupDocumentEdit(uuid){
	var host = window.location.hostname;
	var port = window.location.port;
	var url;
	 $.ajax({
             url: '/alfresco/service/DifrolCIJ/getDocumentDetails?alf_ticket='+ticket,
             type: "POST",
             dataType: 'json',
			 async: false,
			 data:{
 				uuid : uuid
			 },
			 success: function(data) {
			  uuid = data.uuid;
			  nameRef = data.nameRef;
			  uuidOri = data.uuidOri;
			 }
	});
    callDocumentEdit(uuid, nameRef,uuidOri);
	
}

function getMetadata(uuid){
	$.ajax({
		url: '/alfresco/service/DifrolCIJ/getDocumentMetadataReview?alf_ticket='+ticket,
		type: "GET",
		dataType: 'json',
		async: false,
		data:{
			uuid : uuid,
			prefix : "cij",
			name : "documentTypeAspectList"
		},
		success: function(data) {
			var cont = 0;
			$.each(data, function(k,v){
				if(v.id == "subcategory")
				{
					cont++
				}
				console.log(k+"->" +v.id + ", "+v.metadata); 
			});


			$.each(data, function(k,v){
				var nn =v.id;
				var getId = $("#"+nn);
				if(getId[0] != undefined && getId[0] !="")
				{
					var getType = getId[0].tagName;
					if(getType == "INPUT")
					{
						$("#"+nn).val(v.metadata);
					}
				}else
				{
					var nn = nn.charAt(0).toUpperCase() + nn.slice(1);
					getId = $("#id"+nn);

					if(getId[0] != undefined && getId[0] !="")
					{
						if(k == 1 && v.id != "subcategory")
						{
							// $("#idSubcategory option[value=1]").attr("selected",true);
							$("#idSubcategory option").each(function()
									{
								if($(this).html()=="N/A"){
									$(this).attr("selected","selected");
								}
									});	
							$("#idSubcategory").change();
						} 
						var getType = getId[0].tagName;
						$("#id"+nn+" option[value=1]").attr("selected",true);

						$("#id"+nn+" option").each(function()
								{
							if($(this).html()== v.metadata){
								$(this).attr("selected","selected");
							}
								});

						$("#id"+nn).change();
					}

				}
				console.log(k+"->" +v.id + ", "+v.metadata); 
			});


		}
	});
}

function getMetadata56789(uuid){
	 $.ajax({
             url: '/alfresco/service/DifrolCIJ/getDocumentMetadataReview?alf_ticket='+ticket,
             type: "GET",
             dataType: 'json',
			 async: false,
			 data:{
 				uuid : uuid,
 				prefix : "cij",
				name : "documentTypeAspectList"
			 },
			 success: function(data) {
			 $.each(data, function(k,v){
			 var nn =v.id;
			 var getId = $("#"+nn);
			 if(getId[0] != undefined && getId[0] !="")
			 {
			 var getType = getId[0].tagName;
			  if(getType == "INPUT")
			  {
			  $("#"+nn).val(v.metadata);
			  }
			 }else
			 {
			 var nn = nn.charAt(0).toUpperCase() + nn.slice(1);
			 getId = $("#id"+nn);
			 
			 if(getId[0] != undefined && getId[0] !="")
			 {
			 var getType = getId[0].tagName;
			 }
			 
			 }
			 //console.log(k+"->" +v.id + ", "+v.metadata); 
			 });
			 
			 
			 }
	});
}



function uploadDocument(uuid){
	$.ajax({
	url:'/alfresco/service/components/cij/document-contentReview',
	type : "GET",
	dataType: "html",
	async: false,
	data:{
	uuid:uuid
	},
	success:   function(data) {
		$('#viewDetails').html(data);
	},
	complete: function(data) {
	}
	});	
}

function getMetadata2()
{
$("#idCategory option[value=1]").attr("selected",true);
$("#idCategory").change();
}



function callPreview(uuid, nameRef, uuidOri){
	var host = window.location.hostname;
	var port = window.location.port;
	var data = "<span class='first-child yui-button yui-push-button'><a onclick='callAssocDocumentToDossier();' href='#' id='saveDocument'>Modificar Expedientes Asociados</a></span><span class='first-child yui-button yui-push-button'><a onclick='callWorkAssocDocumentToDossier();' href='#' id='saveDocument2'>Expedientes Asociados</a></span><div id='viewDetails'></div>"
		  	bootbox.dialog(data, [{
	    "label" : "Salir"
		}])	
	  //getMetadata(uuidOri);
	  uploadDocument(uuidOri);
	 // getMetadata(uuidOri);
}

function callDocumentEdit(uuid, nameRef, uuidOri){
	var data = "<input id='file' name='file' type='file' onchange='return uploadDocumentToAlfresco2();'/>"
		  	bootbox.dialog(data, [{
	    "label" : "Salir"
		}])	
}

function uploadDocumentToAlfresco2()
{
var varHost = window.location.hostname;
	var varPort = window.location.port;
	var prefix = "cji";
	var ticket=$("#ticket").val();	
	var validDoc = validDocument();
	if(validDoc==1)
	{
		$("#loading")
		.ajaxStart(function(){
			$(this).show();
		})
		.ajaxComplete(function(){
			$(this).hide();
		});
		$.ajaxFileUpload
		(
				{
					url:"/alfresco/service/components/cij/createasocviewUpdate?alf_ticket="+varTicket+"&host="+varHost+"&port="+varPort+"&prefix="+prefix,
					secureuri:false,
					fileElementId:'file',
					dataType: 'JSON',
					success: function (data)
					{
						$("#index").hide();
						$("#previus").html(data);
					},
					error: function (data, status, e)
					{
						alert("sigue error" + e);
					}
				}
		)

		return false;
	}else {
		alert("Atención, Tipo de documento no permitido");
		$("#form").reset();
	}
}

 function myImage(documentName, url){
	
	var extension;
	var stringReturn = "<a target=\"_blank\" href=\""+url+"?alf_ticket="+ticket + "\" >";

	extension = (documentName.substring(documentName.lastIndexOf("."))).toLowerCase();
	
	if (extension == ".xls" | extension == ".xlsx"){
		stringReturn += "<img style=\"border:0px;\" src=\"/alfresco/images/filetypes32/xls.gif\"></a>";
	}else if (extension == ".doc" | extension == ".docx"){
		stringReturn += "<img style=\"border:0px;\" src=\"/alfresco/images/filetypes32/doc.gif\"></a>";
	}else if (extension == ".pdf"){
		stringReturn += "<img style=\"border:0px;\" src=\"/alfresco/images/filetypes32/pdf.gif\"></a>";
	}else if (extension == ".jpg"){
		stringReturn += "<img style=\"border:0px;\" src=\"/alfresco/images/filetypes32/jpg.gif\"></a>";
	}else if (extension == ".bmp"){
		stringReturn += "<img style=\"border:0px;\" src=\"/alfresco/images/filetypes32/bmp.gif\"></a>";
	}else if (extension == ".gif"){
		stringReturn += "<img style=\"border:0px;\" src=\"/alfresco/images/filetypes32/gif.gif\"></a>";
	}else if (extension == ".gif"){
		stringReturn += "<img style=\"border:0px;\" src=\"/alfresco/images/filetypes32/png.gif\"></a>";
	}else{
		stringReturn += "<img style=\"border:0px;\" src=\"/alfresco/images/filetypes32/_default.gif\"></a>";
	}

	return stringReturn;
} 

function showPopup(uuid) {
	currentUuid=uuid;
	$('#${fieldHtmlId}_fileComments').val('');
	$("#commentPopup").fadeIn('slow');
} 

function hidePopup(){

	$("#commentPopup").fadeOut('slow');
}
function hidePopup2(){

	$("#dialog").fadeOut('slow');
}

//]]></script>


<div class="form-field">
     <div id="${fieldHtmlId}_documentsInPackageGrid" style="border: 1px solid #C5D6E2;margin-top:10px" />
</div>
<div class="dialog" title="Detalles">
</div>
<div id="commentPopup">
   <div id="cerrar" onclick="hidePopup();">X</div>
   <label style="float:left;margin-left:5px;" >Comentarios:</label>
   <br/>
   <textarea name="${fieldHtmlId}_fileComments" id="${fieldHtmlId}_fileComments" rows="4" cols="50"></textarea> 
   <br/>
   <br/>
   <input type="button" value="Guardar" onclick="setComment();" />	   
</div>

