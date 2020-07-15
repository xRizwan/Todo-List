# Todo-List

<p align="center">TodoList Basic Project Details</p>
todoList:

	Task(title, duedate, priority, description,projectName ... EACH PROPERTY CAN BE MODIFIED EXCEPT PROJECTNAME);
	Project(title, duedate, Tasks ... ... EACH PROPERTY CAN BE MODIFIED):
		this.name = name;
	Tasks = [ARRAY CONTAINING MULTIPLE Task];
	Projects = [ARRAY CONTAINING MULTIPLE Project];
	TASKS AND PROJECTS STORED WITH LOCAL STORAGE AS JSON

DOM:

	_________________________________________________>
	|\✓/[ACCESS TO ALL PROJECTS]\/
	_________________________________________________
	|\✓/[ACCESS TO ALL TASKS]\/
	_________________________________________________
	|\✓/[CONTAINS A DEFAULT PROJECT]\/
	_________________________________________________
	|\✓/[NO DEFAULT TASK]\/
	_________________________________________________
	|\✓/[CAN DELETE/CREATE PROJECTS]\/
	_________________________________________________
	|\✓/[CAN DELETE/MODIFY/CREATE TASKS]\/
	_________________________________________________
	|\✓/[GREEN/RED/BLUE COLORS FOR DIF PRIORITIES]\/
	_________________________________________________
	|\✓/[CALENDER TO SET DUE DATES]\/
	_________________________________________________>


