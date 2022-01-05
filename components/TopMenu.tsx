import Link from 'next/link';

const TopMenuRightLink = (props: { label: string, href?: string }) => (
  <span
    className="text-black mx-2
      hover:text-red-900 hover:underline"
  ><Link href={props.href || ''}>{props.label}</Link></span>
);

export default function TopMenu() {
  return <header
    className="topmenu bg-red-500 fixed top-0 right-0 z-50
      left-36
      h-14 px-5 py-2
      flex justify-between items-center
      border-b-4 border-red-900"
  >
    <div/>
    <div>
      <TopMenuRightLink
        label="Account"
      />
      <TopMenuRightLink
        label="Esci"
      />
    </div>
  </header>;
}
