import React from 'react';
import { RiEmotionHappyFill } from 'react-icons/ri';
import { MdOutlineSentimentNeutral } from 'react-icons/md';
import { FaSadTear } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div className="statistics">
      <p className="feedback-count">
        <RiEmotionHappyFill className="icons" />
        Good: {good}
      </p>
      <p className="feedback-count">
        <MdOutlineSentimentNeutral className="icons" />
        Neutral: {neutral}
      </p>
      <p className="feedback-count">
        <FaSadTear className="icons" />
        Bad: {bad}
      </p>
      <p className="feedback-count total">Total: {total}</p>
      <p className="feedback-count percentage">
        Positive Feedback: {positiveFeedback}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}
export default Statistics;
