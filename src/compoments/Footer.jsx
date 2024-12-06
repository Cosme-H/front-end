import React from 'react';
import Logo from './Logo';
import '../index.css';

const Footer = () => {
    return (
        <>
          <footer>
            <Logo/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, labore, aperiam nobis asperiores 
                voluptatibus quisquam voluptatem debitis</p>
            <nav>
              <ul>
                <li><a href='#'>Sobre Drip Store</a></li>
                <li><a href='#'>Segurança</a></li>
                <li><a href='#'>Wishlist</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Trabalhe Conosco</a></li>
                <li><a href='#'>Meus pedidos</a></li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li><a href='#'>Camisetas</a></li>
                <li><a href='#'>Calças</a></li>
                <li><a href='#'>Bonés</a></li>
                <li><a href='#'>Headphones</a></li>
                <li><a href='#'>Tênis</a></li>
              </ul>
            </nav>
            <p>Av.Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - Ce, 60150-161</p>
            <p>(85)3051-3411</p>
            <hr/>
            <p>&copy;2024 Digital College</p>
          </footer>
        </>
    );
};
export default Footer;