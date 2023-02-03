import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import {useTranslation} from "react-i18next";


    // return(
    //     <>
    //      <h4 className="foot-title font-white">Reach Out!</h4>
    //             <ul className="mt-3">
    //                 <li><a href="">Sales</a></li>
    //                 <li><a href="">Design</a></li>
    //                 <li><a href="">Marketing</a></li>
    //                 <li><a href="">E-Commerce</a></li>
    //             </ul>
    //     </>
    // );









function FormReachout(){
    const [t, i18n] = useTranslation();

    const [formData, setFormData] = useState({name: '', email: '', message: ''});

    const handleChange = (e) => {
        if (e.target.name === 'name') {
            setFormData({...formData, name: e.target.value})
        } else if (e.target.name === 'email') {
            setFormData({...formData, email: e.target.value})
        } else if (e.target.name ==='message') {
            setFormData({...formData, message: e.target.value})
        }
    };

    const handleClick = (e) => {
        e.preventDefault();
        //To do: add text to array
        let userInfo = formData;
        console.log({...userInfo});

        // const keys = Object.keys(formData);
        // for (let i = 0; i < keys.length; i++) {
        //   console.log(`${keys[i]}: ${formData[keys[i]]}`);
        // }

    }


    return(
        <Col lg="12" className=' align-item-center'>
             <h2 className="div-title font-white">Reach Out!</h2>
        <form className='contact__form w-100 px-5 rounded-4'>

            <Row className='mt-4 mb-4'>
                <Col lg="12" className='form-group'>
                    <label htmlFor="name" className='form-label font-white'>NAME</label>
                    <input 
                        className='form-control'
                        id="name"
                        name="name"
                      
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Col>
              
            </Row>
            <Row className='mb-4'>
                <Col lg="12" className='form-group rounded-0'>
                    <label htmlFor="email" className='form-label font-white'>EMAIL ADDRESS</label>
                    <input 
                        className='form-control'
                        id="email"
                        name="email"
                       
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </Col>
            </Row>
            <label className='form-label font-white'>MESSAGE</label>
            
            <textarea className='form-control rounded-0 mb-4' id="message" name="message" rows="6" value={formData.message} onChange={handleChange}>
                {formData.message}
                
            </textarea>

            <Row>
                <Col lg="12" className='form-group d-flex justify-content-end mb-4'>
                    <button className='btn btn-send font-white rounded-10 w-10' type="submit" onClick={handleClick}>{t('Send')}</button>
                </Col>
            </Row>

        </form>
    </Col>
    )
}

export default FormReachout;