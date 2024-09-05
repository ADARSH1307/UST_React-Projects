import React, { useState } from 'react';
import { Button, Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import AddUserModal from './AddUserModal';
import AddTransactionModal from './AddTransactionModal';
import Charts from './Charts';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [transactionModalOpen, setTransactionModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [monthDropdownOpen, setMonthDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const toggleUserModal = () => setUserModalOpen(!userModalOpen);
  const toggleTransactionModal = () => setTransactionModalOpen(!transactionModalOpen);
  const toggleMonthDropdown = () => setMonthDropdownOpen(!monthDropdownOpen);
  const toggleUserDropdown = () => setUserDropdownOpen(!userDropdownOpen);

  const addUser = (name) => {
    const newUser = { name, transactions: {} };
    setUsers([...users, newUser]);
    setCurrentUser(newUser);
  };

  const addTransaction = (type, name, amount) => {
    if (!currentUser) return;
    const monthData = currentUser.transactions[selectedMonth] || { income: [], expenses: [] };
    monthData[type].push({ name, amount });
    const updatedUser = {
      ...currentUser,
      transactions: { ...currentUser.transactions, [selectedMonth]: monthData },
    };
    setUsers(users.map(user => user.name === currentUser.name ? updatedUser : user));
    setCurrentUser(updatedUser);
  };

  const currentData = currentUser?.transactions[selectedMonth] || { income: [], expenses: [] };
  const totalIncome = currentData.income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = currentData.expenses.reduce((acc, item) => acc + item.amount, 0);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h3>Profile: {currentUser?.name || 'No User'}</h3>
        </Col>
        <Col className="text-right">
          <Button color="primary" onClick={toggleUserModal}>Add User</Button>
          <Button color="secondary" onClick={toggleTransactionModal}>Add Transaction</Button>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <Dropdown isOpen={userDropdownOpen} toggle={toggleUserDropdown}>
            <DropdownToggle caret>
              {currentUser?.name || 'Select User'}
            </DropdownToggle>
            <DropdownMenu>
              {users.map((user) => (
                <DropdownItem key={user.name} onClick={() => setCurrentUser(user)}>
                  {user.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown isOpen={monthDropdownOpen} toggle={toggleMonthDropdown}>
            <DropdownToggle caret>
              {selectedMonth}
            </DropdownToggle>
            <DropdownMenu>
              {months.map((month) => (
                <DropdownItem key={month} onClick={() => setSelectedMonth(month)}>
                  {month}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h4>Transactions for {selectedMonth}</h4>
          <ul>
            {currentData.income.map((item, index) => (
              <li key={`income-${index}`}>Income: {item.name} - ${item.amount}</li>
            ))}
            {currentData.expenses.map((item, index) => (
              <li key={`expense-${index}`}>Expense: {item.name} - ${item.amount}</li>
            ))}
          </ul>
        </Col>
      </Row>
      <Charts income={totalIncome} expenses={totalExpenses} />
      <AddUserModal isOpen={userModalOpen} toggle={toggleUserModal} addUser={addUser} />
      <AddTransactionModal isOpen={transactionModalOpen} toggle={toggleTransactionModal} addTransaction={addTransaction} />
    </Container>
  );
};

export default Dashboard;