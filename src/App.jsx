import React, { useState, useEffect } from 'react';
import './i18n';
import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookOpen, Users, ClipboardList, School, UserCheck, FileText, AlertTriangle, Award, TrendingUp, BarChart3, GraduationCap, Shield, Bell, Calendar, FileCheck } from 'lucide-react';
import LoginPage from './components/LoginPage';
import TeacherDashboard from './components/teacher/TeacherDashboard';
import SimplifiedStudentDashboard from './components/teacher/SimplifiedStudentDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import GovernmentDashboard from './components/government/GovernmentDashboard';
import ClassDetailsPage from './components/ClassDetailsPage';
import AttendSmartLogo from './components/AttendSmartLogo';

// Import images from src/assets/images for reliable bundling
import heroImg from './assets/images/Gemini_Generated_Image_16f3sj16f3sj16f3.png';
import aboutImg from './assets/images/Gemini_Generated_Image_7z63tu7z63tu7z63.png';
import init1 from './assets/images/Gemini_Generated_Image_g2fof4g2fof4g2fo.png';
import init2 from './assets/images/Gemini_Generated_Image_rgkwz9rgkwz9rgkw.png';
import init3 from './assets/images/Gemini_Generated_Image_ug45ezug45ezug45.png';
import feat1 from './assets/images/Gemini_Generated_Image_v27mynv27mynv27m.png';
import feat2 from './assets/images/Gemini_Generated_Image_16f3sj16f3sj16f3.png';
import feat3 from './assets/images/Gemini_Generated_Image_7z63tu7z63tu7z63.png';

