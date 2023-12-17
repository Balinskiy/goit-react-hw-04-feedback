import { Button, LiButton, UlButton } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <UlButton>
      {options.map(option => {
        return (
          <LiButton key={option}>
            <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
          </LiButton>
        );
      })}
    </UlButton>
  );
}

export default FeedbackOptions;
