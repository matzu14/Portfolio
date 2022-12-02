import React from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

import AddSites from "../GenericForm";

import HomepageCard from "./card";

//! MUI IMPORTS
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { Avatar, Grid, styled } from "@mui/material";
import { height } from "@mui/system";

const Background = styled(Box)(({ theme }) => ({
	...theme.typography.body2,
	backgroundColor: theme.palette.background.paper,
	textAlign: "center",
	color: theme.palette.text.secondary,
	minHeight: "100vh",
	display: "flex",
	flexDirection: "column",
}));

const FooterHomepage = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	display: "flex",
	backgroundColor: theme.palette.background.paper,
	textAlign: "center",
	color: theme.palette.text.secondary,
	margin: "0 auto",
	marginTop: "auto",
	marginBottom: theme.spacing(1),
	minHeight: "10vh",
	maxHeight: "10vh",
	width: "100%",
	alignItems: "center",
	justifyContent: "center",
}));

const HeaderHomepage = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	display: "flex",
	backgroundColor: theme.palette.background.paper,
	textAlign: "center",
	color: theme.palette.text.secondary,
	margin: "0 auto",
	marginTop: theme.spacing(1),
	marginBottom: theme.spacing(1),
	position: "sticky",
	top: 0,
	width: "100%",
	height: "10vh",
	alignItems: "center",
	justifyContent: "center",
}));

function Home() {
	React.useEffect(() => {
		const fetchSites = async () => {
			const tempSites = [];
			const q = await getDocs(collection(db, "Sitios"));
			q.forEach((doc) => {
				tempSites.push(doc.data());
			});
			setSites(tempSites);
		};
		fetchSites();
	}, []);

	const [sites, setSites] = React.useState([]);

	const [open, setOpen] = React.useState(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	return (
		<Background>
			<Dialog onClose={handleClose} open={open}>
				<AddSites setOpen={setOpen} />
			</Dialog>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
					width: "95%",
					margin: "0 auto",
				}}
			>
				<HeaderHomepage>
					<Typography variant="h4">
						Mi pequeña aventura en el mundo del desarrollo web
					</Typography>
					<Avatar
						variant="square"
						sx={{
							ml: 1,
						}}
						src={
							"https://preview.redd.it/j7lkd5d5c9591.png?width=1300&format=png&auto=webp&s=57318da9a0fd90c6ba3e97dea69523e77d4ee39f"
						}
					></Avatar>
				</HeaderHomepage>
				<Box
					sx={{
						display: "flex",
					}}
				>
					<Grid container spacing={1}>
						{Object.entries(sites)
							.sort((a, b) => a[1].siteIndex - b[1].siteIndex)
							.map((site) => (
								<Grid item xs>
									<HomepageCard key={site[1].url} site={site[1]} />
								</Grid>
							))}
						<Grid item xs>
							<Card sx={{ height: "100%" }}>
								<CardActionArea
									sx={{ width: "100%", height: "100%" }}
									href={"https://matzu14.github.io/gyst/"}
									target={"_blank"}
								>
									<CardContent>
										<Typography>GYST</Typography>
									</CardContent>

									{/* {site.img ? <CardMedia src={site.img}></CardMedia> : null} */}
								</CardActionArea>
							</Card>
						</Grid>
					</Grid>
				</Box>

				{/* <Button
					sx={{
						mt: 1,
					}}
					variant="contained"
					onClick={handleClickOpen}
				>
					Super Secret Settings
				</Button> */}
				<FooterHomepage>
					<Typography variant="h4"> Work in progress </Typography>
					<Avatar
						sx={{ height: "100%" }}
						variant="square"
						src={
							"https://static1.e621.net/data/b4/bb/b4bb26f5eeba7b6481458e117fed8ad5.gif"
						}
					/>
				</FooterHomepage>
			</Box>
		</Background>
	);
}

export default Home;
