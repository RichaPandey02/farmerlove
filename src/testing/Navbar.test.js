import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Navbar from "../components/layout/Navbar";
import { BrowserRouter } from "react-router-dom";

test("to check whether Navbar component rendered", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
});
