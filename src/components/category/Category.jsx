import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../../context/data/myContext';

const categoriesData = [
    {
        name: 'Laptops',
        imageUrl: 'https://cdn-icons-png.flaticon.com/128/428/428001.png',
        slug: 'laptops',
    },
    {
        name: 'Tablets',
        imageUrl: 'https://cdn-icons-png.flaticon.com/128/10100/10100750.png',
        slug: 'tablets',
    },
    {
        name: 'Smartphones',
        imageUrl: 'https://cdn-icons-png.flaticon.com/128/3137/3137807.png',
        slug: 'smartphones',
    },
    {
        name: 'Headphones',
        imageUrl: 'https://cdn-icons-png.flaticon.com/128/6190/6190871.png',
        slug: 'headphones',
    },
    {
        name: 'Monitors',
        imageUrl: 'https://cdn-icons-png.flaticon.com/128/186/186225.png',
        slug: 'monitors',
    },
    {
        name: 'Graphics Cards',
        imageUrl: 'https://cdn-icons-png.flaticon.com/128/11894/11894960.png',
        slug: 'graphics-cards',
    },
];

function Category() {
    const { mode } = useContext(myContext);
    const navigate = useNavigate();

    const handleCategoryClick = (slug) => {
        navigate(`/category/${slug}`);
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
                        {categoriesData.map((category) => (
                            <div
                                key={category.slug}
                                onClick={() =>
                                    handleCategoryClick(category.slug)
                                }
                                className="bg-white rounded-lg p-6 flex-shrink-0 w-60 h-72 border drop-shadow-lg cursor-pointer"
                                style={{
                                    backgroundColor:
                                        mode === 'dark' ? 'rgb(46 49 55)' : '',
                                }}
                            >
                                <div className="">
                                    <img
                                        src={category.imageUrl}
                                        alt={category.name}
                                        className="w-full h-40 object-fit rounded-lg"
                                    />
                                    <div
                                        className="flex justify-center items-center sm:text-2xl text-xl font-medium title-font my-10 text-black"
                                        style={{
                                            color:
                                                mode === 'dark' ? 'white' : '',
                                        }}
                                    >
                                        {category.name}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;
