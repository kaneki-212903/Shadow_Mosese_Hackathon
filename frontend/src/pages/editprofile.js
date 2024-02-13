import React, { useState } from 'react';
import {  Box,
    TextField,
    Button,
    Typography,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    InputAdornment,
    IconButton,
    Card,
    CardContent,
    Grid,
    CardActions, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Navbar from '../components/navbar';
import Sidebar from '../components/sidebar';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Create a dark theme instance specifically for this component if not using a global theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const EditProfile = () => {
    const [userProfile, setUserProfile] = useState({
        username: '',
        firstName: '',
        lastName: '',
        age: '',
        userDescription: '',
        userType: '', // Student or Alumni
        yearOfPassing: '',
        currentYear: '',
        branch: '',
        fieldsOfInterest: '',
        proficiency: '',
        currentField: '',
        workExperience: '',
        currentEmployment: '',
        linkedinProfile: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setUserProfile((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userProfile);
        // Handle the submission logic here
      };
    
  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <Navbar />
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Sidebar />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ flexGrow: 1, mt: 6 }}
    >
      <Card raised sx={{ p: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Create Profile
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={userProfile.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={userProfile.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={userProfile.lastName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                value={userProfile.age}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="User Description"
                name="userDescription"
                multiline
                rows={4}
                value={userProfile.userDescription}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">I am a</FormLabel>
                <RadioGroup
                  row
                  name="userType"
                  value={userProfile.userType}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Student"
                    control={<Radio />}
                    label="Student"
                  />
                  <FormControlLabel
                    value="Alumni"
                    control={<Radio />}
                    label="Alumni"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            {/* Conditional Fields */}
            {userProfile.userType && (
              <Grid item xs={12}>
                <Card variant="outlined" sx={{ p: 2 }}>
                  {userProfile.userType === 'Student' ? (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Year of Passing"
                          name="yearOfPassing"
                          value={userProfile.yearOfPassing}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Current Year"
                          name="currentYear"
                          value={userProfile.currentYear}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Branch"
                          name="branch"
                          value={userProfile.branch}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Fields of Interest"
                          name="fieldsOfInterest"
                          multiline
                          rows={3}
                          value={userProfile.fieldsOfInterest}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Currently Proficient In"
                          name="proficiency"
                          multiline
                          rows={3}
                          value={userProfile.proficiency}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Year of Passing"
                          name="yearOfPassing"
                          value={userProfile.yearOfPassing}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Branch"
                          name="branch"
                          value={userProfile.branch}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Current Field"
                          name="currentField"
                          value={userProfile.currentField}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Work Experience"
                          name="workExperience"
                          multiline
                          rows={3}
                          value={userProfile.workExperience}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Currently Employed At/Working On"
                          name="currentEmployment"
                          value={userProfile.currentEmployment}
                          onChange={handleChange}
                        />
                      </Grid>
                    </Grid>
                  )}
                </Card>
              </Grid>
            )}
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                component="label"
                startIcon={<PhotoCamera />}
                sx={{ mr: 2, width: '100%' }}
              >
                Upload Picture
                <input
                  type="file"
                  hidden
                  onChange={(e) => {
                    // Handle file upload here
                  }}
                />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="LinkedIn Profile"
                name="linkedinProfile"
                value={userProfile.linkedinProfile}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        href={userProfile.linkedinProfile}
                        target="_blank"
                      >
                        <LinkedInIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default EditProfile;
