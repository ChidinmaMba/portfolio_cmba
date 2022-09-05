import Axios from "axios";
import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import { DesktopDatePicker , LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
//import { ThemeProvider } from "@emotion/react";

class AddTodo extends Component {
    // A local react state of the this component with a content property set to nothing.
    constructor() {
      super();
      this.state = {
        content: "",
        date: "",
        due: null,
      };
    }
    // The handleChange function updates the react state with the new input value provided from the user.
    // "event" is the defined action a user takes. In this case, the event is triggered when the user types something
    // into the text field.
    handleChange = (event) => {
      this.setState({
        content: event.target.value,
        date: Date().toLocaleString('en-US')
      });
    };

    handleChangeForDueDate = (event) => {
      this.setState({
        due: new Date(event).toLocaleDateString('en-US')
      });
    };
    // The handleSubmit function collects the forms input and puts it into the react state.
    // event.preventDefault() is called to prevents default event behavior like refreshing the browser.
    // this.props.addTodo(this.state) passes the current state (or user input) into the addTodo function defined
    // in the Home.js file which then adds the input into the list.
    handleSubmit = (event) => {
      event.preventDefault();
      const jsonObject = {
        id: this.state.id,
        task: this.state.content,
        currentDate: this.state.date,
        dueDate: this.state.due
      };
      Axios({
        method: "POST",
        url: "http://localhost:3001/add/item",
        data: {jsonObject},
        headers: {
           "Content-Type": "application/json"
        }
      }).then(res => {
          console.log(res.data.message);
      });
      if (this.state.content.trim()) {
        this.props.addTodo(this.state);
        this.setState({
          content: "",
          date: "",
          due: null
        });
      }
    };
    render() {
      return (
        // 1. The return statement should include a text field input with the handleChange function from above that
        // is passed into an onChange event.
        // 2. The return should also include a button with the handleSubmit function from above that is passed into
        // an OnClick event.
        // 3. The value of the text field also should reflect the local state of this component.
        <div style={{ paddingTop:70 }}>
          <TextField
            label="Add New Item"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>         
            <DesktopDatePicker
                id="new-item-date"
                label="Due Date"
                value={this.state.due}
                onChange={this.handleChangeForDueDate}
                renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <Button
            style={{ marginLeft: "10px" }}
            onClick={this.handleSubmit}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </div>
      );
    }
  }
  
  export default AddTodo;