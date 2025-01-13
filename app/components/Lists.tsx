import React from "react";
import Link from "next/link";

interface ListsProps {
  header: string;
  items: string[];
  containerStyle?: string;
}
const Lists = ({ header, items, containerStyle = "py-4" }: ListsProps) => {
  const getLink = (item: string) => {
    const itemLower = item.toLowerCase().replace(/ /g, '-');
    return `/${itemLower}`;
  };

  return (
    <div className={containerStyle}>
      <h1 className="font-bold my-2">{header}</h1>
      <ul className="text-[hsl(0,0%,75%)]">
        {items.map((item, index) => (
          <li key={index} className="py-1">
            <Link href={getLink(item)} className="hover:text-white transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
