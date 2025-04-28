// public/admin/preview-templates/post.js
import CMS from 'netlify-cms-app';
import {createClass} from 'react';
import {h} from 'netlify-cms-app/lib/react';

const PostPreview = createClass({
    render: function() {
      const {entry, widgetFor} = this.props;
      const tags = entry.getIn(['data', 'tags']) || [];
      
      return h('div', {},
        h('h1', {}, entry.getIn(['data', 'title'])),
        h('div', {className: 'tag-container'}, 
          tags.map(tag => h('span', {className: 'tag'}, tag))
        ),
        widgetFor('body')
      );
    }
  });
  
  CMS.registerPreviewTemplate('post', PostPreview);
  