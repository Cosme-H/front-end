import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../index.css';

const Header = () => {
  return (
    <>
      <header>
        <div>
          <Logo />
          <input type='text' id='pesquisa' name='pesquisa' placeholder='Pesquisar produto...'/>
          <a href='#' >Cadastre-se</a>
          <input type='button' value='Entrar'/>
        </div>
        <div>
          <nav>
            <ul>
              <li><a href='#'>Home</a></li>
              <li><a href='#'>Produtos</a></li>
              <li><a href='#'>Categoria</a></li>
              <li><a href='#'>Meus pedidos</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;