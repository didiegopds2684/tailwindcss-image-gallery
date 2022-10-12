import React, { useState } from "react";

const ImageSearch = ({searchText}) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div>
      <div className="flex max-w-sm w-full bg-white shadow-md rounded-lg overflow-hidden mx-auto my-10">
        <div className="flex items-center px-2 py-3 w-full">
          <form onSubmit={onSubmit} className="w-full max-w-sm">
            <div className="flex items-center border-b border-green-500 py-2">
              <input
                className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Search for image"
                aria-label="Image Search"
                onChange={ e => setText(e.target.value)}
              />
              <button
                className="flex-shrink-0 bg-green-500 hover:bg-green-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="submit"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ImageSearch;
