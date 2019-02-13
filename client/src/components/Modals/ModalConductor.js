import React from 'react';

import JoinModal from './JoinModal';
import LoginModal from './LoginModal';
import BitcoinPurchaseModal from './BitcoinPurchaseModal';

const ModalConductor = props => {
  switch (props.currentModal) {
    case 'JOIN':
      return <JoinModal {...props} />;

    case 'LOGIN':
      return <LoginModal {...props} />;

    case 'BITCOIN-PURCHASE':
      return <BitcoinPurchaseModal {...props} />;

    default:
      return null;
  }
}

export default ModalConductor;