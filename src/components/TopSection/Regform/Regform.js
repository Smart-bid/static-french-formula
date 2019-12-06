import React from 'react'
import FirstRegForm from './FirstRegform'
import SecondRegform from './SecondRegform'

export default function Regform(props) {
    const path = props.location.pathname

    function updateValue(form, value, key) {
        let obj = {},
            tempForm = form
        obj[key] = value
        Object.assign(tempForm, obj)
        props.trackStartEdit()
        return tempForm
    }

    if (path === '/') return <FirstRegForm {...props} updateValue={updateValue} inputs={['first_name', 'email']}/>
    else return <SecondRegform {...props} updateValue={updateValue} inputs={['email', 'password']} rowInputs={['first_name', 'last_name']}/>
}


// import logo from '../Header/images/logo.png'

