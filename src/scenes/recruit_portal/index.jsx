import FlexBetween from "components/FlexBetween";
import Header from "components/Header";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox, { checkboxClasses } from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Chip from "@mui/material/Chip";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  Grid,
  IconButton,
  Button,
  Box,
  Container,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";

import React, { useState, useEffect } from "react";

import { jobListings } from "state/data";
import JobCardComponent from "components/JobCardComponent";
import SimpleCard from "components/SimpleCard";

function RecruitPage() {
  const alphabetButtons = Array.from({ length: 26 }, (_, i) => {
    const letter = String.fromCharCode(65 + i);
    return (
      <Button
        key={letter}
        style={{
          minWidth: "10px",
          marginRight: "0px",
          color: "#ffffff",
          background: "#333333",
        }}
        // onClick={() => handleFilterClick(letter)}
        variant="outlined"
      >
        {letter}
      </Button>
    );
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Browse Companies" subtitle=" lorem ipsum" />
      </FlexBetween>

      <div
        style={{
          marginTop: "20px",
          marginBottom: "10px",
          display: "flex",
          overflowX: "auto",
          whiteSpace: "nowrap",

          // Grey background color
          // Add some padding
        }}
      >
        {alphabetButtons}
      </div>

      <div style={{ marginTop: "20px" }}>
        <FilterPage />
      </div>
    </Box>
  );
}

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

  const [checkedValueState, setCheckedValueState] = useState([]);
  const [filteredUserState, setFilterUserState] = useState([...jobListings]);

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
    if (category === "Industries") category = "industry";
    if (category === "Positions") category = "position";
    if (category === "Experience Levels") category = "experienceLevel";

    if (!checkedValueState.includes(selectedValue)) {
      const tempListing = jobListings.filter(
        (each) => each[category] === selectedValue
      );

      const tempCheckedValue = [...checkedValueState, selectedValue];

      setFilterUserState(tempListing);
      setCheckedValueState(tempCheckedValue);
    } else {
      const tempListing = jobListings.filter(
        (each) => each[category] !== selectedValue
      );

      const modifiedChecked = checkedValueState.filter(
        (each) => each != selectedValue
      );
      setCheckedValueState(modifiedChecked);

      setFilterUserState(tempListing);
    }
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
            {filteredUserState.map((job, index) => (
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

const FilterCard = ({ title, industryList, onSelect }) => {
  const handleCheckboxChange = (label) => {
    onSelect(title, label);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        {industryList.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  onChange={() => handleCheckboxChange(item.label)}
                />
              }
              label={item.label}
            />
            <Chip label={item.positions} color="primary" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default RecruitPage;
