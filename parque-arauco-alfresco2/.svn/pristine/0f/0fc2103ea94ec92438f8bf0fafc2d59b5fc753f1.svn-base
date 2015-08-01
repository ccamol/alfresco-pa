package com.intellego.parquearauco.security.interfaces;


import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

import org.alfresco.repo.processor.BaseProcessorExtension;
import org.alfresco.service.ServiceRegistry;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.security.annotations.Dto;
import com.intellego.parquearauco.security.dto.Basic;
import com.intellego.parquearauco.security.entities.BasicEntity;
import com.intellego.parquearauco.security.filters.ObjectFilter;

public class EntityManager<T extends Basic> extends BaseProcessorExtension {

	private static SessionFactory factory;
	//private Session session;
	//private Transaction tx = null; 

	protected ServiceRegistry serviceRegistry;

	private Class<T> className;

	public EntityManager(Class<T> className){
		this.className = className;
	}

	private Session getSession() {
		if(factory == null){
			factory = new Configuration().configure().buildSessionFactory();
		}

		return factory.openSession();
	}

	private void closeSession(Session session) {
		if(session != null && session.isOpen()){
			session.close();
		}   	
	}

	private void handleException(Transaction tx, Exception e){
		if (tx != null){
			tx.rollback(); 
		}
		e.printStackTrace();
	}

	public Response<T> add(T record) {
		Session session = getSession();
		Transaction tx = null; 
		Response<T> response = new Response<T>();

		try{ 
			tx = session.beginTransaction(); 
			response.setStatus((Integer) session.save(cloneObject(record))); 
			if(response.getStatus()>0){
				response.setMessage("Registro añadido con Éxito");
			}
			tx.commit(); 
		}catch (HibernateException e) { 
			handleException(tx, e);
		}finally { 
			closeSession(session);
		} 

		return response; 
	}

	public Response<T> remove(T record){
		Session session = getSession();
		Transaction tx = null; 
		Response<T> response = new Response<T>();

		try{ 
			tx = session.beginTransaction(); 
			session.delete(this.cloneObject(record)); 
			tx.commit();
			response.setStatus(1);
			response.setMessage("Registro eliminado");
		}catch (HibernateException e) { 
			handleException(tx, e);
		}finally { 
			closeSession(session);
		}

		return response; 
	}

	public Response<T> addOrUpdate(T record) {
		Session session = getSession();
		Transaction tx = null;  
		Response<T> response = new Response<T>();

		try{ 
			tx = session.beginTransaction();
			session.saveOrUpdate(this.cloneObject(record)); 
			tx.commit();
			response.setStatus(1);
			response.setMessage("Registro añadido o actualziado con Éxito");
		}catch (HibernateException e) { 
			handleException(tx, e);
		}finally { 
			closeSession(session);
		} 

		return response; 
	}

	public Response<T> update(T record){
		Session session = getSession();
		Transaction tx = null;  
		Response<T> response = new Response<T>();


		try{ 
			tx = session.beginTransaction();
			session.update(this.cloneObject(record)); 
			tx.commit();
			response.setStatus(1);
			response.setMessage("Registro actualizado con Éxito");
		}catch (HibernateException e) { 
			handleException(tx, e);
		}finally { 
			closeSession(session);
		} 

		return response; 
	}

	@SuppressWarnings("unchecked")
	public Response<T> getById(int id){
		Session session = getSession();
		Response<T> response = new Response<T>();
		Transaction tx = null; 

		try{
			tx = session.beginTransaction();
			response.setResult((T) this.entityObject(session.get(Class.forName(getEntity()), id)));
			if(response.getResult()==null){
				response.setStatus(-1);
				response.setMessage("Registro no procesado");
			}else{
				response.setStatus(1);
				response.setMessage("Proceso realizado con Éxito");
			}
		}catch (HibernateException e) { 
			handleException(tx, e);
		} catch (ClassNotFoundException e) {
			handleException(tx, e);
		}finally { 
			closeSession(session);
		} 

		return response; 
	}

	public long size(){
		Session session = getSession();
		Long result = -1L;
		Transaction tx = null; 

		try{ 
			tx = session.beginTransaction();
			String query = "SELECT count(A.id) FROM " + Class.forName(getEntity()).getName() + " A";
			result = (Long)session.createQuery(query).uniqueResult();
		}catch (HibernateException e) {
			handleException(tx, e);
		} catch (ClassNotFoundException e) {
			handleException(tx, e);
		}finally { 
			closeSession(session);
		} 

		return result; 
	}

	public long max(){
		Session session = getSession();
		Long result = -1L;
		Transaction tx = null; 

		try{ 
			tx = session.beginTransaction();
			String query = "SELECT max(A.id) FROM " + Class.forName(getEntity()).getName() + " A";
			result = new Long(session.createQuery(query).uniqueResult().toString());
		}catch (HibernateException e) { 
			handleException(tx, e);
		} catch (ClassNotFoundException e) {
			handleException(tx, e);
		}finally { 
			closeSession(session);
		} 

		return result; 
	}

