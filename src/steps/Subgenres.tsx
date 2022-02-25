import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../components";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { addNewSubgenre, addSubgenre } from "../redux/stepsSlice";
import { IGenre } from "../_shared/types";

interface ISubgenres {
  subgenres: ISubgenres[];
}
const Subgenres = () => {
  const dispatch = useAppDispatch();

  const subGenres = useAppSelector(({ step }) => step.genre.subgenres);
  const selectedSubgenre = useAppSelector(({ step }) => step.subgenre);
  const isNewSubgenre = useAppSelector(({ step }) => step.addNewSubgenre);

  function handleSelectSubgenre(subGenreId: number) {
    dispatch(addNewSubgenre("addExistingSubgenre"));
    if (subGenreId === selectedSubgenre.id) return dispatch(addSubgenre({}));
    dispatch(addSubgenre(subGenres.filter((g) => g.id === subGenreId)[0]));
  }

  function handleAddNewSubgenre() {
    dispatch(addSubgenre({}));
    if (isNewSubgenre) return dispatch(addNewSubgenre("addExistingSubgenre"));
    dispatch(addNewSubgenre("addNewSubgenre"));
  }

  return (
    <StyledDiv>
      {" "}
      {subGenres?.map((subgenre, i) => {
        return (
          <Button
            key={i}
            className={`genre-button ${
              selectedSubgenre.id === subgenre.id ? "selected" : ""
            }`}
            onClick={() => handleSelectSubgenre(subgenre.id)}
            content={<div className="button-content">{subgenre.name}</div>}
          />
        );
      })}
      <Button
        className={`genre-button ${isNewSubgenre ? "selected" : ""}`}
        onClick={handleAddNewSubgenre}
        content={<div className="button-content">Add new</div>}
      />
    </StyledDiv>
  );
};

export default Subgenres;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: row;
  grid-gap: 0.9rem;
  .genre-button {
    padding: 1rem 2rem;
  }

  .selected {
    background-color: #525a6c !important;
    color: #fff !important;
  }
`;
