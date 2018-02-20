import * as React from 'react';

import './App.css';
import { First } from './First';
import { Second } from './Second';
import { Third } from './Third';
import { throttle } from './Utils';

interface AppProps {

}

class App extends React.Component<AppProps> {
  private mouseMoveHandler: (event: MouseEvent) => void;

  constructor(props: AppProps) {
    super(props);

    this.mouseMoveHandler = throttle(
      (event: MouseEvent) => {
        const info = document.getElementById('info');
      
        if (info) {
          info.style.top = `${event.pageY + 15}px`;
          info.style.left = `${event.pageX + 15}px`;
          info.innerHTML = `top: ${event.pageY}<br />left: ${event.pageX}`;
        }
      },
      10);
  }

  render() {
    return (
      <div className="App">
        <First />
        <Second />
        <Third />
        <div
          id="info"
          style={{
            display: 'none',
            position: 'absolute',
            background: '#fff',
            width: '100px',
            height: '50px'
          }}
        />
      </div>
    );
  }

  public componentDidMount() {
    document.addEventListener('mousemove', this.mouseMoveHandler);
  }

  public componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMoveHandler);
  }
}

export default App;
