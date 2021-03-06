import React from 'react'

import './preview-collection.styles.scss'

import CollectionItem from '../../components/collection-item/collection-item.component'

const PreviewCollection = ({ title, items, id }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item, id) => (
          <CollectionItem key={id} item={item} />
        ))}
    </div>
  </div>
)

export default PreviewCollection
