import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addGenre, reset } from "../redux/stepsSlice";
import { IGenre } from "../_shared/types";

interface IGenreList {
  genres: IGenre[];
}
const Genres = ({ genres }: IGenreList) => {
  const dispatch = useAppDispatch();

  const selectedGenre = useAppSelector(({ step }) => step.genre);

  const handleSelectGenre = (genreId: number) => {
    if (genreId === selectedGenre.id) return dispatch(reset());

    dispatch(addGenre(genres.filter((g) => g.id === genreId)[0]));
  };

  console.log(selectedGenre);

  return (
    <StyledDiv>
      {" "}
      {genres.map((genre, i) => {
        return (
          <Button
            key={i}
            className={`genre-button ${
              selectedGenre.id === genre.id ? "selected" : ""
            }`}
            onClick={() => handleSelectGenre(genre.id)}
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

  .selected {
    background-color: #525a6c !important;
    color: #fff !important;
  }
`;
