import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import axios from 'axios';
import Header from "../../components/Header";
import DeleteIcon from '@mui/icons-material/Delete';

const TeamForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/profiles/');
        console.log('Raw response data:', response.data);

        const sanitizedData = response.data.map((profile) => ({
          id: profile.id,
          first_name: profile.first_name || 'N/A',
          last_name: profile.last_name || 'N/A',
          email: profile.email || 'N/A',
          contact: profile.contact || 'N/A',
          address1: profile.address1 || 'N/A',
          address2: profile.address2 || 'N/A',
        }));

        console.log('Sanitized Data:', sanitizedData);
        setProfiles(sanitizedData);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  useEffect(() => {
    console.log('Profiles state:', profiles);
  }, [profiles]);

  const handleDelete = async (id) => {
    try {
      console.log(`Attempting to delete profile with ID: ${id}`);
      await axios.delete(`http://127.0.0.1:8000/api/profile/${id}/delete/`);
      console.log(`Profile with ID ${id} deleted successfully`);
      setProfiles(profiles.filter((profile) => profile.id !== id));
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "first_name",
      headerName: "First Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "last_name",
      headerName: "Last Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "contact",
      headerName: "Contact Number",
      flex: 1,
    },
    {
      field: "address1",
      headerName: "Address 1",
      flex: 1,
    },
    {
      field: "address2",
      headerName: "Address 2",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: 'actions',
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
          onClick={() => handleDelete(params.id)}
        />
      ],
    },
  ];

  return (
    <Box m="20px">
      <Header title="PROFILES" subtitle="User Profiles" />
      <Box 
        m="40px 0 0 0"
        height="100vh"
        width={1610}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {profiles.length > 0 ? (
          <DataGrid 
            checkboxSelection 
            rows={profiles}
            columns={columns}
            getRowId={(row) => row.id}
          />
        ) : (
          <Typography>No profiles to display</Typography>
        )}
      </Box>
    </Box>
  );
};

export default TeamForm;
