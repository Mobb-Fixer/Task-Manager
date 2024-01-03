import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OperationService } from 'src/app/Services/operation.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {

  projectId: string | null = null; // Change the type to string if 'id' is a string, or adjust accordingly
  projectData: any; 
  tasks: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private operationService: OperationService
  ) {}

  ngOnInit(): void {


    this.route.paramMap.subscribe((params) => {
       this.projectId = params.get('id');
      // console.log('Project ID:', this.projectId);
      this.fetchProjectData();
      this.fetchTasks();
      // Perform other actions with the project ID as needed
    });
  }

  fetchProjectData() {
    if (this.projectId !== null) {
      // Convert projectId to a number
      const projectIdNumber: number = +this.projectId;
  
      this.operationService.getProjectDetailsByPid(projectIdNumber).subscribe(
        (response) => {
          this.projectData = response.projectDetails;
          console.log('Project Data:', this.projectData);
        },
        (error) => {
          console.error('Error fetching project data:', error);
        }
      );
    } else {
      console.error('Project ID is null.');
    }
  }
  

  fetchTasks() {
    this.operationService.getTaskByProjectId(this.projectId).subscribe(
      (tasks: any[]) => {
        this.tasks = tasks;
        console.log('Tasks:', this.tasks);
      },
      (error) => {
        console.error('Error fetching tasks:', error);
      }
    );
  }

  editTask(task: any) {}

  deleteTask(task: any) {

  }


}
