import React, { useState } from "react";
import { StyleSheet, View, TextInput, StatusBar } from "react-native";
import Button from "./Button";
const Home = () => {
  const [input, setInput] = useState("");
  const caculate = () => {
    let actualString = "";
    for (let a of input) {
      if (a === "x") actualString = actualString + "*";
      else actualString += a;
    }
    const last = actualString.charAt(actualString.length - 1);
    console.log(last);
    if (
      last === "/" ||
      last === "+" ||
      last === "-" ||
      last == "x" ||
      last == "."
    ) {
      actualString = actualString.slice(0, actualString.length - 1);
    }
    console.log(actualString);
    const result = eval(actualString) + "";
    setInput(result);
  };
  const addOperator = (op) => {
    let exp = input;
    const last = exp.charAt(exp.length - 1);
    if (last === "x" || last === "+" || last === "-" || last === "/") {
      exp = exp.slice(0, -1) + op;
      setInput(exp);
    } else {
      exp = exp + op;
      setInput(exp);
    }
  };

  const clear = () => {
    setInput(input.slice(0, input.length - 1));
  };

  const percentage = () => {
    let exp = input;
    let last = input.charAt(input.length - 1);
    if (last === "/" || last === "x" || last === "-" || last === "+") {
      exp = exp.slice(0, exp.length - 1);
    }
    setInput(eval(exp + "/100") + "");
  };
  return (
    <View style={styles.container}>
      <TextInput
        maxLength={10}
        value={input}
        keyboardType="number-pad"
        showSoftInputOnFocus={false}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <Button onPress={() => setInput("")} backgroundColor="gold">
            AC
          </Button>
          <Button onPress={clear} backgroundColor="gold">
            C
          </Button>
          <Button onPress={percentage} backgroundColor="gold">
            %
          </Button>
          <Button onPress={() => addOperator("/")} backgroundColor="#ffa31a">
            /
          </Button>
        </View>
        <View style={styles.row}>
          <Button onPress={() => setInput(input + "7")}>7</Button>
          <Button onPress={() => setInput(input + "8")}>8</Button>
          <Button onPress={() => setInput(input + "9")}>9</Button>
          <Button onPress={() => addOperator("x")} backgroundColor="#ffa31a">
            x
          </Button>
        </View>
        <View style={styles.row}>
          <Button onPress={() => setInput(input + "4")}>4</Button>
          <Button onPress={() => setInput(input + "5")}>5</Button>
          <Button onPress={() => setInput(input + "6")}>6</Button>
          <Button onPress={() => addOperator("-")} backgroundColor="#ffa31a">
            -
          </Button>
        </View>
        <View style={styles.row}>
          <Button onPress={() => setInput(input + "1")}>1</Button>
          <Button onPress={() => setInput(input + "2")}>2</Button>
          <Button onPress={() => setInput(input + "3")}>3</Button>
          <Button onPress={() => addOperator("+")} backgroundColor="#ffa31a">
            +
          </Button>
        </View>
        <View style={styles.row}>
          <Button onPress={() => setInput(input + "0")} width={160}>
            0
          </Button>
          <Button onPress={() => setInput(input + ".")}>.</Button>

          <Button onPress={caculate} backgroundColor="#ffa31a">
            =
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: StatusBar.currentHeight + 20,
    width: "100%",
  },
  input: {
    width: "100%",
    height: "30%",
    fontSize: 75,
    textAlign: "right",
    color: "black",
    fontWeight: "300",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
export default Home;
