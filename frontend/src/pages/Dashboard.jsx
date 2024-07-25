import React, { useContext } from 'react';
import DashboardPieChart from '../components/Charts/DashboardPieChart';
import DashboardDoughnutChart from '../components/Charts/DashboardDoughnutChart';
import DashboardBarChart from '../components/Charts/DashboardBarChart';
import { Box, Button, Typography, useTheme, Grid, Card, CardContent } from '@mui/material';
import { ColorModeContext, tokens } from '../theme';

const Dashboard = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ width: '100%', padding: 2, backgroundColor: colors.primary[400] }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" color={colors.grey[100]}>Dashboard Overview</Typography>
        <Button
          variant="contained"
          onClick={colorMode.toggleColorMode}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: '14px',
            fontWeight: 'bold',
            padding: '10px 20px',
          }}
        >
          Toggle {theme.palette.mode === 'light' ? 'Dark' : 'Light'} Mode
        </Button>
      </Box>
      <Grid container spacing={3}>
        {/* Card 1 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: colors.primary[400] }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: colors.grey[100] }}>Total Views</Typography>
              <Typography variant="subtitle1" sx={{ color: colors.grey[300] }}>All Platforms</Typography>
              <DashboardPieChart />
              <Typography variant="h3" sx={{ color: colors.grey[100], textAlign: 'right' }}>8,942,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Card 2 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: colors.primary[400] }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: colors.grey[100] }}>Growth Revenue</Typography>
              <Typography variant="subtitle1" sx={{ color: colors.grey[300] }}>Total Revenue</Typography>
              <Typography variant="h3" sx={{ color: colors.grey[100], textAlign: 'right' }}>£742,900</Typography>
            </CardContent>
          </Card>
        </Grid>
        {/* Card 3 */}
        <Grid item xs={12} md={4}>
          <Card sx={{ backgroundColor: colors.primary[400] }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: colors.grey[100] }}>Sub Views</Typography>
              <Typography variant="subtitle1" sx={{ color: colors.grey[300] }}>All Platforms</Typography>
              <DashboardDoughnutChart />
              <Typography variant="h3" sx={{ color: colors.grey[100], textAlign: 'right' }}>8,942,000</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>Pie Chart</Typography>
      </Box>
      <Box sx={{ my: 3 }}>
        <Card sx={{ backgroundColor: colors.primary[400] }}>
          <CardContent>
            <Typography variant="h5" sx={{ color: colors.grey[100] }}>Total Views</Typography>
            <Typography variant="subtitle1" sx={{ color: colors.grey[300] }}>All Platforms</Typography>
            <DashboardBarChart />
            <Typography variant="h3" sx={{ color: colors.grey[100], textAlign: 'right' }}>8,942,000</Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
