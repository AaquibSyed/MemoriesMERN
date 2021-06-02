import { TextField, Paper, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./FormStyles";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createPost } from "../../../actions/posts";

function Form() {
  const [postData, setpostData] = useState({
    creator: "",
    title: "",
    tags: "",
    selectedFile: "",
    message: "",
  });
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating Memories</Typography>
        <TextField
          variant="outlined"
          name="creator"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setpostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          variant="outlined"
          name="title"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setpostData({ ...postData, title: e.target.value })}
        ></TextField>
        <TextField
          variant="outlined"
          name="messgae"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setpostData({ ...postData, message: e.target.value })
          }
        ></TextField>
        <TextField
          variant="outlined"
          name="tags"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setpostData({ ...postData, tags: e.target.value })}
        ></TextField>
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setpostData({ ...postData, selectedFile: base64 })
            }
          ></FileBase>
        </div>
        <Button
          variant="contained"
          className={classes.buttonSubmit}
          color="primary"
          size="large"
          type="submit"
          onSubmit={handleSubmit}
        >
          submit
        </Button>
        <Button
          variant="contained"
          className={classes.buttonSubmit}
          color="secondary"
          size="large"
          onClick={clear}
        >
          clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
