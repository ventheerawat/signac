import React,{ Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import './signac.scss';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';



const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

// const [testname, setName] = useState('1');


function App() {
const [show, showToast] = useState(''); 
const [alert, showPopUp] = useState(''); 
const [loader, showLoader] = useState(''); 

const ToastToggle = () => {
  let status = show;
  if(!status || status === '0'){
    showToast('1');
    document.body.style.overflow = 'hidden';
  }else{
    showToast('0');
    document.body.style.overflow = 'unset';
  }
}

const PopUpToggle = () => {
  let status = alert;
  if(!status || status === '0'){
    showPopUp('1');
    document.body.style.overflow = 'hidden';
  }else{
    showPopUp('0');
    document.body.style.overflow = 'unset';
  }
}

const LoaderToggle = () => {
  let status = loader;
  document.body.style.overflow = 'hidden';
  showLoader('1');
  setTimeout(function(){
    document.body.style.overflow = 'unset';
    showLoader('0');
    }, 5000);
}
  return (
    <div className="App">
      <p className='H1_semi_bold'>SIGNAC Line OA CSS</p>
      <div  className={'pop_up animated ' + (alert === '1' ? 'fadeIn' : '')}>
        <div className='pop_up_dialog shadow_lv2_bottom'>
          <div className='pop_up_content'>
           <div className='pop_up_header'>
                <p className='m_0'>Header</p>
           </div>
           <div className='pop_up_body'>
                <p className='m_0'>description</p>
           </div>
           <div className='pop_up_footer'>
           <button type="button" className='btn btn_primary w-100' onClick={() => PopUpToggle()}>Button</button>
           </div>
          </div>
        </div>
      </div>
      <div className={'loader_overlay animated ' + (loader === '1' ? 'fadeIn' : '')}>
        <div className='loader center'><span></span></div>
      </div>
      <div className={'toast_overlay animated ' + (show === '1' ? 'bounceInDown' : '')} >
        <div className='toast toast_success toast_btn_close'>
          <div className='icon'>
            <span></span>
          </div>
          <div className='content'>
            <p className='toast_tittle'>Success header</p>
            <p className='toast_description'>Description</p>
          </div>
          <div className='close'>
            <button onClick={() => ToastToggle()}>
              <span></span>
            </button>
          </div>
        </div>
      </div>
      <br />
      <Container fixed>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0}>
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <h1>Input Form </h1>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <h3>Default Input</h3>
                <Grid item xs={12} md={4} lg={3} >
                  <Item sx={{ boxShadow: 0 }}>
                    <div className='form_floating h1-semi-bold'>
                      <input type="text" id='idcard' placeholder='Textfield label' />
                      <label htmlFor="idcard">เลขบัตรประชาชน</label>
                    </div>
                    <div className='form_floating h1-semi-bold'>
                      <input type="text" id='idcard' placeholder='Textfield label' />
                      <label htmlFor="idcard">Textfield label</label>
                    </div>
                    <div className='form_floating h1-semi-bold'>
                      <input type="text" id='idcard' placeholder='Textfield label' />
                      <label htmlFor="idcard">Textfield label</label>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item sx={{ boxShadow: 0 }}>
                    <pre>
                      <code className='language-html'>
                        {`
                         <div className='form_floating'>
                          <input type="text" id='idcard' placeholder='Textfield label' />
                          <label htmlFor="idcard">Textfield label</label>
                       </div>
                        `}
                      </code>
                    </pre>
                  </Item>
                </Grid>
              </Item>
            </Grid>
            <br /> <br />
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <h3>Error</h3>
                <small>The input is not vilidate please add the className '.form_error' in div tag</small>
                <Grid item xs={12} md={4} lg={3} >
                  <Item sx={{ boxShadow: 0 }}>
                    <div className='form_floating form_error'>
                      <input type="text" id='idcard' placeholder='Textfield label' defaultValue={'Input Text'} />
                      <label htmlFor="idcard">Textfield label</label>
                      <span className='error_message'>Error message</span>
                    </div>
                    <div className='form_floating form_error'>
                      <input type="text" id='idcard' placeholder='Textfield label' defaultValue={'Input Text'} />
                      <label htmlFor="idcard">Textfield label</label>
                      <span className='error_message'>Error message</span>
                    </div>
                  </Item>
                </Grid>
                <Grid item xs={12}>
                  <Item sx={{ boxShadow: 0 }}>
                    <pre>
                      <code className='language-html'>
                        {`
                        <div className='form_floating form_error'>
                          <input type="text" id='idcard' placeholder='Textfield label' defaultValue={'Input Text'} />
                          <label htmlFor="idcard">Textfield label</label>
                          <span className='error_message'>Error message</span>
                        </div>
                        `}
                      </code>
                    </pre>
                  </Item>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <h3>Disable</h3>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={3}>
                    <Item sx={{ boxShadow: 0 }}>
                      <div className='form_floating '>
                        <input type="text" id='idcard' placeholder='Textfield label' disabled />
                        <label htmlFor="idcard">Textfield label</label>
                      </div>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={3}>
                    <Item sx={{ boxShadow: 0 }}>
                      <div className='form_floating '>
                        <input type="text" id='idcard' placeholder='Textfield label' defaultValue={'Input Text'} disabled />
                        <label htmlFor="idcard">Textfield label</label>
                      </div>
                    </Item>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Item sx={{ boxShadow: 0 }}>
                    <pre>
                      <code className='language-html'>
                        {`
                         <div className='form_floating '>
                          <input type="text" id='idcard' placeholder='Textfield label' disabled />
                          <label htmlFor="idcard">Textfield label</label>
                         </div>
                         <div className='form_floating '>
                          <input type="text" id='idcard' placeholder='Textfield label' defaultValue={'Input Text'} disabled />
                          <label htmlFor="idcard">Textfield label</label>
                        </div>
                        `}
                      </code>
                    </pre>
                  </Item>
                </Grid>
              </Item>
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <hr />
                <h1>Input OTP / PIN</h1>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Default OTP</h3>
                      <br />
                      <div className='form_input_opt'>
                        <input type="text" maxLength={1} required />
                        <input type="text" maxLength={1} required />
                        <input type="text" maxLength={1} required />
                        <input type="text" maxLength={1} required />
                        <input type="text" maxLength={1} required />
                        <input type="text" maxLength={1} required />
                      </div>
                      <br />
                      <pre>
                        <code className='language-html'>
                          {`
                        <div className='form_input_opt'>
                          <input type="text" maxLength={1} required/>
                          <input type="text" maxLength={1} required/>
                          <input type="text" maxLength={1} required/>
                          <input type="text" maxLength={1} required/>
                          <input type="text" maxLength={1} required/>
                          <input type="text" maxLength={1} required/>
                        </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Disabled OTP</h3>
                      <br />
                      <div className='form_input_opt'>
                        <input type="text" maxLength={1} defaultValue={0} required disabled />
                        <input type="text" maxLength={1} defaultValue={1} required disabled />
                        <input type="text" maxLength={1} defaultValue={2} required disabled />
                        <input type="text" maxLength={1} required disabled />
                        <input type="text" maxLength={1} required disabled />
                        <input type="text" maxLength={1} required disabled />
                      </div>
                      <br />
                      <pre>
                        <code className='language-html'>
                          {`
                        <div className='form_input_opt'>
                          <input type="text" maxLength={1} defaultValue={0} required disabled/>
                          <input type="text" maxLength={1} defaultValue={1} required disabled/>
                          <input type="text" maxLength={1} defaultValue={2} required disabled/>
                          <input type="text" maxLength={1} required disabled/>
                          <input type="text" maxLength={1} required disabled/>
                          <input type="text" maxLength={1} required disabled/>
                       </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Default PIN</h3>
                      <br />
                      <div className='form_input_pin'>
                        <span className='validated'></span>
                        <span className='validated'></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <br />
                      <pre>
                        <code className='language-html'>
                          {`
                        <div className='form_input_pin'>
                          <span className='validated'></span>
                          <span className='validated'></span>
                          <span></span>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Disabled OTP</h3>
                      <br />
                      <div className='form_input_pin'>
                        <span className='disabled'></span>
                        <span className='disabled'></span>
                        <span className='disabled'></span>
                        <span className='disabled'></span>
                        <span className='disabled'></span>
                        <span className='disabled'></span>
                      </div>
                      <br />
                      <pre>
                        <code className='language-html'>
                          {`
                         <div className='form_input_pin'>
                          <span className='disabled'></span>
                          <span className='disabled'></span>
                          <span className='disabled'></span>
                          <span className='disabled'></span>
                          <span className='disabled'></span>
                          <span className='disabled'></span>
                        </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <hr />
                <h1>Button </h1>
                <small>The .btn classes are designed to be used with the {`<button>`} element.</small>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Primary CTA</h3>
                      <p>className : '.btn_primary'</p>
                      <button type="button" className='btn btn_primary'>Button Primary</button>
                      <br /> <br />
                      <pre>
                        <code className='language-html'>
                          {`<button type="button" className='btn btn_primary'>Button Primary</button>`}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Disable CTA</h3>
                      <p>add disabled attribute to button element</p>
                      <button type="button" className='btn btn_primary' disabled>Button Primary</button>
                      <br /> <br />
                      <pre>
                        <code className='language-html'>
                          {`<button type="button" className='btn btn_primary' disabled >Button Primary</button>`}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Secondary CTA</h3>
                      <p>className : '.btn_secondary'</p>
                      <button type="button" className='btn btn_secondary'>Button Primary</button>
                      <br /> <br />
                      <pre>
                        <code className='language-html'>
                          {`<button type="button" className='btn btn_secondary'>Button Primary</button>`}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Disable Secondary CTA</h3>
                      <p>add disabled attribute to button element</p>
                      <button type="button" className='btn btn_secondary' disabled>Button Primary</button>
                      <br /> <br />
                      <pre>
                        <code className='language-html'>
                          {`<button type="button" className='btn btn_secondary' disabled>Button Primary</button>`}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <hr />
                <h1>Checks and radios</h1>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Checks</h3>
                      <div className='form_check'>
                        <input type="checkbox" id='flexCheckDefault' className='form_check_input' />
                        <label htmlFor="flexCheckDefault" className='form_check_label'>Default checkboxDefault</label>
                      </div>
                      <div className='form_check'>
                        <input type="checkbox" id='flexCheckChecked' className='form_check_input' defaultChecked />
                        <label htmlFor="flexCheckChecked" className='form_check_label'>Checked checkbox</label>
                      </div>
                      <br />
                      <pre>
                        <code className='language-html'>
                          {`
                         <div className='form_check'>
                          <input type="checkbox" id='flexCheckDefault' className='form_check_input'/>
                          <label htmlFor="flexCheckDefault" className='form_check_label'>Default checkboxDefault</label>
                       </div>
                       <div className='form_check'>
                          <input type="checkbox" id='flexCheckChecked' className='form_check_input' defaultChecked />
                          <label htmlFor="flexCheckChecked" className='form_check_label'>Checked checkbox</label>
                       </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Disable Checks</h3>
                      <p>add disabled attribute to input type checkbox element</p>
                      <div className='form_check'>
                        <input type="checkbox" id='checkdisabled' className='form_check_input' disabled />
                        <label htmlFor="checkdisabled" className='form_check_label'>Disable checkbox</label>
                      </div>
                      <br />
                      <pre>
                        <code className='language-html'>
                          {`
                      <div className='form_check'>
                        <input type="checkbox" id='checkdisabled' className='form_check_input' disabled />
                        <label htmlFor="checkdisabled" className='form_check_label'>Disable checkbox</label>
                      </div>
                      `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Radio</h3>
                      <div className='form_radio'>
                        <input type="radio" id='flexRadioDefault1' name='flexRadioDefault' className='form_radio_input' />
                        <label htmlFor="flexRadioDefault1" className='form_radio_label'>Default radio</label>
                      </div>
                      <div className='form_radio'>
                        <input type="radio" id='flexRadioDefault2' name='flexRadioDefault' className='form_radio_input' defaultChecked />
                        <label htmlFor="flexRadioDefault2" className='form_radio_label'>Default checked radio</label>
                      </div>
                      <br />
                      <pre>
                        <code className='language-html'>
                          {`
                        <div className='form_radio'>
                          <input type="radio" id='flexRadioDefault1' name='flexRadioDefault' className='form_radio_input'/>
                          <label htmlFor="flexRadioDefault1" className='form_radio_label'>Default radio</label>
                      </div>
                      <div className='form_radio'>
                          <input type="radio" id='flexRadioDefault2' name='flexRadioDefault' className='form_radio_input' defaultChecked/>
                          <label htmlFor="flexRadioDefault2" className='form_radio_label'>Default checked radio</label>
                      </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Disable Radio</h3>
                      <p>add disabled attribute to button element</p>
                      <div className='form_radio'>
                        <input type="radio" id='disabledradio' name='flexRadioDefault' className='form_radio_input' disabled />
                        <label htmlFor="disabledradio" className='form_radio_label'>Default radio</label>
                      </div>
                      <br />
                      <pre>
                        <code className='language-html'>
                          {`
                        <div className='form_radio'>
                          <input type="radio" id='disabledradio' name='flexRadioDefault' className='form_radio_input' disabled/>
                          <label htmlFor="disabledradio" className='form_radio_label'>Default radio</label>
                      </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <hr />
                <h1>Select </h1>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Default Select</h3>
                      <p>the native {'<select>'} with custom CSS</p>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <Item sx={{ boxShadow: 0 }}>
                          <div className='form_select'>
                              <select id='formselectgender' defaultValue={''} required>
                                <option value="" disabled>เพศ</option>
                                <option value="1">ชาย</option>
                                <option value="2">หญิง</option>
                                <option value="3">ไม่ระบุ</option>
                              </select>
                              <label htmlFor="formselectgender">เพศ</label>
                            </div>
                            <div className='form_select'>
                              <select id='formselectday' defaultValue={''} required>
                                <option value="" disabled>วันเกิด</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                              <label htmlFor="formselectday">วันเกิด</label>
                            </div>
                            <div className='form_select'>
                              <select id='formselectmont' defaultValue={''} required>
                                <option value="">เดือนเกิด</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                              <label htmlFor="formselectmont">เดือนเกิด</label>
                            </div>
                            <div className='form_select'>
                              <select id='formselectyear' defaultValue={''} required>
                                <option value="">ปีเกิด</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                              <label htmlFor="formselectyear">ปีเกิด</label>
                            </div>
                          </Item>
                        </Grid>
                      </Grid>
                      <br /> <br />
                      <pre>
                        <code className='language-html'>
                          {`
                         <div className='form_select'>
                         <select id='formselect' defaultValue={''} required>
                           <option value="">วันเกิด</option>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                         </select>
                         <label htmlFor="formselect">วันเกิด</label>
                       </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Error</h3>
                      <p>The select is not vilidate please add the className '.form_select_error' in div tag</p>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <Item sx={{ boxShadow: 0 }}>
                            <div className='form_select form_select_error'>
                              <select id='formselect' defaultValue={'2'} required>
                                <option value="">Plceholder text</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                              <label>Plceholder text</label>
                              <span className='error_message'>Error message</span>
                            </div>
                          </Item>
                        </Grid>
                      </Grid>

                      <br />
                      <pre>
                        <code className='language-html'>
                          {`
                         <div className='form_select form_select_error'>
                         <select id='formselect' defaultValue={''} >
                           <option value="">Plceholder text</option>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                         </select>
                         <label>Plceholder text</label>
                         <span className='error_message'>Error message</span>
                       </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <h3>Disable</h3>
                      <p>add disabled attribute to select element</p>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <Item sx={{ boxShadow: 0 }}>
                            <div className='form_select'>
                              <select id='formselect' defaultValue={'0'} disabled>
                                <option value="0">Select disable label</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                              </select>
                              <label className='label-disable'>Select disable label</label>
                            </div>
                          </Item>
                        </Grid>
                      </Grid>
                      <br /> <br />
                      <pre>
                        <code className='language-html'>
                          {`
                         <div className='form_select'>
                         <select id='formselect' defaultValue={'0'} disabled>
                           <option value="0">Select disable label</option>
                           <option value="1">1</option>
                           <option value="2">2</option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                         </select>
                         <label className='label-disable'>Select disable label</label>
                       </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>


                </Grid>
              </Item>
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <hr />
                <h1>Card </h1>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <Item sx={{ boxShadow: 0 }}>
                            <div className='card shadow_lv2_bottom'>
                              <h3 className='mt_0'>Card title</h3>
                              <p className='m_0'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                          </Item>
                        </Grid>
                      </Grid>
                      <br /> <br />
                      <pre>
                        <code className='language-html'>
                          {`
                        <div className='card shadow_lv2_bottom'>
                          <h3 className='mt_0'>Card title</h3>
                          <p className='m_0'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <hr />
                <h1>Toast </h1>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      
                      <Grid container spacing={2} >
                        <Grid item xs={12} md={12}>
                          <Item sx={{ boxShadow: 0 ,textAlign: 'center'}}>
                          <p>Example Toast</p>
                          <button type="button" className='btn btn_primary' onClick={() => ToastToggle()}>Test Toast</button>
                          </Item>
                        </Grid>
                      </Grid>
                    
                    </Item>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <Item sx={{ boxShadow: 0 }}>
                            <p>Title header only</p>

                            <div className='toast toast_info'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Title header</p>
                              </div>
                            </div>
                            <br />
                            <div className='toast toast_success'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Success header</p>
                              </div>
                            </div>
                            <br />
                            <div className='toast toast_error'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Error header</p>
                              </div>
                            </div>
                            <br />
                          </Item>
                        </Grid>
                      </Grid>
                      <pre>
                        <code className='language-html'>
                          {`
                        <div className='toast toast_info'>
                        <div className='icon'>
                          <span></span>
                        </div>
                        <div className='content'>
                          <p className='toast_tittle'>Info Title header</p>
                        </div>
                      </div>
                      <br/>
                      <div className='toast toast_success'>
                        <div className='icon'>
                          <span></span>
                        </div>
                        <div className='content'>
                          <p className='toast_tittle'>Success Title header</p>
                        </div>
                      </div>
                      <br/>
                      <div className='toast toast_error'>
                        <div className='icon'>
                          <span></span>
                        </div>
                        <div className='content'>
                          <p className='toast_tittle'>Error Title header</p>
                        </div>
                      </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <Item sx={{ boxShadow: 0 }}>
                            <p>Title header and Description </p>
                            <div className='toast toast_info'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Title header</p>
                                <p className='toast_description'>Description</p>
                              </div>
                            </div>
                            <br />
                            <div className='toast toast_success'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Success header</p>
                                <p className='toast_description'>Description</p>
                              </div>
                            </div>
                            <br />
                            <div className='toast toast_error'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Error header</p>
                                <p className='toast_description'>Description</p>
                              </div>
                            </div>
                            <br />
                          </Item>
                        </Grid>
                      </Grid>
                      <pre>
                        <code className='language-html'>
                          {`
                        <div className='toast toast_info'>
                        <div className='icon'>
                          <span></span>
                        </div>
                        <div className='content'>
                          <p className='toast_tittle'>Title header</p>
                          <p className='toast_description'>Description</p>
                        </div>
                      </div>
                      <br />
                      <div className='toast toast_success'>
                        <div className='icon'>
                          <span></span>
                        </div>
                        <div className='content'>
                          <p className='toast_tittle'>Success header</p>
                          <p className='toast_description'>Description</p>
                        </div>
                      </div>
                      <br />
                      <div className='toast toast_error'>
                        <div className='icon'>
                          <span></span>
                        </div>
                        <div className='content'>
                          <p className='toast_tittle'>Error header</p>
                          <p className='toast_description'>Description</p>
                        </div>
                      </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <Item sx={{ boxShadow: 0 }}>
                            <p>Title header with Close Button</p>
                            <div className='toast toast_info toast_btn_close'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Title header</p>
                              </div>
                              <div className='close'>
                                <button>
                                  <span></span>
                                </button>
                              </div>
                            </div>
                            <br />
                            <div className='toast toast_success toast_btn_close'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Success header</p>
                              </div>
                              <div className='close'>
                                <button>
                                  <span></span>
                                </button>
                              </div>
                            </div>
                            <br />
                            <div className='toast toast_error toast_btn_close'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Error header</p>
                              </div>
                              <div className='close'>
                                <button>
                                  <span></span>
                                </button>
                              </div>
                            </div>
                            <br />
                          </Item>
                        </Grid>
                      </Grid>
                      <pre>
                        <code className='language-html'>
                          {`
                       <div className='toast toast_info toast_btn_close'>
                       <div className='icon'>
                         <span></span>
                       </div>
                       <div className='content'>
                         <p className='toast_tittle'>Title header</p>
                       </div>
                       <div className='close'>
                         <button>
                           <span></span>
                         </button>
                       </div>
                     </div>
                     <br/>
                     <div className='toast toast_success toast_btn_close'>
                       <div className='icon'>
                         <span></span>
                       </div>
                       <div className='content'>
                         <p className='toast_tittle'>Success header</p>
                       </div>
                       <div className='close'>
                         <button>
                           <span></span>
                         </button>
                       </div>
                     </div>
                     <br/>
                     <div className='toast toast_error toast_btn_close'>
                       <div className='icon'>
                         <span></span>
                       </div>
                       <div className='content'>
                         <p className='toast_tittle'>Error header</p>
                       </div>
                       <div className='close'>
                         <button>
                           <span></span>
                         </button>
                       </div>
                     </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <Item sx={{ boxShadow: 0 }}>
                            <p>Title header and Description with Close Button</p>
                            <div className='toast toast_info toast_btn_close'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Title header</p>
                                <p className='toast_description'>Description</p>
                              </div>
                              <div className='close'>
                                <button>
                                  <span></span>
                                </button>
                              </div>
                            </div>
                            <br />
                            <div className='toast toast_success toast_btn_close'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Success header</p>
                                <p className='toast_description'>Description</p>
                              </div>
                              <div className='close'>
                                <button>
                                  <span></span>
                                </button>
                              </div>
                            </div>
                            <br />
                            <div className='toast toast_error toast_btn_close'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Error header</p>
                                <p className='toast_description'>Description</p>
                              </div>
                              <div className='close'>
                                <button>
                                  <span></span>
                                </button>
                              </div>
                            </div>
                            <br />
                          </Item>
                        </Grid>
                      </Grid>
                      <pre>
                        <code className='language-html'>
                          {`
                       <div className='toast toast_info toast_btn_close'>
                       <div className='icon'>
                         <span></span>
                       </div>
                       <div className='content'>
                         <p className='toast_tittle'>Title header</p>
                         <p className='toast_description'>Description</p>
                       </div>
                       <div className='close'>
                         <button>
                           <span></span>
                         </button>
                       </div>
                     </div>
                     <br/>
                     <div className='toast toast_success toast_btn_close'>
                       <div className='icon'>
                         <span></span>
                       </div>
                       <div className='content'>
                         <p className='toast_tittle'>Success header</p>
                         <p className='toast_description'>Description</p>
                       </div>
                       <div className='close'>
                         <button>
                           <span></span>
                         </button>
                       </div>
                     </div>
                     <br/>
                     <div className='toast toast_error toast_btn_close'>
                       <div className='icon'>
                         <span></span>
                       </div>
                       <div className='content'>
                         <p className='toast_tittle'>Error header</p>
                         <p className='toast_description'>Description</p>
                       </div>
                       <div className='close'>
                         <button>
                           <span></span>
                         </button>
                       </div>
                     </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <Item sx={{ boxShadow: 0 }}>
                            <p>Title header only</p>
                            <div className='toast toast_info'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Title header</p>
                                <button className='btn_link'>Action</button>
                              </div>
                            </div>
                            <br />
                            <div className='toast toast_success'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Success header</p>
                                <button className='btn_link'>Action</button>
                              </div>
                            </div>
                            <br />
                            <div className='toast toast_error'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Error header</p>
                                <button className='btn_link'>Action</button>
                              </div>
                            </div>
                            <br />
                          </Item>
                        </Grid>
                      </Grid>
                      <pre>
                        <code className='language-html'>
                          {`
                         <div className='toast toast_info'>
                         <div className='icon'>
                           <span></span>
                         </div>
                         <div className='content'>
                           <p className='toast_tittle'>Title header</p>
                           <button className='btn_link'>Action</button>
                         </div>
                       </div>
                       <br/>
                       <div className='toast toast_success'>
                         <div className='icon'>
                           <span></span>
                         </div>
                         <div className='content'>
                           <p className='toast_tittle'>Success header</p>
                           <button className='btn_link'>Action</button>
                         </div>
                       </div>
                       <br/>
                       <div className='toast toast_error'>
                         <div className='icon'>
                           <span></span>
                         </div>
                         <div className='content'>
                           <p className='toast_tittle'>Error header</p>
                           <button className='btn_link'>Action</button>
                         </div>
                       </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <Item sx={{ boxShadow: 0 }}>
                            <p>Title header and Description </p>
                            <div className='toast toast_info'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Title header</p>
                                <p className='toast_description'>Description</p>
                                <button className='btn_link'>Action</button>
                              </div>
                            </div>
                            <br />
                            <div className='toast toast_success'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Success header</p>
                                <p className='toast_description'>Success Description</p>
                                <button className='btn_link'>Action</button>
                              </div>
                            </div>
                            <br />
                            <div className='toast toast_error'>
                              <div className='icon'>
                                <span></span>
                              </div>
                              <div className='content'>
                                <p className='toast_tittle'>Error header</p>
                                <p className='toast_description'>Error Description</p>
                                <button className='btn_link'>Action</button>
                              </div>
                            </div>
                            <br />
                          </Item>
                        </Grid>
                      </Grid>
                      <pre>
                        <code className='language-html'>
                          {`
                        <div className='toast toast_info'>
                        <div className='icon'>
                          <span></span>
                        </div>
                        <div className='content'>
                          <p className='toast_tittle'>Title header</p>
                          <p className='toast_description'>Description</p>
                        </div>
                      </div>
                      <br />
                      <div className='toast toast_success'>
                        <div className='icon'>
                          <span></span>
                        </div>
                        <div className='content'>
                          <p className='toast_tittle'>Success header</p>
                          <p className='toast_description'>Description</p>
                        </div>
                      </div>
                      <br />
                      <div className='toast toast_error'>
                        <div className='icon'>
                          <span></span>
                        </div>
                        <div className='content'>
                          <p className='toast_tittle'>Error header</p>
                          <p className='toast_description'>Description</p>
                        </div>
                      </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <br />
            <br />
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <hr />
                <h1>Pop Up </h1>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <Item sx={{ boxShadow: 0 }}>
                          
                          <Grid container spacing={2} >
                            <Grid item xs={12} md={12}>
                              <Item sx={{ boxShadow: 0 ,textAlign: 'center'}}>
                              <p>Example Popup</p>
                              <button type="button" className='btn btn_primary' onClick={() => PopUpToggle()}>Show Popup</button>
                              </Item>
                            </Grid>
                          </Grid>
                        
                        </Item>
                      </Grid>
                    </Grid>
                      <br /> <br />
                      <pre>
                        <code className='language-html'>
                          {`
                        <div className={'pop_up animated ' + (alert === '1' ? 'fadeIn' : '')}>
                        <div className='pop_up_dialog shadow_lv2_bottom'>
                          <div className='pop_up_content'>
                           <div className='pop_up_header'>
                                <p className='m_0'>Header</p>
                           </div>
                           <div className='pop_up_body'>
                                <p className='m_0'>description</p>
                           </div>
                           <div className='pop_up_footer'>
                           <button type="button" className='btn btn_primary w-100' onClick={() => PopUpToggle()}>Button</button>
                           </div>
                          </div>
                        </div>
                      </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <hr />
                <h1>Loading </h1>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <Item sx={{ boxShadow: 0 }}>
                          
                          <Grid container spacing={2} >
                            <Grid item xs={12} md={12}>
                              <Item sx={{ boxShadow: 0 ,textAlign: 'center'}}>
                              <p>Example Loading</p>
                              <button type="button" className='btn btn_primary' onClick={() => LoaderToggle()}>Show Loading</button>
                              <p>(Example Toast : The Loading will be stopped automatically after 5 seconds)</p>
                              </Item>
                            </Grid>
                          </Grid>
                        
                        </Item>
                      </Grid>
                    </Grid>
                      <br />
                      <pre>
                        <code className='language-html'>
                          {`
                         <div className={'loader_overlay animated ' + (loader === '1' ? 'fadeIn' : '')}>
                          <div className='loader center'><span></span></div>
                        </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>
            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <hr />
                <h1>Switch Button </h1>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <Item sx={{ boxShadow: 0 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                              <Item sx={{ boxShadow: 0 ,textAlign: 'center'}}>
                              <div className="switch_toggle">
                                <input id="on-select" name="view" type="radio" defaultValue={'en'}  defaultChecked />
                                <label htmlFor="on-select">EN</label>
                                <input id="off-select" name="view" type="radio" defaultValue={'th'}  />
                                <label htmlFor="off-select">ไทย</label>
                              </div>
                              </Item>
                            </Grid>
                          </Grid>
                        
                        </Item>
                      </Grid>
                    </Grid>
                      <br />
                      <pre>
                        <code className='language-html'>
                          {`
                        <div className="switch_toggle">
                          <input id="on-select" name="view" type="radio" defaultValue={'en'}  defaultChecked />
                          <label htmlFor="on-select">EN</label>
                          <input id="off-select" name="view" type="radio" defaultValue={'th'}  />
                          <label htmlFor="off-select">ไทย</label>
                        </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>

            <Grid item xs={12}>
              <Item sx={{ boxShadow: 0 }}>
                <hr />
                <h1>Button group</h1>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={12}>
                    <Item sx={{ boxShadow: 0 }}>
                      <Grid container spacing={2}>
                      <Grid item xs={12} md={12}>
                        <Item sx={{ boxShadow: 0 }}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} md={12}>
                              <Item sx={{ boxShadow: 0 ,textAlign: 'center'}}>
                              <div className="btn-group" role="group" aria-label="Basic outlined example">
                                <button type="button" className="btn btn_secondary active">บาร์โค้ด</button>
                                <button type="button" className="btn btn_secondary">คิวอาร์</button>
                                <button type="button" className="btn btn_secondary">โค้ด</button>
                              </div>
                              </Item>
                            </Grid>
                          </Grid>
                        
                        </Item>
                      </Grid>
                    </Grid>
                      <br />
                      <pre>
                        <code className='language-html'>
                          {`
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                          <button type="button" className="btn btn_secondary active">บาร์โค้ด</button>
                          <button type="button" className="btn btn_secondary">คิวอาร์</button>
                          <button type="button" className="btn btn_secondary">โค้ด</button>
                        </div>
                        `}
                        </code>
                      </pre>
                    </Item>
                  </Grid>
                </Grid>
              </Item>
            </Grid>

          </Grid>

        </Box>
      </Container>
    </div>
  );
}

export default App;
