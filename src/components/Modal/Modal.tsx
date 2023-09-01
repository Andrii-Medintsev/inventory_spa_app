import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { OrderType } from '../../types/interfaces';
import { Order } from '../Order/Order';

type Props = {
  isDeleting: boolean;
  handleDeleting: (prop: boolean) => void;
  setSelectedItemId: (id: number) => void;
  selectedItem: OrderType | undefined;
  handleOrderDelete: (id: number) => void;
}

export const MyModal: React.FC<Props> = ({
  isDeleting,
  handleDeleting,
  setSelectedItemId,
  selectedItem,
  handleOrderDelete,
}) => {

  const handleConfirm = () => {
    handleOrderDelete(selectedItem?.id ? selectedItem.id : 0);
    setSelectedItemId(0);
    handleDeleting(false);
  };

  const handleCancel = () => {
    setSelectedItemId(0);
    handleDeleting(false);
  };

  return (
    <>
      <Modal
        show={isDeleting}
        onHide={handleCancel}
        centered
        className='modal'
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="modal__title">
              Вы уверенны, что хотите удалить этот приход?
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedItem && <Order order={selectedItem} isSmall={true}/>}
        </Modal.Body>
        <Modal.Footer style={{ 'backgroundColor': '#91B958', 'height': '100px' }}>
          <Button
            variant="bg-0 text-light text-uppercase border-0"
            onClick={handleCancel}
            className='modal__button'
          >
            <div className="modal__button-text">
              Отменить
            </div>
          </Button>
          <Button
            variant="light text-danger modal__button text-uppercase rounded-5"
            onClick={handleConfirm}
          >
            <div className="modal__button-text">
              Удалить
            </div>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MyModal;
