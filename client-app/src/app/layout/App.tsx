import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityDetails from '../../features/activities/details/ActivityDetails';
import ActivityForm from '../../features/activities/form/ActivityForm';
import { memo } from 'react';
import Layout from './Layout';

function App() {
  const location = useLocation();

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route element={<Layout />}>
        <Route path='/activities' element={<ActivityDashboard />} />
        <Route path='/activities/:id' element={<ActivityDetails />} />
        {["/createActivity", "/manage/:id"].map((path) => {
          return (
            <Route key={location.key} path={path} element={<ActivityForm key={location.key} />} />
          );
        })}
      </Route>
    </Routes>

  );
}

export default memo(App);