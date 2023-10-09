import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import eAxios from "../axios/axios";

const Index = () => {
  // const [items, setItem] = useState([]);

  // const fetchItem = async () => {
  //   try {
  //     const res = await eAxios.get("/products");
  //     const data = await res.data;
  //     setItem(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchItem();
  // }, []);

  const { isloading } = useSelector((state) => state.items);

  console.log(isloading);

  return (
    <div>
      {/* {items.map((item) => (
        <h2 key={item.id}>{item.title}</h2>
      ))} */}
    </div>
  );
};

export default Index;
