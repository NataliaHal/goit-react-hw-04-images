import PropTypes from 'prop-types';
import * as S from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <div>
      <S.LoadMoreButton type="button" onClick={onClick}>
        Load more
      </S.LoadMoreButton>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
