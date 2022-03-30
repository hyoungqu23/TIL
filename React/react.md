const [data, modifierFunction] = React.useState();
`modifierFunction` 함수를 실행하면 모든 Component가 다시 렌더링 된다.

각각의 Component를 만들어 재사용하는 것은 효율성을 높일 수 있다.
`props`는 일종의 방식으로, 부모 Component에서 자식 Component로 데이터를 보낼 수 있게 해주는 방식이다.

React에서 style을 변경하는 방법
1. 해당 Tag의 `style` 속성 수정(기본)
2. CSS 사용
3. 다른 라이브러리 활용

1번 방식을 활용하면, 모든 Tag에 복사-붙여넣기를 해야하고, 유지보수도 어렵다. 따라서 이러한 모든 Style들을 가지는 하나의 Component를 만드는 것이 더 효율적이다.
```jsx
function Btn(props) {
  return (
    <button>
      {props.text}
    </button>
  )
}

<Btn text="Save" />
<Btn text="Continue" />
```
하나의 Btn Component를 만들고, 여러번 사용(rendering)할 때, 부분적으로 차이를 주기 위해 `props`를 활용한다.
`props`는 하나의 객체로, Component를 사용할 때 추가적으로 작성한 정보를 받는다.

이때 `props`를 확인해보면 다음과 같다.
```javascript
console.log(props);

> {text: "Save"} // object
```
이러한 `props`를 활용하려면 객체 활용 방법에 맞추어 `{props.text}`로 활용할 수 있다.

참고로, `<Btn text="Save" />`는 사실상 `Btn({text:"Save"})`와 같이 `Btn()` 함수에 인자(arguments)를 넣어 호출하는 것과 동일하다.

더 간편하게 활용하기 위해 다음과 같이 활용할 수 있다.
```jsx
function Btn({ text, big }) {
  return (
    <button style={{fontSize: big ? 18 : 12, }}>
      {text}
    </button>
  )
}
```
`props`로 문자열, `true` & `false`, `function` 등의 데이터를 전달할 수 있다. 이때 부모 Component의 state가 변경되면, 
```jsx
  function Btn({text, big}) {
    return (
      <button style={{fontSize: big ? 18 : 12, }}>
        {text}
      </button>
    )
  }

  function App() {
    const [value, setValue] = React.useState("Save");
    const changeValue = () => {
      setValue("Revert");
    }
    return (
      <div>
        <Btn text={value} big={true} onClick={changeValue} />
        <Btn text="Continue" />
      </div>
    );
  }
```
아래 `App` Component에서 활용된 `onClick`의 경우 단순한 `props`이지, 하나의 이벤트 리스너가 아님에 유의해야 한다. 즉, 부모 Component에서 작성한 것은 단지 `props`이며 결코 실제 HTML 태그 내부에 들어가지 않는다.