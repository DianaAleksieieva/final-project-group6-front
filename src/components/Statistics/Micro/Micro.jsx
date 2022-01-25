import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { ReactComponent as MicroIcon } from '../../../images/svg/micro.svg';
import css from './Micro.module.css';

export default function Micro({ active, changeCategory, changeStatus }) {

    function getElemForFocus(name) {
        console.log()

        return [...document.getElementsByClassName('StatisticCategories_statistics_item__kox+4')].filter(function (el) {
            return el.children[2].innerText === name
        })[0].children[1].children[1];
    }

    const commands = [
        {
            command: 'Продукты',
            callback: () => {
                if (active === 'Расход') {
                    changeCategory('goods');
                    const elem = getElemForFocus('Продукты');

                    elem.click();
                }
            }
        },
        {
            command: 'Алкоголь',
            callback: () => {
                if (active === 'Расход') {
                    changeCategory('alco')
                    const elem = getElemForFocus('Алкоголь');

                    elem.click();
                }
            }
        },
        {
            command: 'Развлечение',
            callback: () => {
                if (active === 'Расход') {
                    changeCategory('fun')
                    const elem = getElemForFocus('Развлечение');

                    elem.click();
                }
            }
        },
        {
            command: 'Здоровье',
            callback: () => {
                if (active === 'Расход') {
                    changeCategory('health')
                    const elem = getElemForFocus('Здоровье');

                    elem.click();
                }
            }
        },
        {
            command: 'Транспорт',
            callback: () => {
                if (active === 'Расход') {
                    changeCategory('transport')
                    const elem = getElemForFocus('Транспорт');

                    elem.click();
                }
            }
        },
        {
            command: 'Всё для дома',
            callback: () => {
                if (active === 'Расход') {
                    changeCategory('house')
                    const elem = getElemForFocus('Все для дома');

                    elem.click();
                }
            }
        },
        {
            command: 'Техника',
            callback: () => {
                if (active === 'Расход') {
                    changeCategory('tech')
                    const elem = getElemForFocus('Техника');

                    elem.click();
                }
            }
        },
        {
            command: 'Коммуналка связь',
            callback: () => {
                if (active === 'Расход') {
                    changeCategory('utilities')
                    const elem = getElemForFocus('Комуналка, Связь');

                    elem.click();
                }
            }
        },
        {
            command: 'Спорт хобби',
            callback: () => {
                if (active === 'Расход') {
                    changeCategory('sport')
                    const elem = getElemForFocus('Спорт, Хобби');

                    elem.click();
                }
            }
        },
        {
            command: 'Образование',
            callback: () => {
                if (active === 'Расход') {
                    changeCategory('education')
                    const elem = getElemForFocus('Образование');

                    elem.click();
                }
            }
        },
        {
            command: 'Прочее',
            callback: () => {
                if (active === 'Расход') {
                    changeCategory('other')
                    const elem = getElemForFocus('Прочее');

                    elem.click();
                }
            }
        },
        {
            command: 'Зарплата',
            callback: () => {
                if (active === 'Доход') {
                    changeCategory('freelance')
                    const elem = getElemForFocus('ЗП');

                    elem.click();
                }
            }
        },
        {
            command: 'Доп доход',
            callback: () => {
                if (active === 'Доход') {
                    changeCategory('salary')
                    const elem = getElemForFocus('Доп. доход');

                    elem.click();
                }
            }
        },
        {
            command: 'Доходы',
            callback: () => {
                if (active === 'Расход') {
                    changeStatus('Доход')
                }
            }
        },
        {
            command: 'Расходы',
            callback: () => {
                if (active === 'Доход') {
                    changeStatus('Расход')
                }
            }
        },
    ];


    const { browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div className={css.micro_container}>
            <div onMouseDown={SpeechRecognition.startListening}
                onTouchEnd={SpeechRecognition.stopListening}
                onMouseUp={SpeechRecognition.stopListening}
                className={css.micro_icon}>
                <MicroIcon />
            </div>
        </div>
    );
};
