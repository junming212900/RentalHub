import React from "react"
import HomeHotView from "../HomeHotView"
import api from "../../../api"

export default class HomeHot extends React.Component {

    constructor() {
        super();
        this.state = {
            homehot1: [],
            homehot2: []
        }
    }

    componentDidMount() {
        api.getHomehot1().then(res => res.json()).then(data => {
            this.setState({
                homehot1: data
            })
        })

        api.getHomehot2().then(res => res.json()).then(data => {
            this.setState({
                homehot2: data
            })
        })
    }

    render() {
        const { homehot1, homehot2 } = this.state;
        return (
            <div>
                {
                    homehot1.length > 0 ?
                        <HomeHotView title={"Hot Deals"} data={homehot1} /> :
                        <div>Wait for data to load</div>
                }
                {
                    homehot2.length > 0 ?
                        <HomeHotView title={"household furniture"} data={homehot2} /> :
                        <div>Wait for data to load</div>
                }
            </div>
        )
    }
}