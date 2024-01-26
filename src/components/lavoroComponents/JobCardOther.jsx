import React, { useState, useEffect } from "react";
import { Col, Card, Image, Button } from "react-bootstrap";
import { X, Bookmark } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../../redux/actions/jobActions";

const JobCardOther = () => {
	const [recommendedJobs, setRecommendedJobs] = useState([]);
	const [visibleJobsCount, setVisibleJobsCount] = useState(3);
	const dispatch = useDispatch();
	const bookmarks = useSelector((state) => state.bookmarks);

	useEffect(() => {
		const fetchRecommendedJobs = async () => {
			try {
				const response = await fetch(
					"https://strive-benchmark.herokuapp.com/api/jobs?company=&limit=50",
					{
						headers: {
							Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjY4YzNkYWRhMDAwMThhNjlmOTgiLCJpYXQiOjE3MDYwOTcwMTIsImV4cCI6MTcwNzMwNjYxMn0.heVRrbkWUHSUOP56ezHOj_yJ3IHL3E0-b3pccVJTWbA`, // token
						},
					}
				);
				const data = await response.json();
				// filtra e rende solo job con logo aziendale
				const jobsWithLogo = data.data.filter(
					(job) => job.company_logo_url && job.company_logo_url.trim() !== ""
				);
				console.log(data);
				setRecommendedJobs(jobsWithLogo);
			} catch (error) {
				console.error("Error fetching recommended jobs:", error);
			}
		};

		fetchRecommendedJobs();
	}, []);

	const handleBookmarkJob = (jobId) => {
		if (bookmarks.find((bookmark) => bookmark.jobId === jobId)) {
			dispatch(removeBookmark(jobId));
		} else {
			dispatch(addBookmark(jobId));
		}
	};

	const handleHideJob = (jobId) => {
		/* filtra job con jobId e aggiorna lo stato */
		setRecommendedJobs((prevJobs) =>
			prevJobs.filter((job) => job._id !== jobId)
		);
	};

	const handleShowMoreJobs = () => {
		// Show the next 3 jobs when "Mostra altro" is clicked
		setVisibleJobsCount((prevCount) => prevCount + 3);
	};

	return (
		<>
			<Col xs={12}>
				<Card className="mt-2">
					<Card.Body className="pb-0">
						<Card.Title className="mb-1">Selezione in corso</Card.Title>
						<Card.Text className="lead" style={{ fontSize: "16px" }}>
							Offerte di lavoro che potrebbero esserti sfuggite
						</Card.Text>
						{recommendedJobs.slice(0, visibleJobsCount).map((job) => (
							<div
								key={job._id}
								className="mb-3 position-relative d-flex align-items-center"
							>
								<Button
									variant="link"
									className="position-absolute top-0 end-0 text-secondary"
									onClick={() => handleHideJob(job._id)}
								>
									<X className="fs-4" />
								</Button>
								<Bookmark
									className={`position-absolute top-0 start-0 text-secondary ${
										bookmarks.find((bookmark) => bookmark.jobId === job._id)
											? "text-warning"
											: ""
									}`}
									onClick={() => handleBookmarkJob(job._id)}
								/>
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
							</div>
						))}
					</Card.Body>
					<Card.Text
						className="text-center fs-6 fw-bolder text-secondary border-1 border-top py-2 custom-buttons"
						onClick={handleShowMoreJobs}
					>
						Mostra altro →
					</Card.Text>
				</Card>
			</Col>
		</>
	);
};

export default JobCardOther;
