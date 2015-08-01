<script>
$(document).ready(function() {
	nodeId = getUrlVars()["id"].replace(".", "");
	nodeType = getUrlVars()["nodeType"];

	loadAllFiles();	
});

function loadAllFiles(){
	$.ajax({
		url:'/share/page/dashlets/folderFilesSAP',
		type: "get",
		dataType: "html",  
		async: false,
		data : {
			nodeType : nodeType,
			nodeId : nodeId
		},
		success:   function(data) {
			$("#filesInFolder").html(data);
			bindDocumentMenu();
		}
	});
}

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value.replace("#", "");;
	});
	return vars;
}
</script>


<div class="dashlet">
	<div id="dashletWolrd" class="title" style="overflow: hidden;">Documentos
	</div>
  <input type="hidden" id="siteId" value="${(page.url.templateArgs.site!"")?html}"></input>  
<div class="col-md-12 column bar">
	<div class="row clearfix">
    
	</div>
  </div>
  
  
<div class="col-md-12 column tree">

 <div id="filesInFolder" ></div>
  
<div id="editClassificationDialog">
</div>
</div>

</div>

  
