import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './Feedback/Feedback';
import { Statistic } from './Statistics/Statistic';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = feedback => {
    if (feedback === 'reset') {
      this.setState({ good: 0, neutral: 0, bad: 0 });
    } else {
      this.setState(prevState => ({
        ...prevState,
        [feedback]: prevState[feedback] + 1,
      }));
    }
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    return total ? Math.round((good / total) * 100) : 0;
  };


  FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const hasFeedback = options.some(option => onLeaveFeedback(option) > 0);
  
    return (
      <div>
        {options.map(option => (
          <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </button>
        ))}
        {hasFeedback && (
          <button type="button" onClick={() => onLeaveFeedback('reset')}>
            Reset
          </button>
        )}
      </div>
    );
  };


  Notification = ({ message }) => <p>{message}</p>;

  render() {
    const isStatisticsVisible = this.countTotalFeedback() > 0;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Sip Happens Café">
          <p>Please leave your feedback about our service by selecting one of the options below.</p>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>

        {isStatisticsVisible ? (
          <Section title="Statistics">
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivPrs={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}