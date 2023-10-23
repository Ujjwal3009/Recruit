import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import FilterCard from "./search-result/FilterCard";
import { jobListings } from "state/data";
import JobCardComponent from "./JobCardComponent";
import AdvanceFilterCard from "./search-result/AdvanceFilterCard";
import SimpleCard from "./SimpleCard";

const filterData = {
  industries: ["Software", "Finance", "Marketing", "Healthcare"],
  popularKeywords: ["Software", "Developer", "Web", "Marketing"],
  positions: [
    "Software Engineer",
    "Marketing Manager",
    "Finance Analyst",
    "Web Developer",
  ],
  experienceLevels: ["Entry Level", "Mid Level", "Senior Level"],
};

const filterCategories = [
  { title: "Industries", data: filterData.industries },
  { title: "Popular Keywords", data: filterData.popularKeywords },
  { title: "Positions", data: filterData.positions },
  { title: "Experience Levels", data: filterData.experienceLevels },
];

const FilterPage = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    industries: [],
    popularKeywords: [],
    positions: [],
    experienceLevels: [],
  });

  const [jobCounts, setJobCounts] = useState({});

  // Calculate job counts by location and job title
  useEffect(() => {
    const counts = {};

    jobListings.forEach((job) => {
      const { title, address } = job;

      if (!counts[address]) {
        counts[address] = {};
      }

      if (!counts[address][title]) {
        counts[address][title] = 0;
      }

      counts[address][title]++;
    });

    setJobCounts(counts);
  }, []);

  // Handle checkbox selection
  const handleSelect = (category, selectedValue) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [category]: selectedValue,
    }));
  };
  // Filter job listings based on selected options
  const filteredJobListings = jobListings.filter((job) => {
    const isSelected = (category, value) =>
      selectedOptions[category].includes(value) ||
      selectedOptions[category].length === 0;

    return (
      isSelected("industries", job.industry) &&
      isSelected("popularKeywords", job.title) &&
      isSelected("positions", job.position) &&
      isSelected("experienceLevels", job.experienceLevel)
    );
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <div
          style={{ backgroundColor: "white", height: "100vh", width: "100%" }}
        >
          <SimpleCard />
          {filterCategories.map((category, index) => (
            <FilterCard
              key={index}
              title={category.title}
              industryList={category.data.map((label) => ({
                label,
                positions: 0,
              }))}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </Grid>

      <Grid item xs={12} md={8}>
        <div
          style={{
            backgroundColor: "white",
            minHeight: "100vh",
            width: "100%",
            padding: "16px",
          }}
        >
          <Grid container spacing={2}>
            {filteredJobListings.map((job, index) => (
              <Grid item xs={12} sm={12} md={4} key={index}>
                <JobCardComponent
                  title={job.title}
                  address={job.address}
                  imageSrc={job.imageSrc}
                  jobCounts={
                    jobCounts[job.address] && jobCounts[job.address][job.title]
                  }
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default FilterPage;
