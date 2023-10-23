import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TuneIcon from "@mui/icons-material/Tune";

const SimpleCard = () => {
  return (
    <Card>
      <CardContent>
        <div style={{ display: "flex", alignItems: "center" }}>
          <TuneIcon />
          <Typography variant="h6" component="div" sx={{ ml: 1 }}>
            Advance Filters
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimpleCard;
