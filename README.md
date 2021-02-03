- [1. Setup thư mục và cấu trúc Folder](#1-setup-thư-mục-và-cấu-trúc-folder)
  - [CÀI ĐẶT THƯ VIỆN](#cài-đặt-thư-viện)
  - [CẤU TRÚC THƯ MỤC DỰ ÁN](#cấu-trúc-thư-mục-dự-án)
- [2. Routing (react-route-dom)](#2-routing-react-route-dom)
    - [2.1 `Navlink hoặc <Link>`](#21-navlink-hoac-link)
      - [`Demo`](#demo)
    - [2.2 Một số thuộc tính chuyển đổi `component`](#22-mot-so-thuoc-tinh-chuyen-doi-component)
      - [`history`](#history)

# 1. Setup thư mục và cấu trúc Folder

## CÀI ĐẶT THƯ VIỆN

```javascript
    npm i redux
    npm i react-redux
    npm i styled-components
    npm i axios (Thư viện kết nối API Back-End)
    npm i react-router-dom (Thư viện cấu trúc router)
    npm i andt (Thư viện tạo components UI JSX)
    npm i redux-saga (Thư viện middleware redux)  || Chọn 1 or 2
    npm i redux-thunk (Thư viện middleware redux) || Chọn 1 or 2
    npm i tailwind (Thu vien css)
    ----------------------------
    npm i node-sass (thu vien compiler sass)
    npm i sass-loader (thu vien compiler sass)
    ----------------------------
    npm i ..... (update sau)
```

## CẤU TRÚC THƯ MỤC DỰ ÁN

```javascript
    assets
    components
    HOC
    pages
    redux 
        actions 
        constants 
        reduces
    configStore.js
    services
    template
    util
```

# 2. Routing (react-route-dom)
### 2.1 `Navlink hoặc <Link>`

> - Thu vien `react-router-dom` ho tro ta the `<NavLink>` thay the cho the `<a>` voi href doi thanh to,
> giup cho ta co the chuyen doi qua lai giua cac trang ma khong can load lai toan bo `html` cua trang do.
> - Ngoai ra `<NavLink>` con cho phep ta custom link css, khi nguoi dung go dung duong dan thi the
> `<NavLink>` se  duoc active `class` hoac `style` thong qua thuoc tinh `activeClass`,`activeStyle`

#### `Demo`

```react
    <NavLink>
        exact
        activeStyle = {{color:red}}
        activeClass = "My-style"
        Hello CyberLearn
    </NavLink>
```

### 2.2 Một số thuộc tính chuyển đổi `component`

> - Cac `component` duoc load tren `<Route>` se co them 3 thuoc tinh `props`:
>    -   `history`
>    -   `match`
>    -   `location`

#### `history`

```react
props.history.goBack()              --> Thanh cong dua ve trang truoc do 
    - VD: Home -- Login => thanh cong dua ve trang Home

props.history.push('/<patch name>') --> Chuyen huong den patch tuong ung
    - VD: props.history.push('/home') => Day den trang home

props.history.replace('')           --> Thay doi noi dung
```
