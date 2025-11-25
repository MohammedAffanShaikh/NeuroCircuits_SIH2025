import React, { useState } from 'react';
import { Calendar, BookOpen, Award, TrendingUp, AlertCircle, Clock, Bell, User, MessageSquare, CheckCircle, FileText, Target, LogOut, Home, Search, ChevronDown, Eye, Download, Printer, Filter, Plus, X, BarChart as BarChartIcon, PieChart as PieChartIcon, LineChart as LineChartIcon } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import AttendSmartLogo from '../AttendSmartLogo';

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showAssignmentModal, setShowAssignmentModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [showTestDetailDrawer, setShowTestDetailDrawer] = useState(false);
  const [selectedTest, setSelectedTest] = useState(null);
  const [studentAvatar, setStudentAvatar] = useState('https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah');
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  // Sample data for the dashboard
  const studentData = {
    name: "Sarah Johnson",
    class: "Class 10-A",
    rollNumber: "24",
    attendancePercentage: 92,
    presentDays: 42,
    absentDays: 3,
    lateDays: 1,
    currentGrade: "A-",
    gpa: "3.8"
  };

  const assignments = [
    { id: 1, subject: "Mathematics", title: "Chapter 5 Exercises", due: "2024-04-17", dueDisplay: "Apr 17, 2024", status: "pending", priority: "high" },
    { id: 2, subject: "Science", title: "Lab Report - Photosynthesis", due: "2024-04-18", dueDisplay: "Apr 18, 2024", status: "pending", priority: "medium" },
    { id: 3, subject: "English", title: "Essay on Shakespeare", due: "2024-04-20", dueDisplay: "Apr 20, 2024", status: "submitted", priority: "low" },
    { id: 4, subject: "History", title: "World War II Timeline", due: "2024-04-22", dueDisplay: "Apr 22, 2024", status: "pending", priority: "high" }
  ];

  const messages = [
    { id: 1, title: "Parent-Teacher Meeting", date: "Apr 18, 2024", from: "Mr. James Dean", priority: "high", unread: true },
    { id: 2, title: "Field Trip Permission", date: "Apr 16, 2024", from: "Ms. Sarah Wilson", priority: "medium", unread: false },
    { id: 3, title: "Science Fair Registration", date: "Apr 15, 2024", from: "Dr. Michael Brown", priority: "low", unread: true }
  ];

  const upcomingTests = [
    { id: 1, subject: "Mathematics", topic: "Algebra & Trigonometry", date: "2024-04-22", dateDisplay: "Apr 22, 2024", time: "10:00 AM", duration: "90 mins", type: "Mid-term" },
    { id: 2, subject: "Science", topic: "Chemical Reactions", date: "2024-04-25", dateDisplay: "Apr 25, 2024", time: "2:00 PM", duration: "60 mins", type: "Quiz" },
    { id: 3, subject: "English", topic: "Literature Analysis", date: "2024-04-28", dateDisplay: "Apr 28, 2024", time: "9:30 AM", duration: "120 mins", type: "Final" }
  ];

  const recentGrades = [
    { subject: "Mathematics", assignment: "Mid-term Exam", grade: "A", score: "92/100", date: "2024-04-12" },
    { subject: "Science", assignment: "Lab Test", grade: "A-", score: "88/100", date: "2024-04-10" },
    { subject: "English", assignment: "Essay", grade: "B+", score: "85/100", date: "2024-04-08" },
    { subject: "History", assignment: "Quiz", grade: "A", score: "95/100", date: "2024-04-05" }
  ];

  const teacherFeedback = [
    { id: 1, teacher: "Mr. James Dean", subject: "Mathematics", feedback: "Excellent progress in problem-solving! Keep up the great work.", date: "Apr 12, 2024", type: "positive" },
    { id: 2, teacher: "Ms. Sarah Wilson", subject: "Science", feedback: "Shows strong understanding of concepts. Participate more in class discussions.", date: "Apr 10, 2024", type: "constructive" },
    { id: 3, teacher: "Dr. Emily Clark", subject: "English", feedback: "Creative writing skills are improving. Focus on grammar.", date: "Apr 08, 2024", type: "constructive" }
  ];

  const weeklyReport = {
    attendance: { present: 5, absent: 0, late: 0 },
    assignments: { completed: 4, pending: 2 },
    average: "91%"
  };

  const achievements = [
    { id: 1, title: "Perfect Attendance - Week 14", date: "Apr 15, 2024", icon: "🏆" },
    { id: 2, title: "Top Performer - Mathematics", date: "Apr 10, 2024", icon: "🥇" },
    { id: 3, title: "Homework Champion - March", date: "Mar 31, 2024", icon: "🎖️" }
  ];

  const attendanceData = [
    { day: 'Mon', present: 1, absent: 0 },
    { day: 'Tue', present: 1, absent: 0 },
    { day: 'Wed', present: 1, absent: 0 },
    { day: 'Thu', present: 1, absent: 0 },
    { day: 'Fri', present: 1, absent: 0 },
    { day: 'Sat', present: 0, absent: 0 },
  ];

  const subjectPerformance = [
    { subject: 'Mathematics', score: 92 },
    { subject: 'Science', score: 88 },
    { subject: 'English', score: 85 },
    { subject: 'History', score: 95 },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'submitted': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-orange-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const openAssignmentModal = (assignment) => {
    setSelectedAssignment(assignment);
    setShowAssignmentModal(true);
  };

  const closeAssignmentModal = () => {
    setShowAssignmentModal(false);
    setSelectedAssignment(null);
  };

  const openTestDetailDrawer = (test) => {
    setSelectedTest(test);
    setShowTestDetailDrawer(true);
  };

  const closeTestDetailDrawer = () => {
    setShowTestDetailDrawer(false);
    setSelectedTest(null);
  };

  const submitAssignment = () => {
    // In a real app, this would make an API call to submit the assignment
    console.log(`Submitting assignment: ${selectedAssignment.title}`);
    closeAssignmentModal();
    alert(`Assignment "${selectedAssignment.title}" submitted successfully!`);
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Sidebar */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 md:w-72 bg-white shadow-xl flex flex-col"
      >
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img 
                src={studentAvatar} 
                alt="Student Avatar" 
                className="w-12 h-12 rounded-xl object-cover shadow-lg"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <AttendSmartLogo size="sm" />
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent truncate block">
                  AttendSmart
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate">Student Dashboard</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 pt-0 space-y-1">
          {[
            { id: 'home', icon: Home, label: 'Dashboard Home' },
            { id: 'assignments', icon: BookOpen, label: 'Assignments' },
            { id: 'reports', icon: FileText, label: 'Reports' },
            { id: 'messages', icon: MessageSquare, label: 'Messages' },
            { id: 'achievements', icon: Award, label: 'Achievements' },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                  : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="font-medium">{tab.label}</span>
              {tab.id === 'assignments' && (
                <span className="ml-auto bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {assignments.filter(a => a.status === 'pending').length}
                </span>
              )}
              {tab.id === 'messages' && (
                <span className="ml-auto bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {messages.filter(m => m.unread).length}
                </span>
              )}
            </motion.button>
          ))}
        </nav>

        <div className="p-4 pb-4 border-t border-gray-100 space-y-1">
          <button 
            onClick={() => setShowAvatarModal(true)}
            className="w-full flex items-center gap-3 md:gap-4 px-4 py-3.5 rounded-xl text-gray-600 hover:bg-gray-50 transition-all"
          >
            <User className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">Change Avatar</span>
          </button>
          <button className="w-full flex items-center gap-3 md:gap-4 px-4 py-3.5 rounded-xl text-gray-600 hover:bg-gray-50 transition-all">
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span className="font-medium whitespace-nowrap overflow-hidden text-ellipsis">Logout</span>
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-100 px-8 py-4 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 hidden md:block">Student Dashboard</h1>
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search assignments, tests, messages..."
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-sm"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Apr 15, 2024</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-medium">{studentData.class}</span>
                <span>•</span>
                <span>Roll No. {studentData.rollNumber}</span>
              </div>
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {messages.filter(m => m.unread).length}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-semibold text-gray-900">{studentData.name}</p>
                  <p className="text-xs text-gray-500">Student</p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {studentData.name.charAt(0)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {/* Home Tab */}
          {activeTab === 'home' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Welcome Banner */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 mb-8 shadow-xl">
                <h2 className="text-4xl font-bold text-white mb-2">
                  Good Morning, {studentData.name.split(' ')[0]}! 👋
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  You have {assignments.filter(a => a.status === 'pending').length} pending assignments and {upcomingTests.length} upcoming tests
                </p>
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-sm">Attendance: {studentData.attendancePercentage}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <span className="text-sm">{messages.filter(m => m.unread).length} new messages</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">{studentData.attendancePercentage}%</div>
                      <div className="text-xs text-gray-500">Attendance Rate</div>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 font-medium">+2.5% from last month</div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">{studentData.presentDays}</div>
                      <div className="text-xs text-gray-500">Days Present</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Last 7 days</div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">{studentData.absentDays}</div>
                      <div className="text-xs text-gray-500">Days Absent</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Last 7 days</div>
                </motion.div>

                <motion.div 
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">{studentData.currentGrade}</div>
                      <div className="text-xs text-gray-500">Current Grade</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">GPA: {studentData.gpa}</div>
                </motion.div>
              </div>

              {/* Charts and Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Attendance Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Weekly Attendance</h3>
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
                          domain={[0, 1]}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            borderRadius: '12px',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
                          }}
                        />
                        <Bar 
                          dataKey="present" 
                          name="Present" 
                          fill="#3b82f6" 
                          radius={[4, 4, 0, 0]} 
                          barSize={24}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Subject Performance */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Subject Performance</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={subjectPerformance}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="subject" 
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
                          formatter={(value) => [`${value}%`, 'Score']}
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            borderRadius: '12px',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
                          }}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="score" 
                          stroke="#3b82f6" 
                          strokeWidth={3}
                          dot={{ r: 6, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
                          activeDot={{ r: 8, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Recent Assignments and Tests */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Assignments */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900">Recent Assignments</h3>
                    <button 
                      onClick={() => setActiveTab('assignments')}
                      className="text-blue-600 text-sm font-medium hover:text-blue-700"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    {assignments.slice(0, 3).map((assignment) => (
                      <div key={assignment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div>
                          <h4 className="font-medium text-gray-900">{assignment.title}</h4>
                          <p className="text-sm text-gray-500">{assignment.subject} • Due {assignment.dueDisplay}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(assignment.status)}`}>
                            {assignment.status}
                          </span>
                          <button 
                            onClick={() => openAssignmentModal(assignment)}
                            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Tests */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900">Upcoming Tests</h3>
                    <button 
                      onClick={() => setActiveTab('assignments')}
                      className="text-blue-600 text-sm font-medium hover:text-blue-700"
                    >
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    {upcomingTests.slice(0, 3).map((test) => (
                      <div key={test.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                        <div>
                          <h4 className="font-medium text-gray-900">{test.topic}</h4>
                          <p className="text-sm text-gray-500">{test.subject} • {test.dateDisplay} at {test.time}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                            {test.type}
                          </span>
                          <button 
                            onClick={() => openTestDetailDrawer(test)}
                            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Assignments Tab */}
          {activeTab === 'assignments' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Assignments</h2>
                <div className="flex gap-3">
                  <select className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Subjects</option>
                    <option>Mathematics</option>
                    <option>Science</option>
                    <option>English</option>
                    <option>History</option>
                  </select>
                  <select className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Statuses</option>
                    <option>Pending</option>
                    <option>Submitted</option>
                    <option>Overdue</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {assignments.map((assignment) => (
                  <motion.div 
                    key={assignment.id}
                    whileHover={{ y: -2 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
                        <div className="p-3 rounded-xl bg-blue-100 text-blue-800 flex-shrink-0">
                          <BookOpen className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">{assignment.title}</h3>
                            <span className={`w-3 h-3 rounded-full ${getPriorityColor(assignment.priority)}`}></span>
                            <span className={`text-xs px-2.5 py-1 rounded-full ${getStatusColor(assignment.status)}`}>
                              {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm mb-4">{assignment.subject}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full">
                              Due: {assignment.dueDisplay}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {assignment.status === 'pending' && (
                          <button 
                            onClick={() => openAssignmentModal(assignment)}
                            className="px-4 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-sm font-medium flex items-center gap-2"
                          >
                            <Plus className="w-4 h-4" />
                            Submit
                          </button>
                        )}
                        <button 
                          onClick={() => openAssignmentModal(assignment)}
                          className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm font-medium flex items-center gap-2"
                        >
                          <Eye className="w-4 h-4" />
                          Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Performance Reports</h2>
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
                {/* Subject Performance Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Subject-wise Performance</h3>
                      <p className="text-gray-500 text-sm mt-1">Average scores by subject</p>
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
                      <BarChart data={subjectPerformance}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis 
                          dataKey="subject" 
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
                          formatter={(value) => [`${value}%`, 'Score']}
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            borderRadius: '12px',
                            border: '1px solid #e5e7eb',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.05)'
                          }}
                        />
                        <Bar 
                          dataKey="score" 
                          name="Score" 
                          fill="#3b82f6" 
                          radius={[6, 6, 0, 0]} 
                          barSize={32}
                        >
                          {subjectPerformance.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.score > 90 ? '#3b82f6' : '#60a5fa'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Grade Distribution */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Grade Distribution</h3>
                      <p className="text-gray-500 text-sm mt-1">Overall grade breakdown</p>
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
                            { name: 'A', value: 30 },
                            { name: 'B', value: 45 },
                            { name: 'C', value: 20 },
                            { name: 'D', value: 5 },
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
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Recent Grades */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Recent Grades</h3>
                    <p className="text-gray-500 text-sm mt-1">Latest assignment and test scores</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Subject</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Assignment/Test</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Date</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Score</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-500">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentGrades.map((grade, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-4 px-4 font-medium text-gray-900">{grade.subject}</td>
                          <td className="py-4 px-4 text-gray-600">{grade.assignment}</td>
                          <td className="py-4 px-4 text-gray-500">{grade.date}</td>
                          <td className="py-4 px-4 font-medium text-gray-900">{grade.score}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              grade.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                              grade.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                              grade.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {grade.grade}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Messages Tab */}
          {activeTab === 'messages' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Messages</h2>
                <div className="flex gap-3">
                  <select className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Senders</option>
                    <option>Teachers</option>
                    <option>Administration</option>
                    <option>Parents</option>
                  </select>
                  <select className="px-4 py-2 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>All Statuses</option>
                    <option>Unread</option>
                    <option>Read</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {messages.map((message) => (
                  <motion.div 
                    key={message.id}
                    whileHover={{ y: -2 }}
                    className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 ${message.unread ? 'border-l-4 border-l-blue-500' : ''}`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4 flex-1">
                        <div className="p-3 rounded-xl bg-gray-100 text-gray-800 flex-shrink-0">
                          <MessageSquare className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h3 className="text-lg font-semibold text-gray-900">{message.title}</h3>
                            {message.unread && (
                              <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                                Unread
                              </span>
                            )}
                            <span className={`w-3 h-3 rounded-full ${
                              message.priority === 'high' ? 'bg-red-500' :
                              message.priority === 'medium' ? 'bg-orange-500' :
                              'bg-green-500'
                            }`}></span>
                          </div>
                          <p className="text-gray-500 text-sm mb-4">From: {message.from}</p>
                          <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-full">
                              {message.date}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <button className="px-4 py-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-sm font-medium flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                        <button className="px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors text-sm font-medium flex items-center gap-2">
                          <MessageSquare className="w-4 h-4" />
                          Reply
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Achievements</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all">
                  <Award className="w-4 h-4" />
                  Claim Rewards
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {achievements.map((achievement) => (
                  <motion.div 
                    key={achievement.id}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                  >
                    <div className="text-4xl mb-4">{achievement.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                    <p className="text-gray-500 mb-4">Congratulations on your achievement!</p>
                    <div className="text-sm text-gray-500">{achievement.date}</div>
                  </motion.div>
                ))}
              </div>

              {/* Teacher Feedback */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Teacher Feedback</h3>
                    <p className="text-gray-500 text-sm mt-1">Recent comments from your teachers</p>
                  </div>
                </div>
                <div className="space-y-6">
                  {teacherFeedback.map((feedback) => (
                    <div key={feedback.id} className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className={`p-3 rounded-xl flex-shrink-0 ${
                        feedback.type === 'positive' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {feedback.type === 'positive' ? (
                          <TrendingUp className="w-6 h-6" />
                        ) : (
                          <Target className="w-6 h-6" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className="font-semibold text-gray-900">{feedback.teacher}</h4>
                          <span className="text-sm text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{feedback.subject}</span>
                        </div>
                        <p className="text-gray-700 mb-3">{feedback.feedback}</p>
                        <div className="text-sm text-gray-500">{feedback.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Assignment Submission Modal */}
      {showAssignmentModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl w-full max-w-md"
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Submit Assignment</h3>
                <button 
                  onClick={closeAssignmentModal}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {selectedAssignment && (
                <div className="mb-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{selectedAssignment.title}</h4>
                    <p className="text-gray-500">{selectedAssignment.subject}</p>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                    <div className="px-4 py-2 bg-gray-100 rounded-xl">
                      <span className="text-gray-900">{selectedAssignment.dueDisplay}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                    <div className="p-4 bg-gray-50 rounded-xl text-gray-700">
                      <p>Please complete the assignment and upload your solution file below. Make sure to follow all instructions carefully.</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Solution</label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                          </svg>
                          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                          <p className="text-xs text-gray-500">PDF, DOC, or DOCX (MAX. 10MB)</p>
                        </div>
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="flex gap-3">
                <button
                  onClick={closeAssignmentModal}
                  className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-all font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={submitAssignment}
                  className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all font-medium"
                >
                  Submit Assignment
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Test Detail Drawer */}
      {showTestDetailDrawer && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-end z-50"
        >
          <motion.div 
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="bg-white h-full w-full max-w-md shadow-xl"
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Test Details</h3>
                <button 
                  onClick={closeTestDetailDrawer}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto h-[calc(100%-73px)]">
              {selectedTest && (
                <div>
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{selectedTest.topic}</h4>
                    <p className="text-gray-500">{selectedTest.subject}</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Test Information</h5>
                      <div className="bg-gray-50 rounded-xl p-4 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Type</span>
                          <span className="text-sm font-medium text-gray-900">{selectedTest.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Date</span>
                          <span className="text-sm font-medium text-gray-900">{selectedTest.dateDisplay}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Time</span>
                          <span className="text-sm font-medium text-gray-900">{selectedTest.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-500">Duration</span>
                          <span className="text-sm font-medium text-gray-900">{selectedTest.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Syllabus</h5>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Chapter 1: Introduction to Algebra</li>
                          <li>Chapter 2: Linear Equations</li>
                          <li>Chapter 3: Quadratic Equations</li>
                          <li>Chapter 4: Trigonometric Functions</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Instructions</h5>
                      <div className="bg-gray-50 rounded-xl p-4 text-gray-700 space-y-2">
                        <p>1. This test consists of 20 multiple choice questions.</p>
                        <p>2. You have {selectedTest.duration} to complete the test.</p>
                        <p>3. No calculators or other aids are permitted.</p>
                        <p>4. Please arrive 15 minutes before the scheduled time.</p>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Preparation Tips</h5>
                      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                        <ul className="list-disc pl-5 space-y-2 text-blue-800">
                          <li>Review all class notes and textbook chapters</li>
                          <li>Practice with previous year question papers</li>
                          <li>Focus on problem-solving techniques</li>
                          <li>Get adequate sleep before the test</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Avatar Change Modal */}
      {showAvatarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-96 overflow-y-auto">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">Change Avatar</h3>
                <button 
                  onClick={() => setShowAvatarModal(false)}
                  className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4">
                {[
                  'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
                  'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
                  'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
                  'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
                  'https://api.dicebear.com/7.x/avataaars/svg?seed=Mia',
                  'https://api.dicebear.com/7.x/avataaars/svg?seed=David'
                ].map((avatar, index) => (
                  <div 
                    key={index} 
                    className="cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => {
                      setStudentAvatar(avatar);
                      setShowAvatarModal(false);
                    }}
                  >
                    <img 
                      src={avatar} 
                      alt={`Avatar ${index + 1}`} 
                      className="w-16 h-16 rounded-full object-cover mx-auto"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">Click on any avatar to select it</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;