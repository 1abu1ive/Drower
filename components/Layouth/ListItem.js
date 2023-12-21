import { styled } from "@mui/material";
import ListItem from "@mui/material/ListItem";

const MyListItem = styled(ListItem)(({ theme }) => ({
  "&:hover,&.active": {
    transition: "0.3s",
    background: `linear-gradient(to right top ,#FB896B,#6956E5)`,
    color: "white",

    "& svg": {
      color: "white",
    },
  },
}));

export default MyListItem;
