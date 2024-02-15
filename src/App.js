import Button from './Button';

function App() {
  return (
    <div>
      <h1>스타일 기본</h1>
      <Button.B1>Hello Styled!</Button.B1>
      <h1>다이나믹 스타일링</h1>
      <h2>기본</h2>
      <Button.B2 size="small">size="small"</Button.B2>
      <Button.B2 size="medium">size="medium"</Button.B2>
      <Button.B2 size="large">size="large"</Button.B2>
      <h2>둥근</h2>
      <Button.B2 size="small" round>
        size="small" round
      </Button.B2>
      <Button.B2 size="medium" round>
        size="medium" round
      </Button.B2>
      <Button.B2 size="large" round>
        size="large" round
      </Button.B2>
    </div>
  );
}

export default App;
