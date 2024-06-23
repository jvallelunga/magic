'use client';

import * as Query from "query"; 


type CardProps = {
  card: unknown;
  className?: string;
}

const Have: React.FC<CardProps> = ({ card, className }) => {
  const { data } = Query.Needs.useSearch({ params: { where: JSON.stringify({
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

export default Have;