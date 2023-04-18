import React, { useState } from "react";
import Menu from "./Menu";

import Card from "react-bootstrap/Card";

const SearchItem = () => {
  const [image, setImage] = useState(Menu);
  console.log(image);


  const changeData = (e) =>{
    let getData =e.toLowerCase();
    if(getData==""){
      setImage(Menu)
    }else{
      let storeData = image.filter((ele)=>{
        return ele.category.toLowerCase().match(getData);
      })
      setImage(storeData);
    }
  }


  const filterItems = (cat) =>{
    const upData = Menu.filter((curEle)=>{
      return curEle.category === cat
    })
    setImage(upData);
  }
  return (
    <>
      <div className="container d-flex  justify-content-center align-item-center ">
        <input type="text" onChange={(e)=>changeData(e.target.value)} />
        <button
          type="submit"
          style={{ borderRadius: "5px" }}
          className="btn btn-danger"
        >
          submit
        </button>
      </div>

      <div>
        <button className="btn btn-primary  ms-4 my-4" onClick={()=>filterItems("maountain")}>Mountain</button>
        <button className="btn btn-primary ms-4" onClick={()=>filterItems("beaches")}>Beaches</button>
        <button className="btn btn-primary ms-4"  onClick={()=>filterItems("birds")}>Birds</button>
        <button className="btn btn-primary ms-4" onClick={()=>filterItems("foods")}>Food</button>
        <button className="btn btn-primary ms-4" onClick={()=>setImage(Menu)}>All</button>
      </div>

      <div className="row">
        {image.map((data) => {
          const { id, name, image } = data;
          return (
            <div className="col-12 col-md-6 col-lg col-xl-4 my-2">
              <Card className="mt-3 ms-4 " style={{ width: "22rem" }}>
                <Card.Img
                  className="mt-2 "
                  style={{ width: "20rem", height: "15rem" }}
                  src={image}
                  alt="hggagagagh"
                />
              </Card>
            </div>
          );
        })}
      </div>

      
    </>
  );
};

export default SearchItem;
