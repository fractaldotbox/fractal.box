import fs from 'fs';
import { join, extname, basename } from 'path';
import config from '../../package.json';

const caseStudySource = "case-study-source";
const caseStudiesDir = join(process.cwd(), caseStudySource);

const loadAllMarkdownFileNames = (): string[] => fs
  .readdirSync(caseStudiesDir)
  .filter((fileName) => extname(fileName) === '.md')
  .map((fileName) => basename(fileName, '.md'));

const loadMarkdownFile = (fileName: string): Promise<string> => {
  const caseStudyMd = fs.promises.readFile(
    join(caseStudiesDir, fileName.concat('.md')),
    'utf-8'
  );
  return caseStudyMd;
};

export { loadAllMarkdownFileNames, loadMarkdownFile };
