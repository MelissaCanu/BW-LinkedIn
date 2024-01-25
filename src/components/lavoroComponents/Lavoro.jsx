import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/actions/jobActions";
import SidebarLavoro from "./SidebarLavoro";
import SuggestedJobSearchesCard from "./SuggestedJobSearchesCard";
import JobCard from "../lavoroComponents/JobCard";
import PremiumElencoJobs from "./PremiumElencoJobs";
import JobCardCategory from "./JobCardCategory";
import JobCardOther from "./JobCardOther";
import SavedJobs from "./SavedJobs";

const Lavoro = () => {
	const dispatch = useDispatch();

	const [savedJobs, setSavedJobs] = useState([]);

	useEffect(() => {
		// Fetch jobs when the component mounts
		dispatch(fetchJobs(""));
	}, [dispatch]); // Include 'dispatch' as a dependency

	const handleBookmarkJob = (jobId) => {
		console.log(jobId);
		if (!savedJobs.includes(jobId)) {
			setSavedJobs((prevSavedJobs) => [...prevSavedJobs, jobId]);
		}
	};

	return (
		<Container fluid="lg" className="mb-5">
			<Row>
				<Col xs={12} md={3}>
					{/* Pass the handleBookmarkJob function and savedJobs to SidebarLavoro */}
					<SidebarLavoro
						handleBookmarkJob={handleBookmarkJob}
						savedJobs={savedJobs}
					/>
				</Col>
				<Col xs={12} md={9}>
					<SuggestedJobSearchesCard />
					{/* Pass the handleBookmarkJob function to JobCard */}
					<JobCard handleBookmarkJob={handleBookmarkJob} />
					<PremiumElencoJobs />
					{/* Pass the handleBookmarkJob function to JobCardCategory */}
					<JobCardCategory
						category="full-stack"
						handleBookmarkJob={handleBookmarkJob}
					/>
					{/* Pass the handleBookmarkJob function to JobCardOther */}
					<JobCardOther handleBookmarkJob={handleBookmarkJob} />
					{/* Pass savedJobs to the SavedJobs component */}
					<SavedJobs savedJobs={savedJobs} />
				</Col>
			</Row>
		</Container>
	);
};

export default Lavoro;
