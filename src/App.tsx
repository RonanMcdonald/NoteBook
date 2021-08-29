import SideNavigation from './components/SideNavigation/SideNavigation';
import React from 'react';
import './styles/app.scss';

function App() {
  const DUMMY_DATA = {
    Notebook_Data: [
      {
        type: 'folder',
        folder_name: 'Bean Info',
        folder_data: {
          type: 'note',
          note_name: 'Best types of bean',
          note_data: 'All beans',
        },
      },
    ],
  };

  return (
    <div className='App'>
      <div className='Column-1'>
        <SideNavigation></SideNavigation>
      </div>
    </div>
  );
}

export default App;
