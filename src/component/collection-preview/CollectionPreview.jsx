import React from "react";
import { withRouter } from "react-router-dom";

import CollectionItem from "../collection-item/CollectionItem";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);

// import React from 'react'

// import './CollectionPreviewStyles.scss'

// import {
//     CollectionPreviewContainer,
//     TitleContainer,
//     PreviewContainer
//   } from './collection-preview.styles';

// const CollectionPreview = ({ title, items }) => (
//     <CollectionPreviewContainer>
//         <h1 className='title'>{title.toUpperCase()}</h1>
//         <div className='preview'>
//             {items
//                 .filter((item, idx) => idx < 4)
//                 // idx < 4 Means show less then 4
//                 .map((item) => (
//                     <CollectionItem key={item.id} item={item} />
//                 ))

//             }
//         </div>
//     </CollectionPreviewContainer>
// );

// export default CollectionPreview;

// // rec
