import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Notifications from '../pages/Notifications';
import Plans from '../pages/Plans';
import PlansFinal from '../pages/PlansFinal';
import Register from '../pages/Register';
import Access from '../pages/Access';
import Trainings from '../pages/Trainings';
import TrainingsDetails from '../pages/TrainingsDetails';


const Routes = () => (
  <Switch>
    <Route path="/" exact component={Access} />
    <Route path="/register" component={Register} />
    <Route path="/home" component={Home} />
    <Route path="/notifications" component={Notifications} />
    <Route path="/plans" component={Plans} />
    <Route path="/plans_final" component={PlansFinal} />
    <Route path="/trainings" component={Trainings} />
    <Route path="/training_details" component={TrainingsDetails} />
  </Switch>
);

export default Routes;