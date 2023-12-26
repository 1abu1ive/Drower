import * as React from "react";
import Typography from "@mui/material/Typography";
import Chart from "./Photo/Chart.png";
import Notifications from "./Photo/Notifications.png";
import Chart2 from "./Photo/Chart2.png";
import Invite from "./Photo/Invite.png";
import Surcle from "./Photo/Surcle.png";
import Frame from "./Photo/Frame.png";
import Image from "next/image";
import { Container } from "@mui/material";
import MyLIne from "../Photo";
export default function Body() {
  return (
    <Container>
        <Typography paragraph sx={{ display: "flex" }}>
            <Typography variant="div" component={"div"}>
              <Typography
                 component={"div"}
                sx={{ color: "#23262F", gap: "10px", display: "flex" }}
              >
                <Typography
                  variant="div"
                  component={"div"}
                  sx={{
                    boxShadow: 1,
                    borderRadius: "3px",
                    background: "#F9F9F9",
                    padding: "25px",
                    width: "400px",
                    height: "344px",
                  }}
                >
                  <h4>Teams Strength</h4>
                  <Typography
                    variant="div"
                    component={"div"}
                    sx={{ marginLeft: "10px" }}
                  >
                    <Image src={Chart} alt="Picture of the author" />
                    <Image src={Chart2} alt="Picture of the author" />
                  </Typography>
                </Typography>
                <Typography
                  variant="div"
                  component={"div"}
                  sx={{
                    boxShadow: 1,
                    borderRadius: "3px",
                    background: "#F9F9F9",
                    padding: "25px",
                    width: "400px",
                    height: "344px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h4>Employees</h4>
                    <p>Aug 25-Sept 25 </p>
                  </div>
                  <Typography
                    variant="div"
                    component={"div"}
                    sx={{ marginLeft: "10px" }}
                  >
                    <Image src={Invite} alt="Picture of the author" />
                    <Image
                      src={Surcle}
                      style={{ marginLeft: "10px" }}
                      alt="Picture of the author"
                    />
                  </Typography>
                </Typography>
              </Typography>
              <br />

              <Typography
                variant="div"
                component={"div"}
                sx={{
                  boxShadow: 1,
                  borderRadius: "3px",
                  background: "#F9F9F9",
                  padding: "25px",
                  width: "810px",
                  height: "400px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <h4>Project Deliveries</h4>
                  <Image src={Frame} alt="Picture of the author" />
                </div>
                <Typography
                  variant="div"
                  component={"div"}
                  sx={{ marginTop: "-20px", height: "320px" }}
                >
                  <MyLIne />
                </Typography>
              </Typography>
            </Typography>
            <Typography
              variant="div"
              component={"div"}
              sx={{ marginLeft: "30px" }}
            >
              <Typography
                variant="div"
                component={"div"}
                sx={{
                  width: "298px",
                  textAlign: "center",
                  background: "#FFF0E6",
                  padding: "1px",
                  borderRadius: "10px",
                }}
              >
                <h3>Top 10</h3>
                <p style={{ marginTop: "-20px", fontWeight: "bolder" }}>
                  Position in dribbble
                </p>
                <p style={{ marginTop: "-20px", color: "gray" }}>
                  20% Increase from Last Week
                </p>
              </Typography>
              <br />
              <Typography
                variant="div"
                component={"div"}
                sx={{
                  width: "298px",
                  textAlign: "center",
                  background: "#ECEAFE",
                  padding: "1px",
                  borderRadius: "10px",
                }}
              >
                <h3>26</h3>
                <p style={{ marginTop: "-20px", fontWeight: "bolder" }}>
                  New employees onboarded
                </p>
                <p style={{ marginTop: "-20px", color: "gray" }}>
                  15% Increase from Last Month
                </p>
              </Typography>
              <br />{" "}
              <Typography
                variant="div"
                component={"div"}
                sx={{
                  width: "298px",
                  textAlign: "center",
                  background: "#E5F7FF",
                  padding: "1px",
                  borderRadius: "10px",
                }}
              >
                <h3>500</h3>
                <p style={{ marginTop: "-20px", fontWeight: "bolder" }}>
                  New Clients Approached
                </p>
                <p style={{ marginTop: "-20px", color: "gray" }}>
                  5% Increase from Last Week
                </p>
              </Typography>
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Notifications</h3>
                <p style={{ color: "#6956E5" }}>View All</p>
              </div>
              <Image src={Notifications} alt="Picture of the author" />
            </Typography>
          </Typography>
    </Container>
  )
}
