import { useRouteError } from 'react-router-dom';
import { Header } from '../Header';

export function ErrorPage() {
  const error: any = useRouteError(); // ErrorResponse {status: 404, statusText: 'Not Found', data: null}
  console.log(error);
  return (
    <>
      <Header />
      <div>
        <h1>{isError(error) && <p>{error.status}</p>}</h1>
      </div>
    </>
  );
}

function isError(error: any) {
  return 'status' in error;
}
