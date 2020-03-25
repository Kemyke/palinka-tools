import React from 'react';
import clsx from 'clsx';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme =>({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '15ch',
  },
 paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.primary,
    width: '15ch'
  },
});

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {origAmount: '', origPercentage: '', desiredPercentage: '', neccesaryWater: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(evt) {
  const value = evt.target.value;
  this.setState({
    [evt.target.name]: value
  });
}

  handleSubmit(event) {
    this.setState({
	neccesaryWater: +((this.state.origAmount * this.state.origPercentage / this.state.desiredPercentage) - this.state.origAmount).toFixed(2)
    });
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;
    return (
    <div className={classes.root}>
	<Grid container	spacing={1}>
	  <Grid item xs={12}>
      <form onSubmit={this.handleSubmit}>
	  <Grid container spacing={1}>
	   <Grid item xs={12}>
          <TextField 
		type="number" 
		id="filled-margin-none"
		name="origAmount" 	
		label="Original amout" 
		variant="outlined" 
		margin="normal"
		InputLabelProps={{
            		shrink: true,
          	}}
		defaultValue="10"
		InputProps={{
            		endAdornment: <InputAdornment position="start">L</InputAdornment>,
          	}}
		className={classes.textField}
		value={this.state.origAmount} 
		onChange={this.handleChange} />
          
	   <TextField 
		type="number" 
		id="filled-margin-none"
		name="origPercentage" 
		label="Orig. alcohol %"
		variant="outlined"
		margin="normal"
                InputLabelProps={{
                        shrink: true,
                }}
		InputProps={{
                        endAdornment: <InputAdornment position="start">%</InputAdornment>,
                }}
		defaultValue="65"
		className={classes.textField}
		value={this.state.origPercentage} 
		onChange={this.handleChange} 
	  />
          <TextField 
		type="number" 
		name="desiredPercentage" 
		label="Target alchohol %" 
		variant="outlined"
		margin="normal"
		defaultValue={48}
                InputLabelProps={{
                        shrink: true,
                }}
		InputProps={{
                        endAdornment: <InputAdornment position="start">%</InputAdornment>,
                }}
                className={classes.textField}
		value={this.state.desiredPercentage} 
		onChange={this.handleChange} 
	  />
	  </Grid>
	  <Grid item xs={12}>
        <Button type="submit" variant="contained" color="primary">Calc</Button>
	  </Grid>
	  </Grid>
      </form>
	</Grid>
	<Grid item xs={12}>
      <div>
        <Paper className={classes.paper}> {this.state.neccesaryWater} </Paper>
      </div>
	</Grid>
	</Grid>
    </div>
    );
   }
}

export default withStyles(styles)(App);
