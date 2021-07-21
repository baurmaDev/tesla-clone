import React from 'react'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'
import Section from './Section'

function Home() {
    const cars = useSelector(selectCars)
    
    return (
        <div>
            <Section 
                title = "Model S"
                id = "0"
                className="0"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-s.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title = "Model X"
                id = "1"
                className="1"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title = "Model Y"
                id = "2" 
                className="2"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
                title = "Model 3"
                id = "3"
                className="3"
                description="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
        </div>
    )
}
export default Home
