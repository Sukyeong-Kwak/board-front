import React from 'react';
import './App.css';
import top3Item from 'components/Top3Item';
import latestBoardListMock from 'mocks/latest-board-list.mock';
import Top3Item from 'components/Top3Item';
import top3BoardListMock from 'mocks/top-3-board-list.mock';

function App() {
  return (
    <>
      {/* {latestBoardListMock.map(boardListItem => <BoardListItem boardListItem={boardListItem} />)} */}
      <div style={{display: 'flex', justifyContent: 'center', gap:'24px'}}>
        { top3BoardListMock.map(top3ListItem => <Top3Item top3ListItem={top3ListItem} />)}
      </div>
    </>
  );
}

export default App;