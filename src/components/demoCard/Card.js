import React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
	CardActions,
	CardContent,
	CardMedia,
	Link,
	styled,
	Typography,
	Box,
	CardActionArea,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
const CardContainer = styled(Card)(({ theme }) => ({
	...theme.typography.body2,
	display: "flex",
	backgroundColor: theme.palette.background,
	color: theme.palette.text.secondary,
	flexDirection: "column",
	maxHeight: "100%",
	width: "100%",
	"& 	.MuiCardMedia-media": { width: "100%" },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
const TransitionCard = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="down" ref={ref} {...props} />;
});

function DmoCrd({ props }) {
	const [openJsonData, setOpenJsonData] = React.useState(false);
	const handleJsonOpen = () => {
		setOpenJsonData(true);
	};
	const handleJsonClose = () => {
		setOpenJsonData(false);
	};

	const [openMedia, setOpenMedia] = React.useState(false);
	const handleOpenMedia = () => {
		setOpenMedia(true);
	};
	const handleCloseMedia = () => {
		setOpenMedia(false);
	};

	return (
		<>
			<CardContainer>
				<CardHeader
					avatar={
						<Avatar
							sx={{
								height: "40px",
								width: "40px",
							}}
							src={props.post.preview.url}
						/>
					}
					title={props.post.tags.artist}
					subheader={props.post.tags.character}
					sx={{
						"& .MuiCardHeader-content": {
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
						},
					}}
				/>
				<CardContent sx={{ height: "100%", padding: 0 }}>
					<CardActionArea
						sx={{
							display: "grid",
							backgroundImage: "url(" + props.post.sample.url + ")",
							backgroundRepeat: "no-repeat",
							backgroundPosition: "center",
							backgroundSize: "cover",
							minHeight: "100%",
						}}
						onClick={handleOpenMedia}
					>
						<CardMedia
							component={"img" || "video"}
							src={props.post.sample.url}
							alt=""
							sx={{
								objectFit: "scale-down",
								height: "100%",
								backdropFilter: "blur(10px)",
							}}
							autoPlay
							loop
							muted
						/>
					</CardActionArea>
				</CardContent>
				<CardContent>
					<Typography textAlign={"start"} gutterBottom>
						{props.post.tags.character} by{" "}
						<Link href={props.post.sources[0]} target="_blank">
							{props.post.tags.artist}
						</Link>
					</Typography>
					<Typography
						sx={{
							textAlign: "justify",
							whiteSpace: "break-spaces",
							wordWrap: "break-word",
						}}
					>
						{props.description}
					</Typography>
				</CardContent>
				<CardActions
					sx={{
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Stack direction={"row"} spacing={1} pl={1}>
						<Link
							target={"_blank"}
							href={"https://e621.net/posts/" + props.post.id}
						>
							See post in e621.net
						</Link>
						<Link
							onClick={handleJsonOpen}
							sx={{
								":hover": {
									cursor: "pointer",
								},
							}}
						>
							see JSON data
						</Link>
					</Stack>
					<Stack direction={"row"} spacing={1} pr={1}>
						<FavoriteIcon />
						<ShareIcon />
					</Stack>
				</CardActions>
			</CardContainer>
			<Dialog
				open={openJsonData}
				TransitionComponent={Transition}
				aria-describedby="alert-dialog-slide-description"
				sx={{
					"& .MuiDialog-container": {
						width: "100%",
					},
					"& .MuiDialog-paper": {
						maxWidth: "45vw",
						maxHeight: "80vh",
					},
					backdropFilter: "blur(10px)",
				}}
				scroll={"paper"}
			>
				<DialogTitle>{props.tag}</DialogTitle>
				<DialogContent dividers>
					<DialogContentText sx={{ whiteSpace: "break-spaces" }}>
						<Typography sx={{ wordBreak: "break-all" }}>
							{JSON.stringify(props, null, 4)}
						</Typography>
						{/* &#123;
					<ContentPadding>
					<Typography sx={{ maxWidth: "100%", wordBreak: "break-all" }}>
					id: &#123;
					<br />
					<ContentPadding>{props.id}</ContentPadding> &#125;,
					<br />
					File: &#123; <br />
					<ContentPadding>
					ext: {props.file.ext} <br />
					md5: {props.file.md5} <br />
					width: {props.file.width} <br />
					height: {props.file.height} <br />
					url:{" "}
					<Link href={props.file.url} target={"_blank"}>
					{props.file.url}
					</Link>{" "}
					</ContentPadding>
					&#125;,
					<br /> Sample: &#123; <br />
					<ContentPadding>
					width: {props.sample.width} <br />
					height: {props.sample.height} <br />
					url:{" "}
					<Link href={props.sample.url} target={"_blank"}>
					{props.sample.url}
					</Link>
					</ContentPadding>
					&#125;,
					<br /> Preview: &#123; <br />
					<ContentPadding>
					width: {props.preview.width} <br />
					height: {props.preview.height} <br />
					url:
								<Link href={props.preview.url} target={"_blank"}>
								{props.preview.url}
								</Link>{" "}
								</ContentPadding>
								&#125;,
								<br />
								Source(s): &#123;
								<ContentPadding>
								{props.sources.map((source) => (
									<>
									<Link href={source} target={"_blank"}>
									{source}
									</Link>{" "}
									</>
									))}
									</ContentPadding>
									&#125;
									</Typography>
									</ContentPadding>
								&#125; */}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleJsonClose}>Accept</Button>
				</DialogActions>
			</Dialog>
			<Dialog
				open={openMedia}
				onClose={handleCloseMedia}
				TransitionComponent={TransitionCard}
				aria-describedby="alert-dialog-slide-description"
				sx={{
					"& .MuiDialog-paper": {
						margin: 0,
					},
					backdropFilter: "blur(10px)",
				}}
			>
				<Card>
					<CardMedia
						component={"img"}
						src={props.post.file.url}
						autoPlay
						loop
						muted
						contols={"disabled"}
					/>
				</Card>
				<CardActions
					sx={{
						backgroundColor: "transparent",
					}}
				>
					<Link
						sx={{
							color: "#fff",
							":hover": { cursor: "pointer" },
						}}
						href={props.post.file.url}
						target={"_blank"}
					>
						Open original
					</Link>
				</CardActions>
			</Dialog>
		</>
	);
}

export default DmoCrd;
