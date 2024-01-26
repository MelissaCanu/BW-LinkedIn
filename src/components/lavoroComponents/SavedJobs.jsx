import React from "react";
import { Card, Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeSavedJob } from "../../redux/actions/jobActions";

const SavedJobs = () => {
	const dispatch = useDispatch();
	const savedJobs = useSelector((state) => state.bookmarks);

	if (!savedJobs || savedJobs.length === 0) {
		return <p>No saved jobs yet.</p>;
	}

	const handleRemoveSavedJob = (jobId) => {
		dispatch(removeSavedJob(jobId));
	};

	return (
		<div>
			<h2>My Saved Jobs</h2>
			{savedJobs.map((job) => (
				<JobCard
					key={`savedJob-${job.jobId}`}
					job={job}
					onRemove={handleRemoveSavedJob}
				/>
			))}
		</div>
	);
};

const JobCard = ({ job, onRemove }) => {
	return (
		<Card className="mb-3">
			<Card.Body className="position-relative d-flex align-items-center">
				<Button
					variant="link"
					className="position-absolute top-0 end-0 text-secondary"
					onClick={() => onRemove(job.jobId)}
				>
					<X className="fs-4" />
				</Button>
				<h5>{job.title}</h5>
				{job.company_name && (
					<p className="text-muted mb-1">{job.company_name}</p>
				)}
				{job.candidate_required_location && (
					<p>{job.candidate_required_location}</p>
				)}
				<Button variant="primary" href={job.url} target="_blank">
					Apply Now
				</Button>
			</Card.Body>
		</Card>
	);
};

export default SavedJobs;
