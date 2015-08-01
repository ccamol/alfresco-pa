package com.intellego.parquearauco.security.filters;

import java.io.Serializable;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class ObjectFilter implements Serializable{

	
	private static final long serialVersionUID = 1L;

	@SuppressWarnings("rawtypes")
	public String query(){
		String result = new String();
		String currentQuery = null;

		try {
			for(Method method : this.getClass().getMethods()){
				if(method.getName().contains("get")){
					Object filter = method.invoke(this);
					try{
						if(filter.getClass().getMethod("getQuery", (Class<?>[]) null)!=null){
							currentQuery = ((Filter) filter).getQuery();
							if(currentQuery!=null && currentQuery.length()>0){
								if(result!=null && result.length()>0){
									result=result.concat(" AND ");
								}
								result=result.concat(currentQuery);
							}
						}
					} catch (NoSuchMethodException e){
						
					}
				}
			}

		} catch (IllegalAccessException | IllegalArgumentException
				| InvocationTargetException e) {
			e.printStackTrace();
		} catch (SecurityException e) {
			e.printStackTrace();
		}

		return result;
	}

}
