const { createBrowserRouter } = require("react-router-dom");
const { default: Home } = require("../Pages/Home/Home");
const { default: Root } = require("../Root/Root");

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
              path:'/',
              element:<Home></Home>  
            }
        ]
    }
])