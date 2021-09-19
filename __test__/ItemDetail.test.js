import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import ItemDetail from "../src/components/ItemDetail/ItemDetail";

const mockItemDetail = {
  title: "Titulo",
  image: "http://http2.mlstatic.com/D_842056-MLA46651798889_072021-I.jpg",
  stateProduct: "new",
  quantity: 200,
  description: "Descripción",
  price: 2000,
};

describe('ItemDetail Component', () => {
  afterEach(cleanup);

  const { title, image, stateProduct, quantity, description, price } = mockItemDetail;

  test('render title send via props', () => {
    render(
      <ItemDetail
        title={title}
        image={image}
        stateProduct={stateProduct}
        quantity={quantity}
        description={description}
        price={price}
      />
    );

    expect(screen.getByText(`${title}`)).toBeInTheDocument();
  });

  test('render Item image', () => {
    render(
      <ItemDetail
        title={title}
        image={image}
        stateProduct={stateProduct}
        quantity={quantity}
        description={description}
        price={price}
      />
    );

    expect(screen.getByAltText("product image")).toBeInTheDocument();
  });

  test("render product state", () => {
    render(
      <ItemDetail
        title={title}
        image={image}
        stateProduct={stateProduct}
        quantity={quantity}
        description={description}
        price={price}
      />
    );

    expect(screen.getByText(`Nuevo`)).toBeInTheDocument();
  });

  test("render used state", () => {
    render(
      <ItemDetail
        title={title}
        image={image}
        stateProduct={"used"}
        quantity={quantity}
        description={description}
        price={price}
      />
    );

    expect(screen.getByText(`Usado`)).toBeInTheDocument();
  });

  test("render quantity send via props", () => {
    render(
      <ItemDetail
        title={title}
        image={image}
        stateProduct={stateProduct}
        quantity={quantity}
        description={description}
        price={price}
      />
    );

    expect(screen.getByText(`${quantity} vendidos`)).toBeInTheDocument();
  });

  test("render description send via props", () => {
    render(
      <ItemDetail
        title={title}
        image={image}
        stateProduct={stateProduct}
        quantity={quantity}
        description={description}
        price={price}
      />
    );

    expect(screen.getByText(`${description}`)).toBeInTheDocument();
  });

  test("render price formatted send via props", () => {
    render(
      <ItemDetail
        title={title}
        image={image}
        stateProduct={stateProduct}
        quantity={quantity}
        description={description}
        price={price}
      />
    );

    expect(screen.getByText('$2,000')).toBeInTheDocument();
  });
})