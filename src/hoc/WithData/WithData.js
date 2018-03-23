import React, { Component } from 'react';

const WithData = (WrappedComponent) => {
    return class extends Component {

        colors = ['#c07b7b', '#59ac7c', '#0b5a8a', '#c67151', '#205153', '#76a0a5', '#e56463', '#dec0bc', '#e19c3b', '#666567', '#dbf5cf'];
        names = ['lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'nulla', 'dapibus', 'lacinia'];

        state = {
            width: 400,
            height: 400,
            data: [
                {title: 'lorem', value: '2704659', color: '#c07b7b'},
                {title: 'ipsum', value: '4499890', color: '#59ac7c'},
                {title: 'dolor', value: '2159981', color: '#0b5a8a'},
                {title: 'sit', value: '3853788', color: '#c67151'},
                {title: 'amet', value: '14106543', color: '#205153'},
            ]
        };

        getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

        getNewData = () => {
            let result = [];
            const size = this.getRandomInt(3, 12);
            for (let i = 0; i < size; i++) {
                result.push({
                    title: this.names[i],
                    value: this.getRandomInt(1000000, 9999999),
                    color: this.colors[i]
                });
            }
            return result;
        };

        componentWillUnmount() {
            clearInterval(this.timer);
        }

        componentDidMount() {
            this.timer = setInterval(() => {
                const newData = this.getNewData();
                this.setState({ data: newData });
            }, 2000);
        }

        render () {
            return (
                <div>
                    <WrappedComponent
                        width={this.state.width}
                        height={this.state.height}
                        data={this.state.data}/>
                </div>
            );
        };
    }
};

export default WithData;