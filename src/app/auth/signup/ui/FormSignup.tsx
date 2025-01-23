'use client';
import Link from "next/link";
import { Metadata } from "next";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";


export const metadata: Metadata = {
  title: "Inicio de sessión  | Process Doc",
  description: "Inición de sessión a la plataforma Process Doc",
};

import React, { useState, useTransition } from 'react';
import { SchemaSignin, SchemaSignup } from '@/interface/auth/auth.interface';

import { loginAction } from '@/actions';

export const FormSignup = () => {

  const [ errorMessage, setErrorMessage ] = useState<String | undefined>();
  const [ isPending, startTransition ] = useTransition();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SchemaSignup>( {
    defaultValues: {
      name:'',
      email: "",
      password: "",

    },
  } );

  const onSubmit = handleSubmit( async ( values ) => {
    setErrorMessage( undefined );
    startTransition( async () => {
      const response = await loginAction( values );

      if ( response.success ) {
        router.push( "/" );
      } else {
        setErrorMessage( response.error );
      }


    } );

  } );




  return (
    <div className="h-screen  flex justify-center items-center">
      <div className="flex justify-center  rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="px-26 py-17.5 text-center">
            {/*  <Link className="mb-5.5 inline-block" href="/">
              <Image
                className="hidden dark:block"
                src={ "/images/logo/logo.svg" }
                alt="Logo"
                width={ 176 }
                height={ 32 }
              />
              <Image
                className="dark:hidden"
                src={ "/images/logo/logo-dark.svg" }
                alt="Logo"
                width={ 176 }
                height={ 32 }
              />
            </Link> */}

            <p className="2xl:px-20">
              Programa Nacional de Becas y Crédito Educativbo
            </p>

            <span className="mt-15 inline-block">
              <svg
                width="350"
                height="350"
                viewBox="0 0 350 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >

                <path d="m33.58,294.84l-3.07,-12.12c-5.46,-2.31 -11.04,-4.31 -16.71,-5.99l-0.39,5.64l-1.58,-6.21c-7.04,-2.01 -11.83,-2.9 -11.83,-2.9c0,0 6.47,24.59 20.04,43.39l15.82,2.78l-12.29,1.77c1.71,2.05 3.55,4 5.5,5.82c19.74,18.31 41.74,26.72 49.12,18.77c7.38,-7.95 -2.64,-29.24 -22.38,-47.55c-6.12,-5.68 -13.81,-10.24 -21.51,-13.82l-0.72,10.42z" fill="#F2F2F2" id="svg_1" />
                <path d="m62.83,281.68l3.64,-11.97c-3.47,-4.79 -7.21,-9.38 -11.2,-13.76l-3.25,4.63l1.86,-6.13c-4.99,-5.36 -8.63,-8.59 -8.63,-8.59c0,0 -7.18,24.39 -5.29,47.5l12.11,10.54l-11.44,-4.83c0.4,2.64 0.97,5.25 1.69,7.82c7.43,25.88 21.91,44.43 32.35,41.44c10.43,-2.99 12.86,-26.39 5.43,-52.27c-2.3,-8.02 -6.52,-15.89 -11.26,-22.94l-6.01,8.56z" fill="#F2F2F2" id="svg_2" transform="matrix(1 0 0 1 0 0)" />
                <path d="m243.68,82.92l-1.92,0l0,-52.52c0,-3.99 -0.79,-7.95 -2.31,-11.64c-1.53,-3.68 -3.77,-7.03 -6.6,-9.86c-2.82,-2.82 -6.18,-5.06 -9.87,-6.59c-3.69,-1.52 -7.64,-2.31 -11.64,-2.31l-111.35,0c-8.07,0 -15.81,3.2 -21.51,8.9c-5.7,5.7 -8.91,13.44 -8.91,21.5l0,288.12c0,3.99 0.79,7.94 2.32,11.63c1.52,3.69 3.77,7.04 6.59,9.86c2.82,2.83 6.18,5.07 9.87,6.59c3.69,1.53 7.65,2.32 11.64,2.32l111.35,0c8.07,0 15.81,-3.21 21.51,-8.91c5.71,-5.7 8.91,-13.43 8.91,-21.49l0,-198.22l1.92,0l0,-37.38z" fill="#E6E6E6" id="svg_3" transform="matrix(1 0 0 1 0 0)" />
                <path d="m212.57,6.91l-14.54,0c0.67,1.63 0.93,3.41 0.75,5.17c-0.19,1.76 -0.8,3.45 -1.78,4.91c-0.99,1.47 -2.32,2.68 -3.89,3.51c-1.56,0.83 -3.3,1.26 -5.07,1.26l-63.79,0c-1.77,0 -3.52,-0.43 -5.08,-1.26c-1.56,-0.84 -2.89,-2.04 -3.88,-3.51c-0.99,-1.46 -1.6,-3.15 -1.78,-4.91c-0.18,-1.76 0.07,-3.54 0.74,-5.17l-13.57,0c-6.03,0 -11.81,2.39 -16.07,6.64c-4.26,4.26 -6.65,10.04 -6.65,16.06l0,287.7c0,6.02 2.39,11.8 6.65,16.05c4.26,4.26 10.04,6.65 16.07,6.65l111.89,0c6.02,0 11.8,-2.39 16.06,-6.65c4.26,-4.25 6.65,-10.03 6.65,-16.05l0,-287.7c0,-6.03 -2.39,-11.8 -6.65,-16.06c-4.26,-4.25 -10.04,-6.64 -16.06,-6.64z" fill="white" id="svg_4" />
                <path d="m190.02,158.29l-66.81,0c-0.64,0 -1.25,-0.26 -1.7,-0.7c-0.45,-0.45 -0.7,-1.06 -0.7,-1.7l0,-66.76c0,-0.63 0.25,-1.24 0.7,-1.69c0.45,-0.45 1.06,-0.71 1.7,-0.71l66.81,0c0.63,0 1.24,0.26 1.69,0.71c0.45,0.45 0.71,1.06 0.71,1.69l0,66.76c0,0.64 -0.26,1.25 -0.71,1.7c-0.45,0.44 -1.06,0.7 -1.69,0.7zm-66.81,-70.6c-0.38,0 -0.75,0.16 -1.02,0.43c-0.27,0.27 -0.42,0.63 -0.42,1.01l0,66.76c0,0.38 0.15,0.75 0.42,1.02c0.27,0.27 0.64,0.42 1.02,0.42l66.81,0c0.38,0 0.74,-0.15 1.01,-0.42c0.27,-0.27 0.43,-0.64 0.43,-1.02l0,-66.76c0,-0.38 -0.16,-0.74 -0.43,-1.01c-0.27,-0.27 -0.63,-0.43 -1.01,-0.43l-66.81,0z" fill="#CCCCCC" id="svg_8" />
                <path d="m204.93,209.46l-102.46,0l0,0.96l102.46,0l0,-0.96z" fill="#CCCCCC" id="svg_9" />
                <path d="m204.93,241.8l-102.46,0l0,0.96l102.46,0l0,-0.96z" fill="#CCCCCC" id="svg_11" />
                <path d="m105.7,235.81c1.79,0 3.24,-1.45 3.24,-3.23c0,-1.79 -1.45,-3.24 -3.24,-3.24c-1.78,0 -3.23,1.45 -3.23,3.24c0,1.78 1.45,3.23 3.23,3.23z" fill="#ff0000" id="svg_12" transform="matrix(1 0 0 1 0 0)" />
                <path d="m203.06,278.62l-32.38,0c-0.56,0 -1.1,-0.23 -1.49,-0.62c-0.4,-0.4 -0.62,-0.93 -0.62,-1.49l0,-11.34c0,-0.56 0.22,-1.1 0.62,-1.49c0.39,-0.4 0.93,-0.62 1.49,-0.62l32.38,0c0.56,0 1.1,0.22 1.49,0.62c0.4,0.39 0.62,0.93 0.62,1.49l0,11.34c0,0.56 -0.22,1.09 -0.62,1.49c-0.39,0.39 -0.93,0.62 -1.49,0.62z" fill="#ff0000" id="svg_13" />
                <path d="m116.26,203.48c1.79,0 3.24,-1.45 3.24,-3.24c0,-1.78 -1.45,-3.23 -3.24,-3.23c-1.78,0 -3.23,1.45 -3.23,3.23c0,1.79 1.45,3.24 3.23,3.24z" fill="#ff0000" id="svg_14" />
                <path d="m126.82,203.48c1.78,0 3.23,-1.45 3.23,-3.24c0,-1.78 -1.45,-3.23 -3.23,-3.23c-1.79,0 -3.24,1.45 -3.24,3.23c0,1.79 1.45,3.24 3.24,3.24z" fill="#ff0000" id="svg_15" />
                <path d="m116.26,235.81c1.79,0 3.24,-1.45 3.24,-3.23c0,-1.79 -1.45,-3.24 -3.24,-3.24c-1.78,0 -3.23,1.45 -3.23,3.24c0,1.78 1.45,3.23 3.23,3.23z" fill="#ff0000" id="svg_16" transform="matrix(1 0 0 1 0 0)" />
                <path d="m126.82,235.81c1.78,0 3.23,-1.45 3.23,-3.23c0,-1.79 -1.45,-3.24 -3.23,-3.24c-1.79,0 -3.24,1.45 -3.24,3.24c0,1.78 1.45,3.23 3.24,3.23z" fill="#ff0000" id="svg_17" transform="matrix(1 0 0 1 0 0)" />
                <path d="m161.24,134.68c6.36,0 11.52,-5.15 11.52,-11.51c0,-6.36 -5.16,-11.51 -11.52,-11.51c-6.36,0 -11.51,5.15 -11.51,11.51c0,6.36 5.15,11.51 11.51,11.51z" fill="#FFB8B8" id="svg_23" />
                <path d="m171.57,126.21c-1.44,-1.14 -3.4,0.94 -3.4,0.94l-1.14,-10.32c0,0 -7.18,0.86 -11.77,-0.29c-4.59,-1.14 -5.31,4.16 -5.31,4.16c-0.23,-2.14 -0.28,-4.3 -0.14,-6.45c0.29,-2.58 4.02,-5.16 10.62,-6.88c6.6,-1.72 10.04,5.73 10.04,5.73c4.59,2.3 2.53,14.26 1.1,13.11z" fill="#1C2434" id="svg_28" />
                <path d="m107.5,203.24c1.78,0 3.23,-1.45 3.23,-3.24c0,-1.78 -1.45,-3.23 -3.23,-3.23c-1.79,0 -3.24,1.45 -3.24,3.23c0,1.79 1.45,3.24 3.24,3.24z" fill="#ff0000" id="svg_29" />

              </svg>
            </span>
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <span className="mb-1.5 block font-medium">Unidad de Modernización de la Gestión</span>
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Process Doc
            </h2>

            <form method='POST' onSubmit={ onSubmit }>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    { ...register( 'email',
                      {
                        pattern: {
                          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Ingrese un email válido",
                        }

                      }
                    ) }
                  />
                  {
                    errors.email && (
                      <span className="text-red-500">{ errors.email.message }</span>
                    )
                  }

                  <span className="absolute right-4 top-4">
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M19.2516 3.30005H2.75156C1.58281 3.30005 0.585938 4.26255 0.585938 5.46567V16.6032C0.585938 17.7719 1.54844 18.7688 2.75156 18.7688H19.2516C20.4203 18.7688 21.4172 17.8063 21.4172 16.6032V5.4313C21.4172 4.26255 20.4203 3.30005 19.2516 3.30005ZM19.2516 4.84692C19.2859 4.84692 19.3203 4.84692 19.3547 4.84692L11.0016 10.2094L2.64844 4.84692C2.68281 4.84692 2.71719 4.84692 2.75156 4.84692H19.2516ZM19.2516 17.1532H2.75156C2.40781 17.1532 2.13281 16.8782 2.13281 16.5344V6.35942L10.1766 11.5157C10.4172 11.6875 10.6922 11.7563 10.9672 11.7563C11.2422 11.7563 11.5172 11.6875 11.7578 11.5157L19.8016 6.35942V16.5688C19.8703 16.9125 19.5953 17.1532 19.2516 17.1532Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-2.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="6+ Characters, 1 Capital letter"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    { ...register( 'password', {
                      required: {
                        value: true,
                        message: 'El password es requerido'
                      },
                      minLength: {
                        value: 6,
                        message: 'Mínimo 6 caracteres'
                      },
                      pattern: {
                        value: /(?=.*[A-Z])/,
                        message: 'Debe contener al menos una letra mayúscula'
                      }
                    } ) }
                  />

                  {
                    errors.password && (
                      <span className="text-red-500">{ errors.password.message }</span>
                    )
                  }
                  {
                    errorMessage && (
                      <span className="text-red-500">{ errorMessage }</span>
                    )
                  }

                  <span className="absolute right-4 top-4">
                    <svg
                      className="fill-current"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.5">
                        <path
                          d="M16.1547 6.80626V5.91251C16.1547 3.16251 14.0922 0.825009 11.4797 0.618759C10.0359 0.481259 8.59219 0.996884 7.52656 1.95938C6.46094 2.92188 5.84219 4.29688 5.84219 5.70626V6.80626C3.84844 7.18438 2.33594 8.93751 2.33594 11.0688V17.2906C2.33594 19.5594 4.19219 21.3813 6.42656 21.3813H15.5016C17.7703 21.3813 19.6266 19.525 19.6266 17.2563V11C19.6609 8.93751 18.1484 7.21876 16.1547 6.80626ZM8.55781 3.09376C9.31406 2.40626 10.3109 2.06251 11.3422 2.16563C13.1641 2.33751 14.6078 3.98751 14.6078 5.91251V6.70313H7.38906V5.67188C7.38906 4.70938 7.80156 3.78126 8.55781 3.09376ZM18.1141 17.2906C18.1141 18.7 16.9453 19.8688 15.5359 19.8688H6.46094C5.05156 19.8688 3.91719 18.7344 3.91719 17.325V11.0688C3.91719 9.52189 5.15469 8.28438 6.70156 8.28438H15.2953C16.8422 8.28438 18.1141 9.52188 18.1141 11V17.2906Z"
                          fill=""
                        />
                        <path
                          d="M10.9977 11.8594C10.5852 11.8594 10.207 12.2031 10.207 12.65V16.2594C10.207 16.6719 10.5508 17.05 10.9977 17.05C11.4102 17.05 11.7883 16.7063 11.7883 16.2594V12.6156C11.7883 12.2031 11.4102 11.8594 10.9977 11.8594Z"
                          fill=""
                        />
                      </g>
                    </svg>
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <button disabled={ isPending } type='submit' className="button-primario">Enviar </button>

              </div>

              <button className="button-secundario">

                Sign in with Google
              </button>

              <div className="mt-6 text-center">
                <p>
                  ¿No tienes una cuenta?{ " " }
                  <Link href="/auth/signup" className="text-primary">
                    Sign Up
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  );

};
