const Error = ({ statusCode }: any) => {
  return (
    <div>
      <h2>{statusCode}</h2>
      <div>Oops...an error has occurred.</div>
    </div>
  );
};

Error.getInitialProps = ({res, err}: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode }
}

export default Error;