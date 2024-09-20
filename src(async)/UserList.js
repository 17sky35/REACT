import React,{useEffect, useState} from "react";

function UserList(){
    // 유저 정보를 담기위한 state
    const[users, SetUsers] = useState([]);
    // 로딩 상태를 관리하기 위한 state
    const[loading, SetLoading] = useState(true);
    // 에러 상태를 관리하기 위한 state
    const[error,SetError] = useState(null);
    
    // fetch를 사용하기 위해 useEffect를 사용한다.
    useEffect (() => {
        // 비동기 함수 정의
        const fetchUsers = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users');                
                if(!response.ok){
                    throw new Error('데이터를 불러오는데 실패했습니다.')
                }
                
                const data = await response.json();
                SetUsers(data); // 데이터를 useState에 저장
            } catch(err){
                SetError(err.message);
            } finally{
                SetLoading(false);
            }
        }
        fetchUsers();
    },[]);
    if(loading){
        return <p>로딩중...</p>
    }

    if(error){
        return <p>에러 발생 : {error}</p>
    }

    return(
        <div>
            <h1>사용자 목록</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default UserList