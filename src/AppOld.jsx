import Card from "./Components/Card"
const items = [
  {
    foodName: "Margherita Pizza",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Classic Italian pizza with fresh tomatoes, mozzarella cheese, and basil.",
    price: 299,
    type: "Veg",
    rating: 4.5
  },
  {
    foodName: "Chicken Biryani",
    image: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?a=1&b=1&s=612x612&w=0&k=20&c=a8j_p9BkWtsSX7WkcqeetigH8PYWXGayIGto9GiehNY=",
    desc: "Aromatic basmati rice cooked with spicy chicken and traditional Indian spices.",
    price: 349,
    type: "Non-Veg",
    rating: 4.7
  },
  {
    foodName: "Veg Burger",
    image: "https://plus.unsplash.com/premium_photo-1664392115681-28de35ca10a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmVnJTIwQnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D",
    desc: "Crispy vegetable patty served with fresh lettuce and special sauce.",
    price: 149,
    type: "Veg",
    rating: 4.2
  },
  {
    foodName: "Pasta Alfredo",
    image: "https://images.unsplash.com/photo-1662478838323-2b4d9dba8ce8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGFzdGElMjBBbGZyZWRvfGVufDB8MHwwfHx8MA%3D%3D",
    desc: "Creamy Alfredo pasta with mushrooms and parmesan cheese.",
    price: 279,
    type: "Veg",
    rating: 4.4
  },
  {
    foodName: "Grilled Chicken",
    image: "https://images.unsplash.com/photo-1592011432621-f7f576f44484?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JpbGxlZCUyMENoaWNrZW58ZW58MHwwfDB8fHww",
    desc: "Juicy grilled chicken breast marinated with herbs and spices.",
    price: 399,
    type: "Non-Veg",
    rating: 4.6
  }
];

function App(){
  return (
    <>
      <div className="flex gap-2 wrap">
        {
          items.map(item =><Card img={item.image} title={item.foodName} desc={item.desc} rating={item.rating} price={item.price} type={item.type} />)
        }
      </div>
    </>
  )
}

export default App;