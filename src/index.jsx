import React from 'react';
import ReactDOM from 'react-dom';

const title ="Boilerplate is running";

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
