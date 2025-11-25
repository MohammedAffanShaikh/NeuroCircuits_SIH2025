import React, { useState } from 'react';
import { Users, UserCheck, UserX, BookOpen, TrendingUp, FileText, Settings, LogOut, Home, Search, Filter, Download, Plus, Eye, Edit, Trash2, Printer, BarChart, PieChart, LineChart, Calendar, Clock, Shield, MapPin, AlertTriangle, CheckCircle, XCircle, RefreshCw, Bell, Menu, X, School, Activity, User, Book } from 'lucide-react';
import { BarChart as RechartsBarChart, Bar, LineChart as RechartsLineChart, Line, PieChart as RechartsPieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AdminDashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedSchool, setSelectedSchool] = useState('All Schools');
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [showAddSchoolModal, setShowAddSchoolModal] = useState(false);
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
  const [showAddStudentModal, setShowAddStudentModal] = useState(false);
  const [reportPeriod, setReportPeriod] = useState('weekly'); // weekly, monthly, yearly

  // Enhanced sample data for the dashboard
  const schoolStats = [
    { label: 'Total Schools', value: 12, icon: School, color: 'from-blue-500 to-blue-600' },
    { label: 'Total Teachers', value: 45, icon: Users, color: 'from-green-500 to-green-600' },
    { label: 'Total Students', value: 1250, icon: UserCheck, color: 'from-purple-500 to-purple-600' },
    { label: 'Active Alerts', value: 5, icon: Bell, color: 'from-orange-500 to-orange-600' },
  ];

  const schools = [
    { id: 1, name: 'Greenwood High School', location: 'New York, NY', students: 350, teachers: 15, attendance: 92 },
    { id: 2, name: 'Riverside Academy', location: 'Los Angeles, CA', students: 280, teachers: 12, attendance: 88 },
    { id: 3, name: 'Hillside Elementary', location: 'Chicago, IL', students: 420, teachers: 18, attendance: 94 },
    { id: 4, name: 'Maplewood Middle School', location: 'Houston, TX', students: 200, teachers: 10, attendance: 89 },
  ];

  // Enhanced teachers data with class assignments
  const teachers = [
    { id: 1, name: 'James Wilson', email: 'j.wilson@school.edu', school: 'Greenwood High School', subject: 'Mathematics', classes: ['10A', '11B', '12C'], students: 90 },
    { id: 2, name: 'Sarah Johnson', email: 's.johnson@school.edu', school: 'Riverside Academy', subject: 'Science', classes: ['9A', '9B'], students: 65 },
    { id: 3, name: 'Michael Brown', email: 'm.brown@school.edu', school: 'Hillside Elementary', subject: 'English', classes: ['8A', '8B', '7A', '7B'], students: 120 },
    { id: 4, name: 'Emily Davis', email: 'e.davis@school.edu', school: 'Maplewood Middle School', subject: 'History', classes: ['6A', '6B'], students: 55 },
  ];

  // Enhanced students data with class information
  const students = [
    { id: 1, name: 'Robert Chen', roll: '10A-15', school: 'Greenwood High School', class: '10A', attendance: 95, grade: 'A' },
    { id: 2, name: 'Priya Patel', roll: '9B-22', school: 'Riverside Academy', class: '9B', attendance: 88, grade: 'B+' },
    { id: 3, name: 'Alex Turner', roll: '11C-08', school: 'Hillside Elementary', class: '11C', attendance: 92, grade: 'A-' },
    { id: 4, name: 'Maria Garcia', roll: '8D-30', school: 'Maplewood Middle School', class: '8D', attendance: 87, grade: 'B' },
    { id: 5, name: 'David Kim', roll: '10A-12', school: 'Greenwood High School', class: '10A', attendance: 91, grade: 'A-' },
    { id: 6, name: 'Sophia Williams', roll: '9B-05', school: 'Riverside Academy', class: '9B', attendance: 93, grade: 'A' },
  ];

  // Classes data with teacher assignments and student counts
  const classes = [
    { id: 1, name: '10A', school: 'Greenwood High School', teacher: 'James Wilson', students: 35, subject: 'Mathematics' },
    { id: 2, name: '9B', school: 'Riverside Academy', teacher: 'Sarah Johnson', students: 30, subject: 'Science' },
    { id: 3, name: '11C', school: 'Hillside Elementary', teacher: 'Michael Brown', students: 40, subject: 'English' },
    { id: 4, name: '8D', school: 'Maplewood Middle School', teacher: 'Emily Davis', students: 25, subject: 'History' },
    { id: 5, name: '12C', school: 'Greenwood High School', teacher: 'James Wilson', students: 30, subject: 'Mathematics' },
    { id: 6, name: '7A', school: 'Hillside Elementary', teacher: 'Michael Brown', students: 35, subject: 'English' },
  ];

  // Enhanced attendance data for different periods
  const weeklyAttendanceData = [
    { day: 'Mon', attendance: 92 },
    { day: 'Tue', attendance: 89 },
    { day: 'Wed', attendance: 91 },
    { day: 'Thu', attendance: 93 },
    { day: 'Fri', attendance: 90 },
  ];

  const monthlyAttendanceData = [
    { week: 'Week 1', attendance: 89 },
    { week: 'Week 2', attendance: 91 },
    { week: 'Week 3', attendance: 93 },
    { week: 'Week 4', attendance: 92 },
  ];

  const yearlyAttendanceData = [
    { month: 'Jan', attendance: 89 },
    { month: 'Feb', attendance: 91 },
    { month: 'Mar', attendance: 93 },
    { month: 'Apr', attendance: 92 },
    { month: 'May', attendance: 94 },
    { month: 'Jun', attendance: 90 },
    { month: 'Jul', attendance: 91 },
    { month: 'Aug', attendance: 93 },
    { month: 'Sep', attendance: 92 },
    { month: 'Oct', attendance: 90 },
    { month: 'Nov', attendance: 91 },
    { month: 'Dec', attendance: 92 },
  ];

  const alerts = [
    { id: 1, type: 'lowAttendance', message: 'Hillside Elementary overall attendance dropped below 90%', time: '2 hours ago', severity: 'high', status: 'new' },
    { id: 2, type: 'device', message: 'RFID readers malfunctioning at Greenwood High School', time: '5 hours ago', severity: 'medium', status: 'acknowledged' },
    { id: 3, type: 'safety', message: 'Unauthorized access attempt at Riverside Academy', time: '1 day ago', severity: 'critical', status: 'resolved' },
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
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleAddSchool = () => {
    // In a real app, this would make an API call to add a school
    console.log('Adding new school');
    setShowAddSchoolModal(false);
  };

  const handleAddTeacher = () => {
    // In a real app, this would make an API call to add a teacher
    console.log('Adding new teacher');
    setShowAddTeacherModal(false);
  };

  const handleAddStudent = () => {
    // In a real app, this would make an API call to add a student
    console.log('Adding new student');
    setShowAddStudentModal(false);
  };

  // Get current attendance data based on selected period
  const getCurrentAttendanceData = () => {
    switch (reportPeriod) {
      case 'weekly':
        return weeklyAttendanceData;
      case 'monthly':
        return monthlyAttendanceData;
      case 'yearly':
        return yearlyAttendanceData;
      default:
        return weeklyAttendanceData;
    }
  };

  // Get current attendance data key based on selected period
  const getDataKey = () => {
    switch (reportPeriod) {
      case 'weekly':
        return 'day';
      case 'monthly':
        return 'week';
      case 'yearly':
        return 'month';
      default:
        return 'day';
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
              <p className="text-xs text-gray-500">Admin Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { id: 'home', icon: Home, label: 'Dashboard Home' },
            { id: 'schools', icon: School, label: 'Schools' },
            { id: 'teachers', icon: Users, label: 'Teachers' },
            { id: 'students', icon: UserCheck, label: 'Students' },
            { id: 'classes', icon: Book, label: 'Classes' },
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
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-600 hover:bg-gray-50 transition-all"
          >
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
              <h1 className="text-2xl font-bold text-gray-900 hidden md:block">Admin Dashboard</h1>
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search schools, teachers, students..."
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
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
              >
                <option value="All Schools">All Schools</option>
                <option value="Greenwood High School">Greenwood High School</option>
                <option value="Riverside Academy">Riverside Academy</option>
                <option value="Hillside Elementary">Hillside Elementary</option>
                <option value="Maplewood Middle School">Maplewood Middle School</option>
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
                {schoolStats.map((stat, index) => {
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
                    <h2 className="text-xl font-bold text-gray-900">Attendance Trends</h2>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setReportPeriod('weekly')}
                        className={`px-3 py-1.5 text-sm rounded-lg ${reportPeriod === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                      >
                        Weekly
                      </button>
                      <button 
                        onClick={() => setReportPeriod('monthly')}
                        className={`px-3 py-1.5 text-sm rounded-lg ${reportPeriod === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                      >
                        Monthly
                      </button>
                      <button 
                        onClick={() => setReportPeriod('yearly')}
                        className={`px-3 py-1.5 text-sm rounded-lg ${reportPeriod === 'yearly' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'}`}
                      >
                        Yearly
                      </button>
                    </div>
                  </div>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart data={getCurrentAttendanceData()}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis 
                          dataKey={getDataKey()} 
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
                      </RechartsLineChart>
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
                              {alert.type === 'lowAttendance' && <UserX className="w-4 h-4" />}
                              {alert.type === 'safety' && <Shield className="w-4 h-4" />}
                              {alert.type === 'device' && <Activity className="w-4 h-4" />}
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

              {/* Schools Overview */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Schools Overview</h2>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">School</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Location</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Students</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Teachers</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Attendance</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schools.map((school) => (
                        <tr key={school.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-gray-900">{school.name}</td>
                          <td className="py-4 px-4 text-gray-600">{school.location}</td>
                          <td className="py-4 px-4 text-gray-600">{school.students}</td>
                          <td className="py-4 px-4 text-gray-600">{school.teachers}</td>
                          <td className="py-4 px-4">
                            <span className="text-gray-900 font-medium">{school.attendance}%</span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
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

              {/* Classes Overview */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Classes Overview</h2>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Class</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">School</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Teacher</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Subject</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Students</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes.slice(0, 4).map((classItem) => (
                        <tr key={classItem.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-gray-900">{classItem.name}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.school}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.teacher}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.subject}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.students}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
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

          {/* Schools Tab */}
          {activeTab === 'schools' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">School Management</h2>
                <button 
                  onClick={() => setShowAddSchoolModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add School
                </button>
              </div>

              {/* Schools Filters */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Locations</option>
                      <option>New York, NY</option>
                      <option>Los Angeles, CA</option>
                      <option>Chicago, IL</option>
                      <option>Houston, TX</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Statuses</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Name</option>
                      <option>Students (High to Low)</option>
                      <option>Attendance (High to Low)</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Schools Table */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">School</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Location</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Students</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Teachers</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Attendance</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {schools.map((school) => (
                        <tr key={school.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-gray-900">{school.name}</td>
                          <td className="py-4 px-4 text-gray-600">{school.location}</td>
                          <td className="py-4 px-4 text-gray-600">{school.students}</td>
                          <td className="py-4 px-4 text-gray-600">{school.teachers}</td>
                          <td className="py-4 px-4">
                            <span className="text-gray-900 font-medium">{school.attendance}%</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
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

          {/* Teachers Tab */}
          {activeTab === 'teachers' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Teacher Management</h2>
                <button 
                  onClick={() => setShowAddTeacherModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add Teacher
                </button>
              </div>

              {/* Teachers Filters */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">School</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Schools</option>
                      <option>Greenwood High School</option>
                      <option>Riverside Academy</option>
                      <option>Hillside Elementary</option>
                      <option>Maplewood Middle School</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Subjects</option>
                      <option>Mathematics</option>
                      <option>Science</option>
                      <option>English</option>
                      <option>History</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Statuses</option>
                      <option>Active</option>
                      <option>Inactive</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Teachers Table */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Teacher</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Email</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">School</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Subject</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Classes</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Students</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teachers.map((teacher) => (
                        <tr key={teacher.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-gray-900">{teacher.name}</td>
                          <td className="py-4 px-4 text-gray-600">{teacher.email}</td>
                          <td className="py-4 px-4 text-gray-600">{teacher.school}</td>
                          <td className="py-4 px-4 text-gray-600">{teacher.subject}</td>
                          <td className="py-4 px-4 text-gray-600">{teacher.classes.join(', ')}</td>
                          <td className="py-4 px-4 text-gray-600">{teacher.students}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
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

          {/* Students Tab */}
          {activeTab === 'students' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Student Management</h2>
                <button 
                  onClick={() => setShowAddStudentModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add Student
                </button>
              </div>

              {/* Students Filters */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">School</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Schools</option>
                      <option>Greenwood High School</option>
                      <option>Riverside Academy</option>
                      <option>Hillside Elementary</option>
                      <option>Maplewood Middle School</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Classes</option>
                      <option>10A</option>
                      <option>9B</option>
                      <option>11C</option>
                      <option>8D</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Grades</option>
                      <option>A</option>
                      <option>B+</option>
                      <option>A-</option>
                      <option>B</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Students Table */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Student</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Roll No</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">School</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Class</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Attendance</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Grade</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-gray-900">{student.name}</td>
                          <td className="py-4 px-4 text-gray-600">{student.roll}</td>
                          <td className="py-4 px-4 text-gray-600">{student.school}</td>
                          <td className="py-4 px-4 text-gray-600">{student.class}</td>
                          <td className="py-4 px-4">
                            <span className="text-gray-900 font-medium">{student.attendance}%</span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                              {student.grade}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
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

          {/* Classes Tab */}
          {activeTab === 'classes' && (
            <div>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Class Management</h2>
                <button 
                  onClick={() => setShowAddSchoolModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Add Class
                </button>
              </div>

              {/* Classes Filters */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">School</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Schools</option>
                      <option>Greenwood High School</option>
                      <option>Riverside Academy</option>
                      <option>Hillside Elementary</option>
                      <option>Maplewood Middle School</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Teacher</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Teachers</option>
                      <option>James Wilson</option>
                      <option>Sarah Johnson</option>
                      <option>Michael Brown</option>
                      <option>Emily Davis</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Subjects</option>
                      <option>Mathematics</option>
                      <option>Science</option>
                      <option>English</option>
                      <option>History</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Classes Table */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Class</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">School</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Teacher</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Subject</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Students</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes.map((classItem) => (
                        <tr key={classItem.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-gray-900">{classItem.name}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.school}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.teacher}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.subject}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.students}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Eye className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
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
                <h2 className="text-2xl font-bold text-gray-900">School Reports</h2>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">School</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>All Schools</option>
                      <option>Greenwood High School</option>
                      <option>Riverside Academy</option>
                      <option>Hillside Elementary</option>
                      <option>Maplewood Middle School</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
                    <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Attendance Summary</option>
                      <option>Performance Report</option>
                      <option>Teacher Evaluation</option>
                      <option>Resource Allocation</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Period</label>
                    <select 
                      value={reportPeriod}
                      onChange={(e) => setReportPeriod(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="yearly">Yearly</option>
                    </select>
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
                {/* Attendance by School */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Attendance by School</h3>
                      <p className="text-gray-500 text-sm mt-1">Average attendance rates across schools</p>
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
                      <RechartsBarChart data={[
                        { school: 'Greenwood HS', attendance: 92 },
                        { school: 'Riverside A', attendance: 88 },
                        { school: 'Hillside E', attendance: 94 },
                        { school: 'Maplewood MS', attendance: 89 },
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="school" 
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
                          dataKey="attendance" 
                          name="Attendance Rate" 
                          fill="#3b82f6" 
                          radius={[6, 6, 0, 0]} 
                          barSize={32}
                        >
                          {[
                            { school: 'Greenwood HS', attendance: 92 },
                            { school: 'Riverside A', attendance: 88 },
                            { school: 'Hillside E', attendance: 94 },
                            { school: 'Maplewood MS', attendance: 89 },
                          ].map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.attendance > 90 ? '#3b82f6' : '#60a5fa'} />
                          ))}
                        </Bar>
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Student Distribution */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Student Distribution</h3>
                      <p className="text-gray-500 text-sm mt-1">Students across different grade levels</p>
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
                      <RechartsPieChart>
                        <Pie
                          data={[
                            { name: 'Grade A', value: 30 },
                            { name: 'Grade B', value: 45 },
                            { name: 'Grade C', value: 20 },
                            { name: 'Grade D', value: 5 },
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
                          <Cell fill="#60a5fa" />
                          <Cell fill="#93c5fd" />
                          <Cell fill="#dbeafe" />
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
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Detailed Reports */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Detailed Reports</h3>
                    <p className="text-gray-500 text-sm mt-1">Comprehensive school performance data</p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setReportPeriod('weekly')}
                      className={`px-4 py-2 text-sm rounded-xl font-medium transition-colors ${reportPeriod === 'weekly' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      Weekly
                    </button>
                    <button 
                      onClick={() => setReportPeriod('monthly')}
                      className={`px-4 py-2 text-sm rounded-xl font-medium transition-colors ${reportPeriod === 'monthly' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      Monthly
                    </button>
                    <button 
                      onClick={() => setReportPeriod('yearly')}
                      className={`px-4 py-2 text-sm rounded-xl font-medium transition-colors ${reportPeriod === 'yearly' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                      Yearly
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">School</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Students</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Teachers</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Avg. Attendance</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Avg. Grade</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Resources</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900">Greenwood High School</td>
                        <td className="py-4 px-4 text-gray-600">350</td>
                        <td className="py-4 px-4 text-gray-600">15</td>
                        <td className="py-4 px-4 text-gray-600">92%</td>
                        <td className="py-4 px-4 text-gray-600">B+</td>
                        <td className="py-4 px-4 text-gray-600">85%</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900">Riverside Academy</td>
                        <td className="py-4 px-4 text-gray-600">280</td>
                        <td className="py-4 px-4 text-gray-600">12</td>
                        <td className="py-4 px-4 text-gray-600">88%</td>
                        <td className="py-4 px-4 text-gray-600">B</td>
                        <td className="py-4 px-4 text-gray-600">78%</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900">Hillside Elementary</td>
                        <td className="py-4 px-4 text-gray-600">420</td>
                        <td className="py-4 px-4 text-gray-600">18</td>
                        <td className="py-4 px-4 text-gray-600">94%</td>
                        <td className="py-4 px-4 text-gray-600">A-</td>
                        <td className="py-4 px-4 text-gray-600">92%</td>
                      </tr>
                      <tr className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-4 font-medium text-gray-900">Maplewood Middle School</td>
                        <td className="py-4 px-4 text-gray-600">200</td>
                        <td className="py-4 px-4 text-gray-600">10</td>
                        <td className="py-4 px-4 text-gray-600">89%</td>
                        <td className="py-4 px-4 text-gray-600">B+</td>
                        <td className="py-4 px-4 text-gray-600">81%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Attendance Reports */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Attendance Reports</h3>
                    <p className="text-gray-500 text-sm mt-1">Detailed attendance data for all classes</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors">
                      Export Data
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Class</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">School</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Teacher</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Total Students</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Present Today</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Absent Today</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Weekly Avg</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Monthly Avg</th>
                      </tr>
                    </thead>
                    <tbody>
                      {classes.map((classItem) => (
                        <tr key={classItem.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-gray-900">{classItem.name}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.school}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.teacher}</td>
                          <td className="py-4 px-4 text-gray-600">{classItem.students}</td>
                          <td className="py-4 px-4 text-gray-600">
                            <span className="text-green-600 font-medium">
                              {Math.round(classItem.students * 0.92)}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-gray-600">
                            <span className="text-red-600 font-medium">
                              {Math.round(classItem.students * 0.08)}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-gray-600">
                            <span className="font-medium">
                              {90 + Math.floor(Math.random() * 5)}%
                            </span>
                          </td>
                          <td className="py-4 px-4 text-gray-600">
                            <span className="font-medium">
                              {88 + Math.floor(Math.random() * 7)}%
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                    <option>Low Attendance</option>
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
                          {alert.type === 'lowAttendance' && <UserX className="w-6 h-6" />}
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
                              {alert.type.charAt(0).toUpperCase() + alert.type.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <span className="text-xs px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full">
                              Affected: Greenwood High School
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {alert.status === 'new' && (
                          <>
