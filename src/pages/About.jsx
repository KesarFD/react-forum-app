import React from "react";

const About = () => {
    return (  
        <h1>
        Это мой первый пет проект на <span style={{color: "royalblue"}}>React</span>! <br />
        Я сделал упор в функционал по этому дизайн здесь 'минималистичный' <br />
        Здесь проделана следующая работа:
        <ul style={{marginTop: 30}}>
            <li>Работа с хуками useState, useEffect, useRef, useMemo, useContext, useFetch, useNavigate</li>
            <li>Созданы три кастомных hooks</li>
            <li>Работа с Api</li>
            <li>Реализован роутинг</li>
            <li>Создана небольшая UI библиотека</li>
            <li>Работа с сервером, Axios</li>
            <li>Старался грамотно декомпозировать все приложение</li>
            <li>Бесконечная лента</li>
            <li>Оптимизация подгрузок, роутинга, динамическая пагинация</li>
            <li>Анимации</li>
            
        </ul>
        </h1>

    );
};
 
export default About;