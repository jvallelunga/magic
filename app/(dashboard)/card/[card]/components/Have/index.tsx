'use client';

import { useParams } from 'next/navigation'
import * as Query from "query"; 

import ManaCost from "components/ManaCost";

const Need = ({ card, user }) => {
  const { mutateAsync: create } = Query.Haves.useCreate();

  const handleCreate = async () => {
    const need = await create({ body: {
      scryfallId: card.id,
      oracleId: card.oracle_id,
      copies: 1,
      userId: user.id,
      name: card.name,
      imageUri: card?.image_uris?.normal || card?.card_faces[0].image_uris?.normal,
    }});
  }
  return (<button
    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    onClick={handleCreate}
  >
    Vendo
  </button>);
}

export default Need;