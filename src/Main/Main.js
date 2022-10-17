import React, {useEffect, useRef, useState} from 'react';
import s from './Main.module.scss'
import Dots from 'vanta/dist/vanta.dots.min'
import {AttentionSeeker} from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';


export const Main = () => {
    const [vantaEffect, setVantaEffect] = useState(null)

    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(Dots({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x333333,
                color2: 0x333333,
                backgroundColor: 0xf6fbff,
                size: 5.40,
                spacing: 100.00,
                showLines: false
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div id={'main'}>
            <div ref={myRef} className={s.mainContent}>
                <div className={s.container}>
                    <AttentionSeeker effect={'pulse'}>
                        <article className={s.text}><h5 className={s.textHello}>Hello,</h5>
                            <h1>I’m<strong className={s.textName}> IGOR FILIN</strong></h1>
                            <div className={s.textDeveloper}>
                                <ReactTypingEffect
                                    text={["front-end developer"]}
                                    cursorRenderer={cursor => <h1>{cursor}</h1>}
                                    displayTextRenderer={(text) => {
                                        return (
                                            <h1>
                                                {text.split('').map((char, i) => {
                                                    const key = `${i}`;
                                                    return (
                                                        <span
                                                            key={key}
                                                            style={i % 2 === 0 ? {color: 'magenta'} : {}}
                                                        >{char}</span>
                                                    );
                                                })}
                                            </h1>
                                        );
                                    }}
                                />
                            </div>
                        </article>
                        <div className={s.photo}>
                            <img src="" alt=""/>
                        </div>
                    </AttentionSeeker>
                </div>
            </div>
        </div>
    );

}



