"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
function activate(context) {
    let currentGif = 1; // Track the current GIF being displayed
    context.subscriptions.push(vscode.commands.registerCommand('extension.uimama', () => {
        const panel = vscode.window.createWebviewPanel('uimama', 'Ui-Mama', vscode.ViewColumn.One, {});
        const onDiskGifPath1 = vscode.Uri.file(path.join(context.extensionPath, 'media/', 'uimama1.gif'));
        const onDiskGifPath2 = vscode.Uri.file(path.join(context.extensionPath, 'media/', 'uimama2.gif'));
        const onDiskGifPath3 = vscode.Uri.file(path.join(context.extensionPath, 'media/', 'uimama3.gif'));
        const onDiskGifPath4 = vscode.Uri.file(path.join(context.extensionPath, 'media/', 'uimama4.gif'));
        const gifsrc1 = onDiskGifPath1.with({ scheme: 'vscode-resource' });
        const gifsrc2 = onDiskGifPath2.with({ scheme: 'vscode-resource' });
        const gifsrc3 = onDiskGifPath3.with({ scheme: 'vscode-resource' });
        const gifsrc4 = onDiskGifPath4.with({ scheme: 'vscode-resource' });
        panel.webview.html = getWebviewContent(gifsrc1);
        vscode.window.showInformationMessage('Ui-Mama (9 years old)');
        // Bind Zukyun to switch between GIFs with a delay
        vscode.commands.registerCommand('extension.Zukyun', () => {
            panel.webview.html = getWebviewContent(gifsrc2);
            currentGif = 2; // Set the current GIF to 2
            // Switch to uimama4.gif after a delay of 1500ms
            setTimeout(() => {
                panel.webview.html = getWebviewContent(gifsrc4);
                currentGif = 4; // Set the current GIF to 4
            }, 1500);
        });
        // Bind Bakyun to switch to the third GIF with a delay
        vscode.commands.registerCommand('extension.Bakyun', () => {
            panel.webview.html = getWebviewContent(gifsrc3);
            currentGif = 3; // Set the current GIF to 3
            // Switch to uimama1.gif after a delay of 1300ms
            setTimeout(() => {
                panel.webview.html = getWebviewContent(gifsrc1);
                currentGif = 1; // Set the current GIF to 1
            }, 1300);
        });
    }));
}
exports.activate = activate;
function getWebviewContent(gifsrc) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src vscode-resource:; style-src vscode-resource:;">
        <title>Ui-Mama</title>
    </head>
    <body>
        <h1>Ui-Mama (9 years old)</h1>
        <div class="container">
            <img src="${gifsrc}" class="gif-image" id="gif1">
        </div>
    </body>
    </html>`;
}
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map