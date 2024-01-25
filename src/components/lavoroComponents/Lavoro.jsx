import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../redux/actions/jobActions";
import SidebarLavoro from "./SidebarLavoro";
import SuggestedJobSearchesCard from "./SuggestedJobSearchesCard";
import JobCard from "../lavoroComponents/JobCard";
import PremiumElencoJobs from "./PremiumElencoJobs";
import JobCardCategory from "./JobCardCategory";
import JobCardOther from "./JobCardOther";

const Lavoro = () => {
	const dispatch = useDispatch();
	const jobs = useSelector((state) => state.jobs);

	useEffect(() => {
		// Fetch jobs when the component mounts
		dispatch(fetchJobs(""));
	}, [dispatch]); // Include 'dispatch' as a dependency

	return (
		<Container fluid="lg" className="mb-5">
			<Row>
				<Col xs={12} md={3}>
					<SidebarLavoro />
				</Col>
				<Col xs={12} md={9}>
					<SuggestedJobSearchesCard />
					<JobCard />
					<PremiumElencoJobs />
					<JobCardCategory category="full-stack" />
					<JobCardOther />
				</Col>
			</Row>
		</Container>
	);
};

export default Lavoro;