const translations = {
  english: {
    welcome: "Welcome to the Future of Education",
    subtitle: "Revolutionizing School Management",
    getStarted: "Get Started",
    login: "Login",
    signup: "Sign Up",
    selectLanguage: "Select Language",
    aboutHeading: "About SchoolHub",
    aboutText: "SchoolHub is a comprehensive government school management platform designed to streamline administrative tasks, enhance communication between teachers, students, and parents, and ensure school safety. Our system provides attendance tracking, homework management, safety monitoring with fire alarm integration, and dedicated portals for teachers, students, school administrators, and government officials.",
    teacher: "Teacher Portal",
    student: "Student Portal",
    admin: "School Admin Portal",
    government: "Government Portal",
    attendance: "Attendance Management",
    homework: "Homework for Students",
    fireAlarm: "Fire Alarm System",
    readyTransform: "Ready to Transform Schools?",
    contactText: "For any enquiry, contact or email:",
    teacherDesc: "Manage classes, track student progress, assign homework, mark attendance, and communicate with parents seamlessly.",
    studentDesc: "Access homework assignments, view attendance records, check schedules, and communicate with teachers.",
    adminDesc: "Oversee school operations, manage staff, generate reports, and ensure smooth administrative processes.",
    governmentDesc: "Monitor school performance, access analytics, implement policies, and ensure compliance across institutions.",
    attendanceDesc: "Real-time attendance tracking with automated notifications to parents, detailed reports, and analytics for better monitoring.",
    homeworkDesc: "Digital homework assignment system with grading features and parent visibility for student progress.",
    fireAlarmDesc: "Integrated fire detection and emergency notification system that instantly alerts nearby hospitals, fire brigades, and police stations with exact school location for rapid emergency response.",
    closeModal: "Close",
    statistics: "Key Statistics",
    schoolsEnrolled: "Schools Enrolled",
    activeStudents: "Active Students",
    teachers: "Teachers",
    successRate: "Success Rate",
    initiatives: "Government Initiatives",
    digitalIndia: "Digital India Education",
    digitalIndiaDesc: "Transforming education through digital platforms and smart classroom integration.",
    midDayMeal: "Mid-Day Meal Program",
    midDayMealDesc: "Smart meal planning system that integrates with attendance tracking. Counts total present students and generates exact meal quantities to eliminate food wastage and ensure efficient resource utilization.",
    safeSchools: "CCTV Attendance Taking",
    safeSchoolsDesc: "Smart CCTV-based attendance system that automatically detects and records student presence in real-time, eliminating manual roll calls and ensuring accurate attendance data.",
    announcements: "Latest Announcements",
    announcement1: "New academic session begins January 2026",
    announcement2: "Teacher training program scheduled for December",
    announcement3: "Annual sports meet registration open",
    quickLinks: "Quick Links",
    admissions: "Admissions",
    results: "Results",
    timetable: "Time Table",
    grievance: "Grievance Portal"
  },
  punjabi: {
    welcome: "ਸਿੱਖਿਆ ਦੇ ਭਵਿੱਖ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
    subtitle: "ਸਕੂਲ ਪ੍ਰਬੰਧਨ ਵਿੱਚ ਕ੍ਰਾਂਤੀ",
    getStarted: "ਸ਼ੁਰੂ ਕਰੋ",
    login: "ਲੌਗਇਨ",
    signup: "ਸਾਈਨ ਅੱਪ",
    selectLanguage: "ਭਾਸ਼ਾ ਚੁਣੋ",
    aboutHeading: "SchoolHub ਬਾਰੇ",
    aboutText: "SchoolHub ਇੱਕ ਵਿਆਪਕ ਸਰਕਾਰੀ ਸਕੂਲ ਪ੍ਰਬੰਧਨ ਪਲੇਟਫਾਰਮ ਹੈ ਜੋ ਪ੍ਰਸ਼ਾਸਨਿਕ ਕੰਮਾਂ ਨੂੰ ਸੁਚਾਰੂ ਬਣਾਉਣ, ਅਧਿਆਪਕਾਂ, ਵਿਦਿਆਰਥੀਆਂ ਅਤੇ ਮਾਪਿਆਂ ਵਿਚਕਾਰ ਸੰਚਾਰ ਨੂੰ ਵਧਾਉਣ ਅਤੇ ਸਕੂਲ ਦੀ ਸੁਰੱਖਿਆ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣ ਲਈ ਤਿਆਰ ਕੀਤਾ ਗਿਆ ਹੈ। ਸਾਡਾ ਸਿਸਟਮ ਹਾਜ਼ਰੀ ਟਰੈਕਿੰਗ, ਹੋਮਵਰਕ ਪ੍ਰਬੰਧਨ, ਫਾਇਰ ਅਲਾਰਮ ਏਕੀਕਰਣ ਦੇ ਨਾਲ ਸੁਰੱਖਿਆ ਨਿਗਰਾਨੀ ਅਤੇ ਅਧਿਆਪਕਾਂ, ਵਿਦਿਆਰਥੀਆਂ, ਸਕੂਲ ਪ੍ਰਸ਼ਾਸਕਾਂ ਅਤੇ ਸਰਕਾਰੀ ਅਧਿਕਾਰੀਆਂ ਲਈ ਸਮਰਪਿਤ ਪੋਰਟਲ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ।",
    teacher: "ਅਧਿਆਪਕ ਪੋਰਟਲ",
    student: "ਵਿਦਿਆਰਥੀ ਪੋਰਟਲ",
    admin: "ਸਕੂਲ ਪ੍ਰਸ਼ਾਸਕ ਪੋਰਟਲ",
    government: "ਸਰਕਾਰੀ ਪੋਰਟਲ",
    attendance: "ਹਾਜ਼ਰੀ ਪ੍ਰਬੰਧਨ",
    homework: "ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਹੋਮਵਰਕ",
    fireAlarm: "ਫਾਇਰ ਅਲਾਰਮ ਸਿਸਟਮ",
    readyTransform: "ਸਕੂਲਾਂ ਨੂੰ ਬਦਲਣ ਲਈ ਤਿਆਰ ਹੋ?",
    contactText: "ਕਿਸੇ ਵੀ ਪੁੱਛਗਿੱਛ ਲਈ ਸੰਪਰਕ ਕਰੋ ਜਾਂ ਈਮੇਲ ਕਰੋ:",
    teacherDesc: "ਕਲਾਸਾਂ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ, ਵਿਦਿਆਰਥੀ ਦੀ ਤਰੱਕੀ ਨੂੰ ਟਰੈਕ ਕਰੋ, ਹੋਮਵਰਕ ਸੌਂਪੋ, ਹਾਜ਼ਰੀ ਲਗਾਓ ਅਤੇ ਮਾਪਿਆਂ ਨਾਲ ਨਿਰਵਿਘਨ ਸੰਚਾਰ ਕਰੋ।",
    studentDesc: "ਹੋਮਵਰਕ ਅਸਾਈਨਮੈਂਟਸ ਤੱਕ ਪਹੁੰਚ ਕਰੋ, ਹਾਜ਼ਰੀ ਰਿਕਾਰਡ ਦੇਖੋ, ਸਮਾਂ-ਸਾਰਣੀ ਦੀ ਜਾਂਚ ਕਰੋ ਅਤੇ ਅਧਿਆਪਕਾਂ ਨਾਲ ਸੰਚਾਰ ਕਰੋ।",
    adminDesc: "ਸਕੂਲ ਦੇ ਸੰਚਾਲਨ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ, ਸਟਾਫ ਦਾ ਪ੍ਰਬੰਧਨ ਕਰੋ, ਰਿਪੋਰਟਾਂ ਤਿਆਰ ਕਰੋ ਅਤੇ ਨਿਰਵਿਘਨ ਪ੍ਰਸ਼ਾਸਨਿਕ ਪ੍ਰਕਿਰਿਆਵਾਂ ਨੂੰ ਯਕੀਨੀ ਬਣਾਓ।",
    governmentDesc: "ਸਕੂਲ ਦੀ ਕਾਰਗੁਜ਼ਾਰੀ ਦੀ ਨਿਗਰਾਨੀ ਕਰੋ, ਵਿਸ਼ਲੇਸ਼ਣ ਤੱਕ ਪਹੁੰਚ ਕਰੋ, ਨੀਤੀਆਂ ਨੂੰ ਲਾਗੂ ਕਰੋ ਅਤੇ ਸੰਸਥਾਵਾਂ ਵਿੱਚ ਪਾਲਣਾ ਨੂੰ ਯਕੀਨੀ ਬਣਾਓ।",
    attendanceDesc: "ਮਾਪਿਆਂ ਨੂੰ ਸਵੈਚਲਿਤ ਸੂਚਨਾਵਾਂ, ਵਿਸਤ੍ਰਿਤ ਰਿਪੋਰਟਾਂ ਅਤੇ ਬਿਹਤਰ ਨਿਗਰਾਨੀ ਲਈ ਵਿਸ਼ਲੇਸ਼ਣ ਦੇ ਨਾਲ ਰੀਅਲ-ਟਾਈਮ ਹਾਜ਼ਰੀ ਟਰੈਕਿੰਗ।",
    homeworkDesc: "ਸਬਮਿਸ਼ਨ, ਗ੍ਰੇਡਿੰਗ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ ਅਤੇ ਵਿਦਿਆਰਥੀ ਦੀ ਤਰੱਕੀ ਲਈ ਮਾਪਿਆਂ ਦੀ ਦ੍ਰਿਸ਼ਟੀ ਦੇ ਨਾਲ ਡਿਜੀਟਲ ਹੋਮਵਰਕ ਅਸਾਈਨਮੈਂਟ ਸਿਸਟਮ।",
    fireAlarmDesc: "ਤੁਰੰਤ ਖੋਜ ਅਤੇ ਈਮਰਜੈਂਸੀ ਸੂਚਨਾ ਪ੍ਰਣਾਲੀ ਜੋ ਨੇੜਲੇ ਹਸਪਤਾਲਾਂ, ਫਾਇਰ ਬ੍ਰਿਗੇਡ ਅਤੇ ਪੁਲਿਸ ਸਟੇਸ਼ਨਾਂ ਨੂੰ ਸਕੂਲ ਦੀ ਸਹੀ ਸਥਿਤੀ ਦੇ ਨਾਲ ਤੇਜ਼ ਪ੍ਰਤੀਕਿਰਿਆ ਲਈ ਤੁਰੰਤ ਸਮਾਚਾਰ ਦਿੰਦੀ ਹੈ।",
    closeModal: "ਬੰਦ ਕਰੋ",
    statistics: "ਮੁੱਖ ਅੰਕੜੇ",
    schoolsEnrolled: "ਨਾਮ ਲਿਖਤ ਸਕੂਲ",
    activeStudents: "ਸਰਗਰਮ ਵਿਦਿਆਰਥੀ",
    teachers: "ਅਧਿਆਪਕ",
    successRate: "ਸਫਲਤਾ ਦਰ",
    initiatives: "ਸਰਕਾਰੀ ਪਹਿਲਕਦਮੀਆਂ",
    digitalIndia: "ਡਿਜੀਟਲ ਇੰਡੀਆ ਸਿੱਖਿਆ",
    digitalIndiaDesc: "ਡਿਜੀਟਲ ਪਲੇਟਫਾਰਮਾਂ ਅਤੇ ਸਮਾਰਟ ਕਲਾਸਰੂਮ ਏਕੀਕਰਣ ਦੁਆਰਾ ਸਿੱਖਿਆ ਨੂੰ ਬਦਲਣਾ।",
    midDayMeal: "ਮਿੜ-ਡੇ ਮੀਲ ਪ੍ਰੋਗਰਾਮ",
    midDayMealDesc: "ਹਾਜ਼ਰੀ ਅਤੇ ਸਿੱਖਣ ਦੇ ਨਤੀਜਿਆਂ ਨੂੰ ਬਿਹਤਰ ਬਣਾਉਣ ਲਈ ਵਿਦਿਆਰਥੀਆਂ ਲਈ ਪੌਸ਼ਟਿਕ ਭੋਜਨ ਨੂੰ ਯਕੀਨੀ ਬਣਾਉਣਾ।",
    safeSchools: "ਸੁਰੱਖਿਅਤ ਸਕੂਲ ਪਹਿਲ",
    safeSchoolsDesc: "CCTV ਨਿਗਰਾਨੀ ਅਤੇ ਐਮਰਜੈਂਸੀ ਪ੍ਰਤੀਕਿਰਿਆ ਪ੍ਰਣਾਲੀਆਂ ਸਮੇਤ ਵਿਆਪਕ ਸੁਰੱਖਿਆ ਉਪਾਅ।",
    announcements: "ਤਾਜ਼ਾ ਘੋਸ਼ਣਾਵਾਂ",
    announcement1: "ਨਵਾਂ ਅਕਾਦਮਿਕ ਸੈਸ਼ਨ ਜਨਵਰੀ 2026 ਵਿੱਚ ਸ਼ੁਰੂ ਹੁੰਦਾ ਹੈ",
    announcement2: "ਅਧਿਆਪਕ ਸਿਖਲਾਈ ਪ੍ਰੋਗਰਾਮ ਦਸੰਬਰ ਲਈ ਤਹਿ ਕੀਤਾ ਗਿਆ",
    announcement3: "ਸਾਲਾਨਾ ਖੇਡ ਮੀਟ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਖੁੱਲ੍ਹਾ",
    quickLinks: "ਤੇਜ਼ ਲਿੰਕਸ",
    admissions: "ਦਾਖਲੇ",
    results: "ਨਤੀਜੇ",
    timetable: "ਸਮਾਂ ਸਾਰਣੀ",
    grievance: "ਸ਼ਿਕਾਇਤ ਪੋਰਟਲ"
  },
  hindi: {
    welcome: "शिक्षा के भविष्य में आपका स्वागत है",
    subtitle: "स्कूल प्रबंधन में क्रांति",
    getStarted: "शुरू करें",
    login: "लॉगिन",
    signup: "साइन अप",
    selectLanguage: "भाषा चुनें",
    aboutHeading: "SchoolHub के बारे में",
    aboutText: "SchoolHub एक व्यापक सरकारी स्कूल प्रबंधन मंच है जो प्रशासनिक कार्यों को सुव्यवस्थित करने, शिक्षकों, छात्रों और अभिभावकों के बीच संचार को बढ़ाने और स्कूल की सुरक्षा सुनिश्चित करने के लिए डिजाइन किया गया है। हमारा सिस्टम उपस्थिति ट्रैकिंग, होमवर्क प्रबंधन, आग अलर्ट एकीकरण के साथ सुरक्षा निगरानी और शिक्षकों, छात्रों, स्कूल प्रशासकों और सरकारी अधिकारियों के लिए समर्पित पोर्टल प्रदान करता है।",
    teacher: "शिक्षक पोर्टल",
    student: "छात्र पोर्टल",
    admin: "स्कूल प्रशासक पोर्टल",
    government: "सरकारी पोर्टल",
    attendance: "उपस्थिति प्रबंधन",
    homework: "छात्रों के लिए होमवर्क",
    fireAlarm: "अग्निशमन प्रणाली",
    readyTransform: "स्कूलों को बदलने के लिए तैयार?",
    contactText: "किसी भी प्रश्न के लिए संपर्क करें या ईमेल करें:",
    teacherDesc: "कक्षाओं का प्रबंधन करें, छात्र की प्रगति को ट्रैक करें, होमवर्क असाइन करें, उपस्थिति चिह्नित करें और माता-पिता के साथ निर्बाध रूप से संचार करें।",
    studentDesc: "होमवर्क असाइनमेंट तक पहुंचें, उपस्थिति रिकॉर्ड देखें, समय सारणी जांचें और शिक्षकों के साथ संचार करें।",
    adminDesc: "स्कूल के संचालन की निगरानी करें, कर्मचारियों का प्रबंधन करें, रिपोर्ट तैयार करें और सुचारू प्रशासनिक प्रक्रियाओं को सुनिश्चित करें।",
    governmentDesc: "स्कूल के प्रदर्शन की निगरानी करें, विश्लेषण तक पहुंचें, नीतियों को लागू करें और संस्थाओं में अनुपालन सुनिश्चित करें।",
    attendanceDesc: "माता-पिता को स्वचालित सूचनाएं, विस्तृत रिपोर्ट और बेहतर निगरानी के लिए विश्लेषण के साथ वास्तविक समय में उपस्थिति ट्रैकिंग।",
    homeworkDesc: "डिजिटल होमवर्क असाइनमेंट सिस्टम ग्रेडिंग सुविधाओं और छात्र की प्रगति के लिए माता-पिता की दृश्यता के साथ।",
    fireAlarmDesc: "एकीकृत अग्नि पहचान और आपातकालीन सूचना प्रणाली जो तुरंत आस-पास के अस्पतालों, अग्निशमन दल और पुलिस स्टेशनों को स्कूल के सटीक स्थान के साथ तेजी से प्रतिक्रिया के लिए सतर्क करती है।",
    closeModal: "बंद करें",
    statistics: "मुख्य सांख्यिकी",
    schoolsEnrolled: "नामांकित स्कूल",
    activeStudents: "सक्रिय छात्र",
    teachers: "शिक्षक",
    successRate: "सफलता दर",
    initiatives: "सरकारी पहल",
    digitalIndia: "डिजिटल इंडिया शिक्षा",
    digitalIndiaDesc: "डिजिटल प्लेटफॉर्म और स्मार्ट कक्षा एकीकरण के माध्यम से शिक्षा को बदलना।",
    midDayMeal: "मध्याह्न भोजन कार्यक्रम",
    midDayMealDesc: "उपस्थिति और सीखने के परिणामों में सुधार के लिए छात्रों के लिए पौष्टिक भोजन सुनिश्चित करने वाली स्मार्ट भोजन योजना प्रणाली।",
    safeSchools: "सुरक्षित स्कूल पहल",
    safeSchoolsDesc: "सीसीटीवी निगरानी और आपातकालीन प्रतिक्रिया प्रणालियों सहित व्यापक सुरक्षा उपाय।",
    announcements: "नवीनतम घोषणाएं",
    announcement1: "नया शैक्षणिक सत्र जनवरी 2026 में शुरू होता है",
    announcement2: "शिक्षक प्रशिक्षण कार्यक्रम दिसंबर के लिए निर्धारित है",
    announcement3: "वार्षिक खेल मीट पंजीकरण खुला है",
    quickLinks: "त्वरित लिंक",
    admissions: "प्रवेश",
    results: "परिणाम",
    timetable: "समय सारणी",
    grievance: "शिकायत पोर्टल"
  }
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [language, setLanguage] = useState('english');
  const [modalContent, setModalContent] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [formData, setFormData] = useState({
    schoolName: '',
    schoolEmail: '',
    password: '',
    location: '',
    totalStudents: '',
    totalClasses: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [userType, setUserType] = useState('');
  const [showDashboardsLogin, setShowDashboardsLogin] = useState(false);

  const t = translations[language];

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 'landing') {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 2);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentPage]);

  const dashboards = [
    { id: 'teacher', icon: Users, title: t.teacher, desc: t.teacherDesc },
    { id: 'student', icon: BookOpen, title: t.student, desc: t.studentDesc },
    { id: 'admin', icon: School, title: t.admin, desc: t.adminDesc },
    { id: 'government', icon: ClipboardList, title: t.government, desc: t.governmentDesc }
  ];

  const dashboardsLanding = [
    { id: 'teacher', icon: Users, title: t.teacher, desc: 'Manage classes, track student progress, assign homework, mark attendance, and communicate with parents seamlessly. Access comprehensive tools for effective classroom management.' },
    { id: 'student', icon: BookOpen, title: t.student, desc: 'Access homework assignments, view attendance records, check schedules, and communicate with teachers. Stay updated with your academic progress and school announcements.' },
    { id: 'admin', icon: School, title: t.admin, desc: 'Oversee school operations, manage staff, generate reports, and ensure smooth administrative processes. Monitor overall school performance and resource utilization.' },
    { id: 'government', icon: ClipboardList, title: t.government, desc: 'Monitor school performance, access analytics, implement policies, and ensure compliance across institutions. Track educational standards and government initiatives.' }
  ];

  const features = [
    { id: 'attendance', icon: UserCheck, title: t.attendance, desc: t.attendanceDesc },
    { id: 'homework', icon: FileText, title: t.homework, desc: t.homeworkDesc },
    { id: 'fireAlarm', icon: AlertTriangle, title: t.fireAlarm, desc: t.fireAlarmDesc }
  ];

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    const totalStudents = parseInt(formData.totalStudents);
    const totalClasses = parseInt(formData.totalClasses);

    if (totalStudents < 1 || totalStudents > 600) {
      alert('Total number of students must be between 1 and 600');
      return;
    }
    if (totalClasses < 2 || totalClasses > 20) {
      alert('Total number of classes must be between 2 and 20');
      return;
    }

    console.log('Registration Data:', formData);
    alert('Registration submitted! School: ' + formData.schoolName);
    setFormData({
      schoolName: '',
      schoolEmail: '',
      password: '',
      location: '',
      totalStudents: '',
      totalClasses: ''
    });
    // After successful registration, show the dashboards login page
    setShowDashboardsLogin(true);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login Data:', loginData);
    alert('Login successful! Email: ' + loginData.email);
    setLoginData({
      email: '',
      password: ''
    });
    setShowLoginModal(false);
    // After successful login from landing page, show the dashboards login page
    setShowDashboardsLogin(true);
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert('Password reset link sent to your email!');
    setShowForgotPassword(false);
  };

  const handleDashboardLogin = (type) => {
    setUserType(type);
  };

  const handleLogout = () => {
    setUserType('');
    setShowDashboardsLogin(false);
    setCurrentPage('landing');
  };

  // If we should show the dashboards login page
  if (showDashboardsLogin && userType === '') {
    return (
      <Router>
        <ThemeProvider>
          <div>
            <LoginPage onLogin={handleDashboardLogin} />
          </div>
        </ThemeProvider>
      </Router>
    );
  }

  // If user has logged in to a specific dashboard
  if (userType !== '') {
    return (
      <Router>
        <ThemeProvider>
          <div>
            <Routes>
              <Route path="/" element={
                userType === 'teacher' ? 
                  <TeacherDashboard onLogout={handleLogout} /> : 
                userType === 'student' ? 
                  <SimplifiedStudentDashboard onLogout={handleLogout} /> : 
                userType === 'admin' ? 
                  <AdminDashboard onLogout={handleLogout} /> : 
                userType === 'government' ? 
                  <GovernmentDashboard onLogout={handleLogout} /> : 
                  <LoginPage onLogin={handleDashboardLogin} />
              } />
              <Route path="/class/:classId" element={<ClassDetailsPage />} />
            </Routes>
          </div>
        </ThemeProvider>
      </Router>
    );
  }

  // Render landing page
  if (currentPage === 'landing') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" style={{ background: 'linear-gradient(to bottom right, #E3F2FD, #ffffff)' }}>
        {/* Header */}
        <header className="shadow-sm" style={{ backgroundColor: '#0E61E7' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <School className="w-8 h-8 text-white" />
              <span className="text-2xl font-bold text-white">SchoolHub</span>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="px-4 py-2 border-2 rounded-lg bg-white font-semibold hover:shadow-md transition-all focus:outline-none focus:ring-2"
                style={{ color: '#0E61E7', borderColor: '#0E61E7', fontSize: '14px', fontWeight: '600' }}
              >
                <option value="english">English</option>
                <option value="punjabi">ਪੰਜਾਬੀ</option>
                <option value="hindi">हिन्दी</option>
              </select>
              <button
                onClick={() => setShowLoginModal(true)}
                className="px-4 py-2 text-white hover:opacity-80 transition-colors"
              >
                {t.login}
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side */}
            <div className={`space-y-6 ${isAnimating ? 'animate-fadeInUp' : ''}`}>
              <h1 className="text-5xl font-bold leading-tight" style={{ color: '#0E61E7' }}>
                {t.welcome}
              </h1>
              <p className="text-2xl text-gray-600">
                {t.subtitle}
              </p>
              <button
                onClick={() => setCurrentPage('about')}
                className="px-8 py-4 text-white text-lg rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#0E61E7' }}
              >
                Register
              </button>
            </div>

            {/* Right Side - Rural Indian School Image with Carousel */}
            <div className={`${isAnimating ? 'animate-fadeInRight' : ''}`}>
              <div className="rounded-2xl shadow-2xl overflow-hidden min-h-[500px] relative group">
                {/* Image 1 */}
                <div
                  className={`absolute inset-0 transition-opacity duration-1000 ${currentImageIndex === 0 ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    src={heroImg}
                    alt="Rural Government School in India"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ minHeight: '500px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Rural Government Schools</h3>
                    <p className="text-lg">Transforming Education in Rural India</p>
                    <p className="text-lg mt-2">Comprehensive School Management Platform</p>
                  </div>
                </div>

                {/* Image 2 */}
                <div
                  className={`absolute inset-0 transition-opacity duration-1000 ${currentImageIndex === 1 ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    src={aboutImg}
                    alt="Government School Classroom"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ minHeight: '500px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section - Enhanced with Interactive Cards */}
          <div className={`mb-16 ${isAnimating ? 'animate-fadeInUp' : ''}`}>
            <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#0E61E7' }}>{t.statistics}</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">Real impact across rural India</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1" style={{ borderColor: '#36B37E' }}>
                <School className="w-12 h-12 mx-auto mb-3" style={{ color: '#36B37E' }} />
                <p className="text-4xl font-bold" style={{ color: '#0E61E7' }}>0</p>
                <p className="text-gray-600 mt-2 font-medium">{t.schoolsEnrolled}</p>
                <p className="text-xs text-gray-500 mt-1">Across India</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1" style={{ borderColor: '#FFA726' }}>
                <GraduationCap className="w-12 h-12 mx-auto mb-3" style={{ color: '#FFA726' }} />
                <p className="text-4xl font-bold" style={{ color: '#0E61E7' }}>0</p>
                <p className="text-gray-600 mt-2 font-medium">{t.activeStudents}</p>
                <p className="text-xs text-gray-500 mt-1">Benefiting Daily</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1" style={{ borderColor: '#7E57C2' }}>
                <Users className="w-12 h-12 mx-auto mb-3" style={{ color: '#7E57C2' }} />
                <p className="text-4xl font-bold" style={{ color: '#0E61E7' }}>0</p>
                <p className="text-gray-600 mt-2 font-medium">{t.teachers}</p>
                <p className="text-xs text-gray-500 mt-1">Trained & Active</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center border-l-4 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1" style={{ borderColor: '#4CAF50' }}>
                <TrendingUp className="w-12 h-12 mx-auto mb-3" style={{ color: '#4CAF50' }} />
                <p className="text-4xl font-bold" style={{ color: '#0E61E7' }}>0%</p>
                <p className="text-gray-600 mt-2 font-medium">{t.successRate}</p>
                <p className="text-xs text-gray-500 mt-1">Student Progress</p>
              </div>
            </div>
          </div>

          {/* Key Features Section - Combined Initiatives & Features */}
          <div className={`mb-16 ${isAnimating ? 'animate-fadeInUp' : ''}`}>
            <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#0E61E7' }}>Key Features</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">Comprehensive tools for school management</p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Digital India Education */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src={init2}
                  alt="Digital India Education"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#E3F2FD' }}>
                      <BarChart3 className="w-6 h-6" style={{ color: '#0E61E7' }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E61E7' }}>{t.digitalIndia}</h3>
                      <p className="text-gray-600 text-sm">{t.digitalIndiaDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mid Day Meal */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src={init1}
                  alt="Mid Day Meal Program"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#E8F5E9' }}>
                      <Award className="w-6 h-6" style={{ color: '#36B37E' }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E61E7' }}>{t.midDayMeal}</h3>
                      <p className="text-gray-600 text-sm">{t.midDayMealDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Safe Schools */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src={init3}
                  alt="Safe Schools Initiative"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#FFF3E0' }}>
                      <Shield className="w-6 h-6" style={{ color: '#FFA726' }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E61E7' }}>{t.safeSchools}</h3>
                      <p className="text-gray-600 text-sm">{t.safeSchoolsDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Attendance Management */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src={feat1}
                  alt="Attendance Management"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#E3F2FD' }}>
                      <UserCheck className="w-6 h-6" style={{ color: '#0E61E7' }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E61E7' }}>{t.attendance}</h3>
                      <p className="text-gray-600 text-sm">{t.attendanceDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Homework */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src={feat2}
                  alt="Homework for Students"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#FFF3E0' }}>
                      <FileText className="w-6 h-6" style={{ color: '#FFA726' }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E61E7' }}>{t.homework}</h3>
                      <p className="text-gray-600 text-sm">{t.homeworkDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Fire Alarm */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src={feat3}
                  alt="Fire Alarm System"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg flex-shrink-0" style={{ backgroundColor: '#F3E5F5' }}>
                      <AlertTriangle className="w-6 h-6" style={{ color: '#7E57C2' }} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2" style={{ color: '#0E61E7' }}>{t.fireAlarm}</h3>
                      <p className="text-gray-600 text-sm">{t.fireAlarmDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portals Section */}
          <div className={`mb-16 ${isAnimating ? 'animate-fadeInUp' : ''}`}>
            <h2 className="text-4xl font-bold text-center mb-4" style={{ color: '#0E61E7' }}>Portals</h2>
            <p className="text-center text-gray-600 mb-12 text-lg">Dedicated access for different user roles</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dashboardsLanding.map((dashboard, index) => {
                const Icon = dashboard.icon;
                const colors = ['#36B37E', '#FFA726', '#7E57C2', '#0E61E7'];
                const bgColor = colors[index % colors.length];
                return (
                  <div
                    key={dashboard.id}
                    className={`rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all cursor-pointer transform hover:scale-105 ${isAnimating ? 'animate-fadeInUp' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s`, backgroundColor: bgColor }}
                    onClick={() => openModal(dashboard)}
                  >
                    <Icon className="w-12 h-12 text-white mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold text-white text-center">
                      {dashboard.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        {/* Modal */}
        {modalContent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-fadeInUp" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center mb-6">
                {modalContent.icon && React.createElement(modalContent.icon, { className: "w-12 h-12 mr-4", style: { color: '#0E61E7' } })}
                <h3 className="text-2xl font-bold" style={{ color: '#0E61E7' }}>{modalContent.title}</h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {modalContent.desc}
              </p>
              <button
                onClick={closeModal}
                className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-colors w-full"
                style={{ backgroundColor: '#0E61E7' }}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Login Modal */}
        {showLoginModal && !showForgotPassword && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowLoginModal(false)}>
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fadeInUp" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: '#0E61E7' }}>Login</h3>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ color: '#0E61E7' }}>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                    style={{ borderColor: '#0E61E7' }}
                    placeholder="Enter email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ color: '#0E61E7' }}>Password:</label>
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                    style={{ borderColor: '#0E61E7' }}
                    placeholder="Enter password"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(true)}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Forgot Password?
                </button>
                <button
                  type="submit"
                  className="w-full py-2 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                  style={{ backgroundColor: '#0E61E7' }}
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => setShowLoginModal(false)}
                  className="w-full py-2 text-gray-700 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-colors"
                  style={{ borderColor: '#0E61E7' }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Forgot Password Modal */}
        {showForgotPassword && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowForgotPassword(false)}>
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-fadeInUp" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-3xl font-bold mb-6 text-center" style={{ color: '#0E61E7' }}>Forgot Password</h3>
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ color: '#0E61E7' }}>Email:</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border-2 rounded-lg focus:outline-none"
                    style={{ borderColor: '#0E61E7' }}
                    placeholder="Enter your email"
                  />
                </div>
                <p className="text-sm text-gray-600">We'll send you a link to reset your password.</p>
                <button
                  type="submit"
                  className="w-full py-2 text-white font-semibold rounded-lg hover:opacity-90 transition-colors"
                  style={{ backgroundColor: '#36B37E' }}
                >
                  Send Reset Link
                </button>
                <button
                  type="button"
                  onClick={() => setShowForgotPassword(false)}
                  className="w-full py-2 text-gray-700 font-semibold rounded-lg border-2 hover:bg-gray-50 transition-colors"
                  style={{ borderColor: '#0E61E7' }}
                >
                  Back to Login
                </button>
              </form>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes fadeInRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.3s ease-out;
          }
          .animate-fadeInRight {
            animation: fadeInRight 0.3s ease-out;
          }
        `}</style>
      </div>
    );
  }

  // Render registration page
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #E3F2FD, #ffffff)' }}>
      {/* Header */}
      <header className="shadow-sm" style={{ backgroundColor: '#0E61E7' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('landing')}>
            <School className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold text-white">SchoolHub</span>
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="px-4 py-2 border-2 rounded-lg bg-white font-semibold hover:shadow-md transition-all focus:outline-none focus:ring-2"
              style={{ color: '#0E61E7', borderColor: '#0E61E7', fontSize: '14px', fontWeight: '600' }}
            >
              <option value="english">English</option>
              <option value="punjabi">ਪੰਜਾਬੀ</option>
              <option value="hindi">हिन्दी</option>
            </select>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Registration Form */}
        <div className={`${isAnimating ? 'animate-fadeInUp' : ''}`}>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <School className="w-16 h-16 mx-auto mb-4" style={{ color: '#0E61E7' }} />
              <h1 className="text-4xl font-bold mb-2" style={{ color: '#0E61E7' }}>School Registration</h1>
              <p className="text-gray-600 text-lg">Join SchoolHub and transform your school management</p>
            </div>

            <form onSubmit={handleSignUp} className="space-y-6">
              {/* School Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ color: '#0E61E7' }}>School Name:</label>
                <input
                  type="text"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#0E61E7', color: '#0E61E7' }}
                  placeholder="Enter school name"
                />
              </div>

              {/* School Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ color: '#0E61E7' }}>School Email:</label>
                <input
                  type="email"
                  name="schoolEmail"
                  value={formData.schoolEmail}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#0E61E7', color: '#0E61E7' }}
                  placeholder="Enter school email"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ color: '#0E61E7' }}>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#0E61E7', color: '#0E61E7' }}
                  placeholder="Enter password"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ color: '#0E61E7' }}>Location:</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#0E61E7', color: '#0E61E7' }}
                  placeholder="Enter school location"
                />
              </div>

              {/* Total Students */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ color: '#0E61E7' }}>Total No. of Students:</label>
                <input
                  type="number"
                  name="totalStudents"
                  value={formData.totalStudents}
                  onChange={handleInputChange}
                  required
                  min="1"
                  max="600"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#0E61E7', color: '#0E61E7' }}
                  placeholder="Enter total number of students (1-600)"
                />
              </div>

              {/* Total Classes */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2" style={{ color: '#0E61E7' }}>Total No. of Classes:</label>
                <input
                  type="number"
                  name="totalClasses"
                  value={formData.totalClasses}
                  onChange={handleInputChange}
                  required
                  min="2"
                  max="20"
                  className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2"
                  style={{ borderColor: '#0E61E7', color: '#0E61E7' }}
                  placeholder="Enter total number of classes (2-20)"
                />
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full py-3 text-white font-semibold text-lg rounded-lg hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
                style={{ backgroundColor: '#0E61E7' }}
              >
                Sign Up
              </button>

              {/* Already Registered Section */}
              <div className="text-center py-3">
                <p className="text-gray-600">
                  Already registered?{' '}
                  <button
                    type="button"
                    onClick={() => setCurrentPage('landing')}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    Go Back
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t-4 mt-12" style={{ borderColor: '#0E61E7' }}>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
                <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                  <School className="w-3 h-3 text-white" />
                </div>
                <span className="text-lg font-bold" style={{ color: '#0E61E7' }}>SchoolHub</span>
              </div>
              <p className="text-gray-600 text-sm">Ministry of Education</p>
              <p className="text-gray-600 text-sm">Government of India</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#0E61E7' }}>Important Links</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><button className="hover:underline">Privacy Policy</button></li>
                <li><button className="hover:underline">Terms & Conditions</button></li>
                <li><button className="hover:underline">Right to Information</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3" style={{ color: '#0E61E7' }}>Contact Us</h4>
              <p className="text-gray-600 text-sm">Email: schoolhub@gov.in</p>
              <p className="text-gray-600 text-sm">Helpline: 1800-XXX-XXXX</p>
              <p className="text-gray-600 text-sm mt-2">Mon-Fri: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center text-sm text-gray-600">
            <p>© 2025 SchoolHub - Government School Management System. All rights reserved.</p>
            <p className="mt-2">Last Updated: November 26, 2025 | Version 1.0</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={closeModal}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 animate-fadeInUp" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center mb-6">
              {React.createElement(modalContent.icon, { className: "w-12 h-12 mr-4", style: { color: '#0E61E7' } })}
              <h3 className="text-2xl font-bold" style={{ color: '#0E61E7' }}>{modalContent.title}</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {modalContent.desc}
            </p>
            <button
              onClick={closeModal}
              className="px-6 py-3 text-white rounded-lg hover:opacity-90 transition-colors w-full"
              style={{ backgroundColor: '#0E61E7' }}
            >
              {t.closeModal}
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}