import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Product } from '@/types/Interfaces';
import Loading from './Loading';
import Link from 'next/link';
const fetchData = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
};
const AllCards: React.FC = () => {
    const { data, isLoading, isError } = useQuery<Product[], Error>('data', fetchData);
    const limitDescription = (description: string, limit: number) => {
        const words = description.split(' ');
        const slicedWords = words.slice(0, limit);
        return slicedWords.join(' ');
    };
    if (isLoading) return <div><Loading /></div>;
    if (isError) return <div>Error fetching data</div>;
    if (!data) return null;
    return (
        <div className='flex justify-between gap-3 flex-wrap'>
            {data.map((item: Product) => (
                <Link href={`/products/${item.id}`} key={item.id} className="mt-12 cursor-pointer max-w-80 shadow-2xl border-8 rounded-2xl h-96 pb-4 flex items-center flex-col  overflow-hidden">
                    <img className="w-3/4" style={{ width: '60%', height: '150px' }} src={item.image} alt={item.title} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{limitDescription(item.title, 3)}</div>
                        <p className="text-gray-700 text-base">{limitDescription(item.description, 15)}</p>
                    </div>
                    <div className="px-6 py-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{item.category}</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{item.price}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
}
export default AllCards;
