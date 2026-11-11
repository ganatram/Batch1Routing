                      localhost:3000/products


#HashBang                                                                       <Link to='products > goto products </Link>      

  -> RouterTree   
  const myRouterTree = createBrowserRouter([{path:'products',element:<ProductsPage/>}])       


 -> Routing placeholder 
 <RouterProvider router={myRouterTree}>
