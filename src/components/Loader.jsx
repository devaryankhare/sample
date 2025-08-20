import React from 'react';

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black/50">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-dashed border-blue-500"></div>
    </div>
  );
};

export default Loader;