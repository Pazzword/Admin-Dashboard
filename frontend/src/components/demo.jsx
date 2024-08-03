import React, { useContext } from 'react';
import { Box, Button, Typography, useTheme, Grid, Card, CardContent } from '@mui/material';
import { ColorModeContext, tokens } from '../theme';
//Charts
import DashboardPieChart from '../components/Charts/DashboardPieChart';
import DashboardDoughnutChart from '../components/Charts/DashboardDoughnutChart';
import DashboardBarChart from '../components/Charts/DashboardBarChart';
import DashboardLineChart from '../components/Charts/DashboardLineChart';
import StatBox from '../components/StatBox'; // Assuming StatBox is available

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

      {/* New Row with Smaller Cards */}
      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} md={2}>
          <Card sx={{ backgroundColor: colors.primary[400] }}>
            <CardContent>
              <StatBox title="12,361" subtitle="Emails Sent" progress="0.75" increase="+14%" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card sx={{ backgroundColor: colors.primary[400] }}>
            <CardContent>
              <StatBox title="431,225" subtitle="Sales Obtained" progress="0.50" increase="+21%" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card sx={{ backgroundColor: colors.primary[400] }}>
            <CardContent>
              <StatBox title="32,441" subtitle="New Clients" progress="0.30" increase="+5%" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card sx={{ backgroundColor: colors.primary[400] }}>
            <CardContent>
              <StatBox title="1,325,134" subtitle="Traffic Received" progress="0.80" increase="+43%" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card sx={{ backgroundColor: colors.primary[400] }}>
            <CardContent>
              <StatBox title="72,345" subtitle="Orders Placed" progress="0.60" increase="+10%" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={2}>
          <Card sx={{ backgroundColor: colors.primary[400] }}>
            <CardContent>
              <StatBox title="83,123" subtitle="Revenue" progress="0.90" increase="+32%" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Card 1 */}
        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: colors.primary[400], height: '100%' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: colors.grey[100] }}>Total Views</Typography>
              <Typography variant="subtitle1" sx={{ color: colors.grey[300] }}>All Platforms</Typography>
              <DashboardPieChart />
              <Typography variant="h3" sx={{ color: colors.grey[100], textAlign: 'right' }}>8,942,000</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} md={3}>
          <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
            <Card sx={{ backgroundColor: colors.primary[400], flex: 1, marginBottom: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: colors.grey[100] }}>Total Views</Typography>
                <Typography variant="subtitle1" sx={{ color: colors.grey[300] }}>All Platforms</Typography>
                <DashboardLineChart />
                <Typography variant="h3" sx={{ color: colors.grey[100], textAlign: 'right' }}>8,942,000</Typography>
              </CardContent>
            </Card>
            <Card sx={{ backgroundColor: colors.primary[400], flex: 1, marginTop: 2 }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: colors.grey[100] }}>Total Views</Typography>
                <Typography variant="subtitle1" sx={{ color: colors.grey[300] }}>All Platforms</Typography>
                <DashboardLineChart />
                <Typography variant="h3" sx={{ color: colors.grey[100], textAlign: 'right' }}>8,942,000</Typography>
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: colors.primary[400], height: '100%' }}>
            <CardContent>
              <Typography variant="h5" sx={{ color: colors.grey[100] }}>Sub Views</Typography>
              <Typography variant="subtitle1" sx={{ color: colors.grey[300] }}>All Platforms</Typography>
              <DashboardDoughnutChart />
              <Typography variant="h3" sx={{ color: colors.grey[100], textAlign: 'right' }}>8,942,000</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 4 */}
        <Grid item xs={12} md={3}>
          <Card sx={{ backgroundColor: colors.primary[400], height: '100%' }}>
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
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>Bar Chart</Typography>
      </Box>
      <Box sx={{ my: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Grid container spacing={3} direction="column">
              <Grid item xs={12}>
                <Card sx={{ backgroundColor: colors.primary[400], height: '100%' }}>
                  <CardContent>
                    <StatBox title="12,361" subtitle="Emails Sent" progress="0.75" increase="+14%" />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ backgroundColor: colors.primary[400], height: '100%' }}>
                  <CardContent>
                    <StatBox title="431,225" subtitle="Sales Obtained" progress="0.50" increase="+21%" />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card sx={{ backgroundColor: colors.primary[400], height: '100%' }}>
                  <CardContent>
                    <StatBox title="32,441" subtitle="New Clients" progress="0.30" increase="+5%" />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={9}>
            <Card sx={{ backgroundColor: colors.primary[400], height: '100%' }}>
              <CardContent>
                <Typography variant="h5" sx={{ color: colors.grey[100] }}>Total Views</Typography>
                <Typography variant="subtitle1" sx={{ color: colors.grey[300] }}>All Platforms</Typography>
                <DashboardBarChart />
                <Typography variant="h3" sx={{ color: colors.grey[100], textAlign: 'right' }}>8,942,000</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;