	public Response<List<T>> getAll(String query){
		Session session = getSession();
		Response<List<T>> response = new Response<List<T>>();
		Transaction tx = null; 

		try{
			tx = session.beginTransaction();
			response.setResult(cloneList(session.createQuery(query).list()));
			response.setStatus(1);
			response.setMessage("Operación ejecutada con éxito");
		}catch (HibernateException e) { 
			handleException(tx, e);
		}finally { 
			closeSession(session);
		} 

		return response; 
	}

	public Response<List<T>> getAll(){
		Session session = getSession();
		Response<List<T>> response = new Response<List<T>>();
		Transaction tx = null; 

		try{
			tx = session.beginTransaction();
			Criteria criteria = session.createCriteria(Class.forName(getEntity()));
			response.setResult(cloneList(criteria.list()));
			response.setStatus(1);
			response.setMessage("Operación ejecutada con Éxito");
		}catch (HibernateException e) { 
			handleException(tx, e);
		}catch (ClassNotFoundException e) {
			handleException(tx, e);
		}finally { 
			closeSession(session);
		} 

		return response; 
	}


	public Response<List<T>> getListByFilter(ObjectFilter filter){
		Response<List<T>> response = new Response<List<T>>();

		String dinamicQuery = new String();

		if(filter!=null) dinamicQuery = filter.query();

		String query = new String();
		if(filter!=null && dinamicQuery!=null && dinamicQuery.length()>0){
			try {
				query = "FROM " + Class.forName(getEntity()).getName() + " A WHERE " + dinamicQuery;
				response = getAll(query);
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}
		}else{
			response = getAll();
		}

		return response; 
	}
	public Response<List<T>> getListByFilter(ObjectFilter filter, String id, boolean orderType){
		Response<List<T>> response = new Response<List<T>>();

		String dinamicQuery = new String();

		if(filter!=null) dinamicQuery = filter.query();

		String query = new String();
		if(filter!=null && dinamicQuery!=null && dinamicQuery.length()>0){
			try {
				if(orderType){
					query = "FROM " + Class.forName(getEntity()).getName() + " A WHERE " + dinamicQuery + " ORDER BY " + id + " ASC";
				}else{
					query = "FROM " + Class.forName(getEntity()).getName() + " A WHERE " + dinamicQuery + " ORDER BY " + id + " DESC";
				}
				response = getAll(query);
			} catch (ClassNotFoundException e) {
				e.printStackTrace();
			}
		}else{
			response = getAll();
		}

		return response; 
	}


	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Object cloneObject(T basicDTO){

		Object destination = null;

		if(basicDTO!=null){
			Class sourceClass = basicDTO.getClass();
			String targetClassName = sourceClass.getName().concat("Entity");
			targetClassName= targetClassName.replace("dto", "entities");

			try {

				destination = Class.forName(targetClassName).newInstance();
				Class destinationClass=Class.forName(targetClassName);

				for(Method method : destinationClass.getMethods()){
					if(method.getName().contains("set")){
						String getMethod = method.getName().replace("set", "get");
						Method sourceClassMethod = sourceClass.getMethod(getMethod);
						if(sourceClass.getMethod(getMethod).getReturnType().toString().contains("dto")){
							method.invoke(destination, this.cloneObject((T) sourceClassMethod.invoke(basicDTO)));
						}else{
							method.invoke(destination, sourceClassMethod.invoke(basicDTO));
						}

					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		return destination;
	}

	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Object entityObject(Object object){

		Object destination = null;

		if(object!=null){
			Class sourceClass = object.getClass();
			String targetClassName = sourceClass.getName().replace("Entity", "");
			targetClassName= targetClassName.replace("entities", "dto");
			if(targetClassName.indexOf("$")>-1)
				targetClassName= targetClassName.substring(0, targetClassName.indexOf("$"));


			try {

				destination = Class.forName(targetClassName).newInstance();
				Class destinationClass=Class.forName(targetClassName);

				for(Method method : destinationClass.getMethods()){
					if(method.getName().contains("set")){
						String getMethod = method.getName().replace("set", "get");

						try {
							Method sourceClassMethod = sourceClass.getMethod(getMethod);

							if(sourceClass.getMethod(getMethod).getReturnType().toString().contains("Entity")){
								method.invoke(destination, this.entityObject((BasicEntity) sourceClassMethod.invoke(object)));
							}else{
								method.invoke(destination, sourceClassMethod.invoke(object));
							}
						} catch (Exception e) {
							e.printStackTrace();
						}
					}
				}
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		return destination;
	}

	@SuppressWarnings("unchecked")
	public List<T> cloneList(List<?> inList){

		List<T> result = new ArrayList<T>();

		for(int i = 0; i < inList.size(); i++){
			try {

				Object source = inList.get(i);

				result.add((T)entityObject(source));
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

		return result;
	}

	private String getEntity(){
		return  className.getAnnotation(Dto.class).entity();
	}

	public static SessionFactory getFactory() {
		return factory;
	}

	public static void setFactory(SessionFactory factory) {
		EntityManager.factory = factory;
	}

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}


}
