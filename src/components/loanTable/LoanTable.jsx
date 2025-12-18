import "./LoanTable.css";

const LoanTable = ({ loans }) => {
  if (loans.length === 0) {
    return <p className="no-data">No loans found</p>;
  }

  return (
    <table className="loan-table">
      <thead>
        <tr>
          <th>Customer Name</th>
          <th>Loan Type</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Created Date</th>
        </tr>
      </thead>
      <tbody>
        {loans.map((loan) => (
          <tr key={loan.id}>
            <td>{loan.customerName}</td>
            <td>{loan.loanType}</td>
            <td>₹ {loan.amount}</td>
            <td>{loan.status}</td>
            <td>{loan.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LoanTable;
