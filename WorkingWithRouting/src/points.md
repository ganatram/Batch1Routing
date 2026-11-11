App
--- Routes (Routing mechanism)
--- ProductsPage

       ________________________________

       Routing  - 'perform navigation'

       A,B,C's of Routing:

       A.   #HashBang - are events that cause state changes in the
                        BrowserURl state

                non react style:
                <a href='#contactus'> somelink </a>

                react style:
                import {Link} from 'react-router-dom';

                <Link to="products"> go to products list   </Link>


       B.   RouterTree - Route configurations - 'Array of Route objects'
                         Desktop applications - createBrowserRouter()

            Syntax:

import {createBrowserRouter} from 'react-router-dom';

const myRouterTree = createBrowserRouter([
    {
        path:'products',  // tracks the BrowserURL state 
        element:<ProductsPage/> // provide the component
    },
     {
        path:'contact',  // tracks the BrowserURL state 
        element:<ContactPage/> // provide the component
    },

   ])

C. Routing Placeholder - 'accomodates/serves the component provided by the RouterTree'

      import {RouterProvider} from 'react-router-dom' ;

     export function Routes(){
        return <RouterProvider router={myRouterTree}/>
     }












                  RouterTree                                    Routing Placeholder

Root Level       const ref1 = createBrowserRouter([{},{}])     <RouterProvider router={ref1}/>

Nested Level     [{children:[{},{}]}]                          <Outlet/>