import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

function HomepageCard({ site }) {
	return (
		<Card sx={{ height: "100%" }}>
			<CardActionArea
				sx={{ width: "100%", height: "100%" }}
				component={Link}
				to={site.url}
			>
				<CardContent>
					<Typography>{site.name}</Typography>
				</CardContent>

				{site.img ? <CardMedia src={site.img}></CardMedia> : null}
			</CardActionArea>
		</Card>
	);
}

export default HomepageCard;
