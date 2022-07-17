import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [categories, setCategories] = useState("general");
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [totalNews, setTotalNews] = useState(null);

  const getNews = async () => {
    console.log(import.meta.env.VITE_API_KEY)
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categories}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    const { data } = await axios(url);
    setNews(data.articles);
    setTotalNews(data.totalResults);
  };

  const getNewsWithPagination = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categories}&page=${page}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    const { data } = await axios(url);
    setNews(data.articles);
    setTotalNews(data.totalResults);
  };

  useEffect(() => {
    getNews();
    setPage(1)
  }, [categories]);

  useEffect(() => {
    getNewsWithPagination();
    scrollTo(0,0)
  }, [page]);

  const handleChangeCategories = (e) => {
    setCategories(e.target.value);
  };

  const handleChangePage = (e, valor) => {
    setPage(valor);
  };

  return (
    <NewsContext.Provider
      value={{
        handleChangeCategories,
        categories,
        news,
        totalNews,
        handleChangePage,
        page
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
