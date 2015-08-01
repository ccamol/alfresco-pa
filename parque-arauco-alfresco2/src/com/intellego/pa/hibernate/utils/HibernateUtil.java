package com.intellego.pa.hibernate.utils;

import java.util.List;
import java.util.Map;
import java.util.Map.Entry;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
//import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.cfg.Configuration;
import org.hibernate.criterion.Restrictions;

@SuppressWarnings("deprecation")
public final class HibernateUtil{
    
	private static HibernateUtil hibernateUtil;
	
	private SessionFactory sessionFactory;
	private Session session;
	
	private HibernateUtil(){
		sessionFactory = new Configuration().configure().buildSessionFactory();
	}
    
    public static HibernateUtil getInstance(){
    	if(hibernateUtil == null){
    		hibernateUtil = new HibernateUtil();
    	}
    	
    	return hibernateUtil;
    }
    
    private void openSession() {
    	session = sessionFactory.openSession();
    } 
    
    private void shutDown() {
    	session.close();
    }
    
	public List<?> getList(Class<?> clazz, Map<String, Object> restrictionsEq, Map<String, Object> restrictionsNe){
    	try{
    		openSession();
        	
        	Criteria criteria = session.createCriteria(clazz);
        	
        	if(restrictionsEq != null){
        		for(Entry<String, Object> res : restrictionsEq.entrySet()){
            		criteria = criteria.add(Restrictions.eq(res.getKey(), res.getValue()));
            	}
        	}
        	
        	if(restrictionsNe != null){
        		for(Entry<String, Object> res : restrictionsNe.entrySet()){
            		criteria = criteria.add(Restrictions.eq(res.getKey(), res.getValue()));
            	}
        	}        	    	
    		
    		return criteria.list();
    	}finally{
    		shutDown();
    	}
    }
	
	public Object getObject(Class<?> clazz, Map<String, Object> restrictionsEq, Map<String, Object> restrictionsNe){
    	
		List<?> list = getList(clazz, restrictionsEq, restrictionsNe);
		
		if(list.size() > 1){
			throw new RuntimeException("La consulta trajo mas de un dato");
		}
    		
    	return list.get(0);
    }
	
	public void save(Object object){
		try{
    		openSession();
    		Transaction tx = session.beginTransaction();
    		session.saveOrUpdate(object);
    		tx.commit();
    	}finally{
    		shutDown();
    	}
		
	}
	
	public void delete(Object object){
		try{
    		openSession();
    		Transaction tx = session.beginTransaction();
    		session.delete(object);
    		tx.commit();
    	}finally{
    		shutDown();
    	}
	}
}
