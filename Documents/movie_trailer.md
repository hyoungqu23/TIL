## 시작

[https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-2-1-team-2](https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-2-1-team-2)

[Vite + React](https://wanted-movie-trailer.netlify.app/)

이번 과제는 아이엠랩의 기업 과제로, 퍼블릭 영화 API를 활용해 영화 트레일러 사이트를 개발하는 것이었다. 여러 페이지로 구성되어 있으며 대부분은 동일한 UI를 가지게 될 것이라고 생각됐다. 이전 과제에서 리스트 관련 UI 작업을 담당했기 때문에 검색 페이지를 담당했다.(비극의 서막..)

솔직히 CFD 팀 프로젝트에서 API 문제로 인해 무한스크롤과 검색이 제대로 구현되지 않는 이슈가 있었는데, 이번 과제를 계기로 이를 해결하고 싶었던 것이 더 컸다. 검색 페이지를 담당하게 되면서 한 단계 성장할 수 있겠다고 생각한게 오산이었을지도 모른다.

아무튼 요구사항은 다음과 같았다.

## 요구사항 분석

모든 페이지에 공통적인 요구사항은 다음과 같다.

- Loading 상태 표기
- 무한 스크롤
- ScrollUp Button
- API Response 데이터 캐싱

검색 페이지의 요구사항은 다음과 같다.

- 제목, 포스터, 별점을 보여주어야 한다.
- 포스터가 없는 경우 대체 이미지를 활용해야 한다.

솔직히 UI는 큰 걱정을 하지 않았지만 무한 스크롤과 검색이 제대로 처리가 될지에 대해 시작부터 고민을 하고 있었다. 심지어 다른 팀원들이 구현한 무한 스크롤 로직을 활용해야 하기 때문에 걱정이 됐지만, 팀원들이 어련히 잘해줄까 싶어서 마음 가볍게 시작했다.

## 검색 페이지 구현하기

처음 구현하고자 했던 것은 Header에 `SearchInput`을 넣어 어떤 페이지에서나 검색이 가능하게 하려고 했으나, Props가 제대로 처리되지 않아 잠정적으로 중단했다.

결국 마감 시간이 있기 때문에 Header에서 검색 페이지로 이동하고, 검색 페이지 내에서 `SearchInput`에 검색을 하는 방식으로 결정했다. 우선, 검색 키워드를 입력할 폼을 만들고, 검색 키워드를 State로 관리했다.

```jsx
// components/search/searchInput/searchInput.jsx

const SearchInput = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchKeywordInputChange = ({ target }) => {
    const { value } = target;
    setSearchKeyword(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <Styled.SearchSection>
      <Styled.SearchInputSection>
        <Styled.SearchInputForm onSubmit={handleSearch}>
          <Styled.SearchInput
            type="text"
            placeholder="검색어를 입력하세요."
            autoComplete="false"
            value={searchKeyword}
            onChange={handleSearchKeywordInputChange}
          />
          <Styled.SearchButton>
            <img src={searchIcon} alt="검색" />
          </Styled.SearchButton>
        </Styled.SearchInputForm>
      </Styled.SearchInputSection>
      <Styled.SearchResultSection>
        {/* 결과 렌더링 위치 */}
      </Styled.SearchResultSection>
    </Styled.SearchSection>
  );
};

export default SearchInput;
```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c4f0033-acaf-4814-abad-3646fe97645a/Untitled.png)

이렇게 처리하니 API는 쿼리가 없는데 계속 요청한다고 에러를 내뱉고, 검색은 되는데 매우 느리게 반응하고, 별 이슈가 다 발생했다.

우선 다른 팀원이 작성한 `useMovieSearch` Custom Hook를 확인해봤다.

```jsx
import useSWRInfinite from 'swr/infinite';
import searchApiService from '@/api/searchService';
import { USE_SWR_KEYS } from '@/constants/swr';
import { generateSwrGetKeyFunction } from '@/utils/swr';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

const getKey = generateSwrGetKeyFunction(USE_SWR_KEYS.MOVIE_SEARCH);

const useMovieSearch = ({ searchKeyword, language } = {}) => {
  const { data, error, setSize } = useSWRInfinite(getKey, (_, page) =>
    searchApiService.getMovieSearchResults({ searchKeyword, language, page }),
  );

  const handleFetchMoreSearchResults = () => {
    setSize((prevSize) => prevSize + 1);
  };

  const infiniteScrollTargetRef = useInfiniteScroll(
    handleFetchMoreSearchResults,
  );

  return {
    searchResults: data,
    isLoading: !error && !data,
    isError: error,
    infiniteScrollTargetRef,
  };
};

export default useMovieSearch;
```

