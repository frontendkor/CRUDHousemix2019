import React from "react";

import { Row } from "react-materialize";

import PageTitle from "../../components/PageTitle/PageTitle";

import Search from "../../components/Search/Search";

const SearchPage = props => {
  return (
    <>
      <PageTitle title="Поиск по ингридиентам" classis="SearchTitle" />
      <Row className="productsCarts">
        <Search />
      </Row>
    </>
  );
};

export default SearchPage;
