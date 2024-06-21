'use client';

import * as Query from "query"; 

import { useDebounceState } from "hooks/use-debounce-state";

type CardProps = {
  card: unknown;
  className?: string;
}

const Card: React.FC<CardProps> = ({ card, className }) => {

  return (<div className={`group relative ${className}`}>
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96">
      <img src={card?.image_uris?.normal || card?.card_faces[0].image_uris?.normal} alt={card?.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {card?.name}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{card?.type_line}</p>
      </div>
      <p className="text-sm font-medium text-gray-900">$35</p>
    </div>
  </div>
  );
}

export default Card;