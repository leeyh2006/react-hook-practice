import React , {useState,useEffect, useReducer} from 'react';


function reducer(state,action){
    return{
        ...state,
        [action.name] :action.value
    }
}
const Info = () =>{
    const [state, dispatch] = useReducer(reducer,{
        name :'',
        nickname:''
    });

    const {name, nickname} = state;
    const onChange = e =>{
        dispatch(e.target);
    };


    // useEffect(()=>{
    //     console.log('effect')
    //     console.log(name);
    //     return ()=>{
    //         console.log('clean up')
    //         console.log(name);
    //
    //     }
    // },[name]) // 리렌더링 에서 검사 하고 싶은 값을 배열안에 넣어주면 됨 .

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickname" value={nickname} onChange={onChange}/>
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
