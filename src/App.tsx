import SideNavigation from './components/SideNavigation/SideNavigation';
import React, { useState } from 'react';
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

  const [currentView, setCurrentView] = useState('bean');

  return (
    <div className='App'>
      <div className='Column-1'>
        <SideNavigation updateView={setCurrentView}></SideNavigation>
      </div>
      <div className='Column-2'>col2</div>
      <div className='Column-3'>{currentView}</div>
    </div>
  );
}

export default App;
