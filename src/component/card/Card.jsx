const Card = () => {
  return (
    <div className="border shadow-sm rounded p-4 max-w-xs">
      <div className="relative">
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_945976-MLA48592456930_122021-F.jpg"
          alt="Product Image"
          className="w-full rounded-t"
        />
        <div className="absolute top-2 left-2 bg-green-500 text-white text-xs rounded px-2">
          %2
        </div>
        <button className="absolute top-2 right-2 text-gray-500">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-5 right-1 text-gray-500"
          >
            <path d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" />
          </svg>
        </button>
      </div>
      <div className="text-sm mt-2 text-gray-700 font-medium">
        Xiaomi Redmi 10 2022 128GB Gri
      </div>
      <div className="text-lg mt-2 text-black font-bold">
        6.383,29 TL
        <span className="line-through text-gray-400 text-sm ml-2">
          6.499,00 TL
        </span>
      </div>
      <div className="text-xs text-green-500 mt-1">
        Son 30 günün en ucuzu Kazancın 115,71 TL
      </div>
      <div className="text-xs text-red-500 mt-1">Bugün başladı</div>
      <div className="mt-4">
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          6 fiyatı incele
        </button>
      </div>
    </div>
  );
};

export default Card;
