import Header from "./Components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { PAGES } from "./configs/constants/page.const";
import QuizList from "./pages/QuizList";
import QuizWrapper from "./Components/QuizWrapper";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PAGES.HOME} element={<Home />} />
        <Route path={PAGES.QUIZS} element={<QuizList />} />
        <Route path={PAGES.REACT_QUIZ} element={<QuizWrapper />} />
      </Routes>
    </>
  )
}