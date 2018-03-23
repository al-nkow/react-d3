import React, { Component } from 'react';
// import Aux from '../../hoc/Aux/Aux';

const DataGen = (WrappedComponent) => {
    return class extends Component {

        state = {
            width: 400,
            height: 400
        };

        componentWillUnmount() {
            clearInterval(this.timer);
        }

        componentDidMount() {
            // this.timer = setInterval(() => {
            //     this.setState({
            //         width: this.state.width ? this.state.width - 10 : 400,
            //         height: this.state.height ? this.state.height - 10 : 400
            //     });
            // }, 2000);
        }

        render () {
            return (
                <div>
                    <WrappedComponent width={this.state.width} height={this.state.height}/>
                </div>
            );
        };
    }
};

export default DataGen;