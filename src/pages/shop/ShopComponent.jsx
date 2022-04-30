import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../component/collections-overview/CollectionsOverviewComponent";
import CollectionPage from "../collection/CollectionComponent";

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;

// import React from "react";
// import { Route } from "react-router-dom";

// import CollectionsOverview from "../../component/collections-overview/CollectionsOverviewComponent";

// import CollectionPage from "../collection/CollectionComponent";

// const ShopPage = ({ match }) => (
//   <div className="shop-page">
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//     <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//   </div>
// );

// export default ShopPage;
