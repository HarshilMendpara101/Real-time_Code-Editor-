import React, { useState, useEffect } from 'react';

const Editor = () => {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');

  useEffect(() => {
    run();
  }, [htmlCode, cssCode, jsCode]);

  function run() {
    let outputScreen = document.getElementById('output-Screen');
    let iframeDoc = outputScreen.contentDocument || outputScreen.contentWindow.document;

    iframeDoc.open();
    iframeDoc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>
            try {
              ${jsCode}
            } catch (error) {
              document.body.innerHTML += '<pre style="color: red;">' + error + '</pre>';
            }
          </script>
        </body>
      </html>
    `);
    iframeDoc.close();
  }

  return (
    <div className='container'>
      <div className='left'>
        <label id='lbl'>HTML</label>
        <textarea
          id='html-code'
          onChange={(e) => setHtmlCode(e.target.value)}
        ></textarea>

        <label id='lbl'>CSS</label>
        <textarea
          id='css-code'
          onChange={(e) => setCssCode(e.target.value)}
        ></textarea>

        <label id='lbl'>JavaScript</label>
        <textarea
          id='js-code'
          onChange={(e) => setJsCode(e.target.value)}
        ></textarea>
      </div>
      <div className='right'>
        <label id='lbl'>Output</label>
        <iframe id='output-Screen'></iframe>
      </div>
    </div>
  );
}

export default Editor;




// import React, { useEffect } from 'react';
// import Codemirror from 'codemirror';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/dracula.css';
// import 'codemirror/mode/javascript/javascript';
// import 'codemirror/addon/edit/closetag';
// import 'codemirror/addon/edit/closebrackets';
// import { lineNumbers } from '@uiw/react-codemirror';

// const Editor = () => {

//   useEffect(() => {
//     async function init() {
//       Codemirror.fromTextArea(document.getElementById('realtimeEditor'), {
//         mode: { name: 'javascript', json: true },
//         theme: 'dracula',
//         autoCloseTags: true,
//         autoCloseBrackets: true,
//         lineNumbers: true,
//       });
//     }
//     init();
//   })

//   return <textarea id='realtimeEditor'></textarea>
// }

// export default Editor
