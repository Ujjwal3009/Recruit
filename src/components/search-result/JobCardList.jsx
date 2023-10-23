import React from "react";
import Grid from "@mui/material/Grid";
import JobCardComponent from "components/JobCardComponent";

const JobCardList = () => {
  const cardData = [
    {
      title: "Job Title 1",
      address: "New York, US",
      imageSrc: "https://via.placeholder.com/50",
    },
    {
      title: "Job Title 2",
      address: "Los Angeles, US",
      imageSrc: "https://via.placeholder.com/50",
    },
    {
      title: "Job Title 3",
      address: "Chicago, US",
      imageSrc: "https://via.placeholder.com/50",
    },
    {
      title: "Job Title 1",
      address: "New York, US",
      imageSrc: "https://via.placeholder.com/50",
    },
    {
      title: "Job Title 2",
      address: "Los Angeles, US",
      imageSrc: "https://via.placeholder.com/50",
    },
    {
      title: "Job Title 3",
      address: "Chicago, US",
      imageSrc: "https://via.placeholder.com/50",
    },
    {
      title: "Job Title 1",
      address: "New York, US",
      imageSrc: "https://via.placeholder.com/50",
    },
    {
      title: "Job Title 2",
      address: "Los Angeles, US",
      imageSrc: "https://via.placeholder.com/50",
    },
    {
      title: "Job Title 3",
      address: "Chicago, US",
      imageSrc: "https://via.placeholder.com/50",
    },
  ];

  return (
    <Grid container spacing={2}>
      {cardData.map((data, index) => (
        <Grid item xs={12} sm={12} md={4} key={index}>
          <JobCardComponent
            title={data.title}
            address={data.address}
            imageSrc={data.imageSrc}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobCardList;
