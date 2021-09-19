import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Layout from "../src/components/Layout/Layout";

describe('Layout Component', () => {
  afterEach(cleanup);

  test('render navbar', () => {
    render(<Layout/>);

    expect(screen.getByAltText("Logo Mercadolibre")).toBeInTheDocument();
    expect(screen.getByAltText("icono búsqueda")).toBeInTheDocument();
    expect(screen.getByLabelText("search")).toBeInTheDocument();
  });

  test('render children', () => {
    const child = (<div>hijo</div>);

    render(<Layout children={child}/>);

    expect(screen.getByText('hijo')).toBeInTheDocument();
  })
})