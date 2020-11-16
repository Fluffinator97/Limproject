import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

import "bootstrap/dist/css/bootstrap.min.css";

function OverallViewMetrics() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  // const [open6, setOpen6] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  const handleClick4 = () => {
    setOpen4(!open4);
  };
  const handleClick5 = () => {
    setOpen5(!open5);
  };
  // const handleClick6 = () => {
  //   setOpen6(!open6);
  // };

  return (
    <div className="textAndGraphBindingBox">
      <Accordion>
        <Accordion.Toggle as={Card.Header} eventKey="0">
          Quality 85%
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <List>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Defects/Bugs 123" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick1}>
              <ListItemText primary="Average lead-time of defects 32" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick2}>
              <ListItemText primary="Effects/criticality 12" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick3}>
              <ListItemText primary="Performed tests 324" />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick4}>
              <ListItemText primary="Defects/discovery phase 267" />
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick5}>
              <ListItemText primary="Automated operations 65" />
              {open5 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="1">
          TTM 92%
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
          <List>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Defects/Bugs 123" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick1}>
              <ListItemText primary="Average lead-time of defects 32" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick2}>
              <ListItemText primary="Effects/criticality 12" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick3}>
              <ListItemText primary="Performed tests 324" />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick4}>
              <ListItemText primary="Defects/discovery phase 267" />
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick5}>
              <ListItemText primary="Automated operations 65" />
              {open5 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          Production 88%
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <List>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Defects/Bugs 123" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick1}>
              <ListItemText primary="Average lead-time of defects 32" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick2}>
              <ListItemText primary="Effects/criticality 12" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick3}>
              <ListItemText primary="Performed tests 324" />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick4}>
              <ListItemText primary="Defects/discovery phase 267" />
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick5}>
              <ListItemText primary="Automated operations 65" />
              {open5 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="3">
          Efficiency 78%
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <List>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Defects/Bugs 123" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick1}>
              <ListItemText primary="Average lead-time of defects 32" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick2}>
              <ListItemText primary="Effects/criticality 12" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick3}>
              <ListItemText primary="Performed tests 324" />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick4}>
              <ListItemText primary="Defects/discovery phase 267" />
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick5}>
              <ListItemText primary="Automated operations 65" />
              {open5 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="4">
          CSI 68%
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <List>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Defects/Bugs 123" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick1}>
              <ListItemText primary="Average lead-time of defects 32" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick2}>
              <ListItemText primary="Effects/criticality 12" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick3}>
              <ListItemText primary="Performed tests 324" />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick4}>
              <ListItemText primary="Defects/discovery phase 267" />
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick5}>
              <ListItemText primary="Automated operations 65" />
              {open5 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="5">
          ESI 91%
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <List>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Defects/Bugs 123" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick1}>
              <ListItemText primary="Average lead-time of defects 32" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick2}>
              <ListItemText primary="Effects/criticality 12" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick3}>
              <ListItemText primary="Performed tests 324" />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick4}>
              <ListItemText primary="Defects/discovery phase 267" />
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick5}>
              <ListItemText primary="Automated operations 65" />
              {open5 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Accordion.Collapse>
        <Accordion.Toggle as={Card.Header} eventKey="6">
          C1 85%
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6">
          <List>
            <ListItem button onClick={handleClick}>
              <ListItemText primary="Defects/Bugs 123" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick1}>
              <ListItemText primary="Average lead-time of defects 32" />
              {open1 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open1} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick2}>
              <ListItemText primary="Effects/criticality 12" />
              {open2 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open2} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick3}>
              <ListItemText primary="Performed tests 324" />
              {open3 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open3} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick4}>
              <ListItemText primary="Defects/discovery phase 267" />
              {open4 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open4} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={handleClick5}>
              <ListItemText primary="Automated operations 65" />
              {open5 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open5} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button>
                  <ListItemText primary="item 1" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 2" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 3" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 4" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 5" />
                </ListItem>
                <ListItem button>
                  <ListItemText primary="item 6" />
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Accordion.Collapse>
      </Accordion>
    </div>
  );
}

export default OverallViewMetrics;
