'use client'

import Link from 'next/link';

import * as Query from "query";
import Have from "components/Have";

export default function Page() {
  const { data: { user } = {} } = Query.Users.useCurrent();
  const { data } = Query.Haves.useSearch({ params: { where: JSON.stringify({
    userId: user?.id
  }) }}, {
    enabled: !!user
  });

  return (<div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Cartas que quiero vender</h2>
    <div className="bg-white">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {(data?.length === 0) && <div>
          No cards found
        </div>}
        {data?.map((card) => (<Link key={card.scryfallId} href={`/card/${card.scryfallId}`}><Have card={card} /></Link>))}
      </div>
    </div>
  </div>);
}
