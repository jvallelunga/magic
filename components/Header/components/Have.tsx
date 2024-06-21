import Link from 'next/link';

import * as Query from "query";

const Have = () => {
  const { data: { user } = {} } = Query.Users.useCurrent();
  const { data } = Query.Haves.useMatch({ params: { where: JSON.stringify({
    userId: user?.id
  }) }}, {
    enabled: !!user
  });

  console.log("[DEBUG] Have.Match", data);

  return (<span className="relative inline-block">
    <Link href="/have" className="text-sm font-semibold leading-6 text-gray-900">
      Vendo
    </Link>
    { data?.length ? <span className="absolute top-0 -right-2 block h-2 w-2 rounded-full bg-green-400 ring-2 ring-white" /> : null }
  </span>);
}

export default Have;

