import React, { useEffect } from 'react';
import { BsSearch, BsYoutube } from 'react-icons/bs';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './SearchHeader.scss';
import { useRecoilState } from 'recoil';
import { searchKeywordState } from '../Recoil/atom';
export default function SearchHeader() {
  const [text, setText] = useRecoilState(searchKeywordState);
  const { keyword } = useParams();
  const navigate = useNavigate();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText === '') {
      return;
    } else {
      navigate(`videos/${trimmedText}`);
    }
  };

  useEffect(() => {
    setText(keyword || '');
  }, [keyword, setText]);
  return (
    <header className="header-container">
      <Link to="/" className="logo-box">
        <BsYoutube className="youtube-logo" />
        <h1>Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="검색"
          className="search-input"
        />
        <button type="submit" className="search-button">
          <BsSearch />
        </button>
      </form>
    </header>
  );
}
