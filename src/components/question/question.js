import React, { useState } from 'react';

import './style.css';

const Question = ({questions}) => {

    const [selectedItem, setSelectedItem] = useState(0);
    const [activeItem, setActiveItem] = useState('');

    const onToggleItem = () => {
        setSelectedItem(prev => {
            if (prev === questions.length - 1) {
                return 0;
            } else {
                return prev + 1;
            }
        });
    };

    const onActiveItem = (event) => {
        setActiveItem(event.target.value);
    }

    return (
        <div className="main">     
            <div className="main__container">
                <div className="main__content">
                    <div className="main__content-heading">
                        <h1 className="main__content-title">{questions[selectedItem].name}</h1>
                    </div>     
                    <div className="main__content-answers">                                                    
                        {questions && questions[selectedItem].answers.map((item) => {
                            return (     
                                <div key={item} className="main__content-radio">
                                    <label><input type="radio" name="switch" value={item.answer} checked={activeItem === item.answer} onChange={(event) => onActiveItem(event)}></input>{item}</label>
                                </div>                                                                                                                                                                                              
                            )
                        })}                                                                     
                    </div>
                </div>
            <button  className="main__content-btn"onClick={onToggleItem}><span>Следующий вопрос</span></button>
            </div>
        </div>
    )
}

export default Question; 
