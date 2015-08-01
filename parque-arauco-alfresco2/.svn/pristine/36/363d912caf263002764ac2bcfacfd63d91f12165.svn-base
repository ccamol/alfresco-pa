package com.intellego.pa.webscripts.download;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Locale;

import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.service.ServiceRegistry;
import org.alfresco.service.cmr.repository.ContentService;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.service.cmr.repository.StoreRef;
import org.alfresco.service.namespace.NamespaceService;
import org.apache.poi.hssf.usermodel.HSSFCell;
import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.hssf.usermodel.HSSFFont;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.springframework.extensions.webscripts.AbstractWebScript;
import org.springframework.extensions.webscripts.WebScriptRequest;
import org.springframework.extensions.webscripts.WebScriptResponse;

import com.intellego.parquearauco.baseprocessorextension.Answers;
import com.intellego.parquearauco.baseprocessorextension.Questions;
import com.intellego.parquearauco.baseprocessorextension.Tenders;
import com.intellego.parquearauco.dto.Answer;
import com.intellego.parquearauco.dto.Question;
import com.intellego.parquearauco.dto.Response;
import com.intellego.parquearauco.dto.Tender;
import com.intellego.parquearauco.filters.AnswerFilter;
import com.intellego.parquearauco.filters.QuestionFilter;
import com.intellego.parquearauco.security.filters.NumericFilter;


public class exportExcelConsults extends AbstractWebScript {

	private static final StoreRef STORE_REF = new StoreRef(StoreRef.PROTOCOL_WORKSPACE, "SpacesStore");

	protected ServiceRegistry serviceRegistry;
	private NamespaceService namespaceService;
	private ContentService contentService;
	private NodeService nodeService;

	@Override
	public void execute(final WebScriptRequest req, final WebScriptResponse res)
			throws IOException {
		AuthenticationUtil.runAs(new AuthenticationUtil.RunAsWork<String>() {
			public String doWork(){
				try{
					String questionsStatus = req.getParameter("questionsStatus");
					String stageStatus = req.getParameter("stageStatus");
					String status = req.getParameter("status");
					String idTender = req.getParameter("idTender");
					String fileName = null;
					int count;
					byte[] b = new byte[1024];
					OutputStream out = res.getOutputStream();
					Tenders tenders = new Tenders();
					Response<Tender> responseTender = tenders.getById(Integer.parseInt(idTender));
					fileName = responseTender.getResult().getName()+".xls";
					HSSFWorkbook workbook = new HSSFWorkbook();
					HSSFSheet sheet = workbook.createSheet();
					int rowsNum = sheet.getPhysicalNumberOfRows();
					HSSFRow row = sheet.createRow((short)rowsNum);
					HSSFCellStyle cellStyle = workbook.createCellStyle();
					cellStyle = workbook.createCellStyle();
					HSSFFont font = workbook.createFont();
					font.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);

					row.createCell(0).setCellValue("");
					row.createCell(1).setCellValue("Categoría");
					row.createCell(2).setCellValue("Pregunta/Respuesta");
					row.createCell(3).setCellValue("Fecha");
					row.createCell(4).setCellValue("Autor");
					cellStyle.setFont(font);

					for (int i = 0; i <= 4; i++) {
						row.getCell(i).setCellStyle(cellStyle);
					}

					QuestionFilter questionFilter = new QuestionFilter();
					questionFilter.getTender().exact(Integer.parseInt(idTender), NumericFilter.EQUALS_TO);
					questionFilter.getStatus().exact(Integer.parseInt(status), NumericFilter.EQUALS_TO);

					Questions questions = new Questions();
					Response<List<Question>> response = questions.getListByFilter(questionFilter);
					String dateQuestions = null;
					String dateAnswers = null;
					Answers answers = new Answers();
					AnswerFilter answerFilter = new AnswerFilter();
					SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy" , Locale.ENGLISH);	
					if(response.getResult().size() > 0){
						for (int i = 0; i < response.getResult().size(); i++) {
							HSSFRow rowDataQuestions = sheet.createRow((short)sheet.getPhysicalNumberOfRows()+1);
							dateQuestions = format.format(response.getResult().get(i).getQuestionDate());
							rowDataQuestions.createCell(0).setCellValue("Pregunta");
							rowDataQuestions.createCell(1).setCellValue(response.getResult().get(i).getCategory().getName());
							rowDataQuestions.createCell(2).setCellValue(response.getResult().get(i).getQuestion());
							rowDataQuestions.createCell(3).setCellValue(dateQuestions);
							rowDataQuestions.createCell(4).setCellValue(response.getResult().get(i).getAuthor());

							answerFilter.getQuestion().exact(response.getResult().get(i).getId(), NumericFilter.EQUALS_TO);
							Response<List<Answer>> responseAnswer = answers.getListByFilter(answerFilter);
							if(responseAnswer.getResult().size() > 0){
								for (int j = 0; j < responseAnswer.getResult().size(); j++) {
									HSSFRow rowDataAnswer = sheet.createRow((short)sheet.getPhysicalNumberOfRows()+1);
									dateAnswers = format.format(responseAnswer.getResult().get(j).getAnswerDate());
									rowDataAnswer.createCell(0).setCellValue("Respuesta");
									rowDataAnswer.createCell(1).setCellValue(response.getResult().get(i).getCategory().getName());
									rowDataAnswer.createCell(2).setCellValue(responseAnswer.getResult().get(j).getAnswer());
									rowDataAnswer.createCell(3).setCellValue(dateAnswers);
									rowDataAnswer.createCell(4).setCellValue(responseAnswer.getResult().get(j).getAuthor());
								}

							}
						}
					}

					int numColumn = sheet.getRow(0).getPhysicalNumberOfCells();
					for (int i = 0; i < numColumn; i++) {
						if(i == 2){
							sheet.setColumnWidth(i, 24000);
						}else{
							sheet.autoSizeColumn(i);
						}
					}

					FileOutputStream fileOut = new FileOutputStream(fileName);
					workbook.write(fileOut);
					fileOut.close();

					FileInputStream inputStream = new FileInputStream(fileName);
					while ((count = inputStream.read(b)) > 0) {
						out.write(b, 0, count);
					}
					inputStream.close();
					out.close();
					res.setContentType("application/vnd.ms-excel");
					res.setHeader("Content-Disposition", "attachment; filename=\"" + fileName + "\"");
					res.getOutputStream().flush();

				}catch(Exception e){
					e.printStackTrace();
					return null;
				}
				return null;
			}
		},"admin");
	}

	public ServiceRegistry getServiceRegistry() {
		return serviceRegistry;
	}

	public void setServiceRegistry(ServiceRegistry serviceRegistry) {
		this.serviceRegistry = serviceRegistry;
	}

	public NamespaceService getNamespaceService() {
		return namespaceService;
	}

	public void setNamespaceService(NamespaceService namespaceService) {
		this.namespaceService = namespaceService;
	}
	public ContentService getContentService() {
		return contentService;
	}

	public void setContentService(ContentService contentService) {
		this.contentService = contentService;
	}

	public NodeService getNodeService() {
		return nodeService;
	}

	public void setNodeService(NodeService nodeService) {
		this.nodeService = nodeService;
	}

}

