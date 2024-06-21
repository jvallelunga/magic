'use client';

import * as Query from "query"; 

import { useDebounceState } from "hooks/use-debounce-state";

type CardProps = {
  card: unknown;
  className?: string;
}

// {
//   "scryfallId": "76878b19-2916-4f3f-bee5-20846bc9e2db",
//   "oracleId": "8203c621-a1a0-4865-8c9a-0d4064c86107",
//   "copies": 1,
//   "userId": "clxnl5myf0000p1u57m6mg8ui",
//   "name": "Buried Alive",
//   "imageUri": "https://cards.scryfall.io/normal/front/7/6/76878b19-2916-4f3f-bee5-20846bc9e2db.jpg?1717013617",
//   "exact": false
// }

const Need: React.FC<CardProps> = ({ card, className }) => {
  const { data } = Query.Haves.useSearch({ params: { where: JSON.stringify({
    scryfallId: card.scryfallId
  }) }});

  return (<div className={`group relative ${className}`}>
    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96">
      <img src={card?.imageUri} alt={card?.name} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
    </div>
    <div className="mt-4 flex justify-between">
      <div>
        <h3 className="text-sm text-gray-700">
          <a href="#">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {card?.name}
          </a>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{card?.copies}</p>
        {data?.length ? <p className="mt-1 text-sm text-gray-500">{data.length} Matches</p> : null}
      </div>
    </div>
  </div>
  );
}

export default Need;