package com.intellego.parquearauco.entities;

import com.intellego.pa.hibernate.utils.HibernateUtil;

public class Main {

	/**
	 * @param args
	 */

	private final static HibernateUtil hibernateUtil = HibernateUtil.getInstance();


	public static void main(String[] args) {

		// LICITACIONES
		// OrganizationalAreaEntity organizationalArea = new
		// OrganizationalAreaEntity();
		// organizationalArea.setName("Arquitectura");
		// try {
		// hibernateUtil.save(organizationalArea);
		// } catch (HibernateException e) {
		// e.printStackTrace();
		// }

		// try {
		// List<OrganizationalAreaEntity> areas =
		// (List<OrganizationalAreaEntity>) hibernateUtil
		// .getList(OrganizationalAreaEntity.class, null, null);
		// } catch (Exception e) {
		// // TODO: handle exception
		// }
		// try {
		// List<TenderEntity> tenders = (List<TenderEntity>) hibernateUtil
		// .getList(TenderEntity.class, null, null);
		// } catch (Exception e) {
		// // TODO: handle exception
		// }


		// FIN LICITACIONES

		// ProjectTypeEntity tipeProject = new ProjectTypeEntity();
		// tipeProject.setName("Tipo Proyecto 1");
		// try{
		// hibernateUtil.save(tipeProject);
		// }catch (HibernateException e) {
		// e.printStackTrace();
		// }

		//		 System.out.println("Hibernate many to many (XML Mapping)");
		// Session session = HibernateUtil.getSessionFactory().openSession();
		//		 
		//			session.beginTransaction();
		//		 
		//			Stock stock = new Stock();
		//		        stock.setStockCode("7052");
		//		        stock.setStockName("PADINI");
		//		 
		//		        Category category1 = new Category("CONSUMER", "CONSUMER COMPANY");
		//		        Category category2 = new Category("INVESTMENT", "INVESTMENT COMPANY");
		//		 
		//		        Set<Category> categories = new HashSet<Category>();
		//		        categories.add(category1);
		//		        categories.add(category2);
		//		 
		//		        stock.setCategories(categories);
		//		 
		//		        session.save(stock);
		//		 
		//			session.getTransaction().commit();
		//			System.out.println("Done");


		/*
		ProjectTypeEntity type = new ProjectTypeEntity();
		type.setName("tipo 3");

		boolean result = false;
		try{
			hibernateUtil.save(type);
			result = true;
		}catch (HibernateException e) {
			e.printStackTrace();
		}

		StageTypeEntity stage = new StageTypeEntity();
		stage.setName("etapa 4");

//		boolean result = false;
		try{
			hibernateUtil.save(stage);
		}catch (HibernateException e) {
			e.printStackTrace();
		}
		 */
		//        System.out.println("Hibernate many to many (XML Mapping)");
		// 
		//
		// 
		//        ProjectTypeEntity stock = new ProjectTypeEntity();
		//        stock.setName("Prueba tipo 5");
		// 
		//        StageTypeEntity category1 = new StageTypeEntity();
		//        category1.setName("categoria prueba 1");
		//        
		//        StageTypeEntity category2 = new StageTypeEntity();
		//        
		//        category2.setName("categoria prueba 2");
		// 
		//        Set<StageTypeEntity> categories = new HashSet<StageTypeEntity>();
		//        categories.add(category1);
		//        categories.add(category2);
		// 
		//        stock.setStageTypes(categories);
		// 
		//        hibernateUtil.save(stock);
		//
		//	System.out.println("Done");
		/*
		try{
			List<StageTypeEntity> lista = (List<StageTypeEntity>)hibernateUtil.getList(StageTypeEntity.class, null, null);

			for(StageTypeEntity s : lista){
				System.out.println("Stage: " + s.getId());

				Iterator<ProjectTypeEntity> i = s.getProjectTypes().iterator();

				while(i.hasNext()){
					System.out.println("Projetc: " + i.next().getId());
				}

			}
		}catch (HibernateException e) {
			e.printStackTrace();
		}

		 */

		//		try{
		//			List<ProjectTypeEntity> lista = (List<ProjectTypeEntity>)hibernateUtil.getList(ProjectTypeEntity.class, null, null);
		//			
		//			for(ProjectTypeEntity s : lista){
		//				System.out.println("Projetc: " + s.getId());
		//				
		//				Iterator<StageTypeEntity> i = s.getStageTypes().iterator();
		//				
		//				while(i.hasNext()){
		////					System.out.println("stage: " + i.next().getId());
		//					System.out.println("stage: " + i.next().getName());
		//				}
		//				
		//			}
		//		}catch (HibernateException e) {
		//			e.printStackTrace();
		//		}


		//		DocumentTypeEntity type = new DocumentTypeEntity();
		//		type.setName("tipo 2");
		//
		//		try{
		//			hibernateUtil.save(type);
		//		}catch (HibernateException e) {
		//			e.printStackTrace();
		//		}

		//		StageTypeEntity type = new StageTypeEntity();
		//		type.setName("etapa 3");
		//
		//		try{
		//			hibernateUtil.save(type);
		//		}catch (HibernateException e) {
		//			e.printStackTrace();
		//		}


		//		try{
		//			List<StageTypeEntity> lista = (List<StageTypeEntity>)hibernateUtil.getList(StageTypeEntity.class, null, null);
		//			
		//			for(StageTypeEntity s : lista){
		//				System.out.println("Stage: " + s.getId());
		//				
		//				Iterator<DocumentTypeEntity> i = s.getDocumentTypes().iterator();
		//				
		//				while(i.hasNext()){
		//					System.out.println("document: " + i.next().getId());
		//				}
		//				
		//			}
		//		}catch (HibernateException e) {
		//			e.printStackTrace();
		//		}

		//		CountryEntity country =new CountryEntity();
		//		country.setId(1);
		//		country.setName("Chile");
		//		
		//		MallTypeEntity mallType =new MallTypeEntity();
		//		mallType.setId(1);
		//		mallType.setName("Mall");
		//		
		//		MallEntity mall = new MallEntity();
		//		mall.setCountry(country);
		//		mall.setIdMallSap("Sap1234");
		//		mall.setName("Parque Arauco");
		// mall.setFinanceCompany("compa�ia 1");
		//		mall.setSubProjectManager("Felipe Nino");
		//		mall.setMallType(mallType);
		//		try{
		//			hibernateUtil.save(mall);
		//		}catch (HibernateException e) {
		//			e.printStackTrace();
		//		}


		//		try{
		//		List<MallTypeEntity> lista = (List<MallTypeEntity>)hibernateUtil.getList(MallTypeEntity.class, null, null);
		//		
		//		for(MallTypeEntity s : lista){
		//			System.out.println("Mall Type: " + s.getId());
		//			
		//			Iterator<MallEntity> i = s.getMall().iterator();
		//			
		//			while(i.hasNext()){
		//				System.out.println("document: " + i.next().getName());
		//			}
		//			
		//		}
		//	}catch (HibernateException e) {
		//		e.printStackTrace();
		//	}

//				CountryEntity country =new CountryEntity();
//				country.setName("Chile");
//				try{
//					hibernateUtil.save(country);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				country =new CountryEntity();
//				country.setName("Argentina");
//				try{
//					hibernateUtil.save(country);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				country =new CountryEntity();
//				country.setName("Brasil");
//				try{
//					hibernateUtil.save(country);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				country =new CountryEntity();
//				country.setName("Colombia");
//				try{
//					hibernateUtil.save(country);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				MallTypeEntity mallType =new MallTypeEntity();
//				mallType.setName("Mall");
//				try{
//					hibernateUtil.save(mallType);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				mallType =new MallTypeEntity();
//				mallType.setName("Outlet");
//				try{
//					hibernateUtil.save(mallType);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				OperatorEntity operator = new OperatorEntity();
//				operator.setName("Operador 1");
//				try{
//					hibernateUtil.save(operator);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				operator = new OperatorEntity();
//				operator.setName("Operador 2");
//				try{
//					hibernateUtil.save(operator);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				operator = new OperatorEntity();
//				operator.setName("Operador 3");
//				try{
//					hibernateUtil.save(operator);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				
//				mallType =new MallTypeEntity();
//				mallType.setName("Mall");
//				mallType.setId(1);
//				
//				country =new CountryEntity();
//				country.setName("Chile");
//				country.setId(1);
//				
//				MallEntity mall = new MallEntity();
//				mall.setCountry(country);
//				mall.setIdMallSap("S2321");
//				mall.setName("Mall Plaza Oeste");
		// mall.setFinanceCompany("compa�ia 1");
//				mall.setSubProjectManager("Felipe Nino");
//				mall.setMallType(mallType);
//				try{
//					hibernateUtil.save(mall);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				mallType =new MallTypeEntity();
//				mallType.setName("Mall");
//				mallType.setId(1);
//				
//				country =new CountryEntity();
//				country.setName("Chile");
//				country.setId(1);
//				
//				mall = new MallEntity();
//				mall.setCountry(country);
//				mall.setIdMallSap("S2321");
//				mall.setName("Mall Maipu");
		// mall.setFinanceCompany("compa�ia 1");
//				mall.setSubProjectManager("Felipe Nino");
//				mall.setMallType(mallType);
//				try{
//					hibernateUtil.save(mall);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				mallType =new MallTypeEntity();
//				mallType.setName("Mall");
//				mallType.setId(1);
//				
//				country =new CountryEntity();
//				country.setName("Chile");
//				country.setId(1);
//				
//				mall = new MallEntity();
//				mall.setCountry(country);
//				mall.setIdMallSap("S2321");
//				mall.setName("Mall Vespucio");
		// mall.setFinanceCompany("compa�ia 1");
//				mall.setSubProjectManager("Felipe Nino");
//				mall.setMallType(mallType);
//				try{
//					hibernateUtil.save(mall);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				mallType =new MallTypeEntity();
//				mallType.setName("Mall");
//				mallType.setId(1);
//				
//				country =new CountryEntity();
//				country.setName("Chile");
//				country.setId(1);
//				
//				mall = new MallEntity();
//				mall.setCountry(country);
//				mall.setIdMallSap("S2321");
//				mall.setName("Costanera Center");
		// mall.setFinanceCompany("compa�ia 1");
//				mall.setSubProjectManager("Felipe Nino");
//				mall.setMallType(mallType);
//				try{
//					hibernateUtil.save(mall);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				mallType =new MallTypeEntity();
//				mallType.setName("Mall");
//				mallType.setId(1);
//				
//				country =new CountryEntity();
//				country.setName("Chile");
//				country.setId(1);
//				
//				mall = new MallEntity();
//				mall.setCountry(country);
//				mall.setIdMallSap("S2321");
//				mall.setName("Las Condes");
		// mall.setFinanceCompany("compa�ia 1");
//				mall.setSubProjectManager("Felipe Nino");
//				mall.setMallType(mallType);
//				try{
//					hibernateUtil.save(mall);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				mallType =new MallTypeEntity();
//				mallType.setName("Mall");
//				mallType.setId(1);
//				
//				country =new CountryEntity();
//				country.setName("Chile");
//				country.setId(1);
//				
//				mall = new MallEntity();
//				mall.setCountry(country);
//				mall.setIdMallSap("S2321");
//				mall.setName("Mall 10");
		// mall.setFinanceCompany("compa�ia 1");
//				mall.setSubProjectManager("Felipe Nino");
//				mall.setMallType(mallType);
//				try{
//					hibernateUtil.save(mall);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				mallType =new MallTypeEntity();
//				mallType.setName("Mall");
//				mallType.setId(1);
//				
//				country =new CountryEntity();
//				country.setName("Chile");
//				country.setId(1);
//				
//				mall = new MallEntity();
//				mall.setCountry(country);
//				mall.setIdMallSap("S2321");
//				mall.setName("Mall 11");
		// mall.setFinanceCompany("compa�ia 1");
//				mall.setSubProjectManager("Felipe Nino");
//				mall.setMallType(mallType);
//				try{
//					hibernateUtil.save(mall);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				mallType =new MallTypeEntity();
//				mallType.setName("Outlet");
//				mallType.setId(2);
//				
//				country =new CountryEntity();
//				country.setName("Chile");
//				country.setId(1);
//				
//				mall = new MallEntity();
//				mall.setCountry(country);
//				mall.setIdMallSap("S2321");
//				mall.setName("Outlet 1");
		// mall.setFinanceCompany("compa�ia 1");
//				mall.setSubProjectManager("Felipe Nino");
//				mall.setMallType(mallType);
//				try{
//					hibernateUtil.save(mall);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//				
//				mallType =new MallTypeEntity();
//				mallType.setName("Outlet");
//				mallType.setId(2);
//				
//				country =new CountryEntity();
//				country.setName("Chile");
//				country.setId(1);
//				
//				mall = new MallEntity();
//				mall.setCountry(country);
//				mall.setIdMallSap("S2321");
//				mall.setName("Outlet 2");
		// mall.setFinanceCompany("compa�ia 1");
//				mall.setSubProjectManager("Felipe Nino");
//				mall.setMallType(mallType);
//				try{
//					hibernateUtil.save(mall);
//				}catch (HibernateException e) {
//					e.printStackTrace();
//				}
//
//
//		ProjectTypeEntity tipeProject = new ProjectTypeEntity();
//		tipeProject.setName("Tipo Proyecto 1");
//		try{
//			hibernateUtil.save(tipeProject);
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//		tipeProject = new ProjectTypeEntity();
//		tipeProject.setName("Tipo Proyecto 2");
//		try{
//			hibernateUtil.save(tipeProject);
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//		tipeProject = new ProjectTypeEntity();
//		tipeProject.setName("Tipo Proyecto 3");
//				try{
//			hibernateUtil.save(tipeProject);
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//
//		mall = new MallEntity();
//		mall.setId(1);
//		
//		operator = new OperatorEntity();
//		operator.setId(1);
//		
//		tipeProject = new ProjectTypeEntity();
//		tipeProject.setId(1);
//		
//		ArchitectureProjectEntity archite = new ArchitectureProjectEntity();
//		archite.setDescription("Proyecto 1 arquitectura description");
//		archite.setName("Proyecto arquitectura 1");
//		archite.setMall(mall);
//		archite.setOperator(operator);
//		archite.setProjectType(tipeProject);
//
//		try{
//			hibernateUtil.save(archite);
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//		
//		mall = new MallEntity();
//		mall.setId(1);
//		
//		operator = new OperatorEntity();
//		operator.setId(2);
//		
//		tipeProject = new ProjectTypeEntity();
//		tipeProject.setId(2);
//		
//		archite = new ArchitectureProjectEntity();
//		archite.setDescription("Proyecto 2 arquitectura description");
//		archite.setName("Proyecto arquitectura 2");
//		archite.setMall(mall);
//		archite.setOperator(operator);
//		archite.setProjectType(tipeProject);
//
//		try{
//			hibernateUtil.save(archite);
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//		
//		mall = new MallEntity();
//		mall.setId(1);
//		
//		operator = new OperatorEntity();
//		operator.setId(3);
//		
//		tipeProject = new ProjectTypeEntity();
//		tipeProject.setId(3);
//		
//		archite = new ArchitectureProjectEntity();
//		archite.setDescription("Proyecto 3 arquitectura description");
//		archite.setName("Proyecto arquitectura 3");
//		archite.setMall(mall);
//		archite.setOperator(operator);
//		archite.setProjectType(tipeProject);
//
//		try{
//			hibernateUtil.save(archite);
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//		
////FN
//		
//		mall = new MallEntity();
//		mall.setId(1);
//		
//		operator = new OperatorEntity();
//		operator.setId(1);
//		
//		tipeProject = new ProjectTypeEntity();
//		tipeProject.setId(1);
//		
//		EngineeringProjectEntity engi = new EngineeringProjectEntity();
//		engi.setDescription("Proyecto 1 ingenieria description");
//		engi.setName("Proyecto ingenieria 1");
//		engi.setMall(mall);
//		engi.setProjectType(tipeProject);
//
//		try{
//			hibernateUtil.save(engi);
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//		
//		mall = new MallEntity();
//		mall.setId(1);
//		
//		operator = new OperatorEntity();
//		operator.setId(1);
//		
//		tipeProject = new ProjectTypeEntity();
//		tipeProject.setId(1);
//		
//		 engi = new EngineeringProjectEntity();
//		engi.setDescription("Proyecto 2 ingenieria description");
//		engi.setName("Proyecto ingenieria 2");
//		engi.setMall(mall);
//		engi.setProjectType(tipeProject);
//
//		try{
//			hibernateUtil.save(engi);
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
//		
//		mall = new MallEntity();
//		mall.setId(1);
//		
//		operator = new OperatorEntity();
//		operator.setId(1);
//		
//		tipeProject = new ProjectTypeEntity();
//		tipeProject.setId(1);
//		
//		 engi = new EngineeringProjectEntity();
//		engi.setDescription("Proyecto 3 ingenieria description");
//		engi.setName("Proyecto ingenieria 3");
//		engi.setMall(mall);
//		engi.setProjectType(tipeProject);
//
//		try{
//			hibernateUtil.save(engi);
//		}catch (HibernateException e) {
//			e.printStackTrace();
//		}
		
		
		
		
		// try{
		// List<ProjectTypeEntity> lista =
		// (List<ProjectTypeEntity>)hibernateUtil.getList(ProjectTypeEntity.class,
		// null, null);
		//
		// for(ProjectTypeEntity s : lista){
		// System.out.println("Project Type: " + s.getId());
		//
		// Iterator<ArchitectureProjectEntity> i =
		// s.getArchitectureProjects().iterator();
		//
		// while(i.hasNext()){
		// System.out.println("document: " + i.next().getName());
		// }
		//
		// Iterator<EngineeringProjectEntity> j =
		// s.getEngineeringProjecs().iterator();
		//
		// while(j.hasNext()){
		// System.out.println("document: " + j.next().getName());
		// }
		//
		// }
		// }catch (HibernateException e) {
		// e.printStackTrace();
		// }



	}

}