`searchKeyword`와 `language`를 받아 SWR을 활용한 캐싱 로직 처리를 하고, 무한 스크롤을 구현한 `IntersectionObserver`의 타겟과 함께 관련 데이터를 반환하는 것을 알 수 있다. 즉, 결국 API 호출을 하는 `useMovieSearch` Custom Hook을 사용하기 전에 검색어가 입력되어야 하는데, Custom Hook을 useEffect로 처리할 수 없기 때문에 Custom Hook을 변경해야 한다.

따라서 `useMovieSearch` Custom Hook을 `searchKeyword`가 존재하는 경우에만 API를 호출하도록 변경했다.

```jsx
const useMovieSearch = ({ searchKeyword, language } = {}) => {
  const { data, error, setSize } = useSWRInfinite(
    getKey,
    (_, page) =>
      searchKeyword &&
      searchApiService.getMovieSearchResults({ searchKeyword, language, page }),
  );

  const handleFetchMoreSearchResults = () => {
    setSize((prevSize) => prevSize + 1);
  };

  const infiniteScrollTargetRef = useInfiniteScroll(
    handleFetchMoreSearchResults,
  );

  return {
    searchResults: data,
    isLoading: !error && !data,
    isError: error,
    infiniteScrollTargetRef,
  };
};

export default useMovieSearch;
```

변경한 후 다시 검색을 실행해보니 첫 번째 입력 시에 input이 비어있기 때문에 searchKeyword가 `''`인 경우에 데이터를 읽지 못해 생기는 에러였다.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f7fc3381-7f7b-497e-be8b-667eec00379f/Untitled.png)

초기값을 특정 값으로 설정하는 것 말고는 해결책이 떠오르지 않아 랜덤한 값을 생성하여 초기 값으로 넣어주는 `randomKeyword` 함수로 우선 처리했다.

```jsx
// components/search/searchInput/searchInput.jsx

import React, { useState } from 'react';
import searchIcon from '@/assets/svg/searchIcon.svg';
import * as Styled from '@/components/search/SearchInput/SearchInput.styled';
import useMovieSearch from '@/hooks/api/useMovieSearch';
import SearchItem from '@/components/search/SearchItem/SearchItem';
import Loading from '@/components/common/Loading/Loading';

const SearchInput = () => {
  const randomKeyword = () => {
    const keywords = ['영화', '어벤져스', '스파이더맨', '기생충'];
    const random = Math.floor(Math.random() * 4);

    return keywords[random];
  };

  const [searchKeyword, setSearchKeyword] = useState(randomKeyword());

  const { searchResults, isLoading, isError, infiniteScrollTargetRef } =
    useMovieSearch({
      searchKeyword,
    });

  const handleSearchKeywordInputChange = ({ target }) => {
    const { value } = target;
    setSearchKeyword(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const searchedMovieList = searchKeyword
    ? searchResults?.map(({ results }) => results).flat()
    : [];

  if (isLoading) return <Loading />;

  return (
    <Styled.SearchSection>
      <Styled.SearchInputSection>
        <Styled.SearchInputForm onSubmit={handleSearch}>
          <Styled.SearchInput
            type="text"
            placeholder="검색어를 입력하세요."
            autoComplete="false"
            value={searchKeyword}
            onChange={handleSearchKeywordInputChange}
          />
          <Styled.SearchButton>
            <img src={searchIcon} alt="검색" />
          </Styled.SearchButton>
        </Styled.SearchInputForm>
      </Styled.SearchInputSection>
      <Styled.SearchResultSection>
        {isError && <h2>검색된 결과가 없습니다.</h2>}
        {searchedMovieList?.map((movie) => (
          <SearchItem
            key={movie.id + movie.title}
            movie={movie}
            isLoading={isLoading}
            target={infiniteScrollTargetRef}
          />
        ))}
        <div ref={infiniteScrollTargetRef} />
      </Styled.SearchResultSection>
    </Styled.SearchSection>
  );
};

export default SearchInput;
```

## 개선해야할 점

- 다른 팀원이 작성한 무한 스크롤 로직이 가끔 작동하는 것으로 보아 수정이 필요하다.
- 초기값 이슈로 인한 최초 랜덤 키워드를 넣는 로직을 제거하고 초기값 이슈를 해결해야 한다.

## 마무리

결국 검색창 구현은 성공했으나 맨 처음에 생각했던 Header에 넣는 방식에 대해서도 고민해보고 따로 한 번 만들어봐야 할 것 같다.

끝! 🙋🏻‍♂️
