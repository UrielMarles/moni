/* eslint-disable */
"use client";

import { TextField, Button, Box, Typography, Link } from "@mui/material";
import { useForm } from "react-hook-form";
// import Link from "next/link";

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log("Datos enviados:", data);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "300px",
                margin: "auto",
                padding: 3,
                boxShadow: 3,
                borderRadius: 2
            }}
        >
            <Typography variant="h5" textAlign="center">Iniciar Sesión</Typography>

            {/* Campo de Email */}
            <TextField
                label="Email"
                type="email"
                {...register("email", { required: "El email es obligatorio" })}
                error={!!errors.email}
                fullWidth
            />

            {/* Campo de Contraseña */}
            <TextField
                label="Contraseña"
                type="password"
                {...register("password", { required: "La contraseña es obligatoria" })}
                error={!!errors.password}
                fullWidth
            />

            {/* Botón de Enviar */}
            <Button type="submit" variant="contained" color="primary" fullWidth>Iniciar Sesión</Button>

            {/* Si no esta registrado */}
            <Link href="../registro">Registrarse</Link>
        </Box>
    );
}
