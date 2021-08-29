import React, { useState } from 'react';
import LinkData from './LinkData.json';
import './style.scss';
import { CSSTransition } from 'react-transition-group';

const DUMMY_DATA = [
  {
    type: 'folder',
    unique_tag: 'A',
    level: 'level-1',
    sub_items: {
      name: 'test',
    },
  },
];

export default function SideNavigation() {
  return (
    <div className='SideNavigation_Container'>
      <p>&nbsp;</p>
      <NavBar>
        <Category title='Quick Links'>
          <NavItem name='All Notes' />
          <NavItem name='Favourites' />
          <NavItem name='Highlights' />
          <NavItem name='Reminders' />
          <NavItem name='Tasks' />
          <NavItem name='Friends' />
          <NavItem name='Activity' />
          <NavItem name='Search History' />
        </Category>

        <Category title='Folders'>
          {DUMMY_DATA.map((element) => (
            <NewNavItem data={element} />
          ))}
        </Category>
      </NavBar>
    </div>
  );
}

function NavBar(props) {
  return <div className='navbar'>{props.children}</div>;
}

function Category(props) {
  const [open, setOpen] = useState(true);

  return (
    <div className='Category'>
      <div className='Title' onClick={() => setOpen(!open)}>
        <p>{props.title}</p>
      </div>

      {open && <ul>{props.children}</ul>}
    </div>
  );
}

function NavItem(props) {
  return (
    <li>
      <a>{props.name}</a>
    </li>
  );
}

function NewNavItem(props) {
  console.log(props);
  return (
    <li>
      <a>bean</a>
    </li>
  );
}

// function Link(props) {
//   return (
//     <li className='tooltip'>
//       <a href={props.href}>
//         <img src={props.iconLocation} alt='' />
//         <div>{props.linkName}</div>
//         {/* className='tooltiptext' */}
//       </a>
//     </li>
//   );
// }
