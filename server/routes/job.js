var express = require('express');
var job = require('../models/job');
var router = express.Router();

router.get('/', (req, res, next) => {
    job.find()
      .then(jobs => {
        res.status(200).json({
          message: 'Jobs fetched successfully',
          jobs: jobs
        });
      })
      .catch(error => {
        returnError(res, error);
      });
  }
  );

  router.post('/', (req, res, next) => {
    const newJob = new job({
      jobId: req.body.jobId,
      company: req.body.company,
      role: req.body.role,
      location: req.body.location,
      haveInterview: req.body.haveInterview,
      interviewDate: req.body.interviewDate
    });

    newJob.save()
      .then(newJob => {
        res.status(201).json({
          message: 'Job added successfully',
          job: newJob
        });
      })
      .catch(error => {
        returnError(res, error);
      });
  });

  router.put('/:jobId', (req, res, next) => {
      const jobUpdate = new job({
          jobId: req.body.jobId,
          company: req.body.company,
          role: req.body.role,
          location: req.body.location,
          haveInterview: req.body.haveInterview,
          interviewDate: req.body.interviewDate
      })
      job.updateOne({jobId: req.params.jobId, jobUpdate}).then(result => {
          console.log(result);
          res.status(200).json({
              message: "Update Successful"
          })
      })
  });

router.delete("/:jobId", (req, res, next) => {
    job.findOne({ jobId: req.params.jobId })
      .then(deletedJob => {
        job.deleteOne({ jobId: req.params.jobId })
          .then(result => {
            res.status(204).json({ message: "Job deleted successfully" });
          })
          .catch(error => {
            returnError(res, error);
          })
      })
      .catch(error => {
        returnError(res, error);
      });
  });

module.exports = router;