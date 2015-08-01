<#include "/org/alfresco/include/alfresco-template.ftl" />
<#import "/org/alfresco/import/alfresco-layout.ftl" as layout />

<@templateHeader "transitional">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<!--script type="text/javascript" src="${page.url.context}/arauco/js/parsley.js"></script-->

<link href="${page.url.context}/bootstrap/css/bootstrap.css" rel="stylesheet" type="text/css">
<link href="${page.url.context}/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="${page.url.context}/css/parameters/parameters.css" rel="stylesheet" type="text/css"> 
<link href="${page.url.context}/bootstrap/css/style.css" rel="stylesheet" type="text/css" >
<link href="${page.url.context}/arauco/js/jquery-ui.css" rel="stylesheet" type="text/css">

<script type="text/javascript" src="${page.url.context}/arauco/js/jquery-1.10.2.js" charset="utf-8"></script>
<script type="text/javascript" src="${page.url.context}/arauco/js/jquery-ui.js" charset="utf-8"></script>
<script type="text/javascript" src="${page.url.context}/arauco/js/jquery.tablesorter.js" charset="utf-8"></script>       
<script type="text/javascript" src="${page.url.context}/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="${page.url.context}/bootstrap/js/bootbox.min.js"></script>
<script type="text/javascript" src="${page.url.context}/arauco/js/jquery.dataTables.min.js" charset="utf-8"></script>

<!--link href="${page.url.context}/bootstrap/css/bootstrap-multiselect.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="${page.url.context}/bootstrap/js/bootstrap-multiselect.js"></script-->

<link href="${page.url.context}/css/cssGeneral/jquery.multiselect.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="${page.url.context}/arauco/js/jquery.multiselect.js" charset="utf-8"></script>
<script type="text/javascript" src="${page.url.context}/arauco/js/jquery.multiselect.filter.js" charset="utf-8"></script>



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
		
		<@region id="parameters" scope="page"/>
		
		
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