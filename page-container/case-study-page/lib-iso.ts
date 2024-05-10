import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import matter from 'gray-matter';

const markdownToReactComponent = (markdown: string, remarkReactComponents: Record<string, unknown>): JSX.Element => unified().use(parse).use(remark2react, { remarkReactComponents }).processSync(markdown).result as JSX.Element;

export { markdownToReactComponent, matter };
