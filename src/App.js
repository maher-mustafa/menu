import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Paginat from './components/pagination';
import Order from './components/card';
import { Container } from 'react-bootstrap';
import { data } from './data';
import { useState } from 'react';
function App() {
  
  let [categories, setCategories] = useState([...new Set(data.map((e) => e.category))])
  let [males,setMales]=useState( data.map((ele, index) => (
    <Order
      key={index}
      image={ele.image}
      title={ele.title}
      price={ele.price}
      disc={ele.discription}
    />
  )))
   ;
  const filterByCategory = (cat) => {
    if (cat === "الكل") {
      setMales( data.map((ele, index) => (
    <Order
      key={index}
      image={ele.image}
      title={ele.title}
      price={ele.price}
      disc={ele.discription}
    />
  )))
    }
    else {
      let newArr = data.filter((ele, index) => ele.category == cat)
     
      setMales(newArr.map((ele, index) => (
        <Order
          key={index}
          image={ele.image}
          title={ele.title}
          price={ele.price}
          disc={ele.discription}
        />)))
    }
  }
  const filterBySerch = (cat) => {
    if (cat != "") {

       let newArr = data.filter((ele, index) => ele.title.includes(cat));

       setMales(
         newArr.map((ele, index) => (
           <Order
             key={index}
             image={ele.image}
             title={ele.title}
             price={ele.price}
             disc={ele.discription}
           />
         ))
       );
     }
  }
  return (
    <>
      <Navbar filterBySerch={filterBySerch} />
      <Container dir="rtl" className="main">
        <Paginat items={categories} filterByCategory={filterByCategory} />
        {males}
      </Container>
    </>
  );
}

export default App;
