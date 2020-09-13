import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { loginuser} from '../../../_action/user_action'
import { withRouter} from 'react-router-dom'

function LoginPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const onEmailHandler = (event) =>{
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) =>{
        setPassword(event.currentTarget.value)
    }
    const onsubmithandler =(event) => {
        event.preventDefault();   //페이지가 리프레쉬 되는것을 막아준다.

        let body={
            email : Email,
            password : Password
        }

        dispatch(loginuser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    props.history.push('/')
                }else{
                    alert(' Login Error')
                }
            })


    }
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%', height:'100vh'}}>
            <form style={{display:"flex", flexDirection:'column'}} onSubmit={onsubmithandler}>
                <label>EMAIL</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />

                <button>
                    Log-In
                </button>
            </form>
        </div>

    )
}

export default withRouter(LoginPage)
