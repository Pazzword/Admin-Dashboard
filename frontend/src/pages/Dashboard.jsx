import React from 'react';
import DashboardPieChart from '../components/Charts/DashboardPieChart';
import DashboardDoughnutChart from '../components/Charts/DashboardDoughnutChart';
import DashboardBarChart from '../components/Charts/DashboardBarChart';
import DashboardLineChart from '../components/Charts/DashboardLineChart';
import '../styles/Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Dashboard = () => {
  return (
    <div className="my-3 px-3 h-100">
      <h1>Dashboard Overview</h1>
      <div className="row">
        {/* Card 1 */}
        <div className="col-12 col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">Total Views</h5>
              <h6 className="card-subtitle mb-2 text-muted">All Platforms</h6>
              <div>
                <DashboardPieChart />
              </div>
              <h1 className="card-text text-end">8,942,000</h1>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="col-12 col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">Total Views</h5>
              <h6 className="card-subtitle mb-2 text-muted">All Platforms</h6>
              <div>
                <DashboardBarChart />
              </div>
              <h1 className="card-text text-end">8,942,000</h1>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="col-12 col-md-4 mb-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">Sub Views</h5>
              <h6 className="card-subtitle mb-2 text-muted">All Platforms</h6>
              <div>
                <DashboardDoughnutChart />
              </div>
              <h1 className="card-text text-end">8,942,000</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="table-container">
        <h2>Line Chart</h2>
      </div>
      <div className="my-3">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title text-primary">Total Views</h5>
              <h6 className="card-subtitle mb-2 text-muted">All Platforms</h6>
              <div>
                <DashboardLineChart />
              </div>
              <h1 className="card-text text-end">8,942,000</h1>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
