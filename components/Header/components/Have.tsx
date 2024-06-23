import Link from 'next/link';

import * as Query from "query";

const Have = ({ className, user }) => {
  const { data } = Query.Haves.useMatch({ params: { where: JSON.stringify({
    userId: user?.id
  }) }}, {
    enabled: !!user
  });

  if (!user) return null

  return (<Link href="/have" className={className} >
    <span className="relative inline-block">
      Vendo
      { data?.length ? <span className="absolute top-0 -right-2 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white" /> : null }
    </span>
  </Link>);
}

export default Have;

