{"resultSet" :[
<#if resultSet?exists>
<#list resultSet as node>
	{
	<#if node.id?exists>
	"id": "${node.id?string?replace(".", "")}",
	<#else>
	"id" : "",
	</#if>
	<#if node.name?exists>
	"name": "${node.name}",
	<#else>
	"name" : "",
	</#if>
	<#if node.identificationNumber?exists>
	"identificationNumber": "${node.identificationNumber}",
	<#else>
	"identificationNumber" : "",
	</#if>
	
	<#if node.country.id?exists>
	"countryId": "${node.country.id?string?replace(".", "")}",
	<#else>
	"countryId" : "",
	</#if>
	<#if node.country.name?exists>
	"countryName": "${node.country.name}",
	<#else>
	"countryName" : "",
	</#if>
	<#if node.mall.id?exists>
	"mallId": "${node.mall.id?string?replace(".", "")}",
	<#else>
	"mallId" : "",
	</#if>
	<#if node.mall.name?exists>
	"mallName": "${node.mall.name}",
	<#else>
	"mallName" : "",
	</#if>
	<#if node.mail?exists>
	"mail": "${node.mail}",
	<#else>
	"mail" : "",
	</#if>
	<#if node.additionalInfo?exists>
	"additionalInfo": "${node.additionalInfo?replace("\"","'")?replace("\n"," ")?replace("\t"," ")}"
	<#else>
	"additionalInfo" : ""
	</#if>
	
	}
<#if node_has_next>,</#if>
</#list>
</#if>
]}
