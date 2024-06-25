import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Session = () => {
  const { data: session, status } = useSession();

  const isLoading = status === 'loading';

  if (isLoading) {
    return (
      <div className="animate-pulse flex items-center">
        <div className="mr-3 text-right flex flex-col gap-2 items-end">
          <div className="h-2 w-12 bg-slate-700 "></div>
          <div className="h-2 w-24 bg-slate-700 "></div>
        </div>
        <div className="rounded-full bg-slate-700 h-9 w-9"></div>
      </div>);
  }

  if (session) {
    console.log("session", session);
    return (
      <a href="#" className="group block flex-shrink-0">
        <div className="flex items-center">
          <div className="flex-1"></div>
          <div className="mr-3 text-right">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{session.user.name}</p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">{session.user.email}</p>
          </div>
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full"
              src={session.user.image}
              alt={session.user.name}
            />
          </div>
        </div>
      </a>
    );
  }


  return (
    <Link href="/api/auth/signin" className="text-sm font-semibold leading-6 text-gray-900">
      Log in <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

export default Session;