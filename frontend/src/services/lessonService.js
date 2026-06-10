import api from './api';

const lessonService = {
  getAllLessons: (params) => api.get('/lessons', { params }),
  getLessonById: (id) => api.get(`/lessons/${id}`),
  searchLessons: (query) => api.get('/lessons/search', { params: { q: query } }),
  getLessonsByTopic: (topicId) => api.get(`/topics/${topicId}/lessons`),
};

export default lessonService;
