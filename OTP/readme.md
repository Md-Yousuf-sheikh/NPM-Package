Here’s a well-structured **README.md** file for your package:  

---
# **react-native-otp-manager** 🔢  

🚀 **Fast, Smooth, and Lag-Free OTP Input for React Native!**  

## **Overview**  
`react-native-otp-manager` is a lightweight and customizable OTP input component for React Native. It ensures a seamless and lag-free experience for OTP entry, making verification faster and more efficient.  

## **Features**  
✅ **Smooth and lag-free input**  
✅ **Highly customizable UI**  
✅ **Auto-focus and OTP autofill support**  
✅ **Works with React Native CLI & Expo**  
✅ **Dark mode support**  

---

## **Installation**  
### **Using npm**  
```sh
npm install react-native-otp-manager
```
### **Using yarn**  
```sh
yarn add react-native-otp-manager
```

---

## **Usage**  

### **Basic Example**
```tsx
import React from "react";
import { View } from "react-native";
import OTPManager from "react-native-otp-manager";

const App = () => {
  const handleComplete = (otp: string) => {
    console.log("Entered OTP:", otp);
  };

  return (
    <View>
      <OTPManager maxLength={6} onComplete={handleComplete} />
    </View>
  );
};

export default App;
```

---

## **Props**  

| Prop               | Type       | Description                                 | Default  |
|--------------------|-----------|---------------------------------------------|----------|
| `maxLength`       | `number`   | Number of OTP digits                        | `4`      |
| `onComplete`      | `function` | Callback when OTP is completely entered     | `null`   |
| `onChange`        | `function` | Callback when OTP changes                   | `null`   |
| `containerStyle`  | `object`   | Custom styles for the outer container       | `{}`     |
| `inputStyle`      | `object`   | Custom styles for OTP input fields          | `{}`     |
| `focusedInputStyle` | `object` | Custom styles for the focused input field  | `{}`     |

---

## **Customization**  

You can easily style the OTP input fields using `containerStyle`, `inputStyle`, and `focusedInputStyle`.  

### **Example with Custom Styles**  
```tsx
<OTPManager
  maxLength={6}
  onComplete={(otp) => console.log("OTP:", otp)}
  containerStyle={{ marginTop: 20 }}
  inputStyle={{ borderColor: "#FF5733", color: "#FF5733" }}
  focusedInputStyle={{ borderColor: "#FFC300", backgroundColor: "#FFF5E1" }}
/>
```

---

## **Contributing**  
Pull requests are welcome! If you find any issues or want to suggest improvements, feel free to open an issue or contribute.  
