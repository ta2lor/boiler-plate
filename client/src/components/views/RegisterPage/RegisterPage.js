import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { registerUser} from '../../../_action/user_action'
import { withRouter} from 'react-router-dom'


function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [Confirm_pw, setConfirm_pw] = useState("")
    
    const onEmailHandler = (event) =>{
        setEmail(event.currentTarget.value)
    }
    const onNameHandler = (event) =>{
        setName(event.currentTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }
    const onConfrimPasswordHandler = (event) =>{
        setConfirm_pw(event.currentTarget.value)
    }

    const onsubmithandler =(event) => {
        event.preventDefault();   //페이지가 리프레쉬 되는것을 막아준다.

        if(Password !== Confirm_pw){
            return alert('비밀번호와 비밀번호 확인이 다릅니다.')
        }

        let body={
            email : Email,
            name : Name,
            password : Password
        }

        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.Registersuccess) {
                    props.history.push('/login')
                }else{
                    alert('Register Error')
                }
            })



    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%', height:'100vh'}}>
            <form style={{display:"flex", flexDirection:'column'}} onSubmit={onsubmithandler}>
                <label>EMAIL</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>Comfirm_pwd</label>
                <input type="password" value={Confirm_pw} onChange={onConfrimPasswordHandler} />
                
                <br />
                <button>
                    SIGH-IN
                </button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage)
