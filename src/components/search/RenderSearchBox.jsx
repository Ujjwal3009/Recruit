import { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  TextField,
  useTheme,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import MyTable from "./RecentHistoryTable";

export const SearchBox = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    keywords: "",
    skills: "",
    jobTitle: "",
    searchRadius: true,
    selectedLocation: "",
    radius: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value === "true",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform form submission or further processing here
    // Access form data in formData
  };

  const handleReset = () => {
    setFormData({
      keywords: "",
      skills: "",
      jobTitle: "",
      searchRadius: true,
      selectedLocation: "",
      radius: "",
    });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ margin: "2rem 0 0 3rem" }}>
        <Typography variant="h4">Search</Typography>
      </Box>
      <Grid container sx={{ width: "100%" }}>
        <Grid item xs={6}>
          {/* <Box
            sx={{
              margin: "1rem 1rem 2rem 3rem",
              border: "2px",
            }}
            backgroundColor={theme.palette.background.alt}
          >
            <form onSubmit={handleSubmit}>
              <h4>Search Option</h4>

              <div>
                <TextField
                  label="Keywords"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                  variant="outlined"
                  style={{ marginBottom: "1rem" }}
                />
              </div>

              <div>
                <TextField
                  label="Skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  variant="outlined"
                  style={{ marginBottom: "1rem" }}
                />
              </div>

              <div>
                <TextField
                  label="Job Title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  variant="outlined"
                  style={{ marginBottom: "1rem" }}
                />
              </div>

              <div>
                <RadioGroup
                  name="searchRadius"
                  value={formData.searchRadius.toString()}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Search with Radius"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Search with Selected Location"
                  />
                </RadioGroup>
              </div>

              {formData.searchRadius ? (
                <div>
                  <TextField
                    label="Location"
                    name="selectedLocation"
                    value={formData.selectedLocation}
                    onChange={handleInputChange}
                    variant="outlined"
                    style={{ marginBottom: "1rem" }}
                  />
                </div>
              ) : null}

              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "1rem" }}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            </form>
          </Box> */}
          <Paper sx={{ p: "1rem", m: "1rem 1rem 2rem 3rem" }}>
            <form onSubmit={handleSubmit}>
              <h4>Search Option</h4>

              <div>
                <TextField
                  label="Keywords"
                  name="keywords"
                  value={formData.keywords}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                  variant="outlined"
                  style={{ marginBottom: "1rem", width: "50%" }}
                />
              </div>

              <div>
                <TextField
                  label="Skills"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  variant="outlined"
                  style={{ marginBottom: "1rem", width: "65%" }}
                />
              </div>

              <div>
                <TextField
                  label="Job Title"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  variant="outlined"
                  style={{ marginBottom: "1rem", width: "65%" }}
                />
              </div>
              <div>
                <Typography variant="h6">Location Details</Typography>
                <RadioGroup
                  name="searchRadius"
                  value={formData.searchRadius.toString()}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="true"
                    control={<Radio />}
                    label="Search with Radius"
                  />
                  <FormControlLabel
                    value="false"
                    control={<Radio />}
                    label="Search with Selected Location"
                  />
                </RadioGroup>
              </div>

              {formData.searchRadius ? (
                <div>
                  <div>
                    <TextField
                      label="Location"
                      name="selectedLocation"
                      value={formData.selectedLocation}
                      onChange={handleInputChange}
                      variant="outlined"
                      style={{ marginBottom: "1rem", width: "65%" }}
                    />
                  </div>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item xs={3.95}>
                        <TextField
                          label="Skills"
                          name="skills"
                          value={formData.skills}
                          onChange={handleInputChange}
                          variant="outlined"
                          style={{ marginBottom: "1rem" }}
                        />
                      </Grid>
                      <Grid item xs={3.95}>
                        <TextField
                          label="Radius"
                          name="radius"
                          value={formData.radius}
                          onChange={handleInputChange}
                          variant="outlined"
                          style={{ marginBottom: "1rem" }}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "1rem" }}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6} spacing={2} direction={"column"}>
          <Paper sx={{ py: "1rem", m: "1rem 2rem 2rem 1rem" }}>
            <Typography variant="h6" sx={{ ml: "1rem" }}>
              Recent History
            </Typography>
            <Box sx={{ mb: "1rem" }}>
              <MyTable />
            </Box>
          </Paper>
          <Paper sx={{ py: "1rem", margin: "2rem 2rem 2rem 1rem" }}>
            <Typography variant="h6" sx={{ ml: "1rem" }}>
              Saved History
            </Typography>
            <Box sx={{ mb: "1rem" }}>
              <MyTable />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
