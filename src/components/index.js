import React, { Component } from 'react';
import Modal from './commons/Modal';
import RenderInput from './commons/FormComponents/RenderInput';
import Preloader from './commons/Preloader';

export default class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      title: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  toggleModal() {
    const { toggle } = this.state;
    this.setState({
      toggle: !toggle
    });
  }

  render() {
    const { toggle, title } = this.state;
    return (
      <div>

        <button type="button" onClick={this.toggleModal.bind(this)}>Trigger</button>
        <Preloader
          type="button"
          styles="Plane"
          height={50}
          width={50}
          color="blue"
        />
        <Modal toggle={toggle} title="Testing">
          <div className="mt-4 p-4">
            <RenderInput 
              id="title"
              type="text"
              name="title"
              value={title}
              label="Title"
              handleChange={this.handleChange}
              className=""
            />
            <RenderInput 
              id="title"
              type="text"
              name="title"
              value={title}
              label="Title"
              handleChange={this.handleChange}
              className=""
            />
          </div>
        </Modal>
      </div>
    )
  }
}
