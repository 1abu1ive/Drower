import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Layout from "../../components/Layouth";
import { Typography } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Theams({ posts }) {
  return (
    <Layout>
      <Typography variant="h6">Teams</Typography>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Ismi</StyledTableCell>
              <StyledTableCell>Balli</StyledTableCell>
              <StyledTableCell>Qo'shilgan sanasi</StyledTableCell>
              <StyledTableCell>Kursi</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((posts) => (
              <StyledTableRow key={posts.name}>
                <StyledTableCell component="th" scope="row">
                  {posts.name}
                </StyledTableCell>
                <StyledTableCell>{posts.score}</StyledTableCell>
                <StyledTableCell>{posts.submitted}</StyledTableCell>
                <StyledTableCell>{posts.garde}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/students");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
