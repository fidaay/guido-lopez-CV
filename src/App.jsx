import './App.css';

import pfp from './assets/img/image-1668842731133.jpeg';

function App() {
  return (
    <div className='background'>
      <div className='canvas'>
        <div className='page'>
          <div className='personal-info'>
            <div className='pfp'>
              <div className='frame'>
                <img src={pfp} alt='pfp' />
              </div>
            </div>

            <div className='name'>
              <h1>Engr. Guido De Angello</h1>
              <h1>López Gutiérrez</h1>
            </div>

            <div className='aside'>
              <h2 className='aside-title'>Personal Info</h2>

              <hr />

              <h3>Address</h3>
              <span>Huehuetenango, Guatemala</span>

              <h3>Phone</h3>
              <a href='tel:+502 5533 2046'>+(502) 5533 2046</a>

              <h3>E-mail</h3>
              <a href='mailto:guiidolopez@outlook.com'>
                guiidolopez@outlook.com
              </a>

              <h3>LinkedIn</h3>
              <a
                href='http://linkedin.com/in/guido-lopez/'
                target='_blank'
                rel='noopener noreferrer'
              >
                linkedin.com/in/guido-lopez
              </a>

              <h3>Web</h3>
              <a
                href='http://n3k3.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                n3k3.com
              </a>
            </div>

            <div className='aside'>
              <h2 className='aside-title'>Skills</h2>

              <hr />

              <h3>Enterprise design</h3>
              <div className='bar'>
                <div className='sticks' />
              </div>

              <h3 style={{ marginTop: '4px' }}>Leadership</h3>
              <div className='bar'>
                <div className='sticks' />
              </div>
            </div>

            <div className='aside'>
              <h2 className='aside-title'>Software Skills</h2>

              <hr />

              <div className='skill'>
                <h6>Control Version:</h6>
                <span> </span>
                <span>Git, GitHub, GitLab, SonarCube</span>
              </div>

              <div className='skill'>
                <h6>Mobile:</h6>
                <span> </span>
                <span>React Native, Expo</span>
              </div>

              <div className='skill'>
                <h6>Front End:</h6>
                <span> </span>
                <span>
                  HTML, JSX, CSS, CSS Modules, Tailwind CSS, JavaScript, React
                </span>
              </div>

              <div className='skill'>
                <h6>Back End:</h6>
                <span> </span>
                <span>PHP, MySQL, Node.js, Express.js, MongoDB</span>
              </div>

              <div className='skill'>
                <h6>Multi-paradigm: </h6>
                <span> </span>
                <span>TypeScript, Webpack.js, Babel.js</span>
              </div>

              <div className='skill'>
                <h6>Software:</h6>
                <span> </span>
                <span>
                  Windows, Unix, Ubuntu, RHEL, Kali, Kali NetHunter, Visual
                  Studio Code, WinSCP, Putty, FileZilla, Wireshark, Git Bash,
                  Adobe Photoshop, Adobe Illustrator, Adobe Premiere
                </span>
              </div>

              <div className='skill'>
                <h6>CyberSecurity:</h6>
                <span> </span>
                <span>
                  Hashing, Encryption, Cryptography, Penetration testing, IKE,
                  KEA, Diffie-Hellman
                </span>
              </div>

              <div className='skill'>
                <h6>Pattern:</h6>
                <span> </span>
                <span>MVC, Redux, Single-spa, Micro Frontends</span>
              </div>

              <div className='skill'>
                <h6>Project Structure:</h6>
                <span> </span>
                <span>Folder-by-feature, Atomic design</span>
              </div>

              <div className='skill'>
                <h6>Database Design:</h6>
                <span> </span>
                <span>MySQL Workbench</span>
              </div>

              <div className='skill'>
                <h6>Protocols & Certification:</h6>
                <span> </span>
                <span>FTPS, SSH, SSL, HTTPS, OpenSSL, Certbot</span>
              </div>

              <div className='skill'>
                <h6>AI:</h6>
                <span> </span>
                <span>OCR, Haar Cascade Training</span>
              </div>

              <div className='skill'>
                <h6>Databases:</h6>
                <span> </span>
                <span>Redis, Atlas, Realm</span>
              </div>

              <div className='skill'>
                <h6>Testing:</h6>
                <span> </span>
                <span>Postman, Jest, Swagger, SuperTest</span>
              </div>

              <div className='skill'>
                <h6>CI/CD:</h6>
                <span> </span>
                <span>Jenkins, GitHub Actions, GitLab</span>
              </div>

              <div className='skill'>
                <h6>Application Server:</h6>
                <span> </span>
                <span>Node.js</span>
              </div>

              <div className='skill'>
                <h6>Web Server:</h6>
                <span> </span>
                <span>Apache HTTP Server, Nginx</span>
              </div>

              <div className='skill'>
                <h6>Containerization:</h6>
                <span> </span>
                <span>Kubernetes, Docker</span>
              </div>

              <div className='skill'>
                <h6>Hosting:</h6>
                <span> </span>
                <span>
                  cPanel, RHEL, phpMyAdmin, Apache HTTP Server, DNS, SSL,
                  Node.js Setup, Reverse proxy
                </span>
              </div>

              <div className='skill'>
                <h6>Cycles & Architectures:</h6>
                <span> </span>
                <span>CRUD, REST, RESTful</span>
              </div>

              <div className='skill'>
                <h6>Stack:</h6>
                <span> </span>
                <span>LAMP, WAMP, MERN</span>
              </div>

              <div className='skill'>
                <h6>Optimizations & Improvements:</h6>
                <span> </span>
                <span>SEO, PageSpeed Insights</span>
              </div>

              <div className='skill'>
                <h6>Documentation & Loggers:</h6>
                <span> </span>
                <span>Confluence, Swagger, Morgan</span>
              </div>

              <div className='skill'>
                <h6>Cloud Services:</h6>
                <span> </span>
                <span>AWS, MongoDB, VPS, VPC, VDI</span>
              </div>

              <div className='skill'>
                <h6>Validators:</h6>
                <span> </span>
                <span>Yup, Validator, Formik</span>
              </div>

              <div className='skill'>
                <h6>Agile methodologies & Software:</h6>
                <span> </span>
                <span>SCRUM, Jira, Kanban</span>
              </div>
            </div>
          </div>

          <div className='resume'>
            <div className='header'>
              <h2 className='title'>Resume</h2>

              <hr />

              <p className='paragraphs'>
                I am a substantially analytical person. Chess is my hobby, I
                love what I do and I am always in constant development.
              </p>
            </div>

            <div className='bookmark-line'>
              <div className='bookmark-container' style={{ marginTop: '-2px' }}>
                <div className='bookmark'></div>
                <div className='shadow'></div>
              </div>

              <div
                className='bookmark-container'
                style={{ marginTop: '581px' }}
              >
                <div className='bookmark'></div>
                <div className='shadow'></div>
              </div>

              <div
                className='bookmark-container'
                style={{ marginTop: '805px' }}
              >
                <div className='bookmark'></div>
                <div className='shadow'></div>
              </div>
            </div>

            <div className='container'>
              <div className='section'>
                <h2 className='title'>Experience</h2>

                <hr />

                <div className='experiences'>
                  <div className='date'>
                    <span>Jun 2022 - Present</span>
                  </div>
                  <div className='content'>
                    <h3 className='experience'>Ericsson de Guatemala</h3>
                    <h3 className='role'>Full Stack Developer</h3>
                    <h3 className='key-responsibilities'>
                      Key Responsibilities
                    </h3>
                    <ul className='list'>
                      <li>
                        Work on projects for Liberty (previously Movistar) in
                        Costa Rica, and El Salvador.
                      </li>
                      <li>Development in SCI, NPW & EIRG.</li>
                    </ul>
                  </div>
                </div>

                <div className='experiences'>
                  <div className='date'>
                    <span>Jun 2021 - Jun 2022</span>
                  </div>
                  <div className='content'>
                    <h3 className='experience'>
                      Walmart - outsourcing from BDG S.A.
                    </h3>
                    <h3 className='role'>Full Stack Developer</h3>
                    <h3 className='key-responsibilities'>
                      Key Responsibilities
                    </h3>
                    <ul className='list'>
                      <li>
                        Work on projects aimed at millions of people in Central
                        America and Mexico.
                      </li>
                      <li>
                        Development in Self Finance, Portal Store, Portal
                        Ecommerce, Reversal Gateway, Gift Cards and E-Giftcards
                        projects
                      </li>
                    </ul>
                  </div>
                </div>

                <div className='experiences'>
                  <div className='date'>
                    <span>Jun 2020 - Jun 2021</span>
                  </div>
                  <div className='content'>
                    <h3 className='experience'>n3k3 S.A.</h3>
                    <h3 className='role'>Full Stack Developer</h3>
                    <h3 className='key-responsibilities'>
                      Key Responsibilities
                    </h3>
                    <ul className='list'>
                      <li>
                        Architecture, design, creation and deployment of an
                        accounting system for a hospital & for a company with
                        multiple stores.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className='section'>
                <h2 className='title'>Education</h2>

                <hr />

                <div className='experiences'>
                  <div className='date'>
                    <span>Feb 2022 - June 2022</span>
                  </div>
                  <div className='content'>
                    <h3 className='experience'>
                      Universidad Europea del Atlántico
                    </h3>
                    <h3 className='key-responsibilities'>Postgraduate</h3>
                    <span>
                      Master’s in Data Science Applied to Business Intelligence
                    </span>
                  </div>
                </div>

                <div className='experiences'>
                  <div className='date'>
                    <span>Jan 2015 - Jun 2019</span>
                  </div>
                  <div className='content'>
                    <h3 className='experience'>Universidad de Occidente</h3>
                    <h3 className='key-responsibilities'>Bachelor's degree</h3>
                    <span>Telecommunications engineering</span>
                  </div>
                </div>
              </div>

              <div className='section'>
                <h2 className='title'>Achievements</h2>

                <hr />

                <div className='experiences'>
                  <div className='date'></div>
                  <div className='content'>
                    <h3 className='experience'>Chess</h3>
                  </div>
                </div>

                <div className='experiences' style={{ marginTop: '0px' }}>
                  <div className='date'>
                    <span>2014</span>
                  </div>
                  <div className='content'>
                    <span>
                      “Chess Exponent” Diploma, Colegio Preuniversitario
                      Cambridge
                    </span>
                  </div>
                </div>

                <div className='experiences' style={{ marginTop: '0px' }}>
                  <div className='date'>
                    <span>2013 - 2014</span>
                  </div>
                  <div className='content'>
                    <span>
                      Departmental Youth Chess Champion, Asociación
                      Departamental de Ajedrez Huehuetenango ADAH.
                    </span>
                  </div>
                </div>

                <div className='experiences' style={{ marginTop: '0px' }}>
                  <div className='date'>
                    <span>2012</span>
                  </div>
                  <div className='content'>
                    <span>
                      First place, trophy and medal, Intercollegiate Tournament,
                      Colegio Preuniversitario Cambridge
                    </span>
                  </div>
                </div>

                <div className='experiences' style={{ marginTop: '0px' }}>
                  <div className='date'>
                    <span>2009</span>
                  </div>
                  <div className='content'>
                    <span>
                      First place diploma, student championship, Colegio La
                      Salle
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// Walmart - outsourcing from BDG S.A.
