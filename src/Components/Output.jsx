// @flow

import React from 'react';
import marked from 'marked';

const renderer = new marked.Renderer();
renderer.link = (href, title, text) =>
  `<a href="${href}" alt="${text}" target="_blank" rel="noopener">${text}</a>`;

renderer.image = (href, title) =>
  `<div class='image'><img src=${href} alt=${title}></div>`;

marked.setOptions({
  renderer,
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
    <div
      className="output"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: markdown }}
    />
  );
};

export default Output;
