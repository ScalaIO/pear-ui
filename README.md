# Pear UI

This project is a web UI for the [pear cfp backend](https://github.com/ScalaIO/pear)

## Contributing

Make sure you use the node version from `.node-version`.
This project uses [editorconfig](https://editorconfig.org/) and [prettier](https://prettier.io/) to enforce a consistent style. Please make sure to configure your editor accordingly


## Configuring your editor
### VSCode
install
* [EditorConfig for VS COde](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

They should pick up the style configuration automatically.

In some cases VsCode can fail to identify the files type as `JavaScript React` and use `Javascript` instead which will mess up the formatting of jsx templates.
They should pick up the style configuration automatically. In some cases VsCode can fail to identify the files type as `JavaScript React` and use `Javascript` instead which will mess up the jsx formatting.

To avoid this go to `Preferences: Open User Settings`, in the user settings choose workspace settings and add the following:
```json
    "files.associations": {
        "*.js": "javascriptreact"
    }
```
