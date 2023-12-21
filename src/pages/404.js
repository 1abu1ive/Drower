import React from "react";
import Layout from "../../components/Layouth";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <Layout>
      <Typography
        variant="div"
        component={"div"}
        sx={{
          textAlign: "center",
          fontFamily: "cursive",
          color: "#6956E5",
          marginTop: "120px",
        }}
      >
        <Typography variant="h1" component={"div"}>
          404
        </Typography>
        <Typography variant="h2" component={"div"}>
          Error Page
        </Typography>
      </Typography>
    </Layout>
  );
}
