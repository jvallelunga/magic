import Link from 'next/link';

import * as Query from "query";

const Need = () => {
  const { data: { user } = {} } = Query.Users.useCurrent();
  const { data } = Query.Needs.useMatch({ params: { where: JSON.stringify({
    userId: user?.id
  }) }}, {
    enabled: !!user
  });


  return (<span className="relative inline-block">
    <Link href="/need" className="text-sm font-semibold leading-6 text-gray-900">
      Busco
    </Link>
    { data?.length ? <span className="absolute top-0 -right-2 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white" /> : null }
  </span>);
}

export default Need;

