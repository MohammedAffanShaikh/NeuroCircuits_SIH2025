import React, { useState } from 'react';
import { Users, UserCheck, UserX, Bell, AlertTriangle, Download, Calendar, Clock, Activity, Shield, MapPin, TrendingUp, FileText, Settings, LogOut, Menu, X, Home, BookOpen, ClipboardList, MessageSquare, Search, ChevronDown, CheckCircle2, Eye, Edit, Printer, Filter, Plus, Save, XCircle, RefreshCw } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedClass, setSelectedClass] = useState('Class 10-A');
  const [showManualOverrideModal, setShowManualOverrideModal] = useState(false);
  const [selectedStudentForOverride, setSelectedStudentForOverride] = useState(null);
  const [manualOverrideNote, setManualOverrideNote] = useState('');
  const [manualOverrideStatus, setManualOverrideStatus] = useState('');
  const [showStudentDetailDrawer, setShowStudentDetailDrawer] = useState(false);
  const [selectedStudentDetails, setSelectedStudentDetails] = useState(null);

  // Sample data for the dashboard
  const summaryStats = [
    { label: 'Total Students', value: 45, icon: Users, color: 'from-blue-500 to-blue-600' },
    { label: 'Present Today', value: 42, icon: UserCheck, color: 'from-green-500 to-green-600' },
    { label: 'Absent Today', value: 3, icon: UserX, color: 'from-red-500 to-red-600' },
    { label: 'Active Alerts', value: 2, icon: Bell, color: 'from-orange-500 to-orange-600' },
  ];

  const attendanceData = [
    { day: 'Mon', present: 42, absent: 3 },
    { day: 'Tue', present: 40, absent: 5 },
    { day: 'Wed', present: 43, absent: 2 },
    { day: 'Thu', present: 41, absent: 4 },
    { day: 'Fri', present: 42, absent: 3 },
    { day: 'Sat', present: 38, absent: 7 },
  ];

  const classWiseAttendance = [
    { id: 1, name: 'Rahul Sharma', class: 'Class 10-A', roll: 15, status: 'present', method: 'RFID', lastUpdated: '2024-04-15 09:15:22' },
    { id: 2, name: 'Priya Patel', class: 'Class 10-A', roll: 22, status: 'present', method: 'Face Recognition', lastUpdated: '2024-04-15 09:14:45' },
    { id: 3, name: 'Amit Kumar', class: 'Class 10-A', roll: 5, status: 'absent', method: 'Pending', lastUpdated: 'N/A' },
    { id: 4, name: 'Sneha Singh', class: 'Class 10-A', roll: 30, status: 'present', method: 'RFID', lastUpdated: '2024-04-15 09:08:37' },
    { id: 5, name: 'Vikram Reddy', class: 'Class 10-A', roll: 38, status: 'absent', method: 'Pending', lastUpdated: 'N/A' },
    { id: 6, name: 'Anjali Mehta', class: 'Class 10-A', roll: 8, status: 'present', method: 'Face Recognition', lastUpdated: '2024-04-15 09:12:18' },
  ];

  const alerts = [
    { id: 1, type: 'absenteeism', message: '3 students absent for 2+ consecutive days', time: '10 mins ago', severity: 'high', status: 'new' },
    { id: 2, type: 'safety', message: 'Unauthorized entry detected at main gate', time: '25 mins ago', severity: 'critical', status: 'new' },
    { id: 3, type: 'device', message: 'RFID reader malfunction - Gate 2', time: '1 hour ago', severity: 'medium', status: 'acknowledged' },
    { id: 4, type: 'unauthorized', message: 'Unrecognized face detected - Main entrance', time: '2 hours ago', severity: 'high', status: 'resolved' },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return 'bg-red-50 border-red-200 text-red-800';
      case 'high': return 'bg-orange-50 border-orange-200 text-orange-800';
      case 'medium': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'present': return 'bg-green-100 text-green-800';
      case 'absent': return 'bg-red-100 text-red-800';
      case 'late': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDateTime = (dateTimeString) => {
    if (dateTimeString === 'N/A' || !dateTimeString) return 'N/A';
    
    const date = new Date(dateTimeString);
    const now = new Date();
    
    // If it's today, show time only
    if (date.toDateString() === now.toDateString()) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    
    // If it's this year, show month and day
    if (date.getFullYear() === now.getFullYear()) {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
    
    // Otherwise, show full date
    return date.toLocaleDateString([], { year: 'numeric', month: 'short', day: 'numeric' });
  };

  const handleManualOverride = (student) => {
    setSelectedStudentForOverride(student);
    setShowManualOverrideModal(true);
  };

  const saveManualOverride = () => {
    // In a real app, this would make an API call to update the attendance
    console.log(`Updating attendance for ${selectedStudentForOverride.name} to ${manualOverrideStatus} with note: ${manualOverrideNote}`);
    
    // Reset form and close modal
    setManualOverrideStatus('');
    setManualOverrideNote('');
    setShowManualOverrideModal(false);
    
    // Show success toast (in a real app)
    alert(`Attendance for ${selectedStudentForOverride.name} updated successfully!`);
  };

  const openStudentDetails = (student) => {
    setSelectedStudentDetails(student);
    setShowStudentDetailDrawer(true);
  };

  const exportReport = (format) => {
    // In a real app, this would generate and download the report
    alert(`Exporting attendance report in ${format} format for ${selectedClass}`);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-xl flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                AttendSmart
              </span>
              <p className="text-xs text-gray-500">Teacher Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: 'home', icon: Home, label: 'Dashboard Home' },
            { id: 'attendance', icon: UserCheck, label: 'Attendance' },
            { id: 'reports', icon: FileText, label: 'Reports' },
            { id: 'alerts', icon: Bell, label: 'Alerts' },
            { id: 'settings', icon: Settings, label: 'Settings' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
              {tab.id === 'alerts' && (
                <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-100 space-y-1">
          <button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-600 hover:bg-gray-50 transition-all">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </button>
          <button className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-600 hover:bg-gray-50 transition-all">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-8 py-4 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 hidden md:block">Teacher Dashboard</h1>
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search students, classes, reports..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Apr 15, 2024</span>
              </div>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              >
                <option value="Class 10-A">Class 10-A</option>
                <option value="Class 10-B">Class 10-B</option>
                <option value="Class 9-A">Class 9-A</option>
                <option value="Class 9-B">Class 9-B</option>
                <option value="Class 8-A">Class 8-A</option>
              </select>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Home Tab */}
          {activeTab === 'home' && (
            <div>
              {/* Summary Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {summaryStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-500">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Charts and Alerts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {/* Attendance Chart */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Weekly Attendance Overview</h2>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View Details</button>
                  </div>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={attendanceData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="day" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#6b7280', fontSize: 12 }}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#6b7280', fontSize: 12 }}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            borderRadius: '12px',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
                          }}
                        />
                        <Legend />
                        <Bar dataKey="present" name="Present" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="absent" name="Absent" fill="#ef4444" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Recent Alerts */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-gray-900">Recent Alerts</h2>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
                  </div>
                  <div className="space-y-4">
                    {alerts.slice(0, 3).map((alert) => (
                      <div key={alert.id} className={`p-4 rounded-xl border ${getSeverityColor(alert.severity)}`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              {alert.type === 'absenteeism' && <UserX className="w-4 h-4" />}
                              {alert.type === 'safety' && <Shield className="w-4 h-4" />}
                              {alert.type === 'device' && <Activity className="w-4 h-4" />}
                              {alert.type === 'unauthorized' && <AlertTriangle className="w-4 h-4" />}
                              <span className="text-sm font-medium">{alert.message}</span>
                            </div>
                            <div className="text-xs">{alert.time}</div>
                          </div>
                          <span className="text-xs px-2 py-1 bg-white rounded-full">{alert.severity}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Attendance */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Recent Attendance</h2>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Student</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Class</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Roll No</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Method</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Last Updated</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classWiseAttendance.map((student) => (
                        <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-gray-900">{student.name}</td>
                          <td className="py-4 px-4 text-gray-600">{student.class}</td>
                          <td className="py-4 px-4 text-gray-600">{student.roll}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(student.status)}`}>
                              {student.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{student.method}</td>
                          <td className="py-4 px-4 text-gray-600">{formatDateTime(student.lastUpdated)}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => openStudentDetails(student)}
                                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleManualOverride(student)}
                                className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Attendance Tab */}
          {activeTab === 'attendance' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Attendance Management</h2>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                  <button 
                    onClick={() => exportReport('PDF')}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all"
                  >
                    <Download className="w-4 h-4" />
                    Export Report
                  </button>
                </div>
              </div>

              {/* Attendance Filters */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                    <select 
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Class 10-A">Class 10-A</option>
                      <option value="Class 10-B">Class 10-B</option>
                      <option value="Class 9-A">Class 9-A</option>
                      <option value="Class 9-B">Class 9-B</option>
                      <option value="Class 8-A">Class 8-A</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                    <div className="flex gap-2">
                      <input 
                        type="date" 
                        className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input 
                        type="date" 
                        className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Statuses</option>
                      <option>Present</option>
                      <option>Absent</option>
                      <option>Late</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Attendance Table */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Student</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Class</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Roll No</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Method</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Last Updated</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classWiseAttendance.map((student) => (
                        <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-gray-900">{student.name}</td>
                          <td className="py-4 px-4 text-gray-600">{student.class}</td>
                          <td className="py-4 px-4 text-gray-600">{student.roll}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(student.status)}`}>
                              {student.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-gray-600">{student.method}</td>
                          <td className="py-4 px-4 text-gray-600">{formatDateTime(student.lastUpdated)}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => openStudentDetails(student)}
                                className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              >
                                <Eye className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => handleManualOverride(student)}
                                className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Attendance Reports</h2>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all">
                    <Printer className="w-4 h-4" />
                    Print Report
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all">
                    <Download className="w-4 h-4" />
                    Export Report
                  </button>
                </div>
              </div>

              {/* Report Filters */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Classes</option>
                      <option>Class 10-A</option>
                      <option>Class 10-B</option>
                      <option>Class 9-A</option>
                      <option>Class 9-B</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                    <div className="flex gap-2">
                      <input 
                        type="date" 
                        className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                    <div className="flex gap-2">
                      <input 
                        type="date" 
                        className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all">
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>

              {/* Analytics Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Attendance Rate Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Class-wise Attendance Rate</h3>
                      <p className="text-gray-500 text-sm mt-1">Average attendance by class</p>
                    </div>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1">
                      Export Data
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </button>
                  </div>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[
                        { class: '10-A', rate: 93 },
                        { class: '10-B', rate: 87 },
                        { class: '9-A', rate: 95 },
                        { class: '9-B', rate: 89 },
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="class" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#6b7280', fontSize: 12 }}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: '#6b7280', fontSize: 12 }}
                          domain={[80, 100]}
                        />
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Attendance Rate']}
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            borderRadius: '12px',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
                          }}
                        />
                        <Bar 
                          dataKey="rate" 
                          name="Attendance Rate" 
                          fill="#3b82f6" 
                          radius={[6, 6, 0, 0]} 
                          barSize={32}
                        >
                          {[
                            { class: '10-A', rate: 93 },
                            { class: '10-B', rate: 87 },
                            { class: '9-A', rate: 95 },
                            { class: '9-B', rate: 89 },
                          ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.rate > 90 ? '#3b82f6' : '#60a5fa'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Attendance Distribution */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Attendance Distribution</h3>
                      <p className="text-gray-500 text-sm mt-1">Overall attendance breakdown</p>
                    </div>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1">
                      View Details
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: 'Present', value: 87 },
                            { name: 'Absent', value: 10 },
                            { name: 'Late', value: 3 },
                          ]}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={100}
                          innerRadius={60}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          <Cell fill="#3b82f6" />
                          <Cell fill="#ef4444" />
                          <Cell fill="#f59e0b" />
                        </Pie>
                        <Tooltip 
                          formatter={(value) => [`${value}%`, 'Percentage']}
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            borderRadius: '12px',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
                          }}
                        />
                        <Legend 
                          layout="vertical"
                          verticalAlign="middle"
                          align="right"
                          formatter={(value, entry, index) => (
                            <span className="text-gray-600 text-sm ml-2">{value}</span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Monthly Trends */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Monthly Attendance Trends</h3>
                    <p className="text-gray-500 text-sm mt-1">Attendance performance over time</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors">
                      6 Months
                    </button>
                    <button className="px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                      1 Year
                    </button>
                  </div>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={[
                      { month: 'Jan', attendance: 92 },
                      { month: 'Feb', attendance: 89 },
                      { month: 'Mar', attendance: 93 },
                      { month: 'Apr', attendance: 91 },
                      { month: 'May', attendance: 94 },
                      { month: 'Jun', attendance: 90 },
                    ]}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis 
                        dataKey="month" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#6b7280', fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{ fill: '#6b7280', fontSize: 12 }}
                        domain={[85, 100]}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value}%`, 'Attendance Rate']}
                        contentStyle={{ 
                          backgroundColor: 'white', 
                          borderRadius: '12px',
                          border: '1px solid #e5e7eb',
                          boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="attendance" 
                        stroke="#3b82f6" 
                        strokeWidth={4}
                        dot={{ r: 8, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
                        activeDot={{ r: 10, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* Alerts Tab */}
          {activeTab === 'alerts' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Alert Management</h2>
                <div className="flex gap-3">
                  <select className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Statuses</option>
                    <option>New</option>
                    <option>Acknowledged</option>
                    <option>Resolved</option>
                  </select>
                  <select className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Types</option>
                    <option>Absenteeism</option>
                    <option>Safety</option>
                    <option>Device</option>
                    <option>Unauthorized</option>
                  </select>
                </div>
              </div>

              {/* Alerts List */}
              <div className="grid grid-cols-1 gap-5">
                {alerts.map((alert) => (
                  <div key={alert.id} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
                        <div className={`p-3 rounded-xl ${getSeverityColor(alert.severity).replace('bg-', 'bg-').replace('border-', 'border-')} flex-shrink-0`}>
                          {alert.type === 'absenteeism' && <UserX className="w-6 h-6" />}
                          {alert.type === 'safety' && <Shield className="w-6 h-6" />}
                          {alert.type === 'device' && <Activity className="w-6 h-6" />}
                          {alert.type === 'unauthorized' && <AlertTriangle className="w-6 h-6" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">{alert.message}</h3>
                            <span className={`text-xs px-2.5 py-1 rounded-full ${
                              alert.status === 'new' ? 'bg-red-100 text-red-800' :
                              alert.status === 'acknowledged' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                            </span>
                            <span className={`text-xs px-2.5 py-1 rounded-full ${getSeverityColor(alert.severity)}`}>
                              {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm mb-4">{alert.time}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full">
                              {alert.type.charAt(0).toUpperCase() + alert.type.slice(1)}
                            </span>
                            <span className="text-xs px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full">
                              Affected: Class 10-A, 10-B
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {alert.status === 'new' && (
                          <>
                            <button className="px-4 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-sm font-medium flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4" />
                              Acknowledge
                            </button>
                            <button className="px-4 py-2.5 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors text-sm font-medium flex items-center gap-2">
                              <AlertTriangle className="w-4 h-4" />
                              Escalate
                            </button>
                          </>
                        )}
                        {alert.status === 'acknowledged' && (
                          <button className="px-4 py-2.5 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors text-sm font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" />
                            Resolve
                          </button>
                        )}
                        {alert.status === 'resolved' && (
                          <button className="px-4 py-2.5 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-colors text-sm font-medium flex items-center gap-2">
                            <RefreshCw className="w-4 h-4" />
                            Reopen
                          </button>
                        )}
                        <button className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm font-medium flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Settings</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Settings */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Profile Settings</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text" 
                        defaultValue="James Dean"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input 
                        type="email" 
                        defaultValue="james.dean@school.edu"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        defaultValue="+91 98765 43210"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <input 
                        type="text" 
                        defaultValue="Mathematics"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <button className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all font-medium">
                      Update Profile
                    </button>
                  </div>
                </div>
                
                {/* Password Change */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Change Password</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                      <input 
                        type="password" 
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                      <input 
                        type="password" 
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                      <input 
                        type="password" 
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all font-medium">
                    Change Password
                  </button>
                </div>
                
                {/* Notification Preferences */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Notification Preferences</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Email Notifications</h4>
                        <p className="text-sm text-gray-500">Receive alerts via email</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">SMS Notifications</h4>
                        <p className="text-sm text-gray-500">Receive alerts via SMS</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900">Push Notifications</h4>
                        <p className="text-sm text-gray-500">Receive alerts via app notifications</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
                
                {/* Attendance Settings */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Attendance Settings</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Default Class</label>
                      <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Class 10-A</option>
                        <option>Class 10-B</option>
                        <option>Class 9-A</option>
                        <option>Class 9-B</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Auto-sync Device</label>
                      <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>RFID Reader - Gate 1</option>
                        <option>RFID Reader - Gate 2</option>
                        <option>Face Recognition Camera - Entrance</option>
                        <option>Face Recognition Camera - Exit</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                {/* Accessibility Options */}
                <div className="lg:col-span-3 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Accessibility Options</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Font Size</label>
                      <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Small</option>
                        <option selected>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contrast Mode</label>
                      <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>Normal</option>
                        <option>High Contrast</option>
                        <option>Dark Mode</option>
                      </select>
                    </div>
                    
                    <div className="flex items-end">
                      <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all font-medium">
                        Apply Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Manual Override Modal */}
      {showManualOverrideModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Manual Attendance Override</h3>
                <button 
                  onClick={() => setShowManualOverrideModal(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {selectedStudentForOverride && (
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white font-semibold">
                      {selectedStudentForOverride.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{selectedStudentForOverride.name}</h4>
                      <p className="text-sm text-gray-500">{selectedStudentForOverride.class} • Roll No: {selectedStudentForOverride.roll}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Status</label>
                    <div className="px-4 py-2 bg-gray-100 rounded-xl">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedStudentForOverride.status)}`}>
                        {selectedStudentForOverride.status.charAt(0).toUpperCase() + selectedStudentForOverride.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">New Status</label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setManualOverrideStatus('present')}
                        className={`flex-1 py-3 rounded-xl border-2 transition-all ${
                          manualOverrideStatus === 'present' 
                            ? 'border-green-500 bg-green-50 text-green-700' 
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        Present
                      </button>
                      <button
                        onClick={() => setManualOverrideStatus('absent')}
                        className={`flex-1 py-3 rounded-xl border-2 transition-all ${
                          manualOverrideStatus === 'absent' 
                            ? 'border-red-500 bg-red-50 text-red-700' 
                            : 'border-gray-200 hover:border-red-300'
                        }`}
                      >
                        Absent
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Note (Optional)</label>
                    <textarea
                      value={manualOverrideNote}
                      onChange={(e) => setManualOverrideNote(e.target.value)}
                      rows={3}
                      placeholder="Add a note explaining this override..."
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                </div>
              )}
              
              <div className="flex gap-3">
                <button
                  onClick={() => setShowManualOverrideModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={saveManualOverride}
                  disabled={!manualOverrideStatus}
                  className={`flex-1 px-4 py-2 rounded-xl font-medium transition-all ${
                    manualOverrideStatus 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Student Detail Drawer */}
      {showStudentDetailDrawer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50">
          <div className="bg-white h-full w-full max-w-md shadow-xl">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Student Details</h3>
                <button 
                  onClick={() => setShowStudentDetailDrawer(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto h-[calc(100%-73px)]">
              {selectedStudentDetails && (
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white text-xl font-semibold">
                      {selectedStudentDetails.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">{selectedStudentDetails.name}</h4>
                      <p className="text-gray-500">{selectedStudentDetails.class} • Roll No: {selectedStudentDetails.roll}</p>
                      <span className={`mt-2 inline-block px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedStudentDetails.status)}`}>
                        {selectedStudentDetails.status.charAt(0).toUpperCase() + selectedStudentDetails.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Attendance History</h5>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="flex justify-between mb-3">
                          <span className="text-sm text-gray-500">This Month</span>
                          <span className="text-sm font-semibold text-gray-900">93% Attendance</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: '93%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Recent Records</h5>
                      <div className="space-y-3">
                        {[
                          { date: '2024-04-10', status: 'present', method: 'RFID' },
                          { date: '2024-04-09', status: 'present', method: 'Face Recognition' },
                          { date: '2024-04-08', status: 'absent', method: 'Manual Override' },
                          { date: '2024-04-07', status: 'present', method: 'RFID' },
                          { date: '2024-04-06', status: 'present', method: 'RFID' },
                        ].map((record, idx) => (
                          <div key={idx} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl">
                            <span className="text-sm text-gray-500">{record.date}</span>
                            <div className="flex items-center gap-3">
                              <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(record.status)}`}>
                                {record.status}
                              </span>
                              <span className="text-xs text-gray-500">{record.method}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Contact Information</h5>
                      <div className="bg-gray-50 rounded-xl p-4 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Parent Name</span>
                          <span className="text-sm font-medium text-gray-900">Mr. Sharma</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Phone</span>
                          <span className="text-sm font-medium text-gray-900">+91 98765 43210</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Email</span>
                          <span className="text-sm font-medium text-gray-900">sharma.parent@email.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;