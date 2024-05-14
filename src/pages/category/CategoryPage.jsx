import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';

function CategoryPage() {
    const { category } = useParams();
    const context = useContext(myContext);
    const { mode, product, searchkey, filterPrice } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Product Added to Cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <Filter />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 md:py-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {product
                            .filter((obj) =>
                                obj.title
                                    .toLowerCase()
                                    .includes(searchkey.toLowerCase())
                            )
                            .filter((obj) =>
                                obj.category
                                    .toLowerCase()
                                    .includes(category.toLowerCase())
                            )
                            .filter((obj) => obj.price.includes(filterPrice))
                            .map((item, index) => {
                                const { title, price, category, imageUrl, id } =
                                    item;
                                return (
                                    <div
                                        key={index}
                                        className="p-4 md:w-1/4 w-full drop-shadow-lg "
                                    >
                                        <div
                                            className="h-100px border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                                            style={{
                                                backgroundColor:
                                                    mode === 'dark'
                                                        ? 'rgb(46 49 55)'
                                                        : '',
                                                color:
                                                    mode === 'dark'
                                                        ? 'white'
                                                        : '',
                                            }}
                                        >
                                            <div className="flex justify-center cursor-pointer">
                                                <img
                                                    onClick={() =>
                                                        (window.location.href = `/productinfo/${id}`)
                                                    }
                                                    className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out"
                                                    src={imageUrl}
                                                    alt={title}
                                                />
                                            </div>
                                            <div className="p-5 border-t-2">
                                                <h2
                                                    className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                                                    style={{
                                                        color:
                                                            mode === 'dark'
                                                                ? 'white'
                                                                : '',
                                                    }}
                                                >
                                                    {category}
                                                </h2>
                                                <h1
                                                    className="title-font text-lg font-medium text-gray-900 mb-3"
                                                    style={{
                                                        color:
                                                            mode === 'dark'
                                                                ? 'white'
                                                                : '',
                                                    }}
                                                >
                                                    {title}
                                                </h1>
                                                <p
                                                    className="leading-relaxed mb-3"
                                                    style={{
                                                        color:
                                                            mode === 'dark'
                                                                ? 'white'
                                                                : '',
                                                    }}
                                                >
                                                    ₹{price}
                                                </p>
                                                <div className="flex justify-center">
                                                    <button
                                                        type="button"
                                                        onClick={() =>
                                                            addCart(item)
                                                        }
                                                        className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2"
                                                    >
                                                        Add To Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default CategoryPage;
