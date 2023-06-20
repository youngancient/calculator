import { createSlice } from "@reduxjs/toolkit";

export interface IState {
  firstData: string;
  secondData: string;
  isOperatorClicked: boolean;
  operator: string | null;
  theme: IThemeType [];
}
export interface IThemeType {
  name: string;
  bgColor: string;
  displayColor: string;
  displayTextColor: string;
  inputContainerBgColor: string;
  digitBgColor: string;
  resetBtnColor: string;
  equalBtnColor: string;
  selected : boolean;
}

const initialState: IState = {
  firstData: "0",
  secondData: "0",
  isOperatorClicked: false,
  operator: null,
  theme: [
    {
      name : "dark",
      bgColor: "hsl(222, 26%, 31%)",
      displayColor: "",
      displayTextColor: "",
      inputContainerBgColor: "",
      digitBgColor: "",
      resetBtnColor: "",
      equalBtnColor: "",
      selected : false,
    },
    {
      name : "light",
      bgColor: "",
      displayColor: "",
      displayTextColor: "",
      inputContainerBgColor: "",
      digitBgColor: "",
      resetBtnColor: "",
      equalBtnColor: "",
      selected : true,
    },
  ]
};

// note: clicking equal to and reset should reset isOperatorclicked var
export const arithSlice = createSlice({
  name: "arith",
  initialState: initialState,
  reducers: {
    setFirst: (state, { payload }) => {
      if (!state.isOperatorClicked && state.firstData !== "undefined") {
        state.firstData === "0"
          ? (state.firstData = payload)
          : (state.firstData += payload);
      }
    },
    setSecond: (state, { payload }) => {
      if (state.isOperatorClicked) {
        state.secondData === "0"
          ? (state.secondData = payload)
          : (state.secondData += payload);
      }
    },
    setIsOperatorClicked: (state, { payload }) => {
      if (state.firstData !== "undefined" && state.firstData !== "") {
        if (!state.isOperatorClicked) {
          state.isOperatorClicked = true;
        }
        state.operator = payload;
      }
    },
    //  things to consider
    // 1. zero division
    evaluate: (state) => {
      let first = parseInt(state.firstData);
      const second = parseInt(state.secondData);
      const operator = state.operator;
      if (operator === "+") {
        first += second;
        state.firstData = first.toString();
      } else if (operator === "-") {
        first -= second;
        state.firstData = first.toString();
      } else if (operator === "x") {
        first *= second;
        state.firstData = first.toString();
      } else if (operator === "/") {
        if (second !== 0) {
          first /= second;
          state.firstData = first.toString();
        } else {
          state.firstData = "undefined";
        }
      }
      state.secondData = "0";
      state.isOperatorClicked = false;
    },
    reset: (state) => {
      state.firstData = "0";
      state.secondData = "0";
      (state.operator = null), (state.isOperatorClicked = false);
    },
    del: (state) => {
      if (state.firstData !== "undefined") {
        if (state.isOperatorClicked) {
          const str = state.secondData.slice(0, -1);
          state.secondData = str;
        } else {
          const str = state.firstData.slice(0, -1);
          state.firstData = str;
        }
      }
    },
    switchTheme : (state) =>{
      const newTheme = state.theme.map((ele)=>{
        return {...ele, selected : !ele.selected}
      });
      state.theme = newTheme;
    },
  },
});

export const {
  setFirst,
  setSecond,
  setIsOperatorClicked,
  evaluate,
  reset,
  del,
  switchTheme
} = arithSlice.actions;
// export const arithSelector = (state: RootState) => state.arithReducer<>;

export default arithSlice.reducer;
