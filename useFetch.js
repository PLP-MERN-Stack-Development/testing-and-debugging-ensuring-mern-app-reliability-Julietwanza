import { useState, useEffect } from 'react';

export default function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let mounted = true;
    fetch(url)
      .then(res => res.json())
      .then(d => { if (mounted) setData(d); })
      .catch(() => {});
    return () => { mounted = false; };
  }, [url]);
  return data;
}
