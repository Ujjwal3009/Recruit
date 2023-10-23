import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import WorkIcon from "@mui/icons-material/Work";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import BusinessIcon from "@mui/icons-material/Business";
import "./styles/userCard.css";

const UserCard = ({ user }) => {
  if (!user) return null;
  return (
    <Card className="user-card">
      <CardContent
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* First Column */}
        <div
          className="user-profile"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardMedia
            component="img"
            alt={user.name}
            height="140"
            image={user.profileImage}
            style={{ borderRadius: "50%", marginBottom: "8px" }}
          />

          <h3 style={{ margin: "4px 0 2px" }}>{user.name}</h3>
          <p style={{ margin: 0 }}>{user.position}</p>
          <p style={{ margin: 0 }}>{user.skill}</p>
        </div>

        {/* Second Column */}
        <div className="user-details">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <WorkIcon fontSize="small" style={{ marginRight: "4px" }} />
            <p style={{ margin: 0, flexGrow: 1 }}>{user.jobLookingFor}</p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <HomeWorkIcon fontSize="small" style={{ marginRight: "4px" }} />
            <p style={{ margin: 0, flexGrow: 1 }}>{user.address}</p>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BusinessIcon fontSize="small" style={{ marginRight: "4px" }} />
            <p style={{ margin: 0, flexGrow: 1 }}>{user.jobType}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
