import Home from './pages/home.jsx'
import{
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import LoginPage from './pages/loginpage.jsx';
import SignupPage from './pages/signuppage.jsx';
import "../src/App.css"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/signup',
    element: <SignupPage/>
  },
])
const App = () => {
  return (
    <div className='App'>
     <RouterProvider router={router}/>
    </div>
   
  )
}

export default App;