import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const JobSpecifics = () => {
	const { categoryOrCompany } = useParams();
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const apiUrl = `https://strive-benchmark.herokuapp.com/api/jobs?${categoryOrCompany}`;
			const token =
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1ZjY4YzNkYWRhMDAwMThhNjlmOTgiLCJpYXQiOjE3MDYxNzQ0ODcsImV4cCI6MTcwNzM4NDA4N30.D_oUWOkDru_J40ei7pOE0hADNvyYJtypzzIboLiccx8";

			try {
				const response = await fetch(apiUrl, {
					headers: {
						Authorization: `Bearer ${token}`,
						// Add other headers if needed
					},
				});

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const responseData = await response.json();

				// Check if responseData.data is an array
				if (Array.isArray(responseData.data)) {
					setJobs(responseData.data);
				} else {
					console.error("Invalid data format:", responseData);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, [categoryOrCompany]);

	const renderHTML = (htmlString) => {
		return { __html: htmlString };
	};

	return (
		<div>
			<h2>Risultati della ricerca per "{categoryOrCompany}"</h2>
			{jobs.map((job) => (
				<Card key={job._id}>
					<Card.Body>
						<Card.Title>{job.title}</Card.Title>
						<Card.Text>{job.job_type}</Card.Text>
						<Card.Text>{job.publication_date}</Card.Text>
						<div dangerouslySetInnerHTML={renderHTML(job.description)} />
					</Card.Body>
				</Card>
			))}
		</div>
	);
};

export default JobSpecifics;
