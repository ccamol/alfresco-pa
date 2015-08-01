<import resource="classpath:alfresco/extension/objectModelParqueArauco.js">

private String name;
private Date finishDate;

private Mall mall;

private ProjectType projectType;

private EngineeringProjectStatus engineeringProjectStatusEntity;

private String description;



var name = (args.name !='' || args.name !=undefined || args.name !=null )? args.name : null;
var finishDate = (args.finishDate !='' || args.finishDate !=undefined || args.finishDate !=null )? args.finishDate : null;
var description = (args.description !='' || args.description !=undefined || args.description !=null )? args.description : null;
var mallId = (args.mallId !='' || args.mallId !=undefined || args.mallId !=null )? args.mallId : null;
var engineeringStatusId = (args.engineeringStatusId !='' || args.engineeringStatusId !=undefined || args.engineeringStatusId !=null )? args.engineeringStatusId : null;
var projectTypeId = (args.projectTypeId !='' || args.projectTypeId !=undefined || args.projectTypeId !=null )? args.projectTypeId : null;

if(mallId != null)
{
	var mall = MallSrv.getById(mallId);
	if(mall != null && projectTypeId != null)
		{
		var projectType = ProjectTypeSrv.getById(projectTypeId);
		if(projectType != null && engineeringStatusId != null)
			{
			var engineeringStatus = EngineeringProjectStatusSrv.getById(engineeringStatusId);
			if(engineeringStatus != null)
				{
				var engineeringProject = new EngineeringProject();
				engineeringProject.name=sucProjectName;
				engineeringProject.finishDate=finishDate;
				engineeringProject.description=description;
				engineeringProject.Mall=mall;
				engineeringProject.engineeringProjectStatusEntity = engineeringStatus;
				engineeringProject.ProjectType= projectType;
				EngineeringProjectSrv.add(engineeringProject);
				}
			}
		}
}else
{
}

