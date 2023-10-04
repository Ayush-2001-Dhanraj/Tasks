import ReactDOMServer from "react-dom/server";

const getURIFromIcon = (icon: JSX.Element) => {
  const svgString = ReactDOMServer.renderToStaticMarkup(icon);
  const encodedURI = encodeURI(`data:image/svg+xml,${svgString}`);
  return `url("${encodedURI}")`;
};

export default getURIFromIcon;
