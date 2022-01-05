import Link from 'next/link';
import classNames from 'classnames';
import { useLayoutContext } from '../contexts/LayoutContext';
import NavigateNext from '@material-ui/icons/NavigateNext';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

const Logo = () => (
  <span className="block text-4xl font-serif font-extrabold">
    <Link href="">
      TM Pro
    </Link>
  </span>
);

const MenuItem = (props: { label: string, href?: string, active?: boolean }) => (
  <span className={classNames('block my-2 text-lg',
    props.active && 'underline border-l-4 border-red-900 pl-2')}>
    <Link href={props.href || ''}>
      {props.label}
    </Link>
  </span>
);

const ToggleDrawer = (props: { isOpened: boolean, onClick: () => void }) => (
  <button onClick={props.onClick} className="float-right">
    {props.isOpened ? <NavigateNext/> : <NavigateBefore/>}
  </button>
);

export default function LeftMenu() {
  const { isDrawerOpen, toggleDrawer } = useLayoutContext();

  return (
    <>
      <div
        className="leftmenu fixed top-0 left-0 h-screen z-60
          px-7 py-5 w-36
          bg-red-500 border-r-4 border-red-900"
      >
        <ToggleDrawer
          isOpened={isDrawerOpen}
          onClick={toggleDrawer}
        />
        <Logo/>
        <MenuItem
          label="Progetti"
        />
        <MenuItem
          label="Teams"
        />
        <MenuItem
          label="Item 3"
        />
        <MenuItem
          label="Item 4"
          active
        />
        <MenuItem
          label="Item 5"
        />
        <MenuItem
          label="Item 6"
        />
      </div>
    </>
  );
}
