import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';
import Testimonial from '../../components/testimonial/Testimonial';
import { Link } from 'react-router-dom';
import Category from '../../components/category/Category';

function Home() {
    return (
        <Layout>
            {/* <HeroSection /> */}
            <Filter />
            <ProductCard />
            <div className="flex justify-center -mt-10 mb-4">
                <Link to={'/allproducts'}>
                    <button className=" bg-gray-300 px-5 my-5 py-2 rounded-xl">
                        See more
                    </button>
                </Link>
            </div>
            <Category />
            <Track />
            <Testimonial />
        </Layout>
    );
}

export default Home;
