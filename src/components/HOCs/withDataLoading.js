import { useState, useEffect } from 'react';

function withDataLoading(WrappedComponent) {
  function WrappedComponentWithDataLoading({ url, ...props }) {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      setIsFetching(true);
      fetch(url)
        .then(response => response.json())
        .then(data => setData(data))
        .catch(e => setError(e))
        .finally(() => setIsFetching(false));
    }, [url]);

    return (
      <WrappedComponent
        data={data}
        isFetching={isFetching}
        error={error}
        {...props}
      />
    );
  }

  return WrappedComponentWithDataLoading;
}

export default withDataLoading;
