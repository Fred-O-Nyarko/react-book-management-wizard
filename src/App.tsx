import styled from "styled-components";
import { Button, Stepper } from "./components";
import data from "./data/generes.json";
import { ReactComponent as Back } from "./_shared/assets/left-arrow.svg";
export const App = () => {
  const genres = JSON.parse(JSON.stringify(data));

  return (
    <StyledPage>
      <div className="header">Add book - New book</div>
      <div className="stepper">
        <Stepper description="" step={1} title="" />
        <Stepper description="" step={1} title="" />
        <Stepper description="" step={1} title="" />
      </div>

      {/* <div className="genres">
        {genres.map((genre:) => (
          <Button />
        )}
      </div> */}

      <div className="navigation">
        <Button
          className="back"
          content={
            <>
              <Back className="back-icon" /> <span>Back</span>
            </>
          }
          onClick={() => {}}
        />
        <Button content={<div>Next</div>} onClick={() => {}} />
      </div>
    </StyledPage>
  );
};

export default App;
const StyledPage = styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  border-color: #a5a5a5;
  border-width: 1px;
  border-style: solid;
  width: 70vh;
  margin: 1rem auto;
  height: 100%;
  .header {
  }

  .stepper {
    display: flex;
    margin-top: 4rem;
  }

  .navigation {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    margin-top: 3rem;
  }

  .back-icon {
    height: 0.8rem;
    margin-right: 0.3rem;
    width: 100%;
    transition: all 0.2s ease-in-out;
  }
  .back-icon:hover {
    transform: translateX(-10px);
  }

  .back {
    margin-right: 1rem;
  }
`;
