import fs from 'fs';
import { loadAllMarkdownFileNames, loadMarkdownFile } from './lib-server';

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn()
  }
}));

describe('case studies server-side library', () => {
  it('read local folder to get markdown file names', () => {
    fs.readdirSync = jest.fn().mockReturnValue(['caseStudy_1.md', 'otherFile.ts', 'caseStudy_2.md']);

    expect(loadAllMarkdownFileNames()).toEqual(['caseStudy_1', 'caseStudy_2']);
  });

  it('load markdown file by file name', async () => {
    const mockMarkdown = `
    ---
    title: "meta title"
    ---
    # hello markdown
    `;
    fs.promises.readFile = jest.fn().mockReturnValue(Promise.resolve(mockMarkdown));
    const received = await loadMarkdownFile('caseStudy_1.md');
    expect(received).toBe(mockMarkdown);
  });
});
