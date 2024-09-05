import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const AddTransactionModal = ({ isOpen, toggle, addTransaction }) => {
  const [type, setType] = useState('income');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = () => {
    addTransaction(type, name, Number(amount));
    toggle();
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add Transaction</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="type">Type</Label>
            <Input
              type="select"
              name="type"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="income">Income</option>
              <option value="expenses">Expenses</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="amount">Amount</Label>
            <Input
              type="number"
              name="amount"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>Add</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddTransactionModal;