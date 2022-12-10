import Home from '../views/pages/home';
import Jobs from '../views/pages/joblist';
import SavedJobs from '../views/pages/saved-jobs';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/jobs': Jobs,
  '/saved-jobs': SavedJobs,
//   '/saved-jobs/:id': SavedJobs,
};

export default routes;
