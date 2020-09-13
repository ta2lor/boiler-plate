import React, { useEffect} from 'react';
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {auth} from '../_action/user_action'

export default function(SpecifiicComponent, option, adminRoute = null){


    const dispatch = useDispatch()

    function AuthenticationCheck(props){
        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response)

                if(!response.payload.isAuth){
                    if(option){
                        props.history.push('/login')
                    }
                }else{
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/')
                    }else{
                        if(option === false){
                            props.history.push('/')
                        }
                    }
                }
            })

            
        }, [])

        return(
            <SpecifiicComponent />
        )
    }


    return AuthenticationCheck
}