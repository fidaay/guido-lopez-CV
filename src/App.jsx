import './App.css';

function App() {
  return (
    <div className='background'>
      <div className='canvas'>
        <div className='page'>
          <div className='personal-info'></div>
          <div className='resume'>
            <div className='header'>
              <h2 className='title'>Resume</h2>

              <hr />

              <p className='paragraphs'>
                I'm a substantially analytical person. Chess is my hobby, I love
                what I do, I appreciate reading and studying and I'm always in
                constant development.
              </p>
            </div>

            <div className='bookmark-line'>
              <div className='bookmark-container'>
                <div className='bookmark'></div>
                <div className='shadow'></div>
              </div>

              <div
                className='bookmark-container'
                style={{ marginTop: '617px' }}
              >
                <div className='bookmark'></div>
                <div className='shadow'></div>
              </div>

              <div
                className='bookmark-container'
                style={{ marginTop: '861px' }}
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

                <div className='experiences' style={{ marginTop: '2px' }}>
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

                <div className='experiences' style={{ marginTop: '2px' }}>
                  <div className='date'>
                    <span>2013 - 2014</span>
                  </div>
                  <div className='content'>
                    <span>
                      Departmental Youth Champion, asociación departamental
                      ajedrez Huehuetenango ADAH.
                    </span>
                  </div>
                </div>

                <div className='experiences' style={{ marginTop: '2px' }}>
                  <div className='date'>
                    <span>2012</span>
                  </div>
                  <div className='content'>
                    <span>
                      First Place Trophy and Medal, Intercollegiate Tournament,
                      Colegio Preuniversitario Cambridge
                    </span>
                  </div>
                </div>

                <div className='experiences' style={{ marginTop: '2px' }}>
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
