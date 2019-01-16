import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getData } from '../../actions/data' 

class Home extends Component {
    componentDidMount() {
        this.props.getData()
    }

    render() {
        const { data, loading, err } = this.props
        return (
            <div>
                <h1>Home</h1>
                {
                    loading ?
                    <p>Loading...</p> :
                    data.length > 0 ?
                    data.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    )) :
                    <p>No items to show</p>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { data, loading, err } = state.data
    return {
        data,
        loading,
        err
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getData: bindActionCreators(getData, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)