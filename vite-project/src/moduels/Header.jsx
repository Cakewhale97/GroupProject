import "../styles/Header.css"
import { useState } from "react"
export default function Header({cartCount}) {
    return (
        <div className="Header">
            <div className="Logo">
            <img src="https://media.istockphoto.com/id/1304798840/vector/man-in-a-hat-smokes-a-cigar-cut-out-silhouette-vector-icon.jpg?s=612x612&w=0&k=20&c=O3DnQCs9EUcwxh0b_wNpECqyU6YFarwcOIT6jdiMPBo=" alt="" />
            </div>
            <h1>BOOKSTORE</h1>
            <div className="Cart">
                <img style={{width: "50px", height: "50px"}} src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg" alt="" />
                <h2>{cartCount}</h2>
            </div>
            </div>
            
        
    )
}