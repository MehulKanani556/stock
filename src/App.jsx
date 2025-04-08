import React, { useState } from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="flex">
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} open={open} onClose={closeDrawer} />
      <div className="flex-1">
        <Header openDrawer={openDrawer} />
        {/* Your main content here */}
      </div>
    </div>
  );
}

export default App; 