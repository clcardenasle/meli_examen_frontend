import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import Item from "../src/components/Item/Item";

const mockItem = {
  price: 2000,
  title: "Titulo",
  image: "http://http2.mlstatic.com/D_842056-MLA46651798889_072021-I.jpg",
  cityName: "Bogotá",
  shipping: true,
  id: "MLA929316972",
};

describe('Item Component', () => {
  afterEach(cleanup);

  const { price, title, image, cityName, shipping, id } = mockItem;

  test("render the title send via props", () => {
    render(
      <Item
        price={price}
        title={title}
        image={image}
        cityName={cityName}
        shipping={shipping}
        id={id}
      />
    );

    expect(screen.getByText(`${title}`)).toBeInTheDocument();
  });

  test("render the city name send via props", () => {
    render(
      <Item
        price={price}
        title={title}
        image={image}
        cityName={cityName}
        shipping={shipping}
        id={id}
      />
    );

    expect(screen.getByText(`${cityName}`)).toBeInTheDocument();
  });

  test("render shipping icon when free shipping is true", () => {
    render(
      <Item
        price={price}
        title={title}
        image={image}
        cityName={cityName}
        shipping={shipping}
        id={id}
      />
    );

    expect(screen.getByAltText("shipping")).toBeInTheDocument();
  });

  test("do not render shipping icon when free shipping is false", () => {
    render(
      <Item
        price={price}
        title={title}
        image={image}
        cityName={cityName}
        shipping={false}
        id={id}
      />
    );
    
    const shippingIcon = screen.queryAllByAltText("shipping");
    expect(shippingIcon).toHaveLength(0);
  });

  test("render item´s image", () => {
    render(
      <Item
        price={price}
        title={title}
        image={image}
        cityName={cityName}
        shipping={false}
        id={id}
      />
    );
    
    expect(screen.getByAltText("item image")).toBeInTheDocument();
  });

  test("render formatted price", () => {
    render(
      <Item
        price={price}
        title={title}
        image={image}
        cityName={cityName}
        shipping={false}
        id={id}
      />
    );
    
    expect(screen.getByText("$2,000")).toBeInTheDocument();
  });


})
