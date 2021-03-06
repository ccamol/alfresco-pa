<#include "/org/alfresco/include/alfresco-template.ftl" />
<#import "/org/alfresco/import/alfresco-layout.ftl" as layout />

<@templateHeader "transitional">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<script type="text/javascript" src="${page.url.context}/arauco/js/jquery-1.10.2.js" charset="utf-8"></script>
       <script type="text/javascript" src="${page.url.context}/arauco/js/jquery-ui.js" charset="utf-8"></script>
              <script type="text/javascript" src="${page.url.context}/arauco/js/ajaxfileupload.js" charset="utf-8"></script>
          
      
      
      <link href="${page.url.context}/css/cssGeneral/ui.jqgrid.css" rel="stylesheet" type="text/css" >
<link href="${page.url.context}/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="${page.url.context}/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="${page.url.context}/css/cssTemplates/management.css" rel="stylesheet" type="text/css"> 
<link href="${page.url.context}/bootstrap/css/style.css" rel="stylesheet" type="text/css" >
<link href="${page.url.context}/arauco/js/jquery-ui.css" rel="stylesheet" type="text/css">
      <link href="${page.url.context}/css/contextmenu/jquery.contextmenu.css" rel="stylesheet" type="text/css">
      
       
     <script type="text/javascript" src="${page.url.context}/bootstrap/js/bootstrap.js"></script>
    <script type="text/javascript" src="${page.url.context}/bootstrap/js/bootbox.min.js"></script>
	<script type="text/javascript" src="${page.url.context}/bootstrap/js/scripts.js"></script>
  	<script type="text/javascript" src="${page.url.context}/arauco/js/jquery.dataTables.min.js" charset="utf-8"></script>
	<script type="text/javascript" src="${page.url.context}/arauco/js/jquery-ui.min.js" charset="utf-8"></script>
	
	 <!-- Google docs-->
   	<script type="text/javascript">//<![CDATA[
    	dndUpload.setInMemoryLimit("262144000");
    	dndUpload.setMaximumFileSizeLimit(0);
	//]]></script>
   	<script type="text/javascript" src="${page.url.context}/arauco/js/googledocs/actions-common.js"></script>
   	<script type="text/javascript" src="${page.url.context}/arauco/js/googledocs/actions.js"></script>
	<!-- Google docs-->
	
	<script type="text/javascript" src="${page.url.context}/arauco/js/jquery.contextmenu.js" charset="utf-8"></script>
	<script type="text/javascript" src="${page.url.context}/arauco/js/jquery.tablesorter.js" charset="utf-8"></script>
    <script type="text/javascript" src="${page.url.context}/arauco/ajax/thirdPartyModule/thirdPartyModule.js" charset="utf-8"></script>
	


</@>

<@templateBody>

<@markup id="alf-hd">

<div id="alf-hd">

</div>
</@>
<@markup id="bd">
<div align="right" style="margin-right: 12px;">${user.firstName !""} ${user.lastName  !""}<button class="btn btn-default" onclick="dologout();">Cerrar sesión</button></div>
<div class="container col-md-12 column">
	<div class="row clearfix">
		<div class="col-md-1 column">
		</div>
		<div class="col-md-10 column"><@region id="projectMallThirdPartyArchitecture" scope="page"/></div>
		<div class="col-md-1 column">
		</div>
	</div>
	
	  <div class="row clearfix">
		<div class="col-md-1 column">
		</div>
		<div class="col-md-10 column"><@region id="associatedThirdPartyArchitectureDocuments" scope="page"/></div>
		<div class="col-md-1 column">
		</div>
	</div>
	
	
    <div class="row clearfix">
		<div class="col-md-1 column">
		</div>
		<div class="col-md-10 column"><@region id="requestedDocumentsThirdPartyArchitecture" scope="page"/></div>
		<div class="col-md-1 column">
		</div>
	</div>	
</div>
</@>
</@>


<@templateFooter>
<@markup id="alf-ft">
<div id="alf-ft">
<@region id="footer" scope="global" />
</div>
</@>
</@>
