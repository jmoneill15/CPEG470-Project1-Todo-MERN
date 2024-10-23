
import React from "react";
import "./todolist.css";
import {Link} from 'react-router-dom';

const TodoList = () => {
    return(
    <body>
    <div id="toDo-page">
        <div id="headerArea">
            <header id="title">To Do List:</header>
            <a href="index.html">
                <button id="logOut">Log Out</button>
            </a>
        </div>

        <form id="inputForm">
            <div id="newEntryBox">
                <input id="inputBox" type="textarea" name="name" placeholder="New Entry Here"></input>
                <input id="addTask" type="submit" value="✓"></input>
            </div>
            <ul id="listBox">
                <div id="taskBoxTest" class="taskBox">
                    <div id="taskText" class="taskText">shshshhshshshshhshshs
                    </div>
                    <div class="buttonDiv">
                        <button id="editButton" class="editButton">✎</button>
                        <button id="deleteButton" class="deleteButton">X</button>
                    </div>
                </div>
            </ul>
        </form>
        </div>
    </body>
    );
}


export default TodoList;