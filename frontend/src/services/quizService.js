import api from './api';

const quizService = {
  getAllQuizzes: (params) => api.get('/quizzes', { params }),
  getQuizById: (id) => api.get(`/quizzes/${id}`),
  getQuizQuestions: (quizId) => api.get(`/quizzes/${quizId}/questions`),
  submitQuiz: (quizId, answers) => api.post(`/quizzes/${quizId}/submit`, { answers }),
  getStudentResults: () => api.get('/results'),
  getResultById: (resultId) => api.get(`/results/${resultId}`),
};

export default quizService;
