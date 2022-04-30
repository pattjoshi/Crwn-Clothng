import React from "react";
import { connect } from "react-redux";

import CollectionItem from "../../component/collection-item/CollectionItem";

import { selectCollection } from "../../redux/shop/ShopSelectors";

import "./CollectionStyles.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);

// moved our directory and shop data into its own reducer, Creaced respective selectors and updated corresponding component with new redux flow for directory/shop
