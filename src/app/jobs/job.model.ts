import { Time } from '@angular/common';

export class Job {
    jobId: string;
    company: string;
    role: string;
    location: string;
    haveInterview: Boolean;
    interviewDate: Date;
    interviewTime: Time;
}