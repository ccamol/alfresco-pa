{"resultSet" :[
<#if resultSet?exists>
<#list resultSet as node>
	{
	<#if node.properties.id?exists>
	"id": "${node.properties.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>
	<#if node.properties.identificationNumber?exists>
	"identificationNumber": "${node.properties.identificationNumber}",
	<#else>
	"identificationNumber" : "",
	</#if>
	<#if node.properties.idTender?exists>
	"idTender": "${node.properties.idTender?string?replace(".", "")}",
	<#else>
	"idTender" : "",
	</#if>
	<#if node.properties.name?exists>
	"nameTender": "${node.properties.name}",
	<#else>
	"nameTender" : "",
	</#if>
	
	<#if node.properties.name?exists>
	"name": "${node.properties.name}",
	<#else>
	"name" : "",
	</#if>
	<#if node.properties.mail?exists>
	"mail": "${node.properties.mail}",
	<#else>
	"mail" : "",
	</#if>
	<#if node.properties.additionalInfo?exists>
	"additionalInfo": "${node.properties.additionalInfo?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}",
	<#else>
	"additionalInfo" : "",
	</#if>
	<#if node.properties.awardApplicant?exists>
	"awardApplicant": "${node.properties.awardApplicant}",
	<#else>
	"awardApplicant" : "false",
	</#if>
	<#if node.properties.mallId?exists>
	"mallId": "${node.properties.mallId?string?replace(".", "")}",
	<#else>
	"mallId" : "",
	</#if>
	<#if node.properties.countryId?exists>
	"countryId": "${node.properties.countryId?string?replace(".", "")}"
	<#else>
	"countryId" : ""
	</#if>
	
	}
<#if node_has_next>,</#if>
</#list>
</#if>
]}
