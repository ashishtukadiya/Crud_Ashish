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
  Avatar,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontWeight: 'bold',
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

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
                <StyledTableCell>Task</StyledTableCell>
                <StyledTableCell>Username</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
                <StyledTableCell>First Name</StyledTableCell>
                <StyledTableCell>Last Name</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell>Department</StyledTableCell>
                <StyledTableCell>Position</StyledTableCell>
                <StyledTableCell>Start Date</StyledTableCell>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tasks.map((task, index) => (
                <StyledTableRow key={index}>
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
                </StyledTableRow>
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
