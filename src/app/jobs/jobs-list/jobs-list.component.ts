import { Component, OnInit } from '@angular/core';
import { Job } from '../job.model';
import { JobsService } from 'src/app/services/jobs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'job-manager-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css']
})
export class JobsListComponent implements OnInit {
  job: Job;
  selectedJob: Job;
  jobs: Job[] = [];
  subscription: Subscription;
  maxJobId: number;

  constructor(private jobsService: JobsService) {
    this.jobs = jobsService.jobs;
   }

  ngOnInit(): void {
    this.subscription = this.jobsService.jobListChangedEvent.subscribe((jobs:Job[]) => {
      this.jobs = jobs;
    })
  }

  selectJob(job: Job) {
    this.selectedJob = job;
  }

}
