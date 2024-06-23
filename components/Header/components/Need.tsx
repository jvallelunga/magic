import Link from 'next/link';

import * as Query from "query";

const Need = ({ className, user }) => {
  const { data } = Query.Needs.useMatch({ params: { where: JSON.stringify({
    userId: user?.id
  }) }}, {
    enabled: !!user
  });

  if (!user) return null

  return (
    <Link href="/need" className={className}>
      <span className="relative inline-block">
        Busco
        { data?.length ? <span className="absolute top-0 -right-2 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white" /> : null }
      </span>
    </Link>);
}

export default Need;

