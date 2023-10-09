import React from "react";
import { useSelector } from "react-redux";

const Index = () => {
  const { items } = useSelector((state) => state.items);

  console.log(items);

  return <div>Ecommerce coming soon </div>;
};

export default Index;
