import nock from "nock";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { results } from "./mocks/weather";
import Widget from "./index";

describe("<Widget /> SUCCESS", () => {
  render(<Widget mock={results} />);

  const button = screen.getByRole("button", { name: /atualizar métricas/i });

  it("Update weather button must be in the document", () => {
    expect(button).toBeInTheDocument();
  });

  it("on Button click - Request to update weather data must have the button enabled", async () => {
    nock("https://api.openweathermap.org/data/2.5")
      .persist()
      .intercept(
        "/weather?lat=-19.9025593&lon=-43.9341315&lang=pt_br&units=metric&appid=90274f6907ae77932c3f03c5a6b76b4d",
        "OPTIONS"
      )
      .reply(
        200,
        {},
        {
          "access-control-allow-headers": "*",
          "Access-Control-Allow-Origin": "*",
        }
      )
      .post(
        "/weather?lat=-19.9025593&lon=-43.9341315&lang=pt_br&units=metric&appid=90274f6907ae77932c3f03c5a6b76b4d"
      )
      .reply(
        200,
        {
          attrs: [],
          message: "",
          type: "success",
        },
        {
          "access-control-allow-headers": "*",
          "Access-Control-Allow-Origin": "*",
          "cache-control": "no-cache, private",
          "content-type": "application/json",
        }
      );

    userEvent.click(button);
    await waitFor(() => expect(button).toBeDisabled(), { timeout: 3000 });
  });
});
