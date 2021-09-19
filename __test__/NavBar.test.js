import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import NavBar from "../src/components/NavBar/NavBar.js";

describe('NavBar Component test', () => {
  afterEach(cleanup);

  test('render app logo', () => {
    render(<NavBar/>);
    expect(screen.getByAltText("Logo Mercadolibre")).toBeInTheDocument();
  });

  test('render search logo', () => {
    render(<NavBar/>);
    expect(screen.getByAltText("icono búsqueda")).toBeInTheDocument();
  });

  test('render search input', () => {
    render(<NavBar/>);
    expect(screen.getByLabelText("search")).toBeInTheDocument();
  });
})