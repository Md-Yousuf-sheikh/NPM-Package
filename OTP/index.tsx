import React, { useEffect, useRef, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface indexProps {
  maxLength?: number;
  onComplete?: (code: string) => void;
  onChange?: (code: string) => void;
  containerStyle?: object;
  inputStyle?: object;
  focusedInputStyle?: object;
}

const index: React.FC<indexProps> = ({
  maxLength = 4,
  onComplete,
  onChange,
  containerStyle = {},
  inputStyle = {},
  focusedInputStyle = {},
  
}) => {
  const [code, setCode] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const textInputRef = useRef<TextInput>(null);
  const codeDigitsArray = new Array(maxLength).fill(0);

  useEffect(() => {
    if (code.length === maxLength && onComplete) {
      onComplete(code);
    }
    // Reset input when code changes
    onChange?.(code);
  }, [code]);

  const handlePress = () => {
    setInputFocused(true);
    textInputRef.current?.focus();
  };

  const handleBlur = () => setInputFocused(false);

  const renderDigit = (_: any, index: number) => {
    const digit = code[index] || "";
    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;
    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);
    //

    return (
      <View
        key={index}
        style={[
          styles.otpInput,
          inputStyle,
          {
            borderColor: code?.[index] ? "#E0B148" : "#666666",
          },
          inputFocused &&
            isDigitFocused && [styles.otpInputFocused, focusedInputStyle],
        ]}
      >
        <Text style={styles.otpInputText}>
          {digit || (isDigitFocused ? "|" : "")}
        </Text>
      </View>
    );
  };
  // 
  const reset = () => {
    setCode("");
    textInputRef.current?.focus();
  };
  

  return (
    <View style={[styles.otpInputContainer, containerStyle]}>
      <Pressable style={styles.otpInputWrapper} onPress={handlePress}>
        {codeDigitsArray.map(renderDigit)}
      </Pressable>
      <TextInput
        style={styles.hiddenTextInput}
        onChangeText={setCode}
        maxLength={maxLength}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        returnKeyType="done"
        ref={textInputRef}
        onBlur={handleBlur}
        autoFocus={true}
        onFocus={() => {
          handlePress();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  otpInputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  otpInputWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  hiddenTextInput: {
    position: "absolute",
    opacity: 0,
  },
  otpInput: {
    borderColor: "#E0B148",
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    minWidth: 58,
    height: 58,
    justifyContent: "center",
  },
  otpInputText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#E0B148",
  },
  otpInputFocused: {
    borderColor: "#e0b04853",
    backgroundColor: `#03F97F05`,
  },
});

export default index;
