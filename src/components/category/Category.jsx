import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';

function Category() {
    const { mode } = useContext(myContext);
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate(`/category/${category}`);
    };

    return (
        <>
            <div
                className="container px-5 py-8 md:py-16 mx-auto"
                style={{
                    backgroundColor: mode === 'rgb(46 49 55)' ? 'black' : '',
                }}
            >
                <div className=" w-full mb-6 lg:mb-10">
                    <h1
                        className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
                        style={{ color: mode === 'dark' ? 'white' : '' }}
                    >
                        Explore Categories
                    </h1>
                    <div className="h-1 w-20 bg-pink-600 rounded"></div>
                </div>

                <div className="overflow-x-auto whitespace-nowrap">
                    <div className="flex space-x-4 p-4">
                        <div
                            onClick={() => handleCategoryClick('laptops')}
                            className="bg-white rounded-lg p-6 flex-shrink-0 w-60 h-72 border drop-shadow-lg cursor-pointer"
                            style={{
                                backgroundColor:
                                    mode === 'dark' ? 'rgb(46 49 55)' : '',
                            }}
                        >
                            <div className="">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/428/428001.png"
                                    alt="Laptops"
                                    className="w-full h-40 object-fit rounded-lg"
                                />
                                <div
                                    className="flex justify-center items-center sm:text-2xl text-xl font-medium title-font my-10 text-black"
                                    style={{
                                        color: mode === 'dark' ? 'white' : '',
                                    }}
                                >
                                    Laptops
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => handleCategoryClick('tablets')}
                            className="bg-white rounded-lg p-6 flex-shrink-0 w-60 h-72 border drop-shadow-lg cursor-pointer"
                            style={{
                                backgroundColor:
                                    mode === 'dark' ? 'rgb(46 49 55)' : '',
                            }}
                        >
                            <div className="">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/10100/10100750.png"
                                    alt="Tablets"
                                    className="w-full h-40 object-fit rounded-lg"
                                />
                                <div
                                    className="flex justify-center items-center sm:text-2xl text-xl font-medium title-font my-10 text-black"
                                    style={{
                                        color: mode === 'dark' ? 'white' : '',
                                    }}
                                >
                                    Tablets
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => handleCategoryClick('smartphones')}
                            className="bg-white rounded-lg p-6 flex-shrink-0 w-60 h-72 border drop-shadow-lg cursor-pointer"
                            style={{
                                backgroundColor:
                                    mode === 'dark' ? 'rgb(46 49 55)' : '',
                            }}
                        >
                            <div className="">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/3137/3137807.png"
                                    alt="Smartphones"
                                    className="w-full h-40 object-fit rounded-lg"
                                />
                                <div
                                    className="flex justify-center items-center sm:text-2xl text-xl font-medium title-font my-10 text-black"
                                    style={{
                                        color: mode === 'dark' ? 'white' : '',
                                    }}
                                >
                                    Smartphones
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => handleCategoryClick('headphones')}
                            className="bg-white rounded-lg p-6 flex-shrink-0 w-60 h-72 border drop-shadow-lg cursor-pointer"
                            style={{
                                backgroundColor:
                                    mode === 'dark' ? 'rgb(46 49 55)' : '',
                            }}
                        >
                            <div className="">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/6190/6190871.png"
                                    alt="Headphones"
                                    className="w-full h-40 object-fit rounded-lg"
                                />
                                <div
                                    className="flex justify-center items-center sm:text-2xl text-xl font-medium title-font my-10 text-black"
                                    style={{
                                        color: mode === 'dark' ? 'white' : '',
                                    }}
                                >
                                    Headphones
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => handleCategoryClick('monitors')}
                            className="bg-white rounded-lg p-6 flex-shrink-0 w-60 h-72 border drop-shadow-lg cursor-pointer"
                            style={{
                                backgroundColor:
                                    mode === 'dark' ? 'rgb(46 49 55)' : '',
                            }}
                        >
                            <div className="">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/186/186225.png"
                                    alt="Monitors"
                                    className="w-full h-40 object-fit rounded-lg"
                                />
                                <div
                                    className="flex justify-center items-center sm:text-2xl text-xl font-medium title-font my-10 text-black"
                                    style={{
                                        color: mode === 'dark' ? 'white' : '',
                                    }}
                                >
                                    Monitors
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() =>
                                handleCategoryClick('graphics-cards')
                            }
                            className="bg-white rounded-lg p-6 flex-shrink-0 w-60 h-72 border drop-shadow-lg cursor-pointer"
                            style={{
                                backgroundColor:
                                    mode === 'dark' ? 'rgb(46 49 55)' : '',
                            }}
                        >
                            <div className="">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/128/11894/11894960.png"
                                    alt="Graphics Cards"
                                    className="w-full h-40 object-fit rounded-lg"
                                />
                                <div
                                    className="flex justify-center items-center sm:text-2xl text-xl font-medium title-font my-10 text-black"
                                    style={{
                                        color: mode === 'dark' ? 'white' : '',
                                    }}
                                >
                                    Graphics Cards
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;
