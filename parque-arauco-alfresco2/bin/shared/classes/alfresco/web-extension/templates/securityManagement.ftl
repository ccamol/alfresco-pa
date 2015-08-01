<#include "/org/alfresco/include/alfresco-template.ftl" />
<#import "/org/alfresco/import/alfresco-layout.ftl" as layout />

<@templateHeader "transitional">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
   	<link href="${page.url.context}/css/cssGeneral/ui.jqgrid.css" rel="stylesheet" type="text/css" > 
	<link href="${page.url.context}/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css">
    <link href="${page.url.context}/bootstrap/css/select2.css" rel="stylesheet" type="text/css" >
 	<link href="${page.url.context}/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
	<link href="${page.url.context}/css/cssTemplates/management.css" rel="stylesheet" type="text/css"> 
    <link href="${page.url.context}/bootstrap/css/style.css" rel="stylesheet" type="text/css" >
 	<link href="${page.url.context}/arauco/js/jquery-ui.css" rel="stylesheet" type="text/css">
 	<link href="${page.url.context}/arauco/js/themes/default/style.min.css" rel="stylesheet" type="text/css">
 	<link href="${page.url.context}/arauco/js/themes/blue/style.css" rel="stylesheet" type="text/css">
 
 
 	<script type="text/javascript" src="${page.url.context}/arauco/js/libs/jquery.js" charset="utf-8"></script>
 	<script type="text/javascript" src="${page.url.context}/arauco/js/libs/require.js" charset="utf-8"></script>
    
    <script type="text/javascript" src="${page.url.context}/bootstrap/js/bootstrap.js"></script>
    <script type="text/javascript" src="${page.url.context}/bootstrap/js/bootbox.min.js"></script>
   
    <script type="text/javascript" src="${page.url.context}/arauco/js/jquery-ui.js" charset="utf-8"></script>
	<script type="text/javascript" src="${page.url.context}/bootstrap/js/scripts.js"></script>
	<script type="text/javascript" src="${page.url.context}/arauco/js/jquery.jtable.js" charset="utf-8"></script>
	<script type="text/javascript" src="${page.url.context}/arauco/ajax/security/rols.js" charset="utf-8"></script>
</@>
<@templateBody>
<@markup id="alf-hd">
<div id="alf-hd">
<@region scope="global" id="share-header" chromeless="true"/>
</div>
</@>
<@markup id="bd">
<div id="bodyTemplate">
<div class="row clearfix">
		<div class="col-md-6 column" id="found">
		<@region id="rols" scope="page"/>
		</div>
		<div class="col-md-6 column" id="containerDocument">
<@region id="securityBrowser" scope="page"/>		
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