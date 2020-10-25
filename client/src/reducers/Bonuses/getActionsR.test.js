import getActionsR, { initialState } from "./getActionsR";

describe("Testing getActions", () => {
  it("GET_ACTIONS_REQUEST", () => {
    const testAction = {
      type: "GET_ACTIONS_REQUEST",
      payload: {
        wait: true
      }
    };
    expect(getActionsR(initialState, testAction)).toEqual({
      ...initialState,
      wait: testAction.payload.wait
    });
  });

  it("GET_ACTIONS_SUCCESS", () => {
    const testAction = {
      type: "GET_ACTIONS_SUCCESS",
      payload: {
        wait: false,
        data: [{}, {}, {}]
      }
    };
    expect(getActionsR(initialState, testAction)).toEqual({
      ...initialState,
      wait: testAction.payload.wait,
      data: testAction.payload.data
    });
  });
});
