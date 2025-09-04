import { createRoot } from 'react-dom/client'
import Hook from './Hook.jsx'
import MyButton from './childrenAndProp.jsx'
import Button1 from './Button1.jsx'
import Card from './Card.jsx'
import Badge from './Badge.jsx'
import Toggle from './Toggle.jsx'
import ControlledInput from './ControlledInput.jsx' 
import TodoApp from './TodoApp.jsx'
import Timer from './Timer.jsx'
import WindowSize from './WindowSize.jsx'
import {createBrowserRouter} from 'react-router'
import { RouterProvider } from 'react-router';
import NotFoundPage from './NotFoundPage.jsx'
import ProfilePage from './ProfilesPage.jsx'
import SingleProfilePage from './SingleProfilePage.jsx'
import App from './SubmitForm.jsx'


const router=createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement:<NotFoundPage/>
  },
  {
    path:'/profiles',
    element:<ProfilePage />,
    children:[
      {
        path:':profileId',
        element:<SingleProfilePage />

      }
    ],
    errorElement:<NotFoundPage/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={router}/>
  <Hook />
  <MyButton>Click Me</MyButton>
  <Button1 />
  <Card title="Hello Card">This is inside the card</Card>
  <Badge text="New!" />
  <Toggle />
  <ControlledInput />
  <TodoApp />
  <Timer />
  <WindowSize />
  </>
)

