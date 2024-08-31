import { Outlet } from "react-router-dom";
import { Header } from "../components/header/Header";
import { useEffect, useState } from "react";
import { cartArray } from "../constants";
export const Layouts = () => {
    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState([])



    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }
const handleSearchArray=()=>{
    setProducts(cartArray.filter((p) =>p.title.includes(searchText) || p.price.includes(searchText)))
}
    useEffect(()=>{
        setProducts(cartArray)
    },[])
    return (
        <>
            <Header />
            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input
                                type="text"
                                value={searchText}
                                onChange={handleSearch}
                            />
                            <button className="btn btn-primary search-btn" onClick={handleSearchArray}>
                                <img
                                    src="/img/search.svg"
                                    alt="search"
                                    className="search-btn_icon"
                                />
                                <span className="search-btn_text">Найти</span>
                            </button>

                        </div>
                
                    </div>
                </section>
                <Outlet context={{products}}/>
            </main>
        </>
    );
};
