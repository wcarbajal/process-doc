import React from "react";

import { Metadata } from "next";


import { } from "react-hook-form";

import { FormSignin } from './ui/FormSignin';

export const metadata: Metadata = {
	title: "Inicio de sessión - Process Doc",
	description: "Acceso a plataforma de gestión de la documentación",
};

const SignIn: React.FC = () => {
	

	return (
		<FormSignin />
	);
};

export default SignIn;
