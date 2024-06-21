'use client';

import * as Query from "query"; 
import Link from 'next/link'

import { useDebounceState } from "hooks/use-debounce-state";

import Card from "components/Card";
import Search from "components/Search";

export default function Page() {
  const [debounceSearch, search, setSearch] = useDebounceState("", 200);
  
  const { data, status, error } = Query.Cards.useSearch({ params: { q: debounceSearch } });

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  return (<div className="h-full w-full flex flex-col">
    <div className="flex h-80 w-full items-center justify-center bg-indigo-600">
      <Search className="w-1/2 h-12" onChange={handleChange} />
    </div>

    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
      {(data?.total_cards === 0) && <div>
        No cards found
      </div>}
      {!!data?.total_cards && (<div className="bg-white">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.data.map((card) => (<Link key={card.id} href={`/card/${card.id}`}><Card  card={card} /></Link>))}
        </div>
      </div>)}
    </div>
  </div>);
}