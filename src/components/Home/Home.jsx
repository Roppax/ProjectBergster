import { Link } from "react-router-dom";
import { Button } from "../AnimatedComponents";
import "./Home.css";
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showInfo, setShowInfo] = useState(false); 

  const text = "PROJECT BERGSTER"; 
  const typingSpeed = 75;
  const pauseDuration = 1500; 

  useEffect(() => {
    const typeWriter = async () => {
      while (true) {
        for (let i = 0; i <= text.length; i++) {
          setCurrentIndex(i);
          await new Promise((resolve) => setTimeout(resolve, typingSpeed));
        }
        setIsTyping(false);
        await new Promise((resolve) => setTimeout(resolve, pauseDuration));
        setCurrentIndex(0);
        setIsTyping(true);
      }
    };
  
    typeWriter();
  }, []); 
  return (
    <>
      <section className="banner w-full flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col md:flex-row items-center justify-center bg-bg-1 w-full min-h-screen">
          <div className="banner-left w-2/3 mt-8 md:mt-0 md:ml-20 flex flex-col items-center justify-center">
            <p
              className={`banner-title font-monospace text-3xl lg:text-5xl text-gray-600 p-2 lg:p-4 border-none rounded-lg bg-bg-2 mb-4`}
            >
              {text.substring(0, currentIndex)}
              {isTyping && text.substring(currentIndex)}
            </p>
            <p className="banner-description font-dmMono text-medium mg:text-1M text-white text-center mb-4" >
              A tool for people with social disabilities meant to help them train their <b>perception</b> and <b>display</b> of emotion
            </p>
            <p className="banner-description font-didactGothic text-lg lg:text-2xl text-white-600">
              Created by Robert & Yair.
            </p>

            <div className="banner-run mt-8 flex flex-row">
              {/* Devpost Button */}
              <a href={"https://devpost.com/software/the-bergster"} target={"_blank"} rel="noreferrer">
                <Button
                  onClick={() => {}}
                  rotateAnimation={true}  
                >
                  <div className="banner-run-github rounded-lg border-none px-4 py-2 mr-8 flex flex-row items-center justify-center font-dmMono text-base bg-fg-1 transition-all drop-shadow-[0_5px_4px_rgba(237,243,245,1)] hover:scale-110 hover:drop-shadow-[0_10px_8px_rgba(237,243,245,1)]">
                    <span className="text-white text-lg">Devpost</span>
                    <svg viewBox="-1 -1 26 26" class="w-6 h-6 ml-2" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853Z"/>
                    </svg>
                  </div>
                </Button>
              </a>
              {/* Info Button */}
              <Button onClick={() => setShowInfo(true)} rotateAnimation={true}>
                <div className="info-button rounded-lg border-none px-4 py-2 mr-8 flex flex-row items-center justify-center font-dmMono text-base bg-fg-1 transition-all drop-shadow-[0_5px_4px_rgba(237,243,245,1)] hover:scale-110 hover:drop-shadow-[0_10px_8px_rgba(237,243,245,1)]">
                  <span className="text-white text-lg">Info</span>
                  <svg viewBox="0 0 24 24" className="w-6 h-6 ml-2" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <circle cx="12" cy="12" r="10" stroke="#FFFFFF" strokeWidth="2"/>
  <line x1="12" x2="12" y1="8" y2="8" stroke="#FFFFFF" strokeWidth="2"/>
  <line x1="12" x2="12" y1="12" y2="16" stroke="#FFFFFF" strokeWidth="2"/>
</svg>

                </div>
              </Button>
              {/* Info Popout */}
              {showInfo && (
                <div className="info-popout fixed top-1/4 left-1/4 w-1/2 bg-white rounded-lg shadow-lg p-4">
                <button onClick={() => setShowInfo(false)} className="close-button absolute top-0 right-0 text-2xl text-black px-4 py-2">✖</button>
                <div className="info-content">
                  <h3 className="info-title text-xl font-bold text-black mb-2">About Project Bergster</h3>
                  <p className="info-text text-sm text-black mb-4">
                    Project Bergster is designed to assist individuals with social disabilities in recognizing and expressing emotions effectively through a real-time, offline-capable tool that utilizes webcam technology to analyze facial expressions.
                  </p>
                  <h4 className="info-subtitle text-lg font-semibold text-black mb-2">Getting Started</h4>
                  <p className="info-text text-sm text-black mb-4">
                    Utilize the webcam feature to begin emotion detection. The software works offline, ensuring functionality without internet dependency. You can view real-time analysis on a dashboard and export emotion summaries as a report for personal review.
                  </p>
                  <p className="info-text text-sm text-black mb-4">
                    You may also use our embetted testing tool to train and monitor your abilitiy to accuratley recreate the emotions that are shown on screen, which will then be tracked and graded for improvement in the future.
                  </p>
                  <h4 className="info-subtitle text-lg font-semibold text-black mb-2">Features & Usage</h4>
                  <ul className="info-list list-disc list-inside text-sm text-black mb-4">
                    <li>Real-time facial and emotion detection directly in your browser.</li>
                    <li>Interactive charts to track and review emotional responses.</li>
                    <li>Self-testing and scoring meant to help you analize your own cognitive abilities.</li>
                    <li>Export functionality to generate PDF reports of your emotion analytics.</li>
                  </ul>
                  <h4 className="info-subtitle text-lg font-semibold text-black mb-2">Privacy and Accessibility</h4>
                  <p className="info-text text-sm text-black">
                    All processing is done locally on your device, ensuring your data remains private and secure. The intuitive design ensures ease of use for all users, regardless of technical skill.
                  </p>
                </div>
              </div>
              
              )}
              <Link to={"/dashboard"}>
              <Button
                  onClick={() => {}}
                  rotateAnimation={true}  
                >
                  <div className="banner-run-github rounded-lg border-none px-4 py-2 mr-8 flex flex-row items-center justify-center font-dmMono text-base bg-fg-1 transition-all drop-shadow-[0_5px_4px_rgba(237,243,245,1)] hover:scale-110 hover:drop-shadow-[0_10px_8px_rgba(237,243,245,1)]">
                    <span className="text-white text-lg">Start</span>
                    <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <line x1="17" y1="7" x2="7" y2="17" />
                      <polyline points="8 7 17 7 17 16" />
                    </svg>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
