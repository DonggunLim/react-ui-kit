# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

### DatePicker

#### source

[src/components/DatePicker](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/DatePicker)

#### children

- index

### Example

```jsx
<DatePicker stop={stop} date={selectedDate} onChangeDate={handleChangeDate} />
```

### Modal

#### source

[src/components/Modal](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Modal)

#### children

- Root
- Backdrop
- Trigger
- Content
- Close

### Example

```jsx
<Modal.Root
  onCloseModal={handleCloseModal}
  onOpenModal={handleOpenModal}
  open={isOpen}
>
  <Modal.Backdrop />
  <Modal.Trigger>
    <button>custom trigger button</button>
  </Modal.Trigger>
  <Modal.Content>
    <Modal.Close>
      <button>custom close button</button>
    </Modal.Close>
    Modal Content 내부 입니다.
  </Modal.Content>
</Modal.Root>
```

### Select

#### source

[src/components/Select](https://github.com/DonggunLim/react-ui-kit/tree/main/src/components/Select)

#### children

- Root
- Trigger
- Content
- Item

### Example

```jsx
<Select.Root onChangeValue={handleChangeValue} value={selectedValue}>
  <Select.Trigger>Select Item</Select.Trigger>
  <Select.Content>
    <Select.Item value={"1"}>One</Select.Item>
    <Select.Item value={"2"}>Two</Select.Item>
    <Select.Item value={"3"}>Three</Select.Item>
  </Select.Content>
</Select.Root>
```
