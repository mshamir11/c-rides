"use client";
import { auth } from "../lib/auth";
import {
  Interactivity,
  Transition,
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
      <hr />
      <br />
      <Interactivity />
    </div>
  );
}
