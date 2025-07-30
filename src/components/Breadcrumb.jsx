import React from 'react'
import { ChevronRight } from 'lucide-react';
const Breadcrumb = ({items = []}) => {
  return (
       <nav className="text-sm text-gray-500 mb-3" aria-label="Breadcrumb">
        <ol className="inline-flex items-center">
            {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
                <li key={index} className="inline-flex items-center">
                {!isLast ? (
                    <>
                    <a href={item.href} className="hover:underline">
                        {item.label}
                    </a>
                    <ChevronRight className="w-4 h-4 mx-2" />
                    </>
                ) : (
                    <span className="" aria-current="page">
                    {item.label}
                    </span>
                )}
                </li>
            );
            })}
        </ol>
    </nav>
  )
}

export default Breadcrumb
