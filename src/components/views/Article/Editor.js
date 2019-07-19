import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import SimpleImage from '@editorjs/simple-image';
import Paragraph from '@editorjs/paragraph';
import Delimiter from '@editorjs/delimiter';
import InlineCode from '@editorjs/inline-code';
import RawTool from '@editorjs/raw';
import CodeTool from '@editorjs/code';
import Marker from '@editorjs/marker';


const Editor = (data = null) => {
    const editor = new EditorJS({
      holder: 'editorjs',
      placeholder: 'Let`s write an awesome story!',
    
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['link']
        },
        list: {
          class: List,
          inlineToolbar: [
            'link',
            'bold'
          ]
        },
        embed: {
          class: Embed,
          inlineToolbar: false
        },
        image: {
          class: SimpleImage,
          inlineToolbar: true,
          config: {
            placeholder: 'Paste image URL'
          }
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        inlineCode: {
          class: InlineCode,
          shortcut: 'CMD+SHIFT+M',
        },
        raw: RawTool,
        delimiter: Delimiter,
        code: CodeTool,
        Marker: {
          class: Marker,
          shortcut: 'CMD+SHIFT+M',
        }
      },
      data
    });

    return editor;
}

export default Editor;
