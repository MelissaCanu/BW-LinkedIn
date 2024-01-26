import React from "react";
import { Card, Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeBookmark } from "../../redux/actions/jobActions";

const SavedJobs = () => {
	const dispatch = useDispatch();
	const savedJobs = useSelector((state) => state.bookmarks);

	console.log("SavedJobs:", savedJobs);

	if (!savedJobs || savedJobs.length === 0) {
		return <p>No saved jobs found.</p>;
	}

	const handleRemoveSavedJob = (jobId) => {
		dispatch(removeBookmark(jobId));
	};

	return (
		<div>
			<h2>Le mie offerte di lavoro</h2>
			{savedJobs.map((job) => (
				<Card key={job.jobId} className="mb-3">
					<Card.Body className="position-relative d-flex align-items-center">
						<Button
							variant="link"
							className="position-absolute top-0 end-0 text-secondary"
							onClick={() => handleRemoveSavedJob(job.jobId)}
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
			))}
		</div>
	);
};

export default SavedJobs;
