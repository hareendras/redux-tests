import { expect } from "../test_helper";
import commentReducer from "../../src/reducers/commnets";
import SAVE_COMMENT from "../../src/actions/types";

describe("Comments Reducer", () => {
  it("handles action with unknows type", () => {
    expect(commentReducer()).to.be.instanceof(Array);
  });
  it("handles action of type SAVE_COMMENT", () => {});
});
