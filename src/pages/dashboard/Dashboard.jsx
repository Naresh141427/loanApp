import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalData, removeLocalData } from "../../utils/storage";
import LoanTable from "../../components/loanTable/LoanTable"
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loans, setLoans] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  useEffect(() => {
    const currentUser = getLocalData("currentUser");
    const loanData = getLocalData("loans") || [];

    setUser(currentUser);
    setLoans(loanData);
  }, []);

  const handleLogout = () => {
    removeLocalData("currentUser");
    navigate("/login");
  };

  const filteredLoans = loans.filter((loan) => {
  const customerName = loan.customerName || "";

  const matchesSearch = customerName
    .toLowerCase()
    .includes(searchTerm.trim().toLowerCase());

  const matchesStatus =
    statusFilter === "All" || loan.status === statusFilter;

  const matchesType =
    typeFilter === "All" || loan.loanType === typeFilter;

  return matchesSearch && matchesStatus && matchesType;
});

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Welcome, {user?.name}</h2>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by customer name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="All">All Loan Types</option>
          <option value="Home Loan">Home Loan</option>
          <option value="Personal Loan">Personal Loan</option>
          <option value="Car Loan">Car Loan</option>
        </select>
      </div>

      <LoanTable loans={filteredLoans} />
    </div>
  );
};

export default Dashboard;
