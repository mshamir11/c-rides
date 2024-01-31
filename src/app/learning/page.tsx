"use client";
import {
  Container,
  Break,
  BoxDecoration,
  BoxSizing,
  Display,
  Filters,
  Grid,
  Shadow,
  Space,
  Table,
} from "./modules";
import Transition from "./modules/Transition";

export default function Learning() {
  return (
    <div>
      <Container />
      <br />
      <Break />
      <hr />
      <br />
      <BoxDecoration />
      <br />
      <hr />
      <BoxSizing />
      <br />
      <hr />
      <Display />
      <br />
      <hr />
      <Grid />
      <br />
      <hr />
      <Space />
      <hr />
      <br />
      <Shadow />
      <hr />
      <br />
      <Filters />
      <hr />
      <br />
      <Table />
      <hr />
      <br />
      <Transition />
    </div>
  );
}
