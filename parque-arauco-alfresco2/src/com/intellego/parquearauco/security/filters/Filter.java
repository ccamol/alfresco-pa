package com.intellego.parquearauco.security.filters;

import java.io.Serializable;
import java.util.Date;
import java.util.List;


public class Filter<T extends Object> implements Serializable {

	private static final long serialVersionUID = 1L;

	private String field;
	
	private Class<T> className;
	
	public static final Integer GREATER_THAN = 2;
	public static final Integer GREATER_EQUALS_THAN = 1;
	public static final Integer EQUALS_TO = 0;
	public static final Integer LOWER_EQUALS_THAN = -1;
	public static final Integer LOWER_THAN = -2;
	
	public static final Integer STARTS_WITH_UPPERCASE = 3;
	public static final Integer ENDS_WITH_UPPERCASE = 4;
	public static final Integer CONTAINS_UPPERCASE = 5;
	public static final Integer STARTS_WITH = 6;
	public static final Integer ENDS_WITH = 7;
	public static final Integer CONTAINS = 8;
	public static final Integer NO_EQUALS_TO = 9;
	
	

	private T value;
	private int comparator;
	private List<T> inList;
	private List<T> multipleList;
	private T from;
	private T to;

	public Filter(Class<T> className){
		this.className = className;
		this.value=null;
		this.inList=null;
		this.from=null;
		this.to=null;
	}

	public void exact(T value, int comparator){
		
		if(value!=null){
			this.value=value;
			this.comparator=comparator;
		}
	}
	
	public void into(List<T> terms){
		this.inList = terms;
	}

	public void containsMultiple(List<T> terms){
		this.multipleList = terms;
	}

	public void between(T from, T to){
		this.from=from;
		this.to=to;
	}
	
	public String getQuery(){
		
		String query = new String();
		
		if(this.className==Integer.class){
			query=getNumericQuery();
		}else if(this.className==String.class){
			query=getTextQuery();
		}else if(this.className==Date.class){

		}else if(this.className==Boolean.class){
			
		}
		
		return query;
	}
	
	private String getNumericQuery(){
		String query=new String();
		
		if(this.value!=null){
				query = "A." + this.field + getOperator() + this.value;
		}else if(this.from!=null && this.to!=null){
			query = "A." + this.field + " between " + this.from + " and " + this.to;
		}else if(this.inList!=null && this.inList.size()>0){
			query = "A." + this.field + " in(";
			for(int i=0;i<this.inList.size();i++){
				query = query.concat((this.inList.get(i)).toString());
				if(i<this.inList.size()-1) query = query.concat(",");
			}
			query = query.concat(")");
		}else if(this.multipleList!=null && this.multipleList.size()>0){
			query = "A." + this.field + " in(";
			for(int i=0;i<this.inList.size();i++){
				query = query.concat((this.inList.get(i)).toString());
				if(i<this.inList.size()-1) query = query.concat(",");
			}
			query = query.concat(")");
		}
		return query;
	}

	private String getTextQuery(){
		String query=new String();
		
		if(this.value!=null){
			query = getWildCard();
		}else if(this.from!=null && this.to!=null){
			query = "A." + this.field + " between '" + this.from + "' and '" + this.to + "'";
		}else if(this.inList!=null && this.inList.size()>0){
			query = "A." + this.field + " in(";
			for(int i=0;i<this.inList.size();i++){
				query = query.concat("'" + (this.inList.get(i)).toString() + "'");
				if(i<this.inList.size()-1) query = query.concat(",");
			}
			query = query.concat(")");
		}else if(this.multipleList!=null && this.multipleList.size()>0){
			query = "(";
			for(int i=0;i<this.multipleList.size();i++){
				query = query.concat("upper(A." + this.field + ") LIKE " +"'%" + (((String) this.multipleList.get(i)).toUpperCase()) + "%'");
				if(i<this.multipleList.size()-1) query = query.concat(" OR ");
			}
			query = query.concat(")");
		}
		return query;
	}

	private String getWildCard(){
		String wildCard=new String();
		
		if (comparator == STARTS_WITH_UPPERCASE) {
			wildCard="upper(A." + this.field + ") LIKE '" + ((String) this.value).toUpperCase() + "%'";
		} else if (comparator == ENDS_WITH_UPPERCASE) {
			wildCard="upper(A." + this.field + ") LIKE '%" + ((String) this.value).toUpperCase() + "'";
		} else if (comparator == CONTAINS_UPPERCASE) {
			wildCard="upper(A." + this.field + ") LIKE '%" + ((String) this.value).toUpperCase() + "%'";
		} else if (comparator == STARTS_WITH) {
			wildCard="A." + this.field + " LIKE '" + this.value + "%'";
		} else if (comparator == ENDS_WITH) {
			wildCard="A." + this.field + " LIKE '%" + this.value + "'";
		} else if (comparator == CONTAINS) {
			wildCard="A." + this.field + " LIKE '%" + this.value + "%'";
		} else if (comparator == EQUALS_TO) {
			wildCard="A." + this.field + " LIKE '" + this.value + "'";
		}  else if (comparator == NO_EQUALS_TO) {
			wildCard="A." + this.field + " NOT LIKE '" + this.value + "'";
		}
		
		
		return wildCard;
	}
	
	
	private String getOperator(){
		
		String operator=new String();
		
		if (comparator == GREATER_THAN) {
			operator=">";
		} else if (comparator == GREATER_EQUALS_THAN) {
			operator=">=";
		} else if (comparator == EQUALS_TO) {
			operator="=";
		} else if (comparator == LOWER_EQUALS_THAN) {
			operator="<=";
		} else if (comparator == LOWER_THAN) {
			operator="<";
		}else if (comparator == NO_EQUALS_TO) {
			operator="!=";
		}
		
		return operator;
	}

	public String getField() {
		return field;
	}

	public void setField(String field) {
		this.field = field;
	}
	
}
