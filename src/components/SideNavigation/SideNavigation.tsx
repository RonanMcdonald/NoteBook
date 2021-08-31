import React, { useState } from 'react';
import LinkData from './LinkData.json';
import './style.scss';
import { CSSTransition } from 'react-transition-group';

const DUMMY_DATA = [
  {
    name: 'information',
    type: 'directory',
    children: [
      {
        name: 'beans',
        type: 'file',
        data: 'All beans are good beans',
      },
    ],
  },
  {
    name: 'university',
    type: 'directory',
    children: [
      {
        name: 'UI/UX',
        type: 'file',
        data: 'Best UI/UX practices',
      },
      {
        name: 'DevOps',
        type: 'file',
        data: 'How to use GitHub',
      },
    ],
  },
  {
    name: 'Gift Ideas',
    type: 'file',
    data: '3 beans',
  },
  {
    name: 'Wishlist',
    type: 'file',
    data: 'nothing :(',
  },
];

export default function SideNavigation(props) {
  return (
    <div className='SideNavigation_Container'>
      <p>&nbsp;</p>
      <NavBar>
        <Category title='Quick Links' level='top'>
          <NavItem name='All Notes' indentLevel={28} />
          <NavItem name='Favourites' indentLevel={28} />
          <NavItem name='Highlights' indentLevel={28} />
          <NavItem name='Reminders' indentLevel={28} />
          <NavItem name='Tasks' indentLevel={28} />
          <NavItem name='Friends' indentLevel={28} />
          <NavItem name='Activity' indentLevel={28} />
          <NavItem name='Search History' indentLevel={28} />
        </Category>

        <Category title='Folders' level='top'>
          {DUMMY_DATA.map((element) => (
            <NewNavItem data={element} />
          ))}
        </Category>
      </NavBar>
    </div>
  );

  function handleUpdateView(e) {
    console.log('clicked: ', e.currentTarget.id);
    props.updateView(e.currentTarget.id);
  }

  function NavBar(props) {
    return <div className='navbar'>{props.children}</div>;
  }

  function Category(props) {
    const [open, setOpen] = useState(true);

    return (
      <div className={`Category ${props.level == 'top' ? 'Category_Border' : ''}`}>
        <div
          style={{ paddingLeft: props.indentLevel }}
          className={`Title ${props.level == 'top' ? 'Top_Level_Title' : ''}`}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src='/images/chevron.svg' alt='' className={!open ? 'rotate' : ''} />
          <p>{props.title}</p>
          <p className='Children_Count'>{props.totalChildren}</p>
        </div>

        {open && <ul>{props.children}</ul>}
      </div>
    );
  }

  function NewNavItem(props) {
    const directoryName = props.data.name;
    const directoryType = props.data.type;

    if (directoryType == 'directory') {
      return (
        <li>
          <Category title={directoryName} indentLevel={15} totalChildren={props.data.children.length}>
            {props.data.children.map((element) => (
              <NavItem name={element.name} data={element.data} icon='/images/placeholder-note.svg' indentLevel={37}></NavItem>
            ))}
          </Category>
        </li>
      );
    }

    return <NavItem name={props.data.name} data={props.data.data} icon='/images/placeholder-note.svg' indentLevel={15}></NavItem>;
  }

  function NavItem(props) {
    return (
      <li onClick={handleUpdateView} id={props.data} className='Nav_Item' style={{ paddingLeft: props.indentLevel }}>
        <img src={props.icon} alt='' />
        <a>{props.name}</a>
      </li>
    );
  }

  function handleAddNote(props) {}
}
