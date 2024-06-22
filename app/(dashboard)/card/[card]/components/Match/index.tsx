import * as Query from "query";

import UserName from "../UserName";

const Match = ({ card }) => {
  const { data: { user } = {} } = Query.Users.useCurrent();
  const { data: needs } = Query.Needs.useSearch({ params: { where: JSON.stringify({
    scryfallId: card?.id
  }) }});

  const { data: haves } = Query.Haves.useSearch({ params: { where: JSON.stringify({
    scryfallId: card?.id
  }) }});

  if (!needs?.length && !haves?.length) {
    return null;
  }

  return  (<div className="mt-10">
    <h2 className="text-sm font-medium text-gray-900">Matches</h2>
      {needs?.length ? (<div className="prose prose-sm mt-4 text-gray-500">
            <ul role="list">
              {needs.map((item) => (
                <li key={item.scryfallId}>El usuario <b><UserName id={item.userId} /></b> esta buscando esta carta</li>
                
                
              ))}
            </ul>
          </div>) : null }
      {haves?.length ? (<div className="prose prose-sm mt-4 text-gray-500">
            <ul role="list">
              {haves.map((item) => (
                <li key={item.scryfallId}>El usuario <b><UserName id={item.userId} /></b> tiene esta carta disponible</li>
              ))}
            </ul>
          </div>) : null }
  </div>);
  
}

export default Match;
  
