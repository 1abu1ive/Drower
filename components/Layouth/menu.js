import { Dashboard } from "@mui/icons-material";
import GridViewIcon from "@mui/icons-material/GridView";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import GroupIcon from "@mui/icons-material/Group";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SettingsIcon from "@mui/icons-material/Settings";

const menu = [
  { title: "Dashboard", icon: <GridViewIcon />, path: "/" },
  { title: "Teams", icon: <KeyboardCommandKeyIcon />, path: "/Teams" },
  { title: "Employeess", icon: <GroupIcon />, path: "/Employees" },
  { title: "Projects", icon: <WorkOutlineIcon />, path: "/Projects" },
  { title: "Meetings", icon: <LocalPhoneIcon />, path: "/Meetings" },
  { title: "Tasks", icon: <FolderOpenIcon />, path: "/tasks" },
  { title: "Settings", icon: <SettingsIcon />, path: "/setting" },
];

export default menu;
