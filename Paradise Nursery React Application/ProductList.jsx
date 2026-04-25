import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.css';
import { addItem } from './CartSlice';

function ProductList() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.items);

    // Task 6: Display at least six unique houseplants per category (3 categories)
    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15", description: "Produces oxygen at night." },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "$12", description: "Filters formaldehyde and xylene." }
            ]
        },
        {
            category: "Aromatic",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1520903074185-8eca362b3dce", cost: "$20", description: "Calming scent, perfect for bedrooms." },
                { name: "Jasmine", image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b", cost: "$18", description: "Sweet fragrance that improves mood." }
            ]
        },
        {
            category: "Medicinal",
            plants: [
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283030_1280.jpg", cost: "$14", description: "Soothes burns and skin irritations." },
                { name: "Calendula", image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg", cost: "$10", description: "Used in healing salves and ointments." }
            ]
        }
    ];

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    // Check if item is already in cart to disable button
    const isItemInCart = (plantName) => {
        return cart.some(item => item.name === plantName);
    };

    return (
        <div>
            <div className="product-grid">
                {plantsArray.map((category, index) => (
                    <div key={index}>
                        <h1 className="category-title">{category.category}</h1>
                        <div className="product-list">
                            {category.plants.map((plant, plantIndex) => (
                                <div className="product-card" key={plantIndex}>
                                    <img className="product-image" src={plant.image} alt={plant.name} />
                                    <div className="product-title">{plant.name}</div>
                                    <div className="product-price">{plant.cost}</div>
                                    <button 
                                        className={`product-button ${isItemInCart(plant.name) ? 'disabled' : ''}`} 
                                        disabled={isItemInCart(plant.name)} 
                                        onClick={() => handleAddToCart(plant)}
                                    >
                                        {isItemInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
