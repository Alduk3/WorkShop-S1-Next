

export default function Breadcumb() {
    return (
        <nav aria-label="breadcrumb">
            <ol className="flex space-x-2">
                <li><a href="#" className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700">Home</a></li>
                <li><a href="#" className="after:content-['/'] after:ml-2 text-gray-600 hover:text-purple-700">Products</a></li>
                <li className="text-purple-700" aria-current="page">Current Product</li>
            </ol>
        </nav>
    );
}