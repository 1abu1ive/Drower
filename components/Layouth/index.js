import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "./ListItem";
import ListItemText from "@mui/material/ListItemText";
import CropIcon from "@mui/icons-material/Crop";
const drawerWidth = 240;
import avatar from "./Photo/avatar.png";
import bell from "./Photo/bell.png";
import search from "./Photo/search.png";
import Image from "next/image";
import { Container, ListItemIcon } from "@mui/material";
import menu from "./menu";
import { useRouter } from "next/router";
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({ children }) {
  const router = useRouter();

  console.log(router);
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: "#F9F9F9" }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="div  "
            noWrap
            component={"div"}
            sx={{
              color: "black",
              display: "flex",
            }}
          >
            <div>
              <h4>Good Morning Anima</h4>
              <p
                style={{ fontSize: "10px", color: "gray", marginTop: "-20px" }}
              >
                Hope you have a good day
              </p>
            </div>
            <div style={{ marginLeft: "900px", display: "flex" }}>
              <div style={{ marginTop: "25px" }}>
                <Image src={search} alt="Picture of the author" />
                <Image
                  src={bell}
                  alt="Picture of the author"
                  style={{ marginLeft: "10px" }}
                />
              </div>
              <Image
                src={avatar}
                alt="Picture of the author"
                style={{ marginLeft: "10px", marginTop: "10px" }}
              />
            </div>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            background: "#F9F9F9",
            border: "0px solid ",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton
            sx={{ background: "#F9F9F9" }}
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <Typography variant="div" component={"div"} sx={{}}>
                <Typography
                  variant="div"
                  component={"div"}
                  sx={{ marginLeft: "-280px", color: "#6956E5 " }}
                >
                  <CropIcon />
                  Teamify
                </Typography>
              </Typography>
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List sx={{ mt: 2 }}>
          {menu.map((item, index) => (
            <ListItem
              button
              key={item.title}
              className={
                (router.pathname.startsWith(item.path) && item.path !== "/") ||
                router.pathname === item.path
                  ? "active"
                  : ""
              }
              onClick={() => router.push(item.path)}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Container>
        <br />

        <Main open={open}>
          <DrawerHeader />
          {children}
          <p></p>
        </Main>
      </Container>
    </Box>
  );
}
