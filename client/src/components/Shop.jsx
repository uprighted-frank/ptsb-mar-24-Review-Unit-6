import { useEffect, useState } from "react"

export default function Shop({ handlerLogin }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        console.log(localStorage)
        fetchIceCreams();
    }, []);


    async function fetchIceCreams() {
        const token = localStorage.getItem("token");

        try {
            const response = await fetch("http://localhost:3000/icecream", {
                headers: {
                    "authorization": token
                }
            });
            const data = await response.json();
            console.log("data", data);
            setProducts(data);
        } catch (err) {
            console.log(err);
            handlerLogin(false);
        }

    }

    function handleLogout() {
        localStorage.clear();

    }

    return (
        <>
            <h2>Shop</h2>

            {/* Fetch Ice Creams and display onto page */}
            {
                products.length > 0 && products.map((product) => {
                    return <p>{product.flavor}  {product.manufacturer}</p>
                })
            }

            <button type="text" onClick={handleLogout}>Logout</button>
        </>
        
    )
}