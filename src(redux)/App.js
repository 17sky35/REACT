import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
//Redux와 React를 연결하는데 필요한 Provider, useDispatch, useSelector 를 import 
import {Provider, useDispatch, useSelector} from 'react-redux'
//Redux 스토어를 import
import store from './cart/store'
//액션 생성 함수를 import
//아래 함수들은 상태를 변경하는 액션을 dispatch하기 위해 사용된다.
// import { increment,decrement } from './redux/actions';
import { addTodo, removeTodo } from './todo/actions';
import { login, logout } from './login/actions';
import { addToCart,removeFromCart } from './cart/actions';

//--------------------------redux--------------------------------------------
// function Counter(){
//   //useSelector : Redux에서 store에 저장되어 있는 state을 읽어오는 hook
//   const count = useSelector(state => state.count);
  
//   //useDispatch : store에 action을 보낼 수 있는 hook 
//   const dispatch = useDispatch();
//   return (
//     <div>
//       {/* 현개 state인 count값을 화면에 출력한다. */}
//       <h1>Counter : {count}</h1>
//       {/* Increment 버튼을 클릭하면 increment() 액션을 디스패치한다 */}
//       <button onClick={()=> dispatch(increment())}>Increment</button>
//       {/* Decrement 버튼을 클릭하면 decrement() 액션을 디스패치한다 */}
//       <button onClick={()=> dispatch(decrement())}>Decrement</button>
//     </div>
//   );
// }
// function App() {
//   return(
//     // Provider : store를 애플리케이션 전체에 제공
//    // Provider 안에 있는 모든 컴포넌트는 store에 접근할 수 있다.
//     <Provider store={store}>
//       <Counter />
//     </Provider>
//   )
// }
//---------------------------------todo-------------------------------------------------------------
// function App() {
//   const [input, setInput] = useState(''); // 입력값을 관리하는 로컬 상태
//   const todos = useSelector((state) => state.todos); // Redux에서 todos 상태를 가져옴
//   const dispatch = useDispatch(); // 액션을 디스패치하는 함수 가져오기

//   const handleAddTodo = () => {
//     if (input.trim()) {
//       dispatch(addTodo(Date.now(), input)); // 새로운 Todo를 추가 (id는 현재 시간으로 고유값 생성)
//       setInput(''); // 입력창 비우기
//     }
//   };

//   const handleRemoveTodo = (id) => {
//     dispatch(removeTodo(id)); // Todo를 삭제
//   };

//   return (
//     <div>
//       <h1>Todo List</h1>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Add a new todo"
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text} 
//             <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
//---------------------------------login----------------------------------------------------
// function App() {
//   //input태그에 입력되는 값을 저장하는 state
//   const [usernameInput, setUsernameInput] = useState('');

//   //Redux 상태에서 로그인 정보 가져오기
//   const {isLoggedIn, username} = useSelector((state)=>state);
//   const dispatch = useDispatch();

//   //로그인 검증
//   const handleLogin = () => {
//     //input태그에 뭐라도 적혀있을 때
//     if(usernameInput.trim()){
//       //유저네임을 전달받은 login()액션을 반환한 객체를 리듀서에 전달
//       dispatch(login(usernameInput));
//       setUsernameInput('');
//     }
//   }

//   const handleLogout = () => {
//     dispatch(logout());
//   }

//   return(
//     <div>
//       <h1>Login Status</h1>
//       {isLoggedIn ? (
//         <div>
//           <p>Welcome, {username}!</p>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <input
//             type='text'
//             value={usernameInput}
//             onChange={(e) => setUsernameInput(e.target.value)}
//             placeholder='Enter your username'
//           />
//           <button onClick={handleLogin}>Login</button>
//         </div>
//       )}
//     </div>
//   )
// }
//---------------------------------cart----------------------------------------------------
function App() {
  const products = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ]; 
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const handleAddToCart = (id,name) => {
    dispatch(addToCart(id,name));
  }

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  return(
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name}
            <button onClick={()=>handleAddToCart(product.id, product.name)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name}(x{item.quantity})
              <button onClick={()=>handleRemoveFromCart(item.id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default App;