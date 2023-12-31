import './App.css';
import ParticlesBg from 'particles-bg';
import { FaInstagram, FaReact } from 'react-icons/fa6';
import { FaThreads } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import React from 'react';

function App() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="card-header text-center profile">
            <img className="avatar" src="/logoprofile.png"></img>
            <h1>@_dbrolex_0418</h1>
            <p>Programming Enthusiast, Film Enthusiast</p>
          </div>
          <div className="mt-16">
            <a className="btn-action" href="https://www.instagram.com/_dbrolex_0418/" target="_blank">
              <FaInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn-action" href="https://www.threads.net/@_dbrolex_0418" target="_blank">
              <FaThreads />
              <span>Threads</span>
            </a>
          </div>
          <div className="mt-16">
            <a className="btn-action" href="https://github.com/LawrenceVectus86" target="_blank">
              <FaGithub />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        <a className="footer">
          Create By Calvin Lawrence with React <FaReact />
        </a>
        <div className="logofoot">
          <span>
            <FaGithub />
            <FaInstagram />
            <FaThreads />
          </span>
        </div>
      </div>
      <ParticlesBg type="thick" bg={true} />
    </div>
  );
}

export default App;
