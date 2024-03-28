import React from "react";

// our custom hook using Depth first search algorithm
const useTraverseTree = () => {
  function insertNode(tree, folderId, name, isFolder) {
    // checking current node
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name,
        isFolder,
        items: [],
      });
      return tree;
    }

    // checking its child nodes
    let latestNode = [];
    latestNode = tree.items.map((obj) => {
      return insertNode(obj, folderId, name, isFolder);
    });

    return { ...tree, items: latestNode };
  }

  return { insertNode };
};

export default useTraverseTree;
