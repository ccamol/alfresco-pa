{"resultSet" :[

    {
        <#if resultSet?exists >
        "status" : "${resultSet?string?replace(".", "")}"
     	</#if>
    }

]}