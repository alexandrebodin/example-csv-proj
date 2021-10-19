import { useQuery } from "react-query";

import {
  Cell,
  Column,
  Row,
  TableView,
  TableBody,
  TableHeader,
} from "@adobe/react-spectrum";

function Homepage() {
  const result = useQuery("todos", async () => {
    const response = await fetch("/api/tests");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  });

  const { data, isLoading, isError, error } = result;

  if (isLoading) {
    return <span>Loading ...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <TableView aria-label="data table">
      <TableHeader>
        <Column>Name</Column>
        <Column>Type</Column>
        <Column align="end">Price</Column>
      </TableHeader>
      <TableBody>
        {data.tests.map((datum) => {
          return (
            <Row key={datum.name}>
              <Cell>{datum.name}</Cell>
              <Cell>{datum.type}</Cell>
              <Cell>{datum.price}</Cell>
            </Row>
          );
        })}
      </TableBody>
    </TableView>
  );
}

export default Homepage;
