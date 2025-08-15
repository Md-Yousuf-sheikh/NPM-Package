import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

export interface OTPInputProps {
  maxLength?: number;
  onComplete?: (code: string) => void;
  onChange?: (code: string) => void;
  containerStyle?: ViewStyle;
  inputWrapperStyle?: ViewStyle;
  digitStyle?: ViewStyle;
  digitTextStyle?: TextStyle;
  focusedDigitStyle?: ViewStyle;
  cursorStyle?: TextStyle;
  secureTextEntry?: boolean;
  placeholderChar?: string;
  autoFocus?: boolean;
}

export interface OTPInputRef {
  reset: () => void;
}

const OTPInput = forwardRef<OTPInputRef, OTPInputProps>(
  (
    {
      maxLength = 4,
      onComplete,
      onChange,
      containerStyle,
      inputWrapperStyle,
      digitStyle,
      digitTextStyle,
      focusedDigitStyle,
      cursorStyle,
      secureTextEntry = false,
      placeholderChar = "",
      autoFocus = true,
    },
    ref
  ) => {
    const [code, setCode] = useState("");
    const [inputFocused, setInputFocused] = useState(false);
    const textInputRef = useRef<TextInput>(null);
    const codeDigitsArray = new Array(maxLength).fill(0);

    useEffect(() => {
      onChange?.(code);
      if (code.length === maxLength) {
        onComplete?.(code);
      }
    }, [code]);

    const handlePress = () => {
      setInputFocused(true);
      textInputRef.current?.focus();
    };

    const handleBlur = () => setInputFocused(false);

    const reset = () => {
      setCode("");
      textInputRef.current?.focus();
    };

    useImperativeHandle(ref, () => ({ reset }));

    const renderDigit = (_: any, index: number) => {
      const digit = code[index] || "";
      const isCurrentDigit = index === code.length;
      const isLastDigit = index === maxLength - 1;
      const isCodeFull = code.length === maxLength;
      const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);

      return (
        <View
          key={index}
          style={[
            styles.digitContainer,
            digitStyle,
            {
              borderColor: digit ? "#E0B148" : "#666666",
            },
            inputFocused && isDigitFocused && [styles.digitFocused, focusedDigitStyle],
          ]}
        >
          <Text style={[styles.digitText, digitTextStyle]}>
            {secureTextEntry && digit ? "*" : digit || (isDigitFocused ? <Text style={[styles.cursor, cursorStyle]}>|</Text> : placeholderChar)}
          </Text>
        </View>
      );
    };

    return (
      <View style={[styles.container, containerStyle]}>
        <Pressable
          style={[styles.wrapper, inputWrapperStyle]}
          onPress={handlePress}
        >
          {codeDigitsArray.map(renderDigit)}
        </Pressable>

        <TextInput
          style={styles.hiddenInput}
          onChangeText={setCode}
          maxLength={maxLength}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          returnKeyType="done"
          ref={textInputRef}
          onBlur={handleBlur}
          autoFocus={autoFocus}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  hiddenInput: {
    position: "absolute",
    opacity: 0,
  },
  digitContainer: {
    borderColor: "#E0B148",
    borderWidth: 2,
    borderRadius: 8,
    padding: 10,
    minWidth: 58,
    height: 58,
    justifyContent: "center",
  },
  digitText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#E0B148",
  },
  digitFocused: {
    borderColor: "#e0b04853",
    backgroundColor: `#03F97F05`,
  },
  cursor: {
    color: "#E0B148",
  },
});

export default OTPInput;
