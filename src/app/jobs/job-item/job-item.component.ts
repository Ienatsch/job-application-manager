import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../job.model';
import { JobsService } from 'src/app/services/jobs.service';
import { AddEditJobsModalComponent } from '../add-edit-jobs-modal/add-edit-jobs-modal.component';

@Component({
  selector: 'job-manager-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css']
})
export class JobItemComponent implements OnInit {
  @Input() job: Job;

  constructor(private jobsService: JobsService, private jobModalService: AddEditJobsModalComponent) { }

  ngOnInit(): void {
    this.job.interviewDate = new Date(this.job.interviewDate);
  }



  onDelete(jobId: number) {
    this.jobsService.deleteJob(jobId);
  }

}
