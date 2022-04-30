import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/DirectorySelectors";

import MenuItem from "../menu-item/MenuItem";
import "./DirectoryStyles.scss";
// Imoprting style-sheet

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionprops }) => (
      // This de-structoring
      <MenuItem key={id} {...otherSectionprops} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);

// export default DirectoryComponent

// If there is a constructor() function in your component, this function will be called when the component gets initiated.

// moved our directory and shop data into its own reducer, Creaced respective selectors and updated corresponding component with new redux flow for directory/shop
