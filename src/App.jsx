// props are like properties in react this is used to pass the data from parent component to child component. where we can reuse it any where
import User from "./Components/User"
const users = [
  {
    name: "Sujeet",
    age: 22,
    profession: "Student",
    image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=600"
  },
  {
    name: "Rahul",
    age: 25,
    profession: "Software Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600"
  },
  {
    name: "Anita",
    age: 24,
    profession: "UI Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600"
  },
  {
    name: "Karan",
    age: 28,
    profession: "Product Manager",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600"
  },
  {
    name: "Pooja",
    age: 23,
    profession: "Data Analyst",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600"
  },
  {
    name: "Aman",
    age: 27,
    profession: "DevOps Engineer",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600"
  },
  {
    name: "Neha",
    age: 26,
    profession: "Content Creator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600"
  },
  {
    name: "Vikram",
    age: 30,
    profession: "Entrepreneur",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600"
  }
];

function App(){
  return (
    <div>
        {
           users.map(user =>{
              return <User name={user.name} profession={user.profession} image={user.image} />
           })
       }
    </div>
  )
}

export default App;
