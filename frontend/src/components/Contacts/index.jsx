import React, { useEffect, useState } from 'react';
import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';
import axios from 'axios';

const Contacts = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/profiles/');
        setProfiles(response.data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  const handleDelete = async (id) => {
    console.log(`Attempting to delete profile with ID: ${id}`); // Log the ID
    try {
      await axios.delete(`http://127.0.0.1:8000/api/profile/${id}/delete/`);
      setProfiles(profiles.filter(profile => profile.id !== id));
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  if (!profiles.length) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box m="20px">
      <Typography variant="h4" mb="20px">User Profiles</Typography>
      <Grid container spacing={2}>
        {profiles.map((profile) => (
          <Grid item xs={12} sm={6} md={4} key={profile.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">First Name</Typography>
                <Typography>{profile.first_name || 'N/A'}</Typography>
                <Typography variant="h6">Last Name</Typography>
                <Typography>{profile.last_name || 'N/A'}</Typography>
                <Typography variant="h6">Email</Typography>
                <Typography>{profile.email || 'N/A'}</Typography>
                <Typography variant="h6">Contact Number</Typography>
                <Typography>{profile.contact || 'N/A'}</Typography>
                <Typography variant="h6">Address 1</Typography>
                <Typography>{profile.address1 || 'N/A'}</Typography>
                <Typography variant="h6">Address 2</Typography>
                <Typography>{profile.address2 || 'N/A'}</Typography>
                <Button variant="contained" color="secondary" onClick={() => handleDelete(profile.id)}>
                  Delete
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Contacts;
