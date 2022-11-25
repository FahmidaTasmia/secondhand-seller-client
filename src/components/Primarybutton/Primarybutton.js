import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";

const PrimaryButton = ({children}) => {
    return (
        <button 
        className="btn btn-outline gap-2 w-full  hover:bg-primary hover:border-none hover:font-bold  ">{children}<HiArrowNarrowRight></HiArrowNarrowRight></button>
    );
};

export default PrimaryButton;