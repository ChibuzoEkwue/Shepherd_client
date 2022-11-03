import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Head from "../components/Head";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Copyright = (props) => {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			{"Copyright © "}
			<Link color="inherit" to="/">
				Shepherd
			</Link>{" "}
			{new Date().getFullYear()}
			{"."}
		</Typography>
	);
};

const SignUp = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		console.log({
			email: data.get("email"),
			password: data.get("password"),
		});
	};

	return (
		<>
			<Head>
				<title>Create account - Shepherd</title>
			</Head>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Create Account
					</Typography>
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="username"
							label="User Name"
							name="username"
							autoComplete="username"
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="firstName"
							label="First Name"
							name="firstName"
							autoComplete="firstName"
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="lastName"
							label="Last Name"
							name="lastName"
							autoComplete="lastName"
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
						/>
						<FormControl fullWidth>
							<InputLabel id="sex">Sex</InputLabel>
							<Select
								required
								labelId="sex"
								id="sex"
								// value={}
								label="Sex"
								// onChange={}
							>
								<MenuItem value={"male"}>Male</MenuItem>
								<MenuItem value={"female"}>Female</MenuItem>
							</Select>
						</FormControl>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Create Account
						</Button>
						<Grid container>
							<Grid item>
								<Link to="/login" variant="body2">
									{"Have an account Login"}
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
				<Copyright sx={{ mt: 8, mb: 4 }} />
			</Container>
		</>
	);
};

export default SignUp;
