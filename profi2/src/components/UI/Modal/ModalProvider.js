import {Component} from "react";
import {ModalContext} from "@/UI/Modal/ModalContext";

class ModalProvider extends Component {
  openModal = (component, props = {}) => {
    this.setState({
      component,
      props
    });
  };

  closeModal = () => this.setState({
    component: null,
    props: {},
  });

  state = {
    component: null,
    props: {},
    openModal: this.openModal,
    closeModal: this.closeModal
  };

  render() {
    return (
      <ModalContext.Provider value={this.state}>
        {this.props.children}
      </ModalContext.Provider>
    );
  }
}

export default ModalProvider
