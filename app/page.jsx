"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

import viewImage from "./assets/images/eye.png";
import unviewImage from "./assets/images/eye-crossed.png";
import randomImage from "./assets/images/loop.png";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Animals");
  const [wordPairs, setWordPairs] = useState([]);
  const [displayedWord, setDisplayedWord] = useState("");
  const [isArabic, setIsArabic] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingWords, setLoadingWords] = useState(false);

  useEffect(() => {
    async function fetchCategories() {
      setLoadingCategories(true);
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
      setLoadingCategories(false);
    }

    fetchCategories();
  }, []);

  useEffect(() => {
    async function fetchWordPairs() {
      if (!selectedCategory) return;

      setLoadingWords(true);
      const response = await fetch(`/api/words?category=${selectedCategory}`);
      const data = await response.json();
      setWordPairs(data);

      shuffleWord(data);
      setLoadingWords(false);
    }

    fetchWordPairs();
  }, [selectedCategory]);

  const shuffleWord = (data) => {
    const randomPair = data[Math.floor(Math.random() * data.length)];
    const isRandomArabic = Math.random() < 0.5;

    setDisplayedWord(isRandomArabic ? randomPair.arabic : randomPair.english);
    setIsArabic(isRandomArabic);
    setShowTranslation(false);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleViewClick = () => {
    setShowTranslation(!showTranslation);
  };

  const handleShuffleClick = () => {
    shuffleWord(wordPairs);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-100 py-6 pt-24">
      <header className="fixed top-0 left-0 right-0 bg-purple-600 text-white text-center py-4 shadow-md z-50 rounded-b-2xl">
        <h1 className="text-3xl font-bold">Flashcard App</h1>
      </header>

      <div className="w-full container max-w-2xl mx-auto mb-6 mt-4">
        <div className="flex space-x-4 px-4 overflow-x-auto no-scrollbar">
          {loadingCategories ? (
            <div className="flex justify-center w-full">
              <PulseLoader color="#6B46C1" />
            </div>
          ) : (
            categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.name)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg shadow-md border border-gray-300 whitespace-nowrap 
                  ${
                    selectedCategory === category.name
                      ? "bg-purple-500 text-white font-semibold border-purple-500"
                      : "bg-white text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category.name}
              </button>
            ))
          )}
        </div>
      </div>

      <div className="w-full container max-w-sm mx-auto">
        {loadingWords ? (
          <div className="flex justify-center items-center w-full min-h-[300px]">
            <PulseLoader color="#6B46C1" />
          </div>
        ) : (
          <div className="bg-purple-500 border border-purple-500 rounded-lg shadow-md min-h-[300px] px-7 flex items-center justify-center text-center mb-4">
            <p className="text-4xl font-bold text-white">
              {showTranslation
                ? isArabic
                  ? `${
                      wordPairs.find((pair) => pair.arabic === displayedWord)
                        ?.english
                    }`
                  : `${
                      wordPairs.find((pair) => pair.english === displayedWord)
                        ?.arabic
                    }`
                : displayedWord}
            </p>
          </div>
        )}

        <div className="flex gap-1 justify-center">
          <button
            onClick={handleShuffleClick}
            className="p-2 bg-purple-500 text-white font-bold rounded-full shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            <Image
              src={randomImage}
              height={40}
              width={40}
              alt="Shuffle Word"
            />
          </button>

          <button
            onClick={handleViewClick}
            className="p-2 bg-purple-500 text-white font-bold rounded-full shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-300"
          >
            {showTranslation ? (
              <Image
                src={unviewImage}
                height={40}
                width={40}
                alt="Unview Translation"
              />
            ) : (
              <Image
                src={viewImage}
                height={40}
                width={40}
                alt="View Translation"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
