import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import "react-loading-skeleton/dist/skeleton.css";

const Index = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="grid grid-cols-1 sm:max-w-md sm:mx-auto md:max-w-full md:grid-cols-2 lg:grid-cols-3 gap-[20px ] md:gap-[25px] xl:gap-[50px] my-[50px] md:my-[100px]">
      {products.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Index;
