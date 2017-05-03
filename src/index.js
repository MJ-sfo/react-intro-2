import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Mike from './Mike';

ReactDOM.render(
  <App name={"Jane Manfield"} age={78}
    person = {
      {
        title: "king",
        nm: "Alfred the Great",
        nation: "Engliand"
    }
    }
    />,
  document.getElementById('root')
)
