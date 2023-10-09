import { BsStarFill } from "react-icons/bs";

const Card = ({ item }) => {
  console.log(item);

  const { title, price, description, image, rating } = item;

  return (
    <>
      <div className="w-full p-3 md:p-5 bg-white border-[#000] drop-shadow-lg rounded-xl">
        <div className="w-[150px] mx-auto h-[250px] flex justify-center items-center">
          <img src={image} alt={title} className="max-w-100 max-h-100" />
        </div>
        <div className="my-[10px]">
          <span
            className={`py-[4px] text-white px-[10px] inline-flex items-center gap-1 ${
              rating.rate >= 3.0 ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {rating.rate}
            <BsStarFill color="white" />
          </span>
          <h3 className="text-[18px] md:text-[20px] lg:text-[24px] line-clamp-2 font-bold mt-2">
            {title}
          </h3>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-red-500 mt-[5px] lg:mt-3">
            ${price}
          </h2>
          <p className="font-normal mt-[10px] line-clamp-2 text-[14px] md:text-[15px] lg:text-[18px]">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
