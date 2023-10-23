import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TuneIcon from "@mui/icons-material/Tune";

const AdvanceFilterCard = () => {
  return (
    <Card variant="outlined" sx={{ maxWidth: "300px", margin: "16px" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          <TuneIcon
            fontSize="large"
            color="primary"
            style={{ marginRight: "8px" }}
          />
          Advance Filter
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AdvanceFilterCard;
