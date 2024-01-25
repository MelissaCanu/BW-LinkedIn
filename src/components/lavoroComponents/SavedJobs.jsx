import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import { X } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeSavedJob } from "../../redux/actions/jobActions";

const SavedJobs = () => {
	const dispatch = useDispatch();
	const savedJobs = useSelector((state) => state.jobs.savedJobs);

	console.log("SavedJobs:", savedJobs);

	if (!savedJobs) {
		return <p>No saved jobs found.</p>;
	}

	const handleRemoveSavedJob = (jobId) => {
		dispatch(removeSavedJob(jobId));
	};

	return (
		<div>
			<h2>Le mie offerte di lavoro</h2>
			{savedJobs.map((job, index) => (
				<Card key={index} className="mb-3">
					<Card.Body className="position-relative d-flex align-items-center">
						<Button
							variant="link"
							className="position-absolute top-0 end-0 text-secondary"
							onClick={() => handleRemoveSavedJob(job)}
						>
							<X className="fs-4" />
						</Button>
						<Image
							src={job.company_logo_url}
							alt={`${job.company_name} logo`}
							className="me-3"
							style={{ width: "60px", height: "60px" }}
						/>
						<div>
							<h5>{job.title}</h5>
							<p className="text-muted mb-1">{job.company_name}</p>
							<p>{job.candidate_required_location}</p>
							<a href={job.url}>Apply Now</a>
						</div>
					</Card.Body>
				</Card>
			))}
		</div>
	);
};

export default SavedJobs;
