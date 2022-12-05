import { createContext, useContext, useState } from 'react';

const MarkdownContext = createContext(null);

const MarkdownProvider = ({ children }) => {
  const [markdown, setMarkdown] = useState('');

  return (
    <MarkdownContext.Provider value={[markdown, setMarkdown]}>
        { children }
    </MarkdownContext.Provider>
  );
};

export const useMarkdown = () => useContext(MarkdownContext);

export default MarkdownProvider;
