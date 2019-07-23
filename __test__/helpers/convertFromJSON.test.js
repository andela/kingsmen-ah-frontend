import convertFromJSON from '@helpers/convertFromJSON';
import renderer from 'react-test-renderer';

const raw = {
  times: 123453,
  blocks: [
    {
      type: 'paragraph',
      data: {
        text: 'Hello World'
      }
    },
    {
      type: 'image',
      data: {
        file : {
          url: 'link',
        },
        caption: 'hello'
      }
    },
    {
      type: 'header',
      data: {
        level: 3,
        text: 'Hello'
      }
    },
    {
      type: 'raw',
      data: {
        html: '<h2>Hello</h2>'
      }
    },
    {
      type: 'code',
      data: {
        code: '<h2>Hello</h2>'
      }
    },
    {
      type: 'list',
      data: {
        style: 'unordered',
        items: [
          "Hello"
        ]
      }
    },
    {
      type: 'list',
      data: {
        style: 'ordered',
        items: [
          "Hello"
        ]
      }
    },
    {
      type: 'delimeter'
    },
    {
      type: 'unknown'
    }

  ]
};

const expectedResult =`
<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-paragraph cdx-block">
      <p>Hello World</p>
    </div>
  </div>
</div>

<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-paragraph cdx-block">
      <img src="link" alt="hello" />
      <div class="text-center">
        <i>hello</i>
      </div>
    </div>
  </div>
</div>

<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-paragraph cdx-block">
      <h3>Hello</h3>
    </div>
  </div>
</div>

<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-code">
      <code><h2>Hello</h2></code>
    </div>
  </div>
</div>

<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-code">
      <code><h2>Hello</h2></code>
    </div>
  </div>
</div>

<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-paragraph cdx-block">
      <ul class="cdx-list--unordered"><li class="cdx-list__item">Hello</li></ul>
    </div>
  </div>
</div>

<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-paragraph cdx-block">
      <ol class="cdx-list--ordered"><li class="cdx-list__item">Hello</li></ol>
    </div>
  </div>
</div>

<div class="ce-block">
  <div class="ce-block__content">
    <div class="ce-delimiter cdx-block"></div>
  </div>
</div>
`;

describe('Helpers', () => {
  it('should convert an object to an HTML string', () => {
    const value = renderer.create(convertFromJSON(raw)).toJSON();
    
    expect(value).toMatchSnapshot(expectedResult);
  });
});
