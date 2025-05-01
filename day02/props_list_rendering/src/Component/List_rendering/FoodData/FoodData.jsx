import React from 'react'

const FoodData = () => {
    const food=[
        {
          "id": 1,
          "name": "Spaghetti Carbonara",
          "ingredients": ["Spaghetti", "Eggs", "Parmesan Cheese", "Pancetta", "Black Pepper"],
          "instructions": "Boil pasta. Cook pancetta. Mix eggs and cheese. Combine all with pasta and season.",
          "cuisine": "Italian"
        },
        {
          "id": 2,
          "name": "Chicken Biryani",
          "ingredients": ["Chicken", "Basmati Rice", "Yogurt", "Spices", "Onions", "Mint", "Saffron"],
          "instructions": "Marinate chicken. Cook rice. Layer rice and chicken. Cook on low heat (dum).",
          "cuisine": "Indian"
        },
        {
          "id": 3,
          "name": "Sushi Rolls",
          "ingredients": ["Sushi Rice", "Nori", "Raw Fish or Veggies", "Soy Sauce", "Wasabi"],
          "instructions": "Prepare rice. Place rice on nori. Add filling. Roll tightly and slice.",
          "cuisine": "Japanese"
        },
        {
          "id": 4,
          "name": "Tacos",
          "ingredients": ["Tortillas", "Beef or Beans", "Lettuce", "Cheese", "Tomatoes", "Salsa"],
          "instructions": "Cook meat or beans. Warm tortillas. Fill and top with veggies and salsa.",
          "cuisine": "Mexican"
        },
        {
          "id": 5,
          "name": "Pad Thai",
          "ingredients": ["Rice Noodles", "Shrimp or Chicken", "Eggs", "Bean Sprouts", "Peanuts", "Tamarind Sauce"],
          "instructions": "Soak noodles. Stir-fry protein and eggs. Add noodles and sauce. Top with peanuts.",
          "cuisine": "Thai"
        }
      ]
      
  return (
    <div>
      {food.map((f,index)=>{
        return(
        <div key={index}>
           <h1>{f.id}
            {f.name}
            {f.ingredients}
            {f.instructions}

           </h1>
        </div>
        )

      })}
    </div>
  )
}

export default FoodData
