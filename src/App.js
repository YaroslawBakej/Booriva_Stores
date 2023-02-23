import { Route, Routes } from "react-router-dom";
import PreviewPage from './pages/PreviewPage/PreviewPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import BasketPage from './pages/BasketPage/BasketPage'
import OrderingPage from "./pages/OrderingPage/OrderingPage";
import CategoryPage from "./pages/CategoryPage/CategoryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element ={<PreviewPage></PreviewPage>}></Route>
      <Route path="/BasketPage" element ={<BasketPage></BasketPage>}></Route>
      <Route path="/OrderingPage" element ={<OrderingPage></OrderingPage>}></Route>
      <Route path="/CategoryPage" element ={<CategoryPage></CategoryPage>}></Route>
      <Route path="*" element = {<NotFoundPage></NotFoundPage>}></Route>
      <Route></Route>
    </Routes>

  );
}

export default App;
