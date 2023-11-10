import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

function MarkdownView({ markdown }) {
  return (
    <Markdown rehypePlugins={[rehypeRaw]} remarkPlugins={[remarkGfm]}>
      {markdown}
    </Markdown>
  );
}

export default MarkdownView;
