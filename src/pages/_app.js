import "../scss/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
