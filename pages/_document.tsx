import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-black h-[100%] flex flex-col justify-center">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
