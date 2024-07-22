import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, DashboardOutlined, AreaChartOutlined, PieChartOutlined, TableOutlined, CalendarOutlined, SettingOutlined, MessageOutlined, LogoutOutlined} from '@ant-design/icons';

const MenuList = ({ darkTheme }) => {
  const items = [
    {
      key: 'home',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: 'activity',
      icon: <DashboardOutlined />,
      label: <Link to="/dashboard">Dashboard</Link>,
    },
    {
      key: 'subtask',
      icon: <AreaChartOutlined />,
      label: 'Charts',
      children: [
        {
          key: 'line-chart',
          icon: <AreaChartOutlined />,
          label: <Link to="/dashboard">Line Chart</Link>,
        },
        {
          key: 'pie-chart',
          icon: <PieChartOutlined />,
          label: <Link to="/dashboard">Pie Chart</Link>,
        },
      ],
    },
    {
      key: 'data-table',
      icon: <TableOutlined />,
      label: <Link to="/data-table">Data Table</Link>,
    },
    {
      key: 'posts',
      icon: <MessageOutlined />,
      label: <Link to="/posts">Posts</Link>,
    },
    {
      key: 'calendar',
      icon: <CalendarOutlined />,
      label: <Link to="/calendar">Calendar</Link>,
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Settings',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: <Link to="/logout">Logout</Link>,
    },
  ];

  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode="inline" className="menu-bar" items={items} />
  );
};

export default MenuList;
