import React, { Component } from 'react'
import logo from '../Header/images/logo.png'
import {Redirect} from 'react-router-dom'

class FirstRegform extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                first_name: '',
                email: ''
            },
            check: true,
            redirect: false,
        }

        this.saveData = this.saveData.bind(this)
    }

    saveData() {
        let form = this.state.form
        let checkParams = this.props.validateParams(form)
        if (checkParams.success && this.state.check === true) this.setState({errors: {}}, () => {
            this.props.setLeadData(form).then(this.props.handleLeadStep).then(this.setState({redirect: true}))
        })
        else this.setState({errors: checkParams.errors})
    }

    render() {
        let languageManager = this.props.languageManager(),
            errorMsgs = (this.state.errors) ? Object.keys(this.state.errors).map(key => { if (this.state.errors[key].messages) return this.state.errors[key].messages }).filter(value => value) : []

        if (!this.state.redirect) {
            return (

                <div className="FirstRegform Regform startFrom">
                    <div className="inner">
                        <div className='form-wrapper one'>
                            {errorMsgs.map(arr => arr.map(error => <div key={error} className="errors">{error}</div>))}
                            {this.props.inputs.map(input => <input className={"inputfield " + input} key={input} type="text" name={input} onChange={(e) => this.setState({form: this.props.updateValue(this.state.form, e.target.value, input)})} placeholder={languageManager[input]} />)}
                            <div className="btnBBox form-group">
                                <button onClick={this.saveData} className='btncustms btncustms1'>{languageManager.buttonSubmit}</button>
                                <span className="limittime">{languageManager.underSubmitBtn}</span>
                            </div>
                            <div className="form-group" style={{color: '#666666'}}>
                                <input type="checkbox" required="" checked={this.state.check} name="agree1"
                                       onChange={() => this.setState({check: !this.state.check})}/>
                                {languageManager.agreeTerms}
                            </div>
                        </div>
                    </div>
                </div>
            )

        } else {
            return <Redirect to={{ pathname: '/secondpage',
                search: this.props.location.search,
                state: this.state.form}}/> }

    }
}
export default FirstRegform;
