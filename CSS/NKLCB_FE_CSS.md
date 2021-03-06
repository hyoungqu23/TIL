# CSS
> π *κΈ°μ΄λ₯Ό νννκ²π§±, λ°λͺ© μ‘νμ§ μλλ‘.*

---
## π§± CSSμ΄λ?
### κ°μ
- Cascading Style Sheetsμ μ½μ΄.

- CSSλ λͺ¨λλ³λ‘ κΆκ³ μμ λ§λ€κ³  μκΈ° λλ¬Έμ μ΅κ·Ό μλ°μ΄νΈ λ μμ±μ λΈλΌμ°μ λ§λ€ μ§μ μ¬λΆκ° λ€λ₯Ό μ μμΌλ―λ‘, νμΈν΄μΌ νλ€.([Can I Use](https://caniuse.com/), [CSS Snapshot](https://www.w3.org/TR/css/))

- 'Cascading'μ μμμ μλλ‘ νλ₯΄λ λ°©ν₯μΌλ‘ μ€νμΌμ΄ μ μ©λλ κ²μ μλ―Ένλλ°, μ¦, λΆλͺ¨ μμμμ μ§μ ν μ€νμΌμ΄ μμ μμμμ μ¬μ©λλ κ²μ μλ―Ένλ€.

- CSSλ κ·μΉ κΈ°λ° μΈμ΄(Rule-based Language)μ΄λ€.
  HTML λ¬Έμμ μ€νμΌ κ·μΉμ μμ±ν΄μ μ μ©νλ κ²μ΄λ€.
  μ΄λ¬ν κ·μΉμ μμ±νλ λ°©λ²μ΄ μ€μνκ³ , μ¬λ¬ κ·μΉλ€μ λμ΄ν ννλ‘ κ΅¬μ±λλ€.
- CSSλ₯Ό ν΅ν΄ νΉμ  μμλ νΉμ  μμλ€μ μ§ν©μ μ€νμΌ κ·μΉμ μ μν  μ μλ€.

### CSS κ΅¬μ±μμ
![Rule Set](https://mdn.mozillademos.org/files/9461/css-declaration-small.png)
```css
h1 {
  color: red;
  font-size: 12px;
}

p {
  color: black;
}
```
- **μ€νμΌ κ·μΉ(Style Rule Set)**
  `μ νμ { νλ μ΄μμ μ μΈ }`μΌλ‘ κ΅¬μ±λ μ€νμΌ κ·μΉ νΉμ κ·μΉμ μ§ν©
- **μ νμ(Selector)**
  μ€νμΌμ μ§μ ν  νΉμ  HTML μμλ₯Ό μ ν.
  λ€λ§, νκ·Έ(Tag)λ₯Ό κΈ°λ°μΌλ‘ μ ννλ κ²½μ° ν΄λΉ νκ·Έ(Tag)λ₯Ό κ°μ§ μμ(Element)λ€μ μ§ν©μ μ νν  μ μλ€.
- **μ μΈ λΈλ‘(Declaration Block)**
  μ€κ΄νΈ(`{ }`)λ‘ κ΅¬λΆνκ³ , λ΄λΆμ μ μΈλ€μ μμ±νλ€.
- **μ μΈ(Declaration)**
  "`μμ±(property): κ°(value);`" μ ννλ‘ μμ±λλ€.

### CSSμ μ£Όμ(Comments)
```css
/* ν μ€ μ£Όμ */

/* 
μ¬λ¬ κ°μ§μ
μ€λ‘
μ΄λ£¨μ΄μ§
μ£Όμ
*/
```
- `/* */`λ₯Ό νμ©ν΄ μ£Όμ μ²λ¦¬λ₯Ό ν  μ μλ€.
- CSSλ κ°νμ λ¬΄μνκ² λλ€.

### CSSλ₯Ό μ μ©νλ λ°©λ²
1. **λ΄λΆ μ€νμΌ(Embedded)**
   `<style>` νκ·Έλ₯Ό νμ©ν΄ HTML λ¬Έμ λ΄λΆμ `<head>`μ μμ±ν΄ CSSλ₯Ό μ μ©νλ€.
   ```HTML
   <head>
     <style>
       h1 {
         color: red;
         font-size: 1.25rem;
       }
     </style>
   </head>
   ```
2. **μΈλΌμΈ μ€νμΌ(Inline)**
   νΉμ  μμμ μ€νμΌμ μ μ©νκΈ° μν΄ `style` μμ±(Attribute)μ νμ©νμ¬ CSSλ₯Ό μ μ©νλ€.
   ```HTML
   <body>
     <h1 style="color: red; font-size: 1.25rem;">Title</h1>
   </body>
   ```
3. **μΈλΆ μ€νμΌ(External)**
   μΈλΆ CSS νμΌμ `<head>` νκ·Έ λ΄λΆμ `<link>` νκ·Έλ₯Ό ν΅ν΄ μ°κ²°ν΄ CSSλ₯Ό μ μ©νλ€.
   ```HTML
   <head>
     <link rel="stylesheet" href="style/main.css">
   </head>
   ```
   ```css
   h1 {
     color: red;
     font-size: 1.25rem;
   }
   ```

### Cascading μμΉ
1. μ€νμΌ μ μ© μ°μ μμ
   - λμΌν μ€νμΌμ΄λΌλ μ μΈλ κ³³μ λ°λΌ μ°μ μμκ° κ²°μ λλ€.
       * λΈλΌμ°μ μ μν΄ μ μλ μ€νμΌ < κ°λ°μκ° μ μΈν μ€νμΌ < μ¬μ©μκ° κ΅¬μ±ν μ€νμΌ
   - μ μ© λ²μκ° μ μ μλ‘ μ°μ μλλ€.
       * Tag μ€νμΌ < Class μ€νμΌ < Id μ€νμΌ < Inline μ€νμΌ
   - μμ€ μ½λμ μμκ° λ€μ μμΌλ©΄ λ?μ΄ μ΄λ€.

2. μ€νμΌ μμ
   - λΆλͺ¨ μμμ μλ μ€νμΌ μμ±λ€μ΄ μμ μμμ μ λ¬λλ€.
       * μμ μμμμ ν΄λΉ μ€νμΌ μμ±μ μ¬μ μνλ κ²½μ°, λΆλͺ¨μ μ€νμΌμ λ?μ΄ μ΄λ€.
   - μμμ΄ λμ§ μλ `background-color`, `background` λ±μ μμ±(property)λ μλ€.

---
## π§± CSS Selector
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Selectors) / [MDN-learn](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Selectors)
- CSS Selectorλ₯Ό νμ©ν΄ CSS κ·μΉμ μ μ©ν  μΉ νμ΄μ§μ HTML μμλ₯Ό μ ννλ€.

- **Type Selector**(νκ·Έ μ νμ, μ ν μ νμ, μμ μ νμ)
  ##### elementName
  ν΄λΉ **νκ·Έμ μ΄λ¦**μ κ°μ§ μμλ₯Ό λͺ¨λ μ ννλ€.
  ```css
  h2 {
    color: purple;
  }

  h3 {
    color: red;
  }
  ```
  ν΄λΉ μμκ° νλλΏμ΄λΌκ³  Type Selectorλ₯Ό μ¬μ©νλ κ²μ κΆμ₯λμ§ μλλ€.
  μ¦, νΉμ  μμ νΉμ μμμ μ§ν©μ μ ννκΈ° μν΄μ μ¬μ©νλ€κΈ° λ³΄λ€λ μ μ²΄ μΉ νμ΄μ§μμ μΌκ΄λκ² μ μ©ν΄μΌ ν  μ€νμΌμ μ€μ ν  λ μ¬μ©νλ€.

- **ID Selector**
  ##### #idName
  **`id` μμ±(Attribute)**μ λ°λΌ μμλ₯Ό μ ννλ€.
  λ¬Έμ λ΄μλ μ£Όμ΄μ§ `id` κ°μ κ°μ§ μμκ° λ¨ νλλ§ μ‘΄μ¬ν΄μΌ νλ€.
  ```css
  #welcome-title {
    color: red;
  }
  ```

- **Class Selector**
  ##### .className
  ν΄λΉ **`class` μμ±(Attribute) κ°**μ κ°μ§ λͺ¨λ  μμλ₯Ό μ ννλ€.
  `class` μμ±μ κ²½μ° νλ μ΄μμ κ°μ κ°μ§ μ μλλ°, μ΄λ₯Ό νμ©ν΄ μ¬λ¬ `class`μ λν΄ μ€νμΌμ΄ μ μ©λ κ²½μ° Cascading μμΉμ μν΄ λ€μ μμ±λ μ€νμΌμ΄ μ μ©λλ€.
  ```css
  .blue {
    color: blue;
  }
  
  .white {
    color: gray;
  }
  ```

- **Attribute Selector**
  ##### [attr], [attr=value], [attr~=value], [attr^=value], [attr$=value], [attr*=value]
  * νΉμ  μμ±μ κ°μ§ μμλ₯Ό μ ννκ±°λ, νΉμ  μμ±μ κ°μ κ°μ§ μμλ₯Ό λͺ¨λ μ νν  μ μλ€.
  * λμ²΄λ‘ `<input>` νκ·Έμ `type` μμ±μμ μμ£Ό νμ©νλ€. μ¦, λ κ΅¬μ²΄μ μΌλ‘ μμλ₯Ό μ νν  μ μλ€.
  * νΉμλ¬Έμλ₯Ό νμ©ν΄ ν΄λΉ μμ±μ΄ μμνλ κ°(`^`), λλλ κ°(`$`), ν¬ν¨νλ κ°(`*`)μ κΈ°μ€μΌλ‘ μμλ₯Ό μ νν  μλ μλ€.
  ```css
  a[target] {
    color: hotpink;
  }

  a[href="https://example.org"] {
    color: tomato;
  }

  a[href^="https://"] {
    font-style: italic;
  }

  a[href$=".com"] {
    font-weight: bold;
  }

  a[href*="examples"] {
    color: deeppink;
  }
  ```

- **Pseudo-Class Selector**(κ°μ(μμ¬) ν΄λμ€ μ νμ)
  ##### selector:pseudo-class-selector
  μ νν μμκ° νΉλ³ν μνμ¬μΌ λ§μ‘±νλ κ²½μ°μ μ€νμΌμ μ μ©ν  μ μλ€. μ¦, μ€μ λ‘ μ‘΄μ¬νμ§ μλ μνλ₯Ό κ°μμ ν΄λμ€λ‘ λ§λ€μ΄ ν΄λΉ ν΄λμ€λ₯Ό μ ννλ€.
  * `:first-child`: νμ  μμ μ€ μ²« λ²μ§Έ μμ
    ```css
    .player:first-child {
      color:blueviolet;
    }
    ```
    - λ€λ§, ν΄λμ€ μ νμμ ν¨κ» νμ©νλ κ²½μ°μ, ν΄λΉ ν΄λμ€λ₯Ό κ°μ§ μμμ λΆλͺ¨ μμ μ€ μ²« λ²μ§Έ μμ μμλ₯Ό μ ννλλ°, μ΄λ ν΄λΉ μμκ° ν΄λΉ ν΄λμ€λ₯Ό κ°μ§κ³  μμ§ μμ κ²½μ°, μ€νμΌμ΄ μ μ©λμ§ μλλ€.
  * `:last-child`: νμ  μμ μ€ λ§μ§λ§ μμ
    ```css
    .player:last-child {
      color:gold;
    }
    ```
  * `:nth-child(n)`: νμ  μμ μ€ nλ²μ§Έ μμ
    - ν¨μν νκΈ°(μ: `2n+1`, `2n`), `even`, `odd`λ₯Ό νμ©ν΄ νμ, μ§μ λ²μ§Έ μμλ μ¬μ©μ μ§μ  ν¨ν΄μ λ§μ‘±ν μΈλ±μ€λ₯Ό κ°μ§λ μμλ₯Ό μ νν  μ μλ€.
    ```css
    .player:nth-child(3) {
      font-style: italic;
    }

    .player:nth-child(2n) {
      font-weight: bold;
    }

    .player:nth-child(odd) {
      text-decoration: underline;
    }
    ```
  * `:first-of-type`: νμ  μμ μ€ μμ κ³Ό μ νμ΄ μΌμΉνλ μ²« λ²μ§Έ μμ
    ```css
    .sportList p:first-of-type {
      color: aqua;
    }
    ```
    - λ€λ§, Class Selectorμ κ°μ ν΄λμ€ μ νμλ₯Ό νμ©νλ κ²½μ°μλ, ν΄λΉ ν΄λμ€λ₯Ό λͺ¨λ νμν ν μ¬λ¬ μμκ° μ‘΄μ¬νλ κ²½μ°μ κ° μμμ μ²« λ²μ§Έ μμμ λͺ¨λ μ€νμΌμ μ μ©νλ€.
  * `:last-of-type`: νμ  μμ μ€ μμ κ³Ό μ νμ΄ μΌμΉνλ λ§μ§λ§ μμ
    ```css
    .sportList div:last-of-type {
      color: red;
    }
    ```
  * `:nth-of-type(n)`: νμ  μμ μ€ μμ κ³Ό μ νμ΄ μΌμΉνλ n λ²μ§Έ μμ
    - ν¨μν νκΈ°(μ: `2n+1`, `2n`), `even`, `odd`λ₯Ό νμ©ν΄ νμ, μ§μ λ²μ§Έ μμλ μ¬μ©μ μ§μ  ν¨ν΄μ λ§μ‘±ν μΈλ±μ€λ₯Ό κ°μ§λ μμλ₯Ό μ νν  μ μλ€.
    ```css
    .sportList p:nth-of-type(odd) {
      color: greenyellow;
    }
    ```
  * `:not()`: μΈμλ‘ νμλμ§ μμ μμλ₯Ό μ ν
    `selector1:not(selector2)`μμ selector1 μ€μ selector2κ° μλ λλ¨Έμ§ μμλ₯Ό μ ννλ€.
    ```css
    input:not([type=password]) {
      background-color: grey;
    }

    input:not(.name) {
      background-color: red;
    }
    ```
  * `:link`: λμ  κ°μ ν΄λμ€ μ νμλ‘, μμ§ λ°©λ¬Ένμ§ μμ μμλ₯Ό μ ν.
    - `href` μμ±(Attribute)μ κ°μ§ `<a>`, `<area>`, `<link>` μ€ λ°©λ¬Ένμ§ μμ λͺ¨λ  μμλ₯Ό μ ννλ€.
    ```css
    a:link {
      color:gold;
    }
    ```
  * `:visited`: λμ  κ°μ ν΄λμ€ μ νμλ‘, μ΄λ―Έ λ°©λ¬Έν μμλ₯Ό μ ν.
    - `href` μμ±(Attribute)μ κ°μ§ `<a>`, `<area>`, `<link>` μ€ λ°©λ¬Έν λͺ¨λ  μμλ₯Ό μ ννλ€.
    ```css
    a:visited {
      color:gold;
    }
    ```
  * `:hover`: μ¬μ©μκ° ν¬μΈν μ₯μΉλ₯Ό μ¬μ©ν΄ μνΈμμ© μ€μΈ μμλ₯Ό μ ννλλ°, λ³΄ν΅ μ¬μ©μμ λ§μ°μ€ ν¬μΈν° μ»€μκ° μμ μμ μ¬λΌκ° μλ κ²½μ°μ ν΄λΉ μμλ₯Ό μ ννλ€.
    - μ°Έκ³ λ‘, `:link`, `:visited`, `:hover`, `:active` μμΌλ‘ μμ±ν΄μΌ νλ€.
    - λ³΄ν΅ `<button>`, `<link>`, `<menu>`, `<input>`μμ μμ£Ό μ¬μ©λλ€.
    ```css
    input[type=button]:hover {
      background-color: lime;
      border: none;
    }
    ```
  * `:active`: μ¬μ©μκ° νμ±νν μμλ₯Ό μ ννλλ°, λ§μ°μ€λ₯Ό μ¬μ©νλ κ²½μ°, λ³΄ν΅ λ§μ°μ€ λ²νΌμ λλ₯΄λ μμ λΆν° λΌλ μμ κΉμ§λ₯Ό μλ―Ένλ€.
    ```css
    input[type=button]:active {
      background-color: red;
      border: none;
    }
    ```
  * `:focus`: μμμ μλ ₯ μΉΈ λ±μ΄ ν¬μ»€μ€λ₯Ό λ°μ κ²½μ°μ μ ννλλ°, λ³΄ν΅ μ¬μ©μκ° μμλ₯Ό ν΄λ¦­, `Tab`ν κ²½μ° ν΄λΉ μμλ₯Ό μ ννλ€.
    ```css
    input[type=text]:focus {
      background-color: lime;
    }
    ```
  * `:enabled`: μ ν, ν΄λ¦­, μλ ₯μ νκ±°λ, ν¬μ»€μ€ λ°μ μ μλ μμκ° νμ±νλ κ²½μ°μ ν΄λΉ μμλ₯Ό μ ννλ€.
    ```css
    input[type=text]:enabled {
      background-color: yellow;
    }
    ```
  * `:disabled`: μ ν, ν΄λ¦­, μλ ₯μ νκ±°λ, ν¬μ»€μ€λ₯Ό λ°μ μ μλ μμκ° λΉνμ±ν λ κ²½μ° ν΄λΉ μμλ₯Ό μ ννλ€.
    ```css
    input[type=text]:disabled {
      background-color: skyblue;
    }
    ```
  * `:checked`: `<input type="radio">`, `<input type="checkbox">`, `<option>` λ±μ μ ννμ¬ μ²΄ν¬λ κ²½μ°μ ν΄λΉ μμλ₯Ό μ ννλ€.
    ```css
    input[type=radio]:checked {
      outline: 3px solid red;
    }

    input[type=checkbox]:checked {
      outline: 3px solid teal;
    }
    ```

- **Pseudo-Element Selector**(κ°μ(μμ¬) μμ μ νμ)
  μ€μ λ‘ μ‘΄μ¬νμ§ μλ κ°μμ μμλ₯Ό λ§λ€μ΄ ν΄λΉ μμλ₯Ό μ ννλ€.
  κ°μ μμλ₯Ό νμ©νλ €λ©΄, `content` μμ±(property)λ₯Ό μ§μ ν΄μΌ νλ€. μ΄λ `content`μ λ΄μ©μ λ³΅μ¬λ μ νμ΄ λμ§ μλλ€.
  ##### selector::pseudo-element-selector
  * `::before`: μ νν μμ μμ κ°μμ μΈλΌμΈ μμλ₯Ό μμ±νλ€.
    ```css
    .color::before { 
      content: "color ";
      color: darkorange;
    }
    ```
  * `::after`: μ νν μμ λ€μ κ°μμ μΈλΌμΈ μμλ₯Ό μμ±νλ€.
    ```css
    .color::after { 
      content: " μ";
      color: olive;
    }
    ```
  * `::first-letter`: λΈλ‘ λ λ²¨ μμμ μ²« λ²μ§Έ μ€μ μ²« λ²μ§Έ λ¬Έμλ₯Ό μ νν΄ μ€νμΌμ μ μ©νλ€.
    - μ΄ κ²½μ°, κ°μ μμ μ νμ `::before`μ μμ± `content`λ‘ κ°μμ μΈλΌμΈ μμλ₯Ό μΆκ°νλ κ²½μ° ν΄λΉ μ²« λ²μ§Έ λ¬Έμκ° μ νλλ€.
    ```css
    .lorem::first-letter {
      font-size: 1.5rem;
    }
    ```
  * `::first-line`: λΈλ‘ λ λ²¨ μμμ μ²« λ²μ§Έ μ€μ μ ννμ¬ μ€νμΌμ μ μ©νλ€.
    - μ΄λ λΈλΌμ°μ  μ°½μ ν¬κΈ°, νμ€νΈμ κΈκΌ΄, ν¬κΈ° λ±μ μν₯μ λ°λλ€.
    ```css
    .lorem::first-line {
      font-size: 1.5rem;
      color: red;
    }
    ```
  * `::selection`: μ¬μ©μκ° μ νν μμ­μ λν΄ μ€νμΌμ μ€μ ν  μ μλ€.
    ```css
    .lorem::selection {
      font-size: 1.5rem;
      color: white;
      background-color: seagreen;
    }
    ```

### Selector Combination
- νλμ μ νμλ§ μ¬μ©ν  μ μμ§λ§, μ¬λ¬ μ νμλ₯Ό κ²°ν©ν΄ κ΅¬μ²΄μ μΌλ‘ μμλ₯Ό μ νν  μ μλ€.
#### μμ μμ μ ν
- κ³΅λ°±(`" "`)μ νμ©ν΄ μμ μμλ₯Ό μ νν  μ μλ€.
  ```css
  ul li:last-of-type {
    color: aqua;
  }
  ```

#### μμ μμ μ ν
- `>`λ₯Ό νμ©ν΄ μμ μμλ₯Ό μ νν  μ μλ€.
  ```css
  ol > li:last-of-type {
    color: red;
  }
  ```

#### νμ  μμ μ ν
- `~`μ νμ©ν΄ μΌλ°μ μΈ νν νμ  μμ λͺ¨λλ₯Ό μ νν  μ μλ€.
  ```css
  code ~ p {
    color: darkorange;
  }
  ```
- `+`λ₯Ό νμ©ν΄ λ°λ‘ μΈμ ν νν νμ  μμλ₯Ό μ νν  μ μλ€.
  ```css
  code + p {
    color: blue;
  }
  ```

#### μ νμμ κ·Έλ£Ήν
- λμΌν μ€νμΌμ μ μ©ν  μ¬λ¬ μ νμλ `,`λ₯Ό νμ©ν΄ κ·Έλ£Ήννμ¬ λͺ¨λ μ νν  μ μλ€.
  ```css
  p, div, code {
    font-weight: bold;
  }
  ```

### Universal Selector
- `*`λ₯Ό νμ©ν΄ λͺ¨λ  μμλ₯Ό μ νν  μ μκ³ , λ€λ₯Έ μ νμμ ν¨κ» μ¬μ©ν  μ μλ€.
  ```css
  * {
    font-size: 20px;
    text-decoration: none;
  }

  *.red {
    color: red;
  }

  p + * {
    color: blue;
  }

  div > * {
    font-weight: bold;
  }
  ```

### μμ μ μ΄νκΈ°
- μμ μμμκ² μ€νμΌμ΄ μ§μ λ κ²½μ°μλ ν΄λΉ μ€νμΌμ νμ©νμ§λ§, κ·Έλ μ§ μμ κ²½μ°μλ λΆλͺ¨ μμμ μμμ΄ κ°λ₯ν μ€νμΌμΈ κ²½μ°μλ μμλ°μ νμ©νλ€.
  ```css
  .parent {
    color: blue;
  }

  .child2 {
    color: red;
  }
  ```
- `initial`
  * μμ μμμ κ²½μ° λΆλͺ¨ μμμ μ€νμΌμ μμλ°μ§ μμΌλ €λ©΄, ν΄λΉ μμ±(property)μ κ°(value)μΌλ‘ `initial`μ μμ±νλ©΄ λλ€.
  * λ§μ½ λͺ¨λ  μμ±μ μμλ°μ§ μμΌλ €λ©΄, `all: initial;` μ μΈμ νμ©νλ©΄ λλ€.(λΆλͺ¨ μμλΆν° κ·Έ μ λͺ¨λ  μμ μμμ μμ±μ μμλ°μ§ μλλ€.)
  ```css
  .parent {
    font-size: 10px;
  }

  .child2 {
    font-size: initial;
  }
  ```
- `inherit`
  * μμ μμμ κ²½μ° λΆλͺ¨ μμμ μ€νμΌμ λ°λμ μμλ°μΌλ €λ©΄, ν΄λΉ μμ±(property)μ κ°(value)μΌλ‘ `inherit`μ μμ±νλ©΄ λλ€.
  * λ§μ½ λͺ¨λ  μμ±μ μμλ°μΌλ©΄, `all: inherit;` μ μΈμ νμ©νλ©΄ λλ€.
  ```css
  .parent {
    font-size: 10px;
  }

  .child2 {
    font-size: inherit;
  }
  ```
- `unset`
  * λΆλͺ¨ μμλ‘λΆν° μμ λ°μ κ°μ΄ μ‘΄μ¬νλ κ²½μ°μλ, `inherit`μΌλ‘ λμνλ€.
  * λΆλͺ¨ μμλ‘λΆν° μμ λ°μ κ°μ΄ μ‘΄μ¬νμ§ μλ κ²½μ°μλ, `initial`λ‘ λμνλ€.
  * λ§μ½ λͺ¨λ  μμ±μ μ€μ νκ³ μ νλ€λ©΄, `all: unset;` μ μΈμ νμ©νλ©΄ λλ€.
  ```css
  .parent {
    font-size: 10px;
  }

  .child2 {
    all: unset;
  }
  ```

---
## π§± μ€νμΌ μ°μ μμ
νΉμ  μμμ νλμ μμ±μ λν΄ μ¬λ¬κ°μ§μ μ μΈμ ν κ²½μ°, μ€νμΌ μ°μ μμμ λ°λΌ νλμ μ μΈλ§μ μ μ©νλ€.
- **μ μΈλ μμΉ**
  λμΌν μ€νμΌμ΄λΌλ, ν΄λΉ HTML λ¬Έμμμ μ μΈλ μμΉμ λ°λΌ μ°μ μμκ° λ¬λΌμ§λ€.(μ½λλ μμμ μλλ‘ ν΄μνκΈ° λλ¬Έ.)
  * λΈλΌμ°μ  μ μ μ€νμΌ < κ°λ°μκ° μ μΈν μ€νμΌ < μ¬μ©μκ° κ΅¬μ±ν μ€νμΌ
- **μ μ© λ²μ(λͺμλ)**
  ν΄λΉ μ€νμΌμ μ μ© λ²μκ° μ’μμλ‘ λͺμλκ° λμμ Έμ μ°μ μμκ° λμμ§λ€.
  * inherited μ€νμΌ < * μ€νμΌ < Type/Tag μ€νμΌ < Class/Attribute/Pseudo-Class μ€νμΌ < Id μ€νμΌ < Inline μ€νμΌ < `!important` μ€νμΌ
  ```css
  div {
    color: purple !important;
  }
  ```
- **μ½λμ μμ**
  λ€μ μμ±λ μ½λμ μ€νμΌμ΄ μ°μ μμκ° λλ€.

---
## π§± Font Property
### `color`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/color)
- μμ(Element)μ νμ€νΈ λ° κ·Έ μ₯μμ νμ¬ μμμ μ€μ νλ μμ±(property).
  ```css
  p.font-property {
    color:salmon;
  }
  ```
- Global valueμΈ `inherit`, `initial`, `unset`λ μ¬μ©ν  μ μλ€.(μμ κ°λ₯)

### `font-size`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/font-size)
- μμ(Element)μ νμ€νΈμ ν¬κΈ°λ₯Ό λ³κ²½νλ μμ±(property).
- λΈλΌμ°μ λ§λ€ λ€λ₯΄μ§λ§, λ³΄ν΅ `16px`μ΄ κΈ°λ³Έκ°μΌλ‘ μ€μ λμ΄ μλ€.
  ```css
  p.font-property {
    font-size: 24px;
  }
  ```
- ν¬κΈ° κ°μΌλ‘, `em`, `rem`, `x-size`, `smaller`, `larger`, `px`, `%` λ±μ νμ©ν  μ μλ€.([μ°Έκ³ ](#Unit))
- Global valueμΈ `inherit`, `initial`, `unset`λ μ¬μ©ν  μ μλ€.(μμ κ°λ₯)

### `font-style`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style)
- μμ(Element)μ font-familyμ μΌλ°, κΈ°μΈμκΌ΄ λ±μ κΈκΌ΄ μ€νμΌμ μ€μ νλ μμ±(property).
- `oblique`(νκΈ°μ²΄), `italic`(κΈ°μΈμκΌ΄), `normal`(κΈ°λ³Έκ°) λ±μ κ°μ κ°μ§λ€.
- κ°μ‘°μ μλ―Έλ₯Ό λ΄μ κΈ°μΈμκΌ΄μ μ¬μ©νλ κ²½μ°μλ HTMLμ `<em>` νκ·Έ(Tag)λ₯Ό μ¬μ©ν΄μΌ νλ€.
  ```css
  p.font-property {
    font-style: italic;
  }
  ```
- Global valueμΈ `inherit`, `initial`, `unset`λ μ¬μ©ν  μ μλ€.(μμ κ°λ₯)

### `font-weight`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/font-weight)
- μμ(Element)μ νμ€νΈμ κ°μ€μΉλ κ΅΅κΈ°λ₯Ό μ€μ νλ μμ±(property).
- `normal`(=`400`, κΈ°λ³Έκ°), `bold`(=`700`), `lighter`, `bolder` λ±μ ν€μλ κ°κ³Ό `100`, `200`, ... , `900`μ μ«μ κ°μ κ°μ§λ€.
- κΈκΌ΄μ λ°λΌ μ§μνλ κ°μ€μΉ κ°μ΄ λ€λ₯Ό μ μλ€.
- κ°μ‘°μ μλ―Έλ₯Ό λ΄μ κ΅΅μ κΈμ¨μ²΄λ₯Ό μ¬μ©νλ κ²½μ°μλ HTMLμ `<strong>` νκ·Έ(Tag)λ₯Ό μ¬μ©ν΄μΌ νλ€.
  ```css
  p.font-property {
    font-weight: bold;
  }
  ```
- Global valueμΈ `inherit`, `initial`, `unset`λ μ¬μ©ν  μ μλ€.(μμ κ°λ₯)

### `font-family`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/font-family)
- μμ(Element)μ μ°μ  μμκ° μ§μ λ `font-family`μ `generic-family`λ₯Ό μ§μ νλ μμ±(property).
- `generic-family`: μΌλ° κΈκΌ΄μ μ§μ λ κΈκΌ΄μ΄ μλ κ²½μ° λμ²΄ μ¬μ©ν  κΈκΌ΄μ μλ―Ένλ€.(`serif`, `sans-serif`, `monospace`, `cursive`, `system-ui` λ±μ΄ μλ€.)
- `,`λ₯Ό νμ©ν΄ λμ²΄λ  κ°μ μΆκ°λ‘ μ§μ ν  μ μλ€.
  ```css
  .serif {
    font-family: Times, Times New Roman, Georgia, serif;
  }
  .sansserif {
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
  .monospace {
    font-family: Lucida Console, Courier, monospace;
  }
  .cursive {
    font-family: cursive;
  }
  .fantasy {
    font-family: fantasy;
  }
  ```
- Global valueμΈ `inherit`, `initial`, `unset`λ μ¬μ©ν  μ μλ€.(μμ κ°λ₯)
- [Google Font](https://fonts.google.com/)λ₯Ό νμ©ν΄ μΉ fontλ₯Ό νμ©ν  μ μλ€.

### `line-height`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)
- μμ(Element)μ νμ€νΈ ν μ¬μ΄μ κ±°λ¦¬λ₯Ό μ€μ νλ μμ±(property).
- Block Level Elementμ κ²½μ° λ΄λΆμ line-boxμ μ΅μ λμ΄λ₯Ό μ€μ νκ³ , Inline Elementμ κ²½μ° 
- κ° font-familyμ λ°λΌ κΈ°λ³Έκ°μΈ `normal`μ΄ `1.0` ~ `1.2`λ°°λ‘ μ°¨μ΄κ° μλ€.
- `normal`(κΈ°λ³Έκ°)κ³Ό κ°μ ν€μλ κ°κ³Ό `3.5`μ κ°μ΄ μ«μλ₯Ό νμ©ν΄ ν΄λΉ νμ€νΈμ ν¬κΈ°μ λΉλ‘ν κ°μ μμ±ν  μ μκ³ , μΆκ°μ μΌλ‘ `em`, `rem`, `%` λ¨μλ μ¬μ©ν  μ μλ€.
  ```css
  line-height: normal;
  line-height: 3.5;
  line-height: 3em;
  line-height: 34%;
  ```
- Global valueμΈ `inherit`, `initial`, `unset`λ μ¬μ©ν  μ μλ€.(μμ κ°λ₯)

### `font` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/font)
- `font-style`, `font-variant`, `font-weight`, `font-size`, `line-height`, `font-family`μ λ¨μΆ μμ±(Shorthand property).
  * λ€λ§, `font-size`μ `font-family`μ κ°μ λ°λμ ν¬ν¨ν΄μΌ νλ€.
  * `font-style`, `font-variant`, `font-weight`λ `font-size`μ μμ μμ±ν΄μΌ νλ€.
  * `line-height`λ `font-size` λ°λ‘ λ€μμ μμ±νλ©° `/`λ‘ κ΅¬λΆν΄μΌ νλ€.
  * `font-family`λ λ§μ§λ§μΌλ‘ μμ±ν΄μΌ νλ€.
- λ¨μΆ μμ±μ νΉμ± μ, μλ΅ν μμ±μ μ΄κΈ°κ°μΌλ‘ μ€μ νλ©°, μ΄ κ³Όμ μμ μ΄νμ ν΄λΉ μμ±μ μ€μ ν΄ λ?μ΄ μΈ μλ μλ€.(μ°Έκ³ λ‘, `font` λ¨μΆ μμ±μΌλ‘ μ€μ ν  μ μλ `font-stretch`, `font-size-adjust`, `font-kerning`μ κ°λ μ΄κΈ°κ°μΌλ‘ μ€μ λλ€.)
  ```css
  p.font-shorthand-property {
    font: italic bold 24px/2.5 Times, Times New Roman, Georgia, serif;
  }
  ```
- Global valueμΈ `inherit`, `initial`, `unset`λ μ¬μ©ν  μ μλ€.(μμ κ°λ₯)

### `letter-spacing`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/letter-spacing)
- κΈμ μ¬μ΄μ κ°κ²©μ μ‘°μ νλ μμ±(property).
- κΈκΌ΄μ λ°λΌ μ΅μ  κ°κ²©μ΄ μ΄λ―Έ μ ν΄μ§ κ°μ΄ μλ€.
- `normal`, `px`, `em`, `rem` λ±μ μ¬μ©ν  μ μλ€.
- μ€νμΌλ§ λͺ©μ μΌλ‘ μ§λμΉκ² μ‘°μ νμ§ μλ κ²μ΄ κ°λμ±μ΄ μ’κΈ° λλ¬Έμ μΉ μ κ·Όμ± μΈ‘λ©΄μμ λ³κ²½νμ§ μλ κ²μ΄ μ’λ€.
    ```css
  p.font-property {
    letter-spacing: 15px;
  }
  ```

### `word-spacing`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/word-spacing)
- λ¨μ΄ νΉμ νκ·Έ(Tag) μ¬μ΄μ κ°κ²©μ μ‘°μ νλ μμ±(property).
- κΈκΌ΄μ λ°λΌ μ΅μ  κ°κ²©μ΄ μ΄λ―Έ μ ν΄μ§ κ°μ΄ μλ€.
- `normal`, `px`, `%`, `em`, `rem` λ±μ μ¬μ©ν  μ μλ€.
- μ€νμΌλ§ λͺ©μ μΌλ‘ μ§λμΉκ² μ‘°μ νμ§ μλ κ²μ΄ κ°λμ±μ΄ μ’κΈ° λλ¬Έμ μΉ μ κ·Όμ± μΈ‘λ©΄μμ λ³κ²½νμ§ μλ κ²μ΄ μ’λ€.
  ```css
  p.font-property {
    word-spacing: 15px;
  }
  ```
- Global valueμΈ `inherit`, `initial`, `unset`λ μ¬μ©ν  μ μλ€.(μμ κ°λ₯)

### `text-align`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/text-align)
- Block Level Elementλ νμ μΉΈμ μν μ λ ¬μ μ€μ νλ μμ±(property).
- `right`, `left`, `center`, `justify`, `start`, `end` λ± ν€μλ κ°μ μμ±νμ¬ μν μ λ ¬μ μ€μ ν  μ μλ€.
- λ€λ§, Block Level Elementμ΄μ΄μΌ μν μ λ ¬μ μ€μ ν  μ μλ€. Inline Elementμ κ²½μ°, Block Containerλ₯Ό μ€μ νκ³ , μν μ λ ¬μ μ μΈν΄μΌ νλ€.
  ```css
  p.text-align {
    text-align: center;
  }
  ```
- Global valueμΈ `inherit`, `initial`, `unset`λ μ¬μ©ν  μ μλ€.(μμ κ°λ₯)
  
### `text-indent`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent)
- νμ€νΈμ λ€μ¬μ°κΈ°μ κΈΈμ΄λ₯Ό μ€μ νλ μμ±(property).
- Block Level Elementμμλ§ μ¬μ©ν  μ μλ€.
- `px`, `%`, `em` λ±μΌλ‘ λ€μ¬μ°κΈ°μ κΈΈμ΄λ₯Ό μ€μ ν  μ μλ€.
  ```css
    p.text-indent {
      text-indent: 3px;
    }
  ```
- Global valueμΈ `inherit`, `initial`, `unset`λ μ¬μ©ν  μ μλ€.(μμ κ°λ₯)

### `text-decoration` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/text-decoration)
- νμ€νΈμ μ₯μ(μ )μ μ§μ νλ μμ±(property).
- `text-decoration-line`(μ μ μ’λ₯), `text-decoration-color`(μ μ μ), `text-decoration-style`(μ μ μ€νμΌ), `text-decoration-thickness`(μ μ λκ»)μ λ¨μΆ μμ±.
- `text-decoration-line`μ λ°λμ μμ±ν΄μΌ νλ€.
- κΈ°λ³Έμ μΌλ‘ νμ€νΈ μμκ³Ό λμΌν μμμΌλ‘ μ€μ λμ§λ§, `text-decoration-color`λ₯Ό ν΅ν΄ λ³κ²½ν  μ μλ€.
- μμλ κ΄κ³ μλ€.
  ```css
  p.text-decoration {
    text-decoration: solid underline purple 4px;
  }
  ```
#### `text-decoration-line`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line)
- νμ€νΈ μ₯μμ μ’λ₯λ₯Ό μ€μ νλ μμ±(property).
- `none`(κΈ°λ³Έκ°), `underline`, `overline`, `line-through`(μ·¨μμ ) λ± ν€μλ κ°μ νμ©νλ€.
- λμμ μ¬λ¬ κ°μ§ κ°μ κ³΅λ°±μΌλ‘ κ΅¬λΆνμ¬ μμ±νλ©΄, μ¬λ¬ μ μ μ¬μ©ν  μ μλ€.
  ```css
  p.text-decoration {
    text-decoration-line: underline line-through;
  }
  ```

#### `text-decoration-style`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line)
- νμ€νΈ μ₯μμ μ€νμΌμ μ€μ νλ μμ±(property).
- `solid`(κΈ°λ³Έκ°), `double`, `dotted`, `dashed`, `wavy` λ± ν€μλ κ°μ νμ©νλ€.
  ```css
  p.text-decoration {
    text-decoration-style: wavy;
  }
  ```

#### `text-decoration-thickness`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness)
- νμ€νΈ μ₯μμ κ΅΅κΈ°λ₯Ό μ€μ νλ μμ±(property).
- `auto`, `from-font`, `px`, `em`, `rem`, `%` λ±μΌλ‘ μ€μ ν  μ μλ€.
  ```css
  p.text-decoration {
    text-decoration-thickness: 3px;
  }
  ```

### `word-break`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/word-break)
- νμ€νΈκ° μμ μ μ»¨νμΈ  λ°μ€ μΈλΆλ‘ λμ³ νλ₯΄λ κ²½μ°, μ€μ λ°κΏ μ§ μ¬λΆλ₯Ό μ§μ νλ μμ±(property).
- `normal`, `break-all`(μλ¬Έ, μ»¨νμΈ  λ°μ€ λλΉλ₯Ό λμΌλ©΄ μ€ λ°κΏ), `keep-all`(νκΈ, μ»¨νμΈ  λ°μ€ λλΉλ₯Ό λμ΄λ μ€ λ°κΎΈμ§ μμ, κ³΅λ°±μ΄ μλ κ²½μ° μ€ λ°κΏ) κ°μΌλ‘ μ€μ ν  μ μλ€.
  ```css
  p.word-break[lang="en"] {
    word-break: keep-all;
  }

  p.word-break[lang="ko"] {
    word-break: keep-all;
  }
  ```
- Global valueμΈ `inherit`, `initial`, `unset`λ μ¬μ©ν  μ μλ€.(μμ κ°λ₯)

### `text-transform`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform)
- νμ€νΈλ₯Ό λλ¬Έμλ‘ λ³κ²½νλ λ°©λ²μ μ§μ νλ μμ±(property).
- μμ΄, ν°ν€μ΄, λμΌμ΄ λ± νΉμ  μΈμ΄μμλ§ μ¬μ©ν  μ μλ€.
- `capitalize`(λ¨μ΄μ μ²« λ¬Έμ λλ¬Έμλ‘ λ³κ²½), `none`, `lowercase`(λͺ¨λ μλ¬Έμλ‘ λ³κ²½), `uppercase`(λͺ¨λ λλ¬Έμλ‘ λ³κ²½) λ±μ κ°μΌλ‘ μ€μ ν  μ μλ€.
  ```css
  p.text-transform {
    text-transform: capitalize;
  }
  ```
- Global valueμΈ `inherit`, `initial`, `unset`λ μ¬μ©ν  μ μλ€.(μμ κ°λ₯)

---
---
## π§± Unit
[MDN](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Values_and_units)

### Number
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/number)
- μ«μ, μ¦ μ μ λλ μ€μλ₯Ό μλ―Ένλ€.
- λλ€μμ νκΈ°λ²μ΄ μ ν¨νλ©°, μμμ μ μΌμ μλ¦¬μκ° 0μΈ κ²½μ° μλ΅ κ°λ₯νλ€.(μ: `.5`)

### Length
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/length)
- `width`, `height`, `margin`, `padding`, `border-width`, `font-size`, `text-shadow` λ± λ€μν μμ±(property)μ μ¬μ©νλ 'κ±°λ¦¬ κ°'μ μλ―Ένλ€.
- `Number + Unit`λ‘ κ΅¬μ±λκ³ , `0` λ€μλ λ¨μλ₯Ό λΆμ΄μ§ μμλ λ¬΄λ°©νλ€.
- Unitμ [Absolute Length](#absolute-length)μ [Relative Length](#relative-length)λ‘ κ΅¬λΆλλ€.

#### Absolute Length
- `px`, `cm`, `mm`, `in`, `pt` λ±κ³Ό κ°μ λ¬Όλ¦¬μ  μΈ‘μ  κ±°λ¦¬(κ³ μ  κ°, νλ©΄μ λ³΄μ΄λ κ±°λ¦¬)λ₯Ό μλ―Ένλ€.
- μ£Όλ‘ `px`λ§ μ¬μ©νλ€.
- λ€λ§, `font-size`μ κ²½μ°, μ λ κΈΈμ΄λ‘ μ€μ νλ κ²½μ°μ λΈλΌμ°μ μ μ€μ μ ν΅ν΄ λ³κ²½ν  μ μκ² λλ―λ‘, μ κ·Όμ±μ μ½νμν¬ μ μμΌλ―λ‘, `em`, `rem`κ³Ό κ°μ μλ κΈΈμ΄λ₯Ό νμ©ν΄μΌ νλ€.

#### Relative Length
- νΉμ  `font-size`, `line-height`, viewport λ±κ³Ό κ°μ μ΄λ ν λ€λ₯Έ κ±°λ¦¬μμ μλμ  λΉμ¨μ νννλ λ¨μμ΄λ€.
- Font-relative Lengths
  * νΉμ  `font-size`λ₯Ό κΈ°μ€μΌλ‘ μλμ  λΉμ¨μ νννλ€.
  * `em`: λΆλͺ¨μ `font-size`λ₯Ό κΈ°μ€μΌλ‘ μλμ  λΉμ¨μ νννλ λ¨μ.(`1em` === parent `font-size`)
    μ¬μ€μ `%`λ₯Ό μ¬μ©νλ κ²κ³Ό λμΌνλ€.
    ```css
    div.length-child {
      font-size: 1.5em;
    }
    ```
  * `rem`: Root μμ(λ³΄ν΅ `<html>`)μ `font-size`λ₯Ό κΈ°μ€μΌλ‘ μλμ  λΉμ¨μ νννλ λ¨μ.(`1rem` === `<html>`μ `font-size` === λΈλΌμ°μ  κΈ°λ³Έκ°(`16px`))
    λΈλΌμ°μ μμ μ¬μ©μκ° κΈκΌ΄ ν¬κΈ°(`font-size`)λ₯Ό λ³κ²½νλ κ²½μ° κ·Έμ λΉλ‘ν΄ `rem`μ κΈ°μ€μ΄ λ³κ²½λλ―λ‘, μΉ μ κ·Όμ± λ¬Έμ λ₯Ό ν΄κ²°ν  μ μλ€.
    ```css
    div.length-child {
      font-size: .5rem;
    }
    ```
- Viewport-relative Lengths
  * Viewport, μ¦ λ¬Έμμμ λ³Ό μ μλ λΆλΆμ ν¬κΈ°λ₯Ό κΈ°μ€μΌλ‘ μλμ  λ°±λΆμ¨ κΈΈμ΄λ₯Ό μ€μ νλ λ¨μμ΄λ€.
    μ₯μΉμ λ°λΌ λ°μνμΌλ‘ μΉ νμ΄μ§λ₯Ό κ΅¬νν  λ μ μ©νκ² μ¬μ©λλ€.
  * `vh`
    Viewportμ λμ΄ 1%λ₯Ό μλ―Ένλ€.
    ```css
    div.length-child {
      font-size: 10vh;
    }
    ```
  * `vw`
    Viewportμ λλΉ 1%λ₯Ό μλ―Ένλ€.
    ```css
    div.length-child {
      font-size: 10vw;
    }
    ```
  * `vmax`
    `vh`, `vw` μ€ ν° κ°μ μλ―Ένλ€.
    μ¦, μΈλ‘ λͺ¨λμΈ κ²½μ°, `100vh`κ° `vmax`, `100vw`κ° `vmin`μ΄ λλ€. 
    ```css
    div.length-child {
      font-size: 10vmax;
    }
    ```
  * `vmin`
    `vh`, `vw` μ€ μμ κ°μ μλ―Ένλ€.
    μ¦, κ°λ‘ λͺ¨λμΈ κ²½μ°, `100vw`κ° `vmax`, `100vh`κ° `vmin`μ΄ λλ€. 
    ```css
    div.length-child {
      font-size: 10vmin;
    }
    ```

### Percentage
- λ³΄ν΅ λΆλͺ¨ μμμμ μλμ  ν¬κΈ°λ₯Ό μ§μ ν  λ μ¬μ©νλ λ¨μμ΄λ€.
- `width`, `height`, `margin`, `padding`, `font-size` λ±μμ νμ©ν  μ μλ€.
- `Number + %`λ‘ κ΅¬μ±λκ³ , `0` λ€μλ λ¨μλ₯Ό λΆμ΄μ§ μμλ λ¬΄λ°©νλ€.
  ```css
  div.percentage {
    width: 50%;
    height: 30%;
  }

### Function
#### `calc()`
- CSS μμ± κ°(`<length>`, `<frequency>`, `<angle>`, `<time>`, `<percentage>`, `<number>`, λλ `<integer>`)μΌλ‘ κ³μ°μμ μ§μ ν  μ μλ ν¨μμ΄λ€.
- `calc(expression)`μΌλ‘ νμ©νκ³ , λ΄λΆ μ°μ°μμ νμ€ μ°μ°μ μμλ₯Ό λ°λ₯Έλ€.
- μ°μ°μ μ λ€λ‘ κ³΅λ°±μ μλ ₯νλ κ²μ΄ κΆμ₯λλ€.
  ```css
  p.function {
    width: calc(100% - 80px);
  }
  ```

#### `max()`, `min()`
- `,`λ‘ κ΅¬λΆλ μ λͺ©λ‘μμ κ°μ₯ ν¬κ±°λ μμ κ°μ CSSμ μμ± κ°μΌλ‘ μ€μ νλ ν¨μμ΄λ€.
  ```css
  p.function {
    height: min(100%, 500px);
  }
  ```

---
## π§± Box Model
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model) / [MDN-tutorial](https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/The_box_model)
- λΈλΌμ°μ λ νμ€ CSS Box Modelμ λ°λΌ κ°κ°μ μμλ₯Ό μ¬κ°ν λ°μ€λ‘ νννλ€. λ°λΌμ, CSSλ₯Ό νμ©ν΄ Boxμ ν¬κΈ°, μμΉ, μμ±(μμ, λ°°κ²½, νλλ¦¬ λͺ¨μ λ±)μ κ²°μ ν΄μΌ νλ€.
- νλμ λ°μ€λ 4κ°μ§ μμ­μΌλ‘ κ΅¬μ±λλ€.
  ![Box-Model](https://mdn.mozillademos.org/files/16558/box-model.png)
  * **Content Area**
    μμμ μ€μ  λ΄μ©μ ν¬ν¨νλ μμ­
    - `box-sizing` μμ±(property)μ κ°μ΄ κΈ°λ³Έκ°μΈ `content-box`μ΄λ€.
      ![content-box](https://mdn.mozillademos.org/files/16559/standard-box-model.png)
    - Block Level ElementμΈ κ²½μ°, μ½νμΈ  μμ­μ ν¬κΈ°λ₯Ό `width`, `min-width`, `max-width`, `height`, `min-height`, `max-height` μμ±(property)μ μ¬μ©ν΄ μ¬μ©ν΄ λͺμμ μΌλ‘ μ€μ ν  μ μλ€.
  * **Padding Area**
    λ΄λΆ μ¬λ°± κ²½κ³κ° κ°μΌ μμ­(μ»¨νμΈ μ νλλ¦¬ μ¬μ΄μ μ¬λ°±μ μλ―Ένλ€.)
    - λ΄λΆ μ¬λ°±μ ν¬κΈ°λ `padding-top`, `padding-right`, `padding-bottom`, `padding-left`μ λ¨μΆ μμ±μΈ `padding` μμ±(property)μ΄ κ²°μ νλ€.
  * **Border Area**
    νλλ¦¬ κ²½κ³κ° κ°μΌ μμ­(λ΄λΆ μ¬λ°±κ³Ό μΈλΆ μ¬λ°± μ¬μ΄λ₯Ό μλ―Ένλ€.)
    - νλλ¦¬μ λκ»λ `border-width`μ λ¨μΆ μμ±μΈ `border` μμ±(property)μ΄ κ²°μ νλ€.(κΈ°λ³Έμ μΌλ‘ `0px`μ΄κΈ° λλ¬Έμ λ³λλ‘ μ€μ νμ§ μλ κ²½μ°μ λ³΄μ΄μ§ μλλ€.)
    - [`box-sizing` μμ±(property)](#box-sizing) κ°μ `border-box`λ‘ μ€μ νλ©΄, Border Areaμ ν¬κΈ°λ₯Ό `width`, `min-width`, `max-width`, `height`, `min-height`, `max-height` μμ±(property)μ μ¬μ©ν΄ μ¬μ©ν΄ λͺμμ μΌλ‘ μ€μ ν  μ μλ€.
      ![border-box](https://mdn.mozillademos.org/files/16557/alternate-box-model.png)
  * **Margin Area**
    μΈλΆ μ¬λ°± κ²½κ³κ° κ°μΌ μμ­(νλλ¦¬ μΈλΆ μ¬λ°±μ μλ―Ένλ€.)
    - μΈλΆ μ¬λ°±μ ν¬κΈ°λ `margin-top`, `margin-right`, `margin-bottom`, `margin-left`μ λ¨μΆ μμ±μΈ `margin`μ΄ κ²°μ νλ€.
    - μ΄λ¬ν μΈλΆ μ¬λ°±μ νμ©ν΄ λ€λ₯Έ Boxμμ κ°κ²©μ μ€μ ν  μ μλ€.
    - λ€λ§, μ¬λ°± μμ([margin collapsing](#margin-collapsing))κ° λ°μνλ κ²½μ° μμ μΈλΆ μ¬λ°±μ΄ κ³΅μ λλ―λ‘, μ¬λ°± μμ­μ΄ λͺννμ§ μμ μ μλ€.

### `width`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/width)
- Block Level Elementμ λλΉλ₯Ό μ€μ νλ μμ±(property).
- Inline Elementμ κ²½μ° λλΉλ₯Ό μ€μ ν  μ μλ€.
- κΈ°λ³Έμ μΌλ‘ `content-box`μ λλΉλ₯Ό μ€μ νμ§λ§, `box-sizing` μμ±(property)μ΄ `border-box`μΈ κ²½μ°, `border-box`μ λλΉλ₯Ό μ€μ ν  μ μλ€.
- κΈ°λ³Έκ°μΌλ‘ `auto`λ‘ μ€μ λμ΄ μκ³ , `100%`μ λμΌνκ² λμνλ€. μ΄μΈμ `min-content`, `max-content`, `fit-content`, `<length>`, `<percentage>` κ°μ κ°μ§ μ μλ€.
- μμμ΄ λΆκ°λ₯ν μμ±μ΄λ€.

### `height`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/height)
- Block Level Elementμ λμ΄λ₯Ό μ€μ νλ μμ±(property).
- Inline Elementμ κ²½μ° λμ΄λ₯Ό μ€μ ν  μ μλ€.
- κΈ°λ³Έμ μΌλ‘ `content-box`μ λμ΄λ₯Ό μ€μ νμ§λ§, `box-sizing` μμ±(property)μ΄ `border-box`μΈ κ²½μ°, `border-box`μ λμ΄λ₯Ό μ€μ ν  μ μλ€.
- κΈ°λ³Έκ°μΌλ‘ `auto`λ‘ μ€μ λμ΄ μκ³ , `100%`μ λμΌνκ² λμνλ€. μ΄μΈμ `min-content`, `max-content`, `fit-content`, `<length>`, `<percentage>` κ°μ κ°μ§ μ μλ€.
- μμμ΄ λΆκ°λ₯ν μμ±μ΄λ€.

### `max-width`, `min-width`, `max-height`, `min-height`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/max-width), [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/min-width), [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/max-height), [MDN](https://developer.mozilla.org/ko/docs/Web/CSS/min-height)

- κΈ°λ³Έμ μΌλ‘ `width`, `height` μμ±κ³Ό λμΌν κ°μ κ°μ§κ³ , λμΌνκ² λμνλ€.
- μμ μμκ° `%` κ°μ κ°μ Έ λΆλͺ¨ μμμ `width`λ `height` κ°μ λ°λΌ μμ μμμ `width`λ `height` κ°μ΄ λ³κ²½λλλΌλ, νΉμ  μ΅λ λλΉ/λμ΄ νΉμ νΉμ  μ΅μ λλΉ/λμ΄ μ΄νλ‘λ λ³κ²½λμ§ μλλ‘ μ€μ ν  μ μλ€.
  ```css
  #parent { 
    width: 500px;
    height: 500px;
  }

  #child { 
    width: 50%;
    max-width: 300px;
    height: 50%;
    min-height: 100px;
  }
  ```

### `margin` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/margin)
- μμ(Element)μ μΈλΆ μ¬λ°± μμ­μ μ€μ νλ μμ±(property).
- `margin-top`, `margin-right`, `margin-bottom`, `margin-left`μ λ¨μΆ μμ±(Shorthand)μΌλ‘, λͺ¨λ `0`μ κΈ°λ³Έκ°μΌλ‘ κ°μ§κ³  μλ€.
- μμμ΄ λΆκ°λ₯νλ€.
  ```css
  div.margin-child {
    margin: 1rem;
  }
  ```
  * 1κ°μ κ° μμ±: "μ+μ°+ν+μ’" λͺ¨λ λμΌν κ°μ `margin`
  * 2κ°μ κ° μμ±: "μ+ν", "μ’+μ°" κ°κ°μ κ°μ `margin`
  * 3κ°μ κ° μμ±: "μ", "μ’+μ°", "ν" κ°κ°μ κ°μ `margin`
  * 4κ°μ κ° μμ±: "μ", "μ°", "ν", "μ’" κ°κ°μ κ°μ `margin`
  * `%` κ°μ κ²½μ°, **λΆλͺ¨ μμμ `width` κ°**μ λν λΉμ¨μ μλ―Ένλ€.
  
#### `margin` collapsing
- μ¬λ¬ Block Level Elementλ€μ "μ", "ν" `margin`μ΄ κ²½μ°μ λ°λΌ κ°μ₯ ν° ν¬κΈ°λ₯Ό κ°μ§ `margin`μΌλ‘ κ²°ν©(μμ)λλ νμ.
  1. μΈμ  νμ  κ°
     λ νμ  μμμ `margin-top`κ³Ό `margin-bottom`μ΄ μλ‘ μμλλ€.
  2. λΆλͺ¨-μμ μμ κ°
     - λΆλͺ¨ μμμ `border`, `padding`, Inline contentsμ΄ μμ΄ λΆλͺ¨ μμμ μμ μμμ `margin-top`μ΄ λ§λλ κ²½μ°
     - λΆλͺ¨ μμμ `border`, `padding`, Inline contentsμ΄ μκ³ , λΆλͺ¨ μμμ μμ μμλ₯Ό λΆλ¦¬ν  `height`(`min-height`, `max-height` ν¬ν¨) μμ±μ κ°μ΄ μ§μ λμ§ μμ λΆλͺ¨ μμμ μμ μμμ `margin-bottom`μ΄ λ§λλ κ²½μ°
     - λ κ²½μ° λͺ¨λ μμλ μ¬λ°±μ΄ λΆλͺ¨ μμ μΈλΆμ μμΉνλ€.
  3. λΉ Block
     `border`, `padding`, Inline contents, `height`(`min-height`, `max-height` ν¬ν¨) μμ±μ΄ μλ κ²½μ° μμ μκΈ° μμ μ `margin-top`κ³Ό `margin-bottom`μ΄ μλ‘ μμλλ€.

### `padding` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/padding)
- μμ(Element)μ λ΄λΆ μ¬λ°± μμ­μ μ€μ νλ μμ±(property).
- `padding-top`, `padding-right`, `padding-bottom`, `padding-left`μ λ¨μΆ μμ±(Shorthand)μΌλ‘, λͺ¨λ `0`μ κΈ°λ³Έκ°μΌλ‘ κ°μ§κ³  μλ€.
- μμμ΄ λΆκ°λ₯νλ€.
  ```css
  div.padding-child {
    padding: 1rem;
  }
  ```
  * 1κ°μ κ° μμ±: "μ+μ°+ν+μ’" λͺ¨λ λμΌν κ°μ `padding`
  * 2κ°μ κ° μμ±: "μ+ν", "μ’+μ°" κ°κ°μ κ°μ `padding`
  * 3κ°μ κ° μμ±: "μ", "μ’+μ°", "ν" κ°κ°μ κ°μ `padding`
  * 4κ°μ κ° μμ±: "μ", "μ°", "ν", "μ’" κ°κ°μ κ°μ `padding`
  * `%` κ°μ κ²½μ°, **λΆλͺ¨ μμμ `width` κ°**μ λν λΉμ¨μ μλ―Ένλ€.
- `margin`κ³Ό λ¬λ¦¬ padding collapsing νμμ μ‘΄μ¬νμ§ μκ³ , μμ κ°μ νμ©ν  μ μλ€.

### `border` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/border)
- μμ(Element)μ `border`λ₯Ό μ€μ νλ μμ±(property).
- λ³΄ν΅ `border-width`, `border-style`, `border-color` μμλ‘ κ°μ μ€μ νλ€.
- μλ΅ν μμ±(property)μ κ°κ°μ κΈ°λ³Έκ°μΈ `medium`, `none`, `currentColor`μΌλ‘ μ€μ λλ€. λ°λΌμ, μ€νμΌμ μ§μ νμ§ μμΌλ©΄ `border`κ° λ³΄μ΄μ§ μλλ€.
  ```css
  div.border {
    border: 1px solid rgba(170, 50, 200, .6);
  }
- μ°Έκ³ λ‘, `outline` μμ±μ ν΅ν΄ μΈκ³½μ μ μ€μ ν  μ μμ§λ§, `outline`μ κ²½μ° μ λ κ³΅κ°μ μ°¨μ§νμ§ μκ³  μμ μΈλΆμ κ·Έλ €μ§λ―λ‘, Box-modelμ ν¬ν¨λμ§ μλλ€.

#### `border-style` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/border-style)
- μμ(Element)μ `border` λ€ λ©΄μ μ€νμΌμ μ§μ νλ μμ±(property)μΌλ‘, κΈ°λ³Έκ°μ `none`μ΄λ€.
- `none`μΈ κ²½μ° λ€λ₯Έ `width`λ `color` μμ±(property)μ΄ μ€μ λμ΄ μμμλ λΆκ΅¬νκ³ , νλ©΄μ `border`κ° λ³΄μ΄μ§ μλλ€.
- `solid`, `hidden`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, `outset` λ± ν€μλ κ°μ νμ©ν΄ μ€νμΌμ μ§μ ν  μ μλ€.
  * 1κ°μ κ° μμ±: "μ+μ°+ν+μ’" λͺ¨λ λμΌν κ°μ `border-style`
  * 2κ°μ κ° μμ±: "μ+ν", "μ’+μ°" κ°κ°μ κ°μ `border-style`
  * 3κ°μ κ° μμ±: "μ", "μ’+μ°", "ν" κ°κ°μ κ°μ `border-style`
  * 4κ°μ κ° μμ±: "μ", "μ°", "ν", "μ’" κ°κ°μ κ°μ `border-style`
  ```css
  div.border-style {
    border-top-style: none;
    border-right-style: dotted;
    border-bottom-style: dashed;
    border-left-style: inset;
  }
  ```

#### `border-width` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/border-width)
- μμ(Element)μ `border`μ λλΉλ₯Ό μ€μ νλ μμ±(property)μΌλ‘, κΈ°λ³Έκ°μ `medium`μ΄λ€.
- `thin`, `thick`, `medium` ν€μλ κ° νΉμ `<length>` κ°μ νμ©ν΄ λλΉλ₯Ό μ§μ ν  μ μλ€.
- λ€λ§, ν€μλ κ°μ νμ©νλ©΄ μ νν λͺμΈκ° μκΈ° λλ¬Έμ λΈλΌμ°μ λ³λ‘ λ€λ₯΄κ² κ΅¬νλ  μ μλ€λ μ μ μ μν΄μΌ νλ€.
  * 1κ°μ κ° μμ±: "μ+μ°+ν+μ’" λͺ¨λ λμΌν κ°μ `border-width`
  * 2κ°μ κ° μμ±: "μ+ν", "μ’+μ°" κ°κ°μ κ°μ `border-width`
  * 3κ°μ κ° μμ±: "μ", "μ’+μ°", "ν" κ°κ°μ κ°μ `border-width`
  * 4κ°μ κ° μμ±: "μ", "μ°", "ν", "μ’" κ°κ°μ κ°μ `border-width`
  ```css
  div.border-width {
    border-top-width: medium;
    border-right-width: thick;
    border-bottom-width: 2px;
    border-left-width: 1.25em;
  }
  ```

#### `border-color` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/border-color)
- μμ(Element)μ `border`μ μμμ μ€μ νλ μμ±(property)μΌλ‘, `currentColor`κ° κΈ°λ³Έκ°μ΄λ€.
- μμ ν€μλ κ°(`<color>`)λ₯Ό νμ©ν΄ μμμ μ§μ ν  μ μλ€.
  * 1κ°μ κ° μμ±: "μ+μ°+ν+μ’" λͺ¨λ λμΌν κ°μ `border-width`
  * 2κ°μ κ° μμ±: "μ+ν", "μ’+μ°" κ°κ°μ κ°μ `border-width`
  * 3κ°μ κ° μμ±: "μ", "μ’+μ°", "ν" κ°κ°μ κ°μ `border-width`
  * 4κ°μ κ° μμ±: "μ", "μ°", "ν", "μ’" κ°κ°μ κ°μ `border-width`
  ```css
  div.border-color {
    border-top-color: black;
    border-right-color: red;
    border-bottom-color: blue;
    border-left-color: white;
  }
  ```

### `border-radius` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/border-radius)
- μμ(Element)μ `border` κ²½κ³μ κΌ­μ§μ μ λ₯κΈκ² λ§λλ μμ±(property).
- `<length>`μ `<percentage>` κ°μ νμ©ν΄ κΌ­μ§μ μ λ¨μΌ λ°μ§λ¦μ μ€μ ν  μ μλ€.
  * 1κ°μ κ° μμ±: "μλ¨ μ’μΈ‘ + νλ¨ μ°μΈ‘ + μλ¨ μ°μΈ‘ + νλ¨ μ’μΈ‘" λͺ¨λ λμΌν κ°μ `border-radius`
  * 2κ°μ κ° μμ±: "μλ¨ μ’μΈ‘ + νλ¨ μ°μΈ‘", "μλ¨ μ°μΈ‘ + νλ¨ μ’μΈ‘" κ°κ°μ κ°μ `border-radius`
  * 3κ°μ κ° μμ±: "μλ¨ μ’μΈ‘", "μλ¨ μ°μΈ‘ + νλ¨ μ’μΈ‘", "νλ¨ μ°μΈ‘" κ°κ°μ κ°μ `border-radius`
  * 4κ°μ κ° μμ±: "μλ¨ μ’μΈ‘", "μλ¨ μ°μΈ‘", "νλ¨ μ°μΈ‘", "νλ¨ μ’μΈ‘" κ°κ°μ κ°μ `border-radius`
  ```css
  div.border-radius {
    border-radius: 30px;
  }
  ```

### `box-sizing`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/box-sizing)
- μμ(Element)μ λλΉμ λμ΄λ₯Ό κ³μ°νλ λ°©λ²μ μ§μ νλ μμ±(property).
- μ§μ ν `width`μ `height`λ μμμ `content-box` ν¬κΈ°μλ§ μ μ©λκΈ° λλ¬Έμ `border`, `padding`μ μ§μ νλ κ²½μ°μλ κΈ°μ‘΄ μμμ `width`μ `height`μ λν΄μ νλ©΄μ κ·Έλ¦¬κ² λλ€.
- λ°λΌμ `border`, `padding` μμ±μ κ³ λ €ν΄μ μμ(Element)μ ν¬κΈ°λ₯Ό μ€μ ν΄μΌ νλ€.
  * `content-box`: `width`, `height` μμ±μ΄ μ»¨νμΈ  μμ­λ§ ν¬ν¨νκ³ , `margin`, `border`, `padding` μμ­μ ν¬ν¨νμ§ μλλ€.
    λ°λΌμ, `width`κ° `300px`μ΄κ³  `padding`μ΄ `10px`, `border`κ° `5px`μΈ μμμ μ΄ λλΉλ `300px + 10px * 2 + 5px * 2`λ‘ `330px`μ΄λ€.
  * `border-box`: `width`, `height` μμ±μ΄ μ»¨νμΈ  μμ­μ λΉλ‘―ν΄ `border`, `padding` μμ­μ ν¬ν¨νκ³ , `margin`μ ν¬ν¨νμ§ μλλ€.
    λ°λΌμ, `width`κ° `300px`μ΄κ³  `padding`μ΄ `10px`, `border`κ° `5px`μΈ μμμ μ΄ λλΉλ `300px`μ΄λ€.

---
## π§± Layout
[MDN-tutorial](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Introduction) [MDN](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout)
- λ μ΄μμμ λν μ΄ν΄λ₯Ό λ°νμΌλ‘, μμλ₯Ό μ¬λ°λ₯Έ μ₯μμ λ°°μΉνλ λ°©λ²μ μ μ μλ€.

### `display`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/display)
- μμ(Element)λ₯Ό *normal flow*μμμ μμκ° λμνλ λ°©μ(μμμ λ΄λΆμ μΈλΆ λμ€νλ μ΄ μ νμ μ€μ )μ λ³κ²½νλ μμ±(property).
- κ° μμλ€μ κ°κ° `block`, `inline` μ€ νλλ₯Ό μ΄κΈ°κ°μΌλ‘ κ°μ§κ³  μλ€.
- `block`, `inline`, `inline-block`, `flex`, `inline-flex`, `grid`, `none` λ±μ ν€μλ κ°μ νμ©νμ¬ νΉμ  λμ λ°©μμ μ€μ ν  μ μλ€.
  * `inline`
    - μμ­μ ν¬κΈ°κ° λ΄λΆ μ»¨νμΈ μ ν¬κΈ°λ‘ μ ν΄μ§λ€.
    - `margin-top`, `margin-bottom`, `padding-top`, `padding-bottom`μ μ€μ ν  μ μλ€.
    - μ¬λ¬ μμκ° μνμ μΌλ‘ λ°°μΉλλ€.
  * `block`
    - μμ­μ ν¬κΈ°λ₯Ό `width`μ `height` μμ±μ νμ©ν΄ μ§μ ν  μ μλ€.
    - `width`λ₯Ό μ§μ νμ§ μμΌλ©΄ κ°λ₯ν μ΅λ λλΉλ₯Ό μ°¨μ§νλ€.
    - μ¬λ¬ μμκ° μμ§μ μΌλ‘ λ°°μΉλλ€.
  * `inline-block`
    - λνμ μΌλ‘ `<input>`μ΄ Inline-block Elementμ΄λ€.
    - μμ­μ ν¬κΈ°λ₯Ό `width`μ `height` μμ±μ νμ©ν΄ μ§μ ν  μ μλ€.
    - μ¬λ¬ μμκ° μνμ μΌλ‘ λ°°μΉλλ€.
    - `margin-top`, `margin-bottom`, `padding-top`, `padding-bottom`μ μ€μ ν  μ μλ€.
  * `none`
    - μμ(Element)λ₯Ό λ μ΄μμμμ μμ ν μ κ±°νμ¬ νλ©΄μμ λ³΄μ΄μ§ μκ² μ€μ νλ€.
    - λ°λΌμ ν΄λΉ μμμ κΈ°μ‘΄μ μ°¨μ§νλ μμΉλ μ¬λΌμ§κ² λλ€.
    - μ΄μ λ¬λ¦¬ `visibility` μμ±μ `hidden` κ°μ λΆμ¬νλ©΄, λ μ΄μμμ λ³κ²½νμ§ μκ³  μμλ₯Ό λ³΄μ΄μ§ μκ² μ€μ νκΈ° λλ¬Έμ ν΄λΉ μμκ° μ°¨μ§νλ κΈ°μ‘΄ μμΉλ₯Ό λΉ νλ©΄μΌλ‘ μ€μ νλ€.
    ```css
    div.display {
      display: none;
    }
    ```

### `visibility`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/visibility)
- λ¬Έμμ λ μ΄μμμ λ³κ²½νμ§ μκ³ , μμλ₯Ό λ³΄μ΄κ±°λ λ³΄μ΄μ§ μκ² μ€μ νλ μμ±(property).
- `visible`(κΈ°λ³Έκ°), `hidden`, `collapse` λ± ν€μλ κ°μ ν΅ν΄ μ€μ νλ€.
  * `hidden`: μμκ° κ·Έλ €μ§μ§ μκ²λ μ€μ νμ¬, λ μ΄μμ μμμ κ³΅κ°μ μ°¨μ§νμ§λ§, ν΄λΉ μμκ° λ³΄μ΄μ§ μκ² μ€μ νλ€.
  * `collapse`: μμκ° κ·Έλ €μ§μ§ μκ² μ€μ νμ§λ§, `<table>`μμλ μ°¨μ§νλ κ³΅κ°λ μ κ±°νλ€.
  ```css
  div.visibility {
    visibility: hidden;
  }
  ```

### `float`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/float)
- νλμ μμ(Element)κ° *normal flow*μΌλ‘λΆν° λΉ μ Έλμ νμ€νΈ λ° Inline Elementκ° μ’, μ°μΈ‘μ λ°°μΉνλ μμ±(property).
- **Flexbox**μ μν΄ λμ²΄λκ³  μλ€.
- `float` μμ±μ μΌλΆ κ²½μ°μ `display` κ°μ μμ νλ€.(λλ€μλ₯Ό `block` κ°μΌλ‘ μμ νλ€.)
- `none`, `left`, `right`, `inline-start`, `inline-end` λ± ν€μλ κ°μ νμ©νμ¬ ν΄λΉ μμκ° μ΄λμ μμΉν  μ§μ λν΄ μ€μ νλ€.
  ```css
  div.float {
    float: left;
  }
  ```

### `position`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/position)
- HTML λ¬Έμ μμ μμ(Element)λ₯Ό λ°°μΉνλ λ°©λ²μ μ§μ νλ μμ±(property).
- `top`, `right`, `bottom`, `left` μμ±μ΄ μμλ₯Ό λ°°μΉν  μ΅μ’ μμΉλ₯Ό κ²°μ νλ€.
- `static`(κΈ°λ³Έκ°), `relative`, `absolute`, `fixed`, `sticky` λ±μ ν€μλ κ°μ νμ©νμ¬ λ°°μΉ λ°©λ²μ μ§μ νλ€.
- [Normal Flow](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Normal_Flow)λ μΌλ°μ μΈ λ¬Έμ νλ¦μ μλ―Ένλ€.
  * Block Level Element: λΆλͺ¨ μμμ λλΉ 100%μ μ»¨νμΈ μ μ΅λ λμ΄λ₯Ό κ°μ§λ€.
  * Inline Element: μ»¨νμΈ μ μ΅λ λλΉμ μ΅λ λμ΄λ₯Ό κ°μ§λ©°, `width`, `height` κ°μ μ€μ ν  μ μλ€.

#### `static`
μμ(Element)λ₯Ό *Normal Flow*(μΌλ°μ μΈ λ¬Έμ νλ¦)μ λ°λΌ λ°°μΉνλ€.
`top`, `right`, `bottom`, `left` μμ±μ μ¬μ©ν  μ μλ€.

#### `relative`
μμ(Element)λ₯Ό *Normal Flow*(μΌλ°μ μΈ λ¬Έμ νλ¦)μ λ°λΌ λ°°μΉνκ³ , **μκΈ° μμ μ κΈ°μ€**μΌλ‘ `top`, `right`, `bottom`, `left`μ κ°μ λ°λΌ μ΄λν μμΉμ λ°°μΉλλ€.
- **μκΈ° μμ μ κΈ°μ€**μΌλ‘ νλ€λ κ²μ `position` μμ±μ κΈ°λ³Έκ°μΈ `static`μΌ λμ μμΉλ₯Ό μλ―Ένλ€.
- λ€λ§, μ΄ κ²½μ° μλ°λλ κ°μ λμμ μμ±νλ€λ©΄, `top`, `left`κ° μ°μ μλμ΄ `bottom`, `right`λ λ¬΄μλλ€.
```css
#position-example {
  position: relative;
  top: 100px;
  left: 100px;
}
```

#### `absolute`
μμ(Element)λ₯Ό *Normal Flow*(μΌλ°μ μΈ λ¬Έμ νλ¦)μμ μ κ±°νκ³ , νμ΄μ§ λ μ΄μμμ κ³΅κ°λ λ°°μ νμ§ μλλ€.
λ€λ§, **μμ μμ μ€ `position` μμ±μ΄ `static`μ μ μΈν κ°μ κ°μ§ κ°μ₯ κ°κΉμ΄ μμ μμλ₯Ό κΈ°μ€**μΌλ‘ `top`, `right`, `bottom`, `left`μ κ°μ λ°λΌ μ΄λν μμΉμ λ°°μΉνλ€.
λ§μ½ **κΈ°μ€μ ν΄λΉνλ μμ μμκ° μλ κ²½μ°μλ, `<body>`λ₯Ό κΈ°μ€**μΌλ‘ λ°°μΉνλ€.
(μ°Έκ³ λ‘, `top`, `right`, `bottom`, `left`μ κ°μ μ€μ νμ§ μλ κ²½μ°μλ `float`μ λ§μ°¬κ°μ§λ‘ κΈ°μ‘΄ μμΉμμ λ μ€λ₯Έ ννλ‘ μ‘΄μ¬νκ² λλ€.)
```css
#position-example {
  position: absolute;
  top: 100px;
  left: 100px;
}
```

#### `fixed`
μμ(Element)λ₯Ό *Normal Flow*(μΌλ°μ μΈ λ¬Έμ νλ¦)μμ μ κ±°νκ³ , νμ΄μ§ λ μ΄μμμ κ³΅κ°λ λ°°μ νμ§ μλλ€.
λμ  **Viewportλ₯Ό κΈ°μ€**μΌλ‘ μΌμ `top`, `right`, `bottom`, `left`μ κ°μ λ°λΌ μ΄λν μμΉμ λ°°μΉνλ€.
λ°λΌμ κΈ°μ€μ΄ Viewportμ΄κΈ° λλ¬Έμ μ€ν¬λ‘€νλ€κ³  ν΄λ κ³ μ λ μμΉμ μ‘΄μ¬νκ² λλ€.
```css 
#position-example {
  position: fixed;
  top: 100px;
  left: 100px;
}
```

#### `sticky`
μμ(Element)λ₯Ό *Normal Flow*(μΌλ°μ μΈ λ¬Έμ νλ¦)μ λ°λΌ λ°°μΉνλ€.
κΈ°μ‘΄ μμΉμμ `left`, `right`λ§ μ μ©λμ΄ μ΄λν μμΉμμ λ°°μΉνλ€.
λ€λ§, μ€ν¬λ‘€μ μν΄ κΈ°μ‘΄ μμΉκ° Viewportμμ λ²μ΄λκ² λλ μκ°λΆν°, `fixed`μ λ§μ°¬κ°μ§λ‘ Viewportλ₯Ό κΈ°μ€μΌλ‘ `top`, `right`, `bottom`, `left`μ κ°μ λ°λΌ μ΄λν μμΉμ λ°°μΉνλ€.
(μ°Έκ³ λ‘, μ€ν¬λ‘€ λλ μμμ μμ μμμ `position` μμ±μ `sticky`λ‘ μ€μ ν΄μΌ νλ€λ μ μ μ μν΄μΌ νλ€.)
```css 
#position-example {
  position: sticky;
  top: 100px;
  left: 100px;
}
```
### `overflow` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/overflow)
- μμ(Element)μ μ»¨νμΈ μ ν¬κΈ°κ° μ»€μ μμμ `width`, `height`μ λ§μΆ μ μμ λ μ΄λ€ λ°©μμΌλ‘ μ²λ¦¬ν  μ§μ λν΄ μ€μ νλ μμ±(property).
- `overflow-x`μ `overflow-y`μ λ¨μΆ μμ±μ΄λ€.
- `visible`(κΈ°λ³Έκ°), `hidden`, `scroll`, `auto` λ± ν€μλ κ°μ νμ©ν΄ μ²λ¦¬ λ°©μμ μ€μ ν  μ μλ€.
  * `visible`: μ»¨νμΈ λ₯Ό μλ₯΄μ§ μκ³ , λμ³ νλ₯΄κ² μμ±λλ€.
  * `hidden`: μ»¨νμΈ λ₯Ό μλ₯΄κ³ , λμ³ νλ₯΄λ λΆλΆμ μ κ±°λλ€.
  * `scroll`: μ»¨νμΈ λ₯Ό μλ₯΄μ§ μκ³ , λμ³ νλ₯΄λ λΆλΆμ μ€ν¬λ‘€μ ν΅ν΄ νμΈν  μ μλλ‘ μ¨κ²¨μ§λ€.
  * `auto`: λΈλΌμ°μ κ° κ²°μ ν λλ‘ μ€μ λλλ°, λ³΄ν΅ μ»¨νμΈ κ° λμΉμ§ μλ κ²½μ° `visible`, λμ³ νλ₯΄λ κ²½μ° `scroll`λ‘ μλμ μΌλ‘ λ³κ²½λλ€.

### `z-index`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/z-index)
- κ° μμμ zμΆ μμλ₯Ό μ§μ νλ μμ±(property).
- λ ν° μ μ κ°(κΈ°λ³Έκ°μ `auto`)μ κ°μ§ μμκ° zμΆ κΈ°μ€μΌλ‘ μλ¨μ μμΉνλ€.
```css
div.zindex {
  z-index: 1000;
}
```
- κΈ°λ³Έμ μΈ μμ λ§₯λ½μ **μ½λ μμ**μ λ°λΌ κ²°μ λμ§λ§, `position` μμ±μ΄ `static`μΈ μμλ³΄λ€ **`static`μ΄ μλ μμ**κ° zμΆ κΈ°μ€μΌλ‘ μλ¨μ μμΉνκ³ , **`z-index` μμ±μ κ°μ΄ ν΄μλ‘** zμΆ κΈ°μ€μΌλ‘ μλ¨μ μμΉνλ€.

---
## π§± Color & Background

### `<color>`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/color_value)
- ν€μλ κ°, `# + 16μ§μ`, `rgb()`, `rgba()`, `hsl()`, `hsla()`λ₯Ό κ°μ νμ©ν΄ μμμ μ§μ ν  μ μλ€.
  μμ
  * `black` = #000000 = rgb(0, 0, 0) = hsl(0, 0%, 0%)
  * `white` = #FFFFFF = rgb(255, 255, 255) = hsl(0, 0%, 100%)
  * `transparent`: ν¬λͺνκ² μ€μ νλ ν€μλ κ°

### `opacity`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/color_value)
- μμ(Element)μ λΆν¬λͺλλ₯Ό μ€μ νλ μμ±(property).
- 0 ~ 1 μ¬μ΄μ μ€μκ°(`<number>`) νΉμ 0% ~ 100%μ `<percentage>` κ°μ κ°μ§λ©°, `1`(`100%`)κ° κΈ°λ³Έκ°μΌλ‘ λΆν¬λͺν μμλ₯Ό μλ―Ένλ€.
- `opacity` μμ±μ ν΄λΉ μμ λ΄λΆμ λͺ¨λ  μμμ μν₯μ μ£Όμ§λ§, μμ μμκ° μμνμ§λ μλλ€. μ¦, μμ λ΄λΆμ λͺ¨λ  μμμ λΆν¬λͺλλ₯Ό μ‘°μ νκΈ° μν΄μλ `opacity` μμ±μ νμ©νκ³ , λ°°κ²½λ§ λΆν¬λͺλλ₯Ό μ‘°μ νκΈ° μν΄μλ `background-color`μμ `alpha` κ°μ μ§μ ν΄μΌ νλ€.
  ```css
  div.opacity {
    opacity: 0.5;
  }
  ```

### `background-color`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background-color)
- μμ(Element)μ λ°°κ²½ μμμ μ§μ νλ μμ±(property).
- `<color>` κ°μΈ ν€μλ κ°, `# + 16μ§μ`, `rgb()`, `rgba()`, `hsl()`, `hsla()`λ₯Ό κ°μ μ¬μ©ν΄ μμμ μ§μ ν  μ μλ€.
- λ€λ§, `background-image`κ° μλ κ²½μ°μλ `background-color`κ° λ€μ λ λλ§ λκΈ° λλ¬Έμ μ΄λ―Έμ§κ° ν¬λͺν λΆλΆμ κ°μ§κ³  μμ΄μΌ `background-color`λ₯Ό νμΈν  μ μλ€.
```css
div.background {
  background-color: black;
}
```

### `background-image`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background-image)
- μμ(Element)μ λ°°κ²½ μ΄λ―Έμ§λ₯Ό νλ μ΄μ μ§μ νλ μμ±(property).
- `none` ν€μλ κ°(κΈ°λ³Έκ°)μ΄λ μΌνλ‘ κ΅¬λΆν λ€μμ `<image>` κ°μΌλ‘ μ§μ ν  μ μλ€.
```css
div.background {
  background-image: url("../img/example_img.png");
}
```


### `background-repeat`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background-repeat)
- μμ(Element)μ λ°°κ²½ μ΄λ―Έμ§μ λ°λ³΅ λ°©λ²μ μ§μ νλ μμ±(property).
- `repeat-x`(xμΆ λ°λ³΅), `repeat-y`(yμΆ λ°λ³΅), `repeat`(κΈ°λ³Έκ°), `space`(μλ¦¬μ§ μμ λ§νΌλ§ λ°λ³΅), `round`(μμ λ΄λΆλ₯Ό μ±μΈλ§νΌ λ°λ³΅), `no-repeat`(λ°λ³΅ μν¨) ν€μλ κ°μΌλ‘ μ§μ ν  μ μλ€.
```css
div.background {
  background-image: url("../img/example_img.png");
  background-repeat: no-repeat;
}
```

### `background-position`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)
- μμ(Element)μ λ°°κ²½ μ΄λ―Έμ§μ μ΄κΈ° μμΉλ₯Ό μ€μ νλ μμ±(property).
- `0 0`(xμ’ν, yμ’ν)μ΄ κΈ°λ³Έκ°μΌλ‘, μ’μΈ‘ μλ¨μ λ°°κ²½ μ΄λ―Έμ§κ° μμΉνκ² λλ€.
- `top`, `bottom`, `left`, `right`, `center` λ± ν€μλ κ°μΌλ‘ μ€μ ν  μλ μλ€.(ν€μλλ μλ΅ μ `center`κ° λλ€.)
- λ°λ³΅ μ€μ μ΄ λμ΄ μλ κ²½μ°μλ ν΄λΉ μ’νλ₯Ό κΈ°μ€μΌλ‘ μ΄λ―Έμ§λ₯Ό λ°λ³΅νλ€.
- 
```css
div.background {
  background-image: url("../img/example_img.png");
  background-repeat: no-repeat;
  background-position: 100px 200px;
}
```

### `background-origin`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background-origin)
- μμ(Element)μ λ°°κ²½μ μμ μ μμμ μ μ€μ νλ μμ±(property).
- `border-box`, `padding-box`(κΈ°λ³Έκ°), `content-box` κ°μ νμ©ν΄ μ€μ ν  μ μλ€.
- κ°κ° λ°°κ²½ μ΄λ―Έμ§μ μμ μ΄ `border` μμ­ μ’μΈ‘ μλ¨, `padding` μμ­ μ’μΈ‘ μλ¨, `content` μμ­ μ’μΈ‘ μλ¨μΌλ‘ λ³κ²½λλ€.
```css
div.background {
  background-image: url("../img/example_img.png");
  background-repeat: no-repeat;
  background-origin: border-box;
}
```

### `background-size`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background-size)
- μμ(Element)μ λ°°κ²½ μ΄λ―Έμ§μ ν¬κΈ°λ₯Ό μ€μ νλ μμ±(property).
- `contain`, `cover`(λΉμ¨μ μ μ§νλ©΄μ, μ μΌ ν¬κ² μ€μ ), `auto`(κΈ°λ³Έκ°, μλ³Έ ν¬κΈ°) λ± ν€μλ κ°μ΄λ `<length>`, `<percentage>`κ°μ νμ©ν΄ μ£Όμ΄μ§ κ°μΌλ‘ λλ¦¬κ±°λ μ€μΌ μ μλ€.
  * `contain`: λΉμ¨μ μ μ§νλ©΄μ, μ λΆ λ³΄μ΄κ² μ€μ .
  * `cover`: λΉμ¨μ μ μ§νλ©΄μ, λΉ κ³΅κ° μμ΄ μ μΌ ν¬κ² μ€μ .
  * `auto`(κΈ°λ³Έκ°): μ΄λ―Έμ§μ μλ³Έ ν¬κΈ°λ₯Ό μ μ§.
  * `<length>`, `<percentage>`: μλ³Έ λΉμ¨μ μ μ§νμ§ μκ³  μ§μ λ κ°μΌλ‘ λ³κ²½.(νλλ§ μλ ₯ μ λΉμ¨ μ μ§νλ©΄μ μ§μ λ κ°μΌλ‘ λ³κ²½(λΉ κ³΅κ° μκΈΈ μ μμ)λλ€.)
```css
div.background {
  background-image: url("../img/example_img.png");
  background-repeat: no-repeat;
  background-size: cover;
}
```

### `background` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/background)
- μμ(Element)μ λ°°κ²½μ μμ, μ΄λ―Έμ§, μμ , ν¬κΈ°, λ°λ³΅ λ± μ¬λ¬ λ°°κ²½ μ€νμΌμ νλ²μ μ€μ νλ λ¨μΆ μμ±(property).
- `background-attachment`, `background-clip`, `background-color`, `background-image`, `background-origin`, `background-position`, `background-repeat` μμ±μ μ€μ ν  μ μλ€.
`background-size`
- `<background-size>` κ°μ `<background-position>` λ°λ‘ λ€μλ§ μμΉν  μ μμΌλ©° '/' λ¬Έμλ‘ κ΅¬λΆν΄μΌ νλ€.
- `<background-color>` κ°μ λ°λμ λ§μ§λ§μ μμ±ν΄μΌ νλ€.
- μλ΅ν μμ±μ κΈ°λ³Έκ°μΌλ‘ μ€μ λλ κ²μ μ μν΄μΌ νλ€.
  * `background-image`: `none`
  * `background-position`: `0% 0%`
  * `background-size`: `auto auto`
  * `background-repeat`: `repeat`
  * `background-origin`: `padding-box`
  * `background-clip`: `border-box`
  * `background-attachment`: `scroll`
  * `background-color`: `transparent`

---
## π§± Transform
### `transform`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/transform)
- μμ(Element)μ νμ , ν¬κΈ° μ‘°μ , κΈ°μΈμ΄κΈ°, μ΄λ ν¨κ³Όλ₯Ό λΆμ¬νλ μμ±(property).
- μλ³Έ μμμ λ μ΄μμμ μ μ§νλ, κ·Έ μνμμ ν¨κ³Όλ₯Ό λΆμ¬νλ κ²μ΄λ€.
- 'ν¨μ νκΈ°λ²'μ νμ©ν΄ ν΄λΉ ν¨κ³Όλ₯Ό λΆμ¬ν  μ μκ³ , `,`λ₯Ό νμ©ν΄ μ¬λ¬ ν¨κ³Όλ₯Ό λμμ λΆμ¬ν  μ μλ€.
  * `none`(κΈ°λ³Έκ°): μλ¬΄λ° λ³νλ μ μ©νμ§ μλλ€.
  * `<transform-function>`[μ°Έκ³ ](https://developer.mozilla.org/ko/docs/Web/CSS/transform-function): νλ μ΄μμ λ³ν ν¨μλ‘, μ°μΈ‘μ μμ±λ ν¨μκ° λ¨Όμ  μ μ©λλ€λ νΉμ§μ΄ μλ€.
    - X μ’ν(κ°λ‘ μ’ν)μ Y μ’ν(μΈλ‘ μ’ν)λ₯Ό μ¬μ©ν΄ νννκ³ , μ’μΈ‘ μλ¨μ΄ μμ `(0, 0)`μ΄ λκΈ°μ YμΆμ μλλ‘ μ»€μ§κ² λλ€.
    - ν΄λΉ μλ£νμ 'μμμ μΈνμ μν₯μ μ£Όλ λ³ν'μ μ€μ νλλ°, μ΄λ¬ν λ³ν ν¨μλ 2D λλ 3D κ³΅κ° λ΄μμ μμλ₯Ό νμ νκ³ , ν¬κΈ°λ₯Ό λ°κΎΈκ³ , μκ³‘νκ³ , μ΄λν  μ μλ€.
  
#### `scale()`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale())
- 2Dμμ μμμ ν¬κΈ°λ₯Ό μ‘°μ νλ λ³ννλ ν¨μ.
- `<number>` κ°μ νμ©ν΄ λλΉ(xμΆ)μ λμ΄(yμΆ)λ₯Ό κ°κ° λ€λ₯Έ κ°μΌλ‘ ν¬κΈ°λ₯Ό μ‘°μ ν  μ μλ€.
```css
div.scale {
  transform: scale(1, 1.2);
}
```
- `scaleX()`, `scaleY()`μ κ²½μ° ν΄λΉ μΆμΌλ‘λ§ ν¬κΈ°λ₯Ό μ‘°μ ν  μ μλ€.

#### `rotate()`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate())
- 2D νλ©΄μμ μμλ₯Ό νμ μν€λ λ³ννλ ν¨μ.
- `<angle>` κ°μ νμ©ν΄ μμμ νμ  κ°λλ₯Ό μ€μ ν΄ νμ μν¬ μ μλ€.
  * μμ κ°μΈ κ²½μ° μκ³ λ°©ν₯μΌλ‘, μμ κ°μΈ κ²½μ° λ°μκ³ λ°©ν₯μΌλ‘ νμ μν¨λ€.
  * `deg`(κ°λ), `grad`, `rad`, `turn`(νμ ) λ±μ λ¨μλ₯Ό μ¬μ©νλ€.
    (μ: `90deg` = `100grad` = `0.25turn` = `1.5708rad`)
```css
div.rotate {
  transform: rotate(45deg);
}
```

#### `translate()`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew())
- μμλ₯Ό μν λλ μμ§μΌλ‘ μ΄λνλ ν¨μ.
![MDN ref](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate()/translate.png)
- `<length>`, `<percentage>` κ°μ νμ©ν΄ μμλ₯Ό μ΄λμν¬ κ±°λ¦¬λ₯Ό λνλΈλ€.
  * κ°μ νλλ§ μμ±ν κ²½μ°: xμΆμΌλ‘λ§ μ΄λνλ€.
  * κ°μ `,`λ‘ κ΅¬λΆν΄ λ κ°λ₯Ό μμ±ν κ²½μ°: xμΆ, yμΆμΌλ‘ μ΄λνλ€.
  * `px`, `vh`, `vw`, `em`, `rem`, `%` λ±μ λ¨μλ₯Ό μ¬μ©νλ€.
```css
div.translate {
  transform: translate(100%, -400px);
}
```

#### `skew()`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/skew())
- 2Dμμ μμλ₯Ό κΈ°μΈμ΄λ ν¨μ.
- `<angle>` κ°μ νμ©ν΄ μμλ₯Ό κΈ°μΈμΌ μ μλ€.
  * μμ κ°μΈ κ²½μ° μκ³ λ°©ν₯μΌλ‘, μμ κ°μΈ κ²½μ° λ°μκ³ λ°©ν₯μΌλ‘ νμ μν¨λ€.
  * `deg`(κ°λ), `grad`, `rad`, `turn`(νμ ) λ±μ λ¨μλ₯Ό μ¬μ©νλ€.
    (μ: `90deg` = `100grad` = `0.25turn` = `1.5708rad`)
  * κ°μ νλλ§ μμ±ν κ²½μ°: xμΆμΌλ‘λ§ κΈ°μΈμΈλ€.
  * κ°μ `,`λ‘ κ΅¬λΆν΄ λ κ°λ₯Ό μμ±ν κ²½μ°: xμΆ, yμΆμΌλ‘ κΈ°μΈμΈλ€.
```css
div.skew {
  transform: skew(45deg);
}
```

### `transform-origin`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin)
- μμ(Element)μ λ³ν μμ μ μ€μ νλ μμ±(property).
- `center`(κΈ°λ³Έκ°, `50% 50%`μ λμΌ), `left`, `top`, `bottom`, `right` λ± ν€μλ κ°μ νμ©ν  μ μκ³ , `<length>`, `<percentage>`λ μ¬μ©ν  μ μλ€.
```css
div.transform-origin {
  transform-origin: top left;
}
```

---
## π§± Transition
### `transition` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/transition)
- `transition-property`, `transition-duration`, `transition-timing-function`, `transition-delay`λ₯Ό μ€μ νλ λ¨μΆ μμ±(property).
- `<time>` μλ£νμ λ κ°μ§ μμ±μ΄ νμ©νκ³  μκΈ° λλ¬Έμ λ¨Όμ  μμ±λ κ°μ΄ `transition-duration`, λμ€μ μμ±λ κ°μ΄ `transition-delay`λ‘ μ€μ λλ€.
  * `transition-delay`: `0s`
  * `transition-duration`: `0s`
  * `transition-property`: `all`
  * `transition-timing-function`: `ease`
```css
div.transition {
  transition: all 3s linear 1s;
}
```

### `transition-property`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)
- μ ν ν¨κ³Όλ₯Ό μ μ©ν΄μΌ νλ μμ±μ μ€μ νλ μμ±(property).
- λ¨μΆ μμ±μ μ€μ νλ©΄ νμ λͺ¨λ  μμ±μ μ ν ν¨κ³Όκ° μ μ©λλ€.
- `none`, `all` λ± ν€μλ κ°κ³Ό ν΄λΉ μμ± κ°μ νμ©ν  μ μλ€.
```css
div.transition {
  transition-property: all;
}
```

### `transition-duration`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)
- μ ν ν¨κ³Όκ° μλ£λλ λ° κ±Έλ¦¬λ μκ°μ μ€μ νλ€.
- `0s`κ° κΈ°λ³Έκ°μ΄κΈ° λλ¬Έμ κΈ°λ³Έμ μΌλ‘λ μ ν ν¨κ³Όκ° λ°μνμ§ μλλ€.
- `<time>` κ°κ³Ό `s`, `ms` λ¨μλ₯Ό νμ©ν΄ μκ°μ μ€μ ν  μ μκ³ , κ°κ° λ€λ₯Έ μκ°μ μ€μ ν  μλ μλ€.
```css
div.transition {
  transition-property: margin-right, color;
  transition-duration: 3s, 10ms;
}
```

### `transition-delay`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/transition-delay)
- μ ν ν¨κ³Όλ₯Ό μ μ©νλ μκ°μ μ§μ°μν€λλ‘ μ€μ νλ μμ±(property).
- `0s`κ° κΈ°λ³Έκ°μ΄κΈ° λλ¬Έμ κΈ°λ³Έμ μΌλ‘λ μ ν ν¨κ³Όκ° λ°μνμ§ μλλ€.
- `<time>` κ°κ³Ό `s`, `ms` λ¨μλ₯Ό νμ©ν΄ μκ°μ μ€μ ν  μ μκ³ , κ°κ° λ€λ₯Έ μκ°μ μ€μ ν  μλ μλ€.
```css
div.transition {
  transition-property: margin-right, color;
  transition-duration: 3s;
  transition-delay: 3s;
}
```

### `transition-timing-function`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- μ ν ν¨κ³Όκ° μ μ©λλ μ€κ° κ³Όμ μ μκ°μ μ€μ νλ μμ±(property).
- `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out` λ± ν€μλ κ°κ³Ό `bezier()` ν¨μ κ°, `steps()` ν¨μ κ° λ±μ νμ©ν΄ μ€κ° κ³Όμ μ μ€μ ν  μ μλ€.

---
## π§± Animation

### `animation` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/animation)
- λ€μμ μ€νμΌμ μ ννλ μ λλ©μ΄μμ μ μ©νλ λ¨μΆ μμ±.
- `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, `animation-play-state`μ λ¨μΆ μμ±μ΄λ€.
- μ¬μ©μμ μνΈμμ©μ λ°λΌ μμ§μ΄λ `transition`κ³Ό λ¬λ¦¬, `hover`, `active` λ±μ μ΄λ²€νΈκ° μλ€κ³  ν΄λ μλμΌλ‘ μμ§μμ μ€μ νλ κ²μ΄ `animation`μ΄λ€.
- `@keyframes`λ₯Ό νμ©ν΄ μ¬λ¬κ°μ§ μνλ₯Ό μ§μ νκ³  μ΄λ₯Ό μ λλ©μ΄μ μ²λ¦¬ν  μ μλ€.
- λ¨μΆ μμ±μ νΉμ± μ μμ±νμ§ μμΌλ©΄ κΈ°λ³Έ κ°μΌλ‘ μ μ©λλ€.
  * `animation-name`: `none`
  * `animation-duration`: `0s`
  * `animation-timing-function`: `ease`
  * `animation-delay`: `0s`
  * `animation-iteration-count`: `1`
  * `animation-direction`: `normal`
  * `animation-fill-mode`: `none`
  * `animation-play-state`: `running`
```css
div.animation {
  animation: 3s linear 1s infinite reverse forwards running my-animation;
}
```

### `@keyframes`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/@keyframes)
- μ λλ©μ΄μ μ€κ°μ€κ°μ νΉμ  μ§μ λ€μ κ±°μΉ  μ μλ keyframesλ₯Ό μ€μ νμ¬ μ λλ©μ΄μ μ€κ° μ μ°¨λ₯Ό μ μ΄ν  μ μκ² νλ κ·μΉμ΄λ€.
```css
@keyframes keyframesName {
  0% {
    margin-left: 100%;
    width: 300%;
  }
  50% {
    margin-left: 0%;
    width: 100%;
  }
  100% {
    margin-left: 100%;
    width: 300%;
  }
}
```
- λ°λμ Time Offset(μ¦, `%`λ₯Ό νμ©ν μκ°μ λν κ·μΉ)μ μμ±ν΄μΌ νλ€.
- `keyframes`κ° μ¬λ¬λ² μ μλ κ²½μ°μλ κ°μ₯ μ΅κ·Όμ μ μλ `keyframes`μ μ μΈλ κ°λ§ μ ν¨νλ€.

### `animation-name`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name)
- μμ(element)μ μ μ©ν  μ λλ©μ΄μμ `keyframes`μ μ΄λ¦μ μ§μ νλ μμ±(property).
- `none`(κΈ°λ³Έκ°), `<custom-ident>` κ°μ νμ©ν  μ μλ€.
  * λμλ¬Έμλ₯Ό κ΅¬λΆνλ€.
  * `a` - `z`, `0` - `9`, `-`, `_`λ§ μ¬μ©ν  μ μλ€.

### `animation-duration`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/animation-duration)
- μ λλ©μ΄μμ΄ ν μ¬μ΄ν΄μ μλ£νλ λ° κ±Έλ¦¬λ μκ°μ μ§μ νλ μμ±(property).
- `0s`(κΈ°λ³Έκ°), `<time>` κ°μ νμ©ν΄ μ€μ ν  μ μλ€.
  * μμ κ°μ μ ν¨νμ§ μμΌλ―λ‘, λ¬΄μλλ€.
  * `s`, `ms`λ‘ μ§μ ν  μ μλ€.

### `animation-delay`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/animation-delay)
- μ λλ©μ΄μμ΄ μμν  μμ μ μ§μ νλ μμ±(property).
- `0s`(κΈ°λ³Έκ°), `<time>` κ°μ νμ©ν΄ μ€μ ν  μ μλ€.
  * μμ κ°μ μ§μ νλ©΄, μ λλ©μ΄μμ μ¦μ μμλμ§λ§, μ λλ©μ΄μμ΄ μ§νλλ λμ€μ μμλλ€.
  * `s`, `ms`λ‘ μ§μ ν  μ μλ€.

### `animation-timing-function`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)
- κ° μ¬μ΄ν΄μ μ§μ μκ° λμ μ λλ©μ΄μμ΄ μ§νλλ λ°©μμ μ€μ νλ μμ±(property).
- `ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out` λ± ν€μλ κ°κ³Ό `bezier()` ν¨μ κ°, `steps()` ν¨μ κ° λ±μ νμ©ν΄ μ€κ° κ³Όμ μ μ€μ ν  μ μλ€.

### `animation-iteration-count`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count)
- μ λλ©μ΄μμ μ¬μ νμ(λ°λ³΅ νμ)λ₯Ό μ€μ νλ μμ±(property).
- `1`(κΈ°λ³Έκ°), `<number>`, `infinite` κ°μ νμ©ν΄ μ€μ ν  μ μλ€.
  `infinite`μ μ€μ νλ©΄ λ¬΄νλλ‘ μ¬μμ΄ λ°λ³΅λλ€.

### `animation-direction`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/animation-direction)
- μ λλ©μ΄μμ μ΄λ€ λ°©ν₯μΌλ‘ μ¬μν  μ§ μ¬λΆλ₯Ό μ€μ νλ μμ±(property).
- `normal`(κΈ°λ³Έκ°), `reverse`, `alternate`, `alternate-reverse` λ± ν€μλ κ°μ νμ©ν΄ μ€μ ν  μ μλ€.
  * `normal`: μ λ°©ν₯ μ¬μ.
  * `reverse`: μ­λ°©ν₯ μ¬μ.
  * `alternate`: μ λ°©ν₯ ν μ­λ°©ν₯ μ¬μ.
  * `alternate-reverse`: μ­λ°©ν₯ ν μ λ°©ν₯ μ¬μ.

### `animation-play-state`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state)
- μ λλ©μ΄μμ μ€ν λλ μΌμ μ μ§ μ¬λΆλ₯Ό μ€μ νλ μμ±(property).
- `running`(κΈ°λ³Έκ°), `paused`μ νμ©ν΄ μ€μ ν  μ μλ€.
```css
div.animation:hover {
  animation-play-state: paused;
}
```

### `animation-fill-mode`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/animation-fill-mode)
- μ λλ©μ΄μμ΄ μ€ν μ κ³Ό νμ λμμ μ€νμΌμ μ μ©νλ λ°©λ²μ μ§μ νλ μμ±(property).
- `none`(κΈ°λ³Έκ°), `forwards`, `backwards`, `both` κ°μ νμ©ν΄ μ€μ ν  μ μλ€.
  * `none`: κΈ°μ‘΄μ μμ±λ μ€νμΌμ μ μ§νλ€.
  * `forwards`: λλ  λ μ λλ©μ΄μμ λ§μ§λ§ `keyframes`λ₯Ό μ μ§νλ€.
  * `backwards`: μμν  λ μ λλ©μ΄μμ μ²« `keyframes`λ₯Ό μ μ§νλ€.
  * `both`: `forwards`, `backwards`κ° λͺ¨λ μ μ©λλ€.
```css
div.animation {
  animation-fill-mode: forwards;
}
```

---
## π§± FLEX
### κ°μ
μ¬λ¬ μμ(element)λ₯Ό ν μ€λ‘ μ λ ¬νλ λ°©λ²μλ 3κ°μ§κ° μλ€.
1. `display: inline-block;`
   κ°νμ΄ κ³΅λ°±μΌλ‘ μΈμ λμ΄, μμΉ μλ μ¬λ°±μ΄ μ‘΄μ¬νκ² λλ€.
2. `float: left;`
   Normal Flowμμ λ²μ΄λκΈ° λλ¬Έμ λμ΄λ₯Ό μλμΌλ‘ κ°μ§ λͺ»νκ² λ containerμ heightλ₯Ό λ°λ‘ μ§μ ν΄μ£Όμ΄μΌ νλ€.
3. `display: flex;`
   * μμμ λ΄λΆ λμ€νλ μ΄ μ νμ μ€μ νλ κ°μΌλ‘, `flex`, `grid` λ±μ΄ μλ€.
   * μμμ μΈλΆ λμ€νλ μ΄ μ νμ ν¨κ» μ€μ νλ κ°μΌλ‘, `inline-flex` λ±μ κ°μ νμ©ν  μ μλ€.
   * containerμ itemμ νμ©νλ κ°κ°μ μμ±(property)μ μ μ νκ² μ¬μ©ν΄μΌ νλ€.
   * main-axis(μ£Ό μΆ), cross-axis(κ΅μ°¨μΆ)

### [flex-container] `flex-direction`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-direction)
- `flex-container`μ λ΄λΆμ `flex-item`μ λ°°μΉν  λ μ¬μ©ν  `main-axis`μ μ λ ¬ λ°©ν₯μ μ§μ νλ μμ±(property).
- π **Value**
  ν€μλ κ°: `row`(κΈ°λ³Έκ°), `row-reverse`, `column`, `column-reverse`
  * `row`(κΈ°λ³Έκ°)
    `main-axis`κ° **κ°λ‘ μΆ**μ΄κ³ , μΌμͺ½μμ μ€λ₯Έμͺ½ λ°©ν₯μΌλ‘ μ λ ¬λλ€.
  * `row-reverse`
    `main-axis`κ° **κ°λ‘ μΆ**μ΄κ³ , μ€λ₯Έμͺ½μμ μΌμͺ½ λ°©ν₯μΌλ‘ μ λ ¬λλ€.
  * `column`
    `main-axis`κ° **μΈλ‘ μΆ**μ΄κ³ , μμͺ½μμ μλμͺ½ λ°©ν₯μΌλ‘ μ λ ¬λλ€.
  * `column-reverse`
    `main-axis`κ° **μΈλ‘ μΆ**μ΄κ³ , μλμͺ½μμ μμͺ½ λ°©ν₯μΌλ‘ μ λ ¬λλ€.
```css
div.flex-container.flex-direction {
  flex-direction: column;
}
```

### [flex-container] `flex-wrap`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-wrap)
- `flex-item`μ κ°μ λ‘ ν μ€μ λ°°μΉν  μ§, κ°λ₯ν μμ­ λ΄μμ λ²μ΄λμ§ μκ³  μ¬λ¬ νμΌλ‘ λλμ΄ ννν  κ²μΈμ§λ₯Ό κ²°μ νλ μμ±(property).
- π **Value**
  ν€μλ κ°: `nowrap`(κΈ°λ³Έκ°), `wrap`, `wrap-reverse`
  * `nowrap`(κΈ°λ³Έκ°)
    `flex-item`μ ν μ€μ λ°°μΉνκ³ , `flex-direction`μ μν΄ κ²°μ λ λ°©ν₯μΌλ‘ μ€μ λλ€.
  * `wrap`
    `flex-item`μ μ¬λ¬ νμ κ±Έμ³μ λ°°μΉλκ³ , `flex-direction`μ μν΄ κ²°μ λ λ°©ν₯μΌλ‘ μ€μ λλ€.
  * `wrap-reverse`
    `flex-item`μ μ¬λ¬ νμ κ±Έμ³μ λ°°μΉλμ§λ§, μμκ° λμ΄λλ λ°©ν₯μ΄ λ°λλ‘ μ€μ λλ€.
```css
div.flex-container.flex-wrap {
  flex-wrap: wrap;
}
```

### [flex-container] `flex-flow` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-flow)
- `flex-direction`κ³Ό `flex-wrap`μ λ¨μΆ μμ±(property).
- λ μμ±μ μ¬μ©ν  μ μλ ν€μλ κ°μ κ³΅λ°±μΌλ‘ κ΅¬λΆνμ¬ μμ±νλ€.
```css
div.flex-container.flex-flow {
  flex-flow: column wrap;
}
```

### [flex-container] `justify-content`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
- main-axisμ κΈ°μ€μΌλ‘ flex-item μ¬λ¬ μ€μ μ΄λ»κ² μ λ ¬νμ¬ λ°°μΉν  μ§λ₯Ό μ€μ νλ μμ±(property).
- `normal`(κΈ°λ³Έκ°), `center`, `start`, `end`, `flex-start`, `flex-end`, `left`, `right`, `space-between`, `space-around`, `space-evenly`, `safe`, `unsafe` λ±μ ν€μλ κ°μ νμ©ν΄ μ€μ ν  μ μλ€.
  * `normal`(κΈ°λ³Έκ°)
  * `center`: main-axisλ₯Ό κΈ°μ€μΌλ‘ μ€μ μ λ ¬νμ¬ λ°°μΉ.
  * `flex-start`: main-axisκ° μμνλ λΆλΆλΆν° λ°°μΉ.
  * `flex-end`: main-axisκ° λλλ λΆλΆλΆν° λ°°μΉ.
  * `space-between`: μμ κ° μ¬λ°±μ΄ λμΌν ν¬κΈ°λ‘ λ°°μΉ.
  * `space-around`: μμ μ’, μ°λ‘ λμΌν μ¬λ°±μ κ°λλ‘ λ°°μΉ.
  * `space-evenly`: λͺ¨λ  μ¬λ°±μ΄ λμΌν ν¬κΈ°λ₯Ό κ°λλ‘ λ°°μΉ.
<iframe height="300" style="width: 100%;" scrolling="no" title="" src="https://codepen.io/hyoungqu23/embed/PojmMpY?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hyoungqu23/pen/PojmMpY">
  </a> by hyoungqu23 (<a href="https://codepen.io/hyoungqu23">@hyoungqu23</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### [flex-container] `align-items`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
- cross-axisμ κΈ°μ€μΌλ‘ flex-item νλμ μ€μ μμΉλ₯Ό μ§μ νλ μμ±(property).
- λͺ¨λ  νμ flex-itemλ€μ λν align-self μμ±(property)μ κ°μ μ§μ νλ μμ±(property).
- `stretch`(κΈ°λ³Έκ°), `center`, `start`, `end`, `flex-start`, `flex-end`, `self-start`, `self-end`, `baseline`, `first baseline`, `last baseline`, `safe`, `unsafe` λ±μ ν€μλ κ°μ νμ©ν΄ μ€μ ν  μ μλ€.
  * `stretch`(κΈ°λ³Έκ°)
  * `center`: cross-axisλ₯Ό κΈ°μ€μΌλ‘ μ€μ μ λ ¬νμ¬ λ°°μΉ.
  * `flex-start`: cross-axisκ° μμνλ λΆλΆλΆν° λ°°μΉ.
  * `flex-end`: cross-axisκ° λλλ λΆλΆλΆν° λ°°μΉ.
<iframe height="300" style="width: 100%;" scrolling="no" title="FLEX-container || align-items" src="https://codepen.io/hyoungqu23/embed/ZEyyzpM?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hyoungqu23/pen/ZEyyzpM">
  FLEX-container || align-items</a> by hyoungqu23 (<a href="https://codepen.io/hyoungqu23">@hyoungqu23</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### [flex-container] `align-content`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/align-content)
- cross-axisμ κΈ°μ€μΌλ‘ flex-item μ¬λ¬ μ€μ μ΄λ»κ² μ λ ¬νμ¬ λ°°μΉν  μ§λ₯Ό μ€μ νλ μμ±(property).
- μ»¨νμΈ  μ¬μ΄μ μ£Όμ λΉ κ³΅κ°μ cross-axisμ λ°λΌ λ°°μΉνλ λ°©μμ κ²°μ νλ μμ±(property).
- `flex-wrap: nowrap;`κ³Ό κ°μ΄ ν μ€λ‘λ§ μ΄λ£¨μ΄μ§ flex-containerμλ ν¨κ³Όκ° μλ€.
- `normal`(κΈ°λ³Έκ°), `center`, `start`, `end`, `flex-start`, `flex-end`, `baseline`, `first baseline`, `last baseline`, `space-between`, `space-around`, `space-evenly`, `stretch`, `safe`, `unsafe` λ±μ ν€μλ κ°μ νμ©ν΄ μ€μ ν  μ μλ€.
  * `normal`(κΈ°λ³Έκ°)
  * `center`: main-axisλ₯Ό κΈ°μ€μΌλ‘ μ€μ μ λ ¬νμ¬ λ°°μΉ.
  * `flex-start`: main-axisκ° μμνλ λΆλΆλΆν° λ°°μΉ.
  * `flex-end`: main-axisκ° λλλ λΆλΆλΆν° λ°°μΉ.
  * `space-between`: μμ κ° μ¬λ°±μ΄ λμΌν ν¬κΈ°λ‘ λ°°μΉ.
  * `space-around`: μμ μ’, μ°λ‘ λμΌν μ¬λ°±μ κ°λλ‘ λ°°μΉ.
  * `space-evenly`: λͺ¨λ  μ¬λ°±μ΄ λμΌν ν¬κΈ°λ₯Ό κ°λλ‘ λ°°μΉ.
<iframe height="300" style="width: 100%;" scrolling="no" title="FLEX-container || align-content" src="https://codepen.io/hyoungqu23/embed/OJggLZx?default-tab=css%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/hyoungqu23/pen/OJggLZx">
  FLEX-container || align-content</a> by hyoungqu23 (<a href="https://codepen.io/hyoungqu23">@hyoungqu23</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### [flex-item] `order`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/align-content)
- flex-container νΉμ grid-container λ΄λΆμμ νμ¬ μμμ λ°°μΉ μμλ₯Ό μ§μ νλ μμ±(property).
- `<integer>`(`0`μ΄ κΈ°λ³Έκ°) κ°μ νμ©ν΄ μ€μ ν  μ μκ³ , μ€λ¦μ°¨μμΌλ‘ μ λ ¬λκ³  κ°μ κ°μΈ κ²½μ° μ½λ μμ± μμλλ‘ μ λ ¬λλ€.
- νλ©΄μ λ³΄μ΄λ μμμλ§ μν₯μ λ―ΈμΉλ€.
```css
div.flex-item:nth-child(3) {
  order: -1;
}
```

### [flex-item] `flex` Shorthand(λ¨μΆ μμ±)
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex)
- flex-itemμ ν¬κΈ°λ₯Ό νλνκ±°λ μΆμνλ λ°©λ²μ μ€μ νλ μμ±(property).
- `flex-grow`(`0`), `flex-shrink`(`1`), `flex-basis`(`auto`)μ λ¨μΆ μμ±.
- λͺμμ μΌλ‘ μ€μ νμ§ μμΌλ©΄ κΈ°λ³Έκ°μΌλ‘ μ€μ λμ§λ§, `flex-basis` μμ±μ λͺμνμ§ μμΌλ©΄, `0`μ΄ λλ€.
- κ°μ `<number>` νλλ§ μ€μ νλ©΄, `flex-grow`κ° λλ€.
- κ°μ `<length>` λλ `<percentage>`λ₯Ό νλλ§ μ§μ νλ©΄ `flex-basis`μ΄ λλ€.
- κ°μ΄ λ κ°μΌλ, μ²« λ²μ§Έ κ°μ `<number>`μ¬μΌ νλ©° `flex-grow`κ° λλ€.
  * `<number>`λ₯Ό μ§μ νλ©΄ `flex-shrink`κ° λλ€.
  * `<length>`, `<percentage>`, λλ `auto`λ₯Ό μ§μ νλ©΄ `flex-basis`κ° λλ€.
- `initial`μ κΈ°λ³Έκ°μΌλ‘ μ€μ λλ€.
- `auto`λ `1`, `1`, `auto`λ‘ μ€μ λμ΄ νλ/μΆμκ° λλ€.
- `none`μ `0`, `0`, `auto`λ‘ μ€μ λμ΄ νλ/μΆμκ° λμ§ μλλ€.

### [flex-item] `flex-grow`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-grow)
- flex-itemμ΄ flex-container λ΄λΆμμ ν λΉ κ°λ₯ν κ³΅κ°μ μ λλ₯Ό μ μΈνλ μμ±(property).
- λͺ¨λ  flex-itemμ ν¬κΈ°κ° flex-containerλ³΄λ€ μμ κ²½μ°(μ¦, λ¨λ κ³΅κ°μ΄ μλ κ²½μ°)μλ§ μ¬μ© κ°λ₯νλ€.
- `<number>` κ°(0 μ΄μμ μμκ°)μ νμ©ν΄ μ€μ ν  μ μκ³ , `0`μ΄ κΈ°λ³Έκ°μ΄λ€.
- λμΌν κ°μ κ°μ§ flex-itemμ λͺ¨λ λμΌν κ³΅κ° λΉμ¨μ κ°μ§λ€.
```css
div.flex-item.flex-grow {
  flex-grow: 1;
}
```

### [flex-item] `flex-shrink`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-shrink)
- flex-itemμ ν¬κΈ°λ₯Ό μΆμνλ λΉμ¨μ μ€μ νλ μμ±(property).
- flex-itemμ ν¬κΈ°κ° flex-containerλ³΄λ€ ν° κ²½μ°μλ§ μ¬μ© κ°λ₯νλ€.
- `<number>` κ°(0 μ΄μμ μμκ°)μ νμ©ν΄ μ€μ ν  μ μκ³ , `1`μ΄ κΈ°λ³Έκ°μ΄λ€.
- `0`μΈ κ²½μ°μλ ν΄λΉ flex-itemμ μλ³Έ ν¬κΈ°λ₯Ό μ μ§νλ€.
```css
div.flex-item.flex-shrink {
  flex-shrink: 2;
}
```

### [flex-item] `flex-basis`
[MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-basis)
- flex-itemμ μ΄κΈ° ν¬κΈ°λ₯Ό μ§μ νλ μμ±(property).
- `flex-grow`, `flex-shrink` μμ±μ `flex-basis` μμ± κ°μ μ μΈνκ³  νλλκ±°λ μΆμλλ€.
- `auto`(κΈ°λ³Έκ°), `<length>`, `<percentage>` λ±μ κ°μ νμ©ν΄ μ€μ ν  μ μλ€.
- `0`μΌλ‘ μ€μ νλ©΄ λͺ¨λ  flex-itemμ΄ λμΌν ν¬κΈ°κ° λλ€.
```css
div.flex-item.flex-basis {
  flex-basis: 0;
}
```

### [flex-item] `align-self`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)
- κ° flex-itemμ κ΅μ°¨μΆ μ λ ¬μ μ€μ νλ μμ±(property).
- λ€λ§, ν΄λΉ flex-itemμ΄ ν΄λΉ main-axisμμλ§ μ€μ λλ€.
```css
div.align-self {
  align-self: flex-start;
}
```

---
## π§± GRID Layout

### κ°μ
[MDN](https://developer.mozilla.org/ko/docs/Learn/CSS/CSS_layout/Grids)
- Grid Layoutμ μΉ νμ΄μ§λ₯Ό μν 2μ°¨μ Layout Systemμ΄λ€.
- 1μ°¨μμ μΈ Flex Boxμ λ¬λ¦¬, `main-axis`μ `cross-axis`μ λͺ¨λ λ°°μΉν  μ μλ€.
- `columns`(ν), `rows`(μ΄), `gutter`/`gap`(κ³΅λ°±)
- `grid-container`μ `grid-item`μ νμ©νλ κ°κ°μ μμ±(property)μ μ μ νκ² μ¬μ©ν΄μΌ νλ€.

### Grid Unit
- **`fr`**
  λλΉμ λμ΄μ λν λΉμ¨μ μ€μ νλ λ¨μ.
  μ λ κΈΈμ΄(`px` λ±)μ ν¨κ» μ¬μ©νλ κ²½μ°, μ μ²΄ λλΉμμ ν΄λΉ μ λ κΈΈμ΄λ₯Ό μ μΈν λλ¨Έμ§μ λν λΉμ¨μ μ€μ νλ€.
- **`min-content`**
  ν΄λΉ μ»¨νμΈ μ κ°μ₯ κΈ΄ λ¨μ΄μ κΈΈμ΄μ λ§μΆμ΄ μ΅μμ λλΉκ° μ€μ λλ λ¨μ.
- **`max-content`**
  ν΄λΉ μ»¨νμΈ μ λͺ¨λ  λ΄μ©μ λ§μΆμ΄ μ΅λμ λλΉκ° μ€μ λλ λ¨μ.
- **`auto-fill`**
  μ΄μ κ°μλ₯Ό μ μ°νκ² νμ©ν  μ μκ² μ€μ νλ λ¨μ.
  λ°μν μΉ νμ΄μ§λ₯Ό μ μν  λ μ£Όλ‘ νμ©λλ€.
  νλ©΄μ΄ νλλκ³  μΆμλ  λ κ·Έμ λ§μΆμ΄ μ€μ λ λλΉ ν¬κΈ°λ₯Ό μΆ©μ‘±νλ λΉ κ³΅κ°μ΄ μ‘΄μ¬νλ©΄ μ±μ°λ μμΌλ‘ λ³κ²½λλ€.
- **`auto-fit`**
  μ΄μ κ°μλ₯Ό μ μ°νκ² νμ©ν  μ μκ² μ€μ νλ λ¨μ.
  `auto-fill`κ³Ό λμΌν λ°©μμΌλ‘ λμνμ§λ§, μμμ κ°μκ° μ μ΄ νλ©΄ ν¬κΈ°κ° νλλμμ λ λΉ κ³΅κ°μ΄ λΆλμ΄νκ² μκΈ°λ κ²μ λ°©μ§ν  μ μλ€.
  λ°μν μΉ νμ΄μ§λ₯Ό μ μν  λ μ£Όλ‘ νμ©λλ€.
  νλ©΄μ΄ νλλκ³  μΆμλ  λ κ·Έμ λ§μΆμ΄ μ€μ λ λλΉ ν¬κΈ°λ₯Ό μΆ©μ‘±νλ λΉ κ³΅κ°μ΄ μ‘΄μ¬νλ©΄ μ±μ°λ μμΌλ‘ λ³κ²½λλ€.

### [Grid-Container] `display`
- μμμ λ΄λΆ λμ€νλ μ΄ μ νμ μ€μ νλ κ°μΌλ‘, `flex`, `grid` λ±μ΄ μλ€.
- μμμ μΈλΆ λμ€νλ μ΄ μ νμ ν¨κ» μ€μ νλ κ°μΌλ‘, `inline-grid` λ±μ κ°μ νμ©ν  μ μλ€.

### [Grid-Container] `grid-template-rows`
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)
- Grid Layoutμ νμ κ°μμ ν¬κΈ°λ₯Ό μ§μ νλ μμ±(property).
- π **Value**
  `none`, `<length>`, `<percentage>`, `<flex>`, `max-content`, `min-content`, `minmax(min, max)`, `auto`, `repeat(integer, value)` λ±μ νμ©ν  μ μλ€.
  * `none`(κΈ°λ³Έκ°)
  * `<length>`, `<percentage>`, `<flex>`
  * `max-content`, `min-content`
  * `minmax(min, max)`
  * `auto`
  * `repeat(integer, value)`
### [Grid-Container] `grid-template-columns`

[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)
- Grid Layoutμ μ΄μ κ°μμ ν¬κΈ°λ₯Ό μ§μ νλ μμ±(property).
- π **Value**
  `none`, `<length>`, `<percentage>`, `<flex>`, `max-content`, `min-content`, `minmax(min, max)`, `auto`, `repeat(integer, value)` λ±μ νμ©ν  μ μλ€.
  * `none`(κΈ°λ³Έκ°)
  * `<length>`, `<percentage>`, `<flex>`
  * `max-content`, `min-content`
  * `minmax(min, max)`
  * `auto`
  * `repeat(integer, value)`