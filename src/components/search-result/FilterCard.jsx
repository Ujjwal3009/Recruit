import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Chip from "@mui/material/Chip";

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

export default FilterCard;
