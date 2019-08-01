import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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

  const [values, setValues] = useState({
    username: "",
    bio: "",
    steamName: "",
    age: 18,
    timeZone: "",
    email: "",
    faveGame: "",
    hobbyGames: [],
  });

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
    alert(JSON.stringify(values));
  };

  // TODO: make time zone a dropdown
  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <InputLabel htmlFor="username" className={classes.label}>Username</InputLabel>
      <Input className={classes.input} id="username" name="username" defaultValue="jeisele" onChange={handleChange('username')}></Input>
      <InputLabel htmlFor="bio" className={classes.label}>Bio</InputLabel>
      <Input className={classes.input} id="bio" name="bio" defaultValue="this is my bio" onChange={handleChange('bio')}></Input>
      <InputLabel htmlFor="steamName" className={classes.label}>Steam Name</InputLabel>
      <Input className={classes.input} id="steamName" name="steamName" defaultValue="steam name" onChange={handleChange('steamName')}></Input>
      <InputLabel htmlFor="age" className={classes.label}>Age</InputLabel>
      <Input className={classes.input} id="age" name="age" defaultValue={24} onChange={handleChange('age')}></Input>
      <InputLabel htmlFor="timeZone" className={classes.label}>Time Zone</InputLabel>
      <Input className={classes.input} id="timeZone" name="timeZone" defaultValue="time zone" onChange={handleChange('timeZone')}></Input>
      <InputLabel htmlFor="email" className={classes.label}>Email Address</InputLabel>
      <Input className={classes.input} id="email" name="email" defaultValue="eisele.joseph@gmail.com" onChange={handleChange('email')}></Input>
      <InputLabel htmlFor="faveGame" className={classes.label}>Main Game</InputLabel>
      <Select value={values.faveGame} onChange={handleDropdown} className={classes.input} id="faveGame" name="faveGame">
        <MenuItem value="CS:GO">CS:GO</MenuItem>
        <MenuItem value="League of Legends">League of Legends</MenuItem>
        <MenuItem value="DOTA">DOTA</MenuItem>
        <MenuItem value="Fortnite">Fortnite</MenuItem>
      </Select>
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
