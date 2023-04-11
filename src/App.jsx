import { useState } from 'react'
import { useRoutes } from 'react-router-dom'
import Sidebar from './routes/Sidebar'
import Error from './routes/Error'
import Home from './routes/Home'
import Create from './routes/Create'

function App() {
  const [count, setCount] = useState(0)

  let element = useRoutes([
    {
      path:"",
      element: <Sidebar/>,
      children: [
        {
          path:"", element: <Home/>,
        },
        {
          path:"create/", element: <Create/>
        }
      ]
    },
    {
      path: "*",
      element: <Error/>
    }
  ])

  return (
    <div className="App">
        {element}
    </div>
  )
}

export default App
