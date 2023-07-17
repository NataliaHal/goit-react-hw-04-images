import { Vortex } from 'react-loader-spinner';
import * as S from './Loader.styled';

export const Loader = () => {
  return (
    <S.LoadWrapper>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
      />
    </S.LoadWrapper>
  );
};
