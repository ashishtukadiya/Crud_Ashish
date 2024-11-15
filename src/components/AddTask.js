import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addTask } from "../data";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Box,
  Input,
  Avatar,
} from "@mui/material";

const AddTask = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    task: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    department: "",
    position: "",
    startDate: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setForm({ ...form, image: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    reader.onload = () => {
      const newTask = { ...form, image: reader.result };
      addTask(newTask);
      navigate("/");
    };
    if (form.image) {
      reader.readAsDataURL(form.image);
    } else {
      addTask(form);
      navigate("/");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" component="h1" gutterBottom>
          Register Employee and Add Task
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                name="username"
                fullWidth
                value={form.username}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                name="email"
                fullWidth
                value={form.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Task"
                name="task"
                fullWidth
                value={form.task}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="First Name"
                name="firstName"
                fullWidth
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Last Name"
                name="lastName"
                fullWidth
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                fullWidth
                value={form.address}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                name="phone"
                fullWidth
                value={form.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Department"
                name="department"
                fullWidth
                value={form.department}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Position"
                name="position"
                fullWidth
                value={form.position}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Start Date"
                type="date"
                name="startDate"
                fullWidth
                value={form.startDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component="label">
                Upload Image
                <Input
                  type="file"
                  hidden
                  onChange={handleImageChange}
                  inputProps={{ accept: "image/*" }}
                />
              </Button>
              {form.image && (
                <Avatar
                  src={URL.createObjectURL(form.image)}
                  sx={{ width: 56, height: 56, mt: 2 }}
                />
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add Task
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default AddTask;
