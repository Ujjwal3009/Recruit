import React from "react";
import FlexBetween from "components/FlexBetween";
import Header from "components/Header";

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Input,
  IconButton,
  Button,
  Box,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchField(props) {
  return (
    <TextField
      label={props.label}
      name={props.keywords}
      value={props.value}
      onChange={props.onChange}
      variant="outlined"
      style={props.style}
    />
  );
}

export default SearchField;
