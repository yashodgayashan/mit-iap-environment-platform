import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./signup.css";

const styles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50%"
    }
  },
  formControl: {
    margin: theme.spacing(3)
  },
  checkbox: {
    color: "#0d5113"
  }
}));

function SignupForm() {
  const classes = styles();

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  // render() {
  //   return (
  //     <Grid
  //       textAlign="center"
  //       style={{ height: "100vh" }}
  //       verticalAlign="middle"
  //     >
  //       <Grid.Column textAlign="left" style={{ maxWidth: 450 }}>
  //         <br></br>
  //         <Form>
  //           <Form.Field>
  //             <label>First Name</label>
  //             <input
  //               placeholder="First Name"
  //               name="firstName"
  //               onChange={this.handleInputChange}
  //               value={this.state.firstName}
  //             />
  //           </Form.Field>
  //           <Form.Field>
  //             <label>Last Name</label>
  //             <input
  //               placeholder="Last Name"
  //               name="lastName"
  //               onChange={this.handleInputChange}
  //               value={this.state.lastName}
  //             />
  //           </Form.Field>
  //           <Form.Field>
  //             <label>Email</label>
  //             <input
  //               placeholder="Email"
  //               name="email"
  //               onChange={this.handleInputChange}
  //               value={this.state.email}
  //             />
  //           </Form.Field>
  //           <Form.Field>
  //             <label>Phone Number</label>
  //             <input
  //               placeholder="Phone Number"
  //               name="phoneNumber"
  //               onChange={this.handleInputChange}
  //               value={this.state.phoneNumber}
  //             />
  //           </Form.Field>
  //           <Form.Field>
  //             <label>Address</label>
  //             <input
  //               placeholder="Address"
  //               name="address"
  //               onChange={this.handleInputChange}
  //               value={this.state.address}
  //             />
  //           </Form.Field>
  //           <Form.Field>
  //             <label>Password</label>
  //             <input
  //               placeholder="Password"
  //               name="password"
  //               onChange={this.handleInputChange}
  //               value={this.state.password}
  //             />
  //           </Form.Field>
  //           <Form.Field>
  //             <label>Confirm Password</label>
  //             <input
  //               placeholder="Confirm Password"
  //               name="confirmPassword"
  //               onChange={this.handleInputChange}
  //               value={this.state.confirmPassword}
  //             />
  //           </Form.Field>
  //           <Checkbox label="I agree to the Terms and Conditions" />
  //           <br></br>
  //           <br></br>
  //           <Button type="signup" color="teal">
  //             Sign Up
  //           </Button>
  //           <Button
  //             onClick={() => this.props.history.push("/login")}
  //             color="teal"
  //           >
  //             Back
  //           </Button>
  //         </Form>
  //       </Grid.Column>
  //     </Grid>
  //   );
  // }

  return (
    <div>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" className>
            Sign Up
          </FormLabel>
          <FormGroup>
            <TextField
              variant="outlined"
              margin="normal"
              id="firstName"
              name="firstName"
              label="First Name"
              placeholder="First Name"
              onChange={() => setFirstName()}
              value={firstName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="lastName"
              name="lastName"
              label="Last Name"
              placeholder="Last Name"
              onChange={() => setLastName()}
              value={lastName}
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="email"
              name="email"
              label="Email"
              placeholder="Email"
              onChange={() => setEmail()}
              value={email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              placeholder="Phone Number"
              onChange={() => setPhoneNumber()}
              value={phoneNumber}
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="address"
              name="address"
              label="Address"
              placeholder="Address"
              onChange={() => setAddress()}
              value={address}
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="password"
              name="password"
              label="Password"
              placeholder="Password"
              type="password"
              onChange={() => setPassword()}
              value={password}
            />
            <TextField
              variant="outlined"
              margin="normal"
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              type="password"
              onChange={() => setConfirmPassword()}
              value={confirmPassword}
            />
            <FormControlLabel
              control={
                <Checkbox value="remember" className={classes.checkbox} />
              }
              label="Remember me"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </div>
    </div>
  );
}

export default withStyles(styles)(SignupForm);
