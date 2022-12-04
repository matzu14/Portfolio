import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material";

function HomepageCard({ site }) {
	return (
		<Card
			sx={{
				height: "100%",
				aspectRatio: "1/1",
				"& .Mui-disabled": {
					backgroundColor: "black",
					color: "gray",
				},
			}}
		>
			<CardActionArea
				sx={{
					width: "100%",
					height: "100%",
					display: "grid",
				}}
				component={Link}
				to={site.url}
				disabled={site.disabled}
			>
				{site.disabled && (
					<Typography sx={{ color: "White", ml: 1, position: "absolute", top: 0 }}>
						*Coming soon!!
					</Typography>
				)}
				<Typography>{site.name}</Typography>
				{site.img ? <CardMedia src={site.img}></CardMedia> : null}
			</CardActionArea>
		</Card>
	);
}

export default HomepageCard;
