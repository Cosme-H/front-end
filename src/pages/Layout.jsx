import Header from '../compoments/Header';
import Footer from '../compoments/Footer';
import { Outlet } from 'react-router-dom';

// Definindo o componente de layout
const Layout = () => {
    return (
        <>
            <Header />           
            <Outlet />          
            <Footer />
        </>
    );
};

export default Layout;