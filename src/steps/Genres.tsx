import React from "react";
import styled from "styled-components";
import { Button } from "../components";
import { IGenre } from "../_shared/types";

interface IGenreList {
  genres: IGenre[];
}
const Genres = ({ genres }: IGenreList) => {
  function handleGenreSelect(genreId: number) {}
  return (
    <StyledDiv>
      {" "}
      {genres.map((genre, i) => {
        return (
          <Button
            className="genre-button"
            onClick={() => handleGenreSelect(genre.id)}
            content={<div className="button-content">{genre.name}</div>}
          />
        );
      })}
    </StyledDiv>
  );
};

export default Genres;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
  grid-gap: 1rem;
  .genre-button {
    padding: 1rem 2rem;
  }
`;
