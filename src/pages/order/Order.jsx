import React, { useContext } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Loader from '../../components/loader/Loader';

function Order() {
    const userid = JSON.parse(localStorage.getItem('user')).user.uid;
    const context = useContext(myContext);
    const { mode, loading, order } = context;

    // Filter orders for the logged-in user
    const userOrders = order.filter((obj) => obj.userid === userid);

    return (
        <Layout>
            {loading && <Loader />}
            {userOrders.length > 0 ? (
                <div className="h-full pt-10">
                    {userOrders.map((order) => (
                        <div
                            key={order.id}
                            className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
                        >
                            {order.cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="rounded-lg md:w-2/3"
                                >
                                    <div
                                        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                                        style={{
                                            backgroundColor:
                                                mode === 'dark'
                                                    ? '#282c34'
                                                    : '',
                                            color:
                                                mode === 'dark' ? 'white' : '',
                                        }}
                                    >
                                        <img
                                            src={item.imageUrl}
                                            alt="product-image"
                                            className="w-full rounded-lg sm:w-40"
                                        />
                                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                            <div className="mt-5 sm:mt-0">
                                                <h2
                                                    className="text-lg font-bold text-gray-900"
                                                    style={{
                                                        color:
                                                            mode === 'dark'
                                                                ? 'white'
                                                                : '',
                                                    }}
                                                >
                                                    {item.title}
                                                </h2>
                                                <p
                                                    className="mt-1 text-xs text-gray-700"
                                                    style={{
                                                        color:
                                                            mode === 'dark'
                                                                ? 'white'
                                                                : '',
                                                    }}
                                                >
                                                    {item.description}
                                                </p>
                                                <p
                                                    className="mt-1 text-xs text-gray-700"
                                                    style={{
                                                        color:
                                                            mode === 'dark'
                                                                ? 'white'
                                                                : '',
                                                    }}
                                                >
                                                    {item.price}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    className="flex flex-wrap min-h-28vh justify-center items-center"
                    style={{ minHeight: '31vh' }}
                >
                    <p className="text-center text-9xl text-black">No Orders</p>
                </div>
            )}
        </Layout>
    );
}

export default Order;