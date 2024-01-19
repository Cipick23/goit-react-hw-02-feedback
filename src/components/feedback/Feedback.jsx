import PropTypes from 'prop-types';
import React, { Component } from "react";
import styles from './Feedback.module.css'
import { Button, Stack } from 'react-bootstrap';

class Feedback extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleGoodFeedback = () => {
        this.setState(prevState => ({ good: prevState.good + 1 }));
    }

    handleNeutralFeedback = () => {
        this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
    }

    handleBadFeedback = () => {
        this.setState(prevState => ({ bad: prevState.bad + 1 }));
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        return total ? (this.state.good / total) * 100 : 0;
    }

    render() {
        return (
            <section className={styles.statistics}>
                <h2>
                    <span className={styles.black}>Please leave feedback</span>
                </h2>
                <div>
                    <Button variant="outline-success" onClick={this.handleGoodFeedback}>Good</Button>{' '}
                    <Button variant="outline-success" onClick={this.handleNeutralFeedback}>Neutral</Button>{' '}
                    <Button variant="outline-success" onClick={this.handleBadFeedback}>Bad</Button>{' '}
                </div>
                <h2>
                <span className={styles.black}>Statistics</span>
                </h2>
                <Stack gap={3} className={styles.statistics}>
                    <div className="p-2">Good: {this.state.good}</div>
                    <div className="p-2">Neutral: {this.state.neutral}</div>
                    <div className="p-2">Bad: {this.state.bad}</div>
                    <div className="p-2">Total: {this.state.good + this.state.neutral + this.state.bad}</div>
                    <div className="p-2">PositiveFeedback: {(this.state.good + this.state.neutral + this.state.bad) ? (this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100 : 0}%</div>
                </Stack>
            </section>
        )
    }
}


Feedback.propTypes = {
    friends: PropTypes.array
}

export default Feedback