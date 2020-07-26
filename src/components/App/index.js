import React, {useState, useRef, useEffect} from 'react';
import logo from '../../assets/images/svg/logo.svg';
// import NeApp from '../NeApp'
import './index.css';

const App = () => {
  const [count, setCount] = useState(0);
  const buttonRef = useRef(null);
  // const latestCount = useRef(count);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  // 1
  // useEffect(() => {
  //   console.log('App',buttonRef);
  //   const clickAlert = () =>  console.log(`I am click ${count}`);
  //   // window.addEventListener('click', clickAlert)
  //   // return () => window.removeEventListener('click', clickAlert)
  //   const button = buttonRef.current;
  //   button.addEventListener('click', clickAlert)
  //   return () => button.removeEventListener('click', clickAlert)
  // },[count]);

  // 2

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log(`You clicked ${count} times`);
  //   }, 3000);
  // });
  // !!!!!!!!!!!
  // useEffect(() => {
  //   // Установить мутабельное значение в самое свежее состояние count
  //   latestCount.current = count;
  //   setTimeout(() => {
  //     // Прочитать мутабельное значение с самыми свежими данными
  //     console.log(`You clicked ${latestCount.current} times`);
  //   }, 3000);
  // });

  // componentDidUpdate() {
  //   setTimeout(() => {
  //     console.log(`You clicked ${this.state.count} times`);
  //   }, 3000);
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Counter value: {count}</p>
        <div
          ref={buttonRef}
          className="App-link"
          onClick={() => setCount(count + 1)}
        >
          Click to +1 count
        </div>
        {/* <NeApp count={count} ref={buttonRef}/> */}
      </header>
    </div>
  );
}

export default App;


// function Counter() {
//   // ...

//   useEffect(
//     // Функция эффекта из первого рендера
//     () => {
//       document.title = `You clicked ${0} times`;
//     }
//   );
//   // ...

// }

// // После щелчка наша функция вызывается снова
// function Counter() {
//   // ...

//   useEffect(
//     // Функция эффекта из второго рендера
//     () => {
//       document.title = `You clicked ${1} times`;
//     }
//   );
//   // ...

// }

// // После ещё одного щелчка функция вызывается снова
// function Counter() {
//   // ...

//   useEffect(
//     // Функция эффекта из третьего рендера
//     () => {
//       document.title = `You clicked ${2} times`;
//     }
//   );
//   // ..

// }