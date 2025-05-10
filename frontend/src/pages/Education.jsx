import { Container, Typography } from '@mui/material';
import ArticleCard from '../components/ArticleCard';

const articles = [
  {
    title: 'Apa itu PM2.5?',
    excerpt: 'PM2.5 adalah partikel udara dengan ukuran < 2.5 mikron yang berbahaya bagi kesehatan.'
  },
  {
    title: 'Dampak Polusi Udara terhadap Anak-anak',
    excerpt: 'Polusi udara dapat memengaruhi pertumbuhan paru-paru dan meningkatkan risiko asma.'
  },
  {
    title: 'Langkah Sederhana Mengurangi Polusi',
    excerpt: 'Gunakan transportasi umum, tanam pohon, dan hindari pembakaran sampah.'
  }
];

const Education = () => (
  <Container sx={{ mt:3, mb: 2}}>
    <Typography variant="h4" gutterBottom>Edukasi Lingkungan</Typography>
    {articles.map((article, idx) => (
      <ArticleCard
        key={idx}
        title={article.title}
        excerpt={article.excerpt}
        onClick={() => alert(`Buka artikel: ${article.title}`)} // nanti bisa link ke detail
      />
    ))}
  </Container>
);

export default Education;
