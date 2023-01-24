import { createBrowserRouter} from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Faculties from '../components/Faculties/Faculties';
import Hero from '../components/Hero/Hero';
import Course from '../components/Course/Course';
import Faculty from '../components/Faculty/Faculty';
const router = createBrowserRouter([
    {
      path : '/', element : <Main></Main>,
      children : [
        {path: '/', element : <Home></Home>},
        {path : '/about', element : <About></About>},
        {path : '/hero', element : <Hero></Hero>},
        {
          path : '/faculties', 
          loader : ()=>fetch('../teachers.json'),
          element : <Faculties></Faculties>
        },
        {
          path : 'faculties/faculty/:facId',
          loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.facId}`),
          element : <Faculty></Faculty>
        },
        {path : '/course', element : <Course></Course>}
      ]
    }
  ]);
  export default  router;