import { useRouter } from "next/router"
import { useEffect, useState } from "react";
/** Add your relevant code here for the issue to reproduce */
export default function Home() {

  const router = useRouter();

  const [slug, setSlug] = useState<string[]>([]);


  useEffect(() => {
    setSlug(router.query.slug as [] || []);
  }, [router.query]);

  function onClickPushNormal() {
    router.push(
      {
        pathname: '/normal/pushing',
      },
      undefined,
      {
        shallow: false
      }
    );
  }


  function onClickPushShallow() {
    router.push(
      {
        pathname: '/shallow/pushing',
      },
      undefined,
      {
        shallow: true
      }
    );
  }

  return (
    <div>
      <button onClick={onClickPushNormal}>Normal Pushing</button>
      <button onClick={onClickPushShallow}>Shallow Pushing </button>
      <br />
      <ul>{
        slug.map((x) => <li>{x}</li>)
      }
      </ul>
    </div>
  );
}
