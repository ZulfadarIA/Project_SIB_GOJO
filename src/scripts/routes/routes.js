import Home from '../views/pages/home';
import Jobs from '../views/pages/joblist';
import SavedJobs from '../views/pages/saved-jobs';
import AboutUs from '../views/pages/about-us';
import DetailJob from '../views/pages/detail';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/jobs': Jobs,
  '/saved-jobs': SavedJobs,
  '/about_us': AboutUs,
  '/detail/:id': DetailJob,
};

export default routes;
