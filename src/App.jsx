import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import StudentDashboard from './components/teacher/StudentDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import AttendSmartLogo from './components/AttendSmartLogo';

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
        // Sample data for government dashboard
        const totalStudents = 12547;
        const totalSchools = 42;
        const mealsPerStudent = 1;
        const totalMeals = totalStudents * mealsPerStudent;
        const attendanceRate = 92.5;
        const schoolsNeedingSupport = 8;
        
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <header className="bg-white border-b border-slate-200 px-8 py-4">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                  <AttendSmartLogo size="lg" />
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
            <div className="px-8 py-8">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-800 mb-4">
                    Government Official Dashboard
                  </h2>
                  <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                    Monitor educational statistics, attendance trends, and policy implementation across districts
                  </p>
                </div>
                
                {/* Key Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-blue-600 rounded"></div>
                      </div>
                      <span className="text-2xl font-bold text-slate-800">{totalStudents.toLocaleString()}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Total Students</h3>
                    <p className="text-sm text-slate-600">Across all schools in the district</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-green-600 rounded"></div>
                      </div>
                      <span className="text-2xl font-bold text-slate-800">{totalSchools}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Total Schools</h3>
                    <p className="text-sm text-slate-600">Educational institutions</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-amber-600 rounded"></div>
                      </div>
                      <span className="text-2xl font-bold text-slate-800">{totalMeals.toLocaleString()}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Meals to Prepare</h3>
                    <p className="text-sm text-slate-600">Daily meals for all students</p>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <div className="w-6 h-6 bg-purple-600 rounded"></div>
                      </div>
                      <span className="text-2xl font-bold text-slate-800">{attendanceRate}%</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Attendance Rate</h3>
                    <p className="text-sm text-slate-600">Average across all schools</p>
                  </div>
                </div>
                
                {/* Detailed Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Meal Preparation Summary</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                        <span className="text-slate-600">Total Students Enrolled</span>
                        <span className="font-semibold text-slate-800">{totalStudents.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                        <span className="text-slate-600">Meals per Student per Day</span>
                        <span className="font-semibold text-slate-800">{mealsPerStudent}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                        <span className="text-slate-600">Total Daily Meals Required</span>
                        <span className="font-semibold text-slate-800 text-xl">{totalMeals.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center pt-4">
                        <span className="text-slate-600">Estimated Monthly Meals</span>
                        <span className="font-semibold text-slate-800">{(totalMeals * 22).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6">Additional Information</h3>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                        <span className="text-slate-600">Schools Needing Support</span>
                        <span className="font-semibold text-slate-800">{schoolsNeedingSupport}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                        <span className="text-slate-600">Average Class Size</span>
                        <span className="font-semibold text-slate-800">{Math.round(totalStudents / (totalSchools * 30))}</span>
                      </div>
                      <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                        <span className="text-slate-600">Attendance Improvement</span>
                        <span className="font-semibold text-green-600">+2.3% from last month</span>
                      </div>
                      <div className="flex justify-between items-center pt-4">
                        <span className="text-slate-600">Budget Allocation Status</span>
                        <span className="font-semibold text-slate-800">On Track</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Action Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 text-white text-center shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Government Oversight</h3>
                  <p className="text-lg mb-6 max-w-3xl mx-auto opacity-90">
                    This dashboard provides district-wide educational insights, attendance analytics, and policy effectiveness metrics. 
                    Monitor implementation progress and make data-driven decisions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors">
                      Generate Detailed Report
                    </button>
                    <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                      View Policy Recommendations
                    </button>
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