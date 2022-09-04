import { useEffect } from 'react';
import { LoadingWrapper, LoadingIcon } from './loader.styles';

const Loader = () => {
  useEffect(() => {
    console.log('loading...');
    return () => {
      console.log('done');
    };
  }, []);
  return (
    <LoadingWrapper>
      <LoadingIcon />
    </LoadingWrapper>
  );
};

export default Loader;
