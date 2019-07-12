import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import SimpleImage from '@editorjs/simple-image';
import Quote from '@editorjs/quote';
import Paragraph from '@editorjs/paragraph';
import Table from '@editorjs/table';
import Delimiter from '@editorjs/delimiter';

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
    quote: {
      class: Quote,
      inlineToolbar: true,
      shortcut: 'CMD+SHIFT+O',
      config: {
        quotePlaceholder: 'Enter a quote',
        captionPlaceholder: 'Quote\'s author',
      },
    },
    paragraph: {
      class: Paragraph,
      inlineToolbar: true,
    },
    table: {
      class: Table,
    },
    delimiter: Delimiter,
  }
});

export default editor;
