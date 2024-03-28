import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  // when we click on add button, it should not just expand
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  // handler for adding new folder or file
  const onAddFolder = ((e)=>{
    if (e.keyCode === 13 && e.target.value){
      setShowInput({...showInput, visible: false});
    }
  })

  // checking if its a folder or file
  if (explorer.isFolder) {
    return (
      <div>
        {/* printing the folder name */}
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>

          {/* buttons */}
          <div className="button-div">
            <button onClick={(e) => handleNewFolder(e, true)}>📁+</button>
            <button onClick={(e) => handleNewFolder(e, false)}>📄+</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {/* adding new folder/file */}
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                className="inputContainer-input"
                autoFocus
                type="text"
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={(e)=>onAddFolder(e)}
              />
            </div>
          )}

          {/* iterating through folder items */}
          {explorer.items.map((exp) => {
            return <Folder explorer={exp} key={exp.id} />;
          })}
        </div>
      </div>
    );
  } else {
    // returning file
    return <span className="file">📄 {explorer.name}</span>;
  }
};

export default Folder;
