import React from "react";
import { Formik, useField, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { Inertia } from "@inertiajs/inertia";

const Input = ({ type, label, ...props }) => {
    const [field, meta] = useField(props);

    return type !== "checkbox" ? (
        <TextField
            error={Boolean(meta.touched && meta.error)}
            helperText={meta.touched && meta.error}
            required
            variant="standard"
            label={label}
            {...field}
            {...props}
        />
    ) : (
        <Checkbox
            color="primary"
            value={meta.value}
            label={label}
            labelPlacement="end"
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
    }
}));

const Login = () => {
    const { root } = useStyles();

    return (
        <Container maxWidth="sm" style={{ marginTop: 50 }}>
            <Paper>
                <Box p={8}>
                    <Typography align="center" variant="h4" gutterBottom>
                        Login
                    </Typography>
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        validationSchema={validationSchema}
                        onSubmit={values => {
                            Inertia.post("/login", {
                                ...values,
                                remember: false
                            }).then(res => {
                                console.log(res);
                            });
                        }}
                    >
                        <Form className={root} noValidate autoComplete="off">
                            <Input
                                name="email"
                                placeholder="Enter your email"
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
                                name="checkbox"
                                label="remember me"
                                type="checkbox"
                            />
                            <Button
                                variant="contained"
                                style={{ marginTop: 10 }}
                                type="submit"
                                color="primary"
                            >
                                login
                            </Button>
                        </Form>
                    </Formik>
                </Box>
            </Paper>
        </Container>
    );
};

export default Login;
