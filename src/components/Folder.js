import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);

  // checking if its a folder or file
  if (explorer.isFolder) {
    return (
      <div>
        {/* printing the folder name */}
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>

          {/* buttons */}
          <div className="button-div">
            <button>📁+</button>
            <button>📄+</button>
          </div>
        </div>

        {/* iterating through folder items */}
        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
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
