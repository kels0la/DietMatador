import React from 'react'
import ModalLaunchContext from './ModalLaunchContext';
import ModalConductor from './ModalConductor';

const withModals = Component =>
  class WithModals extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        activeModal: null,
        modalProps: null,
      }
    }

    openModal = (e, modalName, modalProps) => {
      e.preventDefault();
      this.setState({
        activeModal: modalName,
        modalProps
      });
    };

    closeModal = (e) => {

      if (e) {
        e.preventDefault()
        e.stopPropagation()
      };

      this.setState({
        activeModal: null,
        modalProps: null
      });
    };

    // setModalState = 

    render() {
      return (
        <ModalLaunchContext.Provider value={this.openModal}>
          <Component {...this.props} />
          <ModalConductor
            currentModal={this.state.activeModal}
            closeModal={this.closeModal}
            {...this.state.modalProps}
          />
        </ModalLaunchContext.Provider>
      )
    }
  }

export default withModals;