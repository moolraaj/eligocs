'use client'
import React, { useEffect, useState } from 'react'
import Home from '../components/Home/Home'
import Layout from '../common/layout/layout'

function Homepage() {

  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const loadData = async () => {
    setLoading(true);
    const url = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/pages?slug=home&fields=acf&acf_format=standard`
    );
    let data = await url.json();
    setResult(data);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    loadData();
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (

    <Layout>
      <Home result={result} isScrolled={isScrolled} />
    </Layout>

  )
}

export default Homepage