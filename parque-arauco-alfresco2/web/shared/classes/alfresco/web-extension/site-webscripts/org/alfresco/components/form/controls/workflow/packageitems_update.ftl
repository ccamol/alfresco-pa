<script type="text/javascript" src="/share/arauco/js/jquery-1.8.0.min.js"></script>
<script type="text/javascript" src="/share/arauco/js/jquery-ui.min.js"></script>
<link rel="stylesheet" type="text/css" href="/share/arauco/js/jquery-ui.css" />
<link href="/share/css/popup.css" rel="stylesheet" type="text/css" />
<link rel="stylesheet" type="text/css" href="/share/bootstrap/bootstrap.min.css">
<script type="text/javascript" src="/share/bootstrap/js/bootbox.min.js"></script>
<script type="text/javascript" src="/share/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/share/arauco/js/ajaxfileupload.js"></script>

<!-- <script type="text/javascript" src="/share/js/jquery.min.js"></script> -->


<script type="text/javascript">//<![CDATA[

var ticket = null;
var currentUuid = null;
var currentComment = null;
var nodes = null;
var firstParent=null;
var documentUuid=null;
 $(document).ready(function() {
      
      $("#updateDocument").hide();
      
     $.ajax({
             type: "GET",
             url: '/alfresco/service/arauco/getTicket.json',
 			 type: "get",
			 dataType: "json",  
			 async: false,  		
             }).done(function(data) {      
               ticket= data.ticket;
             });

     $.ajax({
             type: "GET",
             url: '/alfresco/service/arauco/getPackageList.json?taskId=${field.value}&alf_ticket=' + ticket,
 			 type: "get",
			 dataType: "json",  
			 async: false,  		
             }).done(function(data) {      
               nodes= data.list;
             });
                          
	loadPackageItems();
             
});
 function getNodeList(){
     $.ajax({
         type: "GET",
         url: '/alfresco/service/arauco/getPackageList.json?taskId=${field.value}&alf_ticket=' + ticket,
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
             url: '/alfresco/service/arauco/getPackageItems?nodes=' + nodes + '&alf_ticket=' + ticket,
             dataType: 'json',
			 async: true,
			 success: function(data) {
			  	var totals = data.length;
			  	var comments = new Array();
				var htmlTable='<table border=0 cellspacing=0 cellpadding=5 bordercolor="666633" >';
				var pair = true;
				for(var i=0;i<totals;i++){
					if(pair){
						htmlTable += 	'<tr style="background:#FFFFFF;" >';
						pair=false;
					} else{
						htmlTable += 	'<tr style="background:#EDF5FF;" >';
						pair=true;
					}
					htmlTable +=	'<td width="100px">' + myImage(data[i].documentName, data[i].url) + '</td>';
					htmlTable +=	'<td width="600px"><div>'+data[i].documentType+'</div></td>';
					htmlTable += '<td width="130px">' + actionsFormatter(data[i].url, data[i].uuid) + '</td>';
					htmlTable += '</tr>';
					if(data[i].type=='principal'){
						htmlTable +=	'<tr><td/><td width="600px" style="color: #AAAAAA;"><div>Mall: '+data[i].mall+'</div></td><td/></tr>';
						htmlTable +=	'<tr><td/><td width="600px" style="color: #AAAAAA;"><div>Pa&iacutes: '+data[i].country+'</div></td><td/></tr>';
						if(data[i].SUC!='N/A'){
							htmlTable +=	'<tr><td/><td width="600px" style="color: #AAAAAA;"><div>SUC: '+data[i].SUC+'</div></td><td/></tr>';
						}
						if(data[i].project!='N/A'){
							htmlTable +=	'<tr><td/><td width="600px" style="color: #AAAAAA;"><div>project: '+data[i].project+'</div></td><td/></tr>';
						}
					}
					
                }
				htmlTable += '</table>';
               	$('#${fieldHtmlId}_documentsInPackageGrid').html(htmlTable);
			}  
		});   
 }
 
function uploadDocumentToAlfresco(taskId){
	
	$.ajaxFileUpload({
			url:'/alfresco/service/arauco/uploadPackageDocument?taskid=' + taskId + '&alf_ticket='+ticket + '&uuid='+documentUuid,
			secureuri:false,
			fileElementId:'updateDocument',
			dataType: 'JSON',
				error: function (s, xml, status, e)
				{
				},
				complete: function (s, xml, status, e)
				{
					alert('El contenido del documento ha sido actualizado.');
					getNodeList();
				}
		});
	
	return false;
}
 
 function updateDocumentAction(uuid, taskId){
 	documentUuid = uuid;
 	$("#updateDocument").click();
 }
 
 function actionsFormatter(url, uuid){
	var extension;
	var stringReturn = "<a target=\"_blank\" href=\""+url+"?alf_ticket="+ticket;
	stringReturn = stringReturn +"\"><img title=\"Descargar\" style=\"border:0px;\" src=\"/alfresco/images/icons/download_doc.gif\"></a>";
	stringReturn = stringReturn + "<img title=\"Actualizar\" style=\"margin-left:10px;border:0px; cursor: pointer;\" onclick=\"updateDocumentAction('"+uuid+"', '${field.value}');\" src=\"/alfresco/images/icons/up.gif\">";
	
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
function hidePopup2(){

	$("#dialog").fadeOut('slow');
}

//]]></script>


<div class="form-field">
	<div class="fileUpload">
		<input id="updateDocument" name="file" type="file" onchange="return uploadDocumentToAlfresco(${field.value});"/>
	</div>
     <div id="${fieldHtmlId}_documentsInPackageGrid" style="border: 1px solid #C5D6E2;margin-top:10px" />
</div>	
</div>
<div class="dialog" title="Detalles">
</div>

