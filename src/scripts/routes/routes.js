import Home from '../views/pages/home';
import Jobs from '../views/pages/joblist';
import SavedJobs from '../views/pages/saved-jobs';
import AboutUs from '../views/pages/about-us';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/jobs': Jobs,
  '/saved-jobs': SavedJobs,
  '/about_us': AboutUs,
//   '/saved-jobs/:id': SavedJobs,
};

export default routes;
