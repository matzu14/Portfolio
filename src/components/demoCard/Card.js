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
	textAlign: "center",
	backgroundColor: theme.palette.background,
	color: theme.palette.text.secondary,
	placeSelf: "center",
	flexDirection: "column",
	boxSizing: "content-box",
}));
const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});
function DmoCrd({ props }) {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<>
			<CardContainer>
				<CardHeader
					avatar={
						<Avatar
							sx={{
								height: "60px",
								width: "60px",
								border: "3px solid white",
							}}
							src={props.preview.url}
						/>
					}
					title={props.tags.artist}
					subheader={props.tags.character}
					sx={{
						"& .MuiCardHeader-content": {
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
						},
					}}
				/>
				<Box
					sx={{
						display: "grid",
						alignItems: "center",
						alignContent: "center",
						backgroundImage: "url(" + props.sample.url + ")",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "100% 100%",
					}}
				>
					<CardMedia
						component={"img"}
						src={props.sample.url}
						alt=""
						sx={{
							objectFit: "scale-down",
							backdropFilter: "blur(5px)",
							minHeight: "400px",
							maxHeight: "800px",
						}}
					/>
				</Box>
				<CardContent>
					<Typography textAlign={"start"} gutterBottom>
						{props.tags.character} by{" "}
						<Link href={props.sources[0]} target="_blank">
							{props.tags.artist}
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
						<Link target={"_blank"} href={"https://e621.net/posts/" + props.id}>
							See post in e621.net
						</Link>
						<Link
							onClick={handleClickOpen}
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
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
				sx={{
					"& .MuiDialog-container": {
						width: "100%",
					},
					"& .MuiDialog-paper": {
						padding: 4,
						width: "100%",
						maxWidth: "100%",
					},
				}}
			>
				<Typography>
					id: <br /> &#123;
					<br /> &nbsp;&nbsp;&nbsp;&nbsp;{props.id} <br />
					&#125;,
					<br />
					File:
					<br />
					&#123; <br />
					&nbsp;&nbsp;&nbsp;&nbsp;ext: {props.file.ext} <br />
					&nbsp;&nbsp;&nbsp;&nbsp;md5: {props.file.md5} <br />
					&nbsp;&nbsp;&nbsp;&nbsp;width: {props.file.width} <br />
					&nbsp;&nbsp;&nbsp;&nbsp;height: {props.file.height} <br />
					&nbsp;&nbsp;&nbsp;&nbsp;url:{" "}
					<Link href={props.file.url} target={"_blank"}>
						{props.file.url}
					</Link>{" "}
					<br />
					&#125;,
					<br /> Sample:
					<br /> &#123; <br />
					&nbsp;&nbsp;&nbsp;&nbsp;width: {props.sample.width} <br />
					&nbsp;&nbsp;&nbsp;&nbsp;height: {props.sample.height} <br />
					&nbsp;&nbsp;&nbsp;&nbsp;url:{" "}
					<Link href={props.sample.url} target={"_blank"}>
						{props.sample.url}
					</Link>{" "}
					<br />
					&#125;,
					<br /> Preview:
					<br /> &#123; <br />
					&nbsp;&nbsp;&nbsp;&nbsp;width: {props.preview.width} <br />
					&nbsp;&nbsp;&nbsp;&nbsp;height: {props.preview.height} <br />
					&nbsp;&nbsp;&nbsp;&nbsp;url:{" "}
					<Link href={props.preview.url} target={"_blank"}>
						{props.preview.url}
					</Link>{" "}
					<br />
					&#125;,
					<br />
					Source(s): <br />
					&#123;
					<br />
					{props.sources.map((source) => (
						<>
							&nbsp;&nbsp;&nbsp;&nbsp;
							<Link href={source} target={"_blank"}>
								{source}
							</Link>{" "}
							<br />
						</>
					))}
					&#125;
					{console.log(props.alternates)}
				</Typography>
			</Dialog>
		</>
	);
}

export default DmoCrd;
