import React, { Component } from "react";
import styles from '../App.css'
import Advertisement from "./Advertisement";
import Subcontent from "./SubContent";

class Main extends Component {
    render() {
        return (
            <div className="Red">
                <div className="MainFlex">
                    <Subcontent></Subcontent>
                    <Subcontent></Subcontent>
                    <Subcontent></Subcontent>
                </div>
                <div>
                    <Advertisement></Advertisement>
                </div>

            </div>

        );

    }

}

export default Main;