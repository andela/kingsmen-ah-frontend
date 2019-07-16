import React from 'react';
import Landing from './Landing';
import './Article/index.scss';


export default function Home() {
  return (
    <div>
      <Landing />

      <div className="container mx-auto">
        <div className="ce-block">
          <div className="ce-block__content">
            <div className="ce-paragraph cdx-block">
              <h2>Editor.js</h2>
            </div>
          </div>
        </div>
        <div className="ce-block">
          <div className="ce-block__content">
            <div className="ce-paragraph cdx-block">
              Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.
            </div>
          </div>
        </div>
        <div className="ce-block">
          <div className="ce-block__content">
            <div className="ce-paragraph cdx-block">
              <h3>Key features</h3>
            </div>
          </div>
        </div>
        <div className="ce-block">
          <div className="ce-block__content">
            <div className="ce-paragraph cdx-block">
              <ul clasclassNames="cdx-list--unordered">
                <li className="cdx-list__item">It is a block-styled editor</li>
                <li className="cdx-list__item">It returns clean data output in JSON</li>
                <li className="cdx-list__item">Designed to be extendable and pluggable with a simple API</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ce-block">
          <div className="ce-block__content">
            <div className="ce-paragraph cdx-block">
              <ol className="cdx-list--ordered">
                <li className="cdx-list__item">It is a block-styled editor</li>
                <li className="cdx-list__item">It returns clean data output in JSON</li>
                <li className="cdx-list__item">Designed to be extendable and pluggable with a simple API</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="ce-block">
          <div className="ce-block__content">
            <div className="ce-rawtool">
              <code>
                <h2>
                  lorem lorem lorem lorem lorem
                  <h4>header 4</h4>
                </h2>
              </code>
            </div>
          </div>
        </div>
        <div className="ce-block">
          <div className="ce-block__content">
            <div className="ce-paragraph cdx-block">
              <h3>What does it mean «block-styled editor»</h3>
            </div>
          </div>
        </div>
        <div className="ce-block">
          <div className="ce-block__content">
            <div className="ce-paragraph cdx-block">
              Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js
              <mark className="cdx-marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>
              . Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor&lsquo;s Core.
            </div>
          </div>
        </div>
        <div className="ce-block">
          <div className="ce-block__content">
            <div className="ce-delimiter cdx-block" />
          </div>
        </div>
      </div>
    </div>
  );
}
