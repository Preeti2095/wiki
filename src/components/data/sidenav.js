import SettingsOverscanIcon from "@material-ui/icons/SettingsOverscan";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import BookIcon from "@material-ui/icons/Book";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import GestureTwoToneIcon from "@material-ui/icons/GestureTwoTone";
import TouchAppIcon from "@material-ui/icons/TouchApp";
import NavigationIcon from "@material-ui/icons/Navigation";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import HomeIcon from "@material-ui/icons/Home";

const data = [
  {
    topname: "Guides",
    topicon: <HomeIcon />,
    content: [
      {
        name: "Setting up environment",
        icon: <SettingsOverscanIcon />,
        url: "/environment",
      },
      {
        name: "Reporting a bug",
        icon: <ReportProblemIcon />,
        url: "/report-bug",
      },
      {
        name: "Installing Sakura",
        icon: <CloudDownloadIcon />,
        url: "/install-sakura",
      },
    ],
  },
  {
    topname: "Mantainers",
    topicon: <HomeIcon />,

    content: [
      {
        name: "Apply for mantainership",
        icon: <GroupAddIcon />,
        url: "/apply",
      },
      {
        name: "Support new device",
        icon: <PhoneAndroidIcon />,
        url: "support-us",
      },
      { name: "Code of Conduct", icon: <BookIcon />, url: "code-of-conduct" },
    ],
  },
  {
    topname: "Features",
    topicon: <HomeIcon />,
    content: [
      { name: "Animation", icon: <SlideshowIcon />, url: "/animation" },
      { name: "Gestures", icon: <GestureTwoToneIcon />, url: "/gestures" },
      {
        name: "Hardware Buttons",
        icon: <TouchAppIcon />,
        url: "/hardware-buttons",
      },
      {
        name: "Miscellaneous",
        icon: <GestureTwoToneIcon />,
        url: "/miscellaneous",
      },
      { name: "Navigation", icon: <NavigationIcon />, url: "/navigation" },
      {
        name: "Notification",
        icon: <NotificationsActiveIcon />,
        url: "/Notification",
      },
      {
        name: "Power Menu",
        icon: <PowerSettingsNewIcon />,
        url: "/power-menu",
      },
      { name: "Statusbar", icon: <EqualizerIcon />, url: "/statusbar" },
    ],
  },
];
export default data;