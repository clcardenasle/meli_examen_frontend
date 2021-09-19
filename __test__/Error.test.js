import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Error from "../src/components/Error/Error";

describe('Error Componet', () => {
  afterEach(cleanup);

  test('render the icon', () => {
    render(<Error/>);

    expect(screen.getByAltText("icError")).toBeInTheDocument();
  })

  test('render the text', () => {
    render(<Error/>);

    expect(
      screen.getByText("No hay publicaciones que coincidan con tu búsqueda.")
    ).toBeInTheDocument();
  })
})