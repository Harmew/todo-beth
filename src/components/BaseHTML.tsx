import * as elements from "typed-html";

const BaseHTML = ({ children }: elements.Children) => `
<!DOCTYPE html>
    <html>
        <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width", initial-scale=1.0">
        <title>THE BETH STACK</title>
        <script src="https://unpkg.com/htmx.org@1.9.3"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
        </head>
        ${children}
    </html>
`;

export default BaseHTML;
