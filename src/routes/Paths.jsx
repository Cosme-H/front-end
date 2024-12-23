import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Layout from '../pages/Layout';

const Paths = () => {
    return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>                
                <Route index element={<HomePage />} />
              </Route>                
            </Routes>
          </BrowserRouter>
        </>
    );
};
export default Paths;