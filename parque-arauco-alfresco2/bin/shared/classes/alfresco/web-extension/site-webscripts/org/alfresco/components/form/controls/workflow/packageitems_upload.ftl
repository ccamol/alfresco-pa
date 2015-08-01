<link href="/share/css/popup.css" rel="stylesheet" type="text/css" />

<script type="text/javascript" src="/share/js/jquery-1.4.2.min.js"></script>
<link rel="stylesheet" type="text/css" href="/share/css/jquery-ui-1.8.custom.css" />
<script type="text/javascript" src="/share/js/ajaxfileupload.js"></script>

<script type="text/javascript">//<![CDATA[

var ticket = null;
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
             url: '/share/page/DifrolCIJ/getTicket.json',
 			 type: "get",
			 dataType: "json",  
			 async: false,  		
			 success: function (data){
               ticket= data.ticket;
			 }
         });
             
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

     $.ajax({
             type: "GET",
             url: '/alfresco/service/DifrolCIJ/firstParent.json?alf_ticket=' + ticket,
 			 type: "get",
			 dataType: "json",  
			 async: false,  		
			 success: function (data){
               firstParent= data.firstParent;
			 }
         });

             
	loadPackageItems();              
});
 
function uploadDocumentToAlfresco(taskId)
{
	$.ajaxFileUpload({
			url:'/alfresco/service/DifrolCIJ/uploadPackageDocument?taskid=activiti$' + taskId + '&alf_ticket='+ticket,
			secureuri:false,
			fileElementId:'file',
			 async: false,
			dataType: 'json',
				error: function (s, xml, status, e)
				{
				},
				complete: function (s, xml, status, e)
				{
					alert('El documento ha sido incorporado al flujo de trabajo.');
					getNodeList();
				}
		});
	
	
	
	return false;
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
				var htmlTable='<table border=0 cellspacing=0 cellpadding=5 bordercolor="666633" >';
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
					htmlTable +=	'<td>' + myImage(data[i].documentName, data[i].url) + '</td>';
					htmlTable +=	'<td width="200px">' + data[i].documentName + '</td>';
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
					htmlTable += '<td width="100px">' + actionsFormatter(data[i].url, data[i].uuid) + '</td>';
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
	var stringReturn = "<a target=\"_blank\" href=\""+url+"?alf_ticket="+ticket;
	stringReturn = stringReturn +"\"><img style=\"border:0px;\" src=\"/alfresco/images/icons/download_doc.gif\"></a>";
	stringReturn = stringReturn + "<img style=\"margin-left:20px;border:0px; cursor: pointer;\" onclick=\"showPopup('" + uuid + "');\" src=\"/alfresco/images/icons/forum-16.gif\">";
	
	return stringReturn; 
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
 
function fillRepositoryPopup(home){

	var htmlTable = "";

	$('#${fieldHtmlId}_documentsInPackageGrid').html(htmlTable);


} 

function selectFromRepository(){

	$.ajax({
		url:'/alfresco/service/DifrolCIJ/filePicker',
		type: "GET",
		dataType: "html",  
		async: false,  		
		data: 	{
			alf_ticket : ticket,
			uuid : firstParent,
			firstParent : firstParent
			} ,
		success: function(data) {
			$("#${fieldHtmlId}_filePicker").html(data);
		}

	});

	$("#repositoryPopup").fadeIn('slow');


}

function setUploadFromRepository(){

	for(i=0;i<documentsAdded.length;i++){
		addFromRepository(documentsAdded[i]['uuid']);
	}
	getNodeList();


	$("#repositoryPopup").fadeOut('slow');
}
 
function hideRepositoryPopup(){
	$("#repositoryPopup").fadeOut('slow');
} 



function addFromRepository(uuid){
     $.ajax({
         type: "POST",
         url: '/alfresco/service/cij/uploadPackageDocumentsFromRepository.json?taskId=${field.value}&uuid=' + uuid + '&alf_ticket=' + ticket,
		 dataType: "json",  
		 async: false,
		 success: function (data){
		 }
     });

} 

 
//]]></script>


<div class="form-field">
      
	<form name="form" action="" method="POST" enctype="multipart/form-data">
		<label>Seleccionar archivo:</label>
		
		<input id="file" name="file" type="file"  onchange="return uploadDocumentToAlfresco(${field.value});" style="position:absolute;visibility:hidden;"/>
		<input type="button" id="browseButton" value="Examinar..." onclick="file.click()">		
		<input type="button" id="repositoryBrowseButton" value="Repositorio..." onclick="selectFromRepository();">		
		<span class="yui-button yui-link-button" style="margin-left:100px;" >
		</span>
	</form>

     <div id="${fieldHtmlId}_documentsInPackageGrid" style="border: 1px solid #C5D6E2;margin-top:10px" />


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

<div id="repositoryPopup">
   <div id="caption" style="width: 100%;height:20px;background-color:#6699FF;top:-10px;" >
	   <div id="cerrarRepositoryPopup" onclick="hideRepositoryPopup();" style="top:4px;" >X</div>
	   <label style="position:absolute;top:-10;left:10;color:#FFFFFF;top:3px;margin-left:10px">Seleccionar documentos</label>
   </div>
   <br/>
   <div id="${fieldHtmlId}_filePicker" name="${fieldHtmlId}_filePicker" style="margin-left:10px;" ></div> 
   <br/>
   <input type="button" value="Subir archivos" onclick="setUploadFromRepository();" style="margin-left:10px;" />	   
</div>
