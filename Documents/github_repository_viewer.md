## 시작

[https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-3-1-team-2](https://github.com/wanted-pre-onboarding-fe-6th-team2/pre-onboarding-assignment-week-3-1-team-2)

[원티드 프리 온보딩 2팀](https://github-issue-viewer-team2.netlify.app/)

이번 과제는 크래프톤의 자회사 띵스플로우의 기업 과제이다. Github REST API를 활용해 특정 레포지토리의 이슈 목록과 이슈 상세 내용을 가져오는 웹 사이트를 개발하는 과제이다.

특별히 문제될 만한 주제는 아니라고 생각했고, 팀원들과 상의하여 작업을 나누었는데, 공통 컴포넌트와 무한 스크롤 Custom Hook을 담당하게 됐다.

## 요구사항 분석

담당한 작업은 다음과 같다.

- Header와 Layout UI 작업
- Loading UI 작업
- `useInfiniteScroll` Custom Hook

UI 작업의 경우 일반적인 경우와 다르지 않아 쉽게 구현할 수 있겠지만, 무한 스크롤을 Custom Hook으로 구현하는 것은 처음이라 검색을 하면서 구현해봐야 겠다.

## `useInfiniteScroll` Custom Hook 구현하기

무한 스크롤을 구현하는 방법은 크게 둘로 나누어진다.

- `DOM`의 `Scroll Event`를 활용하는 방법
- `IntersectionObserver API`를 활용하는 방법

다만, `DOM`의 `Scroll Event`를 활용하면 상대적으로 익숙하여 구현하기는 쉬우나, 최적화를 따로 해주어야 하고, 추후 `TopButton` 등의 기능을 추가할 때 reflow를 일으킬 가능성이 있으므로, 성능적으로 좋지 않을 수 있다. 그래서 `IntersectionObserver`를 선택했다.

따라서 페이지 하단에 임시 요소를 생성하고, 해당 요소에 Observer를 두고 뷰포트에 감지되는 순간 다음 데이터를 가져오는 방식으로 구현했다.

```jsx
import { useState, useEffect } from 'react';

const useInfiniteScroll = (targetRef, fetchMoreItemsFunc) => {
  const [isFetching, setIsFetching] = useState(false);

  const intersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) setIsFetching(true);
    });
    setIsFetching(false);
  };

  useEffect(() => {
    let observer;

    if (targetRef) {
      observer = new IntersectionObserver(intersectionObserverCallback);
      observer.observe(targetRef);
    }

    return () => observer?.disconnect(targetRef);
  }, [targetRef]);

  useEffect(() => {
    if (!isFetching) return;

    fetchMoreItemsFunc();
  }, [isFetching, fetchMoreItemsFunc]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
```

우선, 타겟이 되는 마지막 요소의 가시성 변화를 관찰하기 위해 `IntersectionObserver`를 활용해 관찰 대상으로 설정한다.

이후 마지막 요소의 가시성 변화, 즉 마지막 요소가 화면에 보여졌을 때 실행할 함수로 `intersectionObserverCallback`을 설정하고, 화면에 보였을 때 `isFetching`을 `true`로 변경한다. 변경된 `isFetching`에 따라 데이터를 더 불러오는 함수인 `fetchMoreItemsFunc`를 실행하여 추가적인 데이터를 더 불러와 무한 스크롤을 구현했다.

PR을 올리고 코드리뷰를 받으면서 팀원 한 분이 더 좋은 방식을 제안해주셔서 로직을 수정했다. useEffect 2번 사용하는 로직을 하나로 합쳐 더 깔끔한 코드로 변경했다.

```jsx
import { useCallback, useRef, useEffect } from 'react';

const useInfiniteScroll = (onIntersect, options) => {
  const ref = useRef(null);

  const handleIntersect = useCallback(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!ref.current) return undefined;
    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [handleIntersect, ref, options]);

  return ref;
};

export default useInfiniteScroll;
```

## 마무리

공통 Header와 Layout 컴포넌트을 통해 통일성 있는 UI를 구현하고, Loading 컴포넌트를 통해 데이터 요청 중 Skeleton Loading을 구현하면서 한 번 사용해보고 싶었던 Skeleton Loading과 직접 무한 스크롤을 구현하면서 좋은 경험이었다고 생각한다.

코드리뷰와 피드백에 열려있는 개발자가 되어 더 좋은 코드를 탐하며 성장하는 괴물이 되고 싶다. 정말!

끝! 🙋🏻‍♂️
