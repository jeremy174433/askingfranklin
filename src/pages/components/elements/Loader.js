import React from 'react';
import Loading from '../../../assets/img/svg/animate/Loading';
import NoData from '../../../assets/img/svg/illustrations/NoData';

export default class Loader extends React.Component {

    render() {
        return (
            <div id="loader" class="d-flex flex-column align-items-center mt-5">
                <p class="d-flex flex-column text-center my-5">
                    {this.props.content && <span class="fz-24">{this.props.content}</span> }
                    {this.props.contentInfo && <span class="fz-18 mt-3">{this.props.contentInfo}</span> }
                </p>

                {this.props.imgNoDataDisplayed && <NoData/> }

                {this.props.loaderDisplayed && 
                    <div class="loading-icon">
                        <Loading/>
                    </div>
                }
            </div>
        )
    }
}
