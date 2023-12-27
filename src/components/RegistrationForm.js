import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {months} from "../constant";

function RegistrationForm() {
  const [dayArray, setDayArray] = useState([]);
  const [monthArray, setMonthArray] = useState([]);
  const [yearArray, setYearArray] = useState([]);
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState({
    fullNameError: {
      status: false,
      msg: ''
    },
    contactNumberError: {
      status: false,
      msg: ''
    },
    dayError: {
      status: false,
      msg: ''
    },
    monthError: {
      status: false,
      msg: ''
    },
    yearError: {
      status: false,
      msg: ''
    },
    emailError: {
      status: false,
      msg: ''
    },
    passwordError: {
      status: false,
      msg: ''
    },
    confirmPasswordError: {
      status: false,
      msg: ''
    }
  });
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const initBirthdate = () => {
    const dayArr = [];
    const year = (new Date()).getFullYear();

    for (let i = 1; i <= 31; i++) {
      dayArr.push(i);
    }

    const years = Array.from(new Array(40),( val, index) => year - index );

    setDayArray(dayArr);
    setYearArray(years);
    setMonthArray(months);
  }

  useEffect(() => {
    initBirthdate();
  }, [])

  const handleFullNameChange = (data) => {
    const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
    const hasNoSpacesAround = /^\S.*\S$/;
    setFullName(data);

    if (data.trim() === '') {
      setError({
        ...error,
        fullNameError: {
          status: true,
          msg: 'Full Name cannot be empty. Please try again.'
        }
      })

      return {
        status: true,
        msg: 'Full Name cannot be empty. Please try again.'
      }
    } else if (!hasNoSpacesAround.test(data)) {
      setError({
        ...error,
        fullNameError: {
          status: true,
          msg: 'Full Name cannot start or end with a space. Please try again.'
        }
      })
    } else if (regex.test(data)) {
      setError({
        ...error,
        fullNameError: {
          status: true,
          msg: 'No symbols are allowed in Full Name. Please try again.'
        }
      })

      return {
        status: true,
        msg: 'No symbols are allowed in Full Name. Please try again.'
      }
    } else {
      setError({
        ...error,
        fullNameError: {
          status: false,
          msg: ''
        }
      })

      return {
        status: false,
        msg: ''
      }
    }
  }

  const handleContactNumberChange = (data) => {
    const regex = /^\(\d{3}\) \d{3}-\d{4}$/;
    setContactNumber(data.trim());

    if (data.trim() === '') {
      setError({
        ...error,
        contactNumberError: {
          status: true,
          msg: 'Contact Number cannot be empty. Please try again.'
        }
      })

      return {
        status: true,
        msg: 'Contact Number cannot be empty. Please try again.'
      }
    } else if (!regex.test(data)) {
      setError({
        ...error,
        contactNumberError: {
          status: true,
          msg: 'Not a valid Canadian phone number. Please try again with (XXX) XXX-XXXX format.'
        }
      })

      return {
        status: true,
        msg: 'Not a valid Canadian phone number. Please try again with (XXX) XXX-XXXX format.'
      }
    } else {
      setError({
        ...error,
        contactNumberError: {
          status: false,
          msg: ''
        }
      })

      return {
        status: false,
        msg: ''
      }
    }
  }

  const handleDayChange = (data) => {
    setDay(data);
    if (data.trim() === '') {
      setError({
        ...error,
        dayError: {
          status: true,
          msg: 'Day cannot be empty. Please try again.'
        }
      })

      return {
        status: true,
        msg: 'Day cannot be empty. Please try again.'
      }
    } else {
      setError({
        ...error,
        dayError: {
          status: false,
          msg: ''
        }
      })

      return {
        status: false,
        msg: ''
      }
    }
  }

  const handleMonthChange = (data) => {
    setMonth(data);

    if (data.trim() === '') {
      setError({
        ...error,
        monthError: {
          status: true,
          msg: 'Month cannot be empty. Please try again.'
        }
      })

      return {
        status: true,
        msg: 'Month cannot be empty. Please try again.'
      }
    } else if (parseInt(year) === (new Date()).getFullYear()) {
      const dayArr = [];
      const currentMonth = (new Date()).getMonth() + 1;

      const date = new Date();
      date.setMonth(currentMonth - 1);

      const currentMonthName =  date.toLocaleString('en-US', {
        month: 'long',
      });

      if (data === currentMonthName.toLowerCase()) {
        for (let i = 1; i <= (new Date()).getDate(); i++) {
          dayArr.push(i);
        }
      } else {
        for (let i = 1; i <= 31; i++) {
          dayArr.push(i);
        }
      }

      setDayArray(dayArr);
    } else if (data === 'april' || data === 'june' || data === 'september' || data === 'november') {
      const dayArr = [];

      for (let i = 1; i <= 30; i++) {
        dayArr.push(i);
      }

      setDayArray(dayArr);
      setDay('');
    } else if (year % 4 === 0 && data === 'february') {
      const dayArr = [];

      for (let i = 1; i <= 29; i++) {
        dayArr.push(i);
      }

      setDayArray(dayArr);
      setDay('');
    } else if (data === 'february') {
      const dayArr = [];

      for (let i = 1; i <= 28; i++) {
        dayArr.push(i);
      }

      setDayArray(dayArr);
      setDay('');
    } else {
      const dayArr = [];

      for (let i = 1; i <= 31; i++) {
        dayArr.push(i);
      }

      setDayArray(dayArr);
    }

    setError({
      ...error,
      monthError: {
        status: false,
        msg: ''
      }
    })

    return {
      status: false,
      msg: ''
    }
  }

  const handleYearChange = (data) => {
    setYear(data);

    if (data.trim() === '') {
      setError({
        ...error,
        yearError: {
          status: true,
          msg: 'Year cannot be empty. Please try again.'
        }
      })

      return {
        status: true,
        msg: 'Year cannot be empty. Please try again.'
      }
    } else if (parseInt(data) === (new Date()).getFullYear()) {
      const monthArr = [];
      const month = (new Date()).getMonth() + 1;

      monthArray.filter((m, index) => {
        if (index < month) monthArr.push(m)
      });

      setMonthArray(monthArr);
      setMonth('');
    } else if (data % 4 === 0 && month === 'february') {
      const dayArr = [];

      for (let i = 1; i <= 29; i++) {
        dayArr.push(i);
      }

      setDayArray(dayArr);
      setDay('');
    } else if (month === 'february') {
      const dayArr = [];

      for (let i = 1; i <= 28; i++) {
        dayArr.push(i);
      }

      setDayArray(dayArr);
    } else {
      const dayArr = [];

      for (let i = 1; i <= 31; i++) {
        dayArr.push(i);
      }

      setDayArray(dayArr);
      initBirthdate();

      setError({
        ...error,
        yearError: {
          status: false,
          msg: ''
        }
      })

      return {
        status: false,
        msg: ''
      }
    }
  }

  const handleEmailChange = (data) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(data.trim());

    if (data.trim() === '') {
      setError({
        ...error,
        emailError: {
          status: true,
          msg: 'Email cannot be empty. Please try again.'
        }
      })

      return {
        status: true,
        msg: 'Email cannot be empty. Please try again.'
      }
    } else if (!regex.test(data)) {
      setError({
        ...error,
        emailError: {
          status: true,
          msg: 'Not a valid email address. Please try again.'
        }
      })

      return {
        status: true,
        msg: 'Not a valid email address. Please try again.'
      }
    } else {
      setError({
        ...error,
        emailError: {
          status: false,
          msg: ''
        }
      })

      return {
        status: false,
        msg: ''
      }
    }
  }

  const handlePasswordChange = (data) => {
    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    setPassword(data.trim());

    if (data.trim() === '') {
      setError({
        ...error,
        passwordError: {
          status: true,
          msg: 'Password cannot be empty. Please try again.'
        }
      })

      return {
        status: true,
        msg: 'Password cannot be empty. Please try again.'
      }
    } else if (!regex.test(data)) {
      setError({
        ...error,
        passwordError: {
          status: true,
          msg: 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number. Please try again.'
        }
      })

      return {
        status: true,
        msg: 'Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number. Please try again.'
      }
    } else {
      setError({
        ...error,
        passwordError: {
          status: false,
          msg: ''
        }
      })

      return {
        status: false,
        msg: ''
      }
    }
  }

  const handleConfirmPasswordChange = (data) => {
    setConfirmPassword(data.trim());

    if (data.trim() === '') {
      setError({
        ...error,
        confirmPasswordError: {
          status: true,
          msg: 'Confirm Password cannot be empty. Please try again.'
        }
      })

      return {
        status: true,
        msg: 'Confirm Password cannot be empty. Please try again.'
      }
    } else if (data !== password) {
      setError({
        ...error,
        confirmPasswordError: {
          status: true,
          msg: 'Confirm Password does not match. Please try again.'
        }
      })

      return {
        status: true,
        msg: 'Confirm Password does not match. Please try again.'
      }
    } else {
      setError({
        ...error,
        confirmPasswordError: {
          status: false,
          msg: ''
        }
      })

      return {
        status: false,
        msg: ''
      }
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullNameError = await handleFullNameChange(fullName);
    const contactNumberError = await handleContactNumberChange(contactNumber);
    const dayError = await handleDayChange(day);
    const monthError = await handleMonthChange(month);
    const yearError = await handleYearChange(year);
    const emailError = await handleEmailChange(email);
    const passwordError = await handlePasswordChange(password);
    const confirmPasswordError = await handleConfirmPasswordChange(confirmPassword);

    setError({...error, fullNameError, contactNumberError, dayError, monthError, yearError, emailError, passwordError, confirmPasswordError})

    if (
      error?.fullNameError?.status || error?.contactNumberError?.status || error?.dayError?.status
      || error?.monthError?.status || error?.yearError?.status || error?.emailError?.status
      || error?.passwordError?.status || error?.confirmPasswordError?.status || fullName === ''
      || contactNumber === '' || day === '' || month === '' || year === '' || email === '' || password === ''
      || confirmPassword === '') {
      return;
    }

    const postData = {
      full_name: fullName,
      contact_number: contactNumber,
      birthdate: `${month} ${day}, ${year}`,
      email: email,
      password: password,
      confirm_password: confirmPassword
    };

    try {
      const response = await fetch('https://fullstack-test-navy.vercel.app/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        const responseData = await response.json();
        return toast.error(responseData.description, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      const responseData = await response.json();
      toast.success(responseData.description, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  const handleClearForm = () => {
    setFullName('');
    setContactNumber('');
    setDay('');
    setMonth('');
    setYear('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError({
      fullNameError: {
        status: false,
        msg: ''
      },
      contactNumberError: {
        status: false,
        msg: ''
      },
      dayError: {
        status: false,
        msg: ''
      },
      monthError: {
        status: false,
        msg: ''
      },
      yearError: {
        status: false,
        msg: ''
      },
      emailError: {
        status: false,
        msg: ''
      },
      passwordError: {
        status: false,
        msg: ''
      },
      confirmPasswordError: {
        status: false,
        msg: ''
      }
    });
    initBirthdate();
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <form className="pt-6 w-full max-w-xl sm:pb-8" onSubmit={e => {handleSubmit(e)}}>
        <h1 className="text-[20px] font-bold text-left mb-5 ml-5 sm:ml-0">
          Create User Account
        </h1>
        <div className='border-t border-t-[#D8E0E9] sm:border-0 sm:shadow-[0_4px_30px_rgba(0,0,0,0.08)] sm:rounded-[8px] p-5 sm:p-10 mb-10'>
          <div className="mb-4">
            <label className="block text-[#333333] text-[16px] font-bold mb-2 text-left" htmlFor="full_name">
              Full Name
            </label>
            <div className="relative">
              <input type="text" id="full_name"
                className={
                  `${error?.fullNameError?.status
                    ? 'border-red-500 dark:border-red-600 dark:focus:border-red-500 focus:border-red-600'
                    : 'border-gray-300 dark:border-gray-600 dark:focus:border-gray-500 focus:border-gray-600'}
                    block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer`
                }
                placeholder=" "
                onChange={e => {handleFullNameChange(e.target.value)}}
                value={fullName}
              />
              <label htmlFor="full_name"
                className={`
                  ${error?.fullNameError?.status
                    ? 'text-red-500 dark:text-red-400 peer-focus:text-red-600 peer-focus:dark:text-red-500'
                    : 'text-gray-500 dark:text-gray-400 peer-focus:text-gray-600 peer-focus:dark:text-gray-500'
                  }
                  absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
                `}
              >
                Full Name<span className="text-red-500">*</span>
              </label>
            </div>
            {error?.fullNameError?.status && <p className="text-red-500 text-xs text-left">{error?.fullNameError.msg}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-[16px] font-bold mb-2 text-left" htmlFor="contact_number">
              Contact Number
            </label>
            <div className="relative">
              <input type="text" id="contact_number"
                className={
                  `${error?.contactNumberError?.status
                    ? 'border-red-500 dark:border-red-600 dark:focus:border-red-500 focus:border-red-600'
                    : 'border-gray-300 dark:border-gray-600 dark:focus:border-gray-500 focus:border-gray-600'}
                    block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer`
                }
                placeholder=" "
                onChange={e => {handleContactNumberChange(e.target.value)}}
                value={contactNumber}
              />
              <label htmlFor="contact_number"
                className={`
                  ${error?.contactNumberError?.status
                    ? 'text-red-500 dark:text-red-400 peer-focus:text-red-600 peer-focus:dark:text-red-500'
                    : 'text-gray-500 dark:text-gray-400 peer-focus:text-gray-600 peer-focus:dark:text-gray-500'
                  }
                  absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
                `}
              >
                Contact Number<span className="text-red-500">*</span>
              </label>
            </div>
            {error?.contactNumberError?.status && <p className="text-red-500 text-xs text-left">{error?.contactNumberError.msg}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-[16px] font-bold mb-2 text-left">
              Birthdate
            </label>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-1/3 px-3 md:mb-0">
                <select
                  onChange={e => {handleDayChange(e.target.value)}}
                  className={`
                    ${error?.dayError?.status
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:ring-red-500 dark:focus:border-red-500'
                      : 'border-gray-300 focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:border-gray-500'
                    }
                  bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white
                  `}
                >
                  <option value='' selected={day === '' ? true : false}>Day<span className="text-red-500">*</span></option>
                  {dayArray.map((d, index) => <option selected={d === day ? true : false} key={index} value={d}>{d}</option> )}
                </select>
              </div>

              <div className="w-1/3 px-3 md:mb-0">
                <select
                  onChange={e => {handleMonthChange(e.target.value)}}
                  className={`
                    ${error?.monthError?.status
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:ring-red-500 dark:focus:border-red-500'
                      : 'border-gray-300 focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:border-gray-500'
                    }
                  bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white
                  `}
                >
                  <option value='' selected={month === '' ? true : false}>Month<span className="text-red-500">*</span></option>
                  {monthArray.map((m, index) => <option selected={m === month ? true : false} key={index} value={m}>{m.charAt(0).toUpperCase() + m.slice(1)}</option> )}
                </select>
              </div>

              <div className="w-1/3 px-3 md:mb-0">
                <select
                  onChange={e => {handleYearChange(e.target.value)}}
                  className={`
                    ${error?.yearError?.status
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-600 dark:focus:ring-red-500 dark:focus:border-red-500'
                      : 'border-gray-300 focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:focus:ring-gray-500 dark:focus:border-gray-500'
                    }
                  bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white
                  `}
                >
                  <option value='' selected={year === '' ? true : false}>Year<span className="text-red-500">*</span></option>
                  {yearArray.map((y, index) => <option selected={y === year ? true : false} key={index} value={y}>{y}</option> )}
                </select>
              </div>
            </div>
            {error?.dayError?.status && <p className="text-red-500 text-xs text-left">{error?.dayError.msg}</p>}
            {error?.monthError?.status && <p className="text-red-500 text-xs text-left">{error?.monthError.msg}</p>}
            {error?.yearError?.status && <p className="text-red-500 text-xs text-left">{error?.yearError.msg}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-[16px] font-bold mb-2 text-left" htmlFor="email_address">
              Email Address
            </label>
            <div className="relative">
              <input type="email" id="email_address"
                className={
                  `${error?.emailError?.status
                    ? 'border-red-500 dark:border-red-600 dark:focus:border-red-500 focus:border-red-600'
                    : 'border-gray-300 dark:border-gray-600 dark:focus:border-gray-500 focus:border-gray-600'}
                    block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer`
                }
                placeholder=" "
                onChange={e => {handleEmailChange(e.target.value)}}
                value={email}
              />
              <label htmlFor="email_address"
                className={`
                  ${error?.emailError?.status
                    ? 'text-red-500 dark:text-red-400 peer-focus:text-red-600 peer-focus:dark:text-red-500'
                    : 'text-gray-500 dark:text-gray-400 peer-focus:text-gray-600 peer-focus:dark:text-gray-500'
                  }
                  absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
                `}
              >
                Email Address<span className="text-red-500">*</span>
              </label>
            </div>
            {error?.emailError?.status && <p className="text-red-500 text-xs text-left">{error?.emailError.msg}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-[16px] font-bold mb-2 text-left" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input type="password" id="password"
                className={
                  `${error?.passwordError?.status
                    ? 'border-red-500 dark:border-red-600 dark:focus:border-red-500 focus:border-red-600'
                    : 'border-gray-300 dark:border-gray-600 dark:focus:border-gray-500 focus:border-gray-600'}
                    block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer`
                }
                placeholder=" "
                onChange={e => {handlePasswordChange(e.target.value)}}
                value={password}
              />
              <label htmlFor="password"
                className={`
                  ${error?.passwordError?.status
                    ? 'text-red-500 dark:text-red-400 peer-focus:text-red-600 peer-focus:dark:text-red-500'
                    : 'text-gray-500 dark:text-gray-400 peer-focus:text-gray-600 peer-focus:dark:text-gray-500'
                  }
                  absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
                `}
              >
                Password<span className="text-red-500">*</span>
              </label>
            </div>
            {error?.passwordError?.status && <p className="text-red-500 text-xs text-left">{error?.passwordError.msg}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-[#333333] text-[16px] font-bold mb-2 text-left" htmlFor="confirm_password">
              Confirm Password
            </label>
            <div className="relative">
              <input type="password" id="confirm_password"
                className={
                  `${error?.confirmPasswordError?.status
                    ? 'border-red-500 dark:border-red-600 dark:focus:border-red-500 focus:border-red-600'
                    : 'border-gray-300 dark:border-gray-600 dark:focus:border-gray-500 focus:border-gray-600'}
                    block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white focus:outline-none focus:ring-0 peer`
                }
                placeholder=" "
                onChange={e => {handleConfirmPasswordChange(e.target.value)}}
                value={confirmPassword}
              />
              <label htmlFor="confirm_password"
                className={`
                  ${error?.confirmPasswordError?.status
                    ? 'text-red-500 dark:text-red-400 peer-focus:text-red-600 peer-focus:dark:text-red-500'
                    : 'text-gray-500 dark:text-gray-400 peer-focus:text-gray-600 peer-focus:dark:text-gray-500'
                  }
                  absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1
                `}
              >
                Confirm Password<span className="text-red-500">*</span>
              </label>
            </div>
            {error?.confirmPasswordError?.status && <p className="text-red-500 text-xs text-left">{error?.confirmPasswordError.msg}</p>}
          </div>
        </div>

        <div className="bg-white p-5 sm:px-10 sm:py-0 shadow-[0_4px_20px_4px_rgba(0,0,0,0.15)] sm:shadow-none md:flex md:items-center md:justify-center md:gap-[10px]">
          <button className="w-full mb-3 md:w-auto md:mb-0 bg-transparent hover:bg-[#127C95] text-[#127C95] font-semibold hover:text-white py-[11px] px-[34px] border border-[#127C95] hover:border-transparent rounded-[6px]"
            type="button"
            onClick={handleClearForm}
          >
            Cancel
          </button>
          <button className="w-full md:w-auto bg-[#127C95] hover:bg-[#127C95] text-white font-bold py-[11px] px-[34px] rounded-[6px] focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default RegistrationForm
