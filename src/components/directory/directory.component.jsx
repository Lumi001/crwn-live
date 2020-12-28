import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySelections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = ({ sections }) =>  {
    return   (
            <div className='directory-menu'>
                {
                   sections.map(({title, imageUrl, id, size, linkUrl}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
                    ))
                }
            </div>      
               )
    
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySelections
});

export default connect(mapStateToProps)(Directory);