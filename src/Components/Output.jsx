// @flow

import React from 'react';
import marked from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
});

const Output = (props: { input: string }) => {
  const markdown = marked(props.input);
  return (
    <section
      className="output"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  );
};

export default Output;
