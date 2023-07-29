import React from 'react';
import Thiru from './thiruvalluvar-4.svg';
import './Main.css';

const Head = () => (
  <>
    <div className=" fixed  z-20 mt-10 flex w-full flex-col items-center justify-center bg-pink-500 py-5 sm:flex-row">
      <img src={Thiru} alt="img" className="img opacity-50" />
      <div>
        <h1 className="p-5 text-5xl font-semibold text-white ">
          Thiruvalluvar
        </h1>
      </div>
    </div>
  </>
);

export default Head;
