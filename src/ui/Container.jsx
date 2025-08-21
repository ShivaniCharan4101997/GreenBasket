import React from "react";

const Container = ({ children }) => {
  return (
    <div className="lg:max-w-[1400px] max-w-[80%]  mx-auto px-4 lg:px-16 mb-12">
      {children}
    </div>
  );
};

export default Container;
