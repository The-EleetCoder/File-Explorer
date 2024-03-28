import { useState } from "react";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import "./styles.css";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  // calling our custom hook
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    // updating our original data (tree)
    setExplorerData(finalTree);
  };

  return (
    <div>
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
}

export default App;
