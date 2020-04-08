import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch"
    }
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

function Search() {
  const classes = useStyles();
  const [region, setRegion] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [release, setRelease] = React.useState("");
  const [openRelease, setReleaseOpen] = React.useState(false);

  const handleChange = event => {
    setRegion(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleReleaseChange = event => {
    setRelease(event.target.value);
  };

  const handleReleaseClose = () => {
    setReleaseOpen(false);
  };

  const handleReleaseOpen = () => {
    setReleaseOpen(true);
  };

  const handleSubmit = event => {
    //event.preventDefault();
    // let userId = React.createRef();
    // console.log(userId.current.value);
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField id="standard-basic" label="Search User ID"/>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Region</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={region}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="SCAL">SCAL</MenuItem>
          <MenuItem value="HQAC">HQAC</MenuItem>
          <MenuItem value="HINT1">HINT1</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Release</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={openRelease}
          onClose={handleReleaseClose}
          onOpen={handleReleaseOpen}
          value={release}
          onChange={handleReleaseChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="Feb2019">Feb2019</MenuItem>
          <MenuItem value="Aug2019">Aug2019</MenuItem>
          <MenuItem value="Feb2019">Feb2019</MenuItem>
        </Select>
      </FormControl>
      <Button variant="outlined" color="primary" type="submit">
        Search
      </Button>
    </form>
  );
}

export default Search;
