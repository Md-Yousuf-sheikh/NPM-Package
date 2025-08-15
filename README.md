# react-native-otp-manager

![Demo](react-native-otp-manager/demo_otp.gif)

## Overview

`react-native-otp-manager` is a lightweight, highly performant OTP input component for React Native. It offers smooth entry, full customization, secure input, and works with both React Native CLI and Expo.

For the full component documentation (features, props, advanced styling), see `react-native-otp-manager/readme.md`.

## Installation

```bash
npm install react-native-otp-manager
# or
yarn add react-native-otp-manager
```

## Quick Start

```tsx
import React from "react";
import { View } from "react-native";
import OTPManager from "react-native-otp-manager";

export default function App() {
  const handleComplete = (otp: string) => {
    console.log("Entered OTP:", otp);
  };

  return (
    <View>
      <OTPManager maxLength={6} onComplete={handleComplete} />
    </View>
  );
}
```

## Repository Structure

```
.
├─ README.md                    # This file
└─ react-native-otp-manager/    # Publishable package
   ├─ index.tsx
   ├─ package.json
   └─ readme.md                 # Detailed package README (props, examples)
```

## Updating and Publishing the Package (npm)

Run these from the package directory:

```bash
cd react-native-otp-manager

# 1) Authenticate (first time or when token expires)
npm login
npm whoami

# 2) Bump version (choose one): patch | minor | major
npm version patch -m "chore: release v%s"

# 3) Publish
npm publish --access public
```

### (Optional) Update dependencies

```bash
cd react-native-otp-manager
npm outdated
npx npm-check-updates -u
npm install
```

## Create Package Lists

- All published versions of this package:

```bash
npm view react-native-otp-manager versions --json
```

- Latest metadata for this package:

```bash
npm view react-native-otp-manager
```

- All packages by a maintainer (replace YOUR_NPM_USERNAME):

```bash
curl -s "https://registry.npmjs.org/-/v1/search?text=maintainer:YOUR_NPM_USERNAME&size=250" \
  | jq -r '.objects[].package.name'
```

## Contributing

Issues and PRs are welcome.

## License

ISC © Dev Yousuf
