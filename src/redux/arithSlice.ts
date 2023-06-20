import { createSlice } from "@reduxjs/toolkit";

export interface IState {
  firstData: string;
  secondData: string;
  isOperatorClicked: boolean;
  operator: string | null;
  theme: IThemeType[];
  selectedTheme: IThemeType;
}
export interface IThemeType {
  name: string;
  bgColor: string;
  displayColor: string;
  displayTextColor: string;
  inputContainerBgColor: string;
  digitBgColor: string;
  digitHoverBgColor: string;
  resetBtnColor: string;
  keyShadow: string;
  equalBtnKeyShadow: string;
  resetBtnKeyShadow: string;
  equalBtnColor: string;
  textColor: string;
  resetBtnHover: string;
  equalBtnHover: string;
  selected: boolean;
}

const initialState: IState = {
  firstData: "",
  secondData: "",
  isOperatorClicked: false,
  operator: null,
  theme: [
    {
      name: "dark",
      bgColor: "hsl(222, 26%, 31%)",
      displayColor: "hsl(224, 36%, 15%)",
      displayTextColor: "hsl(0, 0%, 100%)",
      inputContainerBgColor: "hsl(224, 36%, 15%)",
      digitBgColor: "hsl(30, 25%, 89%)",
      digitHoverBgColor: "hsl(0, 0%, 100%)",
      resetBtnColor: "hsl(225, 21%, 49%)",
      equalBtnColor: "hsl(6, 63%, 50%)",
      keyShadow: "hsl(28, 16%, 65%)",
      equalBtnKeyShadow: "hsl(6, 70%, 34%)",
      resetBtnKeyShadow: "hsl(224, 28%, 35%)",
      textColor: "hsl(221, 14%, 31%)",
      resetBtnHover: "hsl(225, 21%, 65%)",
      equalBtnHover: "hsl(6, 63%, 65%)",
      selected: false,
    },
    {
      name: "light",
      bgColor: "hsl(0, 0%, 90%)",
      displayColor: "hsl(0, 0%, 93%)",
      displayTextColor: "hsl(60, 10%, 19%)",
      inputContainerBgColor: "hsl(35, 11%, 81%)",
      digitBgColor: "hsl(45, 7%, 89%)",
      digitHoverBgColor: "hsl(0, 0%, 100%)",
      resetBtnColor: "hsl(185, 42%, 37%)",
      equalBtnColor: "hsl(25, 98%, 40%)",
      keyShadow: "hsl(35, 11%, 61%)",
      equalBtnKeyShadow: "hsl(25, 99%, 27%)",
      resetBtnKeyShadow: "hsl(185, 58%, 25%)",
      textColor: "hsl(224, 36%, 15%)",
      resetBtnHover: "hsl(185, 42%, 50%)",
      equalBtnHover: "hsl(25, 98%, 50%)",
      selected: true,
    },
  ],
  selectedTheme: {
    name: "light",
    bgColor: "hsl(0, 0%, 90%)",
    displayColor: "hsl(0, 0%, 93%)",
    displayTextColor: "hsl(60, 10%, 19%)",
    inputContainerBgColor: "hsl(35, 11%, 81%)",
    digitBgColor: "hsl(45, 7%, 89%)",
    digitHoverBgColor: "hsl(0, 0%, 100%)",
    resetBtnColor: "hsl(185, 42%, 37%)",
    equalBtnColor: "hsl(25, 98%, 40%)",
    equalBtnKeyShadow: "hsl(177, 92%, 70%)",
    resetBtnKeyShadow: "hsl(285, 91%, 52%)",
    keyShadow: "hsl(35, 11%, 61%)",
    textColor: "hsl(224, 36%, 15%)",
    resetBtnHover: "",
    equalBtnHover: "",
    selected: true,
  },
};

// note: clicking equal to and reset should reset isOperatorclicked var
export const arithSlice = createSlice({
  name: "arith",
  initialState: initialState,
  reducers: {
    setFirst: (state, { payload }) => {
      if (!state.isOperatorClicked && state.firstData !== "undefined" && state.firstData !== "NaN") {
          if(state.firstData === "0"){
            if(payload !== "."){
              state.firstData = payload
            }else{
              state.firstData += payload
            }
          }else if(state.firstData === "" && payload === "."){
            state.firstData = "0.";
          }else{
            state.firstData += payload
          }
      }
    },
    setSecond: (state, { payload }) => {
      if (state.isOperatorClicked) {
        if(state.secondData === "0"){
          if(payload !== "."){
            state.secondData = payload
          }else{
            state.secondData += payload
          }
        }else{
          state.secondData += payload
        }
      }
    },
    setIsOperatorClicked: (state, { payload }) => {
      if (state.firstData !== "undefined" && state.firstData !== "NaN" && state.firstData !== "") {
        if (!state.isOperatorClicked) {
          state.isOperatorClicked = true;
        }
        state.operator = payload;
      }
    },
    //  things to consider
    // 1. zero division
    evaluate: (state) => {
      let first = parseFloat(state.firstData);
      const second = parseFloat(state.secondData);
      const operator = state.operator;
      if(!Number.isNaN(first) && !Number.isNaN(second)){
        if (operator === "+") {
          first += second;
          state.firstData = first.toFixed(4).toString();
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
        state.secondData = "";
        state.isOperatorClicked = false;
      }
    },
    reset: (state) => {
      state.firstData = "";
      state.secondData = "";
      (state.operator = null), (state.isOperatorClicked = false);
    },
    del: (state) => {
      if (state.firstData !== "undefined" && state.firstData !== "NaN") {
        if (state.isOperatorClicked) {
          const str = state.secondData.slice(0, -1);
          state.secondData = str;
        } else {
          const str = state.firstData.slice(0, -1);
          state.firstData = str;
        }
      }
    },
    switchTheme: (state) => {
      const newTheme = state.theme.map((ele) => {
        return { ...ele, selected: !ele.selected };
      });
      state.theme = newTheme;
    },
    setSelectedTheme: (state, { payload }) => {
      state.selectedTheme = payload;
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
  switchTheme,
  setSelectedTheme,
} = arithSlice.actions;

export default arithSlice.reducer;
