import axios from 'axios'
import React from 'react'
import { withRouter} from 'react-router-dom'

function LandingPage(props) {

    const onClickHandler =() => {
        axios.get('/api/users/logout')
            .then(response => {
                if(response.data.success){
                    props.history.push('/login')
                }else{
                    alert('failed to logout')
                }
            })


    }

    const onLoginHangler =()=>{
        props.history.push('/login');
    }


    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: '100%', height:'100vh'}}>
            <h2>시작 페이지</h2>
            
            <button onClick={onLoginHangler}>
                로그인
            </button>
            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default withRouter(LandingPage)
