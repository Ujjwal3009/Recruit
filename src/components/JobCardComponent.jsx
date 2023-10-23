import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const JobCardComponent = ({ title, address, imageSrc, jobCounts }) => {
  return (
    <Card>
      <CardContent>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src={imageSrc}
            alt="Logo"
            style={{ width: "50px", height: "50px" }}
          />
        </div>
        <Typography variant="h6" align="center">
          {title}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "8px",
          }}
        >
          <LocationOnIcon style={{ marginRight: "4px" }} />
          {address}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "16px",
          }}
        >
          <Button variant="contained" color="primary">
            {jobCounts} jobs open
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCardComponent;
