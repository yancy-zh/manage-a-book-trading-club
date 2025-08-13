import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import RequestInfo from "../components/RequestInfo.js";
import axios from "axios";
import { dividerClasses } from "@mui/material";
export default function CheckboxList() {
  const [checked, setChecked] = React.useState([0]);
  const [bookData, setBookData] = React.useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);

  const getBooks = () => {
    const getPostsUrl = "https://jsonplaceholder.typicode.com/albums";
    var wikiConfig = {
      timeout: 6500,
    };
    async function getJsonResp(url, config) {
      const res = await axios.get(url, config);
      const books = res.data.map((e) => e.title);
      return books;
    }
    return getJsonResp(getPostsUrl, wikiConfig)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        console.log("an error occurred: " + error);
        return null;
      });
  };

  React.useEffect(() => {
    getBooks().then((result) => {
      setBookData(result);
    });
  }, []);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "AliceBlue" }}>
      {bookData.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            secondaryAction={<RequestInfo />}
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={handleToggle(value)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
