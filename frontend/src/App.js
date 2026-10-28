import "./App.css";
import TeacherPortal from "./Components/TeacherPortal";
import StudentPortal from "./Components/StudentPortal";
import DashboardHome from "./Components/DashboardHome";
import CreateCourse from "./Components/CreateCourse";
import ViewCourses from "./Components/ViewCourses";
import CreateAssignment from "./Components/CreateAssignment";
import ViewAssignment from "./Components/ViewAssignment";
import GradeAssignments from "./Components/GradeAssignments";
import SignOutView from "./Components/SignOutView";
import { BrowserRouter, Route, Routes } from "react-router";
import EnrollCourses from "./Components/EnrollCourses";
import ViewEnrolledCourses from "./Components/ViewEnrolledCourses";
import StuViewAssignments from "./Components/StuViewAssignments";
import SubmitAssignment from "./Components/SubmitAssignment";
import CheckGrades from "./Components/CheckGrades";
import StuDashboardHome from "./Components/StuDashboardHome";
import NotFound from "./Components/NotFound";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/teacher-portal" element={<TeacherPortal />}>
          <Route index element={<DashboardHome />} />
          <Route path="create-course" element={<CreateCourse />} />
          <Route path="view-courses" element={<ViewCourses />} />
          <Route path="create-assignment" element={<CreateAssignment />} />
          <Route path="view-assignment" element={<ViewAssignment />} />
          <Route path="grade-assignments" element={<GradeAssignments />} />
          <Route path="signout" element={<SignOutView />} />
        </Route>

        <Route path="/student-portal" element={<StudentPortal />}>
          <Route index element={<StuDashboardHome />} />
          <Route path="enroll-courses" element={<EnrollCourses />} />
          <Route path="view-enrolled-courses" element={<ViewEnrolledCourses />} />
          <Route  path="student-view-assignments" element={<StuViewAssignments />} />
          <Route path="submit-assignment" element={<SubmitAssignment />} />
          <Route path="check-grades" element={<CheckGrades />} />
          <Route path="signout" element={<SignOutView />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
