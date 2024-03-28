import PropTypes from 'prop-types';

const FeedBackOptions = ({ options, leaveFeedback }) => {
  return (
    <div className="button-wrapper">
      {options.map(option => (
        <button
          className="buttons"
          key={option}
          onClick={() => leaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedBackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
    leaveFeedback: PropTypes.func.isRequired,
}
export default FeedBackOptions;
