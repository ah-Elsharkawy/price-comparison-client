import React from "react";
import { Link } from "react-router-dom";

export default function Productcard(
  {
    //   title,
    //   description = "description1",
    // //   imag,
    //   price,
  }
) {
  return (
    <div className="flex justify-center">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          src="https://img.freepik.com/free-psd/ramadan-sale-social-media-instagram-post_505751-3565.jpg?ga=GA1.1.157622948.1694788759&semt=sph"
          alt="Green double couch with wooden legs"
          className="w-40 h-40 rounded-full mx-auto"
        />
        <div className="px-6 py-4">
          <h2 className="text-purple-600 text-md text-center">title</h2>
          <p className="text-purple-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            sit placeat dolore voluptatum facere laborum ipsa, quas et!
            Molestiae tenetur iste consectetur cum voluptates dicta non? Labore
            obcaecati quae animi.
          </p>
          <p className="text-2xl text-yellow-200 text-center">price</p>
          <Link to="product/1">
            <button className="bg-purple-600 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
              view details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
