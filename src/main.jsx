import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


//const promise = axios.get('http://localhost:3001/notes')
//console.log(promise)

//const promise2 = axios.get('http://localhost:3001/foobar')
//console.log(promise2)

// const root = ReactDOM.createRoot(document.getElementById('root'))

// const refresh = () => {
//  root.render(
//    <App counter={counter} />
//  )
//}

//setInterval(() => {
//  refresh()
//  counter += 1
//}, 1000)