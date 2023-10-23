import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { Checkbox, FormControlLabel } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Chip from "@mui/material/Chip";

import { userData } from "./userData";
import "./style.css";
import UserCard from "components/userCard";

const Result = () => {
  const profileSources = ["LinkedIn", "GitHub", "Indeed"];
  const distances = ["1 mile", "5 miles", "10 miles"];
  const activeTimes = ["Today", "Yesterday", "Last 7 days"];

  const [selectedProfileSource, setSelectedProfileSource] = useState(null);
  const [selectedDistance, setSelectedDistance] = useState(null);
  const [selectedActiveTime, setSelectedActiveTime] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(userData);
  const [profileSourceState, setProfileSourceState] = useState([
    ...profileSources,
  ]);
  const [distancesState, setDistancesState] = useState([
    "1 mile",
    "5 miles",
    "10 miles",
  ]);
  const [activeTimesState, setActiveTimesState] = useState([
    "Today",
    "Yesterday",
    "Last 7 days",
  ]);

  const [appliedFilters, setAppliedFilters] = useState([]);

  const toggleFilter = (filter) => {
    if (profileSources.includes(filter)) {
      setProfileSourceState([...profileSourceState, filter]);
      const afterFilterUser = userData.filter(
        (user) => user.profileSource !== filter
      );
      setFilteredUsers([...filteredUsers, ...afterFilterUser]);
    }
    if (distances.includes(filter)) {
      setDistancesState([...distancesState, filter]);
      const afterFilterUser = userData.filter(
        (user) => user.distance !== filter
      );
      setFilteredUsers([...filteredUsers, ...afterFilterUser]);
    }
    if (activeTimes.includes(filter)) {
      setActiveTimesState([...activeTimesState, filter]);
      const afterFilterUser = userData.filter(
        (user) => user.activeTime !== filter
      );
      setFilteredUsers([...filteredUsers, ...afterFilterUser]);
    }

    const tempAppliedFilter = appliedFilters.filter((each) => each !== filter);
    setAppliedFilters(tempAppliedFilter);
  };

  const handleChipFilter = (type, value) => {
    let afterFilter = [];
    let afterFilterUser = [];

    switch (type) {
      case "profileSources":
        afterFilter = profileSourceState.filter((each) => each !== value);

        afterFilterUser = userData.filter(
          (user) => user.profileSource === value
        );
        setFilteredUsers([...afterFilterUser]);
        setProfileSourceState(afterFilter);
        break;
      case "distances":
        afterFilter = distancesState.filter((each) => each !== value);
        setFilteredUsers(userData.filter((user) => user.distance === value));
        setDistancesState(afterFilter);
        break;
      case "activeTimes":
        afterFilter = activeTimesState.filter((each) => each !== value);
        setFilteredUsers(userData.filter((user) => user.activeTime === value));
        setActiveTimesState(afterFilter);
        break;
    }

    console.log(afterFilter);
    if (!appliedFilters.includes(value))
      setAppliedFilters([...appliedFilters, value]);
  };
  const handleFilterChange = (e) => {
    const filterType = e.target.value;
    setSelectedProfileSource(null);
    setSelectedDistance(null);
    setSelectedActiveTime(null);
    setAppliedFilters([]);
    switch (filterType) {
      case "profileSource":
        setSelectedProfileSource("LinkedIn");
        break;
      case "distance":
        setSelectedDistance("1 mile");
        break;
      case "activeTime":
        setSelectedActiveTime("Today");
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          style={{
            position: "sticky",
            top: 0,
            background: "#fff",
            zIndex: 1000,
          }}
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <FormControl variant="outlined" style={{ marginRight: "0px" }}>
              <Select
                value=""
                onChange={handleFilterChange}
                IconComponent={(props) => (
                  <ArrowDropDownIcon {...props} style={{ color: "#fff" }} />
                )}
                style={{
                  backgroundColor: "#333", // Dark grey background color
                  color: "#fff", // White text color
                  minWidth: "150px",
                  // Adjust width as needed
                }}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  City,State
                </MenuItem>
                <MenuItem value="profileSource">Profile Source</MenuItem>
                <MenuItem value="distance">Distance</MenuItem>
                <MenuItem value="activeTime">Last Active Time</MenuItem>
              </Select>
            </FormControl>
            <InputBase
              placeholder="Search..."
              style={{
                flexGrow: 1,
                backgroundColor: "#f5f5f5", // Light grey background color
                color: "#333", // Dark grey text color
                height: "48px", // Set the height to match the dropdown
                border: "none", // Remove border
                outline: "none", // Remove outline on focus
              }}
            />

            <Button
              variant="outlined"
              color="primary"
              endIcon={<SearchIcon style={{ color: "#fff" }} />}
              onClick={() => {}}
              style={{
                backgroundColor: "#333", // Dark grey background color
                color: "#fff", // White text color
                border: "1px solid #333", // Dark grey border
                height: "48px", // Set the height to match the dropdown
                borderRadius: "4px", // Adds a slight border radius
                marginLeft: "8px", // Add a little margin to separate from search box
              }}
            ></Button>
            <FormControl variant="outlined">
              <Select
                value="advance"
                onChange={() => {}}
                IconComponent={ArrowDropDownIcon}
                style={{ border: "none" }}
              >
                <MenuItem value="basic">Basic Search</MenuItem>
                <MenuItem value="advance">Advance Search</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <div>
            <h3>Applied Filters:</h3>
            {appliedFilters.map((filter, index) => (
              <Chip
                key={index}
                label={filter}
                onDelete={() => toggleFilter(filter)}
              />
            ))}
          </div>
          <div>
            <h3>Profile Source:</h3>
            {profileSourceState.map((source, index) => (
              <Chip
                className="non-applied-filter-chip"
                key={index}
                label={source}
                clickable
                onClick={() => {
                  handleChipFilter("profileSources", source);

                  setSelectedProfileSource(source);
                }}
                color={selectedProfileSource === source ? "primary" : "default"}
              />
            ))}
          </div>
          <div>
            <h3>Distance:</h3>
            {distancesState.map((distance, index) => (
              <Chip
                className="non-applied-filter-chip"
                key={index}
                label={distance}
                clickable
                onClick={() => {
                  handleChipFilter("distances", distance);

                  setSelectedDistance(distance);
                }}
                color={selectedDistance === distance ? "primary" : "default"}
              />
            ))}
          </div>
          <div>
            <h3>Last Active Time:</h3>
            {activeTimesState.map((time, index) => (
              <Chip
                className="non-applied-filter-chip"
                key={index}
                label={time}
                clickable
                onClick={() => {
                  handleChipFilter("activeTimes", time);

                  setSelectedActiveTime(time);
                }}
                color={selectedActiveTime === time ? "primary" : "default"}
              />
            ))}
          </div>
        </Grid>

        <Grid item xs={8}>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #ccc",
                paddingBottom: "8px",
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label="Profile Details"
              />
              <div style={{ marginLeft: "auto" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    marginRight: "8px",
                    border: "2px solid #1976d2",
                    background: "transparent",
                    color: "#1976d2",
                  }}
                >
                  Send Email
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    marginRight: "8px",
                    border: "2px solid #1976d2",
                    background: "transparent",
                    color: "#1976d2",
                  }}
                >
                  Create Evergreen Criteria
                </Button>

                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    marginRight: "8px",
                    border: "2px solid #1976d2",
                    background: "transparent",
                    color: "#1976d2",
                  }}
                >
                  Search History
                </Button>
              </div>
            </div>
            {filteredUsers &&
              filteredUsers.map((user, index) => (
                <UserCard
                  key={index}
                  user={user}
                  selectedProfileSource={selectedProfileSource}
                  selectedDistance={selectedDistance}
                  selectedActiveTime={selectedActiveTime}
                />
              ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Result;
