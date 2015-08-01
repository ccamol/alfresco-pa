<#assign resultString><@treeBase_macro/></#assign>

{"core":{"data":[${resultString?substring(0, resultString?last_index_of(","))}]},
"checkbox" : {
      "keep_selected_style" : false
    },
    "plugins" : [ "checkbox" ]}


<#macro treeBase_macro>
{"id":"mall","parent":"#","text":"Mall", "icon" : "/share/images/icons/mall.png", "a_attr" : {"style" : "font-weight:bold; color:#0B0B61;"}, "state" : {"opened" : "true"}},
<@mallFuncionalities_macro/>
{"id":"mall_proyect","parent":"mall","text":"Proyectos de mall", "icon" : "/share/images/icons/projectl.png", "a_attr" : {"style" : "font-weight:bold; color:#0B0B61;"}},
<@mallProjectFuncionalities_macro/>
<#if area="2">
{"id":"suc","parent":"mall","text":"SUC", "icon" : "/share/images/icons/suc.png", "a_attr" : {"style" : "font-weight:bold; color:#0B0B61;"}},
<@sucFuncionalities_macro/>
{"id":"suc_proyect","parent":"suc","text":"Proyectos de suc", "icon" : "/share/images/icons/suc_proyect.png", "a_attr" : {"style" : "font-weight:bold; color:#0B0B61;"}},
<@sucProyectFuncionalities_macro/>
</#if>
</#macro>

<#macro mallFuncionalities_macro>
<#if mallFuncionalities.result?exists>
<#list mallFuncionalities.result as funcionality>
<#if SecurityService.checkFuncionalityByRol(rol.result.id, funcionality.id).result>
{"id":"${funcionality.id}","parent":"mall","text":"${funcionality.name}", "icon" : "/share/images/icons/funcionality.png", "state" : {"selected" : "true"}},
<#else>
{"id":"${funcionality.id}","parent":"mall","text":"${funcionality.name}", "icon" : "/share/images/icons/funcionality.png"},
</#if>
</#list>
</#if>
</#macro>

<#macro mallProjectFuncionalities_macro>
<#if proyectFuncionalities.result?exists>
<#list proyectFuncionalities.result as funcionality>
<#if SecurityService.checkFuncionalityByRol(rol.result.id, funcionality.id).result>
{"id":"${funcionality.id}","parent":"mall_proyect","text":"${funcionality.name}", "icon" : "/share/images/icons/funcionality.png", "state" : {"selected" : "true"}},
<#else>
{"id":"${funcionality.id}","parent":"mall_proyect","text":"${funcionality.name}", "icon" : "/share/images/icons/funcionality.png"},
</#if>
</#list>
</#if>
</#macro>

<#macro sucFuncionalities_macro>
<#if sucFuncionalities.result?exists>
<#list sucFuncionalities.result as funcionality>
<#if SecurityService.checkFuncionalityByRol(rol.result.id, funcionality.id).result>
{"id":"${funcionality.id}","parent":"suc","text":"${funcionality.name}", "icon" : "/share/images/icons/funcionality.png", "state" : {"selected" : "true"}},
<#else>
{"id":"${funcionality.id}","parent":"suc","text":"${funcionality.name}", "icon" : "/share/images/icons/funcionality.png"},
</#if>
</#list>
</#if>
</#macro>

<#macro sucProyectFuncionalities_macro>
<#if sucProyectFuncionalities.result?exists>
<#list sucProyectFuncionalities.result as funcionality>
<#if SecurityService.checkFuncionalityByRol(rol.result.id, funcionality.id).result>
{"id":"${funcionality.id}","parent":"suc_proyect","text":"${funcionality.name}", "icon" : "/share/images/icons/funcionality.png", "state" : {"selected" : "true"}},
<#else>
{"id":"${funcionality.id}","parent":"suc_proyect","text":"${funcionality.name}", "icon" : "/share/images/icons/funcionality.png"},
</#if>
</#list>
</#if>
</#macro>
