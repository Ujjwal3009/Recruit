import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Chip,
  useTheme,
} from "@mui/material";
import FlexBetween from "./FlexBetween";

import Header from "./Header";

export default function ContactForm() {
  const theme = useTheme();
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [recipients, setRecipients] = useState([]);

  const handleToChange = (e) => {
    setTo(e.target.value);
    if (e.target.value.includes(",")) {
      let emails = e.target.value.split(",").map((email) => email.trim());
      emails = emails.filter((each) => each.length > 0);
      setRecipients([...recipients, emails]);
      setTo("");
    }
  };

  const handleChipDelete = (email) => {
    const updatedRecipients = recipients.filter(
      (recipient) => recipient !== email
    );
    setRecipients(updatedRecipients);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 }}>
        <FlexBetween>
          <Header title="Email " subtitle="" />
        </FlexBetween>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="To"
            value={to}
            onChange={handleToChange}
            margin="normal"
            required
          />

          {recipients.map((email) => (
            <Chip
              key={email}
              label={email}
              onDelete={() => handleChipDelete(email)}
              sx={{
                margin: 0.5,
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
              }}
            />
          ))}

          <TextField
            fullWidth
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2 }}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
