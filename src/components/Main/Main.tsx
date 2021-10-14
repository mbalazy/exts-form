import { MainStyle, MainWrapper } from "./Main.style";

export const Main = () => {
  return (
    <MainWrapper>
      <MainStyle>
        <p>
          Edit <code>src/App.tsx</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </MainStyle>
    </MainWrapper>
  );
};
