import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { isAuthenticated } from '@/lib/authenticate';
import { useAtom } from 'jotai';
import { getFavourites, getHistory } from '@/lib/userData';
import { favoritesAtom, searchHistoryAtom } from '@/atoms'; 


const PUBLIC_PATHS = ['/login', '/', '/_error', '/register'];

export default function RouteGuard(props) {
  const [favourites, setFavourites] = useAtom(favoritesAtom);
  const [history, setHistory] = useAtom(searchHistoryAtom);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  async function updateAtoms() {
    setFavourites(await getFavourites());
    setHistory(await getHistory());
  }

  useEffect(() => {
    updateAtoms();
    authCheck(router.pathname);
    router.events.on('routeChangeComplete', authCheck);
    return () => {
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  function authCheck(url) {
    const path = url.split('?')[0];
    if (!isAuthenticated() && !PUBLIC_PATHS.includes(path)) {
      setAuthorized(false);
      router.push('/login');
    } else {
      setAuthorized(true);
    }
  }

  return <>{authorized === true && props.children}</>;
}
