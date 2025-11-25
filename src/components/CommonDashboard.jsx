import React, { useState } from 'react';
import { Users, UserCheck, BookOpen, Monitor, ArrowLeft, School, Building, User, LogOut } from 'lucide-react';
import TeacherDashboard from './teacher/TeacherDashboard';
import StudentDashboard from './teacher/StudentDashboard';

const CommonDashboard = ({ onLogout, userType }) => {
  const [currentView, setCurrentView] = useState('home');

  // Avatar helper functions
  const getAvatarInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const getAvatarColor = (name) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-amber-500',
      'bg-rose-500',
      'bg-indigo-500',
      'bg-teal-500',
      'bg-cyan-500'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const renderDashboard = () => {
    switch (currentView) {
      case 'teacher':
        return <TeacherDashboard />;
      case 'student':
        return <StudentDashboard />;
      case 'admin':
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-8 py-4">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 border-3 border-white rounded-lg"></div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-800">AttendSmart</h1>
                    <p className="text-sm text-slate-500">School Admin Dashboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-slate-600">
                    School Administration Panel
                  </div>
                  {/* Admin Avatar */}
                  <div className={`w-12 h-12 ${getAvatarColor('Admin User')} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {getAvatarInitials('Admin User')}
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <div className="flex items-center justify-center min-h-[80vh] px-8">
              <div className="max-w-4xl w-full">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-800 mb-4">
                    School Admin Dashboard
                  </h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Manage school-wide attendance, generate comprehensive reports, and oversee academic performance
                  </p>
                </div>

                <div className="bg-white rounded-3xl p-12 shadow-lg border border-slate-100">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8">
                      <School className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">School Administration</h3>
                    <p className="text-slate-600 text-lg mb-8 max-w-2xl">
                      This dashboard will allow you to manage multiple classes, teachers, and students. 
                      You'll be able to generate school-wide reports, monitor attendance trends, and 
                      oversee academic performance across all departments.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                      <div className="bg-slate-50 rounded-2xl p-6">
                        <h4 className="font-bold text-slate-800 mb-2">Attendance Overview</h4>
                        <p className="text-sm text-slate-600">Monitor attendance across all classes</p>
                      </div>
                      <div className="bg-slate-50 rounded-2xl p-6">
                        <h4 className="font-bold text-slate-800 mb-2">Performance Reports</h4>
                        <p className="text-sm text-slate-600">Generate comprehensive academic reports</p>
                      </div>
                      <div className="bg-slate-50 rounded-2xl p-6">
                        <h4 className="font-bold text-slate-800 mb-2">Staff Management</h4>
                        <p className="text-sm text-slate-600">Manage teachers and administrative staff</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'government':
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
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
                  <div className="text-sm text-slate-600">
                    Government Oversight Panel
                  </div>
                  {/* Government Official Avatar */}
                  <div className={`w-12 h-12 ${getAvatarColor('Government Official')} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {getAvatarInitials('Government Official')}
                  </div>
                </div>
              </div>
            </header>

            {/* Main Content */}
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
                      <Building className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-slate-800 mb-4">Government Oversight</h3>
                    <p className="text-slate-600 text-lg mb-8 max-w-2xl">
                      This dashboard will provide you with district-wide educational insights, 
                      attendance analytics, and policy effectiveness metrics. 
                      Monitor implementation progress and make data-driven decisions.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
                      <div className="bg-slate-50 rounded-2xl p-6">
                        <h4 className="font-bold text-slate-800 mb-2">District Analytics</h4>
                        <p className="text-sm text-slate-600">View attendance and performance data</p>
                      </div>
                      <div className="bg-slate-50 rounded-2xl p-6">
                        <h4 className="font-bold text-slate-800 mb-2">Policy Impact</h4>
                        <p className="text-sm text-slate-600">Measure effectiveness of initiatives</p>
                      </div>
                      <div className="bg-slate-50 rounded-2xl p-6">
                        <h4 className="font-bold text-slate-800 mb-2">Resource Allocation</h4>
                        <p className="text-sm text-slate-600">Track funding and resource distribution</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Header */}
            <header className="bg-white border-b border-slate-200 px-8 py-4">
              <div className="flex items-center justify-between max-w-7xl mx-auto">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 border-3 border-white rounded-lg"></div>
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-slate-800">AttendSmart</h1>
                    <p className="text-sm text-slate-500">Unified Dashboard</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm text-slate-600">
                    Select a dashboard to get started
                  </div>
                  <button 
                    onClick={onLogout}
                    className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </header>

            {/* Main Content */}
            <div className="flex items-center justify-center min-h-[80vh] px-8">
              <div className="max-w-6xl w-full">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold text-slate-800 mb-4">
                    Welcome to AttendSmart
                  </h2>
                  <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Select a dashboard to manage attendance and track academic performance
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Teacher Dashboard Card */}
                  <div 
                    className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    onClick={() => setCurrentView('teacher')}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                        <UserCheck className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">Teacher Dashboard</h3>
                      <p className="text-slate-600 mb-6">
                        Manage student attendance, generate reports, and monitor classroom performance
                      </p>
                      <div className="flex items-center gap-2 text-blue-600 font-medium">
                        <span>Access Dashboard</span>
                        <Monitor className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Student Dashboard Card */}
                  <div 
                    className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    onClick={() => setCurrentView('student')}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">Student Dashboard</h3>
                      <p className="text-slate-600 mb-6">
                        Track your attendance, view grades, and monitor your academic progress
                      </p>
                      <div className="flex items-center gap-2 text-green-600 font-medium">
                        <span>Access Dashboard</span>
                        <Monitor className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* School Admin Dashboard Card */}
                  <div 
                    className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    onClick={() => setCurrentView('admin')}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                        <School className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">School Admin</h3>
                      <p className="text-slate-600 mb-6">
                        Oversee school-wide operations, manage staff, and generate comprehensive reports
                      </p>
                      <div className="flex items-center gap-2 text-indigo-600 font-medium">
                        <span>Access Dashboard</span>
                        <Monitor className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Government Official Dashboard Card */}
                  <div 
                    className="bg-white rounded-3xl p-8 shadow-lg border border-slate-100 cursor-pointer hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    onClick={() => setCurrentView('government')}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6">
                        <Building className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">Government Official</h3>
                      <p className="text-slate-600 mb-6">
                        Monitor district-wide education metrics, policy impact, and resource allocation
                      </p>
                      <div className="flex items-center gap-2 text-emerald-600 font-medium">
                        <span>Access Dashboard</span>
                        <Monitor className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <div className="inline-flex items-center gap-2 bg-slate-100 rounded-full px-6 py-3 text-sm text-slate-600">
                    <BookOpen className="w-4 h-4" />
                    <span>Select a dashboard to begin managing attendance and academic performance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div>
      {currentView !== 'home' && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-lg text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>
        </div>
      )}
      {renderDashboard()}
    </div>
  );
};

export default CommonDashboard;