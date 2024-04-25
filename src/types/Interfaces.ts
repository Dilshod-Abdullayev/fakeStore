export interface Product {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
    price: number;
}
export interface PageProps {
    params: {
        productID: string;
    };
}