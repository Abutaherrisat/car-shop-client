import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import DefaultServices from '../DefaultServices/DefaultServices';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import ItemReviews from '../ItemReviews/ItemReviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <DefaultServices></DefaultServices>
            <Gallery></Gallery>
            <ItemReviews></ItemReviews>
            <Footer></Footer>
         
            
        </div>
    );
};

export default Home;