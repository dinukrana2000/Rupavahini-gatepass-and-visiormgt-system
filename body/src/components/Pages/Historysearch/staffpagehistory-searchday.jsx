// Request.js
import React, { useState } from "react";
import "./Request.css";
import Calender from "../../Calender/Cal";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Drawer from "../../Drawer/Drawer";

const Request = () => {
  const [yearData, setYearData] = useState([]);
  const [monthData, setMonthData] = useState([]);
  const [dayData, setDayData] = useState([]);

  const handleYearDataChange = (data) => {
    setYearData(data);
    setMonthData([]);
    setDayData([]);
  };

  const handleMonthDataChange = (data) => {
    setMonthData(data);
    setYearData([]);
    setDayData([]);
  };

  const handleDayDataChange = (data) => {
    setDayData(data);
    setMonthData([]);
    setYearData([]);
  };

  return (
    <>
      <Drawer />
      <div>
        <div className="blur-image">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <div
                style={{
                  marginBottom: "20px",
                  padding: "0px",
                  fontSize: "30px",
                  color: "black",
                  marginLeft: "130px",
                }}
              >
                Search for Activity
              </div>
              <div style={{ marginLeft: "100px" }}>
                <Calender
                  onYearChange={handleYearDataChange}
                  onMonthChange={handleMonthDataChange}
                  onDataChange={handleDayDataChange}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div style={{ height: "450px", overflowY: "auto" }}>
                {yearData.length > 0 && (
                  <>
                    {yearData.map((item, index) => (
                      <div className="request" key={index}>
                        <Grid item xs={10} sx={{ color: "white" }}>
                          <div style={{ marginLeft: "20px" }}>{item}</div>
                        </Grid>
                        <Grid item xs={2}>
                          <div>
                            <Link to={"/search/1/view"}>
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: "#973535",
                                  marginLeft: "20px",
                                  borderRadius: "20px",
                                  width: "100px",
                                  height: "4vh",
                                  "&:hover": {
                                    backgroundColor: "#811F15",
                                    color: "#EEC01F",
                                  },
                                }}
                              >
                                view
                              </Button>
                            </Link>
                          </div>
                        </Grid>
                      </div>
                    ))}
                  </>
                )}
                {monthData.length > 0 && (
                  <>
                    {monthData.map((item, index) => (
                      <div className="request" key={index}>
                        <Grid item xs={10} sx={{ color: "white" }}>
                          <div style={{ marginLeft: "20px" }}>{item}</div>
                        </Grid>
                        <Grid item xs={2}>
                          <div>
                            <Link to={"/search/1/view"}>
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: "#973535",
                                  marginLeft: "20px",
                                  borderRadius: "20px",
                                  width: "100px",
                                  height: "4vh",
                                  "&:hover": {
                                    backgroundColor: "#811F15",
                                    color: "#EEC01F",
                                  },
                                }}
                              >
                                view
                              </Button>
                            </Link>
                          </div>
                        </Grid>
                      </div>
                    ))}
                  </>
                )}
                {dayData.length > 0 && (
                  <>
                    {dayData.map((item, index) => (
                      <div className="request" key={index}>
                        <Grid item xs={10} sx={{ color: "white" }}>
                          <div style={{ marginLeft: "20px" }}>{item}</div>
                        </Grid>
                        <Grid item xs={2}>
                          <div>
                            <Link to={"/search/1/view"}>
                              <Button
                                variant="contained"
                                sx={{
                                  backgroundColor: "#973535",
                                  marginLeft: "20px",
                                  borderRadius: "20px",
                                  width: "100px",
                                  height: "4vh",
                                  "&:hover": {
                                    backgroundColor: "#811F15",
                                    color: "#EEC01F",
                                  },
                                }}
                              >
                                view
                              </Button>
                            </Link>
                          </div>
                        </Grid>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Request;
