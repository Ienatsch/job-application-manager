import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Subject, Subscription } from 'rxjs';
import { Job } from '../jobs/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  jobs: Job[] = []
  jobListChangedEvent = new Subject<Job[]>();
  subscription: Subscription;
  maxJobId: number;

  constructor(private http: HttpClient) {
    this.jobs = this.getAllJobs();
   }

  getAllJobs() {
    this.http.get<{ message: string, jobs: Job[] }>("http://localhost:3000/jobs").subscribe((jobData) => {
      this.jobs = jobData.jobs;
      this.jobListChangedEvent.next(this.jobs);
      this.maxJobId = this.getMaxJobId();
      (error: any) => {
        console.log(error);
        } 
      });
      return this.jobs;
  }

  addJob(job: Job) {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json')
    if (job.haveInterview === null) {
      job.haveInterview = false;
    }

    this.http.post("http://localhost:3000/jobs", job, {headers: headers}).subscribe((jobs: Job[]) => {
      this.jobListChangedEvent.next(this.jobs.slice());
      this.jobs = this.getAllJobs();
    })
  }

  updateJob(jobId: number, newJob: Job) {
    if (!jobId || !newJob) {
      return;
    }

    const pos = this.jobs.findIndex(x => x.jobId === jobId);
    if (pos < 0) {
      return;
    }
    
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');

    const stringJob = JSON.stringify(newJob);

    this.http.put(`http://localhost:3000/jobs/${jobId}`, newJob, { headers: headers }).subscribe((jobs: Job[]) => {
          console.log(jobs);
          this.jobListChangedEvent.next(this.jobs.slice());
        });
  }

  deleteJob(jobId: number) {
    this.http.delete(`http://localhost:3000/jobs/${jobId}`)
    .subscribe(
      (jobs: Job[]) => {
        this.jobListChangedEvent.next(this.jobs.slice());
      });
  }

  getMaxJobId() {
    this.jobs = this.getAllJobs();
    if (this.jobs.length > 0) {
      var lastJob = this.jobs.sort((a, b) => b.jobId - a.jobId)[0];
      return lastJob.jobId + 1;
    }
    else {
      return 1;
    }
  }
}
