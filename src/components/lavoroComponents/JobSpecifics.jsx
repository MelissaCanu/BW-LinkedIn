// JobSpecifics.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const JobSpecifics = () => {
	const { categoryOrCompany } = useParams();
	const [jobs, setJobs] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const apiUrl = `https://strive-benchmark.herokuapp.com/api/jobs?${categoryOrCompany}`;
			const token = "YOUR_ACCESS_TOKEN"; // Replace with your actual access token

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

	return (
		<div>
			<h2>Risultati della ricerca per "{categoryOrCompany}"</h2>
			{jobs.map((job) => (
				<Card key={job._id}>
					<Card.Body>
						<Card.Title>{job.title}</Card.Title>
						{/* Add other details of the job if necessary */}
					</Card.Body>
				</Card>
			))}
		</div>
	);
};

export default JobSpecifics;
