import { Component } from 'react';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSearch } from 'react-icons/ai';

import * as S from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    queryName: '',
  };

  handleQueryNameChange = event => {
    this.setState({ queryName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.queryName);
    if (this.state.queryName.trim() === '') {
      toast.error('Enter a search query, please...');
      return;
    }

    this.props.onSubmit(this.state.queryName);
    this.setState({ queryName: '' });
  };

  render() {
    return (
      <S.Searchbar onSubmit={this.handleSubmit}>
        <S.SearchForm>
          <S.FormButton type="submit">
            <AiOutlineSearch size={24} />
          </S.FormButton>

          <S.SearchFormInput
            name="queryName"
            type="text"
            value={this.state.queryName}
            onChange={this.handleQueryNameChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </S.SearchForm>
      </S.Searchbar>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
