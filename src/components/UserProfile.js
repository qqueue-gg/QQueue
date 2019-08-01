import React, { useState } from 'react';
import SaveIcon from '@material-ui/icons/Save';
import { Button, Input, InputLabel, Select, MenuItem, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  input: {
    display: 'block',
    'margin-bottom': '1em',
  },
  button: {
    margin: 'auto',
    border: '1px solid black',
  },
  label: {

  },
  container: {
    background: '#F1F1F1',
    padding: '2em',
    'border-radius': '.3em',
    width: '50vw',
    margin: '5em auto',
  }
}));
// TODO: add profile picture and password change functionality
function UserProfile(props) {
  const classes = useStyles();
  const [values, setValues] = useState(props.currUser);
  const [open, setOpen] = useState(false);
  console.log('is values.hobbyGames and array: ', Array.isArray(values.hobbyGames));
  // const hobbyGames = [...props.currUser.hobbyGames];


  function handleDropdown(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  }

  const handleSubmit = () => {
    console.log(JSON.stringify(values));
    fetch('http://localhost:8080/user/updateUser', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(values),
    })
    .then(() => setOpen(true));
  };

  // TODO: make time zone a dropdown
  // TODO: figure out how to populate hobbygames with current state
  // TODO: change snackbar location
  return (
    <form className={classes.container} onSubmit={handleSubmit} autoComplete="off">
      <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)} message={<span id="success">Updated Successfully!</span>}/>
      <InputLabel htmlFor="username" className={classes.label}>Username</InputLabel>
      <Input className={classes.input} id="username" name="username" defaultValue={props.currUser.username} onChange={handleChange('username')}></Input>
      <InputLabel htmlFor="steamProfile" className={classes.label}>Steam Name</InputLabel>
      <Input className={classes.input} id="steamProfile" name="steamProfile" defaultValue={props.currUser.steamProfile} onChange={handleChange('steamProfile')}></Input>
      <InputLabel htmlFor="avatarUrl" className={classes.label}>Avatar URL</InputLabel>
      <Input className={classes.input} id="avatarUrl" name="avatarUrl" defaultValue={props.currUser.logo} onChange={handleChange('logo')}></Input>
      <InputLabel htmlFor="age" className={classes.label}>Age</InputLabel>
      <Input className={classes.input} id="age" name="age" defaultValue={props.currUser.age} onChange={handleChange('age')}></Input>
      <InputLabel htmlFor="timeZone" className={classes.label}>Time Zone</InputLabel>
      <Input className={classes.input} id="timeZone" name="timeZone" defaultValue={props.currUser.timezone} onChange={handleChange('timeZone')}></Input>
      <InputLabel htmlFor="email" className={classes.label}>Email Address</InputLabel>
      <Input className={classes.input} id="email" name="email" defaultValue={props.currUser.email} onChange={handleChange('email')}></Input>
      <InputLabel htmlFor="faveGame" className={classes.label}>Main Game</InputLabel>
      <Select value={values.primaryGame} onChange={handleDropdown} className={classes.input} id="faveGame" name="primaryGame">
        <MenuItem value="CS:GO">CS:GO</MenuItem>
        <MenuItem value="League of Legends">League of Legends</MenuItem>
        <MenuItem value="DOTA">DOTA</MenuItem>
        <MenuItem value="Fortnite">Fortnite</MenuItem>
      </Select>
      <InputLabel htmlFor="skill" className={classes.label}>Skill Level</InputLabel>
      <Input className={classes.input} id="skill" name="skill" defaultValue={props.currUser.skill} onChange={handleChange('skill')}></Input>
      <InputLabel htmlFor="currentTeam" className={classes.label}>Current Team</InputLabel>
      <Input className={classes.input} id="currentTeam" name="currentTeam" defaultValue={props.currUser.currentTeam} onChange={handleChange('currentTeam')}></Input>
      <InputLabel htmlFor="hobbyGames" className={classes.label}>Hobby Games</InputLabel>
      <Select multiple value={values.hobbyGames} onChange={handleDropdown} className={classes.input} id="hobbyGames" name="hobbyGames">
        <MenuItem value="CS:GO">CS:GO</MenuItem>
        <MenuItem value="League of Legends">League of Legends</MenuItem>
        <MenuItem value="DOTA">DOTA</MenuItem>
        <MenuItem value="Fortnite">Fortnite</MenuItem>
      </Select>
      <Button className={classes.button} onClick={handleSubmit}>Save Changes<SaveIcon /></Button>
    </form>
  )
}

export default UserProfile;
