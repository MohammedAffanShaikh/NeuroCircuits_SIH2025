import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import StudentDashboard from './components/teacher/StudentDashboard';
import AdminDashboard from './components/admin/AdminDashboard';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  const handleLogin = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType('');
  };

  const renderDashboard = () => {
    switch (userType) {
      case 'teacher':
        return <TeacherDashboard />;
      case 'student':
        return <StudentDashboard />;
      case 'admin':
        return <AdminDashboard onLogout={handleLogout} />;
      case 'government':
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <header className="bg-white border-b border-slate-200 px-8 py-4">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 border-3 border-white rounded-lg"></div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-800">AttendSmart</h1>
                    <p className="text-sm text-slate-500">Government Official Dashboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                  >
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </header>
            <div className="flex items-center justify-center min-h-[80vh] px-8">
              <div className="max-w-4xl w-full">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-800 mb-4">
                    Government Official Dashboard
                  </h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Monitor educational statistics, attendance trends, and policy implementation across districts
                  </p>
                </div>
                <div className="bg-white rounded-3xl p-12 shadow-lg border border-slate-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-8">
                      <div className="w-12 h-12 border-3 border-white rounded-lg"></div>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">Government Oversight</h3>
                    <p className="text-slate-600 text-lg mb-8 max-w-2xl">
                      This dashboard will provide you with district-wide educational insights, 
                      attendance analytics, and policy effectiveness metrics. 
                      Monitor implementation progress and make data-driven decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return <LoginPage onLogin={handleLogin} />;
    }
  };

  return (
    <div>
      {isLoggedIn ? renderDashboard() : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}