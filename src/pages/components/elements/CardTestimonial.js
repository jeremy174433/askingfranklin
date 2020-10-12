import React from 'react';
import Quote from '../../../assets/img/svg/Quote';
import SocialMedia from '../../../assets/img/svg/switch/SocialMedia';

export default class CardTestimonial extends React.Component {

    render() {
        return (
            <div class="card-testimonial">
                <img src={this.props.img} alt={this.props.fullname}/>
                <Quote width="32" fill="#EEE"/>
                <p class="fz-16 mt-4 pt-2">{this.props.testimonial}</p>
                <div class="mt-4 text-center fw-600">
                    <p><strong>{this.props.fullname}</strong></p>
                    <p><strong>{this.props.jobAndCompany}</strong></p>
                    {/* 
                        {this.props.redirectTo &&
                            <a href={this.props.redirectTo} target="_blank" rel="noopener" class="sm-link d-flex align-items-center justify-content-center rounded mt-3 mx-auto">
                                <SocialMedia icon="linkedin" width="14" fill="#2B2B2B"/>
                            </a>
                        }
                    */}
                </div>
            </div>
        )
    }
}
