import React, { useState } from "react";
import sitme from "./img/sitme.jpg";
import ogadonate from "./img/ogadonate-img.png";
import soupe from "./img/soupe-img.png";
import sonenef from "./img/sonenef-img.png";
import todo from "./img/todo-img.png";

const Portfolio = () => {
  const [hideDetail, setHiddenDetail] = useState({
    todoEnter: true,
    ogaEnter: true,
    enyeEnter: true,
    soupeEnter: true,
    soneEnter: true
  });

  const { todoEnter, ogaEnter, enyeEnter, soupeEnter, soneEnter } = hideDetail;

  return (
    <div className="portfolio">
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="project-header">Projects 💻 & 📱</h2>
      </div>

      {/* first row */}
      <div className="row mt-4">
        <div className="col-sm-6 col-md-6 col-lg-4 mt-4 project-card">
          <div className="content">
            {todoEnter ? (
              <a href="https://todolist-app-ochre.vercel.app/">
                <img
                  src={todo}
                  alt="Lights"
                  style={{ width: "100%", height: "100%" }}
                  onMouseEnter={() =>
                    setHiddenDetail({ ...hideDetail, todoEnter: !true })
                  }
                />
              </a>
            ) : (
              <div
                id="hide-portfolio-details"
                onMouseLeave={() =>
                  setHiddenDetail({ ...hideDetail, todoEnter: true })
                }
                  className="hidden-detail"
                  style={{ backgroundColor:'#A2B9A0'}}
                >
                  <a href="https://todolist-app-ochre.vercel.app/">
                  <div className="d-flex flex-column justify-content-center h-100 align-items-center">
                      <h4 className="fs-2">Todo App</h4>
                <p>Note your todo task or daily activity</p>
                    </div>
                    </a>
              </div>
            )}
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-4 mt-4 project-card">
          <div className="content">
            {ogaEnter ? (
              <a href="https://ogadonate.com">
                <img
                  src={ogadonate}
                  alt="Lights"
                  style={{ width: "100%", height: "100%" }}
                  onMouseEnter={() =>
                    setHiddenDetail({ ...hideDetail, ogaEnter: !true })
                  }
                />
              </a>
            ) : (
              <div
                onMouseLeave={() =>
                  setHiddenDetail({ ...hideDetail, ogaEnter: true })
                }
                  className="hidden-detail"
                  style={{ backgroundColor:'#A70B20'}}
                >
                  <a href="https://ogadonate.com">
                  <div className="d-flex flex-column justify-content-center h-100 align-items-center">
                      <h4 className="fs-2">
                 OgaDonate
                </h4>
                <p>Fund Raising Application with donation and E-commerce</p>
               </div>
              </a>
              </div>
            )}
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-4  mt-4 project-card">
          <div className="content">
            {soupeEnter ? (
              <a href="https://soupe.ng">
                <img
                  src={soupe}
                  alt="Lights"
                  style={{ width: "100%", height: "100%" }}
                  onMouseEnter={() =>
                    setHiddenDetail({ ...hideDetail, soupeEnter: !true })
                  }
                />
              </a>
            ) : (
              <div
                onMouseLeave={() =>
                  setHiddenDetail({ ...hideDetail, soupeEnter: true })
                }
                className="hidden-detail"
                style={{ backgroundColor: "#FEF2E7" }}
                >
                  <a href="https://soupe.ng">
                <div className="d-flex flex-column justify-content-center h-100 align-items-center">
                  <h4 className="fs-2">Soupe</h4>
                  <p>Food Supply, calculation platform</p>
                    </div>
                    </a>
              </div>
            )}
          </div>
        </div>

        <div className="col-sm-6 col-md-6 col-lg-4  mt-4 project-card">
          <div className="content">
            {soneEnter ? (
              <a href="https://sonenef.vercel.app/">
                <img
                  src={sonenef}
                  alt="Lights"
                  style={{ width: "100%", height: "100%" }}
                  onMouseEnter={() =>
                    setHiddenDetail({ ...hideDetail, soneEnter: !true })
                  }
                />
              </a>
            ) : (
              <div
                className="hidden-detail"
                onMouseLeave={() =>
                  setHiddenDetail({ ...hideDetail, soneEnter: true })
                }
                style={{ backgroundColor: "#B9D0D0" }}
                >
                  <a href="https://sonenef.vercel.app/">
                <div className="d-flex flex-column justify-content-center h-100 align-items-center">
                      <h4 className="fs-2">Sonenef</h4>
                  <p>Clothing line order and checkout page</p>
                    </div>
                    </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
