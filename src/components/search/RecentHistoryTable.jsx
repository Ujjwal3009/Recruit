import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const initialData = [
  {
    id: 1,
    date: "01/01/2023",
    name: "John Doe",
    history: "Phrase 1, Phrase 2, Phrase 3, Phrase 4, Phrase 5, Phrase 6",
  },
  {
    id: 2,
    date: "02/01/2023",
    name: "Jane Smith",
    history: "Phrase 7, Phrase 8, Phrase 9, Phrase 10, Phrase 11, Phrase 12",
  },
  {
    id: 3,
    date: "03/01/2023",
    name: "Bob Johnson",
    history: "Phrase 13, Phrase 14, Phrase 15, Phrase 16, Phrase 17, Phrase 18",
  },
  {
    id: 4,
    date: "04/01/2023",
    name: "Alice Brown",
    history: "Phrase 19, Phrase 20, Phrase 21, Phrase 22, Phrase 23, Phrase 24",
  },
  {
    id: 5,
    date: "05/01/2023",
    name: "Eve Wilson",
    history: "Phrase 25, Phrase 26, Phrase 27, Phrase 28, Phrase 29, Phrase 30",
  },
  {
    id: 6,
    date: "06/01/2023",
    name: "Charlie Davis",
    history: "Phrase 31, Phrase 32, Phrase 33, Phrase 34, Phrase 35, Phrase 36",
  },
  {
    id: 7,
    date: "07/01/2023",
    name: "Grace Miller",
    history: "Phrase 37, Phrase 38, Phrase 39, Phrase 40, Phrase 41, Phrase 42",
  },
  {
    id: 8,
    date: "08/01/2023",
    name: "Samuel Wilson",
    history: "Phrase 43, Phrase 44, Phrase 45, Phrase 46, Phrase 47, Phrase 48",
  },
  {
    id: 9,
    date: "09/01/2023",
    name: "Olivia Martinez",
    history: "Phrase 49, Phrase 50, Phrase 51, Phrase 52, Phrase 53, Phrase 54",
  },
  {
    id: 10,
    date: "10/01/2023",
    name: "Liam Johnson",
    history: "Phrase 55, Phrase 56, Phrase 57, Phrase 58, Phrase 59, Phrase 60",
  },
];

const MyTable = () => {
  const [data, setData] = useState(initialData);
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  const visibleData = showAll ? data : data.slice(0, 2);

  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "25%" }}>Date</TableCell>
            <TableCell style={{ width: "25%" }}>Name</TableCell>
            <TableCell style={{ width: "50%" }}>History</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {visibleData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.history}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Button
        variant="text"
        onClick={showAll ? handleShowLess : handleShowAll}
        style={{ float: "right", color: "blue" }}
      >
        {showAll ? "View Less" : "View All"}
      </Button>
    </div>
  );
};

export default MyTable;
