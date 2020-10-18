import React, { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ArrowBack from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    toggleDrawer("right", true);
  }, []);

  const ChildComp = (props) => toggleDrawer("right", true);

  const toggleDrawer = (anchor, open) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={() => toggleDrawer(anchor, false)}
      onKeyDown={() => toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary={"How it's Works?"} />
        </ListItem>
        <ListItem button>
          <InboxIcon />
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={"FAQs?"} />
        </ListItem>
        <ListItem button>
          <InboxIcon />
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={" Where do your donations go?"} />
        </ListItem>
        <ListItem button>
          <InboxIcon />
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={"Donate Now"} />
        </ListItem>
        <ListItem button>
          <InboxIcon />
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={"SignUp/In"} />
        </ListItem>
      </List>
    </div>
  );
  return (
    <div>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={() => toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
}
