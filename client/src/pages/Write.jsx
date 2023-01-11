import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// 這一頁新增了 react-quill 如不清楚就console.log(value);

const Write = () => {
  const [value, setValue] = useState('');

  // console.log(value); 顯入內容案的東西~

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>發布</h1>
          <span>
            <b>狀態: </b> 草稿
          </span>
          <span>
            <b>能見度: </b> 公共
          </span>
          <input style={{display:"none"}} type="file" id='file' name=''/>
          <label className='file' htmlFor="file">上傳圖片</label>
          <div className="buttons">
            <button>保存</button>
            <button>更新</button>
          </div>
        </div>
        <div className="item">
          <h1>分類</h1>
          {/* 這邊是navbar相關的 */}
          <input type="radio" name='cat' value="art" id='art'/>
          <label htmlFor="art">Art</label>
          <input type="radio" name='cat' value="art" id='art'/>
          <label htmlFor="art">Art</label>
          <input type="radio" name='cat' value="art" id='art'/>
          <label htmlFor="art">Art</label>
          <input type="radio" name='cat' value="art" id='art'/>
          <label htmlFor="art">Art</label>
          <input type="radio" name='cat' value="art" id='art'/>
          <label htmlFor="art">Art</label>
        </div>
      </div>
    </div>
  )
}

export default Write
