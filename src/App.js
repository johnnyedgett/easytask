import React, { Component } from 'react';
import './App.css';
import { Button, Table, TableHead, TableRow, TableCell, TableBody, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid, Paper } from '@material-ui/core'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      tasks: 
      [
        {
            "title":"Example task",
            "description":"Example description",
            "category":"Example category",
            "service":"Example service"
        },
        {
            "title":"Example task",
            "description":"Example description",
            "category":"Example category",
            "service":"Example service"
        },
      ],
      newTask: {
        "title":"",
        "description":"",
        "category":"",
        "service":"",
      },
      isDialogOpen: false
    }
  }

  handleComplete = (e) => {
    let task = this.state.newTask
    this.setState({
      tasks: [...this.state.tasks, task],
      newTask: {
        "title":"",
        "description":"",
        "category":"",
        "service":"",
      },
      isDialogOpen: false
    })
  }

  handleChange = (e) => {
    let task = this.state.newTask
    task[e.currentTarget.name] = e.target.value
    this.setState({
      newTask: task
    })
  }

  render() {
    const tasksToRender = this.state.tasks.map((t, i) => {
      return (
        <TableRow>
          <TableCell>{i}</TableCell>
          <TableCell>{t.title}</TableCell>
          <TableCell>{t.description}</TableCell>
          <TableCell>{t.category}</TableCell>
          <TableCell>{t.service}</TableCell>
          <TableCell>
            <Button variant="contained" color="primary"
              onClick={() => {
                let newTasks = this.state.tasks
                newTasks.splice(i, 1)
                this.setState({
                  tasks: newTasks
                })
              }}>Delete</Button>
          </TableCell>
        </TableRow>
      )
    })

    const dialog = 
    <Dialog
      open={this.state.isDialogOpen}
      >
      <DialogTitle>add ur task</DialogTitle>
      <DialogContent>
        <TextField
          id="title"
          name="title"
          value={this.state.newTask.title}
          onChange={this.handleChange}
          label="title"
        /><br/>
        <TextField
          id="description"
          name="description"
          value={this.state.newTask.description}
          onChange={this.handleChange}
          label="description"
        /><br/>
        <TextField
          id="category"
          name="category"
          value={this.state.newTask.category}
          onChange={this.handleChange}
          label="category"
        /><br/>
        <TextField
          id="service"
          name="service"
          value={this.state.newTask.service}
          onChange={this.handleChange}
          label="service"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleComplete}>Save Task</Button>
        <Button onClick={() => {this.setState({ isDialogOpen: false })}}>Close Dialog</Button>
      </DialogActions>
    </Dialog>

    return (
      <div className="App">
      <Grid container alignContent="center" alignItems="center" justify="center">
        <Grid item xs={10}>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Task #</TableCell>
                <TableCell>Task</TableCell>
                <TableCell>Why am i doing this</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Microservice</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasksToRender}
            </TableBody>
          </Table>
        </Paper>
        <Button onClick={() => {this.setState({ isDialogOpen: true })}}>Add new task</Button>
          {dialog}
        </Grid>
      </Grid>
      </div>
    );
  }
}

export default App;
