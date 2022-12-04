import React, { useEffect } from "react";

import Footer from "../footer";

import { Link as RouterLink } from "react-router-dom";

import Link from "@mui/material/Link";
import Fab from "@mui/material/Fab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import Avatar from "@mui/material/Avatar";

import DmoCrd from "./Card";

function SmplCrd() {
	React.useEffect(() => {
		fetch(url + tags)
			.then((response) => response.json())
			.then((data) => {
				setPosts(data.posts);
				console.log(data.posts);
			});
	}, []);

	const [posts, setPosts] = React.useState([]);

	const url = "https://e621.net/posts.json?tags=";
	let tags,
		tag = "";
	switch (new Date().getDay()) {
		case 0:
			tags = "diane_foxington+order%3Afavcount+rating:s&limit=30";
			tag = "Diane Foxington";
			break;
		case 1:
			tags = "krystal+order%3Afavcount+rating:s&limit=30";
			tag = "Krystal";
			break;
		case 2:
			tags = "renamon+order%3Afavcount+rating:s&limit=30";
			tag = "Renamon";
			break;
		case 3:
			tags = "rolo_stuff+order%3Afavcount+rating:s&limit=30";
			tag = "Rolo stuff";
			break;
		case 4:
			tags = "skeleion+order%3Afavcount+-rating:e&limit=30";
			tag = "Skeleion";
			break;
		case 5:
			tags = "loona_(helluva_boss)+order%3Afavcount+rating:s&limit=30";
			tag = "Loona";
			break;
		case 6:
			tags = "ralsei+order%3Afavcount+rating:s&limit=30";
			tag = "Ralsei";
	}

	return (
		<Paper
			sx={{
				background: "linear-gradient(0deg, #4d2c62 10%, #f63b99 90%)",
				minHeight: "100vh",
				maxHeight: "fit-content",
				display: "grid",
			}}
		>
			<Fab
				sx={{ position: "absolute", top: 10, left: 10 }}
				component={RouterLink}
				to="/home"
				color="primary"
				size="small"
			>
				<ArrowBackIcon />
			</Fab>
			<Box
				sx={{
					display: "grid",
					justifyContent: "center",
					alignContent: "center",
					width: "100%",
					height: "15vh",
					backgroundColor: "#4d2c62",
					backgroundImage:
						"url(https://e621.net/packs/static/bbf4af533456131bea3c.png)",
					animation: "loadingAnimation 15s linear infinite",

					// position: "fixed",
					top: "0",

					"@keyframes loadingAnimation": {
						"0%": {
							backgroundPosition: "-100% -100%",
						},

						"50%": {
							backgroundPosition: "0% 0%",
						},

						"100%": {
							backgroundPosition: "100% 100%",
						},
					},
				}}
				id="header"
			>
				<Typography variant="h3">
					Tag del dia:{" "}
					<Link target={"_blank"} href={"https://e621.net/posts?tags=" + tags}>
						{tag}
					</Link>
				</Typography>
			</Box>
			<Grid
				sx={{
					justifyContent: "center",
					alignItems: "stretch",
					width: "95%",
					margin: "0 auto",
				}}
				my={1}
				container
				spacing={1}
			>
				{posts.map((post) => (
					<Grid key={post.id} item xs={4} sx={{ display: "flex" }}>
						<DmoCrd props={{ post, tag }} />
					</Grid>
				))}
			</Grid>
			<Footer />
		</Paper>
	);
}

export default SmplCrd;
