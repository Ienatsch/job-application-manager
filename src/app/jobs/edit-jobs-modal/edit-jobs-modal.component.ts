import { Component, Input } from '@angular/core';
import { Job } from '../job.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobsService } from 'src/app/services/jobs.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'job-manager-edit-jobs-modal',
  templateUrl: './edit-jobs-modal.component.html',
  styleUrls: ['./edit-jobs-modal.component.css']
})
export class EditJobsModalComponent {
  @Input() selectedJob: Job;
  job: Job;
  closeResult: string;
  inputDisabled = false;
  content: any;
  
  constructor(private modalService: NgbModal, private jobService: JobsService) {
   }

  openModal(content) {
    this.modalService.open(content, {size: 'lg', centered: true, ariaLabelledBy: 'add-edit-job-modal'}).result.then((result) => {

    }, (reason) => {
      this.closeResult = `Dismissed`;
    });
  }

  onSubmit(f: NgForm) {
    var values = f.value;
        this.job = {
          jobId: this.selectedJob.jobId,
          company: values.company,
          role: values.role,
          location: values.location,
          haveInterview: values.haveInterview,
          interviewDate: values.interviewDate
        }
        console.log(this.job);
        this.jobService.updateJob(this.job.jobId, this.job);
        this.modalService.dismissAll();
  }
}
