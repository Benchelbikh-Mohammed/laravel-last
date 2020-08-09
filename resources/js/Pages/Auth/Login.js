import React from "react";
import { Formik, useField, Form } from "formik";
import * as Yup from "yup";
import {
    Paper,
    Box,
    TextField,
    Container,
    Typography,
    Button,
    Checkbox,
    FormControlLabel,
    CircularProgress
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Inertia } from "@inertiajs/inertia";
import logo from "./logo.png";
import login from "./login.svg";
import wave from "./wave.svg";

const Login = () => {
    const { root, section } = useStyles();

    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                width="100%"
            >
                <Paper variant="elevation" title="welcome">
                    <Box p={4} className={section}>
                        <Typography
                            style={{ marginBottom: 40 }}
                            align="center"
                            variant="h3"
                            gutterBottom
                        >
                            <img
                                style={{ height: 90, width: 150 }}
                                src={logo}
                                alt="Logo"
                            />
                        </Typography>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                                remember: false
                            }}
                            validationSchema={validationSchema}
                            onSubmit={values => {
                                Inertia.post("/login", values).then(res => {
                                    console.log(res);
                                });
                            }}
                        >
                            {({ values: { isSubmitting } }) => (
                                <Form
                                    className={root}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <Input
                                        name="email"
                                        placeholder="Email"
                                        label="email"
                                        type="email"
                                    />
                                    <Input
                                        name="password"
                                        placeholder="Enter your password"
                                        label="password"
                                        type="password"
                                    />
                                    <Input
                                        type="checkbox"
                                        label="remember me"
                                        name="remember"
                                    />
                                    <Button
                                        variant="contained"
                                        style={{ marginTop: 10 }}
                                        type="submit"
                                        color="primary"
                                        size="large"
                                        fullWidth
                                        startIcon={
                                            isSubmitting && (
                                                <CircularProgress color="inherit" />
                                            )
                                        }
                                    >
                                        Log In
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

const Input = ({ type, label, ...props }) => {
    const [field, meta] = useField(props);

    return type !== "checkbox" ? (
        <TextField
            error={Boolean(meta.touched && meta.error)}
            helperText={meta.touched && meta.error}
            required
            variant="outlined"
            label={label}
            type={type}
            {...field}
            {...props}
        />
    ) : (
        <FormControlLabel
            control={
                <Checkbox
                    checked={field.value}
                    {...field}
                    color="primary"
                    {...props}
                />
            }
            label={label}
        />
    );
};

const validationSchema = Yup.object({
    email: Yup.string()
        .required("Required")
        .email("must be a valid email"),
    password: Yup.string().required("Required")
});

const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            marginBottom: theme.spacing(2),
            width: "100%"
        }
    },
    section: {
        margin: theme.spacing(2, 2)
    }
}));

export default Login;
