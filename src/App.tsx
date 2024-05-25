import Header from "./Components/Header";
import Home from "./pages/Home";
import QuizList from "./pages/QuizList";
import ReduxQuizPage from "./pages/ReduxQuiz";
import ReactQuizPage from "./pages/ReactQuiz";
import NextJsQuizPage from "./pages/NextJsQuiz";
import { Route, Routes } from "react-router-dom";
import { PAGES } from "./configs/constants/page.const";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={PAGES.HOME} element={<Home />} />
        <Route path={PAGES.QUIZS} element={<QuizList />} />
        <Route path={PAGES.REACT_QUIZ} element={<ReactQuizPage />} />
        <Route path={PAGES.REDUX_QUIZ} element={<ReduxQuizPage />} />
        <Route path={PAGES.NEXT_JS_QUIZ} element={<NextJsQuizPage />} />
      </Routes>
    </>
  )
}