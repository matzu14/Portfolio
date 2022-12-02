import React from "react";

import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

//! MUI IMPORTS
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const Background = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	textAlign: "center",
	color: theme.palette.text.secondary,
	padding: theme.spacing(2),
}));

function AddSites({ setOpen }) {
	const [name, setName] = React.useState("");
	const [url, setUrl] = React.useState("");
	const [img, setImg] = React.useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		await addDoc(collection(db, "Sitios"), {
			name,
			url,
			img,
		});

		setName("");
		setUrl("");
		setImg("");

		setOpen(false);
	};

	return (
		<Background>
			<FormControl onSubmit={handleSubmit} component={"form"}>
				<Grid container spacing={1}>
					<Grid item xs>
						<TextField
							label="Name"
							variant="filled"
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
					</Grid>
					<Grid item xs>
						<TextField
							label="Url"
							variant="filled"
							value={url}
							onChange={(e) => setUrl(e.target.value)}
						/>
					</Grid>
					<Grid item xs>
						<TextField
							label="Img"
							variant="filled"
							value={img}
							onChange={(e) => setImg(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button type={"submit"} variant={"contained"}>
							UPDATE
						</Button>
					</Grid>
				</Grid>
			</FormControl>
		</Background>
	);
}

export default AddSites;
