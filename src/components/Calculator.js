import React, { useState } from 'react';
import Output from './Output';
import Button from './Button';
import History from './History';

function Calculator() {
    const [currentCalculation, setCurrentCalculation] = useState('');
    const [history, setHistory] = useState([]);

    const handleButtonClick = (value) => {
        setCurrentCalculation((prevCalculation) => prevCalculation + value);
    };

    const handleCalculate = () => {
        try {
            const result = eval(currentCalculation);
            setCurrentCalculation(result.toString());

            setHistory((prevHistory) => {
                const newHistory = [currentCalculation, ...prevHistory];
                return newHistory.slice(0, 5);
            });
        } catch (error) {
            setCurrentCalculation('Error');
        }
    };

    const handleClear = () => {
        setCurrentCalculation('');
        setHistory([]);
    };

    return (
        <div className='calculator'>
            <Output value={currentCalculation} />
            <History expressions={history} />
            <div>
                <div>
                    <Button onClick={handleButtonClick} label="7" />
                    <Button onClick={handleButtonClick} label="8" />
                    <Button onClick={handleButtonClick} label="9" />
                    <Button onClick={handleButtonClick} label="/" />
                </div>
                <div>
                    <Button onClick={handleButtonClick} label="4" />
                    <Button onClick={handleButtonClick} label="5" />
                    <Button onClick={handleButtonClick} label="6" />
                    <Button onClick={handleButtonClick} label="*" />
                </div>
                <div>
                    <Button onClick={handleButtonClick} label="1" />
                    <Button onClick={handleButtonClick} label="2" />
                    <Button onClick={handleButtonClick} label="3" />
                    <Button onClick={handleButtonClick} label="-" />
                </div>
                <div>
                    <Button className="rounded-left" onClick={handleButtonClick} label="0" />
                    <Button onClick={handleClear} label="C" />
                    <Button onClick={handleCalculate} label="=" />
                    <Button className="rounded-right" onClick={handleButtonClick} label="+" />
                </div>
            </div>
        </div>
    );
}

export default Calculator;
