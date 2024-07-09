import React from 'react';
import { Link } from 'react-router-dom';
import { getTasks, deleteTask } from '../data';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Container,
  Box,
  Button,
  Avatar
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const TaskList = () => {
  const tasks = getTasks();

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Task List
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Task</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>Image</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, index) => (
                <TableRow key={index}>
                  <TableCell>{task.task}</TableCell>
                  <TableCell>{task.username}</TableCell>
                  <TableCell>{task.email}</TableCell>
                  <TableCell>{task.firstName}</TableCell>
                  <TableCell>{task.lastName}</TableCell>
                  <TableCell>{task.address}</TableCell>
                  <TableCell>{task.phone}</TableCell>
                  <TableCell>{task.department}</TableCell>
                  <TableCell>{task.position}</TableCell>
                  <TableCell>{task.startDate}</TableCell>
                  <TableCell>
                    {task.image && <Avatar src={task.image} alt={task.username} />}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton component={Link} to={`/edit/${index}`}>
                      <Edit />
                    </IconButton>
                    <IconButton onClick={() => deleteTask(index)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/add"
          >
            Add Task
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default TaskList;
