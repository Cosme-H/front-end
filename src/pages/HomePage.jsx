import React from 'react';
import '../compoments/gallery/Gallery';
import Gallery from '../compoments/gallery/Gallery';
import ColecoesEmDestaque1 from '../compoments/colecoesemdestaque1/ColecoesEmDestaque';
import ColecoesEmDestaque2 from '../compoments/colecoesemdestaque2/ColecoesEmDestaque2';
import OfertaEspecial from '../compoments/ofertaespecial/OfertaEspecial';
import Section from '../compoments/section/Section';
import ProductCard from '../compoments/productcard/ProductCard';

const HomePage = () => {
    return (
        <main>
            <Gallery/>
            <Section title='Coleções em Destaque' titleAling='left'> 
                <ColecoesEmDestaque1/>
            </Section>
            <Section title='Coleções em Destaque' titleAling='center'> 
                <ColecoesEmDestaque2/>
            </Section>
            <Section title='Produtos em alta' titleAling='left'> 
                <ProductCard name={'k-Swiss V8 - Masculino'} price={'$200'}></ProductCard>
            </Section>
            <OfertaEspecial/>
        </main>
    );
};
export default HomePage;