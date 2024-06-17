import Pagination from "react-bootstrap/Pagination";
import { data } from "../data";
import Order from "./card";
import { useRef } from "react";

function Paginat(props) {
  let ref=useRef()
  function OnFilter(e) {
    // ele.current.classList.add("active")
    // console.log())
    props.filterByCategory(e);
}
 let cats=props.items.map((e,index) => {
  return <Pagination.Item  onClick={()=>{OnFilter(e)}} key={index}>{e}</Pagination.Item>;
   });
  return (
    <Pagination className="d-flex justify-content-center my-5 ms-5">
      <Pagination.Prev />

      <Pagination.Item
        
        onClick={() => {OnFilter("الكل")}} >
        الكل
      </Pagination.Item>

      {cats}

      <Pagination.Next />
    </Pagination>
  );
}

export default Paginat;
