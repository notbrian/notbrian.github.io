import React, { Component } from 'react';
import butter from '../butter-client'


class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }

        this.componentDidMount = this.componentDidMount.bind(this)
    }

    async componentDidMount ()  {
        const response = await butter.post.list({page: 1, page_size: 10})
        this.setState({posts: response.data})
    
    }

    render() { 
        return (<p>Grid CMS here</p>);
    }
}
 
export default Portfolio;