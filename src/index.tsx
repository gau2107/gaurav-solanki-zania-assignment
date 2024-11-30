import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const { worker } = await import('./mocks/browser')


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
 
 

async function enableMocking() {
  return worker.start()
}
 
enableMocking().then(() => {
  root.render(<React.StrictMode>
    <App />
  </React.StrictMode>)
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
