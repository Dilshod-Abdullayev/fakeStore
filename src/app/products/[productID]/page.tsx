"use client"
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import Loading from '@/components/Loading';
import { PageProps, Product } from '@/types/Interfaces';
const Page: React.FC<PageProps> = ({ params }) => {
    const { productID } = params;

    const { data, isLoading, isError } = useQuery<Product>(
        ['product', productID],
        async () => {
            const res = await axios.get(`https://fakestoreapi.com/products/${productID}`);
            return res.data;
        }
    );

    if (isLoading) return <div><Loading /></div>;
    if (isError) return <div>Error fetching product</div>;
    return (
        <div className="flex mt-4 justify-center">
            {data && (
                <div className="max-w-lg mx-auto rounded-lg overflow-hidden shadow-md">
                    <img className="w-full h-64 object-cover" src={data.image} alt={data.title} />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold ">{data.title}</h2>
                        <p className="">{data.description}</p>
                        <p className="mt-2  font-bold">Price: ${data.price}</p>
                    </div>
                </div>

            )}
        </div>
    );
};

export default Page;
