import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import SuggestTool from '../pages/SuggestTool';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/suggest-tool',
        element: <SuggestTool/>
    }
])

const Routes = () => {
    return <RouterProvider router={router}/>
}
export default Routes;