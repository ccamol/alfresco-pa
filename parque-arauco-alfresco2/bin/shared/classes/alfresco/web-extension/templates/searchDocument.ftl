<#include "/org/alfresco/include/alfresco-template.ftl" />
<#import "/org/alfresco/import/alfresco-layout.ftl" as layout />
<@templateHeader "transitional">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

 <script type="text/javascript" src="${page.url.context}/arauco/js/jquery-1.10.2.js" charset="utf-8"></script>
    <script type="text/javascript" src="${page.url.context}/arauco/js/jquery-ui.js" charset="utf-8"></script>
    <script type="text/javascript" src="${page.url.context}/arauco/js/jquery.contextmenu.js" charset="utf-8"></script>
	<script type="text/javascript" src="${page.url.context}/bootstrap/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="${page.url.context}/bootstrap/js/bootbox.min.js"></script>
	<script type="text/javascript" src="${page.url.context}/arauco/js/jquery.dataTables.min.js" charset="utf-8"></script>
	<script type="text/javascript" src="${page.url.context}/bootstrap/js/scripts.js"></script>
	<script type="text/javascript" src="${page.url.context}/arauco/ajax/searchDocument/searchOutput.js" charset="utf-8"></script>

	<!-- Google docs-->
   	<script type="text/javascript">//<![CDATA[
      dndUpload.setInMemoryLimit("262144000");
      dndUpload.setMaximumFileSizeLimit(0);
	//]]></script>
   	<script type="text/javascript" src="${page.url.context}/arauco/js/googledocs/actions-common.js"></script>
   	<script type="text/javascript" src="${page.url.context}/arauco/js/googledocs/actions.js"></script>
	<!-- Google docs-->
    <script type="text/javascript" src="${page.url.context}/arauco/ajax/general/mallDocument/mallDocument.js" charset="utf-8"></script>
  
   <link href="${page.url.context}/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css" >
   <link href="${page.url.context}/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
   <@link rel="stylesheet" type="text/css" href="${page.url.context}/themes/${theme}/header/header.css" />
   	
    <link href="${page.url.context}/bootstrap/css/style.css" rel="stylesheet" type="text/css">
    <link href="${page.url.context}/arauco/js/jquery-ui.css" rel="stylesheet" type="text/css">
	<link href="${page.url.context}/css/contextmenu/jquery.contextmenu.css" rel="stylesheet" type="text/css">
</@>
<@templateBody>
<@markup id="alf-hd">
<div id="alf-hd">
<@region scope="global" id="share-header" chromeless="true"/>
</div>
</@>
<@markup id="bd">
<div id="bd">
	<div id="column1">
		<@region id="searchDocument" scope="page"/>
		
</@>
</@>
<@templateFooter>
<@markup id="alf-ft">
<div id="alf-ft">
<@region id="footer" scope="global" />
</div>
</@>
</@>