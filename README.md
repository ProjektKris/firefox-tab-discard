# Firefox Tab Discard Extension

A simple Firefox tab discarder that relies on keyboard shortcuts for input.

## Usage

> discard-current-tab: discards the current tab.

> discard-all-other-tab: discards all background tabs that are not active and is not selected.

### Context Menu

Right click on any tab on the tab bar and there should be a button to discard tabs.

### Keyboard Shortcuts

Default keyboard shortcut

-   `discard-current-tab`: `Alt+X`
-   `discard-all-other-tab`: `Alt+Shift+X`

## Running and Building

### Install web-ext

installing web-ext globally is recommended

```
npm install --global web-ext
```

### Running

```
npm test
```

This does lints and runs the extension as a temporary extension in firefox. By default auto reloading feature is enabled.

### Building

```
npm run build
```

This builds an unsigned .zip inside `web-ext-artifacts` folder.
