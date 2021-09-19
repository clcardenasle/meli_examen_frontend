import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Breadcrumb from "../src/components/Breadcrumb/Breadcrumb";

const mockBreadcrumb = {
  query: "query",
  category: "category"
};

describe('Breadcrumb Component', () => {
  afterEach(cleanup);

  const { query, category } = mockBreadcrumb;

  test('render breadcrumb with props', () => {
    render(
      <Breadcrumb
        query={query}
        category={category}
      />
    );

    expect(screen.getByText(`${category} > ${query}`)).toBeInTheDocument();
  })
})