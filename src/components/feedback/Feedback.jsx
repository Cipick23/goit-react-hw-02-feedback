import PropTypes from 'prop-types';
import React, { Component } from "react";
import styles from './Feedback.module.css'

class Feedback extends Component {
    
    state = {
        list: [
            {
                id: 1,
                good: 0,
                neutral: 0,
                bad: 0
            }
        ]
    }

    
  feedbackButtons() {
  }

  render() {
    return (
    <section>
        <div>
            <h2>
                <span className={styles.black}>Please leave feedback</span>
            </h2>
        </div>
        
    </section>
        )
}
}

Feedback.propTypes = {
    friends: PropTypes.array
}

export default Feedback