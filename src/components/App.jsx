import React, { useState } from 'react';
import FeedBackOptions from './FeedbackButtons/FeedBackOptions';
import Statistics from './FeedbackStatistics/Statistics';
import Section from './section/Section';
import Notification from './notification/Notication';
import '../index.css';


export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
 
  
  
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback
    return (good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedback;
    const total = countTotalFeedback();
    console.log(`total ${countTotalFeedback()}`)
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };

  const handleClick = type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }))
  };

    const total = countTotalFeedback();
    const options = ['good', 'neutral', 'bad'];
    const { good, neutral, bad } = feedback;
  const percentage = countPositiveFeedbackPercentage();
    return (
    
      <div className='feedback-container'>
        <Section title="Please leave a feedback">
          <FeedBackOptions options={options} leaveFeedback={handleClick} />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positiveFeedback={percentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  };
