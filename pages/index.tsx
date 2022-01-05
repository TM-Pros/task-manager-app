import Head from 'next/head';
import TopMenu from '../components/TopMenu';
import LeftMenu from '../components/LeftMenu';
import { useLayoutContext } from '../contexts/LayoutContext';

export default function Home() {
  const { isDrawerOpen } = useLayoutContext();
  return (
    <>
      <Head>
        {/* TODO: Open-close drawer */}
        <body className={isDrawerOpen ? 'drawer-open' : ''}/>
      </Head>
      <LeftMenu/>
      <TopMenu/>
      <p>Hello, world! 1</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
      <p>Hello, world!</p>
    </>

  );
}
