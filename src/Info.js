import React , {useState,useEffect} from 'react';

const Info = () =>{
    const [name , setName ]= useState('');
    const [nickname, setNickName] = useState('');

    useEffect(()=>{
        console.log('effect')
        console.log(name);
        return ()=>{
            console.log('clean up')
            console.log(name);

        }
    },[name]) // 리렌더링 에서 검사 하고 싶은 값을 배열안에 넣어주면 됨 .
    const onChangeName =(e) =>{
        setName(e.target.value);
    }

    const onChangeNickName = e =>{
        setNickName(e.target.value);

    }
    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickName}/>
            </div>

            <div>
                <p> 이름 </p>
                {name}
            </div>
            <div>
                <p> 닉네임 </p>
                {nickname}
            </div>
        </div>
    )
}

export default Info;
