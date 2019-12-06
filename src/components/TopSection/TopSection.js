import React, {Component} from 'react'

import Header from './Header/Header'
import Regform from './Regform/Regform'

//Images
import firstIcon from './images/spon1.png'
import secondIcon from './images/spon2.png'
import thirdIcon from './images/spon3.png'


export default class TopSection extends Component {
    constructor(props) {
        super(props);
        this.inputs = [];
        if(this.props.location.pathname = '/') {
            this.inputs = ['first_name', 'email'];
        }
    }
    render() {
        let languageManager = this.props.languageManager();

        return (
            <div className='TopSection'>
                <section className="mainsec">
                    <div className="container ">
                        <div className="row ">
                            <div className="col-lg-8">
                                <div className="videoWrapper" id="how_it_works">
                                    <div className="embed-responsive embed-responsive-16by9">
                                        <iframe onClick={this.props.trackVideoPlay()}
                                            src="https://player.vimeo.com/video/360067406?title=0&amp;byline=0&amp;portrait=0&amp;transparent=0&amp;autoplay=1&amp;sidedock=0&amp;controls=0"
                                            width="100%" height="100%" frameBorder="0"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="startFrom center">
                                    <h4>
                                        {languageManager.formTitle}
                                    </h4>
                                    <h6>
                                        {languageManager.formSubtitle}
                                    </h6>

                                    <Regform {...this.props}/>

                                    <div className="startImages">
                                        <img src={firstIcon} alt=""/>
                                        <img src={secondIcon} alt=""/>
                                        <img src={thirdIcon} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
