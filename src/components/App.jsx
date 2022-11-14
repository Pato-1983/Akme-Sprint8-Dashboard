import { Switch, Route } from "react-router-dom";

import SideBar from "./SideBar";
import EmptyWrapper from "./EmptyWrapper";
import ContentWrapper from "./ContentWrapper";
import Chart from "./Chart";
import NotFound from "./NotFound";
import LastProductInDb from "./LastProductInDb";
import ContentRowPanels from "./ContentRowPanels";
import SearchProducts from "./SearchProducts";
import CategoriesInDb from "./CategoriesInDb";


function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <EmptyWrapper>
        <Switch>
          <Route exact path="/" component={ContentWrapper} />
          <Route path="/search-products" component={SearchProducts} />
          <Route path="/content-products" component={ContentRowPanels} />
          <Route path="/last-product-in-db" component={LastProductInDb} />
          <Route path="/categories-in-db" component={CategoriesInDb} />
          <Route path="/products-chart" component={Chart} />
          <Route component={NotFound} />
        </Switch>
      </EmptyWrapper>
    </div>
  );
}

export default App;
