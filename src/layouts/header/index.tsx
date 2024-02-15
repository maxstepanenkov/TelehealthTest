import React from "react";
import AdContainer from "../ad/ad-container";

const Header = () => {
  return (
    <div>
      <header>
        <div className="flex w-full h-6 bg-black text-white text-[9px] p-2 items-center justify-end">
          <div>Call us (855) 962-5303</div>
        </div>
        <AdContainer/>
      </header>
    </div>
  );
}

export default Header;